import React from "react";
import { Alert } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { alertInfoHide } from "../../store/actions/alertInfo";

const AlertInfo = () => {
  const dispatch = useDispatch();
  const { color, message, isOpen } = useSelector(
    (state: any) => state.alertInfo
  );

  return (
    <Alert
      color={color}
      toggle={function noRefCheck() {
        dispatch(alertInfoHide());
      }}
      isOpen={isOpen}
      className="position-fixed bottom-0 end-0"
    >
      {message}
    </Alert>
  );
};

export default AlertInfo;
