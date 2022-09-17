import React,{useState, useEffect} from 'react'
import NewsItem from './NewsItem'

const News = (props) => {
    const [articles, setarticles] = useState([])
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${props.NewsKey}&page=${page}&pagesize=6`
        let data = await fetch(url)
        let parsedData = await data.json()
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
   
    }
    useEffect(() => {
        updateNews();
        //eslint-disable
    }, [])
    const styleobj ={
        color:"white",
        fontSize:"50px"
    }
  return (
    <div><div className="my-2 container d-flex justify-content-center" style={styleobj}>Recent News</div>
        <div id='news' className="container d-flex justify-content-center">
                
                    <div className="row">
                        {articles.map((element, index) => {
                            return <div className="col-md-4 d-flex " key={index}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                            </div>
                        })}

                    </div>
                </div>
    </div>
  )
}

export default News