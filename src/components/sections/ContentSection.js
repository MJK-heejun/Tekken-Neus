import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import YoutubeList from '../tabContent/YoutubeList';
import GoogleNewsList from '../tabContent/GoogleNewsList';

import AvSubscriptions from 'material-ui/svg-icons/av/subscriptions';
import AvWeb from 'material-ui/svg-icons/av/web';
import '../../styles/ContentSection.css';

//to do. make it swipeable
// From https://github.com/oliviertassinari/react-swipeable-views
//import SwipeableViews from 'react-swipeable-views';
//see http://www.material-ui.com/#/components/tabs

class ContentSection extends Component {

    render() {

        return (
            <Tabs id="ContentSection">                 
                <Tab 
                    label={
                        <div className="tab-label">
                            <AvSubscriptions/>
                            <span>Youtube</span>
                        </div>}>
                <div>         
                    <YoutubeList></YoutubeList>
                </div>
                </Tab>
                <Tab label={
                        <div className="tab-label">
                            <AvWeb/>
                            <span>Google News</span>
                        </div>} >
                <div>
                    <GoogleNewsList></GoogleNewsList>
                </div>
                </Tab>                   
            </Tabs>                             
        );
    }
}

export default ContentSection;