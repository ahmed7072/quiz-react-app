import React from 'react'
import trophyImg from '../assets/quiz-complete.png';
import question from '../question'



export default function Summary({userAnswers}) {

    const skippedAnswers = userAnswers.filter(item=>item==null)
    const correctAnswers = userAnswers.filter((item,index)=>item == question[index].answers[0])

    const skippedAnswersPercentage = Math.floor((skippedAnswers.length/userAnswers.length)*100)
    const correctAnswersPercentage = Math.floor((correctAnswers.length/userAnswers.length)*100)
    const wrongAnswersPercentage = 100 - skippedAnswers - correctAnswers
    return (
        <div id='summary'>
            <h2>quiz complete</h2>
            <img src={trophyImg} alt="trophy icon" />
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedAnswersPercentage}%</span>
                    <span className="text">skipped questions</span>
                </p>
                <p>
                    <span className='number'>{correctAnswersPercentage}%</span>
                    <span className="text">correctly answered</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswersPercentage}%</span>
                    <span className="text">uncorrectly answered</span>
                </p>
            </div>
            <ol>
                {
                    userAnswers.map((item,index)=>{
                    let cssClass = 'user-answer'

                    if(item == null){
                        cssClass +=' skipped'
                    }
                    else if(item === question[index].answers[0]){
                        cssClass += ' correct'
                    }
                    else{
                        cssClass +=' wrong'
                    }
                    return (<li key={index}>
                    <h3>{index+1}</h3>
                    <p className='question'>{question[index].text}</p>
                    <p className={cssClass}>{item==null?'skipped':item}</p>
                </li>)})
                }
            </ol>
        </div>
    )
}
