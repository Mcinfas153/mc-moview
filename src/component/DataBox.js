import React from 'react'
import { Paper } from '@material-ui/core'
import './css/databox.css'

export default function DataBox(props) {

    const styles = {
        "databox": {
            "background-color": props.color,
            "border-color": props.color,
            "box-shadow": "1px 1px 1px 1px " + props.color
        },
    }

    return (
        <div className="databox" style={styles.databox}>
            <h4 className="databox__title">{props.title}</h4>
            <p className="databox__count">{props.count}</p>
        </div>
    )
}
