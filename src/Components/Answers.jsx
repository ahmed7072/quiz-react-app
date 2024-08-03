import React, { useRef } from 'react'


export default function Answers({answers , answerState,seletedAnswer , onSelect}) {
    const shuffleAnswers = useRef()

    if(!shuffleAnswers.current){
    shuffleAnswers.current = [...answers]
    shuffleAnswers.current.sort(()=>Math.random() - 0.5)
    }

    return (
        <ul id='answers'>
            {shuffleAnswers.current.map((item)=>{
                let isSelected = item == seletedAnswer
                let cssClass = ''
                if( answerState == 'answered' && isSelected){
                    cssClass = 'selected'
                }
                if((answerState=='correct' || answerState =='wrong') && isSelected){
                    cssClass = answerState
                }
                    return <li className='answer' key={item}>
                    <button className={cssClass} disabled={answerState!=""}  onClick={()=>onSelect(item)}>
                        {item}
                    </button>
                </li>
            })}
        </ul>
    )
}
