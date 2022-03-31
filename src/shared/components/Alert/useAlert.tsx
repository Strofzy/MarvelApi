import { nanoid } from 'nanoid';
import ReactDOM from 'react-dom'
import { useEffect } from 'react';
import { ContainerStyle } from './alert.styled';
import { AlertTypes, component, store } from './context/alertStore';
import { Alert, AlertHookProps, AlertReturn, Hook } from './alert.types'

const AlertId = 'alert'

export const useAlert: Hook<AlertHookProps | undefined, AlertReturn> = ({ template, global } = {}) => {

    // Alert Container
    const alert = document.createElement('div');
    alert.id = AlertId
    Object.entries(ContainerStyle).map((style: any) => {
        alert.style[style[0]] = style[1]
    })

    // Render Alerts in Container
    const renderAlerts = () => {
        // Custom alert template to render (not working)
        const MyAlert = /* template ? template :  */component.getState()
        ReactDOM.render(
            <>
                {
                    store.getState().map((a: any) => {
                        return <MyAlert key={a.id} close={hideAlert(String(a?.id))} alert={a}/>
                    })
                }
            </>,
            document.getElementById(AlertId)
        );
    }

    // Hide Alert
    const hideAlert = (id: string) => {
        return (duration = 2000) => {
            store.dispatch({ type: AlertTypes.SET_CLOSE, payload: id })
            renderAlerts()
            setTimeout(()=> {
                store.dispatch({ type: AlertTypes.SET_CLEAR, payload: id })
                renderAlerts()
            }, duration)
        }
    }

    // show Alert
    const show = (a: Alert) => {
        const id = nanoid(15)
        store.dispatch({ type: AlertTypes.SET_ALERT, payload: { ...a, id } })
        renderAlerts()
        if (a.hide || a.hide === undefined){
            setTimeout(()=>{
                hideAlert(id)()
            }, a.duration ? a.duration : 2000)
        }
    }

    // Mount alert in app
    const mountAlert = () => {
        ReactDOM.render(
            <></>,
            document.body.appendChild(alert)
        );
    }

    // Init Hook and mount container
    useEffect(()=>{
        if (template && global){
            component.dispatch({ type: AlertTypes.SET_DEFAULT_COMPONENT, payload: template })
        }
        // If not exist alert, mount it
        const hasAlert = document.getElementById(AlertId)
        if (!hasAlert){
            mountAlert()
        }
    }, [])

    // Show and hide container
    store.subscribe(()=>{
        if (!store.getState().length){
            setTimeout(()=>{
                alert.style.display = 'none'
            }, 500)
        } else {
            alert.style.display = 'flex'
        }
    })

    return { show }
}
