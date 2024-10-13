import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperOptions } from "swiper/types";
import { HeadlineProps } from "../../types";
import Headline from "./Headline";

const SwiperParams: SwiperOptions = {
	modules: [Navigation, Pagination, Autoplay],
	navigation: {
		enabled: true,
	},
	pagination: {
		enabled: true,
		clickable: true,
		dynamicBullets: true,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},

		480: {
			slidesPerView: 2,
			spaceBetween: 20,
		},

		640: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
};

const mockImages = [
	"https://placehold.co/300x200?text=Image+1",
	"https://placehold.co/300x200?text=Image+2",
	"https://placehold.co/300x200?text=Image+3",
	"https://placehold.co/300x200?text=Image+4",
	"https://placehold.co/300x200?text=Image+5",
	"https://placehold.co/300x200?text=Image+6",
	"https://placehold.co/300x200?text=Image+7",
	"https://placehold.co/300x200?text=Image+8",
	"https://placehold.co/300x200?text=Image+9",
];

const Slider = ({ title, subtitle, tagline, classes }: HeadlineProps) => {
	return (
		<div className="w-full px-4 py-8">
			{(title || subtitle || tagline) && (
				<Headline
					title={title}
					subtitle={subtitle}
					tagline={tagline}
					classes={classes}
				/>
			)}
			<Swiper {...SwiperParams} className="h-full w-full">
				{mockImages.map((image, index) => (
					<SwiperSlide
						key={index}
						className="flex justify-center items-center"
					>
						<img
							src={image}
							alt={`Album Cover ${index + 1}`}
							className="object-cover w-full h-full rounded-lg shadow-md"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
