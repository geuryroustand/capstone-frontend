import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectedPickLocation } from "../../action";

import "./AutoCompletePick.css";

export const AutoCompletePick = (props) => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const handlerPickClick = (lo) => {
    const { location } = lo;
    props.handlerPickLocationAutoComplete("pickupLocation", location);
    dispatch(selectedPickLocation([lo]));
  };

  return (
    <div className="autoComplete">
      {state.formSearchTransfer.pickUpLocation.slice(0, 5).map((lo, i) => (
        <li className="mt-1" key={i} onClick={() => handlerPickClick(lo)}>
          {lo.location}
        </li>
      ))}
    </div>
  );
};
