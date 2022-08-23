import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
              <h1 className={styles.title}>My first app</h1>
              <p className={styles.subtitle}>To do list</p>
        </div>
      );
}
 
export default Hero;
