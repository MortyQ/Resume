import React, { Component } from 'react'

import './skils.css'

export default class Skils extends Component {


    progress = (skill, point, text) => {
        return ( <
            div className = 'skill-progress' >
            <
            div class = "progress" >
            <
            div class = "progress-value" >
            <
            span > { skill } < /span> < /
            div >
            <
            span className = 'point' > { point } < /span> < /
            div > <
            span className = 'skill-span' > { text } < /span> < /
            div >
        )
    }



    render() {


        return ( <
            div className = 'skils' >

            <
            span className = 'skill-text' > HardSkils < /span> 

            { this.progress('HTML', '8/10', 'Basic, Semantic, HTML5 ') } { this.progress('CSS', '8/10', 'Basic, CSS3, Animation, Flex, Greed') } { this.progress('JavaScript', '6/10', 'Basic, OOP, Async, Await, function*, {Deconstructor}, DOM, JSX, Json') } { this.progress('React', '4/10', 'Basic, Components, route, DidMount') } { this.progress('NodeJS', '2/10', 'Basic,Express,Mongoose,route') } { this.progress('TypeScript', '1/10', 'Basic') } { this.progress('MongoDB', '1/10', 'Basic') }


            <
            span className = 'skill-text' > SoftSkils < /span>  { this.progress('English', '3/10', 'Elementary') } { this.progress('Общение', '10/10', 'Максимально Общительный человек') } { this.progress('Hobby', '10/10', 'Travel,PS4 Games,Programming, Walking, Learn Language  ') } <
            /div>

        )
    }
}