import React from "react";
import { FC } from "react";
import { Todo } from "../../Interfaces/index";

interface IProps {
	handleClick: (id: number) => void;
	todos: Todo[];
}

const List: FC<IProps> = ({ handleClick, todos }) => {
	return (
		<div>
			<button onClick={handleClick}></button>
		</div>
	);
};

export default List;
