import styles from './ProcessSection.module.css';

const processSteps = [
  {
    title: 'Свяжитесь с нами любым удобным для вас способом, указанном на сайте, или по телефону',
    number: 1,
    image: '/images/process-step-1.svg',
  },
  {
    title:
      'Получите персональное предложение, содержащее полную информацию о проекте и квартире, а также дополнительные материалы: видеоролики, фотографии',
    number: 2,
    image: '/images/process-step-2.svg',
  },
  {
    title:
      'Запишитесь на онлайн осмотр квартиры и задайте интересующие вас вопросы нашему брокеру',
    number: 3,
    image: '/images/process-step-3.svg',
  },
  {
    title:
      'Забронируйте квартиру, внеся предоплату любым удобным для вас способом и в любой удобной валюте: рублями, долларами, тайскими батами',
    number: 4,
    image: '/images/process-step-4.svg',
  },
  {
    title: 'Мы подготовим договор и все необходимые документы для продажи',
    number: 5,
    image: '/images/process-step-5.svg',
  },
  {
    title:
      'Для передачи недвижимости во владение вам необходимо будет самостоятельно приехать в Таиланд или оформить доверенность',
    number: 6,
    image: '/images/process-step-6.svg',
  },
  {
    title:
      'Оплатить оставшуюся часть суммы за недвижимость вы также можете в любой валюте. Банковским переводом или наличными',
    number: 7,
    image: '/images/process-step-7.svg',
  },
  {
    title: 'Получите ключи и документы на право собственности',
    number: 8,
    image: '/images/process-step-8.svg',
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.processSection}>
      <div className={styles.processInner}>
        <h2 className={styles.processTitle}>АЛГОРИТМ НАШЕЙ РАБОТЫ</h2>
        <div className={styles.processGrid}>
          {processSteps.map((step) => (
            <div key={step.number} className={styles.processCard}>
              <div className={styles.processIcon}>
                <img src={step.image} alt="" className={styles.processImage} />
                <span className={styles.processBadge}>{step.number}</span>
              </div>
              <p className={styles.processText}>{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
