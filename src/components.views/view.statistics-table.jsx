import * as React from 'react'

const renderStatistics = (statistics, numberFormatter) => {
    return (
        <table className="container">
            <thead>
            <tr>
                <th><h1>Statistic</h1></th>
                <th><h1>Value</h1></th>
            </tr>
            </thead>
            <tbody>
            {
                statistics.map(s => 
                    <tr key={s.label}>
                        <td>
                            {s.label}
                        </td>
                        <td>
                            {
                                // Rounding to 2 dp and formatting.
                                numberFormatter.format(
                                    parseFloat(Math.round(s.value * 100) / 100).toFixed(2)
                                )
                            }
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
    );
}

/**
 * Display component for calculated statistics.
 * 
 */
const View = ({
    statistics,
    dataLoaded,
    numberFormatter
}) => {
    return (
        <div> {
            dataLoaded 
                ? (
                    statistics && statistics.length > 0 
                        ? renderStatistics(statistics, numberFormatter) 
                        : <h2>No data available for selected inputs</h2>
                )
                : <h1><span className="yellow">Loading data...</span></h1>
        } </div>
    )
}

export default View;