import { Routes, Route } from 'react-router-dom';
import DaysInputPage from './pages/DaysInputPage';
import SalaryPage from './pages/SalaryPage';
import { useState } from 'react';

function App() {
	const [overTime, setOverTime] = useState(0);

	const handleDaysInputSubmit = (overTimeValue) => {
		setOverTime(overTimeValue);
	};
	return (
		<div className="flex flex-row justify-center items-center w-full h-full">
			<Routes>
				<Route
					path="/"
					element={<DaysInputPage onSubmit={handleDaysInputSubmit} />}
				/>
				<Route
					path="/salary"
					element={<SalaryPage overTime={overTime} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
