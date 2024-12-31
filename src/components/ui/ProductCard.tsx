import type { ComponentType } from "react";
import { motion, useSpring, MotionValue } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import type { CardProps } from "../../types";

export const Card = ({
	image,
	description,
	width = "100%",
	height = "100%",
	variant,
}: CardProps) => {
	return (
		<div style={{ width, height }} className="w-full h-full">
			{variant === "Front" ? (
				<img
					src={image}
					alt={description}
					className="w-full h-full object-cover"
				/>
			) : (
				<div className="flex items-center justify-center w-full h-full bg-red-800">
					<h3 className="text-lg font-bold text-white">
						{description}
					</h3>
				</div>
			)}
		</div>
	);
};

const spring = {
	type: "spring",
	stiffness: 300,
	damping: 40,
};

export function withClick<T extends CardProps>(
	Component: ComponentType<T>
): ComponentType<T> {
	return (props: T) => {
		const [isFlipped, setIsFlipped] = useState(false);
		const ref = useRef<HTMLDivElement>(null);

		const rotateX = useSpring(0, spring) as MotionValue<number>;
		const rotateY = useSpring(0, spring) as MotionValue<number>;

		const handleClick = () => setIsFlipped((prev) => !prev);

		const handleMouseMove = (event: React.MouseEvent) => {
			const element = ref.current;
			if (element) {
				const { width, height, left, top } =
					element.getBoundingClientRect();
				const mouseX = event.clientX - left - width / 2;
				const mouseY = event.clientY - top - height / 2;
				const rotateXValue = (mouseY / height) * 20;
				const rotateYValue = (mouseX / width) * 20;
				rotateX.set(-rotateXValue);
				rotateY.set(rotateYValue);
			}
		};

		const handleMouseLeave = () => {
			rotateX.set(0);
			rotateY.set(0);
		};

		useEffect(() => {
			const updatePerspective = () => {
				if (ref.current) {
					const { width, height } =
						ref.current.getBoundingClientRect();
					ref.current.style.setProperty(
						"--card-perspective",
						`${Math.max(width, height) * 4}px`
					);
				}
			};

			const resizeObserver = new ResizeObserver(updatePerspective);
			if (ref.current) {
				resizeObserver.observe(ref.current);
			}

			updatePerspective();

			return () => resizeObserver.disconnect();
		}, []);

		return (
			<div
				ref={ref}
				className="relative w-full h-full"
				style={{
					perspective: "var(--card-perspective, 1200px)",
					aspectRatio:
						props.width && props.height
							? `${parseInt(props.width) / parseInt(props.height)}`
							: "auto",
				}}
			>
				<motion.div
					onClick={handleClick}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					className="w-full h-full"
					style={{
						rotateX,
						rotateY,
						transformStyle: "preserve-3d",
					}}
					whileHover={{ scale: 1.05 }}
					transition={spring}
				>
					<motion.div
						className="absolute w-full h-full"
						animate={{ rotateY: isFlipped ? -180 : 0 }}
						transition={spring}
						style={{
							zIndex: isFlipped ? 0 : 1,
							backfaceVisibility: "hidden",
							backgroundColor: "#003049",
						}}
					>
						<Component {...props} variant="Front" />
					</motion.div>
					<motion.div
						className="absolute w-full h-full"
						initial={{ rotateY: 180 }}
						animate={{ rotateY: isFlipped ? 0 : 180 }}
						transition={spring}
						style={{
							zIndex: isFlipped ? 1 : 0,
							backfaceVisibility: "hidden",
							backgroundColor: "#780000",
						}}
					>
						<Component {...props} variant="Back" />
					</motion.div>
				</motion.div>
			</div>
		);
	};
}

const ClickableCard = withClick(Card);

export default ClickableCard;
