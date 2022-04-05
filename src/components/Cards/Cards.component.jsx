import React from "react";
import Card from "./../Card/Card.component";
import "./Cards.styles.scss";
import BackgroundDecoration from "../Background_decoration/Background_decoration.component";

const Cards = ({ users, ...otherProps }) => {
	return (
		<React.Fragment>
			< section className="slider">
				<div className="cards">
					<div className="cards__wrap">
						{users
							.filter((card) => card.id < 10)
							.map((user) => (
								<Card key={user.id} user={user} {...otherProps} />
							))}
					</div>
				</div>
				<BackgroundDecoration top />
			</section>
		</React.Fragment>
	);
};

export default Cards;