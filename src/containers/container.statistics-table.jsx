const React = require('react');
const { connect } = require('react-redux');
const Stats = require('simple-statistics');

const actions = require('../actions/action.data-source');
const View = require('../components.views/view.statistics-table');

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
    
    return {
        statistics: computeStatistics(data),
        dataLoaded
    }
}

module.exports = connect(mapStateToProps)(View);