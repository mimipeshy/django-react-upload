import  './App.css'
import React, {Component} from 'react'
import logo from './logo.svg'
import Uploads from "./upload";
import Post_Files from "./Components/Post_Files";
class  App extends Component{
    render() {
        return(
            <div className = "App">
                <header className= 'App-header'>
                    <img src={logo} className='App-logo' alt ='logo'/>
                    <h1 className='App-title'>Welcome to React</h1>
                </header>
                <Uploads/>
            <Post_Files/>
            </div>
        );
    }
}

export default App;