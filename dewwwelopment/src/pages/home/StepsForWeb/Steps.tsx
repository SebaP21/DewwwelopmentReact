import One from "../../../assets/icons/one (1).svg";
import Two from "../../../assets/icons/two (1).svg";
import Three from "../../../assets/icons/three (1).svg";
import Four from "../../../assets/icons/four (1).svg";
import Five from "../../../assets/icons/five (1).svg";
import Six from "../../../assets/icons/six-1.svg";

export const Steps = () => {
  return (
    <>
      <section className="steps-for-website" id="steps">
        <div className="steps-card">
          <i className="imgContainer">
            <img src={One} alt="" />
          </i>
          <h3>Skontaktuj się z nami</h3>
          <p className="step-description">
            Wystarczy, że zadzwonisz, wyślesz nam e-mail lub wypełnisz formularz
            kontaktowy na naszej stronie internetowej. Odpowiemy na Twoje
            zgłoszenie tak szybko, jak to możliwe!
          </p>
        </div>
        <div className="steps-card">
          <i className="imgContainer">
            <img src={Two} alt="" />
          </i>
          <h3>Jak możemy Ci pomóc?</h3>
          <p className="step-description">
            W trakcie naszej rozmowy lub spotkania skupimy się na Twoich
            potrzebach i celach. Opowiedz nam o tym, jakiej strony potrzebujesz
            i czego oczekujesz. Wspólnie postaramy się znaleźć najlepsze
            rozwiązanie.
          </p>
        </div>
        <div className="steps-card">
          <i className="imgContainer">
            <img src={Three} alt="" />
          </i>
          <h3>Projektowanie i tworzenie prototypu</h3>
          <p className="step-description">
            Na podstawie zebranych informacji stworzymy dla Ciebie wizualizację
            projektu. Dzięki temu zobaczysz, jak będzie wyglądała Twoja strona.
            Możemy również przygotować prototyp, który przedstawi Ci jak będzie
            działać.
          </p>
        </div>
        <div className="steps-card">
          <i className="imgContainer">
            <img src={Four} alt="" />
          </i>
          <h3>Pozwól nam się tym zająć</h3>
          <p className="step-description">
            Nie martw się technicznymi aspektami! Dewwwelopment zajmie się
            tworzeniem strony internetowej od podstaw. Zbudujemy strukturę
            strony, dodamy funkcje i treści, a także zadbamy o wszystkie
            techniczne detale.
          </p>
        </div>
        <div className="steps-card">
          <i className="imgContainer">
            <img src={Five} alt="" />
          </i>
          <h3>Testowanie i optymalizacja</h3>
          <p className="step-description">
            Przed publikacją strony przeprowadzamy jej dokładne testowanie.
            Sprawdzamy, czy wszystko działa sprawnie i bezproblemowo. Jeśli
            pojawią się jakiekolwiek błędy lub niedoskonałości, zajmiemy się
            nimi i dostosujemy stronę tak, aby była dopracowana.
          </p>
        </div>
        <div className="steps-card">
          <i className="imgContainer">
            <img src={Six} alt="" />
          </i>
          <h3>Gotowa strona w Twoich rękach</h3>
          <p className="step-description">
            Nie musisz się martwić o techniczne aspekty wdrażania. Zajmiemy się
            przeniesieniem strony na odpowiedni serwer hostingowy i wszystkimi
            innymi krokami, aby Twoja strona była dostępna online. To wszystko !
          </p>
        </div>
      </section>
      <div className="decoration-gradient"></div>
    </>
  );
};
