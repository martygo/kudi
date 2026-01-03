import Link from "next/link";
import React from "react";

export default function Header() {
	return (
		<header className="flex flex-col gap-8">
			<div className="bg-black text-white">
				<div className="container mx-auto px-2 lg:px-0 py-2">
					<div className="flex items-center justify-between px-2 py-4">
						<div>
							<Link href="/">
								<h3 className="text-[20px] font-medium text-orange-600">
									KUDI
								</h3>
							</Link>
						</div>

						<ul className="flex gap-5">
							<li className="text-sm font-medium">
								<Link href="/privacy-policy" className="hover:underline">
									🔖 política de privacidade
								</Link>
							</li>
							<li className="hidden lg:block text-sm font-medium">
								<Link href="/delete-account" className="hover:underline">
									🔴 deletar sua conta
								</Link>
							</li>
						</ul>
						<div></div>
					</div>
				</div>
			</div>
		</header>
	);
}
