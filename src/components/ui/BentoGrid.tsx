type BentoGridProps = {
	children: React.ReactNode;
};

const BentoGrid = ({ children }: BentoGridProps) => {
	return (
		<div className="grid gap-4 px-4 py-6 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-3">
			{children}
		</div>
	);
};

export default BentoGrid;
