import { FC } from "react";

interface IProps {
	handleSubmit: (e: any) => void;
}

const Input: FC<IProps> = ({ handleSubmit }) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input placeholder="task..." type="text"></input>
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default Input;
