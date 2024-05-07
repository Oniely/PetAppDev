import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
	name: string;
	type: string;
	price: string;
	status: boolean;
	url: string;
}

const ServiceCard = ({ name, type, price, status, url }: Props) => {
	return (
		
		<div className="bg-neutral-300 relative group rounded-xl flex items-end overflow-hidden h-[240px]">
			<div className={`w-4 h-4 absolute top-3 right-3 rounded-full group-hover:animate-pulse ${status ? "bg-green-400" : "bg-yellow-400"}`} />
			
			<Image src='/images/logo.png' alt="image" className="object-cover" fill />
			
			<div className="flex max-lg:flex-col items-center justify-between bg-neutral-400 p-5 flex-1 text-white z-10 gap-3 w-full group-hover:bg-opacity-70 transition-all ease-in">
				<div className="-space-y-1 w-full">
					<p className="group-hover:text-black text-neutral-50 whitespace-nowrap font-medium">{name}</p>
					<p className="group-hover:text-black text-neutral-200 font-light">{type}</p>
				</div>
				<Link href={url} className="max-lg:w-full">
					<Button variant='secondary' className="w-full">Manage</Button>
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard;
