type ButtonProps = {
	content: string;
};

const Button = ({ content }: ButtonProps) => {
	return (
		<>
			<button
				className="bg-black text-white hover:text-black hover:bg-white px-6 py-2 rounded-md transition-colors duration-300"
				title={content}
			>
				{content}
			</button>
		</>
	);
};

export default Button;
