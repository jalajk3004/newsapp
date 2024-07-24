import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    static defaultProps={
        category: "general"
    }
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false

        }
     
        
    }

    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8f0d847e6a274feaa21a21df22dbf8f1"
        let data = await fetch(url);
        let parseData=await data.json()
        console.log(parseData);
        this.setState({articles:parseData.articles})

    }

    handlePrevClick= async()=>{
        let url=`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8f0d847e6a274feaa21a21df22dbf8f1-${this.state.page-1}&pagesize=20`
        let data = await fetch(url);
        let parseData=await data.json()
        console.log(parseData);
       

        this.setState({
            page:this.state.page-1,
        })
    }
    handleNextClick= async()=>{
        let url=`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8f0d847e6a274feaa21a21df22dbf8f1-${this.state.page+1}&pagesize=20`
        let data = await fetch(url);
        let parseData=await data.json()
        console.log(parseData);
       

        this.setState({
            page:this.state.page+1,
        })
        
    }

    render() {
    return (
        <div className="container my-3">
            <h1 className="text-center">NewsNow - Top Headlines</h1>
           
            <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                     <NewsItem  title={element.title?element.title.slice(0, 45):""} discription={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
      
    )
  }
}

export default News
