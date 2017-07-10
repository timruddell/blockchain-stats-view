const React = require("react");

const StatisticSourceSelector = require('../containers/container.statistic-selector');
const TimespanSourceSelector = require('../containers/container.timespan-selector');
const Statistics = require('../containers/container.statistics');

const css = {
    inline: {
        display: "inline"
    }
}

/**
 * Root application view.
 * 
 */
const View = () => {
    return (
        <div>
            <div className="container" 
                    style={{ paddingBottom: 0, textAlign: "center" }}>
                <h2 style={css.inline}>Show statistics for&nbsp;&nbsp;</h2>
                <StatisticSourceSelector />
                <h2 style={css.inline}>&nbsp;&nbsp;over the&nbsp;&nbsp;</h2>
                <TimespanSourceSelector />
            </div>
            <br />
            <br />
            <Statistics />
        </div>
    );
}

module.exports = View;