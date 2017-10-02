import React, {Component} from 'react';
import HeaderSection from '../sections/HeaderSection';
import ContentSection from '../sections/ContentSection';


class MainPage extends Component {
    render() {
        return (
            <div>
                <HeaderSection></HeaderSection>
                <ContentSection></ContentSection>                 
            </div>
        );
    }
}

export default MainPage;