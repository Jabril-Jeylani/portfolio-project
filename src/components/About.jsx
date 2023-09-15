import React from "react";

function About() {
	return (
		<div
			name="about"
			className="w-full h-screen bg-[#0a192f] text-gray-300 px-4"
		>
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							About
						</p>
					</div>
					<div></div>
				</div>

				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-left text-4xl font-bold">
						<p>Hi, I'm Jabril, nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p>
							I am driven by an unyielding passion for technology and a talent
							for crafting exceptional software solutions. My journey into
							software engineering has been a long and winding road that has
							taken me in directions I never thought possible. Constantly
							learning and growing with an eye towards the future, I am ready to
							begin my career in earnest.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
