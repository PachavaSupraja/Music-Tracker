import React,{Component} from 'react'
import { Consumer } from '../../Context';
import Spinner from '../layout/Spinner';
import Track from './Track';
import avatar from '../../avatar.jpg';
class Tracks extends Component {
  render(){
    return (
      <Consumer>
        {value=>{
          const {track_list,heading,artist_list}=value;
          if(track_list===undefined || track_list.length===0){
            return <Spinner/>
          }
          else{
            return(
              
              <div>
                <div className='d-flex flex-wrap col-lg-12 mt-4'>
                  <div className="col-lg-3 pe-4">
                    <h4 className='fw-bold mb-3'>Country's Top <span className='text-pink'>Artists </span></h4>
                    
                  
                  {artist_list.map(items => (
                    <div className='d-flex' key={items.artist.artist_id} >

                      <img src={avatar} alt='img' width='20px' height='20px' className='rounded-circle me-3 mt-1'></img>
                      <p className='mb-3'>{items.artist.artist_name}</p>
                    </div>  
                  ))}
                  </div>
                  <div className="col-lg-9">
                  <h4 className='mb-3'>{heading}</h4>
                  {track_list.map(item => (
                  <Track key={item.track.track_id} track={item.track}/>
          ))}
                  </div>
                
                </div>

              </div>
            );
          }

        }}
        
      </Consumer>
    )
  }
  
}

export default Tracks
