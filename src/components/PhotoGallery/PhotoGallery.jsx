import React, { Component } from "react";
import { default as PG_PhotoExpanded } from "./PhotoGalleryPhotoExpanded";
import { defualt as PG_Thumbnails } from "./PhotoGalleryThumbnail";

export default class PhotoGallery extends Component {
	render() {
		return (
			<React.Fragment>
				<PG_PhotoExpanded></PG_PhotoExpanded>
				<PG_Thumbnails></PG_Thumbnails>
			</React.Fragment>
		);
	}
}
