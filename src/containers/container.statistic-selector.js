const { connect } = require('react-redux');

const dataSourceActions = require('../actions/action.data-source');
const View = require('../components.views/view.statistic-selector');

/**
 * Functionality to list possible statistic sources and allow view to change
 * selected source.
 * 
 */

const mapStateToProps = (state, ownProps) => {
    return {
        statisticSources: state.dataSource.statisticSources,
        selectedStatisticSource: state.dataSource.selectedStatisticSource
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onStatisticSourceChanged: (value) => dispatch(dataSourceActions.setStatisticSource(value))
    }
}

const container = connect(mapStateToProps, mapDispatchToProps)(View);
module.exports = container;