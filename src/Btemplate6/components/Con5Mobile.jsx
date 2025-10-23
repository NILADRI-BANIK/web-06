import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "../Btemplate6.module.scss";
import "../BusinessTemplate6.scss";
import Posts from "./Posts";

const responsive1 = {
	0: { items: 1 },
};

function Con5Mobile({ posts }) {
	const evenPosts = posts.filter((post, index) => index % 2 === 0);
	const oddPosts = posts.filter((post, index) => index % 2 !== 0);

	const item1 = evenPosts.map((post) => <Posts key={post.id} data={post} />);
	const item2 = oddPosts.map((post) => <Posts key={post.id} data={post} />);
	return (
		<div className={styles.Con5Mobile}>
			<AliceCarousel items={item1} responsive={responsive1} autoPlay autoPlayInterval={1000} animationDuration={1000} infinite />
			<AliceCarousel
				items={item2}
				responsive={responsive1}
				autoPlay
				autoPlayInterval={1000}
				animationDuration={1000}
				autoPlayDirection={"rtl"}
				infinite
			/>
		</div>
	);
}

export default Con5Mobile;
