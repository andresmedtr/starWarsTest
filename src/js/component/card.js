import React, { useContext } from 'react';
import rigoImage from '../../img/rigo-baby.jpg';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Card = ({ data }) => {
  const { store, actions } = useContext(Context);
  console.log(store.people);
  return data?.map((item, index) => (
    <div key={index} className="card ">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          Name:
          {item.properties.name.charAt(0).toUpperCase() +
            item.properties.name.slice(1)}
        </h5>
        <div className="card-text">
          <p className="p-0 m-0">
            Gender:{' '}
            {item.properties.gender.charAt(0).toUpperCase() +
              item.properties.gender.slice(1)}
          </p>
          <p className="p-0 m-0">
            Hair-color:{' '}
            {item.properties.hair_color.charAt(0).toUpperCase() +
              item.properties.hair_color.slice(1)}
          </p>
          <p className="p-0 m-0">
            Eye-color:{' '}
            {item.properties.eye_color.charAt(0).toUpperCase() +
              item.properties.eye_color.slice(1)}
          </p>
        </div>
        <Link to="/demo">
          <button className="btn btn-outline-primary pe-4">Learn more!</button>
        </Link>
        <button className="btn btn-light ms-5">
          <i className="fa-regular fa-heart" style={{ color: '#ff0f0f' }} />
        </button>
      </div>
    </div>
  ));
};

export default Card;
