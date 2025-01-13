import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Menu = () => {
	const { t } = useTranslation();

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					{t("home")}
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link alert alert-primary" to="/mission">
								{t("mission.title")}
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link alert alert-warning" to="/participants">
								{t("conferenceParticipants")}
							</Link>
						</li>

						<li className="nav-item dropdown alert alert-primary">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								{t("menu.organizingCommittee")}
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<Link
										className="dropdown-item alert alert-success"
										to="/agenda"
									>
										{t("menu.agenda")}
									</Link>
								</li>
								<li>
									<Link
										className="dropdown-item alert alert-secondary"
										to="/keynote-speakers"
									>
										{t("menu.keynoteSpeakers")}
									</Link>
								</li>
							</ul>
						</li>

            <li className="nav-item dropdown alert alert-primary">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								{t("menu.useFullInfo")}
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<Link
										className="dropdown-item alert alert-success"
										to="/directions"
									>
										{t("menu.directions")}
									</Link>
								</li>
								<li>
									<Link
										className="dropdown-item alert alert-secondary"
										to="/accommodation"
									>
										{t("menu.accommodation")}
									</Link>
								</li>
							</ul>
						</li>

						<li className="nav-item">
							<Link className="nav-link alert alert-success" to="/contact">
								{t("contact")}
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link alert alert-danger" to="/forms">
								{t("forms")}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Menu;
