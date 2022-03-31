
import { FC } from 'react';
import { Alert } from '../Alert';
import { createStore, Store } from 'redux';
import { Alert as AlertType } from '../alert.types';
import { AlertAction, DispatchType } from '../alert.types'

// Initial state
const alertState: AlertType[] = []

// Actions types
export const AlertTypes = {
    SET_ALERT: 'alert/set',
    SET_CLOSE: 'alert/close',
    SET_CLEAR: 'alert/clear',
    SET_DEFAULT_COMPONENT: 'alert/default'
}

const alertReducer = (state: AlertType[] = alertState, action: AlertAction) => {
    switch (action.type) {
    case AlertTypes.SET_ALERT:
        return [...state, { ...action.payload, show: true }]
    case AlertTypes.SET_CLOSE:
        return state.map(x => x.id === action.payload ? { ...x, show: false }: x)
    case AlertTypes.SET_CLEAR:
        return state.filter(x => x.show)
    default:
        return state
    }
}
const componentReducer = (state: FC<any> = Alert, action: AlertAction) => {
    switch (action.type) {
    case AlertTypes.SET_DEFAULT_COMPONENT:
        return action.payload
    default:
        return state
    }
}
export const store: Store<AlertType[], AlertAction> & { dispatch: DispatchType} = createStore(alertReducer)
export const component: Store<FC<{alert: AlertType, close: ()=>void}>, AlertAction> & { dispatch: DispatchType} = createStore(componentReducer)
