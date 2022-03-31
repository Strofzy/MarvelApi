import { FC } from 'react'
import { AlertBox, AlertButtons, AlertMessage } from './alert.styled'
import { AlertProps } from './alert.types'
import Icons from './icons'

// this is default alert, and is a pure function, dont invoque nothing outside it
export const Alert: FC<AlertProps>= ({ alert, close }) => {
    const types = {
        info:  <Icons.Info/>,
        warning:  <Icons.Warning/>,
        success:  <Icons.Success/>,
        danger:  <Icons.Danger/>,
    }
    // Confirm
    // If exist actions to accept or decline
    const accept = () => {
        alert?.actions?.accept?.action && alert.actions.accept.action(close)
    }
    const cancel = () => {
        alert?.actions?.cancel?.action && alert.actions.cancel.action(close)
    }

    return (
        <AlertBox id={alert.id} show={!!alert.show} >
            <AlertMessage onClick={() =>close(500)}>
                {alert.type && types[alert.type]}
                <div>
                    <h2>{alert.title}</h2>
                    <p>{alert.message}</p>
                </div>
            </AlertMessage>
            {
                alert.actions &&
                <AlertButtons>
                    {
                        <>
                            {
                                alert.actions.accept && <button onClick={accept}> {alert.actions.accept.text} </button>
                            }
                            {
                                alert.actions.cancel && <button onClick={cancel}> {alert.actions.cancel.text} </button>
                            }
                        </>
                    }
                </AlertButtons>
            }

        </AlertBox>
    )
}
