import type { ComponentType } from "react";
import { motion, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// --------------------------------------------
// Learn more: https://www.framer.com/docs/guides/overrides/
// Flip card component
// --------------------------------------------

type CardProps = {
	image: string;
	description: string;
	width?: string;
	height?: string;
};

export const Card = ({
	image,
	description,
	width = "500px",
	height = "500px",
}: CardProps) => {
	return (
		<div
			className="bg-white p-4 rounded shadow container"
			style={{ width, height }}
		>
			<img src={image} alt={description} className="mb-4" />
			<h3 className="text-lg font-bold">{description}</h3>
		</div>
	);
};

//Spring animation parameters
const spring = {
	type: "spring",
	stiffness: 300,
	damping: 40,
};

export function withClick(Component: any): ComponentType {
	return (props) => {
		const [isFlipped, setIsFlipped] = useState(false);

		const handleClick = () => {
			setIsFlipped((prevState) => !prevState);
		};

		const [rotateXaxis, setRotateXaxis] = useState(0);
		const [rotateYaxis, setRotateYaxis] = useState(0);
		const ref = useRef(null);

		const handleMouseMove = (event: any) => {
			const element = ref.current;
			const elementRect = element.getBoundingClientRect();
			const elementWidth = elementRect.width;
			const elementHeight = elementRect.height;
			const elementCenterX = elementWidth / 2;
			const elementCenterY = elementHeight / 2;
			const mouseX = event.clientY - elementRect.y - elementCenterY;
			const mouseY = event.clientX - elementRect.x - elementCenterX;
			const degreeX = (mouseX / elementWidth) * 20; //The number is the rotation factor
			const degreeY = (mouseY / elementHeight) * 20; //The number is the rotation factor
			setRotateXaxis(degreeX);
			setRotateYaxis(degreeY);
		};

		const handleMouseEnd = () => {
			setRotateXaxis(0);
			setRotateYaxis(0);
		};

		const dx = useSpring(0, spring);
		const dy = useSpring(0, spring);

		useEffect(() => {
			dx.set(-rotateXaxis);
			dy.set(rotateYaxis);
		}, [rotateXaxis, rotateYaxis]);

		return (
			<motion.div
				onClick={handleClick}
				transition={spring}
				style={{
					// perspective: "1200px", Uncomment this line to add perspective and 3d style
					// transformStyle: "preserve-3d",
					width: "500px",
					height: "500px",
				}}
			>
				<motion.div
					ref={ref}
					whileHover={{ scale: 1.1 }} //Change the scale of zooming in when hovering
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseEnd}
					transition={spring}
					style={{
						width: "100%",
						height: "100%",
						rotateX: dx,
						rotateY: dy,
					}}
				>
					<div
						style={{
							// perspective: "1200px",
							// transformStyle: "preserve-3d",
							width: "100%",
							height: "100%",
						}}
					>
						<motion.div
							animate={{ rotateY: isFlipped ? -180 : 0 }}
							transition={spring}
							style={{
								width: "100%",
								height: "100%",
								zIndex: isFlipped ? 0 : 1,
								backfaceVisibility: "hidden",
								position: "absolute",
							}}
						>
							<Component
								{...props}
								variant="Front"
								style={{
									width: "100%",
									height: "100%",
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ rotateY: 180 }}
							animate={{ rotateY: isFlipped ? 0 : 180 }}
							transition={spring}
							style={{
								width: "100%",
								height: "100%",
								zIndex: isFlipped ? 1 : 0,
								backfaceVisibility: "hidden",
								position: "absolute",
							}}
						>
							<Component
								{...props}
								variant="Back"
								style={{
									width: "100%",
									height: "100%",
								}}
							/>
						</motion.div>
					</div>
				</motion.div>
			</motion.div>
		);
	};
}

const ClickableCard = withClick(Card);

export default ClickableCard;
