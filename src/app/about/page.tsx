import Link from 'next/link';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>О компании</h1>
          <p>SIAM ROYAL AGENCY — ваш надежный партнер в поиске недвижимости в Таиланде</p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2>Кто мы?</h2>
              <p>
                SIAM ROYAL AGENCY — лидирующее агентство недвижимости с многолетним опытом
                помощи людям в поиске и покупке недвижимости в Таиланде.
              </p>
              <p>
                Мы специализируемся на подборе апартаментов премиум-класса в самых престижных
                районах Бангкока. Наша команда состоит из профессионалов, свободно владеющих
                несколькими языками и имеющих глубокие знания о рынке недвижимости Таиланда.
              </p>
              <p>
                Каждый клиент для нас — уникален, и мы подходим к поиску недвижимости
                индивидуально, учитывая все ваши требования и предпочтения.
              </p>
            </div>
            <div className={styles.aboutImage}>
              <div className={styles.placeholder}>
                <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="300" fill="#e0e0e0" />
                  <circle cx="150" cy="100" r="40" fill="#007bff" />
                  <path d="M 100 150 Q 150 120 200 150 L 200 250 L 100 250 Z" fill="#007bff" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>500+</h3>
              <p>Успешных сделок</p>
            </div>
            <div className={styles.statItem}>
              <h3>1000+</h3>
              <p>Довольных клиентов</p>
            </div>
            <div className={styles.statItem}>
              <h3>15+</h3>
              <p>Лет опыта</p>
            </div>
            <div className={styles.statItem}>
              <h3>24/7</h3>
              <p>Поддержка клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Наши ценности</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>💼 Профессионализм</h3>
              <p>Мы подходим к каждой сделке с максимальной ответственностью и профессионализмом</p>
            </div>
            <div className={styles.valueCard}>
              <h3>🤝 Честность</h3>
              <p>Полная прозрачность и честность во всех деловых отношениях</p>
            </div>
            <div className={styles.valueCard}>
              <h3>🎯 Результат</h3>
              <p>Наша главная цель — найти для вас идеальное жилье</p>
            </div>
            <div className={styles.valueCard}>
              <h3>🌟 Качество</h3>
              <p>Мы работаем только с лучшими проектами и объектами</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Наша команда</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.avatar}>👨‍💼</div>
              <h3>Александр Петров</h3>
              <p>Генеральный директор</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.avatar}>👩‍💼</div>
              <h3>Мария Смирнова</h3>
              <p>Менеджер по продажам</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.avatar}>👨‍💼</div>
              <h3>Иван Иванов</h3>
              <p>Риэлтор премиум-класса</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.avatar}>👩‍💼</div>
              <h3>Анна Кузнецова</h3>
              <p>Консультант по юридическим вопросам</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Хотите узнать больше?</h2>
          <p>Свяжитесь с нами для детальной консультации</p>
          <Link href="/contact" className={styles.ctaButton}>Связаться с нами</Link>
        </div>
      </section>
    </main>
  );
}
