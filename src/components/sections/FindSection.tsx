import Link from 'next/link';
import shared from './SectionShared.module.css';
import styles from './FindSection.module.css';

export default function FindSection() {
  return (
    <section className={styles.findSection}>
      <div className={styles.findInner}>
        <div className={styles.findContent}>
          <h2 className={styles.findTitle}>
            БЫСТРЫЙ ПОДБОР ОБЪЕКТОВ.
            <br />
            РЕЗУЛЬТАТ УЖЕ ЧЕРЕЗ 5 МИНУТ
          </h2>
          <div className={styles.findButtons}>
            <Link href="/buy" className={`${shared.button} ${shared.buttonDark}`}>
              Начать подбор
            </Link>
            <Link href="/contact" className={`${shared.button} ${shared.buttonDark}`}>
              Скачать каталог
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
