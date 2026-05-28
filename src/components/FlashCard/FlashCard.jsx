import "./FlashCard.css";

function FlashCard ({question, answer, showAnswer, onToggleAnswer}) {

return (
    <div className = 'flashcard'>
        <h3>{question}</h3>
        {showAnswer && <p>{answer}</p>}
        <button onClick={onToggleAnswer}> {showAnswer ? "Hide Answer" : "Show Answer"}</button>
    </div> 
    )
}

export default FlashCard