import React, { Component } from "react";
import { default as PG_PhotoExpanded } from "./PhotoGalleryPhotoExpanded";
import { default as PG_Thumbnails } from "./PhotoGalleryThumbnail";
import "./PhotoGallery.css";

export default class PhotoGallery extends Component {
	render() {
		return (
			<div className="photo-gallery-container">
				<div>
					<PG_Thumbnails></PG_Thumbnails>
				</div>
				<div>
					<PG_PhotoExpanded></PG_PhotoExpanded>
				</div>
			</div>
		);
	}
}
