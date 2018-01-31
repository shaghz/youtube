import React, { Component } from "react";
import {inputbox} from '../'
class Main extends Component {
    render() {
        return (
            <div>
                <div className="inputbox">

                        <input placeholder="What to search in youtube?">
                        </input>
                        <button ><i class="fa fa-search" aria-hidden="true"></i></button>

                </div>
            </div>
        );
    }
}

export default Main;