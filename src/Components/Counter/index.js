import { Component } from "react";
import "./index.css"

class Counter extends Component {
    state = {
        MangoesCount : 0,
        bananasCount : 0
    }

    onMangoBtn = () => {
        this.setState((prevState) => (
            {MangoesCount : prevState.MangoesCount + 1 }
        ))
    }

    onBananaBtn = () => {
        this.setState((prevState) => (
            {bananasCount : prevState.bananasCount + 1 }
        ))
    }

    render() {
        const {MangoesCount, bananasCount} = this.state
        return (
            <div className="backgroundContainer">
                <div className="innerContainer">
                    <h1 className="count-text"> Bob ate {MangoesCount} mangoes {bananasCount} bananas </h1>
                    <div className="counters-control-container">
                        <div className="counter-control">
                            <img src = "https://assets.ccbp.in/frontend/react-js/mango-img.png" className="fruit-image" alt="image"/>
                            <div className="button-container">
                                <button className="button" onClick={this.onMangoBtn}> Eat Mango </button>
                            </div>
                        </div>

                        <div className="counter-control">
                            <img src = "https://assets.ccbp.in/frontend/react-js/banana-img.png" className="fruit-image" alt="image"/>
                            <div className="button-container">
                                <button className="button" onClick={this.onBananaBtn}> Eat Banana </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Counter