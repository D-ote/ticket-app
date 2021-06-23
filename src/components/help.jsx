import React, { Component } from 'react';
import PageHeader from './pageHeader';
import Topnav from './topNav';
import "./help.css"

class Help extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="helpContainer">
                <Topnav />
                <div className="helpWrapper">
                    <PageHeader name="Help Center" />
                </div>
            </div>
        );
    }
}
 
export default Help;