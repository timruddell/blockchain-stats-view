const { connect } = require('react-redux');

const dataSourceActions = require('../actions/action.data-source');
const View = require('../components.views/view.timespan-selector');

const mapStateToProps = (state, ownProps) => {
    return {
        timespans: state.dataSource.timespans,
        selectedTimespan: state.dataSource.selectedTimespan
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTimespanChanged: (value) => dispatch(dataSourceActions.setTimespan(value))
    }
}

const container = connect(mapStateToProps, mapDispatchToProps)(View); 
module.exports = container;