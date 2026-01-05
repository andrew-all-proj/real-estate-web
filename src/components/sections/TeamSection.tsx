import styles from './TeamSection.module.css';

const teamMembers = [
  {
    name: 'Ксения Устименко',
    role: 'Директор Компании / General Manager',
    image: '/images/team-1.jpg',
    link: '#',
  },
  {
    name: 'Асим Аскеров',
    role:
      'Персональный Ассистент Директора, Агент по недвижимости / Personal Assistant to the General Manager and Real Estate Agent',
    image: '/images/team-2.jpg',
    link: '#',
  },
  {
    name: 'Дарья Грасмик',
    role: 'Старший Агент / Senior Real Estate Agent',
    image: '/images/team-3.jpg',
    link: '#',
  },
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.teamInner}>
        <h2 className={styles.teamTitle}>Команда</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <article key={member.name} className={styles.teamCard}>
              <img src={member.image} alt={member.name} className={styles.teamImage} />
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
              <a href={member.link} className={styles.teamLink}>
                Связаться
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
