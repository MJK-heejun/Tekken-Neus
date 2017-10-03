import React, { Component } from 'react';
import Youtube from '../listContent/Youtube';
import {GridList, GridTile} from 'material-ui/GridList';


const apiKey = "AIzaSyAUUfDpnPm3K9lhXYWLH6fg0e4nVZjkPxk";
const resultNum = "7";
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

        const listGridTile = this.state.youtubeList.items.map(function(item, index) {
            return (
                <GridTile
                    cols={index === 0 ? 2 : 1}
                    rows={index === 0 ? 2 : 1}            
                    key={item.snippet.title}
                    title={item.snippet.title}
                    subtitle={<span>{item.snippet.description}</span>}
                    >
                    <img src={item.snippet.thumbnails.high.url} />
                </GridTile>            
            );
          });
          
        return (
            <div>
                <GridList 
                    cellHeight={180}
                    cols={2}>
                    {listGridTile}
                </GridList>
            </div>
        );
    }
}

export default YoutubeList;