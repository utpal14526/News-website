import React, { Component } from 'react'
import './Newscomponent.css';

export default class Newscomponent extends Component {
    
    
    render() {
        let {title,description,imageUrl,newsurl,author,time}= this.props;
        return (
            <div classNmae="news-componenent">
                <div className="card" style={{width:"18rem"}}>
                <img src={imageUrl} className="card-img-top" alt="..."/>
                 <center> <p>AUTHOR : {author} </p> </center>
                 <center><p>{new Date(time).toGMTString()}</p></center>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                       <p className="card-text">{description}...</p>
                       <a href={newsurl} className="btn btn-primary">Know Here!!</a>
                    </div>
               </div>
            </div>
        )
    }
}
