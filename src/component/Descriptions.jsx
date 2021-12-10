import React from "react";
import { useSelector } from "react-redux";

export default function Description(props) {
  const desc = useSelector((state) => state.setNewsData.newsRecords)
  console.log(desc)
  const id = props.match.params.id

  return (
    <>

      <div class="card  justify-content-center" style={{ width: "40rem" }}  >
        {<img alt="img" className="img-fluid" src={desc[id].urlToImage} />}
        <div class="card-body">
          <h5 class="card-title"> {desc[id].description}</h5>
        </div>
      </div>

    </>
  )
}