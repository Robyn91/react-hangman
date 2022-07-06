import './Word.css'

// To display the correctly clicked letters
export default function Word({correctLetter, answer}) {
    return answer.split('').map((letter, index) => (
        <span key={index} className={'word-display'}>
            {correctLetter.includes(letter) ? letter : '_'}
        </span>
    ))
}