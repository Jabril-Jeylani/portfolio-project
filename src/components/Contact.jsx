import React from "react";

function Contact() {
	return (
		<div
			name="contact"
			className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
		>
			<form
				action=""
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
						Contact
					</p>
					<p className="text-gray-300 py-4">Here you can send me an email below</p>
				</div>
				<input
					className="bg-[#ccd6f6]"
					type="text"
					placeholder="Name"
					name="name"
				></input>
				<input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
				<textarea
					className="bg-[#ccd6f6]"
					name="message"
					rows="10"
					placeholder="Message"
				></textarea>
                <button className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Talk</button>
			</form>
		</div>
	);
}

export default Contact;