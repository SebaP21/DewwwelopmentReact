import { OfferIcon } from "./OfferCardComponents/OfferIcon";
import { OfferTitle } from "./OfferCardComponents/OfferTitle";
import { OfferDescription } from "./OfferCardComponents/OfferDescription";
import { OfferBtn } from "./OfferCardComponents/OfferBtn";
import { images } from "./OfferCardComponents/OfferIcon";


export const OfferCard = () => {
	return (
		<div className='offer-card'>
			<OfferIcon image={images[0]}/>
			<OfferTitle />
			<OfferDescription />
			<OfferBtn />
		</div>
	);
};
