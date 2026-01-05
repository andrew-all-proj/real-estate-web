import styles from './ContactFormSection.module.css';

export default function ContactFormSection() {
  return (
    <section className={styles.contactFormSection}>
      <div className={styles.contactFormInner}>
        <div className={styles.contactFormContent}>
          <h2 className={styles.contactFormTitle}>СВЯЖИТЕСЬ СО МНОЙ</h2>
          <p className={styles.contactFormText}>
            Оставьте свои данные и мы свяжемся с вами удобным вам способом
          </p>
          <form className={styles.contactForm} action="/contact" method="get">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className={styles.contactFormInput}
            />
            <input
              type="tel"
              name="phone"
              placeholder="+7 (000) 000-00-00"
              className={styles.contactFormInput}
            />
            <button type="submit" className={styles.contactFormButton}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
