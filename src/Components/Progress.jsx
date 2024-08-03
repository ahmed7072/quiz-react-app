import React from 'react'
import { useEffect , useState   } from 'react';



export default function Progress({timer , onTimeOut , mode}) {

    const [timerRemain , setTimeRemain] = useState(timer)

    useEffect(()=>{
        const timeout = setTimeout(onTimeOut,timer)
        return ()=>clearTimeout(timeout)
    },[onTimeOut,timer])

    useEffect(()=>{
        const timerIn = setInterval(()=>{
            setTimeRemain(prev=>prev-10)
        },10)
        return ()=>clearInterval(timerIn)
    },[])

    return(
        <progress id='question-time' className={mode} value={timerRemain} max={timer}/>
    )
}
