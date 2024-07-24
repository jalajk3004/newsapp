import React, { Component } from 'react'

export class NewsItem extends Component {
    

    render() {

    let {title, discription, imageurl, newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageurl?"https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1142304853-a.jpg?resize=1200,675":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{discription}...</p>
                <a href={newsUrl} target="/_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
