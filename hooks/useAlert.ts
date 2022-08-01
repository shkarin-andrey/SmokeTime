import React from 'react'
import { alertInfoMessage, alertInfoColor, alertInfoShow } from '../store/reducers/alertInfo';
import { useAppDispatch } from './useAppDispatch';

const useAlert = () => {
  const dispatch = useAppDispatch()

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