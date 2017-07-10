import * as React from 'react'

import StatisticSourceSelector from '../containers/container.statistic-selector'
import TimespanSourceSelector from '../containers/container.timespan-selector'
import Statistics from '../containers/container.statistics'

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

export default View;