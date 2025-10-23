import React from "react";
import EditTextIcon from "../assets/images/EditTextIcon.svg";
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import styles from "./Btemplate6.module.scss";

function Container2({ aboutusText, setAboutusText, editable, aboutusImg1, setAboutusImg1, aboutusImg2, setAboutusImg2 }) {
	const onContentBlur = CreateSanitizeCallback(setAboutusText);
	return (
		<div className={styles.Container2}>
			<div className={styles.heroSection}>
				<div className={styles.aboutImg1}>
					<img src={aboutusImg1} alt="" />
					{!editable && <ImageUpload className={styles.aboutChange1} setImage={setAboutusImg1} image={aboutusImg1} />}
					<div className={styles.aboutImg2}>
						<img src={aboutusImg2} alt="" />
						{!editable && <ImageUpload className={styles.aboutChange2} setImage={setAboutusImg2} image={aboutusImg2} />}
					</div>
				</div>
			</div>

			<div className={styles.descSection}>
				<h2>About Company</h2>
				{!editable && <img src={EditTextIcon} alt="" className={styles.EditTextIcon} />}
				<ContentEditableDiv
					className={styles.aboutDesc}
					text={aboutusText}
					onChange={onContentBlur}
					contentEditable={!editable}
				/>
				<button>We're hiring</button>
			</div>
		</div>
	);
}

export default Container2;
