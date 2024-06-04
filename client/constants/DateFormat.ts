// @ts-nocheck
export function formatDateAndTime(timestamp: Date) {
	let date = new Date(timestamp);

	let options = { year: "numeric", month: "long", day: "numeric" };
	let formattedDate = date.toLocaleDateString("en-US", options);

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let ampm = hours >= 12 ? "pm" : "am";
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? "0" + minutes : minutes;
	let formattedTime = hours + ":" + minutes + " " + ampm;

	return { formattedDate, formattedTime };
}
