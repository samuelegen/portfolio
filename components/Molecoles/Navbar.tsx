// components/Navbar.tsx
"use client"
import Link from "next/link";
import React from "react";
import styles from "/components/Molecoles/Navbar.module.scss"

interface NavItem {
	label: string;
	href: string;
}

interface NavbarProps {
	items?: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
	const navItems: NavItem[] = items || [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/about" },
		{ label: "Projects", href: "/projects" },
		{ label: "Contacts", href: "/contacts" },
	];

	return (
		<nav className={styles.navbar} aria-label="Main Navigation">
			<div className={styles.container}>
                <Link href="/" className={styles.logo}>
                Samuele Gennaro 
                </Link>
				<ul className={styles.navList}>
					{navItems.map((item) => (
						<li key={item.href}>
							<Link href={item.href} className={styles.navLink}>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
