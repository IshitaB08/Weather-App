import React from "react";

class Titles extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title-container__title">Weather Information</h1>
                <h3 className="title-container__subtitle">FInd out temperature, conditions and more.</h3>
            </div>
        );
    }
};

export default Titles;