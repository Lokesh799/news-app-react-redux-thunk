import React, { useEffect } from "react";
import { Card, Button } from "antd";
import { FaBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { newsDataRequest } from "../thunks/getNewsData";
import { addBookMark } from "../actions";

export default function NewsData(props) {
	const newsData = useSelector((state) => state.setNewsData.newsRecords)
	const dispatch = useDispatch();

	const handleClick = (index, puslishedAt) => {
		props.history.push(`/desc/${index}/${puslishedAt}`);
	}

	const hanldeBookMark = (data) => {
		dispatch(addBookMark(data))
	}

	useEffect(() => {
		dispatch(newsDataRequest())
	}, [dispatch])

	return (
		<>
			{newsData.map((data, index) => (
				// <ul>{item.articles.map((data, index) => (
				<div
					key={index}
					className="card  justify-content-md-center"
					style={{
						width: "50%",
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					{<img alt="img" className="img-fluid" src={data.urlToImage} />}
					{/* <Meta title={data.title} description={data.content} /> 
						<a href={data.url} target="_blank" rel="noopener noreferrer">
						 </a> */}
					<Button type="primary" onClick={() => handleClick(index, data.publishedAt)}>{data.title} <h6>Read More...</h6></Button>
					<Button onClick={() => hanldeBookMark(data.title)} ><FaBookmark /></Button>
				</div>
			))}
		</>
	)
}