import ServiceCard from "@/components/cards/ServiceCard";

const Services = () => {
	return (
		<>
			<h1 className="head-text">Services</h1>
			<section className="">
				<div className="grid grid-cols-3 max-sm:grid-cols-2 gap-3">
					<ServiceCard name="30 Mins Onboarding" type="Onboarding" price="100" url="/" status={true} />
					<ServiceCard name="30 Mins Onboarding" type="Onboarding" price="100" url="/" status={true} />
					<ServiceCard name="30 Mins Onboarding" type="Onboarding" price="100" url="/" status={true} />
					<ServiceCard name="30 Mins Onboarding" type="Onboarding" price="100" url="/" status={true} />
				</div>
			</section>
		</>
	);
};

export default Services;
