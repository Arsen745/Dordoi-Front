import React from 'react'
import Baner from '../../components/baner/Baner'
import Card from '../../components/card/Card'

const UserHomePage = () => {
  return (
    <div className='container'>
      <Baner/>
      <div className="cards" style={{display: 'flex', flexWrap: 'wrap', gap: 30, alignItems: 'center', justifyContent: 'center', marginTop: '77px'}}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="button" style={{display: 'flex', justifyContent: 'center', marginTop: 37}}>
        <button style={{border: 'none', padding: '11px 52px', borderRadius: 8, color: 'white', background: '#4584FF', cursor: 'pointer'}}>Показать ещё</button>
      </div>
    </div>
  )
}

export default UserHomePage