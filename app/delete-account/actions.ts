"use server";

import { revalidatePath } from "next/cache";

export async function createReason(data: { email: string; reason: string }) {
	try {
		const response = await fetch(`${process.env.STRAPI_API}/reports`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				data: {
					email: data.email,
					reason: data.reason,
				},
			}),
		});

		if (!response.ok) {
			throw new Error(`API error: ${response.status}`);
		}

		revalidatePath("/delete-account");
	} catch (error) {
		console.error("Erro ao deletar conta:", error);
		throw error;
	}
}
