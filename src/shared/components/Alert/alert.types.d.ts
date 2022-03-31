import { FC } from 'react'

export type Alert = {
    id?: string,
    type?: 'success' | 'warning' | 'danger' | 'info',
    show?: boolean,
    title?: string,
    message: string,
    duration?: number,
    hide?: boolean,
    actions?: {
      accept?: Action,
      cancel?: Action
    }
}

// Hook Types
export type AlertHookProps = {template?: FC<{alert: Alert, close: (duration?: number)=>void}>, global?: boolean}

export type AlertReturn = {
    show: (alert: Alert) => void
}
export type Hook<T, R> = (props?: T) => R

// Alert Types
type Action = {
    text: string
    action: (close: () => void) => void
}

export type AlertProps = { alert: Alert, close: (duration?: number)=>void}
// Store Types

export type AlertAction = {
    type: string
    payload: any | {
        [key: string]: any
    }
}

export type DispatchType = (args: AlertAction) => AlertAction
