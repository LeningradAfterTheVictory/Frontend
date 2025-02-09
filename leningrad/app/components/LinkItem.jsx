import React from "react";
import styles from "./LinkItem.module.css"; // Импортируем стили как модуль

const LinkItem = ({ link }) => {
  const { href, text, icon, newTab = true, className = "" } = link;

  return (
    <div className={`${styles.container} ${className}`}>
      <a
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : ""}
        className={styles.link}
      >
        {icon && <span className={styles.icon}>{icon}</span>} {/* Отображаем иконку, если она есть */}
        {text}
      </a>
    </div>
  );
};

export default LinkItem;
