import React, { Component } from 'react'

import './resume.css'

export default class Resume extends Component {


    specialSpan = (quest, second) => {
        return ( <
            div >
            <
            span className = 'resume-span-special' > ➤ < /span > < i > { quest } < /i > < br / > < p > { second } < /p> < /
            div > )
    };



    render() {




            return ( <
                    div className = 'resume' >
                    <
                    div className = 'resume-one' >
                    <
                    div className = 'resume-parth' > { this.specialSpan('Желаемая Должность', 'Junior Front-End Developer') } { this.specialSpan('Образование', 'Харьковский Государственный Университет Питания и Торговли') } { this.specialSpan('Возраст', '20 апреля 1998 года (22 года)') } <
                    /div >


                    <
                    div className = 'resume-parth' > { this.specialSpan('Достижения', 'Изучение программирования с 0, полностью самостоятельно') } { this.specialSpan('Хобби', '💻     📷     📖     🎮     ☕️') } {
                        this.specialSpan('Контакты', < a href = '/contacts' > Click < /a>)}  < /div >

                            <
                            div className = 'resume-parth' > {
                                this.specialSpan('Навыки', < ul > < li > Java Script < /li>< li > NodeJS < /li > < li > ReactJS < /li>< li > HTML5 < /li > < li > CSS3 < /li>< li > TypeScript < /li > < /ul > ) } {
                                    this.specialSpan('Опыт Работы', < div > < p > Начало 01.03 .2020 < /p> < ul > < li > Стажируюсь в компании Anuitex на должность FullStack Developer < /li > < /ul > < /div > )
                                } { this.specialSpan('Курсы', 'IT School A-level, 2 месяца обучения на курсе "Front-End". Первый месяц - Основы Верстки , Второй месяц - Основа Java Script') } <
                                /
                                div >

                                <
                                /
                                div > < /
                                div >

                            )
                        }
                    }