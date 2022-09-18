import {instance} from "./index";

const fetchItems = async () => {
    const {data} = await instance.get('/api/agg/dailyAll')
    return data
}
export {fetchItems}