import Link from 'next/link';
import shared from './SectionShared.module.css';
import styles from './ServicesSection.module.css';

const servicesBlocks = [
  {
    title: 'ПРОДАЖА И ПОДБОР ОБЪЕКТОВ НЕДВИЖИМОСТИ ОТ ЗАСТРОЙЩИКА И ВЛАДЕЛЬЦЕВ',
    description:
      'Мы предлагаем широкий выбор недвижимости, как от застройщиков, так и от частных владельцев. Наша команда профессионалов поможет вам подобрать оптимальный вариант, исходя из ваших потребностей и бюджета. Мы сотрудничаем с проверенными застройщиками и владельцами, гарантируя вам безопасность сделки и прозрачность всех условий. Независимо от того, ищете ли вы новый дом, инвестиционную недвижимость или коммерческое помещение, мы обеспечим вам полный спектр услуг по продаже и подбору недвижимости.',
    image: '/images/service-1.svg',
  },
  {
    title: 'ПОДБОР КВАРТИР И ДОМОВ В АРЕНДУ НА СРОК ОТ МЕСЯЦА',
    description:
      'Мы предлагаем широкий выбор квартир и домов для аренды от одного месяца, учитывая ваши пожелания по расположению, бюджету и удобствам. Наша команда поможет вам на всех этапах, от подбора подходящего жилья до заключения договора. Мы работаем с проверенными собственниками, чтобы обеспечить вам комфортное и безопасное проживание на короткий срок.',
    image: '/images/service-2.svg',
  },
  {
    title: 'ПРИЕМ НЕДВИЖИМОСТИ В УПРАВЛЕНИЕ «ПОД КЛЮЧ»',
    description:
      'Услуга «под ключ» включает полный спектр управления недвижимостью: анализ, маркетинг, поиск арендаторов, юридическое сопровождение, обслуживание, ремонт и финансовое управление. Это освобождает владельца от повседневных задач и обеспечивает стабильный доход.',
    image: '/images/service-3.svg',
  },
  {
    title: 'КОНСУЛЬТАЦИИ ПО ВОПРОСАМ ПРИОБРЕТЕНИЯ НЕДВИЖИМОСТИ',
    description: 'Рассрочка, документы, налоги визы, квоты',
    image: '/images/service-4.svg',
    cta: 'Консультация',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesInner}>
        <h2 className={styles.servicesTitle}>УСЛУГИ</h2>
        <div className={styles.servicesGrid}>
          {servicesBlocks.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img src={service.image} alt="" className={styles.serviceIconImage} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceText}>{service.description}</p>
              {service.cta ? (
                <Link
                  href="/contact"
                  className={`${shared.button} ${shared.buttonPrimary} ${styles.serviceButton}`}
                >
                  {service.cta}
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
