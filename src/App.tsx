import React, { ReactElement, useState, ChangeEvent } from "react";
import List from "../src/Components/List";
import Input from "./Components/Input";
import "./App.css";
import { todosData } from "./Data/index";

function App(): ReactElement {
	const [todos, setTodos] = useState(todosData);

	const randomNum = (): number => Math.floor(Math.random() * 1000000);

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setTodos([...todos, { id: randomNum(), todo: e.target.value }]);
	};

	return (
		<div className="App">
			<Input />
			<List todos={todos} handleChange={handleChange} />
		</div>
	);
}

export default App;
