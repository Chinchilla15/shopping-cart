import { Card, withClick } from "./ProductCard";

type ItemProps = {
	image: string;
	description: string;
	price: number;
	genre: string;
	artist: string;
};

const Item = ({ image, description, price, genre, artist }: ItemProps) => {
	return (
		<div className="">
			<Card image={image} description={description} />
			<div className="flex justify-between mt-4">
				<p className="text-lg font-bold">Price: {price}</p>
				<p className="text-lg font-bold">Genre: {genre}</p>
				<p className="text-lg font-bold">Artist: {artist}</p>
			</div>
		</div>
	);
};

export default Item;
