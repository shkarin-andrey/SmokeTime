import React from 'react'
import { useDispatch } from 'react-redux';
import { alertInfoMessage, alertInfoShow, alertInfoColor } from './../store/actions/alertInfo';

const useAlert = () => {
  const dispatch = useDispatch()

  const showAlert = (message: string, color: 'success' | 'danger') => {
    dispatch(alertInfoMessage(message))
    dispatch(alertInfoColor(color))
    dispatch(alertInfoShow())
  }

  return {
    showAlert
  }
}

export default useAlert