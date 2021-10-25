import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectPickedLocation } from "../../action";

import "./AutoComplete.css";

export const AutoComplete = (props) => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const handlerPickClick = (lo) => {
    // console.log(props.pickLocation);
    props.pickLocation(lo);
    dispatch(selectPickedLocation([lo]));
  };

  return (
    <div className="autoComplete">
      {state.formSearchTransfer.pickUpLocation.map((lo, i) => (
        <li className="mt-1" key={i} onClick={() => handlerPickClick(lo)}>
          {lo.location}
        </li>
      ))}
    </div>
  );
};
