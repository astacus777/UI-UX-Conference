import React from "react";
import { useTranslation } from "react-i18next";

const Directions = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h2>{t("directions-title")}</h2>
			
			<iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.45905521402!2d20.851252355860975!3d52.22967561695907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669d50f00b%3A0x2db8f81552c2d3b7!2sWarszawa!5e0!3m2!1spl!2spl!4v1694449626231!5m2!1spl!2spl"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
			<ul>
				{t("directions", { returnObjects: true }).map((direction, index) => (
					<li key={index}>
						<h3>{direction.method}</h3>
						<p>{direction.details}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Directions;
