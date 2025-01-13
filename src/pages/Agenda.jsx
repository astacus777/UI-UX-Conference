import React from "react";
import { useTranslation } from "react-i18next";

const Agenda = () => {
	const { t } = useTranslation();

	const renderSessions = dayKey => (
		<div>
			<h2>{t(`agenda.${dayKey}.title`)}</h2>

			<div className="accordion" id={`accordion-${dayKey}`}>
				{t(`agenda.${dayKey}.sessions`, { returnObjects: true }).map(
					(session, index) => (
						<div className="accordion-item" key={`${dayKey}-${index}`}>
							<h2
								className="accordion-header"
								id={`heading-${dayKey}-${index}`}
							>
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={`#collapse-${dayKey}-${index}`}
									aria-expanded="false"
									aria-controls={`collapse-${dayKey}-${index}`}
								>
									<strong>
										{session.time} – {session.title}
									</strong>
								</button>
							</h2>
							<div
								id={`collapse-${dayKey}-${index}`}
								className="accordion-collapse collapse"
								aria-labelledby={`heading-${dayKey}-${index}`}
								data-bs-parent={`#accordion-${dayKey}`}
							>
								<div className="accordion-body">
									{session.presenter && (
										<p>
											<strong>Presenter:</strong> {session.presenter}
										</p>
									)}
									<p>{session.description}</p>
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);

	return (
		<div>
			{renderSessions("day1")}
			{renderSessions("day2")}
		</div>
	);
};

export default Agenda;
