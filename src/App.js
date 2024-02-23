import { Routes, Route, Link } from 'react-router-dom';
import DaysInputPage from './pages/DaysInputPage';
import SalaryPage from './pages/SalaryPage';
import { useState } from 'react';
import About from './pages/About';
import Contact from './pages/ContactUs';
import image from './logo.png';

function App() {
	const [overTime, setOverTime] = useState(0);

	const handleDaysInputSubmit = (overTimeValue) => {
		setOverTime(overTimeValue);
	};
	return (
		<div className="w-full h-full bg-slate-100">
			<header className="flex flex-row items-center justify-between w-full h-20 bg-slate-200">
				<p className="mx-4 text-xl">
					<Link to="/">
						<img
							className="object-cover w-16 h-16 mx-auto"
							src={image}
							alt="logo"
						/>
					</Link>
				</p>
				<ul className="flex flex-row">
					<li className="mx-4 lg:mx-8 md:mx-8">
						<Link to="/about">About</Link>
					</li>
					<li className="mx-4 lg:mx-8 md:mx-8">
						<Link to="/contact">Contact Us</Link>
					</li>
				</ul>
			</header>
			<Routes>
				<Route
					path="/"
					element={<DaysInputPage onSubmit={handleDaysInputSubmit} />}
				/>
				<Route
					path="/salary"
					element={<SalaryPage overTime={overTime} />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
			</Routes>
		</div>
	);
}

export default App;
