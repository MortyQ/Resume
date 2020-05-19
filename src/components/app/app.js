import React, { Component } from 'react'
import './app.css'
import Header from '../header'
import Photo from '../photo-profil'
import Main from '../main-page'
import Resume from '../resume-page'
import Project from '../project-page'
import Contacts from '../contacts-page'
import Skils from '../skils-page'
import Spinner from '../spinner'
import { Route, BrowserRouter } from 'react-router-dom'




export default class App extends Component {

    state = {
        loading: null,
    }

    render() {
        const { loading } = this.state

        const spinner = loading ? < Spinner / > : null;



        return ( <
            BrowserRouter >
            <
            div className = 'wrapper' >
            <
            Header / >

            <
            div className = 'wrapper-info' >
            <
            Photo / >

            <
            Route path = '/main'
            component = { Main }
            /> <
            Route path = '/resume'
            component = { Resume }
            /> <
            Route path = '/project'
            component = { Project }
            /> <
            Route path = '/contacts'
            component = { Contacts }
            /> <
            Route path = '/skils'
            component = { Skils }
            />







            <
            /div>

            <
            /
            div >
            <
            /BrowserRouter>
        )
    }
}