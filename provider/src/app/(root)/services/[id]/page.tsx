const ServiceDetail = ({ params }: { params: { id: string } }) => {
	return (
		<>
			<h1 className="head-text">Service Details</h1>
			<section>Details {params.id}</section>
		</>
	);
};

export default ServiceDetail;
