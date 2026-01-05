import Link from 'next/link';
import shared from './SectionShared.module.css';
import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>НЕ ЗНАЕТЕ, С ЧЕГО НАЧАТЬ?</h2>
          <p className={styles.ctaText}>
            Заполните нашу анкету — это не займет много времени, но позволит вам
            определиться и сфокусироваться на деталях при выборе недвижимости,
            определить ваши потребности и предпочтения. Ответы помогут нам подготовить
            наиболее точные и подходящие вашим запросам предложения объектов недвижимости.
          </p>
          <Link href="/contact" className={`${shared.button} ${shared.buttonDark}`}>
            Начать подбор
          </Link>
        </div>
      </div>
    </section>
  );
}
