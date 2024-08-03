import React from 'react'
import Logo from '../assets/quiz-logo.png'
export default function Header() {
    return (
        <header>
            <img src={Logo} alt="" />
            <h1>React quiz app</h1>
        </header>
    )
}
