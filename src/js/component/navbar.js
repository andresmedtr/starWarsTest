import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/Star-wars-logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">

			<Link to="/">
			<p>
				<img className="ms-5" height="70px" src={starWarsLogo}/>
			</p>
			</Link>
			<div className="ml-auto">
				{/* <Link to="/demo"> */}
					<div className="btn-group dropstart">
						<button type="button" className="btn btn-primary dropdown-toggle me-3" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							{/* Aqui debe ir un contador para los favoritos que se van agregando */}
						</button>
						<ul className="dropdown-menu">
							{/* <Link to="/demo"> */}
								{/* link al personaje */}
								
								<li className="dropdown-item">Favorito agregado <button className="btn btn-outline-link text-dark border border-none"><i className="fa-sharp fa-solid fa-trash"/></button></li>
								{/* Debe ser dinamico, si se agrega a favoritos, se debe agregar a estos <lis> y se debe poder eliminar (solo mostrar el nombre y el link al personaje(etc))  */}
							{/* </Link> */}
						</ul>
					</div>

			</div>
		</nav>
	);
};
