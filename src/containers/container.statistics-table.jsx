import * as React from 'react'
import { connect } from 'react-redux'
import * as Stats from 'simple-statistics'

import actions from '../actions/action.data-source'
import View from '../components.views/view.statistics-table'

/**
 * Presentation component for displaying statistics.
 * 
 */

const computeStatistics = (data) => {

    if (!data || data.length == 0) {
        return [];
    }
    
    const values = data.map(d => d.y);

    return [{
        label: "Mean",
        value: Stats.mean(values)
    },
    {
        label: "Minimum",
        value: Stats.min(values)
    },
    {
        label: "Maximum",
        value: Stats.max(values)
    },
    {
        label: "Median",
        value: Stats.median(values)
    },
    {
        label: "Standard Deviation",
        value: Stats.standardDeviation(values)
    }];
}

const mapStateToProps = (state) => {

    const { dataLoaded, data } = state.dataSource;
    const l10nEN = new Intl.NumberFormat("en-US");
    
    return {
        statistics: computeStatistics(data),
        dataLoaded,
        numberFormatter: l10nEN
    }
}

export default connect(mapStateToProps)(View);