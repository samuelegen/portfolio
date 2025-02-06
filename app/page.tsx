import styles from "/app/page.module.scss";
import Image from "next/image";
const params =
	{
    immagine: "/immagine_home.jpg",
		title: "Benvenuto/a nel mio sito web",
		description:
			"Mi chiamo Samuele e sono un Front-End Developer appassionato alla creazione di esperienze web interattive e reattive. Con un forte focus sull'usabilità e sul design, mi occupo di sviluppare soluzioni moderne utilizzando tecnologie come HTML, CSS, JavaScript, React e framework come Next con cui ho realizzato proprio questo sito. Credo che la chiave per un progetto di successo risieda nella cura dei dettagli e nell'attenzione alle richieste dell'utente finale.",
	}


export default function Home() {
	return (
			<main className={styles.main}>
        <Image src={params.immagine} width={200} height={200} alt="immagine_home" className={styles.image_options}/>
				<h1>{params.title}</h1>
				<p>{params.description}</p>
			</main>
	);
}