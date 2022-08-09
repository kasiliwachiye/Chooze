import React from "react";

const Card = ({ brand, category, title, isNew, onClick }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl cursor-pointer" onClick={onClick}>
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {isNew? <div className="badge badge-secondary">NEW</div> : null}
        </h2>
        <p className="card-text">{brand}</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
