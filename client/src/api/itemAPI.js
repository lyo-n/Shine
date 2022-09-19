import {instance} from "./index";

const fetchItems = async () => {
    const {data} = await instance.get('/api/agg/dailyAll')
    return data
}

const fetchItemsFilter = async () => {
    const {data} = await instance.get('/api/agg/getAllRevs')
    return data
}
export {fetchItems, fetchItemsFilter}