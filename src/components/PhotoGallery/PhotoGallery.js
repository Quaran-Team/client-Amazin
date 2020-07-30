.import React, { Component } from 'react'

export default class PhotoGallery extends Component {
    render() {
        return (
            <React.Fragment>
                <PG_PhotoExpanded></PG_PhotoExpanded>
                <PG_Thumbnails></PG_Thumbnails>
            </React.Fragment>
        )
    }
}
