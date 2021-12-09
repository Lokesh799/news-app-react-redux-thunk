import React from "react";
import { useSelector } from "react-redux";

export default function Description(props) {
  const desc = useSelector((state) => state.setNewsData.newsRecords)
  console.log(desc)
  const id = props.match.params.id
  // const publish = props.match.params.publishedAt
  // const img = props.match.params.urlToImage

  return (
    <>
      <h1>Helo description here</h1>
      {desc[id].description}
      {<img alt="img" className="img-fluid" src={desc[id].urlToImage}/>}
    </>
  )
}