import React from "react";

export default function List(props) {
  return (
    <div className="list" onDrop={props.drop} onDragOver={props.dragOver}>
      {props.children}
    </div>
  );
}
