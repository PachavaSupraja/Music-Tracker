import React, { Component } from 'react';
import axios from 'axios';
const Context=React.createContext();
export class Provider extends Component {
    state={
        track_list:[],
        artist_list:[],
        lyrics:[],
        heading:'Top 10 Tracks'
    }

    componentDidMount(){
        axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=b6af56c9be1905da92f1838ed7b02b50')
        .then(res=>{
            this.setState({track_list: res.data.message.body.track_list});
        })
        .catch(err=>console.log(err));

        axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=25&country=us&apikey=b6af56c9be1905da92f1838ed7b02b50')
        .then(res=>{
          
            this.setState({artist_list: res.data.message.body.artist_list});
        })
        .catch(err=>console.log(err));
        axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433&apikey=b6af56c9be1905da92f1838ed7b02b50')
        .then(res=>{
            console.log(res.data);
            this.setState({lyrics: res.data.message.body});
        })
        .catch(err=>console.log(err));
        
    }
    render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer=Context.Consumer;
