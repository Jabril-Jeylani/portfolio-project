import React from "react";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";

function Work() {
	return (
		<div
			name="work"
			className="w-full md:h-screen text-gray-300 bg-[#0a192f] px-4 pt-[100px]"
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
						Projects
					</p>
					<p className="py-6">Here are some of my recent projects:</p>
				</div>
				{/* Container */}
				<div className="grid sm:grid-cols 2 md:grid-cols-3 gap-4">
					{/* Grid Item */}

					<div
						style={{ backgroundImage: `url(${Project3})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								Fullstack MERN Application
							</span>
							<div className="pt-8 text-center">
								<a href="https://jabril-jeylani-petshop.onrender.com/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-7800 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/Jabril-Jeylani/Mod3FinalProject">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-7800 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					<div
						style={{ backgroundImage: `url(${Project2})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								React Application
							</span>
							<div className="pt-8 text-center">
								<a href="https://jabril-jeylani.netlify.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-7800 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/Jabril-Jeylani/StockTracker_Mod2Project">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-7800 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					<div
						style={{ backgroundImage: `url(${Project1})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								HTML, CSS, JS Application
							</span>
							<div className="pt-8 text-center">
								<a href="https://jabril-jeylani.github.io/Breakout-Project/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-7800 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/Jabril-Jeylani/Breakout-Project/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-7800 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Work;
