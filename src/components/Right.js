import React from 'react'
import './Right.css'
import InfoIcon from '@material-ui/icons/Info';

const Right = () => {
    return (
        <div className="right">
            <div className="right__card">
                <div className="right__card__title">
                    <h6>LinkdIn News</h6>
                    <InfoIcon />
                </div>
                <ul>
                    <li>Rejection is not ultimate,keep trying
                        <p>2d ago • 6052 readers</p>
                    </li>
                    <li>India's first crypto unicorn
                    <p>3d ago • 8290 readers</p>
                    </li>
                    <li>Mission: Secret job hunt
                    <p>19h ago • 2900 readers</p>
                    </li>
                    <li>TikTok become king of apps
                    <p>3d ago • 54,712 readers</p>
                    </li>
                    <li>Focus on the hiring process
                    <p>1d ago • 1298 readers</p>
                    </li>
                </ul>
            </div>
            <div className="right__card" style={{marginTop:'5px',marginBottom:'60px'}}>
                <div className="right__card__title">
                    <h6>Today's top courses</h6>
                    <InfoIcon />
                </div>
                <ol>
                    <li>Excel:VLOOKUP and XLOOKUP for Beginners
                    <p>Jess Stratton</p>
                    </li>
                    <li>Whats is Graphic Design?
                    <p>Sean Adams</p>
                    </li>
                    <li>Confronting Bias:Thriving Across our Differences
                    <p>Verna Mysers</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Right
