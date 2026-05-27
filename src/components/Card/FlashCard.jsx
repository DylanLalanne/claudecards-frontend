
function FlashCard ({question, answer, showAnswer, onToggleAnswer}) {

return (
    <div>
        {question}
        {showAnswer && <p>{answer}</p>}
        <button onClick={onToggleAnswer}> {showAnswer ? "Hide Answer" : "Show Answer"}</button>
    </div> 
    )
}

export default FlashCard