
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const Works = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

        return (
            <div id='works' className='block worksBlock'>
                <div className='container-fluid'>
                    <div className='titleHolder'>
                        <h2>How it works</h2>
                        <p>The quick brown fox jumps over the lazy dog </p>
                    </div>
      <div className='contentHolder'>
      <Button  onClick={showModal}>
        <i className='fas fa-play'></i>
      </Button>
      </div>
      <Modal title="Ant Design Basic" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <iframe width="450" height="315" src="https://www.youtube.com/embed/83pOHuWKbr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Modal>
                </div>
            </div>
        )
    
}
export default Works