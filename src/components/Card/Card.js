import React, { useState } from "react";
import Buttons from "./Buttons";
import "./Card.css";

function Card() {
	const [number, setNumber] = useState("0");

	return (
		<div className="container">
			<section className="card">
				<h2 className="header">React Counter App</h2>
				<div
					className={`number-container ${number > 0 && "green"} ${
						number < 0 && "red"
					} `}
				>
					<span
						className={`number ${number > 0 && "green"} ${number < 0 && "red"}`}
					>
						{number}
					</span>
				</div>
				<Buttons onChangeNumber={setNumber} num={number} />
			</section>
		</div>
	);
}

export default Card;
