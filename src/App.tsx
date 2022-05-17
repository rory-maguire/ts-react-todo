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

	return (
		<div className="App">
			<Input handleSubmit={handleSubmit} />
			<List todos={todos} />
		</div>
	);
}

export default App;
