export default async function PrivacyPolicy() {
	return (
		<div className="container mx-auto px-2 lg:px-0">
			<div className="mb-8">
				<h1 className="text-2xl font-semibold mb-3">Política de Privacidade</h1>
				<p className="text-lg font-light text-justify w-full lg:w-[900px]">
					Sua privacidade é importante para nós. Esta política de privacidade
					explica como coletamos, usamos e protegemos suas informações.
				</p>
			</div>

			<div className="flex flex-col gap-5 text-lg font-light text-justify w-full lg:w-[900px] mb-8">
				<p>
					O aplicativo <span className="font-bold">Kudi</span> é uma plataforma
					digital desenvolvida e gerenciada pela{" "}
					<span className="font-bold">Primasdado</span>, com o objetivo de
					facilitar o acesso dos cidadãos a experiências gastronômicas,
					hoteleiras, culturais e de lazer em Angola.
				</p>

				<p>
					Com uma interface intuitiva, moderna e georreferenciada, o{" "}
					<span className="font-bold">Kudi</span> conecta os usuários às
					melhores opções com apenas um clique, proporcionando navegação fluida,
					recomendações personalizadas e acesso rápido às informações mais
					relevantes com base na localização do usuário.
				</p>
			</div>

			<div className="w-full lg:w-[900px] flex flex-col gap-8 mb-8">
				<div className="w-full">
					<h2 className="text-xl font-semibold mb-1">1. Coleta de Dados:</h2>
					<ul className="list-disc list-inside text-lg font-light text-justify ml-6">
						<li>
							Informações de registro: nome, e-mail, número de telefone e
							preferências de uso.
						</li>
						<li>
							Dados de navegação: interações com o aplicativo, histórico de
							buscas, lugares visitados, dispositivos e sistema operacional.
						</li>
						<li>
							Informações de terceiros: quando autorizadas pelo usuário (por
							exemplo, login via redes sociais).
						</li>
					</ul>
				</div>
				<div className="w-full">
					<h2 className="text-xl font-semibold mb-1">2. Uso das Informações</h2>
					<ul className="list-disc list-inside text-lg font-light text-justify ml-6">
						<li>Personalize a experiência do usuário na plataforma.</li>
						<li>
							Indicar os restaurantes, hotéis, eventos e atrações mais
							relevantes com base na localização e preferências.
						</li>
						<li>
							Enviar notificações relevantes (promoções, novidades e
							recomendações).
						</li>
						<li>Melhorar os serviços, por meio de análises estatísticas.</li>
						<li>
							Apoiar decisões estratégicas dos parceiros comerciais, sempre de
							forma anônima.
						</li>
					</ul>
				</div>
				<div className="w-full">
					<h2 className="text-xl font-semibold mb-1">
						3. Armazenamento e Proteção dos Dados
					</h2>
					<ul className="list-disc list-inside text-lg font-light text-justify ml-6">
						<li>
							Os dados são armazenados em servidores seguros, com acesso
							restrito e criptografia.
						</li>
						<li>
							Aplicamos práticas rigorosas de segurança da informação para
							prevenir acessos não autorizados, vazamentos ou perda de dados.
						</li>
						<li>
							Os dados são mantidos apenas pelo tempo necessário para cumprir os
							propósitos descritos nesta política.
						</li>
					</ul>
				</div>
				<div className="w-full">
					<h2 className="text-xl font-semibold mb-1">
						4. Compartilhamento de Dados
					</h2>
					<ul className="list-disc list-inside text-lg font-light text-justify ml-6">
						<li>
							Parceiros comerciais, desde que os dados estejam anonimizados ou
							com consentimento explícito do usuário.
						</li>
						<li>
							Autoridades legais, quando exigido por lei ou ordem judicial.
						</li>
						<li>
							Prestadores de serviços contratados, responsáveis por operar
							partes da infraestrutura tecnológica.
						</li>
					</ul>
				</div>
				<div className="w-full">
					<h2 className="text-xl font-semibold mb-1">
						5. Consentimento e Direitos dos Usuários
					</h2>
					<ul className="list-disc list-inside text-lg font-light text-justify ml-6">
						<li>Acessar, corrigir ou excluir seus dados pessoais.</li>
						<li>Retirar seu consentimento para o processamento de dados.</li>
						<li>Solicitar a portabilidade dos dados.</li>
					</ul>

					<p className="bg-yellow-600 text-white p-3 rounded mt-3">
						O consentimento será solicitado no momento da instalação e uso do
						aplicativo. A não disponibilização de determinadas informações pode
						limitar a experiência do usuário.
					</p>
				</div>
				<div className="w-full">
					<h2 className="text-xl font-semibold mb-1">6. Atualizaçōes</h2>
					<p>
						Podemos atualizar esta política de privacidade periodicamente. As
						atualizações serão notificadas aos usuários por meio do aplicativo
						ou por e-mail.
					</p>
				</div>
			</div>
		</div>
	);
}
