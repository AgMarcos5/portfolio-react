import React from 'react'

export const PrCard = (props) => {
    return (
        <div className="pr-element">
            <div className="pr-image" style={{ backgroundImage: `url(${props.image})` }}>
            </div>
            <div className="pr-info">
                <h2>{props.title}</h2>
                {props.description}
                <div className="pr-footer">
                    <div className="pr-tags">
                        {props.tags}
                    </div>
                    <div className="links">
                        {props.links}
                    </div>
                </div>
            </div>
        </div>
    )
}
