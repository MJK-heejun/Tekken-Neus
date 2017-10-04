import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import YoutubeList from '../tabContent/YoutubeList';
import GoogleNewsList from '../tabContent/GoogleNewsList';

//to do. make it swipeable
// From https://github.com/oliviertassinari/react-swipeable-views
//import SwipeableViews from 'react-swipeable-views';
//see http://www.material-ui.com/#/components/tabs

class ContentSection extends Component {
    render() {
        return (
            <Tabs>                 
                <Tab label="Youtube" >
                <div>
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    <YoutubeList></YoutubeList>
                </div>
                </Tab>
                <Tab label="Google News" >
                <div>
                    <GoogleNewsList></GoogleNewsList>
                </div>
                </Tab>                   
            </Tabs>                             
        );
    }
}

export default ContentSection;