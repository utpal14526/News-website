import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

import News from './News.js'


export default class Newsbar extends Component {
  
    constructor(){
      super();
      this.state={
        articles:[],
        name:"",
        pageSize:20,
        page:1,
        dec:false,
        
      }
    }

    handleChange=(e)=>{
       
        this.setState({
          name:e.target.value, 
        })
        console.log(e.target.value);
    }
    handleClick= async (e)=>{
      e.preventDefault();
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.state.name}&apiKey=f9e9b192f93f4fdfacfef25667c77ae5  &pageSize=${this.state.pageSize}   &page=${this.state.page}` ;
      let data=await fetch(url); 
       let parsedData=await data.json();
      this.setState({      
        articles:parsedData.articles,
        dec:true,
        
      })
    }
        
    render() {
        return (
          <>
            <div >
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
               
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
               </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">

         <li className="nav-item">
          <NavLink activeStyle={{ backgroundColor:"skyblue" ,border:"3px solid skyblue",borderRadius:"10px",fontSize:17,fontWeight:"600", color:"blue"}}
          className="nav-link active" to="/about">About App</NavLink>
         </li>


        <li className="nav-item">
          <NavLink activeStyle={{ backgroundColor:"skyblue" ,border:"3px solid skyblue",borderRadius:"10px",fontSize:17,fontWeight:"600", color:"blue"}}
          className="nav-link active" to="/sports">Sports</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeStyle={{ backgroundColor:"skyblue",border:"3px solid skyblue",borderRadius:"10px",fontSize:17,fontWeight:"600", color:"blue"}}
           className="nav-link active" to="/entertainment">Entertainment</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeStyle={{ backgroundColor:"skyblue",border:"3px solid skyblue",borderRadius:"10px",fontSize:17,fontWeight:"600", color:"blue"}}className="nav-link active" to="/business">Business</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeStyle={{ backgroundColor:"skyblue",border:"3px solid skyblue",borderRadius:"10px",fontSize:17,fontWeight:"600", color:"blue"}}
           className="nav-link active" to="/health">Health</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeStyle={{backgroundColor:"skyblue",border:"3px solid skyblue",borderRadius:"10px",fontSize:17,fontWeight:"600", color:"blue"}}
           className="nav-link active" to="/politics">Politics</NavLink>
        </li>


        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" onChange={this.handleChange}    type="search" placeholder="Search Top News" aria-label="Search"/>
        <button onClick={this.handleClick} class="btn btn-outline-success" >Search</button>
      </form>

    </div>
  </div>
</nav>
            </div>


         {this.state.dec?<News name={this.state.name} />:" "}
          </>
        )
    }
}
