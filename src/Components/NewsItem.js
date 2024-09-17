import React  from 'react'

 const NewsItem = (props)=> {
  
    let {tittle, description, imageUrl, newUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
            <span className=" badge rounded-pill bg-danger" >{source} </span>
            </div>
                <img src={!imageUrl?"https://www.reuters.com/resizer/v2/4VKFRURQSJLTJKGA24K7ANBEN4.jpg?auth=f8c008c4f6caf671459fcb3d8c7d549e917d3e45f7d7e6cf2684ae32b380b84c&height=1005&width=1920&quality=80&smart=true":imageUrl}  className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{tittle}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">by {!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        
      </div>
    )
  
}

export default NewsItem
 