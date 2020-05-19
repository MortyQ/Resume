import React, { Component } from 'react'

import './contacts.css'

export default class Contacts extends Component {




    render() {

        const ull = ( <
            ul class = "socialIcons" >
            <
            li > < a class = "facebook"
            href = "#" > < i class = "fa fa-facebook" > < /i></a > < /li> <
            li > < a class = "twitter"
            href = "#" > < i class = "fa fa-linkedin" > < /i></a > < /li> <
            li > < a class = "instagram"
            href = "https://www.instagram.com/insta.yasenev/?hl=ru"
            target = '_blank' > < i class = "fa fa-instagram" > < /i></a > < /li> <
            li > < a class = "youtube"
            href = "#" > < i class = "fa fa-telegram" > < /i></a > < /li> < /
            ul >
        )

        return ( <
            div className = 'contacts' >
            <
            div className = 'contact-info' >
            <
            /div> <
            div className = 'SocialUL' > { ull } <
            /div> < /
            div >

        )
    }
}