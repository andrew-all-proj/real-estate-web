"use client";

import styles from './DownloadFile.module.css';
import MainButton from './MainButton';

export default function DownloadFile() {
  const handleDownload = () => {
    alert('Пока не релизовано');
  };

  return (
    <section className={styles.download}>
      <MainButton onClick={handleDownload}>Скачать каталог</MainButton>
    </section>
  );
}
