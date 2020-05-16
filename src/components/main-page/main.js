import React, { Component } from 'react'
import Circle from './circle'
import './main.css'

export default class Main extends Component {



    render() {




        return ( <
            div className = 'main-page' >
            <
            div className = 'h1-main' >
            <
            span className = 'h1-hi' > Привет, < /span>  <
            br / > <
            span className = 'h2-hi' > Будем знакомы: < /span> < /
            div >

            <
            Circle / >

            <
            div className = 'finish-text' >
            <
            span > < p >
            На данный момент стажируюсь в it компании 'Anuitex'.На позицию Full - Stack web Developr.Расчитываю в ближайший срок закончить обучение и попасть на полноценную работу.

            <
            /p></span >
            <
            /div>

            <
            /div>

        )
    }
}