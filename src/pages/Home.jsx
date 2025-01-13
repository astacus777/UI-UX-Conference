import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css'

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <h2>{t('home-p.welcome')}</h2>
      {t('home-p.info', { returnObjects: true }).map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Home;

