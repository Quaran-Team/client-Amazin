import React, { Component } from "react";
import { default as PG_PhotoExpanded } from "./PhotoGalleryPhotoExpanded";
import { default as PG_Thumbnails } from "./PhotoGalleryThumbnail";
import "./PhotoGallery.css";

export default class PhotoGallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
		};
	}

	updateHoverState = (i) => {
		this.setState({ id: i });
		console.log(`imageId: ${i}`);
	};
	render() {
		return (
			<div className="photo-gallery-container">
				<div className="pg_thumbnails">
					<PG_Thumbnails
						updateHoverState={this.updateHoverState}
					></PG_Thumbnails>
				</div>
				<div className="pg_expanded">
					<PG_PhotoExpanded imgId={this.state.id}></PG_PhotoExpanded>
				</div>
			</div>
		);
	}
}
