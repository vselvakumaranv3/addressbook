

import React from "react";
// Importing Module
export default class Details extends React.Component {

    
      render() {

        return (
          <div style={{ margin: 200 }}>
    <p> <h1>Details</h1> </p>           
    <p> First Name: {this.props.match.params.pathParam1} </p>
    <p> Last Name: {this.props.match.params.pathParam2} </p>
    <p> Phone: {this.props.match.params.pathParam3} </p>
      
     
          </div>
        );
      }
}
