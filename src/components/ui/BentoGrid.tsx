import { motion } from "framer-motion";
import { BentoGridProps, MotionDivProps } from "../../types";

const MotionDiv = ({ children, className }: MotionDivProps) => {
	return (
		<motion.div
			whileHover={{
				scale: 1.02,
				transition: { duration: 0.1 },
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
};

const BentoGrid = ({ children }: BentoGridProps) => {
	return (
		<div className="grid gap-4 px-4 py-6 grid-cols-1 auto-rows-fr sm:grid-cols-2 lg:grid-cols-4">
			<MotionDiv className="col-span-1 row-span-1 bg-black rounded-lg sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2 min-h-[200px]">
				{children[0]}
			</MotionDiv>
			<MotionDiv className="col-span-1 row-span-1 bg-red-700 rounded-lg sm:col-span-2 lg:col-span-2 lg:row-span-3 min-h-[200px]">
				{children[1]}
			</MotionDiv>
			<MotionDiv className="col-span-1 row-span-1 bg-green-700 rounded-lg min-h-[200px]">
				{children[2]}
			</MotionDiv>
			<MotionDiv className="col-span-1 row-span-1 bg-blue-700 rounded-lg min-h-[200px]">
				{children[3]}
			</MotionDiv>
		</div>
	);
};

export default BentoGrid;
