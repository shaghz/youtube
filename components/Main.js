import React, { Component } from "react";
import {hi} from './main.css';
import List from "../components/List"
class Main extends Component {
    // let YOUTUBE_API_KEY = AIzaSyAnzwEsXfyn5-WssI_unXARgPYY8CDdSII;
    handleChange(event) {

        console.log(this);
    }
    render() {
        return (
                <div>
                <div className={hi}>
                        <input  onKeyUp={this.handleChange.bind(this)} placeholder="What to search in youtube?">
                        </input>
                        <button ><i className="fa fa-search" aria-hidden="true"></i></button>

                </div>
                <List />
                </div>
        );
    }
}

export default Main;