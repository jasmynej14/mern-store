import React from 'react'
import * as Icon from 'react-bootstrap-icons';
const Rating = ({ value,text }) => {
    return (
        <div className="rating">
            <span>
                {value >= 1 &&
                    <Icon.StarFill/>
                }
                {value <= 0.5 &&
                    <Icon.StarHalf/>
                }
               
            </span>
            <span>
                {value >= 2 &&
                    <Icon.StarFill/>
                }
               {value <= 1.5 &&
                    <Icon.StarHalf/>
                }
            </span>
            <span>
                {value >= 3 &&
                    <Icon.StarFill/>
                }
                {value <= 2.5 &&
                    <Icon.StarHalf/>
                }
            </span>
            <span>
                {value >= 4 &&
                    <Icon.StarFill/>
                }
                {value <= 3.5 &&
                    <Icon.StarHalf/>
                }
                
            </span>
            <span>
                {value >= 5 &&
                    <Icon.StarFill/>
                }
                {value == 4.5 &&
                    <Icon.StarHalf/>
                }
            </span>
            <span>
                {text}
            </span>
        </div>
    )
}

export default Rating
