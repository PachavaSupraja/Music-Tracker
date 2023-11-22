import React from 'react'
import theNights from './theNights.jpg';
import Bones from './imagineDragons.jpg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NightsSong from './theNights.mp3';
import headphones from './headphones.png';
import stay from './Stay.jpg';
import levitating from './Levitating.jpg';
import nightChanges from './nightChanges.jpg';
import { useState } from 'react';
const MyTracks = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='mt-3 mb-5'>
      <h4>Meanwhile Enjoy <span className='text-pink mt-5'>Lely</span>'s Fav Songs</h4>
      <div className='col-lg-12 d-flex flex-wrap mt-4 justify-content-between'>
       
        <div className='col-lg-2 col-md-3 col-sm-6 col-6 text-center'>
            <div className='' onClick={handleShow}>
            <img src={theNights} alt='img' height="200px" className='w-100 rounded'/>
            </div>
            
        </div>
        <div className='col-lg-2 col-md-3 col-sm-6 col-6 text-center'>
            <div className=''>
            <img src={Bones} alt='img' height="200px" className='rounded'/>
            </div>
            
        </div>
        <div className='col-lg-2 col-md-3 col-sm-6 col-6 text-center'>
            <div className='' onClick={handleShow}>
            <img src={nightChanges} alt='img' height="200px" className='rounded'/>
            </div>
            
        </div>
        <div className='col-lg-2 col-md-3 col-sm-6 col-6 text-center'>
            <div className=''>
            <img src={levitating} alt='img' height="200px" className='rounded'/>
            </div>
            
        </div>
        <div className='col-lg-2 col-md-3 col-sm-6 col-6 text-center'>
            <div className=''>
            <img src={stay} alt='img' height="200px" className='rounded'/>
            </div>
            
        </div>
        
      </div>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='bg-pink'>
          <Modal.Title className='bg-transparent text-center fw-small'><img src={headphones} alt='icon' width='25px' height='25px' className='mx-2 bg-transparent'></img></Modal.Title>
          
        </Modal.Header>
        <Modal.Body className='bg-transparent text-center'>
          <img src={theNights} alt='img' className='rounded'></img>
          <h6 className='text-black mb-0 fw-bold mt-2'>The Nights</h6>
          <p className='text-secondary bg-transparent fw-small mb-0'>Avinci</p>

          <audio src={NightsSong} controls className='bg-transparent mt-2'/>
          
        </Modal.Body>
        
      </Modal>










      
    </div>
  )
}

export default MyTracks
