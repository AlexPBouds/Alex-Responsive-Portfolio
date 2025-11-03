import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile picture of Alex Boudreau" />
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h1>
                    Alex <br /> Boudreau
                </h1>
                <h2>
                    Frontend Developer
                </h2>
                <span>
                    <a href="https://github.com/AlexPBouds" target="_blank">
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/alex-boudreau-01723b237" target="_blank">
                        <img src={linkedInIcon} alt="LinkedIn Icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    Filler paragraph about my passions and how it connects to my career.
                </p>
                <a href={CV}>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    )
}

export default Hero;