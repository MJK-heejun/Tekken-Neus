import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

//const url = "https://news.google.com/news?q=tekken&output=rss"; //depreacted
//google feed api alternative
const url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Fnews%3Fq%3Dtekken%26output%3Drss";

class GoogleNewsList extends Component {


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
                if(!response.ok){
                    console.log(response);
                    throw Error("Network request failed for Google News");                    
                }                    
                return response;
            })
            .then(d => d.json())
            .then(d =>{
                this.setState({ googleNewsList: d });
                console.log(d);
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }



    render() {
        if(this.state.requestFailed) return <p>Network Failed!</p>
        if(!this.state.googleNewsList) return <p>Loading...</p>

        const listGridTile = this.state.googleNewsList.items.map(function(item, index) {
            return (
                <GridTile
                    className="grid-tile"
                    cols={2}
                    rows={1}            
                    key={item.title}
                    title={item.title}
                    subtitle={<span>{item.pubDate}</span>}
                    titlePosition="top"
                    >
                    <span>some description</span>
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

export default GoogleNewsList;