import { OfferIcon } from "./OfferCardComponents/OfferIcon";
import { OfferTitle } from "./OfferCardComponents/OfferTitle";
import { OfferDescription } from "./OfferCardComponents/OfferDescription";
import { OfferBtn } from "./OfferCardComponents/OfferBtn";
import { images } from "./OfferCardComponents/OfferIcon";
import {FC} from "react";


export type OfferCardProps = {
	imgSrc: string;
	title: string;
	description: string;
}
export const OfferCard: FC<OfferCardProps> = ({description, imgSrc, title}) => {
	return (
		<div className='offer-card'>
			<OfferIcon imgSrc={imgSrc}/>
			<OfferTitle title="jebać kurwy" />
			<OfferDescription description={description} />
			<OfferBtn />
		</div>
	);
};
