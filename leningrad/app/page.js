"use client";

import React, { useEffect } from "react";
import fullpage from "fullpage.js";

const HomePage = () => {
  useEffect(() => {
    const fullpageInstance = new fullpage("#fullpage", {
      licenseKey: "gplv3-license",
      autoScrolling: true,
      scrollHorizontally: true,
      navigation: true,
      anchors: ["section1", "section2", "section3"],
      scrollBar: false,
    });

    return () => {
      fullpageInstance.destroy("all");
    };
  }, []);

  return (
    <div id="fullpage">
      {/* Первая секция: Главная */}
      <div className="section hero">
        <div className="hero-content">
          <h1>
            <span className="big-text">Ленинград</span> 
            <span className="small-text">после победы</span>
          </h1>
          <p className="bottom-left-text">
            Путешествуйте, стройте интересные маршруты и изучайте историю с
            интерактивной картой Санкт-Петербурга
          </p>
        </div>
        <div className="hero-image">
          <img src="/images/main_picture.png" alt="Main Picture" />
        </div>
        <div className="scroll-down">
          <span></span>
        </div>

      </div>

      {/* Вторая секция: О проекте */}
      <div className="section about">
        
          <h2>О проекте</h2>
          <p>
            Исследовательский и просветительский проект, посвященный героизму
            жителей Ленинграда. Наша цель — сохранить память о событиях и
            людях, изменивших историю.
          </p>
          <ul>
            <li>Собранные архивные материалы и воспоминания очевидцев.</li>
            <li>Интерактивная карта исторических мест.</li>
            <li>Маршруты по ключевым событиям и памятникам.</li>
          </ul>
      </div>

      {/* Третья секция: Наша команда */}
      <div className="section team">
        <h2>Наша команда</h2>
        <div className="team-grid">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="team-member">
              <div>👤</div>
              <p>Name {index + 1}, specialization</p>
            </div>
          ))}
        </div>
        <div className="gradient-overlay"></div>
      </div>
      
    </div>
    
  );
};

export default HomePage;
