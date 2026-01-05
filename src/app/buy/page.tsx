import PropertyCard from '@/components/PropertyCard';
import styles from './page.module.css';

const properties = [
  {
    id: '1',
    image: '/property-1.jpg',
    title: 'Lumina Ville - Studio',
    price: '2.8M ฿',
    location: 'Бангкок, Сукхумвит',
    bedrooms: 0,
    bathrooms: 1,
    area: 30,
    type: 'buy' as const,
  },
  {
    id: '2',
    image: '/property-2.jpg',
    title: 'The Residences at Mandarin',
    price: '3.5M ฿',
    location: 'Бангкок, Сукхумвит',
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    type: 'buy' as const,
  },
  {
    id: '3',
    image: '/property-3.jpg',
    title: 'Park Royal 1 - 2 Bed',
    price: '4.2M ฿',
    location: 'Бангкок, Сукхумвит',
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    type: 'buy' as const,
  },
  {
    id: '4',
    image: '/property-4.jpg',
    title: 'The Beatle Mansion - 3 Bed',
    price: '6.5M ฿',
    location: 'Бангкок, Сатхон',
    bedrooms: 3,
    bathrooms: 3,
    area: 145,
    type: 'buy' as const,
  },
  {
    id: '5',
    image: '/property-5.jpg',
    title: 'Riva Aura - 2 Bed Apartment',
    price: '5.1M ฿',
    location: 'Бангкок, Вонгнай',
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    type: 'buy' as const,
  },
  {
    id: '6',
    image: '/property-6.jpg',
    title: 'Ashton Residence - Luxury Penthouse',
    price: '15M ฿',
    location: 'Бангкок, Сатхон',
    bedrooms: 4,
    bathrooms: 4,
    area: 250,
    type: 'buy' as const,
  },
];

export default function BuyPage() {
  return (
    <main className={styles.page}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Купить недвижимость в Таиланде</h1>
          <p>Подберем идеальное жилье под ваши требования и бюджет</p>
          
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
              <option>Все цены</option>
              <option>До 3М ฿</option>
              <option>3-5М ฿</option>
              <option>5-10М ฿</option>
              <option>Свыше 10М ฿</option>
            </select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className={styles.propertiesSection}>
        <div className="container">
          <div className={styles.propertiesGrid}>
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Не нашли подходящий вариант?</h2>
          <p>Мы поможем вам найти идеальную недвижимость с учетом ваших требований</p>
          <button className={styles.ctaButton}>Получить консультацию</button>
        </div>
      </section>
    </main>
  );
}
