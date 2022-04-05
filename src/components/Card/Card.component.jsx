import React from "react";
import "./Card.styles.scss";

const Card = ({ user, setUserPost }) => {
	const img = `https://i.pravatar.cc/150?img=3${user.id}`
	return (
		<div
			className="card-wrap"
			onClick={event => setUserPost(user.id, event)}
		>
			<img className="card-img" src={img} alt="" />
			<span className="card__userName">{user.name}</span>
			<br />
			<span className="card__companyName">{user.company.name}</span>
		</div>
	);
};

export default Card;