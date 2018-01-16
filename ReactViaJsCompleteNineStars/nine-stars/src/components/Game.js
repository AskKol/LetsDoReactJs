import React from 'react';
import Answer from './Answer';
import Button from './Button';
import Stars from './Stars';
import Numbers from "./Numbers";

class Game extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedNumbers: [],
            randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
            answerIsCorrect: null,
            usedNumbers: [],
            redraws:5
        };
    }

    selectNumber = (clickedNumber) =>
    {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0)
        {
            return;
        }
        this.setState((prevState) => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        })
        );
    };

    unselectNumber = (clickedNumber) =>
    {
        this.setState((prevState) => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
        }));
    };

    checkAnswer = () =>
    {
        this.setState((prevState) => ({
            answerIsCorrect: prevState.randomNumberOfStars
            === prevState.selectedNumbers.reduce((total, number) => total + number, 0)

        }));
    };

    acceptAnswer = () =>
    {
        this.setState((prevState) => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null
        }));
    };
    reDraw = () =>
    {
        if (this.state.redraws===0)
        {
            return;
        }
        this.setState((prevState) => ({
            randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
            selectedNumbers: [],
            answerIsCorrect: null,
            redraws:prevState.redraws-1
        }));
    };

    render()
    {
        const { selectedNumbers, randomNumberOfStars, answerIsCorrect, usedNumbers,redraws } = this.state;
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={randomNumberOfStars} />
                    <Button selectedNumbers={selectedNumbers}
                        checkAnswer={this.checkAnswer}
                        answerIsCorrect={answerIsCorrect}
                        acceptAnswer={this.acceptAnswer}
                        reDraw={this.reDraw}
                        redraws={redraws}/>

                    <Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber} />
                </div>
                <br />
                <Numbers selectedNumbers={selectedNumbers} selectNumber={this.selectNumber} usedNumbers={usedNumbers} />
            </div>

        );
    }


}

export default Game;