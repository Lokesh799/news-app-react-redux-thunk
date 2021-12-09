import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
  return (
    <>
      <h1 class="p-3 mb-2 bg-danger text-white"> News App </h1>
      <nav className="navbar navbar-dark bg-dark justify-content-center">
        <div className="d-flex flex-row">
          <form className="form-inline">
            <div className="p-2">
              <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
            </div>
            <div className="p-2">
              <button className="btn btn-outline-success my-2 my-sm-0 p-2" type="submit">Search</button>
            </div>
          </form>
        </div>
      </nav>
      <div>
        <img src="../src/img.webp" className="img-fluid" alt="Responsive image"/>
      </div>
    </>
  )
}