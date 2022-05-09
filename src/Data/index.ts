import { ChangeEvent, HtmlHTMLAttributes } from "react";
import { Todo } from "../Interfaces/index";
import { v4 as uuidv4 } from "uuid";

export const todosData: Todo[] = [
	{ id: 1, todo: "I have to walk the dogs" },
	{ id: 2, todo: "I need to take the bins out" },
	{ id: 3, todo: "I need to make a cuppa" },
	{ id: 4, todo: "I need to vac the hallway" },
	{ id: 5, todo: "I need to water the plants" },
	{ id: 6, todo: "I need to tidy my room " },
];

export const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
	setTodos([...todos, { id: uuidv4(), todo: e.target.value }]);
};
