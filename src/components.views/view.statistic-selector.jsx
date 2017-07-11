import * as React from 'react'

/**
 * Drop-down menu for selection of source statistic. 
 * 
 */
const View = ({
    selectedStatisticSource,
    statisticSources,

    onStatisticSourceChanged
}) => {
    return (
        <select 
            value={selectedStatisticSource}
            onChange={(e) => onStatisticSourceChanged(e.target.value)}>
            {
                statisticSources.map((source) => 
                    <option key={source.value} value={source.value}>{source.label}</option>
                )
            }
        </select>
    )
}

export default View;