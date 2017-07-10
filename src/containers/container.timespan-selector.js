import { connect } from 'react-redux'

import { setTimespan } from '../actions/action.data-source'
import View from '../components.views/view.timespan-selector'

const mapStateToProps = (state, ownProps) => {
    return {
        timespans: state.dataSource.timespans,
        selectedTimespan: state.dataSource.selectedTimespan
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTimespanChanged: (value) => dispatch(setTimespan(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View); 