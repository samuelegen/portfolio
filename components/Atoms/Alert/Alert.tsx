import { useState } from "react";

const Alert = () => {
	const [visible, setVisible] = useState(true);

	if (!visible) return null;

	return (
		<>
			<div
				role="alert"
				className="alert fixed bottom-5 left-1/2 z-[9999] py-2.5 px-5 bg-black/80 text-white rounded-[5px] text-base shadow-[0_4px_8px_rgba(0,0,0,0.2)] animate-fadeInUp"
			>
				<div className="flex items-center gap-4">
					<span className="text-green-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</span>

					<div className="flex-1">
						<strong className="block font-medium"></strong>
						<p className="text-sm m-0">Testo copiato negli appunti</p>
					</div>

					<button
						className="text-white transition hover:text-gray-200"
						onClick={() => setVisible(false)}
					>
						<span className="sr-only">Dismiss popup</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>

			<style jsx>{`
				@keyframes fadeInUp {
					0% {
						opacity: 0;
						transform: translate(-50%, 100%);
					}
					100% {
						opacity: 1;
						transform: translate(-50%, 0);
					}
				}
				.animate-fadeInUp {
					animation: fadeInUp 0.5s ease-out forwards;
				}
				@media (max-width: 480px) {
					.alert {
						/* Occupa quasi tutta la larghezza con 20px di margine su entrambi i lati */
						width: calc(100% - 40px);
					}
				}
			`}</style>
		</>
	);
};

export default Alert;
