import PropertyCard from '@/components/PropertyCard';
import styles from './page.module.css';

const rentProperties = [
  {
    id: '1',
    image: '/property-1.jpg',
    title: 'Lumina Ville - Studio для аренды',
    price: '45,000 ฿/мес',
    location: 'Бангкок, Сукхумвит',
    bedrooms: 0,
    bathrooms: 1,
    area: 30,
    type: 'rent' as const,
  },
  {
    id: '2',
    image: '/property-2.jpg',
    title: 'The Residences - 1 Bed для аренды',
    price: '65,000 ฿/мес',
    location: 'Бангкок, Сукхумвит',
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    type: 'rent' as const,
  },
  {
    id: '3',
    image: '/property-3.jpg',
    title: 'Park Royal 1 - 2 Bed для аренды',
    price: '95,000 ฿/мес',
    location: 'Бангкок, Сукхумвит',
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    type: 'rent' as const,
  },
  {
    id: '4',
    image: '/property-4.jpg',
    title: 'The Beatle Mansion - 3 Bed для аренды',
    price: '150,000 ฿/мес',
    location: 'Бангкок, Сатхон',
    bedrooms: 3,
    bathrooms: 3,
    area: 145,
    type: 'rent' as const,
  },
  {
    id: '5',
    image: '/property-5.jpg',
    title: 'Riva Aura - 2 Bed для аренды',
    price: '85,000 ฿/мес',
    location: 'Бангкок, Вонгнай',
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    type: 'rent' as const,
  },
  {
    id: '6',
    image: '/property-6.jpg',
    title: 'Ashton Residence - Luxury для аренды',
    price: '350,000 ฿/мес',
    location: 'Бангкок, Сатхон',
    bedrooms: 4,
    bathrooms: 4,
    area: 250,
    type: 'rent' as const,
  },
];

export default function RentPage() {
  return (
    <main className={styles.page}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Аренда недвижимости в Таиланде</h1>
          <p>Широкий выбор квартир и апартаментов для долгосрочной и краткосрочной аренды</p>
          
          <div className={styles.filterSection}>
            <input
              type="text"
              placeholder="Поиск по названию..."
              className={styles.searchInput}
            />
            <select className={styles.select}>
              <option>Все районы</option>
              <option>Сукхумвит</option>
              <option>Сатхон</option>
              <option>Вонгнай</option>
            </select>
            <select className={styles.select}>
              <option>Все спальни</option>
              <option>Studio</option>
              <option>1 спальня</option>
              <option>2 спальни</option>
              <option>3+ спальни</option>
            </select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className={styles.propertiesSection}>
        <div className="container">
          <div className={styles.propertiesGrid}>
            {rentProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ищете идеальное жилье для аренды?</h2>
          <p>Свяжитесь с нами и мы подберем вариант специально для вас</p>
          <button className={styles.ctaButton}>Найти квартиру</button>
        </div>
      </section>
    </main>
  );
}
