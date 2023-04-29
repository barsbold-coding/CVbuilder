import css from "./style.module.css";
import Image from "next/image";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";

const Preview = () => {
    const [experience, setExperience] = useState(true);
    const [education, setEducation] = useState(true);
    const [contact, setContact] = useState(true);
    const [skills, setSkills] = useState(true);
    const experienceHandler = () => {
        if(experience === true)
            setExperience(false);
        else
            setExperience(true);
    }
    const educationHandler = () => {
        if(education === true)
            setEducation(false);
        else
            setEducation(true);
    }
    const contactHandler = () => {
        if(contact === true)
            setContact(false);
        else
            setContact(true);
    }
    const skillsHandler = () => {
        if(skills === true)
            setSkills(false);
        else
            setSkills(true);
    }
    return (
        <div className={css.screen}>
            <div className={css.leftContainer}>
                <Image id={css.profileImg} src="/favicon.ico" width={100} height={100} alt="profile picture"></Image>
                <h1 className={css.userName}>Jane Smith</h1>
                <input className={css.bio} type="text" placeholder="click here to add bio..."></input>
                <button className={css.dropdown} onClick={experienceHandler}>
                    Experience
                    {experience ? <ArrowLeftIcon /> : <ArrowDropDownIcon />}
                </button>
                {experience ? <></> : <textarea className={css.richInput}></textarea>}
                <button className={css.dropdown} onClick={educationHandler}>
                    Education
                    {education ? <ArrowLeftIcon /> : <ArrowDropDownIcon />}
                </button>
                {education ? <></> : <textarea className={css.richInput}></textarea>}
                <button className={css.dropdown} onClick={contactHandler}>
                    Contact
                    {contact ? <ArrowLeftIcon /> : <ArrowDropDownIcon />}
                </button>
                {contact ? <></> : <textarea className={css.richInput}></textarea>}
                <button className={css.dropdown} onClick={skillsHandler}>
                    Skills
                    {skills ? <ArrowLeftIcon /> : <ArrowDropDownIcon />}
                </button>
                {skills ? <></> : <textarea className={css.richInput}></textarea>}
            </div>
            <div className={css.rightContainer}>
                <div className={css.cvContainer}>
                    <h1>Preview:</h1>
                    <div className={css.cvBuilder}></div>
                </div>
                <div className={css.shareLink}>
                    <h1>Share:</h1>
                    <div className={css.shareLinkContainer}>
                        <input className={css.linkInput} type="text"></input>
                        <div className={css.copyButton}>Copy</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preview;