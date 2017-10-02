import React, { Component } from 'react';
import {GridTile} from 'material-ui/GridList';

class Youtube extends Component {

    constructor(props){
        super(props);
        console.log(this.props.data);
    }

    render() {
        return (
            <GridTile
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