import React from "react";

export default function Item(props) {
  return (
    <div className="item" draggable onDragStart={props.onDragStart}>
      {props.children}
    </div>
  );
}
