import React from 'react'
import LeftProduct from '../../components/left-product/LeftProduct'
import Card from '../../components/card/Card'

const UserProductPage = () => {
  return (
    <div style={{display: 'flex'}}>
        <div className="left" style={{width: '20%', borderRight: '1px solid #4584FF', paddingRight: '10px'
}}>
            <LeftProduct/>
        </div>
        <div className="right" style={{marginLeft: 18, display: 'flex', flexWrap: 'wrap', gap: 20, height: '81vh'}}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default UserProductPage