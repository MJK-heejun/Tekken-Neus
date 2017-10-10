import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import '../../styles/GoogleNewsList.css';

//const url = "https://news.google.com/news?q=tekken7&output=rss&scoring=n"; //depreacted
//google feed api alternative
const url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Fnews%3Fq%3Dtekken7%2Ctekken%26output%3Drss%26scoring%3Dn";

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

        let openNews = (link) =>{
            let parsedStr = link.split(";").pop();
            let url = parsedStr.substring(4, parsedStr.length);            
            window.open(`${url}`,'_blank');
        };

        const listNews = this.state.googleNewsList.items.map(function(item) {
            return (
                <div key={item.title}>
                    <ListItem                
                        leftIcon={<ActionInfo />}                    
                        primaryText={item.title}
                        secondaryText={item.pubDate}
                        onClick={(e) => openNews(item.link)}
                    />
                    <Divider />
                </div>
            );
          });

        return (
            <div id="GoogleNewsList">
                <List> 
                    {listNews}
                </List>
            </div>
        );
    }
}

export default GoogleNewsList;