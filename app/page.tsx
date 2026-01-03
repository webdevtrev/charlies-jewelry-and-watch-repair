import styles from './page.module.css';
import Logo from '../components/Logo/Logo';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Logo className={styles.title} />
        <p className={styles.subtitle}>We're creating our website, come back soon.</p>

        <div className={styles.actions}>
          <a className={styles.cta} href="mailto:daytonjewelry@gmail.com">Contact us</a>
        </div>
      </main>

      <footer className={styles.footer}>
        <small>© {new Date().getFullYear()} Charlie's Jewelry</small>
      </footer>
    </div>
  );
}
