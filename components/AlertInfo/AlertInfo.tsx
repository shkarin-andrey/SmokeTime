import React from "react";
import { Alert } from "reactstrap";
import { alertInfoHide } from "../../store/reducers/alertInfo";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const AlertInfo = () => {
  const dispatch = useAppDispatch();
  const { color, message, isOpen } = useAppSelector((state) => state.alertInfo);

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
