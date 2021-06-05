import React from 'react'

function Details(props) {
    return (
        <div className="c-player--details">
            <div className="details-img">
                {/* <img src={'http://localhost:8000/'+props.song.image} alt="" /> */}
                <img src={props.song.image} alt="" />
            </div>
            <h3 className="details-title">{props.song.title}</h3>
            <h4 className="details-artist">{props.song.artist}</h4>
        </div>
    )
}

export default Details
