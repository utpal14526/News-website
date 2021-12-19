import React, { Component } from 'react'
import Newscomponent from './Newscomponent'

import Spinner from './Loading.js'
import Heading from './Heading.js'


export default class News extends Component {
    
    
    
    constructor(props){
          super(props);
          this.state={
              articles: [],        
              loading : false,
              page:1,
              help:0,
              totalResults:70,
          }  
          console.log(this.props.name);
          document.title=`${this.props.name?this.state.name:this.props.category}-News`;
    }
    
   
   


    handleNextclick = async()=>{    

          let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f9e9b192f93f4fdfacfef25667c77ae5  &pageSize=${this.props.pageSize}   &page=${this.state.page+1}` ;
          this.setState({loading:true});
          let data=await fetch(url);  
          let parsedData=await data.json();

         this.setState({
               articles:parsedData.articles,
               loading:false,
               page:this.state.page+1,
         })  
            
    }
     
    

    handlePreviousclick = async()=>{

            let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f9e9b192f93f4fdfacfef25667c77ae5  &pageSize=${this.props.pageSize}   &page=${this.state.page-1}` ;
            this.setState({loading:true});
            let data=await fetch(url);  
            let parsedData=await data.json();
           
    
            this.setState({
                articles:parsedData.articles,
                loading:false,
                page:this.state.page-1,
            })  

    }

     
    async componentDidMount(){                                           
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.name?this.props.name:this.props.category}&apiKey=f9e9b192f93f4fdfacfef25667c77ae5  &pageSize=${this.props.pageSize}   &page=${this.state.page}` ;
      this.setState({loading:true});
      let data=await fetch(url);  
      let parsedData=await data.json();
    

      this.setState({
          articles:parsedData.articles,
          loading:false, 
     })          
          
    }



    render() {
        return (

            <>
            <div>
                    <Heading category={this.props.category}/>
                    <center>{this.state.loading &&<Spinner/>}</center>
               
                <div className="main-container">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div><Newscomponent  title={element.title ? element.title.slice(0,60) :"Title not found"}  description={element.description?element.description.slice(0,90):"Not found description"} imageUrl={element.urlToImage ? element.urlToImage : " "} newsurl={element.url ? element.url : ""} author={element.author ? element.author : "Author Not Found" } time={element.publishedAt ? element.publishedAt :" "}/></div>;
                    })}   
                </div>   

                <div className="d-flex justify-content-between ">
                    <button type="button" disabled={this.state.page<=1} class="btn btn-success" onClick={this.handlePreviousclick}> &larr;Previous</button>
                  
                    <button type="button" disabled={(this.state.page)>=Math.ceil(this.state.totalresults/this.props.pageSize)} class="btn btn-danger" onClick={this.handleNextclick}>Next &rarr;</button>
                </div>

            </div>
        </>
        )

    }
}
