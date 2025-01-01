import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import SelectMode from './pages/SelectMode';
import GamePage from './pages/GamePage';
import { AudioProvider, AudioContext } from './pages/AudioContext';
import LobbyPage from "./pages/LobbyPage.tsx";

const App: React.FC = () => {
	return (
		<AudioProvider>
		  <Routes>
			<Route path="/" element={<Navigate to="/auth/login" />} />
			<Route path="/auth/login" element={<Login />} />
			<Route path="/auth/register" element={<Register />} />
			<Route path="/main" element={<MainPage />} />
			<Route path="/select" element={<SelectMode />} />
			<Route path="/single-player" element={<GamePage />} />
			  <Route path="/lobby" element={<LobbyPage />} />
		  </Routes>
		</AudioProvider>
	);
};

export default App;
