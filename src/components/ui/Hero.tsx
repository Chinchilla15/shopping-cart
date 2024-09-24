import Button from "./Button";

const Hero = () => {
	return (
		<>
			<div className="bg-bluePrimary text-white py-20">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold">Let there be music.</h1>
					<p className="text-lg">Looking for vinyl? We got you</p>
					<Button content="Shop Now" />
				</div>
			</div>
		</>
	);
};

export default Hero;
