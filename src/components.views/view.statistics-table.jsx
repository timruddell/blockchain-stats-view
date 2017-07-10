const React = require('react');

const styles = {
    table: {
        border: "1px solid black",
        width: "50%"
    }
}

const renderStatistics = (statistics) => {
    return (
        <table style={styles.table}>
            <tbody>
            <tr>
                <th>Statistic</th>
                <th>Value</th>
            </tr>
            {
                statistics.map(s => 
                    <tr key={s.label}>
                        <td>
                            {s.label}
                        </td>
                        <td>
                            {
                                // Rounding to 2 dp.
                                parseFloat(Math.round(s.value * 100) / 100).toFixed(2)
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
    dataLoaded
}) => {
    return (
        <div> {
            dataLoaded 
                ? (
                    statistics && statistics.length > 0 
                        ? renderStatistics(statistics) 
                        : "No data available"
                )
                : "Loading data..."
        } </div>
    )
}

module.exports = View;