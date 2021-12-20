import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { format } from "date-fns";
import { fetchSharedRide } from "../../action/index.js";
import { WiDirectionRight } from "react-icons/wi";
import { FaUserFriends } from "react-icons/fa";
import "./FindSharedRide.css";
import { sharedRideDetails } from "../../action/sharedRideDetails.js";

const FindSharedRide = () => {
  let query = new URLSearchParams(useLocation().search);

  let pickLocation = query.get("pickLocation");
  let dropLocation = query.get("dropLocation");
  let serviceDate = query.get("serviceDate");
  // let passengers = query.get("passengers");

  const dispatch = useDispatch();

  const { sharedRide } = useSelector((state) => state?.searchSharedRide);

  console.log(sharedRide);
  const history = useHistory();

  const clickHandler = (post) => {
    dispatch(sharedRideDetails(post));
    history.push("/postSharedRideDetails");
  };

  useEffect(() => {
    if (pickLocation && dropLocation) {
      dispatch(
        fetchSharedRide(
          pickLocation,
          dropLocation,
          format(new Date(serviceDate), "EEEE d, MMM  yyyy")
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {sharedRide?.map((sharedTransfer, i) => (
        <Row
          key={i}
          onClick={(e) => clickHandler(sharedTransfer)}
          className="shared-ride-card"
        >
          <Col>
            <div className="d-flex sharedLocationName">
              <p>{sharedTransfer.pickLocation}</p>
              <WiDirectionRight className="direction-icon" />
              <p>{sharedTransfer.dropLocation}</p>
            </div>

            <div className="d-flex">
              <div>
                <p>
                  Date:{" "}
                  <span className="bold-info">
                    {format(
                      new Date(sharedTransfer.serviceDate),
                      "PPPPpp"
                      // "EEEE d, MMM  yyyy"
                      // "eee d, MMM  yyyy  h:mm aa"
                    )}
                  </span>
                </p>

                {sharedTransfer.airlineName && (
                  <p>
                    Airline Name:{" "}
                    <span className="bold-info">
                      {sharedTransfer.airlineName}{" "}
                    </span>{" "}
                  </p>
                )}
                <p>
                  {" "}
                  Flight Number:{" "}
                  <span className="bold-info">
                    {" "}
                    {sharedTransfer.flightNumber}{" "}
                  </span>
                </p>
                <div className="profile">
                  <img
                    className="userProfileImg"
                    src={sharedTransfer.user?.avatar}
                    alt=""
                  />
                  <p className="bold-info ml-3">
                    {sharedTransfer.user?.name} {sharedTransfer.user?.surname}
                  </p>
                </div>
              </div>

              <div className="sharedTransferPrice">
                <p> &euro; {sharedTransfer.totalPrice}</p>
                <p>
                  <FaUserFriends /> {sharedTransfer.passenger}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default FindSharedRide;
