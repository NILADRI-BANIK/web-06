import React from "react";
import bbc from "../assets/business/image/bbc.png";
import cnbc from "../assets/business/image/cnbc.png";
import newyorkTimes from "../assets/business/image/newyorkTimes.png";
import time from "../assets/business/image/time.png";
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import styles from "./Btemplate6.module.scss";
import rating from "../assets/images/rating.png";
import dialer from "../assets/business/svg/dialer.svg";
import location from "../assets/business/svg/location.svg";
import message from "../assets/business/svg/message.svg";
import store from "../assets/business/svg/store.svg";
import whatsapp from "../assets/business/svg/whatsapp.svg";
import EditTextIcon from "../assets/images/EditTextIcon.svg";

function Container1({ businessName, setBusinessName, editable, landingImage, setLandingImage, businessLogo, setBusinessLogo ,ratingData,setShowRating}) {
	const onContentBlur = CreateSanitizeCallback(setBusinessName);
	return (
		<div className={styles.Container1}>
			<div className={styles.mainContent}>
				<div className={styles.logo}>
					<img src={businessLogo} alt="LOGO" />
				</div>
				<div className={styles.heroSection}>
					<div className={styles.banner}>
						{!editable && <ImageUpload className={styles.CoverUploadBtn} setImage={setLandingImage} image={landingImage} />}
						<img src={landingImage} alt="" />
					</div>
					<div className={styles.postSubscriber}>
						<div className={styles.posts}>
							<h2>{"650k"}</h2>
							<p>Subscribers</p>
						</div>
						<div className={styles.subscribers}>
							<h2>{"650k"}</h2>
							<p>Subscribers</p>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.descSection}>
				<div className={styles.leftSection}>
					<div className={styles.RatingContainer} onClick={() => setShowRating(true)}>
						<img src={rating} alt="" />
						<p>{ratingData}</p>
					</div>
					<div className={styles.nameAction}>
						{!editable && <img src={EditTextIcon} alt="" className={styles.EditTextIcon} />}
						<ContentEditableDiv
							className={styles.name}
							text={businessName}
							onChange={onContentBlur}
							contentEditable={!editable}
						/>
						<div className={styles.buttons}>
							<button>Subscribe</button>
							<button>Message</button>
						</div>
					</div>
				</div>
				<div className={styles.socialContainer}>
					<h3>Reach us</h3>
					<h4>Let's connect and talk</h4>
					<div className={styles.socials}>
						<div className={styles.whatsapp}>
							<img src={whatsapp} alt="" />
						</div>
						<div className={styles.phone}>
							<img src={dialer} alt="" />
						</div>
						<div className={styles.mail}>
							<img src={message} alt="" />
						</div>
						<div className={styles.location}>
							<img src={location} alt="" />
						</div>
						<div className={styles.store}>
							<img src={store} alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.adds}>
				<marquee direction="left" behavior="scroll" scrollamount="10" className={styles.logos}>
					<img src={cnbc} alt="logo1" width={50} className={styles.cnbc} />
					<img src={bbc} alt="logo2" width={80} className={styles.bbc} />
					<img src={newyorkTimes} alt="logo3" width={120} className={styles.newyorkTimes} />
					<img src={time} alt="logo4" width={60} className={styles.time} />
				</marquee>
			</div>
		</div>
	);
}

export default Container1;
