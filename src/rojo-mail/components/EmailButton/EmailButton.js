import React from 'react'
import Button from '@material-ui/core/Button'
import MaterialIcon from 'material-icons-react'

export const EmailButton = (props) => {
    return (
        <Button variant={props.variant || 'outlined'}>
            <MaterialIcon icon={props.icon} />
            <span style={{ marginLeft: '10px' }}>{props.text}</span>
        </Button>
    )
}
