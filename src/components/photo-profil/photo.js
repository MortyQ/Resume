import React, { Component } from 'react'

import './photo.css'

export default class Photo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 1
        }
    }


    componentDidMount() {



        let count = 1;
        let timerId = setTimeout(function tick() {
            count = Math.floor(Math.random() * 5) + 1;
            timerId = setTimeout(count, 3000); // (*)
        }, 2000);
        console.log(timerId)

        this.setState({
            id: count
        })
        console.log(timerId)

    }





    render() {

        const { id } = this.state









        return ( <
            div className = 'photo' >
            <
            div className = 'img' >
            <
            img className = 'img-photo'
            src = { require(`./img/img${id}.JPG`) }
            /> < /
            div >

            <
            /div>
        )
    }
}