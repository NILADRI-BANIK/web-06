import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../Btemplate6.module.scss";
import "../BusinessTemplate6.scss";

function Con4Mobile({ products }) {
	return (
		<div id="BusinessT6Swiper">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				spaceBetween={0}
				initialSlide={0}
				loop={true}
				slidesPerView={1.3}
				navigation={true}
				modules={[Navigation, Autoplay, EffectCoverflow]}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 400,
					modifier: 0.88,
					slideShadows: false,
				}}
				autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: true }}
				className="swiper_container1">
				{products?.slice(0, 5).map((data, i) => (
					<SwiperSlide key={i}>
						{data?.mediaType === "video" ? (
							<video src={data?.mediaUrl} className={styles.imageSliderMob} controls></video>
						) : data?.mediaType === "image" ? (
							<img src={data?.mediaUrl} alt="slide_image" className={styles.imageSliderMob} />
						) : (
							""
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Con4Mobile;
