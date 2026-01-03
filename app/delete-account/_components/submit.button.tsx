"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
	const status = useFormStatus();

	return (
		<button
			type="submit"
			className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition mt-4"
		>
			{status.pending ? "Solicitando..." : "Excluir minha conta"}
		</button>
	);
}
