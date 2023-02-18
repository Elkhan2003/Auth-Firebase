import Login from "./components/Login";
import Registration from "./components/Registration";
import { Wrapper } from "./components/wrapper/Wrapper";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const App = () => {
	return (
		<>
			<div>
				<AuthContextProvider>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/registration" element={<Registration />} />
						<Route
							path="/"
							element={
								<ProtectedRoute>
									<Wrapper />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</AuthContextProvider>
			</div>
		</>
	);
};
