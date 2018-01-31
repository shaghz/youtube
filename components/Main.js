import React, { Component } from "react";
import {hi} from './main.css';
class Main extends Component {
    render() {
        return (

                <div className={hi}>
                        <input placeholder="What to search in youtube?">
                        </input>
                        <button ><i class="fa fa-search" aria-hidden="true"></i></button>

                </div>

        );
    }
}

export default Main;