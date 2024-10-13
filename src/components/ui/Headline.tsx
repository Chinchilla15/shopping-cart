import type { HeadlineProps } from "../../types";

const Headline = ({
	title,
	subtitle,
	tagline,
	classes = {},
}: HeadlineProps) => {
	const {
		container: containerClass = "max-w-3xl",
		title: titleClass = "text-3xl md:text-4xl",
		subtitle: subtitleClass = "text-xl",
	} = classes;

	return title || subtitle || tagline ? (
		<div
			className={`md:mx-auto text-center flex flex-col gap-6 ${containerClass}`}
		>
			{tagline && (
				<div className="pt-8">
					<span className="w-24 sm:w-32 h-0 border border-solid border-gray-500 m-1 inline-block "></span>
					<p className="inline-block text-2xl px-2"> {tagline}</p>
					<span className="w-24 sm:w-32 border border-solid border-gray-500 m-1 inline-block"></span>
				</div>
			)}
			{title && (
				<h2 className={`font-bold text-3xl ${titleClass}`}>{title}</h2>
			)}
			{subtitle && <p className={` ${subtitleClass}`}>{subtitle}</p>}
		</div>
	) : null;
};

export default Headline;
