import Button from "./Button";
import type { ContentProps } from "../../types";

const Content = ({ image, content, buttonProps }: ContentProps) => {
	return (
		<div className="flex flex-col sm:flex-row items-center justify-center p-6 bg-redSecondary">
			<div className="w-full flex justify-center  sm:w-1/2 mb-4 sm:mb-0">
				<img
					src={image}
					alt="Content Image"
					className="w-96 rounded-lg"
				/>
			</div>
			<div className="w-full flex flex-col justify-center sm:w-1/2 sm:pl-6">
				<p className="text-lg sm:text-xl mb-4 text-white">{content}</p>
				<Button {...buttonProps} />
			</div>
		</div>
	);
};

export default Content;
