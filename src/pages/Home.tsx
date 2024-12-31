import BentoGrid from "../components/ui/BentoGrid";
import Hero from "../components/ui/Hero";
import Content from "../components/ui/Content";
// import VinylList from "../components/VinylList";
// import CollectionList from "../components/CollectionList";
import ClickableCard from "../components/ui/ProductCard";
import Slider from "../components/ui/Slider";
import ContentImage from "../assets/images/content-image.jpg";

const Home = () => (
	<>
		<Hero />
		<Content
			image={ContentImage}
			content="Welcome to our store! We are passionate about music and dedicated to bringing you the best vinyl records from around the world. Our collection features a wide range of genres and artists, ensuring that there is something for every music lover. Explore our shop and discover the perfect addition to your vinyl collection."
			buttonProps={{ content: "Visit store", link: "/products" }}
		/>
		<Slider
			title="Record avaialble for inmmediate delivery."
			tagline="In Stock"
			classes={{ title: "pb-8" }}
		/>
		<BentoGrid
			title="Explore what we have to offer"
			subtitle="Is this how you use a bento grid? I'm not sure. But it was fun to make!"
			tagline="Explore our shop"
		>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</BentoGrid>
		<ClickableCard
			description="This is the description"
			image={"https://placehold.co/800x200?text=Image+1"}
			variant="Front"
			width="200px"
			height="100px"
		/>
	</>
);

export default Home;
