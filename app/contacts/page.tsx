// contacts
"use client"
import styles from "./contacts.module.scss";
import Image from "next/image";

const params = {
	title: "I miei contatti",
	description:
		"Se hai domande, richieste o vuoi semplicemente entrare in contatto, non esitare a scrivermi! Sarà un piacere risponderti.",
	email_icon: "/email_icon.webp",
	email: "samuelegennaro@gmail.com",
	linkedin_icon: "/LinkedIn_icon.svg.webp",
	linkedin: "https://www.linkedin.com/in/samuele-gennaro/",
	github_icon: "/github_icon.webp",
	github: "https://github.com/samuelegen",
};

export default function Contacts() {
	return (
		<>
			<div className={styles.main}>
				<h1>{params.title}</h1>
				<p>{params.description}</p>
			</div>
			<div className={styles.contacts_elements}>
				<div className={styles.contact_item}>
					<Image src={params.email_icon} width={120} height={120} alt="email" />
					<p>{params.email}</p>
				</div>
				<div className={styles.contact_item}>
					<Image
						src={params.linkedin_icon}
						width={120}
						height={120}
						alt="linkedin"
					/>
					<p>{params.linkedin}</p>
				</div>

				<div className={styles.contact_item}>
					<Image
						src={params.github_icon}
						width={120}
						height={120}
						alt="github"
					/>
					<p>{params.github}</p>
				</div>
			</div>
		</>
	);
}
