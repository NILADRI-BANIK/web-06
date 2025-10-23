import React from "react";
import EditTextIcon from "../assets/images/EditTextIcon.svg";
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import styles from "./Btemplate6.module.scss";

function Container3({ editable, chooseusImage, setChooseusImage, chooseusText, setChooseusText }) {
	const onContentBlur = CreateSanitizeCallback(setChooseusText);
	return (
		<div className={styles.Container3}>
			<div className={styles.backImage}>
				{!editable && <ImageUpload className={styles.chooseusChangeIcon} setImage={setChooseusImage} image={chooseusImage} />}
				<img src={chooseusImage} alt="" />
			</div>
			<div className={styles.details}>
				<h2>Why Choose Us</h2>
				{!editable && <img src={EditTextIcon} alt="" className={styles.EditTextIcon} />}
				<ContentEditableDiv
					className={styles.chooseusText}
					text={chooseusText}
					onChange={onContentBlur}
					contentEditable={!editable}
				/>
			</div>
		</div>
	);
}

export default Container3;
