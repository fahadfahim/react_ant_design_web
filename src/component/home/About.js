import React from 'react'
import { Row, Col, Slider } from 'antd';
const About = () => {
    const items = [
        {
            key:'1',
            icon:<i className='fas fa-chart-pie'></i>,
            title:'High Performance',
            content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley'
        },
        {
            key:'2',
            icon:<i className='fas fa-desktop'></i>,
            title:'Flat Design',
            content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley'
        },
        {
            key:'3',
            icon:<i className='fas fa-database'></i>,
            title:'High Performance',
            content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley'
        }
    ]
    return (
        <div id='about' className='block aboutBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>About Us</h2>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
                <div className='contentHolder'>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
               <Row gutter={[16, 16]}>
                   {items.map(item => {
                    return( <Col md={{ span: 8 }} key={item.key}>
                        <div className='content'>
                            <div className='icon'>
                            {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    </Col>)
                   })}
                </Row>
            </div>
        </div>
    )
}

export default About
