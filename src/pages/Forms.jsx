import React from "react";
import { useTranslation } from "react-i18next";

const Forms = () => {
	const { t } = useTranslation();

	return (
		<>
			<h1>{t("forms")}</h1>
			<p>{t("form.description")}</p>
			<form action="/submit-form" method="POST" className="p-4">
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
          {t('form.fields', { returnObjects: true })[0]}
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="form-control"
						required
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="affiliation" className="form-label">
          {t('form.fields', { returnObjects: true })[1]}
					</label>
					<input
						type="text"
						id="affiliation"
						name="affiliation"
						className="form-control"
						required
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="academic_title" className="form-label">
          {t('form.fields', { returnObjects: true })[2]}
					</label>
					<input
						type="text"
						id="academic_title"
						name="academic_title"
						className="form-control"
						required
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="abstract" className="form-label">
          {t('form.fields', { returnObjects: true })[3]}
					</label>
					<textarea
						id="abstract"
						name="abstract"
						maxLength="200"
						className="form-control"
						rows="3"
						required
					></textarea>
				</div>

				<div className="mb-3">
					<label htmlFor="email" className="form-label">
          {t('form.fields', { returnObjects: true })[4]}
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="form-control"
						required
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="phone" className="form-label">
          {t('form.fields', { returnObjects: true })[5]}
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						className="form-control"
						required
					/>
				</div>

				<button type="submit" name="submit" className="btn btn-primary">
					{t("submit")}
				</button>
			</form>
		</>
	);
};

export default Forms;
