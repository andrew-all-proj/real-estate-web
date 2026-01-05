import Link from 'next/link';
import shared from './SectionShared.module.css';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroTop}>
          <img src="/images/logo-2.svg" alt="SIAM ROYAL" className={styles.heroBrandImage} />
          <button className={styles.heroSearch} type="button" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M21 21l-4.35-4.35m1.6-4.65a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <h1 className={styles.heroTitle}>
          <span>Пример сайта</span>
          <span>ТЕСТ</span>
          <span>Демонстрация</span>
        </h1>
        <p className={styles.heroSubtitle}>
          <span>Только актуальные предложения.</span>
          <span>Твой дом — в одном клике от тебя</span>
        </p>
        <div className={styles.heroCTA}>
          <Link href="/buy" className={`${shared.button} ${shared.buttonPrimary}`}>
            Начать подбор
          </Link>
          <Link href="/buy" className={`${shared.button} ${shared.buttonPrimary}`}>
            Скачать католог
          </Link>
        </div>
        <h2 className={styles.heroSlogan}>
          <span>ВАШ НОВЫЙ ДОМ —</span>
          <span>НАША РАБОТА!</span>
        </h2>
      </div>
    </section>
  );
}
