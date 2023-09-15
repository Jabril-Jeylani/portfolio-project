import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Mongo from "../assets/mongo.png";
import Express from "../assets/express.png";
import Node from "../assets/node.png";
import Github from "../assets/github.png";

function Skills() {
	return (
		<div
			name="skills"
			className="bg-[#0a192f]  text-gray-300 px-4 w-full h-screen"
		>
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-pink-600">
						Skills
					</p>
					<p className="py-4">
						These are the technologies I'm proficient with:
					</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto my-2"
							src={HTML}
							alt="HTML icon"
						></img>
						<p className="my-4">HTML</p>
					</div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto my-2"
							src={CSS}
							alt="CSS icon"
						></img>
						<p className="my-4">CSS</p>
					</div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto my-2"
							src={JavaScript}
							alt="JavaScript icon"
						></img>
						<p className="my-4">JavaScript</p>
					</div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto my-2"
							src={ReactImg}
							alt="React icon"
						></img>
						<p className="my-4">React</p>
					</div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto my-2"
							src={Github}
							alt="Github icon"
						></img>
						<p className="my-4">Github</p>
					</div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto my-2"
							src={Node}
							alt="Node icon"
						></img>
						<p className="my-4">Node</p>
					</div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto my-2"
							src={Express}
							alt="Express icon"
						></img>
						<p className="my-4">Express</p>
					</div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto my-2"
							src={Mongo}
							alt="Mongo icon"
						></img>
						<p className="my-4">MongoDB</p>
					</div>
				</div>
				
			</div>
		</div>
	);
}

export default Skills;
