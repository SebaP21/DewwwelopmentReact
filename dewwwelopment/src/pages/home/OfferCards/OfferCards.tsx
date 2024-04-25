import { OfferCard, OfferCardProps } from "./OfferCard/OfferCard";
import onePageIcon from "../../../assets/icons/web-programming-2.svg";
import advancedIcon from "../../../assets/icons/coding-1.svg";
import { useInView } from "react-intersection-observer";

export const Offerbox = () => {
  const { ref, inView } = useInView();

  console.log(inView, "Offerbox in view");
  return (
    <section id="all-offer" className="offer-box" ref={ref}>
      <div className="offer-title">
        <span className="decoration-line"></span>
        <h4>Co oferujemy?</h4>
        <h2>usługi</h2>
      </div>
      <div className="offer-cards-box">
        {offerCardsData.map((data, index) => (
          <OfferCard
            key={index}
            imgSrc={data.imgSrc}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
};

const offerCardsData: OfferCardProps[] = [
  {
    title: "Strony internetowe-wizytówki",
    description:
      "Strony wizytówkowe, znane również jako strony one page, są idealnym" +
      " rozwiązaniem dla osób i małych firm, które chcą przedstawić swoje" +
      " usługi, produkty lub informacje w sposób klarowny i zwięzły. " +
      "Użytkownik przewija stronę w dół, aby poznać kolejne sekcje. " +
      "Wszystkie informacje skoncentrowane w jednym miejscu.",
    imgSrc: onePageIcon,
  },
  {
    title: "Rozbudowane strony internetowe",
    description:
      "Rozbudowane witryny, które składają się z kilku podstron, " +
      "umożliwiając bardziej szczegółowe przedstawienie treści lub " +
      "portfolio. Każda podstrona może być dedykowana innemu tematowi " +
      "lub sekcji biznesowej. Oferują wygodną nawigację i pełne dostosowanie treści do potrzeb użytkownika.",
    imgSrc: advancedIcon,
  },
];
