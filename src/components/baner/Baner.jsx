import React from 'react'
import { Carousel } from 'antd';
import './Baner.css'
import banerImage from '../../assets/png/baner-image.png'



const contentStyle = {
    margin: 0,
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    borderRadius: '16px'
};

const Baner = () => {
    return (
        <div className='baner-homepage'>
            <Carousel arrows infinite={true} autoplay={false} style={{borderRadius: '16px'}}>
                <div className='content-baner'>
                    <div className="left-content-baner">
                        <h1>Скидка на часы редми</h1>
                        <p>успей забрать</p>
                    </div>
                    <div className="right-content-baner">
                        <img src={banerImage} alt="" />
                    </div>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    )
}

export default Baner