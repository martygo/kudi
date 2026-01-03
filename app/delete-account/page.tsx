"use client";

import { toast } from "sonner";

import { createReason } from "./actions";
import SubmitButton from "./_components/submit.button";

export default function DeleteAccount() {
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		await createReason({
			email: formData.get("email") as string,
			reason: formData.get("reason") as string,
		});

		toast("Solicitação enviada", {
			description: "Dentro de alguns dias sua conta será excluída.",
			position: "top-center",
			action: {
				label: "Fechar",
				onClick: () => void 0,
			},
		});
	}

	return (
		<div className="container mx-auto px-2 lg:px-0">
			<div className="mb-8">
				<h1 className="text-2xl font-semibold mb-3">Delete sua conta</h1>
				<p className="text-lg font-light text-justify w-full lg:w-[800px]">
					A qualquer momento e por qualquer motivo, você pode solicitar a
					exclusão permanente da sua conta. Para sua segurança, verificamos
					todas as solicitações de exclusão. Esse processo leva até 7 dias. Sua
					conta permanecerá ativa enquanto a verificação estiver em andamento.
				</p>
			</div>

			<div className="w-full lg:w-[800px] flex flex-col gap-8 mb-8">
				<div className="w-full">
					<h2 className="text-xl font-semibold mb-1">
						1. O que acontece quando minha conta é excluída?
					</h2>
					<ul className="list-disc list-inside text-lg font-light text-justify ml-6">
						<li>Seus dados pessoais serão removidos de nossos sistemas.</li>
						<li>
							Você perderá o acesso a todos os serviços e benefícios associados
							à sua conta.
						</li>
						<li>
							Algumas informações podem ser retidas para fins legais ou de
							conformidade, conforme descrito em nossa política de privacidade.
						</li>
					</ul>
				</div>
				<div className="w-full">
					<h2 className="text-xl font-semibold mb-1">
						2. Antes de excluir sua conta:
					</h2>
					<ul className="list-disc list-inside text-lg font-light text-justify ml-6">
						<li>
							Saia da sua conta nos seus dispositivos que estejam conectados
							para evitar problemas de acesso futuros.
						</li>
					</ul>
				</div>
			</div>

			<div className="w-full lg:w-[900px]">
				<div className="w-full mb-5">
					<p>
						<span className="font-semibold">
							A exclusão da conta é permanente.
						</span>{" "}
						Para finalizar a exclusão da sua conta, por favor, preencha o
						formulário abaixo.
					</p>
				</div>

				<div className="flex flex-col gap-4">
					<form
						onSubmit={handleSubmit}
						className="w-full lg:w-[600px] flex flex-col gap-2"
					>
						<label className="flex flex-col gap-2">
							<span className="font-medium">Confirme seu e-mail</span>
							<input
								type="email"
								name="email"
								required={true}
								placeholder="Digite seu e-mail para confirmar"
								className="border rounded py-1 px-3"
							/>
						</label>
						<label className="flex flex-col gap-2">
							<span className="font-medium">Motivo da exclusão</span>
							<select
								defaultValue=""
								name="reason"
								className="border rounded py-1 px-3"
								required={true}
							>
								<option value="" disabled>
									Selecione um motivo
								</option>
								<option value="Preocupações com privacidade">
									Preocupações com privacidade
								</option>
								<option value="Encontrei uma alternativa melhor">
									Encontrei uma alternativa melhor
								</option>
								<option value="Problemas técnicos">Problemas técnicos</option>
								<option value="Prefiro nāo dizer">Prefiro nāo dizer</option>
							</select>
						</label>
						<SubmitButton />
					</form>
				</div>
			</div>
		</div>
	);
}
