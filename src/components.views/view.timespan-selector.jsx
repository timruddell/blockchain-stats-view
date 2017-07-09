const React = require('react');

/**
 * Drop-down menu for selection of timespans for data retrieval. 
 * 
 */
const View = ({
    selectedTimespan,
    timespans,

    onTimespanChanged
}) => {
    return (
        <select 
            value={selectedTimespan}
            onChange={(e) => onTimespanChanged(e.target.value)}>
            {
                timespans.map((source) => 
                    <option key={source.value} value={source.value}>{source.label}</option>
                )
            }
        </select>
    )
}

module.exports = View;