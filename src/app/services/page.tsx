import styles from './page.module.css';

export default function ServicesPage() {
  const services = [
    {
      icon: '🔍',
      title: 'Подбор недвижимости',
      description:
        'Персональный подбор квартир и апартаментов в соответствии с вашими требованиями, бюджетом и предпочтениями',
    },
    {
      icon: '📋',
      title: 'Юридическое сопровождение',
      description:
        'Полное юридическое оформление сделки с помощью опытных адвокатов и нотариусов',
    },
    {
      icon: '🎥',
      title: 'Видео-тур',
      description:
        'Профессиональные видео-туры по квартирам с возможностью осмотра удаленно',
    },
    {
      icon: '💰',
      title: 'Финансовое консультирование',
      description:
        'Помощь с финансированием, ипотекой и рассчетом стоимости недвижимости',
    },
    {
      icon: '🏠',
      title: 'Управление имуществом',
      description:
        'Полное управление вашей недвижимостью, включая поиск арендаторов',
    },
    {
      icon: '🌍',
      title: 'Инвестиционные консультации',
      description:
        'Анализ рынка и помощь в выборе недвижимости для инвестирования',
    },
  ];

  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Наши услуги</h1>
          <p>Полный спектр услуг для поиска и покупки недвижимости в Таиланде</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className="container">
          <h2>Наш процесс работы</h2>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Консультация</h3>
              <p>Обсуждаем ваши требования и бюджет</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Подбор</h3>
              <p>Подбираем подходящие варианты</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Осмотр</h3>
              <p>Показываем объекты лично или онлайн</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Сделка</h3>
              <p>Оформляем покупку и все документы</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Нужна наша помощь?</h2>
          <p>Свяжитесь с нами для детальной консультации о наших услугах</p>
          <button className={styles.ctaButton}>Получить консультацию</button>
        </div>
      </section>
    </main>
  );
}
