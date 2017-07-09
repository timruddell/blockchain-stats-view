const React = require("react");

const StatisticSourceSelector = require('../containers/container.statistic-selector');
const TimespanSourceSelector = require('../containers/container.timespan-selector');
const Statistics = require('../containers/container.statistics');

/**
 * Root application view.
 * 
 */
const View = () => {
    return (
        <div>
            <StatisticSourceSelector />
            <TimespanSourceSelector />
            <br />
            <br />
            <Statistics />
        </div>
    );
}

module.exports = View;