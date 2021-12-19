import React, { Component } from 'react'

export default class Heading extends Component {
    render() {
        return (
            <>
         
            <center><h1 style={{marginTop:"70px",color:'magenta',fontSize:"35px",textDecoration:"underline"}}>{this.props.category} news</h1></center>
            </>
        )
    }
}
