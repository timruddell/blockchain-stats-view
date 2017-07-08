const React = require("react");

const StatisticSourceSelector = require('../containers/container.statistic-selector');
const TimespanSourceSelector = require('../containers/container.timespan-selector');

/**
 * Root application view.
 * 
 */
const View = () => {
    return (
        <div>
            <StatisticSourceSelector />
            <TimespanSourceSelector />
        </div>
    );
}

module.exports = View;