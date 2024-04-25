//import dla ikon!
import { OfferCard } from "./OfferCard/OfferCard";

export const Offerbox = () => {
	return (
		<section
			id='all-offer'
			className='offer-box'
		>
			<div className='offer-title'>
				<span className='decoration-line'></span>
				<h4>Co oferujemy?</h4>
				<h2>usługi</h2>
			</div>
			<div className='offer-cards-box'>
				<OfferCard />
				<OfferCard />
				<OfferCard />
				<OfferCard />
				<OfferCard />
				<OfferCard />
			</div>
		</section>
	);
};
