import { FC } from "react";

export type HeaderProps = {
	ctaHeader: string;
	mainHeader: string;
	sectionDescription?: string;
};

export const SectionHeading: FC<HeaderProps> = ({
	ctaHeader,
	mainHeader,
	sectionDescription,
}) => {
	return (
		<div className='courses-title'>
			<div className='decoration-line'></div>
			<h4>{ctaHeader}</h4>
			<h2>{mainHeader}</h2>
			<p>{sectionDescription}</p>
		</div>
	);
};
