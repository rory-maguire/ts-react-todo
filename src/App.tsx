import React from "react";
import List from "../src/Components/List";
import Input from "./Components/Input";
import "./App.css";
import Todos from "./Data/index";

function App() {
	return (
		<div className="App">
			<Input />
			<List />
		</div>
	);
}

export default App;
