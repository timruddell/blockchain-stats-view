var React = require("react");

const ApplicationView = require('../components.views/view.application');

class Application extends React.Component {
    render () {
        return (
            <ApplicationView message="Hello world!" />
        )
    }
}

module.exports = Application;