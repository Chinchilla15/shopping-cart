import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperOptions } from "swiper/types";

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
};

const mockImages = [
	"https://via.placeholder.com/300x200?text=Image+1",
	"https://via.placeholder.com/300x200?text=Image+2",
	"https://via.placeholder.com/300x200?text=Image+3",
];

const Slider = () => {
	return (
		<>
			<Swiper
				{...SwiperParams}
				centeredSlides={true}
				spaceBetween={50}
				className="h-full w-full"
			>
				{mockImages.map((image) => (
					<SwiperSlide
						key={image}
						className="flex justify-center w-full"
					>
						<img
							src={image}
							alt="Album Cover"
							className=" object-contain"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
