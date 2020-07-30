import React, { Component } from "react";
import { default as PG_PhotoExpanded } from "./PhotoGalleryPhotoExpanded";
import { default as PG_Thumbnails } from "./PhotoGalleryThumbnail";

export default class PhotoGallery extends Component {
	render() {
		return (
			<React.Fragment>
				<PG_Thumbnails></PG_Thumbnails>
				<PG_PhotoExpanded></PG_PhotoExpanded>
			</React.Fragment>
		);
	}
}
