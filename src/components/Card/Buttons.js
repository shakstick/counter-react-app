import React from "react";
import "./Buttons.css";

function Buttons(props) {
	const subtractHandler = () => {
		props.onChangeNumber(Number(props.num) - 1 + "");
	};

	const resetHandler = () => {
		props.onChangeNumber("0");
	};

	const addHandler = () => {
		props.onChangeNumber(Number(props.num) + 1 + "");
	};
	return (
		<div className="buttons">
			<button className="subtract" onClick={subtractHandler}>
				- Subtract
			</button>
			<button className="reset" onClick={resetHandler}>
				! Reset
			</button>
			<button className="add" onClick={addHandler}>
				+ Add
			</button>
		</div>
	);
}

export default Buttons;
