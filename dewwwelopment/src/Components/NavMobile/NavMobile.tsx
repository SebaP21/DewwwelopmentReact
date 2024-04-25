import { useState } from "react";

import Xmark from "../../assets/icons/xmark-solid.svg";
import Logo from "../../assets/img/dewwwelopment-low-resolution-logo-black-on-transparent-background-3.png";
import styles from "./Nav.module.css";

export const MobileNav = () => {
	let showNav = useState(false);
	let isNavShown = showNav[0];
	let setIsNavShown = showNav[1];

	const showNavClick = () => {
		setIsNavShown(!isNavShown);
	};

	const navBtnOpen = (
		<button
			className='nav-mobile-btn'
			onClick={showNavClick}
		></button>
	);

	const navBtnClose = (
		<button
			className='close-mobile-btn'
			onClick={showNavClick}
		>
			<img
				src={Xmark}
				alt=''
			></img>
		</button>
	);
	return (
		<>
			{!isNavShown && <>{navBtnOpen}</>}

			<nav
				className={
					isNavShown ? `${styles.mobileActive} nav-mobile` : "nav-mobile"
				}
			>
				<ul>
					{navBtnClose}
					<a href='#home'>
						<img
							src={Logo}
							alt=''
						/>
					</a>
					<li>
						<a href='#aboutus'>o nas</a>
					</li>
					<li>
						<a href='#all-offer'>oferta</a>
					</li>
					<li>
						<a href='#faq'>faq</a>
					</li>
					<li>
						<a href='#contact'>Kontakt</a>
					</li>
				</ul>
			</nav>
		</>
	);
};
