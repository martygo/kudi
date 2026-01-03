import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const STRAPI = process.env.STRAPI_API;
		if (!STRAPI) {
			return new NextResponse("Missing STRAPI_API", { status: 500 });
		}

		const res = await fetch(`${STRAPI}/reports`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				data: { email: body.email, reason: body.reason },
			}),
		});

		if (!res.ok) {
			const text = await res.text();
			return new NextResponse(text || "Upstream error", { status: res.status });
		}

		return NextResponse.json({ ok: true });
	} catch (error) {
		console.error(error);
		return new NextResponse("Server error", { status: 500 });
	}
}
