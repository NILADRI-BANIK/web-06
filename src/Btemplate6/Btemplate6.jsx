import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import setting from "../assets/images/Setting.svg";
import AboutMe from "../components/AboutMe/AboutMe";
import NavBar from "../components/NavBar/NavBar";
import Rating from "../components/Rating/Rating";
import styles from "./Btemplate6.module.scss";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Container5 from "./Container5";
import aboutImg1 from "./assets/AboutImg1.png";
import aboutImg2 from "./assets/AboutImg2.png";
import banner from "./assets/banner.png";
import chooseUsImage from "./assets/chooseusImage.png";

const BTemplate6 = () => {
	document.documentElement.style.setProperty("--base-font-size", "100%");
	const { user, templateData, isLoading, currentUserId, userId } = useSelector((state) => state.auth);
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

	if (width < 1928) document.documentElement.style.setProperty("--base-font-size", "90%");
	if (width < 1728) document.documentElement.style.setProperty("--base-font-size", "90%");
	if (width < 1500) document.documentElement.style.setProperty("--base-font-size", "80%");
	if (width < 1500 && height < 570) document.documentElement.style.setProperty("--base-font-size", "55%");
	if (width < 1350) document.documentElement.style.setProperty("--base-font-size", "70%");
	if (width < 1300 && height < 590) document.documentElement.style.setProperty("--base-font-size", "50%");
	if (width < 1250) document.documentElement.style.setProperty("--base-font-size", "70%");
	if (width < 1150) document.documentElement.style.setProperty("--base-font-size", "65%");
	if (width < 1025) document.documentElement.style.setProperty("--base-font-size", "52%");
	if (width < 950) document.documentElement.style.setProperty("--base-font-size", "50%");
	if (width < 850) document.documentElement.style.setProperty("--base-font-size", "45%");
	// if (width < 800) document.documentElement.style.setProperty("--base-font-size", "50%");
	if (width < 750) document.documentElement.style.setProperty("--base-font-size", "40%");
	if (width < 930 && height > 600) document.documentElement.style.setProperty("--base-font-size", "100%");
	if (width < 1050 && height > 1050) document.documentElement.style.setProperty("--base-font-size", "150%");
	if (width < 930 && height > 1100) document.documentElement.style.setProperty("--base-font-size", "140%");
	if (width < 830 && height > 600) document.documentElement.style.setProperty("--base-font-size", "90%");
	if (width < 830 && height > 900) document.documentElement.style.setProperty("--base-font-size", "120%");
	if (width < 780 && height > 900) document.documentElement.style.setProperty("--base-font-size", "110%");
	// if (width < 550 && height > 600) document.documentElement.style.setProperty("--base-font-size", "80%");
	if (width < 580 && height > 580) document.documentElement.style.setProperty("--base-font-size", "80%");
	if (width < 380 && height > 600) document.documentElement.style.setProperty("--base-font-size", "80%");
	if (width < 380 && height > 380) document.documentElement.style.setProperty("--base-font-size", "70%");
	if (width < 300 && height > 600) document.documentElement.style.setProperty("--base-font-size", "70%");
	if (width < 290 && height > 290) document.documentElement.style.setProperty("--base-font-size", "60%");

	const [editable, setEditable] = useState(true);
	const [showNav, setShowNav] = useState(false);
	const [showRating, setShowRating] = useState(false);
	const [ratingData, setRatingData] = useState("4.5");
	const [showAboutMe, setShowAboutMe] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [liveIn, setLiveIn] = useState("");
	const [schooling, setSchooling] = useState("");
	const [profession, setProfession] = useState("");

	const [businessName, setBusinessName] = useState("BUSINESS NAME");
	const [businessLogo, setBusinessLogo] = useState(
		"https://res.cloudinary.com/dzarrma99/image/upload/v1701951329/ufevhatldfresxzusrqy.jpg"
	);
	const [postCount, setPostCount] = useState("2560");
	const [subscriberCount, setSubscriberCount] = useState("14k");
	// const [rating, setRating] = useState("4");
	const [landingImage, setLandingImage] = useState(banner);
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [aboutusText, setAboutusText] = useState(
		"Lorem ipsum dolor sit amet consectetur. Viverra leo scelerisque dui mollis integer. Quisque enim sit porttitor quam amet eros. Sed sit in at odio malesuada semper. Nec vulputate ut a velit pellentesque platea purus etiam nunc. Massa at arcu lectus in."
	);
	const [aboutusImg1, setAboutusImg1] = useState(aboutImg1);
	const [aboutusImg2, setAboutusImg2] = useState(aboutImg2);

	const [chooseusText, setChooseusText] = useState(
		`Lorem ipsum dolor sit amet consectetur. Viverra leo scelerisque dui mollis integer. Quisque enim sit porttitor quam amet eros. Sed sit in at odio malesuada semper. Nec vulputate ut a velit pellentesque platea purus etiam nunc. Massa at arcu lectus in.`
	);
	const [chooseusImage, setChooseusImage] = useState(chooseUsImage);

	useEffect(() => {
		if (templateData === null) return;
		setRatingData(user?.Rating === undefined ? "0" : user?.Rating);
		setName(user?.username === "" || user?.username === undefined ? templateData?.name : user?.username);
	}, [user, templateData]);

	const templateUpdatedData = {
		name,
		aboutMe: {
			email,
			phone,
			liveIn,
			schooling,
			profession,
		},
		hireMe: {
			hireable: false,
		},
	};

	return (
		<>
			{/* {isLoading && <Lodging />} */}
			<NavBar
				editable={editable}
				setEditable={setEditable}
				showNav={showNav}
				setShowNav={setShowNav}
				templateUpdatedData={templateUpdatedData}
			/>
			{showRating && <Rating setShowRating={setShowRating} setRatingData={setRatingData} />}
			{showAboutMe && (
				<AboutMe
					editable={editable}
					setShowAboutMe={setShowAboutMe}
					email={email}
					setEmail={setEmail}
					phone={phone}
					setPhone={setPhone}
					liveIn={liveIn}
					setLiveIn={setLiveIn}
					schooling={schooling}
					setSchooling={setSchooling}
					profession={profession}
					setProfession={setProfession}
				/>
			)}

			<div className={styles.TemplateWrapper} id="Template5">
				{!showNav && currentUserId === userId && user && (
					<img src={setting} alt="" className={styles.Setting} onClick={() => setShowNav(true)} />
				)}

				<div className={styles.Template6}>
					<Container1
						editable={editable}
						setBusinessName={setBusinessName}
						businessName={businessName}
						landingImage={landingImage}
						setLandingImage={setLandingImage}
						businessLogo={businessLogo}
						setBusinessLogo={setBusinessLogo}
						ratingData={ratingData}
						setShowRating={setShowRating}
					/>
					<Container2
						editable={editable}
						aboutusText={aboutusText}
						setAboutusText={setAboutusText}
						aboutusImg1={aboutusImg1}
						setAboutusImg1={setAboutusImg1}
						aboutusImg2={aboutusImg2}
						setAboutusImg2={setAboutusImg2}
					/>
					<Container3
						editable={editable}
						chooseusImage={chooseusImage}
						setChooseusImage={setChooseusImage}
						chooseusText={chooseusText}
						setChooseusText={setChooseusText}
					/>
					<Container4 />
					<Container5 />
				</div>
			</div>
		</>
	);
};

export default BTemplate6;
