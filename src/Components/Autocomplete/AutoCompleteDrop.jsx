import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectDropDestination, selectPickedLocation } from "../../action";

import "./AutoCompleteDrop.css";

export const AutoCompleteDrop = (props) => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const handlerDropClick = (lo) => {
    props.getDropLocation(lo);
    dispatch(selectDropDestination([lo]));
  };
  return (
    <div className="autoComplete-Drop">
      {state.formSearchTransfer.dropLocation.map((lo, i) => (
        <li className="mt-1" key={i} onClick={() => handlerDropClick(lo)}>
          {lo.location}
        </li>
      ))}
    </div>
  );
};
