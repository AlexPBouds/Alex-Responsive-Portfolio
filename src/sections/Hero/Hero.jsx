import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedInIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";

function Hero() {
  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture of Alex Boudreau" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" />
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
        <p>
            Filler paragraph about my passions and how it connects to my career.
        </p>
        <a href={CV}>
            <button className="hover">Resume</button>
        </a>
    </div>
  </section>
}

export default Hero;