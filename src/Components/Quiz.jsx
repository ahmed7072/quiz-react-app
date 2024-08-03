import React, {  useState , useCallback} from 'react'
import question from '../question'
import Question from './Question';
import Summary from './Summary';


export default function Quiz() {

    const [answers , setAnswers] = useState([])
    const activeIndex = answers.length
    const quizComplete = activeIndex === question.length

    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(answer){
        setAnswers(prev=>{
            let updated = [...prev]
            updated.push(answer)
            return updated
        })
    },[])

    const handleSkipAnswer = useCallback( function handleSkipAnswer() {
        handleSelectedAnswer(null)
    },[handleSelectedAnswer])


    
    if(quizComplete){
        return <Summary userAnswers={answers}/>
    }

    return (
        <div id='quiz'>
            <Question
                key={activeIndex}
                activeIndex={activeIndex}
                onSkip={handleSkipAnswer}
                onSelect={handleSelectedAnswer}
            />
        </div>
    )
}
