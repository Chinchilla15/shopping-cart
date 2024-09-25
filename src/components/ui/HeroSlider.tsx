import { getCollection, Collection } from "../../services/apiService";
import { useEffect, useState } from "react";

const HeroSlider = () => {
	const [collection, setCollection] = useState<Collection[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);
			const data = await getCollection();
			console.log(data);
			if (data.length === 0) {
				setError("No results found");
			} else {
				setCollection(data);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return <p className="text-center">Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	const firstRow = collection.slice(0, 15);
	const secondRow = collection.slice(15, 30);
	const thirdRow = collection.slice(30);

	const renderRow = (row: Collection[], animateClass: string) => {
		return (
			<div className={`inline-flex ${animateClass} whitespace-nowrap`}>
				{row.concat(row).map((item, index) => (
					<div key={`${item.id}-${index}`} className="w-48 mx-2">
						<img
							src={item.basic_information.cover_image}
							alt={item.basic_information.title}
							className="h-48 w-48 object-cover"
						/>
					</div>
				))}
			</div>
		);
	};

	return (
		<div className="relative w-full overflow-hidden space-y-4">
			<div className="w-full overflow-hidden">
				{renderRow(firstRow, "animate-scroll-slow")}
			</div>
			<div className="w-full overflow-hidden">
				{renderRow(secondRow, "animate-scroll-mid")}
			</div>
			<div className="w-full overflow-hidden">
				{renderRow(thirdRow, "animate-scroll-fast")}
			</div>
		</div>
	);
};

export default HeroSlider;
