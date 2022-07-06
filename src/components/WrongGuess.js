import './WrongGuess.css'

export default function WrongGuess({wrongLetter, maxWrong}) {
    return (
        <div>
            <div>Wrong Guesses: <span className={'wrongText'}>{wrongLetter.length} of {maxWrong}</span></div>
            <span>Wrong Letters: </span>
            {wrongLetter.map((letter, index) => {
                return <span className={'wrongText'} key={index}>{letter} </span>
            })}
        </div>
    )
}