// Declare variables
let letters = 'abcdefghijklmnopqrstuvwxyz'

// Function to display keyboard & set state of correct & wrong guesses
export default function Keyboard({
                                     answer,
                                     correctLetter,
                                     setCorrectLetter,
                                     wrongLetter,
                                     setWrongLetter,
                                     correctWord,
                                     setCorrectWord,
                                 }) {

    function SelectedLetter(letter) {

        let tally = 0;
        for (let i = 0; i < answer.length; i++) {
            if (letter === answer[i]) {
                tally++;
            }
        }
        setCorrectWord(correctWord + tally)

        if (answer.includes(letter)) {
            if (!correctLetter.includes(letter)) {
                setCorrectLetter(curr => [...curr, letter])
            } else {
                alert('Already added this letter!')
            }
        } else {
            if (!wrongLetter.includes(letter)) {
                setWrongLetter(curr => [...curr, letter])
            } else {
                alert('Already added this letter!')
            }
        }
    }

    return letters.split('').map(letter => (
        <button className={'btn btn-secondary m-3'} value={letter} key={letter}
                onClick={() => SelectedLetter(letter)}>{letter}</button>
    ))
}

