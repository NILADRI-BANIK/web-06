import comment from "../../assets/business/image/comment.svg";
import heart from "../../assets/business/image/heartLike.svg";
import share from "../../assets/business/image/share.svg";
import styles from "../Btemplate6.module.scss";
const Posts = ({ data }) => {
	return (
		<div className={styles.postMainContainer}>
			<div className={styles.media}>
				<img src={data.mediaUrl} alt="" />
			</div>
			<div className={styles.profile}>
				<img src={data.profilePic} alt="" />
				<div className={styles.profileDetails}>
					<h4>{data.name}</h4>
					<h5>{data.userName}</h5>
				</div>
			</div>
			<div className={styles.details}>
				<p>{data.postDesc}</p>
				<div className={styles.actions}>
					<div className={styles.like}>
						<img src={heart} alt="" />
						<p>{data.likeCount || 30}</p>
					</div>
					<div className={styles.comment}>
						<img src={comment} alt="" />
						<p>{data.commentCount || 15}</p>
					</div>
					<div className={styles.share}>
						<img src={share} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Posts;
