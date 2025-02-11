// components/Navbar.tsx
"use client";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";

interface NavItem {
	label: string;
	href: string;
}

interface NavbarProps {
	items?: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
	const pathname = usePathname();
	const navItems: NavItem[] = items || [
		{ label: "Home", href: "/" },
		{ label: "Chi sono", href: "/chi_sono" },
		{ label: "Progetti", href: "/progetti" },
		{ label: "Contatti", href: "/contatti" },
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
							<Link
								href={item.href}
								className={`${styles.navLink} ${
									pathname === item.href ? styles.active : ""
								}`}
							>
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
