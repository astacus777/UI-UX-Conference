import React from "react";
import i18n from 'i18next';
import "../styles/LanguageSwitcher.css";

const LanguageSwitcher = () => {
	const changeLanguage = lng => {
		i18n
			.changeLanguage(lng)
			.then(() => console.log(`Language changed to ${lng}`))
			.catch(err => console.error(`Failed to change language: ${err}`));
	};

	return (
		<div>
			<label className="switch">
				<input className="cb" type="checkbox" />
				<span className="toggle">
					<span className="left" onClick={() => changeLanguage("pl")}>
						PL
					</span>
					<span className="right" onClick={() => changeLanguage("en")}>
						EN
					</span>
				</span>
			</label>
		</div>
	);
};

export default LanguageSwitcher;
