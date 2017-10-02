import React, { Component } from 'react';
import Youtube from '../listContent/Youtube';

const apiKey = "AIzaSyAUUfDpnPm3K9lhXYWLH6fg0e4nVZjkPxk";
const resultNum = "6";
const channelId = "UC_ntXHv-XdKCD7CPynVvnQw";
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${resultNum}&q=tekken&key=${apiKey}`;

class YoutubeList extends Component {

    constructor(props){
        super(props);
        this.state = {
            requestFailed: false
        }
    }

    //automatically call when component mount
    componentDidMount(){
        fetch(url)
            .then(response => {
                if(!response.ok)
                    throw Error("Network request failed");
                return response;
            })
            .then(d => d.json())
            .then(d =>{
                this.setState({ youtubeList: d });
                console.log(d);
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }


    render() {
        if(this.state.requestFailed) return <p>Network Failed!</p>
        if(!this.state.youtubeList) return <p>Loading...</p>

        var listItems = this.state.youtubeList.items.map(function(item) {
            return (
              <Youtube key={item.id.videoId} data={item}></Youtube>
            );
          });
          
        return (
            <div>
                {listItems}
            </div>
        );
    }
}

export default YoutubeList;