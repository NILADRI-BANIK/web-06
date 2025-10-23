import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Btemplate6.module.scss";
import "./BusinessTemplate6.scss";
import product1 from "./assets/product1.png";
import product2 from "./assets/product2.png";
import product3 from "./assets/product3.png";
import Con4Mobile from "./components/Con4Mobile";
const products = [
	{
		id: 0,
		productName: "Product Name",
		mediaUrl: product1,
		mediaType: "image",
	},
	{
		id: 1,
		productName: "Product Name",
		mediaUrl: product2,
		mediaType: "image",
	},
	{
		id: 2,
		productName: "Product Name",
		mediaUrl: product3,
		mediaType: "image",
	},
	{
		id: 3,
		productName: "Product Name",
		mediaUrl: product1,
		mediaType: "image",
	},
	{
		id: 4,
		productName: "Product Name",
		mediaUrl: product3,
		mediaType: "image",
	},
	{
		id: 5,
		productName: "Product Name",
		mediaUrl: product3,
		mediaType: "image",
	},
	{
		id: 6,
		productName: "Product Name",
		mediaUrl: product3,
		mediaType: "image",
	},
];

function Container4() {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	useEffect(() => {
		function handelResize() {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}
		window.addEventListener("resize", handelResize);
		return () => window.removeEventListener("resize", handelResize);
	}, [width, height]);
	return (
		<div className={styles.Container4}>
			<div className={styles.upper}>
				<h2>Our product</h2>
				<p>view all</p>
			</div>
			{width < height ? (
				<div className={styles.mobileCarousel}>
					<Con4Mobile products={products} />
				</div>
			) : (
				<div className={styles.desktopCarousel} id="BusinessT6Swiper">
					<Swiper
						effect={"coverflow"}
						grabCursor={true}
						centeredSlides={true}
						spaceBetween={20}
						loop={true}
						slidesPerView={3}
						navigation={true}
						modules={[Navigation, Autoplay, EffectCoverflow]}
						coverflowEffect={{
							rotate: 0,
							stretch: 100,
							depth: 400,
							modifier: 1.5,
							slideShadows: false,
						}}
						autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: true }}
						className="swiper_container">
						{products?.slice(0, 3).map((data, i) => (
							<SwiperSlide key={i}>
								{data?.mediaType === "video" ? (
									<video src={data?.mediaUrl} className={styles.imageSlider} controls></video>
								) : data?.mediaType === "image" ? (
									<img src={data?.mediaUrl} alt="slide_image" className={styles.imageSlider} />
								) : (
									""
								)}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</div>
	);
}

export default Container4;
