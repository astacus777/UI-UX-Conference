import React from 'react';
import { useTranslation } from 'react-i18next';

const Mission = () => {
  const { t } = useTranslation();
  return (
    <>
    <h1>{t('mission.title')}</h1>
    <p>{t('mission.content', { returnObjects: true })}</p>
    </>
  );
};

export default Mission;