import Link from "next/link";
import React from "react";

export default function Header() {
	return (
		<header className="flex flex-col gap-8">
			<div className="bg-black text-white">
				<div className="flex items-center justify-center px-2 py-4">
					<ul className="flex gap-5">
						<li className="text-sm font-medium">
							<Link href="/admin" className="hover:underline">
								🔖 privacy policy
							</Link>
						</li>
						<li className="hidden lg:block text-sm font-medium">
							<Link href="/delete-account" className="hover:underline">
								🔴 delete your account
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
