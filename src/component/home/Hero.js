import React from 'react'
import { Carousel } from 'antd';
import { Button } from 'antd';
const Hero = () => {
    const items = [
        {
            key:'1',
            title:'Web and Mobile payment for developers',
            content:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            key:'2',
            title:'Front end development',
            content:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            key:'3',
            title:'Backend Development',
            content:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        }
    ]
    return (
        <div className='heroBlock'>
    <Carousel >
{items.map(item => {
    return(
        <div id='home' className='container-fluid' key={item.key}>
            <div className='content'>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className='btnHolder'>
                    <Button type='primary' size='large'>Learn More</Button>
                    <Button size='large'>
                     <i className='fas fa-desktop'></i>Watch a Demo</Button>
                </div>
            </div>
        </div>
    )
})}
  </Carousel>
        </div>
    )
}

export default Hero
