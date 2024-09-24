import Hero from "../components/ui/Hero";
import BentoGrid from "../components/ui/BentoGrid";
import VinylList from "../components/VinylList";

const Home = () => {
	return (
		<>
			<Hero />
			<BentoGrid>
				<div className="col-span-2 row-span-2 bg-black h-full w-full rounded-lg sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2"></div>
				<div className="col-span-2 row-span-2 bg-red-700 h-full w-full rounded-lg sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-3"></div>
				<div className="col-span-1 row-span-1 bg-green-700 h-48 w-full rounded-lg sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1"></div>
				<div className="col-span-1 row-span-1 bg-blue-700 h-48 w-full rounded-lg sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1"></div>
			</BentoGrid>
			<VinylList />
		</>
	);
};

export default Home;
