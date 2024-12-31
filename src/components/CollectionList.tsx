import { useEffect, useState } from "react";
import { getCollection } from "../services/apiService";
import type { Collection } from "../types";

const CollectionList = () => {
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
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<>
			<div className="grid gap-4 px-4 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{collection.map((item) => (
					<div key={item.id} className="bg-white p-4 rounded shadow">
						<img
							src={item.basic_information.cover_image}
							alt={item.basic_information.title}
							className="mb-4"
						/>
						<h3 className="text-lg font-bold">
							{item.basic_information.title}
						</h3>
						<p className="text-sm">
							Artist: {item.basic_information.artists[0].name}
						</p>
						<p className="text-sm">
							Year: {item.basic_information.year}
						</p>
						<p className="text-sm">
							Genre: {item.basic_information.genres.join(", ")}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default CollectionList;
