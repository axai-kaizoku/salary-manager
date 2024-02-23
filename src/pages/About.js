export default function About() {
	return (
		<main className="h-screen">
			<div className="w-full p-4">
				<h1 className="text-4xl font-light md:text-4xl lg:text-5xl sm:text-4xl">
					About
				</h1>
				<div className="w-11/12 my-2 border rounded"></div>
				<div className="w-full">
					<p className="text-lg">What is Salary Manager?</p>
					<br />
					<p>
						Salary Manager is a site designed to minimize the time required for
						calculating the salary of an individual. It can be used by any shops
						(full-scale shops) to calculate their salesperson's salary. We
						designed it to address issues specifically with Vishala Shopping
						Malls.
					</p>
					<br />

					<p className="text-lg">How to use this?</p>
					<br />
					<p>
						Input the time an individual arrived (early or late) based on their
						working hours, and it will calculate the overtime (O.T). By entering
						their current reserved salary and the days present, the app will
						continue to perform these calculations for you.
					</p>
					<br />

					<p className="text-lg">Future improvements?</p>
					<br />
					<p>
						We are planning to scale this for individual employee data,
						including their previous salaries, overtime, and more, while
						integrating with a database.
					</p>
				</div>
			</div>
		</main>
	);
}
