export default function Contact() {
	return (
		<main className="h-screen">
			<div className="w-full p-4">
				<h1 className="text-4xl font-light md:text-4xl lg:text-5xl sm:text-4xl">
					Contact Us
				</h1>
				<div className="w-11/12 my-2 border rounded"></div>
				<div className="w-full">
					<p className="text-lg">
						This app is created to minimize the time taken for calculating the
						salary of an individual, considering details such as overtime, days
						present, and other relevant information.
					</p>
					<br />
					<div>
						<p className="text-2xl font-light">Reach Out</p>
						<div className="w-11/12 my-2 border rounded"></div>
						<p>Feel free to provide suggestions to help us improve our app.</p>
						<br />
						<ul>
							<li>
								<span className="text-base">
									GitHub:{' '}
									<a
										href="https://www.github.com/axai-kaizoku"
										target="_blank"
										rel="noreferrer">
										axai-kaizoku
									</a>
								</span>
							</li>
							<li>
								<span className="text-base">
									GitHub:{' '}
									<a
										href="https://www.github.com/DMC-Nero"
										target="_blank"
										rel="noreferrer">
										DMC-Nero
									</a>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
