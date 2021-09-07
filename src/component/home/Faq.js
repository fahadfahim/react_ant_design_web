import React from 'react'
import { Button, Collapse } from 'antd';

const { Panel } = Collapse;
const Faq = () => {
    return (
        <div id='faq' className='block faqBlock'>
            <div className='container-fluid'>
              <div className='titleHolder'>
                <h2>Frequently asked question </h2>
                <p>Cis simply dummy text of the printing and typesetting industry</p>
              </div>
            <Collapse defaultActiveKey={['1']} >
    <Panel header="Question 1" key="1">
      <p>Cis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardce the 1500s, when an unknown printer only five centuries, but also theg essen </p>
    </Panel>
    <Panel header="Question 2" key="2">
      <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever to electronic typesetting, remaining essen</p>
    </Panel>
    <Panel header="Question 3" key="3">
      <p>is simply dummy text of the printing and typesettin remaining essen</p>
    </Panel>
  </Collapse>
  <div className='quickSupport'>
    <h3>Want quick support</h3>
    <p>Cis simply dummy text of the printing and typesetting industry Cis simply dummy text of the printing and typesetting industry</p>
    <Button type='primary' size='large'> <i className='fas fa-envelope'></i> Email your question</Button>
  </div>
            </div>
        </div>
    )
}

export default Faq
