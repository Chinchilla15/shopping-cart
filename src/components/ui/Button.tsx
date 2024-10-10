import { Link } from "react-router-dom";
import type { ButtonProps } from "../../types";

const Button = ({ content, link }: ButtonProps) => {
	return (
		<>
			{link ? (
				<Link to={link}>
					<button
						className="bg-black text-white hover:text-black hover:bg-white text-lg sm:text-xl font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-md transition-colors duration-300"
						title={content}
					>
						{content}
					</button>
				</Link>
			) : (
				<button
					className="bg-black text-white hover:text-black hover:bg-white text-lg sm:text-xl font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-md transition-colors duration-300"
					title={content}
				>
					{content}
				</button>
			)}
		</>
	);
};

export default Button;
