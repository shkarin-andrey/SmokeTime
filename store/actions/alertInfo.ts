import { createAction } from "@reduxjs/toolkit";

export const alertInfoShow = createAction('ALERT_SHOW')
export const alertInfoHide = createAction('ALERT_HIDE')
export const alertInfoColor = createAction<'success' | 'danger'>('ALERT_COLOR')
export const alertInfoMessage = createAction<string>('ALERT_MESSAGE')
