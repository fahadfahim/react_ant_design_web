import React from 'react'
import { List, Card, Button } from 'antd';

const data = [
{
    title:'Basic',
    content:[
        {
        price:'$25.00',
        space:'1 GB of space',
        user:'1 user',
        support:'24/7 support',
        backup:'Safe, reliable backup',
        access:'Access from anywhere'
        }
    ]
},
{
    title:'Premium',
    content:[
        {
        price:'$25.00',
        space:'1 GB of space',
        user:'1 user',
        support:'24/7 support',
        backup:'Safe, reliable backup',
        access:'Access from anywhere'
        }
    ]
},
{
    title:'Standarnd',
    content:[
        {
        price:'$25.00',
        space:'1 GB of space',
        user:'1 user',
        support:'24/7 support',
        backup:'Safe, reliable backup',
        access:'Access from anywhere'
        }
    ]
},
];

const Pricing = () => {
    return (
        <div className='block pricingBlock bgGray'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Choose a plan to fit your needs</h2>
                    <p>The brown fox jumps over the lazy dog</p>
                </div>
            <List
    grid={{ gutter: 16,xs:1,sm:1,md:3,lg:3,xl:3,xxl:3, column: 3}}
    dataSource={data}
    justify="space-around"
    align='middle'
    renderItem={item => (
      <List.Item>
        <Card  title={item.title}>
            <p className='large'>{item.content[0].price}</p>
            <p>{item.content[0].space}</p>
            <p>{item.content[0].user}</p>
            <p>{item.content[0].support}</p>
            <p>{item.content[0].backup}</p>
            <p>{item.content[0].access}</p>
            <Button type='primary' size='large'> <i className='fab fa-telegram-plane'></i> Get Started</Button>
        </Card>
      </List.Item>
    )}
      />
            </div>
        </div>
    )
}

export default Pricing
