import React from 'react';

const Loading = () => {
    return (
        <div className="container-loading">
            <div className="content">
                <div className="planet">
                    <div className="ring"></div>
                    <div className="cover-ring"></div>
                        <div className="spots">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                <p>loading</p>
            </div>
        </div>
    )
}

export default Loading
