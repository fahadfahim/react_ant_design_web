import React from 'react'
import { BackTop } from 'antd';

function AppFooter() {
    return (
        <div className='container-fluid'>
            <div className='footer'>
                <div className='logo'>
                    <i className='fas fa-bolt'></i>
                    <a href='#'>Tech</a>
                </div>
                <ul className='socials'>
                    <li><a href='#'> <i className='fab fa-facebook'></i> </a></li>
                    <li><a href='#'> <i className='fab fa-twitter'></i> </a></li>
                    <li><a href='#'> <i className='fab fa-linked-in'></i> </a></li>
                    <li><a href='#'> <i className='fab fa-pinterest-p'></i> </a></li>
                    <li><a href='#'> <i className='fab fa-instagram'></i> </a></li>
                </ul>
                <div className='copyright'>Copyright &copy; Md Ohidujjaman Fahad </div>
                <BackTop>
      <div className='backTop'> <i class="fas fa-arrow-circle-up"></i> </div>
    </BackTop>
            </div>
        </div>
    )
}

export default AppFooter

