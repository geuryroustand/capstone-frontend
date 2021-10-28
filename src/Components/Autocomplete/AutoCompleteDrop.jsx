import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectedDropLocation } from "../../action";

import "./AutoCompleteDrop.css";

export const AutoCompleteDrop = (props) => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const handlerDropClick = (lo) => {
    props.handlerDropLocationAutoComplete(lo);
    dispatch(selectedDropLocation([lo]));
  };
  return (
    <div className="autoComplete-Drop">
      {state.formSearchTransfer.dropLocation.slice(0, 5).map((lo, i) => (
        <li className="mt-1" key={i} onClick={() => handlerDropClick(lo)}>
          {lo.location}
        </li>
      ))}
    </div>
  );
};
