import React, { useState } from 'react';
import './kalkulator.css';

function App() {
  const [showbutton1, setShowButton1] = useState(false);
  const [showbutton, setShowButton] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [earned, setEarned] = useState(0);
  const [wybranaOpcja, setWybranaOpcja] = useState("");
  const [zapamietane0, setZapamietane0] = useState("");
  const [zapamietane1, setZapamietane1] = useState("");
  const [zapamietane2, setZapamietane2] = useState("");
  const [zapamietane3, setZapamietane3] = useState("");
  const [zapamietane4, setZapamietane4] = useState("");
  const [zapamietane5, setZapamietane5] = useState("");
  const [zapamietane6, setZapamietane6] = useState("");
  const [zapamietane7, setZapamietane7] = useState("");
  const [zapamietane8, setZapamietane8] = useState("");
  const [wartoscZapamietane0, setWartoscZapamietane0] = useState(0);
  const [wartoscZapamietane1, setWartoscZapamietane1] = useState(0);
  const [wartoscZapamietane2, setWartoscZapamietane2] = useState(0);
  const [wartoscZapamietane3, setWartoscZapamietane3] = useState(0);
  const [wartoscZapamietane4, setWartoscZapamietane4] = useState(0);
  const [wartoscZapamietane5, setWartoscZapamietane5] = useState(0);
  const [wartoscZapamietane6, setWartoscZapamietane6] = useState(0);
  const [wartoscZapamietane7, setWartoscZapamietane7] = useState(0);
  const [wartoscZapamietane8, setWartoscZapamietane8] = useState(0);
  const [bonus, setBonus] = useState(0);

  function pamiec(wybrano, text) {
    wybrano = 1;
    if (wybrano = 1) {
      setWybranaOpcja(text)
    }
  }
  const pointOn = (wartosc) => {
    if (score == 0) {
      setScore(wartosc)
    }
    else {
      setScore(wartosc)
    }
  }
  function pointOff(index) {
    return (
      setSelectedOption(index),
      setShowButton(true)
    )
  }

  function dodawanie(text) {

    if (currentQuestion == 0) {
      setZapamietane0(wybranaOpcja + zapamietane0)
      setWartoscZapamietane0(score + wartoscZapamietane0)
      console.log("wartosczapamietana0=", wartoscZapamietane0)
      setShowButton1(true)

    }
    else if (currentQuestion == 1) {
      setZapamietane1(wybranaOpcja + zapamietane1)
      setWartoscZapamietane1(score + wartoscZapamietane1)
      console.log("wartosczapamietana0=", wartoscZapamietane0)
      setShowButton1(true)
    }
    else if (currentQuestion == 2) {
      setZapamietane2(wybranaOpcja + zapamietane2)
      setWartoscZapamietane2(score + wartoscZapamietane2)
      setShowButton1(true)
    }
    else if (currentQuestion == 3) {
      setZapamietane3(wybranaOpcja + zapamietane3)
      setWartoscZapamietane3(score + wartoscZapamietane3)
      setShowButton1(true)
    }
    else if (currentQuestion == 4) {
      setZapamietane4(wybranaOpcja + zapamietane4)
      setWartoscZapamietane4(score + wartoscZapamietane4)
      setShowButton1(true)
    }
    else if (currentQuestion == 5) {
      setZapamietane5(wybranaOpcja + zapamietane5)
      setWartoscZapamietane5(score + wartoscZapamietane5)
      setShowButton1(true)
    }
    else if (currentQuestion == 6) {
      setZapamietane6(wybranaOpcja + zapamietane6)
      setWartoscZapamietane6(score + wartoscZapamietane6)
      setShowButton1(true)
    }
    else if (currentQuestion == 7) {
      setZapamietane7(wybranaOpcja + zapamietane7)
      setWartoscZapamietane7(score + wartoscZapamietane7)
      setShowButton1(true)
    }
    else if (currentQuestion == 8) {
      setZapamietane8(wybranaOpcja + zapamietane8)
      setWartoscZapamietane8(score + wartoscZapamietane8)
      setShowButton1(false)
    }
  }

  const wstecz = () => {
    if (currentQuestion < 0) { }
    else {
      if (currentQuestion == 0) {
        setSelectedOption(null)
        setCurrentQuestion(currentQuestion - 1)
        setShowButton1(false);
        setShowButton(false);
      }
      else if (currentQuestion == 1) {
        setZapamietane0("")
        setSelectedOption(null)
        setEarned(earned - wartoscZapamietane0)
        setWartoscZapamietane0(0)
        setCurrentQuestion(currentQuestion - 1)
        setShowButton(false);
      }
      else if (currentQuestion == 2) {
        setZapamietane1("")
        setSelectedOption(null)
        setEarned(earned - wartoscZapamietane1)
        setWartoscZapamietane1(0)
        setCurrentQuestion(currentQuestion - 1)
        setShowButton(false);
      }
      else if (currentQuestion == 3) {
        setZapamietane2("")
        setSelectedOption(null)
        setEarned(earned - wartoscZapamietane2)
        setWartoscZapamietane2(0)
        setCurrentQuestion(currentQuestion - 1)
        setShowButton(false);
      }
      else if (currentQuestion == 4) {
        setZapamietane3("")
        setSelectedOption(null)
        setEarned(earned - wartoscZapamietane3)
        setWartoscZapamietane3(0)
        setCurrentQuestion(currentQuestion - 1)
        setShowButton(false);
      }
      else if (currentQuestion == 5) {
        setZapamietane4("")
        setSelectedOption(null)
        setWartoscZapamietane4(earned - wartoscZapamietane4)
        setWartoscZapamietane4(0)
        setCurrentQuestion(currentQuestion - 1)
        setShowButton(false);
      }
      else if (currentQuestion == 6) {
        setZapamietane5("")
        setSelectedOption(null)
        setEarned(earned - wartoscZapamietane5)
        setWartoscZapamietane5(5)
        setCurrentQuestion(currentQuestion - 1)
        setShowButton(false);
      }
      else if (currentQuestion == 7) {
        setZapamietane6("")
        setSelectedOption(null)
        setEarned(earned - wartoscZapamietane6)
        setWartoscZapamietane6(0)
        setCurrentQuestion(currentQuestion - 1)
        setShowButton(false);
      }
      else if (currentQuestion == 8) {
        setZapamietane7("")
        setSelectedOption(null)
        setEarned(earned - wartoscZapamietane7)
        setWartoscZapamietane7(0)
        setCurrentQuestion(currentQuestion - 1)
        setShowButton(false);
      }

    }
  }

  const nastepny = () => {
    if (currentQuestion + 1 < questions.length) {
      if (currentQuestion == 8) {
        setBonus(bonus + score)
        console.log(bonus)
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
        setShowButton(false)
      } else {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
        setEarned(earned + score)
        setShowButton(false)
      }

    }
    else {
      setShowResults(true);
      console.log(bonus)
    }

  }
  const restartKalkulatora = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setEarned(0)
    setSelectedOption(null)
    setShowButton(false)
    setWartoscZapamietane0(0)
    setWartoscZapamietane1(0)
    setWartoscZapamietane2(0)
    setWartoscZapamietane3(0)
    setWartoscZapamietane4(0)
    setWartoscZapamietane5(0)
    setWartoscZapamietane6(0)
    setWartoscZapamietane7(0)
    setWartoscZapamietane8(0)
    setZapamietane0("")
    setZapamietane1("")
    setZapamietane2("")
    setZapamietane3("")
    setZapamietane4("")
    setZapamietane5("")
    setZapamietane6("")
    setZapamietane7("")
    setZapamietane8("")
    setBonus(0)
  };

  const questions = [
    {
      text: "1. Jaka jest Twoja znajomo???? j??zyka niemieckiego?",
      options: [
        { id: 0, text: "A1- Potrafi?? formu??owa?? kr??tkie zdania z obszaru opieki, np.: Pomog?? pani wsta??. Umyjemy r??ce. Znam podstawowe s??ownictwo, np.: ??niadanie, obiad, myd??o, r??cznik itd.", wartosc: 1150, opcjanr: 1 },
        { id: 1, text: "A2- Prawid??owo reaguj?? na r????ne sytuacje w opiece np.: potrafi?? opisa?? stan zdrowia osoby podopiecznej, okre??li?? jego potrzeby. Umiem powiedzie?? o sobie, opisa?? miejsce zamieszkania, porozmawia?? o pogodzie???", wartosc: 1250, opcjanr: 2 },
        { id: 2, text: "B1- Moja znajomo???? j??zyka niemieckiego pozwala mi na zachowanie jasnej i zrozumia??ej komunikacji z osob?? zale??n??. Potrafi?? porozmawia?? z podopiecznymi na wiele temat??w, cho?? mam jeszcze trudno??ci i ograniczenia w s??ownictwie oraz gramatyce.", wartosc: 1350, opcjanr: 3 },
        { id: 3, text: "B2- Potrafi?? porozmawia?? z osob?? zale??n?? na wiele temat??w np.: o polityce, ksi????kach, programach w telewizji, zdarzeniach w ci??gu dnia???Znam czas przesz??y i nim si?? pos??uguj??. Moje s??ownictwo jest rozbudowane a zdania s?? zasadniczo poprawne pod k??tem gramatycznym.", wartosc: 1450, opcjanr: 4 },
      ],
    },
    {
      text: "2. Czy posiadasz referencje / kartk?? urodzinow?? / ??wi??teczn?? od rodziny?",
      options: [
        { id: 0, text: "nie", wartosc: 0 },
        { id: 1, text: "tak - 1 referencja / kartka urodzinowa / kartka ??wi??teczna", wartosc: 20 },
        { id: 2, text: "tak - 2 lub wi??cej referencji / kartek urodzinowych / kartek ??wi??tecznych", wartosc: 40 },
      ],
    },
    {
      text: "3. Czy posiadasz prawo jazdy?",
      options: [
        { id: 0, text: "Tak", wartosc: 50 },
        { id: 1, text: "Nie", wartosc: 0 },
      ],
    },
    {
      text: "4. Czy jeste?? osob?? pal??c???",
      options: [
        { id: 0, text: "Tak", wartosc: 0 },
        { id: 1, text: "Nie", wartosc: 10 },
      ],
    },
    {
      text: "5. Iloma osobami chcesz si?? opiekowa???",
      options: [
        { id: 0, text: "1 osob??", wartosc: 0 },
        { id: 1, text: "2 osobami wymagaj??cymi opieki", wartosc: 200 },
        { id: 2, text: "2 osobami z czego jedna osoba wymaga opieki, a druga osoba jest zdrowa", wartosc: 50 }
      ]
    },
    {
      text: "6. Czy mo??esz pom??c osobie zale??nej wsta??/usi???????",
      options: [
        { id: 0, text: "Tak - mog?? pom??c osobie zale??nej wsta??/usi?????? przy du??ej pomocy tej osoby", wartosc: 20 },
        { id: 1, text: "Tak - mog?? pom??c osobie zale??nej wsta??/usi?????? przy ma??ej pomocy tej osoby", wartosc: 100 },
        { id: 2, text: "Nie", wartosc: 0 },

      ],
    },
    {
      text: "7. Czy pomo??esz osobie zale??nej przy toalecie w nocy?",
      options: [
        { id: 0, text: "Tak - sporadycznie raz w nocy", wartosc: 20 },
        { id: 1, text: "Tak - cz????ciej ni?? raz w nocy", wartosc: 80 },
        { id: 2, text: "Nie pomagam w nocy ", wartosc: 0 },
      ],
    },

    {
      text: "8. Czy chcesz pomaga?? osobie zale??nej cierpi??cej na demencj??? ",
      options: [
        { id: 0, text: "Tak - przy pocz??tkach demencji", wartosc: 20 },
        { id: 1, text: "Tak - przy ??redniej lub zaawansowanej demencji", wartosc: 50 },
        { id: 2, text: "Nie", wartosc: 0 },

      ],
    },

    {
      text: "9. Kiedy mo??esz rozpocz???? prac??? ",
      options: [
        { id: 0, text: "od zaraz - w ci??gu 5 dni", wartosc: 40 },
        { id: 1, text: "za 2 tygodnie", wartosc: 10 },

      ],
    },
    {
      text: "podsumowanie - wylicz moje wynagrodzenie za okres 30 dni w firmie Berlin Opieka",
      options: [
        { id: 0, text: "Oblicz moje wynagrodzenie", wartosc: 0 },
      ]
    }
  ]





  return (
    <div className="App">
      {/* 1. Header*/}



      {showResults ? (
        /* 4. Final Results */
        <div className="background">
          <div className='final-results1'>
            <h1> OSOBISTY KALKULATOR WYNAGRODZENIA I OFERT! </h1>
            <h2> Oto wynagrodzenie miesi??czne jakie mo??esz zarabia?? wsp????pracuj??c z nami! :  </h2>
            <div className="wynikkwoty">
              <div className='wynikwynagrodzenia'>
                <div className="textwynagrodzenia"> {earned} ??? + {bonus} ???</div> <div className="bonusjednorazowy">bonusu jednorazowego</div> </div>
              <div className='wynikwynagrodzenia'>
                <div className="textwynagrodzenia"> {Math.round(earned * 4.77)} z?? + {Math.round(bonus * 4.77)} z??</div> <div className="bonusjednorazowy">bonusu jednorazowego</div>
              </div>
            </div>
            <div className="restart" onClick={() => restartKalkulatora()}>Powr??t</div>
            <h2>   </h2>
            <h1> Podsumowanie:  </h1>
            <div className="questions-full1">
              <h3 className="question-text1">{questions[0].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane0}</div>
                <div className="answerd1">{wartoscZapamietane0} ???</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[1].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane1}</div>
                <div className="answerd1">{wartoscZapamietane1} ???</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[2].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane2}</div>
                <div className="answerd1">{wartoscZapamietane2} ???</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[3].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane3}</div>
                <div className="answerd1">{wartoscZapamietane3} ???</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[4].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane4}</div>
                <div className="answerd1">{wartoscZapamietane4} ???</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[5].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane5}</div>
                <div className="answerd1">{wartoscZapamietane5} ???</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[6].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane6}</div>
                <div className="answerd1">{wartoscZapamietane6} ???</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[7].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane7}</div>
                <div className="answerd1">{wartoscZapamietane7} ???</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[8].text} - bonus jednorazowy</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane8}</div>
                <div className="answerd1">{wartoscZapamietane8} ???</div>
              </div>
            </div>
            <h2>   </h2>
          </div>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="pytanie">
          <h1> OSOBISTY KALKULATOR WYNAGRODZENIA I OFERT! </h1>
          <h2> Pytania:</h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => {
              return (
                <div className={index === selectedOption ? ("option active") : "option"}
                  key={option.id}
                  onClick={() => { pointOn(option.wartosc) || pointOff(index) || pamiec(option.wybrano, option.text) }}

                >
                  {option.text}
                </div>

              )
            }
            )
            }



          </div>
          <div className="przyciski">
            {showbutton1 ? (<div className={currentQuestion == 0 ? (setShowButton1(false)) : "wstecz"} onClick={() => wstecz()}>
              Wstecz</div>) : (<h2></h2>)}
            {showbutton ? (
              <div className={currentQuestion == 0 || currentQuestion == 9 ? "nastepny1" : "nastepny"} onClick={() => nastepny() || dodawanie(questions[currentQuestion].options.text)}>
                Nast??pny</div>) : (<h2></h2>)
            }


          </div>

          {showbutton ? (<div className="final-results">
            <h1> Suma cz????ci sk??adowych wynagrodzenia: </h1>
            <h3> {score} ???   </h3>
          </div>) : (<div className="final-results">
            <h1> Suma cz????ci sk??adowych wynagrodzenia: </h1>
            <h3> {earned} ???   </h3>
          </div>)}
        </div>
      )
      }

    </div>
  )
}

export default App;
