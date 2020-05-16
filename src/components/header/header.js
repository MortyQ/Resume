import React, { Component } from 'react'
import './header.css'
export default class Header extends Component {



    render() {

        const profil = 'Front-End \ JavaScript Developer'

        return (

            <
            div className = 'header' >
            <
            div className = 'myname' >

            <
            div > < h1 > Колядинцев Сергей < /h1></div >
            <
            div > < p > Junior\ { profil } < /p>  < /div >

            <
            /
            div >
            <
            div className = 'menu' >
            <
            div > < span className = 'menu-link ' > < a href = '/main' > Главное < /a> </span > < /div> <
            div > < span className = 'menu-link' > < a href = '/resume' > Резюме < /a> </span > < /div> <
            div > < span className = 'menu-link' > < a href = '/project' > Проекты < /a> </span > < /div> <
            div > < span className = 'menu-link' > < a href = '/contacts' > Контакты < /a> </span > < /div> < /
            div > < /
            div >

        )
    }
}