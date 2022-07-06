import './App.css';
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import {useState, useEffect} from "react";
import {words} from "./components/RandomWord";
import Word from "./components/Word";
import WrongGuess from "./components/WrongGuess";
import Footer from "./components/Footer";

// Import images
import img0 from './images/img0.svg';
import img1 from './images/img1.svg';
import img2 from './images/img2.svg';
import img3 from './images/img3.svg';
import img4 from './images/img4.svg';
import img5 from './images/img5.svg';
import img6 from './images/img6.svg';

function App() {

    // Create random word
    const word = words[Math.floor(Math.random() * words.length)];

    // Declare variables
    const maxWrong = 6;
    const images = [img0, img1, img2, img3, img4, img5, img6];

    // Use State
    const [correctLetter, setCorrectLetter] = useState([]);
    const [correctWord, setCorrectWord] = useState(0);
    const [wrongLetter, setWrongLetter] = useState([]);
    const [answer, setAnswer] = useState(word);

    // Game Over
    useEffect(() => {

        if (wrongLetter.length === maxWrong) {
            alert('Sorry, you lost!')
            setWrongLetter([]);
            setCorrectLetter([]);
            setCorrectWord(0);
            setAnswer(word);
        }
        if (correctWord === answer.length) {
            alert('You won!')
            setWrongLetter([]);
            setCorrectLetter([]);
            setCorrectWord(0);
            setAnswer(word);
        }
    }, [correctWord, wrongLetter, answer, correctLetter])


    return (
        <div className="App">
            <Header/>
            <WrongGuess wrongLetter={wrongLetter} maxWrong={maxWrong}/>
            <img className={'img'} alt={'hangman'} src={images[wrongLetter.length]}/>
            <Word answer={answer} correctLetter={correctLetter}/><br/>
            <Keyboard answer={answer} correctLetter={correctLetter} setCorrectLetter={setCorrectLetter}
                      wrongLetter={wrongLetter} setWrongLetter={setWrongLetter} correctWord={correctWord}
                      setCorrectWord={setCorrectWord}/>
            <Footer/>
        </div>
    );
}

export default App;
