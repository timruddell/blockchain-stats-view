import * as React from 'react'

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

export default View;