import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import jems from "../assets/business/image/jems.png";
import jennyWill from "../assets/business/image/jennyWill.png";
import profileImage from "../assets/business/image/profileImage.svg";
import styles from "./Btemplate6.module.scss";
import "./BusinessTemplate6.scss";
import Con5Mobile from "./components/Con5Mobile";
import Posts from "./components/Posts";

const posts = [
	{
		id: 0,
		mediaUrl: jennyWill,
		postDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		name: "Jenny Wilson",
		userName: "@JENNYWILL",
		profilePic: profileImage,
	},
	{
		id: 1,
		mediaUrl: jems,
		postDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		name: "Jenny Wilson",
		userName: "@JENNYWILL",
		profilePic: profileImage,
	},
	{
		id: 2,
		mediaUrl: jems,
		postDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		name: "Jenny Wilson",
		userName: "@JENNYWILL",
		profilePic: profileImage,
	},
	{
		id: 3,
		mediaUrl: jennyWill,
		postDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		name: "Jenny Wilson",
		userName: "@JENNYWILL",
		profilePic: profileImage,
	},
];

const items = posts.map((post) => <Posts key={post.id} data={post} />);

const responsive1 = {
	0: { items: 1 },
};

function Container5() {
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

	const paddingRightVW = 40;
	const paddingRightPixel = (width * paddingRightVW) / 100;
	return (
		<div className={styles.Container5}>
			<div className={styles.upper}>
				<h2>Our gallery</h2>
				<p>view all</p>
			</div>
			<div className={styles.carousel} id="carousel4">
				{width < height  ? (
					<Con5Mobile posts={posts} />
				) : (
					<AliceCarousel
						items={items}
						responsive={responsive1}
						autoPlay
						autoPlayInterval={1000}
						animationDuration={1000}
						paddingRight={paddingRightPixel}
						infinite
					/>
				)}
			</div>

			<div className={styles.thankYou}>Thank you ! Visit Again</div>
		</div>
	);
}

export default Container5;
