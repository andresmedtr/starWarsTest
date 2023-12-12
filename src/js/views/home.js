import React from "react";
import "../../styles/home.css";
import "../component/card";
import Card from "../component/card";


const Home = () => {
	return(
	// <div className="container-fluid mt-5 border border-dark">
	<div>
		<div className="container-fluid p-3 ms-3">
			<h2>Characters</h2>
				<div className = "mt-4 d-flex flex-wrap gap-5 overflow-y-auto ">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
		</div>	
					
		<div className="container-fluid p-3 ms-3 my-5">
			<h2>Planets</h2>	
				<div className = "mt-4 d-flex flex-wrap gap-5 overflow-y-auto">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					
				</div>
		</div>
	</div>

);
				};
export default Home;