import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DaysInputPage({ onSubmit }) {
	const navigate = useNavigate();
	const initialData = [
		{ id: 1, early: 0, late: 0 },
		{ id: 2, early: 0, late: 0 },
		{ id: 3, early: 0, late: 0 },
		{ id: 4, early: 0, late: 0 },
		{ id: 5, early: 0, late: 0 },
		{ id: 6, early: 0, late: 0 },
		{ id: 7, early: 0, late: 0 },
		{ id: 8, early: 0, late: 0 },
		{ id: 9, early: 0, late: 0 },
		{ id: 10, early: 0, late: 0 },
		{ id: 11, early: 0, late: 0 },
		{ id: 12, early: 0, late: 0 },
		{ id: 13, early: 0, late: 0 },
		{ id: 14, early: 0, late: 0 },
		{ id: 15, early: 0, late: 0 },
		{ id: 16, early: 0, late: 0 },
		{ id: 17, early: 0, late: 0 },
		{ id: 18, early: 0, late: 0 },
		{ id: 19, early: 0, late: 0 },
		{ id: 20, early: 0, late: 0 },
		{ id: 21, early: 0, late: 0 },
		{ id: 22, early: 0, late: 0 },
		{ id: 23, early: 0, late: 0 },
		{ id: 24, early: 0, late: 0 },
		{ id: 25, early: 0, late: 0 },
		{ id: 26, early: 0, late: 0 },
		{ id: 27, early: 0, late: 0 },
		{ id: 28, early: 0, late: 0 },
		{ id: 29, early: 0, late: 0 },
		{ id: 30, early: 0, late: 0 },
		{ id: 31, early: 0, late: 0 },
		{ id: 32, early: 0, late: 0 },
		{ id: 33, early: 0, late: 0 },
		{ id: 34, early: 0, late: 0 },
		{ id: 35, early: 0, late: 0 },
	];

	const [data, setData] = useState(() => {
		const storedData = localStorage.getItem('daysInputData');
		return storedData ? JSON.parse(storedData) : initialData;
	});

	const handleChange = (id, type, value) => {
		setData((prevData) =>
			prevData.map((item) =>
				item.id === id ? { ...item, [type]: parseInt(value, 10) || 0 } : item,
			),
		);
	};

	useEffect(() => {
		localStorage.setItem('daysInputData', JSON.stringify(data));
	}, [data]);

	const handleSubmit = () => {
		let earlyMin = 0;
		let lateMin = 0;
		data.forEach((day) => (earlyMin += day.early));
		data.forEach((day) => (lateMin += day.late));
		const overTime = earlyMin - lateMin;
		onSubmit(overTime);
		navigate('/salary');
	};
	return (
		<div>
			<div className="w-full p-4 h-fit">
				<h1 className="text-4xl font-light md:text-4xl lg:text-5xl sm:text-4xl">
					Salary Manager
				</h1>
				<div className="w-11/12 my-2 border rounded"></div>

				<b className="text-lg font-medium">Instructions:</b>

				<ul>
					<li className="p-1">
						<b className="font-medium">Days:</b> Please fill in according to the
						days.
					</li>
					<li className="p-1">
						<b className="font-medium">Early (min):</b> Indicate how early/late
						an individual arrived at the shop, similar to a check-in process.
						For example, if the normal time is 9:00, and the person arrived at
						8:00, it means 60 minutes early.
					</li>
					<li className="p-1">
						<b className="font-medium">Late (min):</b> Indicate how early/late
						an individual left the shop, similar to a check-out process. For
						example, if the closing time is 9:00, and the person left at 6:00
						pm, it means the person left 3 hours earlier, equivalent to 3 x 60,
						or 180 minutes.
					</li>
					<li className="p-1">
						<b className="font-medium">Note:</b> Please provide all inputs in
						minutes only.
					</li>
				</ul>
			</div>
			<div className="flex flex-col items-center justify-center w-full h-full">
				<table className="p-4 m-4 text-2xl text-center bg-white border-4 border-black ">
					<thead className="border-4 border-black">
						<tr>
							<th>Day</th>
							<th>Early (min)</th>
							<th>Late (min)</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>
									<input
										type="number"
										value={item.early}
										onChange={(e) =>
											handleChange(item.id, 'early', e.target.value)
										}
									/>
								</td>
								<td>
									<input
										type="number"
										value={item.late}
										onChange={(e) =>
											handleChange(item.id, 'late', e.target.value)
										}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="text-center">
					<button
						onClick={handleSubmit}
						className="p-2 m-4 mb-8 bg-white border rounded-sm shadow-xl cursor-pointer">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default DaysInputPage;
