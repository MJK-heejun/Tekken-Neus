import React, { Component } from 'react';
import registerServiceWorker from '../../registerServiceWorker';

class SettingSection extends Component {

    constructor(){
        super();
        this.state = {
            swRegistration: null
        };
    }

    componentWillMount(){
        registerServiceWorker.on("change", ()=>{
            this.setState({
                swRegistration: registerServiceWorker.swRegistration
            });
        });
    }

    render() {
        return (
            <div>
                this is setting section
            </div>
        );
    }
}

export default SettingSection;