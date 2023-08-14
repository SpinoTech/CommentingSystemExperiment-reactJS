import React, { useState } from "react";
import "./MainBox.css";
import CommentCard from "./CommentCard.jsx";
import WriteInputs from "./WriteInputs.jsx";

export default function Main() {

  const [listOfComments, setlistOfComments] = useState([]);


  return (
    <div className="box">
      <h1>comment here</h1>
      <p>you can comment whatever you want </p>
      <WriteInputs listOfComments={listOfComments} setlistOfComments={setlistOfComments} location="mainBody" placeholder={{"name":"Write Your Name" , "comment":"Write Comment Here" ,"buttonVal":"Post Comment"}}/>
      {listOfComments.map((item, index) => {
        return (
          item.name &&
          item.massege && (
            <CommentCard name={item.name} massege={item.massege} key={index} location="mainBody"replyTO={null}/>
          )
        );
      })}
    </div>
  );
}
