import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [error, setError] = useState('');
	const { signIn } = UserAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// setError('')
		try {
			await signIn(email, password);
			navigate("/");
		} catch (e) {
			alert("Неверный логин или пароль!");
			// setError(e.message)
			// console.log(e.message)
		}
	};

	return (
		<>
			<div>
				<img
					src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
					alt="Workflow"
				/>
				<h2>Войдите в свою учетную запись</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email-address" className="sr-only">
					Email address
				</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email address"
				/>
				<br />
				<label>Password</label>
				<input
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<Link to="/registration">Нету учетной записи? Зарегистрироваться.</Link>

				<div>
					<button>Войти</button>
				</div>
			</form>
		</>
	);
};

export default Login;
