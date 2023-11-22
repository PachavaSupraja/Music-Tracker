import React from 'react';
import Tracks from '../tracks/Tracks';
import Header from './Header';
import Search from '../tracks/Search';
import MyTracks from './MyTracks';
const Index = () => {
  return (
    <div className='All'>
      <div className='container'>
      <Search/>
      <Header/>
      
      <Tracks/>
      <MyTracks/>
      </div>
      
    </div>
  )
}

export default Index
