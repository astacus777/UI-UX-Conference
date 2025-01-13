import React from "react";
import { useTranslation } from "react-i18next";

const Keynote = () => {
	const { t } = useTranslation();
	return (
		<div className="accordion" id="accordionExample">
            <h2>{t('speakers-header')}</h2>
			{t("speakers", { returnObjects: true }).map((speaker, index) => (
				<div className="accordion-item" key={index}>
					<h2 className="accordion-header" id={`heading${index}`}>
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target={`#collapse${index}`}
							aria-expanded="false"
							aria-controls={`collapse${index}`}
						>
							{speaker.name}
						</button>
					</h2>
					<div
						id={`collapse${index}`}
						className="accordion-collapse collapse"
						aria-labelledby={`heading${index}`}
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>{speaker.title}</strong> <br></br>{speaker.description}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Keynote;
