import React from 'react';
import _ from 'lodash';
class Numbers extends React.Component 
{
    constructor(props)
    {
        super(props);
    }

    handleSlectNumberClick = (clickedNumber) =>
    {
        this.props.selectNumber(clickedNumber);
    };

     numberClassName = (number) =>
     {
          if (this.props.usedNumbers.indexOf(number) >= 0)
        {
            return 'used';
        }
        if (this.props.selectedNumbers.indexOf(number) >= 0)
        {
            return 'selected';
        }
    };
    render()
    {
        //onClick={() => props.selectNumber(number)}
        return (
            <div className="well well-sm text-center">
                {Numbers.list.map((number, i) =>

                    <span key={i} className={this.numberClassName(number)}
                        onClick={()=>this.handleSlectNumberClick(number)}>{number}</span>
                )}
            </div>
        );
    }

};

Numbers.list = _.range(1, 10);
export default Numbers;