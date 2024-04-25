// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Headerhome } from "./pages/home/HeaderHome/HeaderContent";
import { About } from "./pages/home/AboutUs/AboutUs";
import { Offerbox } from "./pages/home/OfferCards/OfferCards";
import { CtaSteps } from "./pages/home/CtaSteps/CTASteps";
import { Steps } from "./pages/home/StepsForWeb/Steps";
import { Faq } from "./pages/home/FAQ/Faq";
import { Contact } from "./pages/home/Contact/Contact";
import { DesktopNav } from "./Components/NavDesktop/NavDesktop";
import { MobileNav } from "./Components/NavMobile/NavMobile";

function App() {
	return (
		<>
			<DesktopNav />
			<MobileNav />
			<Headerhome />
			<About />
			<Offerbox />
			<CtaSteps />
			<Steps />
			<Faq />
			<Contact />
		</>
	);
}

export default App;
