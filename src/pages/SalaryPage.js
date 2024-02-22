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

		console.log(`Extra Hours worked: ${extraHours}`);

		console.log(`OverTime or Deficit Amount: ${extraSalary}`);

		console.log(`This month salary: ${totalSalary}`);

		setTotalData({
			extraHours: extraHours.toFixed(3),
			extraSalary: extraSalary.toFixed(3),
			totalSalary: totalSalary.toFixed(3),
		});
	};

	return (
		<div className="m-4 w-full h-full text-center">
			<div className="flex flex-row justify-start w-full">
				<Link to="/">Back</Link>
			</div>
			<h1 className="text-3xl m-4">Salary Page</h1>
			<div className="flex flex-row justify-around items-center w-full h-full m-8">
				<table className="border-4 border-red-500 w-2/5 ">
					<thead>
						<th>Salary</th>
						<th>
							<input
								type="number"
								className="w-28"
								value={reservedSalary}
								onChange={(e) => setReservedSalary(e.target.value)}
							/>
						</th>
					</thead>
					<tr>
						<th>No. of present Days</th>
						<td>
							<input
								type="number"
								value={daysPresent}
								onChange={(e) => setDaysPresent(e.target.value)}
							/>
						</td>
					</tr>
					<tr>
						<th>Working Hours</th>
						<td>
							<input
								type="number"
								value={workingHours}
								onChange={(e) => setWorkingHours(e.target.value)}
							/>
						</td>
					</tr>
				</table>
				<div className="border-4 border-green-400 w-1/2">
					<p className="text-2xl">Extra Hours worked: {totalData.extraHours}</p>
					<br />
					<p className="text-2xl">
						OverTime / Deficit Amount: {totalData.extraSalary}
					</p>
					<br />
					<p className="text-2xl">This month salary: {totalData.totalSalary}</p>
				</div>
			</div>
			<button
				onClick={handleSubmit}
				className="p-2 m-4 border-2 border-black rounded-sm">
				Submit
			</button>
		</div>
	);
}
