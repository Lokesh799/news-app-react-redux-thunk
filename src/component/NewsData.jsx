import React, { useEffect } from "react";
import { Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { newsDataRequest } from "../thunks/getNewsData";

export default function NewsData(props) {
	const newsData = useSelector((state) => state.setNewsData.newsRecords)
	const dispatch = useDispatch();

	const handleClick = (index,puslishedAt) => {
		// console.log(index, puslishedAt, urlToImage)
		props.history.push(`/desc/${index}/${puslishedAt}`);
	}

	useEffect(() => {
		dispatch(newsDataRequest())
	}, [dispatch])

	return (
		<>
			{newsData.map((data, index) => (
				// <ul>{item.articles.map((data, index) => (
				<Card
					key={index}
					hoverable
					style={{ width: "70%" }}
					cover={<img alt="img" className="img-fluid" src={data.urlToImage} />}>
					{/* <Meta title={data.title} description={data.content} /> 
						<a href={data.url} target="_blank" rel="noopener noreferrer">
						 </a> */}
					<Button type="primary" onClick={() => handleClick(index, data.publishedAt)}>{data.title} <h6>Read More...</h6></Button>
				</Card>
			))}
		</>
	)
}