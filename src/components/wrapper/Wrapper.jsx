import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export const Wrapper = () => {
	const { user, logout } = UserAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate("/");
			console.log("You are logged out");
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<>
			<div className=" h-[6000px] max-w-[600px] mx-auto my-16 p-4">
				<h1 className="text-2xl font-bold py-4">Аккаунт</h1>
				<p>Ваш Email: {user && user.email}</p>

				<button onClick={handleLogout} className="border px-6 py-2 my-4">
					Выход из системы
				</button>
			</div>
		</>
	);
};
