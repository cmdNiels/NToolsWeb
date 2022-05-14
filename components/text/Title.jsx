import React from "react";

export default function Title({ text }) 
{
	return (
		<>
			<h1 className="text-4xl mb-1 font-semibold text-gray-100">
				{text}
			</h1>
		</>
	);
}