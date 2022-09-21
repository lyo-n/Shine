import React from 'react';
import 'antd/dist/antd.css';
import {Table, Button} from 'antd';
import {fetchItems, fetchItemsFilter} from './api/itemAPI';


function App () {
  const [items, setItems] = React.useState();
  const [isTrue, setButtonClick] = React.useState(1);
    

  React.useEffect(() => {
    fetchItems().then(data => {
      const arr_data = data.map(item => ({
        ...item,
        key: item._id})
      )
      return setItems(arr_data)
})
}, [])

function handleClick() {
  setButtonClick(isTrue+1)
  if(isTrue % 2){
  fetchItemsFilter().then(data => {
    const arr_data = data.map(item => ({
      ...item,
      key: item._id})
    )
    return setItems(arr_data)
})
  } else {
    fetchItems().then(data => {
      const arr_data = data.map(item => ({
        ...item,
        key: item._id})
      )
      return setItems(arr_data)
})
  }
}


  const columns = [
    {
      title: 'ad_name',
      dataIndex: 'ad_name',
      key: 'key',
    },
    {
      title: 'total_revs',
      dataIndex: 'total_revs',
      key: 'key',
      sorter: (a, b) => a.total_revs - b.total_revs
    },
    {
      title: 'total_spend',
      dataIndex: 'total_spend',
      key: 'key'
    },
    {
      title: 'total_profit',
      dataIndex: 'total_profit',
      key: 'key'
    },
    {
      title: 'total_sessions',
      dataIndex: 'total_sessions',
      key: 'key'
    },
    {
      title: 'total_paid_clicks',
      dataIndex: 'total_paid_clicks',
      key: 'key'
    },
    {
      title: 'total_page_views',
      dataIndex: 'total_page_views',
      key: 'key'
    },
    {
      title: 'cpc',
      dataIndex: 'cpc',
      key: 'key'
    },
    {
      title: 'roas',
      dataIndex: 'roas',
      key: 'key'
    },
    {
      title: 'image_url',
      dataIndex: 'image_url',
      key: 'key',
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'key'
    },
    {
      title: 'Discrepancy, %',
      key: 'key',
      render: payload => {
        return <p>{(payload.total_sessions/payload.total_paid_clicks*100).toFixed(2)}</p>
      },
    },
    {
      title: 'PRPM',
      key: 'key',
      render: payload => {
        return <p>{(1000*payload.total_revs/payload.total_page_views).toFixed(3)}</p>
      }
    }
  ]

  return (
    <div>
        <Button 
          style={{margin: 15}} 
          type="primary"
          onClick={handleClick}
        >
          {isTrue % 2 ? `Filter by "total_revs > 40"` : `All daily`}
        </Button>
        <Table
          dataSource={items}
          columns={columns}
        >

        </Table>
    </div>
  );
}

export default App;
