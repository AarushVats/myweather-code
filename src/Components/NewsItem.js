import React from 'react'
const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, time, source } = props;
    return (
        <div className='my-3'>
            <div className="card" style={{ width: "18rem" }}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
                    {source}
                </span>
                <img src={imageUrl ? imageUrl : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-banner-design-template-43d6dcbf37ca0a7d1450cb20f76b96fb_screen.jpg?ts=1624954813"} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} Published at {new Date(time).toGMTString()}</small></p>
                    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-dark">Read More...</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem