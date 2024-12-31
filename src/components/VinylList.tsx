import { useEffect, useState } from "react";
import { getData } from "../services/apiService";
import type { Vinyl } from "../types";

const VinylList = () => {
	const [vinyls, setVinyls] = useState<Vinyl[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const query = "Blonde";

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);
			const data = await getData(query);
			console.log(data);
			if (data.length === 0) {
				setError("No results found");
			} else {
				setVinyls(data);
			}
			setLoading(false);
		};
		fetchData();
	}, [query]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div className="grid gap-4 px-4 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{vinyls.map((vinyl) => (
				<div key={vinyl.id} className="bg-white p-4 rounded shadow">
					<img
						src={vinyl.cover_image}
						alt={vinyl.title}
						className="mb-4"
					/>
					<h3 className="text-lg font-bold">{vinyl.title}</h3>
					{vinyl.year && (
						<p className="text-sm">Year: {vinyl.year}</p>
					)}
					{vinyl.genre && (
						<p className="text-sm">
							Genre:{" "}
							{Array.isArray(vinyl.genre)
								? vinyl.genre.join(", ")
								: vinyl.genre}
						</p>
					)}
				</div>
			))}
		</div>
	);
};

export default VinylList;
