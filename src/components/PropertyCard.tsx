import Image from 'next/image';
import Link from 'next/link';
import styles from './PropertyCard.module.css';

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: 'buy' | 'rent';
}

export default function PropertyCard({
  id,
  image,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  type,
}: PropertyCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.badge}>{price}</div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.location}>{location}</p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🛏️</span>
            <span>{bedrooms} спальни</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🚿</span>
            <span>{bathrooms} ванных</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📐</span>
            <span>{area} м²</span>
          </div>
        </div>

        <Link
          href={`/${type}/${id}`}
          className={styles.button}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
