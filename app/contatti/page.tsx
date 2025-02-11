// contacts
"use client";
import { useState } from "react";
import Alert from "@/components/Atoms/Alert/Alert";
import styles from "./contacts.module.scss";
import Image from "next/image";

interface Contact {
	type: string;
	icon: string;
	text: string;
	url?: string;
}

const params: Contact[] = [
	{
		type: "email",
		icon: "/email_icon.png",
		text: "samuelegennaro@gmail.com",
	},
	{
		type: "linkedin",
		icon: "/LinkedIn_icon.svg.webp",
		text: "LinkedIn",
		url: "https://www.linkedin.com/in/samuele-gennaro/",
	},
	{
		type: "github",
		icon: "/github_icon.webp",
		text: "GitHub",
		url: "https://github.com/samuelegen",
	},
];

const PAGE_INFO = {
	title: "I miei contatti",
	description:
		"Se hai domande, richieste o vuoi semplicemente entrare in contatto, non esitare a scrivermi! Sarà un piacere risponderti. 😊😁",
};


const handleCopyEmail = (email: string, setOpenAlert: (value:boolean) => void) => {
	navigator.clipboard.writeText(email).then(() => {
		setOpenAlert(true);
		setTimeout(() => setOpenAlert(false), 3000)
	})
}

const handleClick = (contact: Contact, setOpenAlert: (value:boolean) => void) => {
	if (contact.type === "email") {
		handleCopyEmail(contact.text, setOpenAlert); 
	} else if (contact.url) {
		window.open(contact.url, "_blank", "noopener noreferrer")
	}
}

export default function Contacts() {
	const [openAlert, setOpenAlert] = useState(false);
	return (
		<>
		{openAlert && <Alert/>}
			<div className={styles.main}>
				<h1>{PAGE_INFO.title}</h1>
				<p>{PAGE_INFO.description}</p>
			</div>
			<div className={styles.contacts_elements}>
				{params.map((contact) => (
					<div
						key={contact.type}
						className={styles.contact_item}
						onClick={() =>handleClick(contact, setOpenAlert) }
					>
						<Image
							src={contact.icon}
							width={120}
							height={120}
							alt={contact.type}
						/>
						<p>{contact.text}</p>
					</div>
				))}
			</div>
		</>
	);
}
