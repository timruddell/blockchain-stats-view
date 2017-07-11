import * as React from 'react'
import { connect } from 'react-redux'
import Stats from 'simple-statistics'

import { fetchData, setTimespan, setStatisticSource } from '../actions/action.data-source'

import StatisticsTable from '../components.views/view.statistics-table'
import StatisticSourceSelector from '../components.views/view.statistic-selector'
import TimespanSourceSelector from '../components.views/view.timespan-selector'

const css = {
    inline: {
        display: "inline"
    }
}

/**
 * Container to display statistics derived from the remote data source.
 * 
 */
const View = ({
    statisticSources,
    selectedStatisticSource,
    selectedTimespan,
    timespans,
    statistics,
    dataLoaded,

    numberFormatter,

    onStatisticSourceChanged,
    onTimespanChanged
}) => {
    return (
        <div style={{textAlign: "center"}}>
            <h2 style={css.inline}>Show statistics for&nbsp;&nbsp;</h2>
            <StatisticSourceSelector {...{statisticSources, selectedStatisticSource, onStatisticSourceChanged}} />

            <h2 style={css.inline}>&nbsp;&nbsp;over the&nbsp;&nbsp;</h2>
            <TimespanSourceSelector {...{timespans, onTimespanChanged}} />
            <br />
            <br />
            <StatisticsTable {...{statistics, dataLoaded, numberFormatter}} />
        </div>
    )
}

const createFetchDataSelector = () => {
    let statistic = null;
    let timespan = null;

    return (s, t) => {
        if (s !== statistic || t !== timespan) {
            statistic = s
            timespan = t

            return fetchData();
        }

        return { type: null };
    }
}

let fetchDataSelector = createFetchDataSelector();

class Statistics extends React.Component {

    componentWillUpdate() {
        this.props.dispatchFetchData(
            this.props.selectedStatisticSource, 
            this.props.selectedTimespan
        );
    }

    render () {
        return <View {...this.props} />
    }
}

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

const l10nEN = new Intl.NumberFormat("en-US");

const mapStateToProps = (state) => {

    const { 
        selectedStatisticSource, 
        selectedTimespan, 
        statisticSources, 
        timespans,
        data,
        dataLoaded
        
    } = state.dataSource;

    // Fetch using our selector.
    fetchDataSelector(selectedStatisticSource, selectedTimespan);

    return {
        statisticSources,
        selectedStatisticSource,
        selectedTimespan,
        timespans,
        dataLoaded,

        statistics: computeStatistics(data),
        numberFormatter: l10nEN
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onStatisticSourceChanged: (value) => dispatch(setStatisticSource(value)),
        onTimespanChanged: (value) => dispatch(setTimespan(value)),
        dispatchFetchData: (s, t) => dispatch(fetchDataSelector(s, t))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);