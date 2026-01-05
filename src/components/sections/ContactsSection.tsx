import styles from './ContactsSection.module.css';

export default function ContactsSection() {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.contactsInner}>
        <h2 className={styles.contactsTitle}>КОНТАКТЫ</h2>
        <div className={styles.contactsGrid}>
          <div className={styles.contactsInfo}>
            <div className={styles.contactRow}>
              <span className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M6.6 10.8c1.6 3 3.9 5.3 6.9 6.9l2.3-2.3c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.9.1.4 0 .8-.3 1.1l-2 2z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <a href="tel:+66929029609">+66 92-90-29-609</a>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M6.6 10.8c1.6 3 3.9 5.3 6.9 6.9l2.3-2.3c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.9.1.4 0 .8-.3 1.1l-2 2z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <a href="tel:+66651199133">+66 65-11-99-133</a>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2 8 5 8-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <a href="mailto:siam.royal.agency@gmail.com">siam.royal.agency@gmail.com</a>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div className={styles.contactAddress}>
                <strong>Siam Royal Agency Co., LTD.</strong>
                <span>View Talay 5C, Bang Lamung District,</span>
                <span>ChonBuri, Pattaya,Thailand, 20150</span>
              </div>
            </div>
            <div className={styles.contactSocials}>
              <a href="https://t.me/SiamRoyalAgency" aria-label="Telegram">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M21 4.6c.1-1.1-1-1.2-1-1.2S7.8 8.2 4.2 9.6c-1.7.6-.7 1.2-.7 1.2l2.7.8c1.2.4 1.9 0 1.9 0l5.9-4c2-1.4 1.6-.2 1 .3l-4.5 4.2c-.7.6-.3 1.1 0 1.4 1.1 1 3.9 2.8 5 3.4.2.1.5.3.6.4.3.2 1.8 1.2 2.8 1 .9-.2 1.1-1.5 1.1-1.5l1-6.6c.2-1.1.3-2.4.5-3.3.2-.9.3-1.6.3-2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com/siamroyalagency/" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.5A3.5 3.5 0 1 0 12 16a3.5 3.5 0 0 0 0-7Zm6-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="https://wa.me/66929029609" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 2a10 10 0 0 0-8.9 14.6L2 22l5.6-1.1A10 10 0 1 0 12 2Zm5.3 14.6c-.2.6-1.2 1.1-1.7 1.2-.5.1-1.1.2-3.6-.8-3-1.2-4.8-4.2-4.9-4.4-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1.1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.6.2.6.8 2.2.9 2.4.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.6.6-.2.2-.4.4-.2.8.2.4.9 1.5 1.9 2.4 1.3 1.1 2.3 1.4 2.7 1.6.4.2.6.2.8 0 .2-.2.9-1 .9-1.3.1-.3.2-.2.4-.1.2.1 1.4.7 1.7.8.3.1.5.2.6.3.1.1.1.6-.1 1.2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="tel:+66929029609" aria-label="Phone">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M6.6 10.8c1.6 3 3.9 5.3 6.9 6.9l2.3-2.3c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.9.1.4 0 .8-.3 1.1l-2 2z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.contactsMap}>
            <iframe
              title="Siam Royal Agency Map"
              src="https://www.google.com/maps?q=View%20Talay%205C%2C%20Pattaya%2C%20Thailand&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
