import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SalaryPage({ overTime }) {
	const [reservedSalary, setReservedSalary] = useState(0);
	const [daysPresent, setDaysPresent] = useState(0);
	const [workingHours, setWorkingHours] = useState(0);

	const [totalData, setTotalData] = useState({
		extraHours: 0,
		extraSalary: 0,
		totalSalary: 0,
	});

	const handleSubmit = () => {
		const salaryPerDay = reservedSalary / 30;

		const salaryPerHour = salaryPerDay / workingHours;

		const salary = salaryPerDay * daysPresent;

		const extraHours = overTime / 60;

		const extraSalary = extraHours * salaryPerHour;

		const totalSalary = extraSalary + salary;

		setTotalData({
			extraHours: extraHours.toFixed(3),
			extraSalary: extraSalary.toFixed(3),
			totalSalary: totalSalary.toFixed(3),
		});
		localStorage.removeItem('daysInputData');
	};

	return (
		<div className="w-full h-full ">
			<div className="flex flex-row justify-start w-full">
				<Link
					to="/"
					className="p-1 m-1 ">
					Back
				</Link>
			</div>
			<div className="w-full p-4 h-fit">
				<h1 className="text-4xl font-light md:text-4xl lg:text-5xl sm:text-4xl">
					Salary Page
				</h1>
				<div className="w-11/12 my-2 border rounded"></div>
				<b className="text-lg font-medium">Instructions:</b>
				<ul>
					<li className="p-1">
						<b className="font-medium">Salary:</b> Enter the reserved salary of
						a person.
					</li>
					<li className="p-1">
						<b className="font-medium">Days Present:</b> Enter the number of
						days a person is present. For example, if the total number of days
						per month is 30, and the person is present for 25 days (excluding
						Sundays).
					</li>
					<li className="p-1">
						<b className="font-medium">Working Hours:</b> Enter the number of
						working hours allotted to a person.
					</li>
				</ul>
			</div>
			<div className="flex flex-col items-center justify-around w-full h-full mr-4 ">
				<table className="m-4 text-center bg-white border-4 border-black sm:w-2/3 lg:w-1/2">
					<thead>
						<tr>
							<th className="text-xl">Salary</th>
							<th>
								<input
									type="number"
									className="w-full sm:w-28"
									value={reservedSalary}
									onChange={(e) => setReservedSalary(e.target.value)}
								/>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="text-xl">Days Present</th>
							<td>
								<input
									type="number"
									value={daysPresent}
									onChange={(e) => setDaysPresent(e.target.value)}
								/>
							</td>
						</tr>
						<tr>
							<th className="text-xl">Working Hours</th>
							<td>
								<input
									type="number"
									value={workingHours}
									onChange={(e) => setWorkingHours(e.target.value)}
								/>
							</td>
						</tr>
					</tbody>
				</table>
				<ul className="px-10 my-4 sm:w-2/3 lg:w-1/2 h-fit">
					<li className="my-3 ">
						<p className="text-2xl">
							Extra Hours worked: {totalData.extraHours}
						</p>
					</li>

					<li className="my-3">
						<p className="text-2xl">
							OverTime / Deficit Amount:{' '}
							{isNaN(totalData.extraSalary) ? 'Invalid' : totalData.extraSalary}
						</p>
					</li>
					<li className="my-3">
						<p className="text-2xl">
							This month salary:{' '}
							{isNaN(totalData.totalSalary) ? 'Invalid' : totalData.totalSalary}
						</p>
					</li>
				</ul>
				<button
					onClick={handleSubmit}
					className="p-2 m-4 mb-8 bg-white border rounded-sm shadow-lg cursor-pointer">
					Submit
				</button>
			</div>
		</div>
	);
}
