import * as types from '../constants/actions.js'
import Blockchain from '../apis/api.blockchain-info'

export const setStatisticSource = (value) => ({
    type: types.SET_STATISTIC_SOURCE,
    value
});

export const setTimespan = (value) => ({
    type: types.SET_TIMESPAN,
    value
});

export const setData = (value) => ({
    type: types.SET_DATA,
    value
});

export const setDataLoaded = (value) => ({
    type: types.SET_DATA_LOADED,
    value
});

export const fetchData = () => {
    return (dispatch, getState) => {

        const { selectedStatisticSource, selectedTimespan } = getState().dataSource;

        // Reset the data loaded flag.
        dispatch(setDataLoaded(false));

        Blockchain.getData(selectedStatisticSource, selectedTimespan,
            data => {
                dispatch(setData(data));
                dispatch(setDataLoaded(true));
            });
    }
}