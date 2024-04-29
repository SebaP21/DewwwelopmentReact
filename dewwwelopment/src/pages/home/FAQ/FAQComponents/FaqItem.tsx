import { FC, useState } from "react";
import { FaqQuestion } from "./FaqQuestion";
import { FaqAnswer } from "./FaqAnswer";

export type FaqItemProps = {
	question: string;
	answer: string;
};

export const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
	const [selected, setSelected] = useState(false);

	const showFaQItem = () => {
		setSelected((prevState) => !prevState);
		console.log(setSelected);
		console.log(FaqItem);
	};
	return (
		<div className='faq-question'>
			<FaqQuestion
				question={question}
				onClick={showFaQItem}
			/>
			{selected && <FaqAnswer answer={answer} />}
		</div>
	);
};
