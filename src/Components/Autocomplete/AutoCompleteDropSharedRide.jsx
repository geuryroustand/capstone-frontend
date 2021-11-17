import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectedSharedRideDropLocation } from "../../action";

import "./AutoCompleteDropSharedRide.css";

export const AutoCompleteDropSharedRide = (props) => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const handlerPickClick = (e, lo) => {
    e.stopPropagation();
    const { location } = lo;
    props.handlerDropLocationAutoComplete("dropLocation", location);
    dispatch(selectedSharedRideDropLocation([lo]));
  };

  return (
    <div className="AutoCompleteDropSharedRide">
      {state.formSearchTransfer.dropSharedRideLocation
        .slice(0, 5)
        .map((lo, i) => (
          <li className="mt-1" key={i} onClick={(e) => handlerPickClick(e, lo)}>
            {lo.location}
          </li>
        ))}
    </div>
  );
};
