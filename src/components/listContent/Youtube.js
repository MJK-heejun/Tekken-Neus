import React, { Component } from 'react';
import {GridTile} from 'material-ui/GridList';

class Youtube extends Component {

    constructor(props){
        super(props);
        console.log(this.props.data);
        console.log("index: "+this.props.index);
        console.log(this.props.index == 0);
    }

    render() {
        return (
            <GridTile
                    cols={this.props.index === 0 ? 2 : 1}
                    rows={this.props.index === 0 ? 2 : 1}            
                    key={this.props.data.snippet.title}
                    title={this.props.data.snippet.title}
                    subtitle={<span>{this.props.data.snippet.description}</span>}
                    >
                    <img src={this.props.data.snippet.thumbnails.high.url} />
            </GridTile>
        );
    }
}

export default Youtube;