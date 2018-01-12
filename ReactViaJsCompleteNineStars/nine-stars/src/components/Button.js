import React from 'react';

const Button = (props) =>
{
    let button;
    switch(props.answerIsCorrect)
    {
        case true:
            button=  <button className="btn btn-success">
                <i className="fa fa-check"></i>
                    </button>
            break;
        case false:
               button=  <button className="btn btn-danger">
                <i className="fa fa-times"></i>
                    </button>
            break;

        default:
            button = <button className="btn"
                disabled={props.selectedNumbers.length === 0}
                onClick={props.checkAnswer}>
                =</button>
            break;
    }

    return (
        <div className="col-sm-2">
            {button}
        </div>
        );
};

export default Button;