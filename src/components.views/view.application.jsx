var React = require("react");

//
// Root application view.
//
const View = ({
    message
}) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

module.exports = View;