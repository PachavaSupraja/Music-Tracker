import React, { Component } from 'react'
import axios from 'axios';
import Spinner from '../layout/Spinner';
class Lyrics extends Component {
    state={
        track:{},
        lyrics:{}
    };
    componentDidMount(){
        axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433&apikey=b6af56c9be1905da92f1838ed7b02b50')
        .then(res=>{
            console.log(res.data);
            this.setState({lyrics: res.data.message.body.lyrics});
        })
        .catch(err=>console.log(err));
    }
  render() {
    return (
        <div className='container'>
          {this.lyrics===undefined ?(
          <div>
            <h5 className="text-center mt-5">Please wait for a while</h5>
            <Spinner/>
            </div>):
          (<div>
            <h1>Lyrics</h1>
          </div>)}
        </div>
            
    );
}
}
export default Lyrics;