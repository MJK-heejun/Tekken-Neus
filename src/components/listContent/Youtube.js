import React, { Component } from 'react';

class Youtube extends Component {

    constructor(props){
        super(props);
        console.log(this.props.data);
    }

    render() {
        return (
            <div>
                {this.props.data.snippet.title}<br/>
                {this.props.data.snippet.description}<br/>
                <img src={this.props.data.snippet.thumbnails.default.url} />
            </div>
        );
    }
}

export default Youtube;