import React from 'react';

class Answer extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    handleSelectNumberClick = (clickedNumber) =>
    {
        this.props.unselectNumber(clickedNumber);
    };


    render()
    {
        return (
            <div className="col-sm-5">
                {this.props.selectedNumbers.map((currentValue, index) =>
                    <span key={index} onClick={() => this.handleSelectNumberClick(currentValue)}>{currentValue}</span>
                )}
            </div>
        );
    }
};

export default Answer;