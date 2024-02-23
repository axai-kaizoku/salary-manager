export default function About() {
	return (
		<main className="h-screen">
			<div className="w-full p-4">
				<h1 className="text-4xl font-light md:text-4xl lg:text-5xl sm:text-4xl">
					About
				</h1>
				<div className="w-11/12 my-2 border rounded"></div>
				<div className="w-full">
					<p className="text-lg">What is this Salary Manager?</p>
					<br />
					<p>
						Salary Manager is a site designed for minimizing time for
						calculating salaries of an individual. It can be used by any shops
						(full scale shops) to calculate their Salesperson's salary. We have
						designed it to solve problem with Vishala Shopping Malls especially.
					</p>
					<br />

					<p className="text-lg">How to use this?</p>
					<br />
					<p>
						Input the time of an individual has came (early or late) according
						to their working hours, by which it can calculate the overtime
						(O.T). Entering their current reserved salary and their days present
						app will continue to do that work for you.
					</p>
					<br />

					<p className="text-lg">Future improvements?</p>
					<br />
					<p>
						We are planning on to scale this for an individual employee data.
						All their previous salaries. Over time and many more while
						integrating with database.
					</p>
				</div>
			</div>
		</main>
	);
}
