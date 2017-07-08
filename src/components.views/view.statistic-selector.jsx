const React = require('react');

/**
 * Drop-down menu for selection of source statistic. 
 * 
 */
const View = ({
    statisticSourceValue,
    statisticSources,

    onStatisticSourceChanged
}) => {
    return (
        <select 
            value={statisticSourceValue}
            onChange={(e) => onStatisticSourceChanged(e.target.value)}>
            {
                statisticSources.map((source) => 
                    <option key={source.value} value={source.value}>{source.label}</option>
                )
            }
        </select>
    )
}

module.exports = View;