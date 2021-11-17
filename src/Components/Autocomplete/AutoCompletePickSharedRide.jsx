import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectedSharedRidePickLocation } from "../../action";

import "./AutoCompletePickSharedRide.css";

export const AutoCompletePickSharedRide = (props) => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const handlerClickDropSharedRide = (e, lo) => {
    e.stopPropagation();
    const { location } = lo;
    props.handlerPickLocationAutoComplete("pickupLocation", location);
    dispatch(selectedSharedRidePickLocation([lo]));
  };

  return (
    <div className="autoComplete-sharedRide ">
      {state.formSearchTransfer.pickUpSharedRideLocation
        .slice(0, 5)
        .map((lo, i) => (
          <li
            className="mt-1"
            key={i}
            onClick={(e) => handlerClickDropSharedRide(e, lo)}
          >
            {lo.location}
          </li>
        ))}
    </div>
  );
};
