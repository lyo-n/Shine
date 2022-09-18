import React from 'react';
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {fetchItems} from './api/itemAPI';
import axios from './api/index';


function App () {
  const [items, setItems] = React.useState();
  // console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ items", items)



  React.useEffect(() => {
    fetchItems().then(data => {
      // return setItems(data)
   
    const rows = data.map(item => ({
      ad_name: item.ad_name,
      total_revs: item.total_revs,
      total_spend: item.total_spend,
      total_profit: item.total_profit,
      total_sessions: item.total_sessions,
      total_paid_clicks: item.total_paid_clicks,
      total_page_views: item.total_page_views,
      cpc:  item.cpc,
      roas:  item.roas,
      image_url:  item.image_url,
      status:  item.status,
      key: item.id
    }))
  console.log("🚀 ~ file: App.js ~ line 60 ~ rows ~ rows", rows)
  setItems(rows)
})
}, [])


  // const data = [
  //   {
  //     ad_name: items[0].ad_name,
  //     age: 22,
  //     adress: 'adress 1',
  //     key: '1'
  //   },
  //   {
  //     ad_name: items[1].ad_name,
  //     age: 22,
  //     adress: 'adress 1',
  //     key: '1'
  //   },
  //   {
  //     name: 'Name 1',
  //     age: 22,
  //     adress: 'adress 1',
  //     key: '1'
  //   },
  //   {
  //     name: 'Name 2',
  //     age: 23,
  //     adress: 'adress 2',
  //     key: '2'
  //   },
  //   {
  //     name: 'Name 1',
  //     age: 24,
  //     adress: 'adress 2',
  //     key: '3'
  //   }
  // ]



  const columns = [
    {
      title: 'ad_name',
      dataIndex: 'ad_name',
      key: 'key'
    },
    {
      title: 'total_revs',
      dataIndex: 'total_revs',
      key: 'key'
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
      key: 'key'
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'key'
    },
    {
      title: 'Graduated',
      key: 'key',
      render: payload => {
        return <p>{payload.age<23?'true':'false'}</p>
      }
    }
  ]

  return (
    <div>
        <Table
        dataSource={[]}
        columns={columns}
        >

        </Table>
    </div>
  );
}

export default App;
