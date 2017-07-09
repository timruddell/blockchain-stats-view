const React = require('react');
const { connect } = require('react-redux');

const actions = require('../actions/action.data-source');
const View = require('../components.views/view.statistics-table');

/**
 * Presentation component for displaying statistics.
 * 
 */

const mapStateToProps = (state) => {

    const { dataLoaded, data } = state.dataSource;

    const firstValue = data && data[0] ? data[0].y : 0;

    return {
        firstValue,
        dataLoaded
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(View);