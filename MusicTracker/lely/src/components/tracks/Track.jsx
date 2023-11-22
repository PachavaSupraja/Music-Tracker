import React from 'react'
import { Link } from 'react-router-dom';
const Track=(props)=> {
    const {track}=props;
  return (
    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
        <div className="card mb-2 shadow-sm">
            <div className="card-body d-flex flex-wrap">
            <div className='col-lg-3 p-2'>
                <p className='fw-bold mb-0'>{track.track_name}</p>
                </div>
                <div className='col-lg-4 p-2'>
                <p className="card-text mb-0">
                    <strong>
                        <i className='fas fa-compact-disc'>Artist </i>
                    </strong>: {track.artist_name} {track.track_id}
                </p>
                </div>
                
                <div className='col-lg-3 p-2'>
                <p className="card-text mb-0">
                    <strong>
                        <i className='fas fa-compact-disc'>Album </i>
                    </strong>: {track.album_name}
                </p>
                </div>
                <div className='col-lg-2 text-center mt-2'>
                <Link to={'lyrics/track/15953433'} 
                className="text-decoration-none"
                ><small className="bg-pink text-white p-2 rounded">View Lyrics</small>
                     
                </Link>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}
export default Track