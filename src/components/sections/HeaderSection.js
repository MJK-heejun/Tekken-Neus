import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class HeaderSection extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title="Tekken Neus"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />    
            </div>
        );
    }
}

export default HeaderSection;