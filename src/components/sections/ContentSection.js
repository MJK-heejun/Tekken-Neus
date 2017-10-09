import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import YoutubeList from '../tabContent/YoutubeList';
import GoogleNewsList from '../tabContent/GoogleNewsList';

import AvSubscriptions from 'material-ui/svg-icons/av/subscriptions';
import AvWeb from 'material-ui/svg-icons/av/web';
import '../../styles/ContentSection.css';



class ContentSection extends Component {


    constructor(props) {
        super(props);
        this.state = {
          slideIndex: 0,
        };
      }

    handleChange = (value) => {
        this.setState({
          slideIndex: value,
        });
      };

    render() {

        return (
            <div>
                <Tabs id="ContentSection"
                    onChange={this.handleChange}
                    value={this.state.slideIndex}>                                 
                        <Tab 
                            label={
                                <div className="tab-label">
                                    <AvSubscriptions/>
                                    <span>Youtube</span>
                                </div>}
                            value={0}>

                        </Tab>
                        <Tab label={
                                <div className="tab-label">
                                    <AvWeb/>
                                    <span>Google News</span>
                                </div>} 
                            value={1}>
                        </Tab>                                  
                </Tabs>                
                <SwipeableViews
                index={this.state.slideIndex}
                onChangeIndex={this.handleChange}>
                        <div className="ytl">         
                            <YoutubeList></YoutubeList>
                        </div>
                        <div>
                            <GoogleNewsList></GoogleNewsList>
                        </div>
                </SwipeableViews>  
            </div>
        );
    }
}

export default ContentSection;