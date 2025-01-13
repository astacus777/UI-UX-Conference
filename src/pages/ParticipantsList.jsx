import React from 'react';
import { useTranslation } from 'react-i18next';

const ParticipantsList = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('conferenceParticipants')}</h1>
      <ul>
        {t('participants', { returnObjects: true }).map((participant, index) => (
          <li key={index}>
            <h2>{participant.name}</h2>
            <p><strong>{participant.title}</strong></p>
            <p>{participant.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantsList;
