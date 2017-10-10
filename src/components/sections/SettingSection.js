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
        registerServiceWorker.on("swRegistered", ()=>{
            this.setState({
                swRegistration: registerServiceWorker.swRegistration
            });
        });
    }

    render() {
        if(!this.state.swRegistration) return (<p>Service Worker Not registered</p>);
        if(this.state.swRegistration){
            console.log("swRegistration obj");
            console.log(this.state.swRegistration);
        }
        return (
            <div>
                this is setting section
            </div>
        );
    }
}

export default SettingSection;