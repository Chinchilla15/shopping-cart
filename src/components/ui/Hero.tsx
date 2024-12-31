import Button from "./Button";
import HeroSlider from "./HeroSlider";

const Hero = () => {
	return (
		<div className="relative bg-bluePrimary h-[46rem]">
			<div className="absolute py-14 inset-0 z-0">
				<HeroSlider />
			</div>
			{/* Semi-transparent overlay */}
			<div className="absolute inset-0 bg-bluePrimary opacity-50 z-10"></div>
			{/* Content overlay */}
			<div className="absolute inset-0 z-20 flex items-center justify-center">
				<div className="text-center text-bgWhite px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-extrabold font-custom1 sm:text-5xl md:text-7xl">
						Welcome
					</h2>
					<p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
						Need music? We've got you covered.
					</p>
					<div className="mt-10 sm:flex sm:justify-center">
						<div className="rounded-md shadow">
							<Button content="Shop Now" link="/products" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
