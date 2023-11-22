import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../Context';
import searchIcon from './searchIcon.png';
class Search extends Component {
    state={
        trackTitle:''
    }
    findTrack=(e)=>{
        e.preventDefault();

    }
    onChange=e=>{
        this.setState({trackTitle:e.target.value});
        axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=b6af56c9be1905da92f1838ed7b02b50')
        .then(res=>{
          console.log(res.data);
            //this.setState({artist_list: res.data.message.body.artist_list});
        })
        
    }
  render() {
    return (
      <Consumer>
        {value=>{
            return(
                <div className='d-flex flex-wrap mt-3 mb-3 col-lg-9 mx-auto'>
                    <form className='d-flex col-lg-12' onSubmit={this.findTrack}>
                  
                    <div className='form-group col-lg-12 mt-1 '>
                        <input
                        type='text'
                        className='form-control form-control-sm bg-transparent border-white w-100 text-white'
                        placeholder='search song'
                        name='tractTitle'
                        
                        onChange={this.onChange}
                        />
                    </div>
                    <img src={searchIcon} alt="icon" width="20px" height="20px" className='ms-3 mt-2'></img>
                    </form>
                    
                </div>
            );
        }}
        
      </Consumer>
    )
  }
}
export default  Search;