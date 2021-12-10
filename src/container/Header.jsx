import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router";
import { Card, Button, } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchData } from "../actions";
import { searchDataRequest } from "../thunks/getNewsData";


export default function Header(props) {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.searchNewsData.search)
  const searchingRecords = useSelector((state) => state.searchNewsData.searchingRecords)

  const history = useHistory();

  const handleClick = (index, puslishedAt) => {
    props.history.push(`/desc/${index}/${puslishedAt}`);
  }

  const handleChange = (e) => {
    dispatch(setSearchData(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchDataRequest(search))
  }

  return (
    <>
      <h1 class="p-3 mb-2 bg-danger text-white"> News App </h1>
      <nav className="navbar navbar-dark bg-dark justify-content-center">
        <div className="d-flex flex-row">
          <form className="form-inline" onSubmit={handleSubmit}>
            <div className="p-2">
              <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
            </div>
            <div className="p-2">
              <button className="btn btn-outline-success my-2 my-sm-0 p-2" type="submit"  >Search</button>
            </div>
          </form>
        </div>
      </nav>
      <Link to="/bookmark">BookMark</Link>
      <div>
      </div>
      {searchingRecords.map((data, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: "70%" }}
          cover={<img alt="img" className="img-fluid" src={data.urlToImage} />}>
          <Button type="primary" onClick={() => handleClick(index, data.publishedAt)}>{data.title}<h6></h6></Button>
        </Card>
      ))}
    </>
  )
}