'use client';

import { FormEvent, useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Контакты</h1>
          <p>Свяжитесь с нами любым удобным для вас способом</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h2>Информация о компании</h2>

              <div className={styles.infoItem}>
                <h3>📞 Телефон</h3>
                <a href="tel:+66example">+66 (XXX) XXX-XXXX</a>
              </div>

              <div className={styles.infoItem}>
                <h3>📧 Email</h3>
                <a href="mailto:info@siamroyal.com">info@siamroyal.com</a>
              </div>

              <div className={styles.infoItem}>
                <h3>📍 Адрес</h3>
                <p>Бангкок, Таиланд</p>
                <p>Район Сукхумвит</p>
              </div>

              <div className={styles.infoItem}>
                <h3>🕐 График работы</h3>
                <p>Понедельник - Пятница: 09:00 - 18:00</p>
                <p>Суббота: 10:00 - 16:00</p>
                <p>Воскресенье: Выходной</p>
              </div>

              <div className={styles.infoItem}>
                <h3>💬 Социальные сети</h3>
                <div className={styles.socialLinks}>
                  <a href="https://t.me/SiamRoyalAgency" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                  <a href="https://wa.me/66example" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2>Отправить сообщение</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Телефон</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+66 (XXX) XXX-XXXX"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Сообщение</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Напишите ваше сообщение..."
                    rows={6}
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className="container">
          <h2>Наше расположение</h2>
          <div className={styles.mapPlaceholder}>
            <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="400" fill="#f0f0f0" />
              <circle cx="400" cy="200" r="50" fill="#007bff" opacity="0.5" />
              <circle cx="400" cy="200" r="20" fill="#007bff" />
              <text x="400" y="350" fontSize="20" textAnchor="middle" fill="#666">
                Сукхумвит, Бангкок
              </text>
            </svg>
          </div>
          <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
            Вы можете посетить наш офис или заказать онлайн консультацию
          </p>
        </div>
      </section>
    </main>
  );
}
