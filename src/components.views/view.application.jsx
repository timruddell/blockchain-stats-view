const React = require("react");
const StatisticSourceSelector = require('../containers/container.statistic-selector');

/**
 * Root application view.
 * 
 */
const View = () => {
    return (
        <div>
            <StatisticSourceSelector />
        </div>
    );
}

module.exports = View;