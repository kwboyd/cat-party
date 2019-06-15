import React from 'react';
import './Cat.scss';

const Cat = ({catBody}) => {
    console.log(catBody);

    return (
        <div className="cat">
            <span className="cat-body">
                {catBody}
            </span>
        </div>
    )
}

export default Cat;