/** @jsx React.DOM */

var React = require("react");
var ReactDOM = require("react-dom");

var Application = require("./component.application");

ReactDOM.render(
    <Application />, 
    // Target DOM container.
    document.getElementById("application-root")
);