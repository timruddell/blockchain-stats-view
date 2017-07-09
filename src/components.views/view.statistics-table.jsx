const React = require('react');

const styles = {
    table: {
        border: "1px solid black",
        width: "50%"
    }
}

const renderStatistics = (v) => {
    return (
        <table style={styles.table}>
            <tbody>
            <tr>
                <th>Statistic</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>
                    {v}
                </td>
            </tr>
            </tbody>
        </table>
    );
}

/**
 * Display component for calculated statistics.
 * 
 */
const View = ({
    firstValue,
    dataLoaded
}) => {
    return (
        <div> {
            dataLoaded 
                ? renderStatistics(firstValue)
                : "Loading data..."
        } </div>
    )
}

module.exports = View;