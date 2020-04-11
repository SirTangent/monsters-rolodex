import React, {Fragment} from "react";
import tommy from "../img/tommy.png";

export const Tommy = (props) => {
    return (
        <Fragment>
            <img src={tommy} className="App-logo" alt="logo" />
            <p>
                {this.state.name} drank {this.state.consumed} {this.state.drink}{(this.state.consumed != 1) ? "s" : ""} for lunch.
            </p>
            <button onClick={() => {
                if (this.state.consumed < this.state.limit) {
                    this.setState({consumed: this.state.consumed + 1})
                } else {
                    console.log('Tommy has had enough soda!')
                }}} disabled={this.state.consumed >= this.state.limit}>{(this.state.consumed < this.state.limit) ? "Drink Soda" : "Gordon, Im full"}</button>
        </Fragment>
    )
};