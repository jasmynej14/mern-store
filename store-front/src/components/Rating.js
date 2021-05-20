import React from 'react'
import * as Icon from 'react-bootstrap-icons';
const Rating = ({ value,text }) => {
    return (
        <div className="rating">
            <span>
                {value >= 1 &&
                    <Icon.StarFill/>
                }
               
            </span>
            <span>
                {value >= 2 &&
                    <Icon.StarFill/>
                }
               
            </span>
            <span>
                {value >= 3 &&
                    <Icon.StarFill/>
                }
                
            </span>
            <span>
                {value >= 4 &&
                    <Icon.StarFill/>
                }
                
            </span>
            <span>
                {value >= 5 &&
                    <Icon.StarFill/>
                }
                
            </span>
        </div>
    )
}

export default Rating
