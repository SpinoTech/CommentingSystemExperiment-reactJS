import React, { useState } from "react";
import WriteInputs from "./WriteInputs";

const CommentCard = (props) => {
  const [writer, setWriter] = useState(false);
  const [listOfComments, setlistOfComments] = useState([]);

  const replyclick = () => {
    setWriter(!writer);
  };

  return (
    <>
      <div
        className={
          props.location == "cardBody" ? "smallCommentCard" : "commentCard"
        }
      >
        <div className="commentarea">
          <h1>{props.name}</h1>
          {props.replyTO && (
            <>
              to
              <h1>{props.replyTO}</h1>
            </>
          )}
          <p>{props.massege}</p>
        </div>
        <button onClick={replyclick}>reply</button>
      </div>
      {writer && (
        <WriteInputs
          listOfComments={listOfComments}
          setlistOfComments={setlistOfComments}
          location="cardBody"
          placeholder={{
            name: "Replier Name",
            comment: `Replay To ${props.name}`,
            buttonVal: "Put Reply",
          }}
        />
      )}

      {writer &&
        listOfComments.map((item, index) => {
          return (
            item.name &&
            item.massege && (
              <CommentCard
                name={item.name}
                massege={item.massege}
                key={index}
                location="cardBody"
                replyTO={props.name}
              />
            )
          );
        })}
    </>
  );
};

export default CommentCard;
