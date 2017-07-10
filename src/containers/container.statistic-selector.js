import { connect } from 'react-redux'

import { setStatisticSource } from '../actions/action.data-source'
import View from '../components.views/view.statistic-selector'

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
        onStatisticSourceChanged: (value) => dispatch(setStatisticSource(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);