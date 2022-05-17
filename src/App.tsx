import React, { ChangeEvent, ReactElement, useState } from "react";
import List from "../src/Components/List";
import Input from "./Components/Input";
import "./App.css";
import { todosData } from "./Data/index";

function App(): ReactElement {
	const [todos, setTodos] = useState(todosData);

	const randomNum = (): number => Math.floor(Math.random() * 1000000);

	const handleSubmit = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();
		setTodos([...todos, { id: randomNum(), todo: e.target.value }]);
	};

	const handleClick = (id: number) => {
		let index = todos.findIndex((el) => {
			return el.id === id;
		});
		setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
	};

	return (
		<div className="App">
			<Input handleSubmit={handleSubmit} />
			<List todos={todos} handleClick={handleClick} />
		</div>
	);
}

export default App;
