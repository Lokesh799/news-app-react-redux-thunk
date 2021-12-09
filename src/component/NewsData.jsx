import React, { useEffect } from "react";
import { Card ,Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { newsDataRequest } from "../thunks/getNewsData";
import Meta from "antd/lib/card/Meta";

export default function NewsData() {
  const newsData = useSelector((state) => state.setNewsData.newsRecords)
  const dispatch = useDispatch();
  console.log("newsData", newsData)

  useEffect(() => {
    dispatch(newsDataRequest())
  }, [dispatch])

  return (
    <>
    {newsData.map((item)=>(

<ul>{item.articles.map((data,index)=>( 
    <Card
    key={index}
    hoverable
    style={{width: "70%" }}
    cover={<img alt="img" className="img-fluid" src={data.urlToImage} />}>
   <Meta title={data.title}description={data.content}/>
		<a href={data.url} target="_blank" rel="noopener noreferrer">
    <Button  type="primary">Reed More..</Button> 
  </a>
		</Card>

      
))}</ul>
    ))}
    </>
  )
}