const React = require('react');
const { connect } = require('react-redux');

const actions = require('../actions/action.data-source');
const StatisticsTable = require('./container.statistics-table');


/**
 * Container to display statistics derived from the remote data source.
 * 
 */
class StatisticsComponent extends React.Component {
    // We want to hook into the React component's lifecycle in order to
    // load our data when the component mounts, and when it's about to 
    // receive a new set of props.
    componentDidMount() {
        this.props.fetchData();
    }
    componentWillUpdate() {
        this.props.fetchData();
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.selectedStatisticSource == nextProps.selectedStatisticSource
                && this.props.selectedTimespan == nextProps.selectedTimespan) {
            return false;
        }

        return true;
    }

    render() {
        return <StatisticsTable />
    }
}

const mapStateToProps = (state) => {

    const { selectedStatisticSource, selectedTimespan, dataLoaded } = state.dataSource;

    return {
        selectedStatisticSource,
        selectedTimespan,
        dataLoaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(actions.fetchData())
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(StatisticsComponent);