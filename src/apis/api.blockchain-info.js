/**
 * Proxy for retrieving data from blockchain.info
 * 
 */
export default {

    /**
     * Retrieve data from remote endpoint.
     * 
     */
    getData: (statistic, timespan, dataCallback) => {
         // Build and make our request.
        const url = `https://api.blockchain.info/charts/${statistic}?timespan=${timespan}&format=json&sampled=false&cors=true`;

        return fetch(url)
            .then(response => {

                // Sanity check the content type.
                var content = response.headers.get("content-type")
                if (content && content.indexOf("application/json") !== -1) {

                    // Parse the response to JSON and put it on the state.
                    response.json().then(json => {
                        dataCallback(json.values)
                    })
                } else {
                    console.error("No JSON returned from webservice.")
                }
            })
            .catch(error => { throw(error); })
    }
}