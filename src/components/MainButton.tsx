"use client";

import styles from './MainButton.module.css';

type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function MainButton({ onClick, children }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
