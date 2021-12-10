import React from "react";

export default function BookMarK(props) {
  const bookMarkData = JSON.parse(localStorage.getItem('BookMarkItem'))
  console.log("jdshks", bookMarkData)

  return (
    <>
      <h1>Helo bookmark here</h1>
      {bookMarkData.map((data, index) => (
        <li key={index} >{data}</li>
      ))}
    </>
  )
}