import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">{t('contactUs.title')}</h1>

      <div className="row mb-4">
        <div className="col-md-6">
          <h3>{t('contactUs.address')}</h3>
          <p>{t('contactUs.addressDetails')}</p>
        </div>
        <div className="col-md-6">
          <h3>{t('contactUs.contactInfo')}</h3>
          <p>
            <strong>{t('contactUs.phone')}:</strong> {t('contactUs.phoneNumber')}
          </p>
          <p>
            <strong>{t('contactUs.email')}:</strong>{' '}
            <a href={`mailto:${t('contactUs.emailAddress')}`}>
              {t('contactUs.emailAddress')}
            </a>
          </p>
          <p>
            <strong>{t('contactUs.hours')}:</strong> {t('contactUs.workingHours')}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h3>{t('contactUs.formTitle')}</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                {t('contactUs.name')}
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder={t('contactUs.name')}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                {t('contactUs.email')}
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder={t('contactUs.emailPlaceholder')}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                {t('contactUs.message')}
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder={t('contactUs.message')}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              {t('contactUs.send')}
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <h3>{t('contactUs.findUs')}</h3>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.45905521402!2d20.851252355860975!3d52.22967561695907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669d50f00b%3A0x2db8f81552c2d3b7!2sWarszawa!5e0!3m2!1spl!2spl!4v1694449626231!5m2!1spl!2spl"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
