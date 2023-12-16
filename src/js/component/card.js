import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({data}) => {
const {store, actions} = useContext(Context);
console.log(store.people,"data personajes")
  return (
	data.map((person,index)=>(
		<div className="card ">
		<img src={rigoImage} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{person.name}</h5>
				<p className="card-text">
					<p className="p-0 m-0">Gender:</p>
					<p className="p-0 m-0">Hair-color:</p>
					<p className="p-0 m-0">Eye-color:</p>
				</p>
				<Link to="/demo">
					<button className="btn btn-outline-primary pe-4">Learn more!</button>
				</Link>
				<button className="btn btn-light ms-5"><i className="fa-regular fa-heart" style={{color: "#ff0f0f",}}/></button>
			</div>
	</div>
	))
		// <div className="card ">
		// 	<img src={rigoImage} className="card-img-top" alt="..."/>
		// 		<div className="card-body">
		// 			<h5 className="card-title">Character Name</h5>
		// 			<p className="card-text">
		// 				<p className="p-0 m-0">Gender:</p>
		// 				<p className="p-0 m-0">Hair-color:</p>
		// 				<p className="p-0 m-0">Eye-color:</p>
		// 			</p>
		// 			<Link to="/demo">
		// 				<button className="btn btn-outline-primary pe-4">Learn more!</button>
		// 			</Link>
		// 			<button className="btn btn-light ms-5"><i className="fa-regular fa-heart" style={{color: "#ff0f0f",}}/></button>
		// 		</div>
		// </div>
  );
};

export default Card;