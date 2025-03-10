import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props)=> {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    
    
    const updateNews = async()=>{
        props.setProgress(10);
        let url =  `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(20);
        let parseData = await data.json();
        props.setProgress(50);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        console.log(parseData);
        
        props.setProgress(100);
    }
    
    const capitalized = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    useEffect(()=>{
        document.title =`${capitalized(props.category)} - NewsMonkey`
        updateNews();
        // eslint-disable-next-line  
        
    },[])
    
     
            
    const fetchMoreData = async() => {
    const url =  `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    setPage(page + 1) 
        
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
        
         
    };

   
    return (
        < >
            <h1 className='text-center' style={{margin:'30px 0px', marginTop:'90px'}}>NewsMonkey - Top {capitalized(props.category)} Headlines </h1>

            {loading && <Loading/>}
            <InfiniteScroll
                dataLength={ articles.length}
                next={ fetchMoreData}
                hasMore={ articles.length !==  totalResults}
                loader={<Loading/>}>

                <div className="container ">
                    <div className="row">
                        {articles.map((element)=>{ 
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem  tittle= {element.title } description={element.description } imageUrl={element.urlToImage}
                                    newUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                                />
                        </div>
                        })}  
                    </div>  
                </div>
            </InfiniteScroll>
        </>
    )
  
}

    News.defaultProps = {
        category:"general",
        pageSize: 8,
        
    }

    News.propTypes = {
        category:PropTypes.string, 
        pageSize: PropTypes.number,
        
    }

export default News;