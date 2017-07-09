export const setStatisticSource = (value) => ({
    type: 'SET_STATISTIC_SOURCE',
    value
});

export const setTimespan = (value) => ({
    type: 'SET_TIMESPAN',
    value
});

export const setData = (value) => ({
    type: 'SET_DATA',
    value
});

export const setDataLoaded = (value) => ({
    type: 'SET_DATA_LOADED',
    value
});

export const fetchData = () => {
    return (dispatch, getState) => {

        const { selectedStatisticSource, selectedTimespan } = getState().dataSource;

        // Reset the data loaded flag.
        dispatch(setDataLoaded(false));

        // Build and make our request.
        const url = `https://api.blockchain.info/charts/${selectedStatisticSource}?timespan=${selectedTimespan}&format=json&sampled=false`;

        return fetch(url)
            .then(response => {

                // Sanity check the content type.
                var content = response.headers.get("content-type");
                if (content && content.indexOf("application/json") !== -1) {

                    // Parse the response to JSON and put it on the state.
                    response.json().then(json => {
                        dispatch(setData(json.values));
                        dispatch(setDataLoaded(true));
                    });
                } else {
                    console.error("No JSON returned from webservice.");
                }
            })
            .catch(error => { throw(error); });
    }
}