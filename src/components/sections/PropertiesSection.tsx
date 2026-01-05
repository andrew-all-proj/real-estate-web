import styles from './PropertiesSection.module.css';

const properties = [
  {
    id: '1',
    image: '/images/copacabana.webp',
    title: 'GRAND SOLAIRE NOBLE- ГРАНД СОЛЕРА НОБЛЬ ПАТТАЙЯ',
  },
  {
    id: '2',
    image: '/images/siam-oriental- oasis.webp',
    title: 'Siam Oriental Oasis',
  },
  {
    id: '3',
    image: '/images/grand-solaire-noble.webp',
    title: 'COPACABANA CORAL REEF - КОПАКАБАНА КОРАЛ РИФ',
  },
];

export default function PropertiesSection() {
  return (
    <section className={styles.properties}>
      <div className={styles.propertiesInner}>
        <h2 className={styles.propertiesTitle}>ТОП ЛУЧШИХ ОБЪЕКТОВ</h2>
        <div className={styles.propertiesGrid}>
          {properties.map((property) => (
            <figure key={property.id} className={styles.propertyCard}>
              <img src={property.image} alt={property.title} className={styles.propertyImage} />
              <figcaption className={styles.propertyCaption}>{property.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
