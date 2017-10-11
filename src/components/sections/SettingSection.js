import React, { Component } from 'react';
import registerServiceWorker from '../../registerServiceWorker';
import RaisedButton from 'material-ui/RaisedButton';

class SettingSection extends Component {

    constructor(){
        super();
        this.state = {
            swRegistration: null,
            isSubscribed: false,
            applicationServerPublicKey: "BFIw1bHtKl4YWXB1-VnMn6XPrXq19LViZ_4LNuHmS-5UwxCkP9GfQKs3QHctKegzAXBpOOSpu3EvQuVztS56y1o",
            buttonText: "Disable Push Messaging",
            isButtonDisabled: false
        };
        this.buttonHandler = this.buttonHandler.bind(this);
    }
    
    buttonHandler(){        
        this.setState({ isButtonDisabled: true });
        if (this.state.isSubscribed) {
            // TODO: Unsubscribe user
            console.log("do unsubscribe");
        } else {
            this.subscribeUser();
        }        
    }

    componentDidMount(){
        registerServiceWorker.on("swRegistered", ()=>{
            this.setState({
                swRegistration: registerServiceWorker.swRegistration
            });
            this.initializeUI();
        });
    }

    initializeUI(){
        this.state.swRegistration.pushManager.getSubscription().then((subscription) => {
            this.setState({ isSubscribed: !(subscription === null) });              
            this.updateSubscriptionOnServer(subscription);
            if (this.state.isSubscribed) {
                console.log('User IS subscribed.');
            } else {
                console.log('User is NOT subscribed.');
            }      
            this.updateBtn();
        });
    }

    subscribeUser(){
        const applicationServerKey = this.urlB64ToUint8Array(this.state.applicationServerPublicKey);
        /*
        Calling subscribe() returns a promise which will resolve after the following steps:        
        1) The user has granted permission to display notifications.
        2) The browser has sent a network request to a push service to get the details to generate a PushSubscription.
        => The subscribe() promise will resolve with a PushSubscription if these steps were successful.
        */
        this.state.swRegistration.pushManager.subscribe({
            userVisibleOnly: true, //this value is required and must be true
            applicationServerKey: applicationServerKey
        })
        .then((subscription) => {
            console.log('User is subscribed.');      
            this.updateSubscriptionOnServer(subscription);      
            this.setState({ isSubscribed: true });
            this.updateBtn();
        })
        .catch((err) => {
            //If the user doesn't grant permission or if there is any problem subscribing the user, the promise will reject with an error.
            console.log('Failed to subscribe the user: ', err);
            this.updateBtn();
        });
    }

    unsubscribeUser(){

    }

    updateBtn() {
        if (Notification.permission === 'denied') {
            this.setState({ 
                buttonText: 'Push Messaging Blocked.',
                isButtonDisabled: true
            });
            this.updateSubscriptionOnServer(null);
            return;
        }

        if (this.state.isSubscribed) 
            this.setState({ buttonText: 'Disable Push Messaging' });
        else
            this.setState({ buttonText: 'Enable Push Messaging' });
        this.setState({ isButtonDisabled: false });
    }


    //send our subscription to a backend
    updateSubscriptionOnServer(subscription){
        //just print for now
        if (subscription) {
            console.log(JSON.stringify(subscription));
        }
    }

    urlB64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');      
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);      
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }


    render() {
        if(!this.state.swRegistration) return (<p>Service Worker Not registered</p>);

        return (
            <div>
                <br/>
                <RaisedButton label={this.state.buttonText} onClick={this.buttonHandler} disabled={this.state.isButtonDisabled}/>
            </div>
        );
    }
}

export default SettingSection;