import React from "react";

export default function Footer() {
	return (
		<footer className="bg-black text-white">
			<div className="container mx-auto px-2 py-6">
				<div className="flex flex-col items-center">
					<p className="text-sm">
						© {new Date().getFullYear()} Kudi. All rights reserved.
					</p>
					<p className="text-sm mt-2">
						Developed by{" "}
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="underline"
						>
							Primasdado
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
