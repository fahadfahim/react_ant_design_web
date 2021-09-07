import React from 'react'
import {Row,Col} from 'antd'
import { Card } from 'antd';

import img1 from '../../assets/images/modern-design.jpg'
import img2 from '../../assets/images/great-support.jpg'
import img3 from '../../assets/images/clean-design.jpg'
import img4 from '../../assets/images/advanced-option.jpg'
import img5 from '../../assets/images/easy-customise.jpg'
import img6 from '../../assets/images/unlimited-features.jpg'
const { Meta } = Card;
function Feature() {
    return (
        <div id='features' className='block featureBlock bgGray'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Key Features and Benefits</h2>
                    <p>A quick cleaver brown fox jumps over the lazy dog</p>
                </div>
            <Row gutter={[16, 16]} justify='space-around' align="middle">
                <Col md={{span:8}} sm={{span:12}} justify="space-around" align="middle">
                <Card
                    hoverable
                    
                    cover={<img alt="Modern Design" src={img1}/>}
                >
                <Meta title="Modern Design" />
                </Card>
                </Col>
                
                <Col md={{span:8}} sm={{span:12}} justify="space-around" align="middle">
                <Card
                    hoverable
                    
                    cover={<img alt="Modern Design" src={img2}/>}
                >
                <Meta title="Modern Design" />
                </Card>
                </Col>

                <Col md={{span:8}} sm={{span:12}} justify="space-around" align="middle">
                <Card
                    hoverable
                    
                    cover={<img alt="Modern Design" src={img3}/>}
                >
                <Meta title="Modern Design" />
                </Card>
                </Col>
                <Col md={{span:8}} sm={{span:12}} justify="space-around" align="middle">
                <Card
                    hoverable
                    
                    cover={<img alt="Modern Design" src={img4}/>}
                >
                <Meta title="Modern Design" />
                </Card>
                </Col>
                <Col md={{span:8}} sm={{span:12}} justify="space-around" align="middle">
                <Card
                    hoverable
                    
                    cover={<img alt="Modern Design" src={img5}/>}
                >
                <Meta title="Modern Design" />
                </Card>
                </Col>
                <Col md={{span:8}} sm={{span:12}} justify="space-around" align="middle">
                <Card
                    hoverable
                    
                    cover={<img alt="Modern Design" src={img6}/>}
                >
                <Meta title="Modern Design" />
                </Card>
                </Col>
              
            </Row >
            
        </div>
        </div>
    )
}

export default Feature
