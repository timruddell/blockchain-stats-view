import * as React from 'react'

import Statistics from '../containers/container.statistics'

/**
 * Root application view.
 * 
 */
const View = () => {
    return (
        <div>
            <div className="container" 
                style={{ paddingBottom: 0, textAlign: "center" }}>
            </div>
            <Statistics />
        </div>
    );
}

export default View;