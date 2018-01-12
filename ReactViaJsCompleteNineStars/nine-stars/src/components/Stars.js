import React from 'react';
import _ from 'lodash';

const Stars = (props) =>
{
    //const numberOfStars = 1 + Math.random() * 9;

    //let stars = [];
    //for (let i = 0; i < numberOfStars; i++)
    //{
    //    stars.push(<i key={i} className="fa fa-star"></i>);
    //}

    return (
        <div className="col-sm-5">
            {_.range(props.numberOfStars).map((currentItem) =>
                <i key={currentItem} className="fa fa-star"></i>
            )}
        </div>
    );
};

export default Stars;