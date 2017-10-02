import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import YoutubeList from '../tabContent/YoutubeList';
import IGNList from '../tabContent/IGNList';
import GoogleNewsList from '../tabContent/GoogleNewsList';

class ContentSection extends Component {
    render() {
        return (
            <Tabs>
                <Tab label="Youtube" >
                <div>
                    <YoutubeList></YoutubeList>
                </div>
                </Tab>
                <Tab label="IGN" >
                <div>
                    <IGNList></IGNList>
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