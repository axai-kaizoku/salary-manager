import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DaysInputPage({ onSubmit }) {
	const navigate = useNavigate();
	const [data, setData] = useState([
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
	]);

	const handleChange = (id, type, value) => {
		setData((prevData) =>
			prevData.map((item) =>
				item.id === id ? { ...item, [type]: parseInt(value, 10) || 0 } : item,
			),
		);
	};

	const handleSubmit = () => {
		let earlyMin = 0;
		let lateMin = 0;
		data.forEach((day) => (earlyMin += day.early));
		data.forEach((day) => (lateMin += day.late));

		const overTime = earlyMin - lateMin;

		console.log(earlyMin);
		console.log(lateMin);
		console.log(overTime);
		onSubmit(overTime);
		console.log(data);
		navigate('/salary');
	};
	return (
		<div className="flex flex-row justify-center items-center w-full h-full">
			<div>
				<table className="text-center text-2xl p-4 m-4 border-4 border-black ">
					<thead className="border-4 border-black">
						<th>Day</th>
						<th>Early (min)</th>
						<th>Late (min)</th>
					</thead>
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
				</table>
				<button
					onClick={handleSubmit}
					className="p-2 m-4 border-2 border-black rounded-sm">
					Submit
				</button>
			</div>
		</div>
	);
}

export default DaysInputPage;
