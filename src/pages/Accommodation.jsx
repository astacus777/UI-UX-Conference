import React from "react";
import { useTranslation } from "react-i18next";

const Accommodation = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className="d-flex align-items-start">
				<div
					className="nav flex-column nav-pills me-3"
					id="v-pills-tab"
					role="tablist"
					aria-orientation="vertical"
				>
					{t("accommodations", { returnObjects: true }).map((place, index) => (
						<button
							key={`tab-${index}`}
							className={`nav-link ${index === 0 ? "active" : ""}`} // Pierwszy element aktywny
							id={`v-pills-tab-${index}`}
							data-bs-toggle="pill"
							data-bs-target={`#v-pills-content-${index}`}
							type="button"
							role="tab"
							aria-controls={`v-pills-content-${index}`}
							aria-selected={index === 0 ? "true" : "false"} // Pierwszy element wybrany
						>
							{place.name}
						</button>
					))}
				</div>

				<div className="tab-content" id="v-pills-tabContent">
					{t("accommodations", { returnObjects: true }).map((place, index) => (
						<div
							key={`content-${index}`}
							className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
							id={`v-pills-content-${index}`}
							role="tabpanel"
							aria-labelledby={`v-pills-tab-${index}`}
						>
							<img
								src={`/images/hotel${index + 1}.jpg`}
								alt={`Zdjęcie ${place.name}`}
								style={{ width: "100%", height: "auto", marginBottom: "1rem" }}
							/>
							<p>
								<strong>Lokalizacja:</strong> {place.location}
							</p>
							<p>
								<strong>Standard:</strong> {place.standard}
							</p>
							<p>
								<strong>Udogodnienia:</strong> {place.amenities.join(", ")}
							</p>
							<p>
								<strong>Cena:</strong> {place.price}
							</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Accommodation;
