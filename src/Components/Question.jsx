import React, { useState } from 'react'
import Progress from './Progress';
import Answers from './Answers';
import question from '../question';



export default function Question({activeIndex,onSelect, onSkip}) {
    const [answerState , setSelected] = useState({
        answer:"",
        isCorrect:null
    })

    let TIMER = 10000

    if(answerState.answer){
        TIMER = 1000
    }

    if(answerState.isCorrect !== null){
        TIMER = 2000
    }
    function handleSelectAnswer(answer){
        setSelected({
            answer:answer,
            isCorrect:null
        })
        setTimeout(()=>{
            setSelected({
                answer:answer,
                isCorrect: question[activeIndex].answers[0] == answer 
            })
            setTimeout(()=>{
                onSelect(answer)
            },2000)
        },1000)
    }

    let answerStyle =''
    if(answerState.answer && answerState.isCorrect != null){
        answerStyle = answerState.isCorrect ? 'correct' : 'wrong'
    }
    else if(answerState.answer){
        answerStyle ='answered'
    }

    return (
        <div id='question'>
            <Progress key={TIMER}
                timer={TIMER} 
                onTimeOut={answerState.answer === '' ? onSkip : null}
                mode={answerStyle}
            />
            <h2>{question[activeIndex].text}</h2>
            <Answers answers={question[activeIndex].answers}
                answerState={answerStyle} 
                seletedAnswer={answerState.answer} 
                onSelect={handleSelectAnswer} 
            />
        </div>
    )
}
