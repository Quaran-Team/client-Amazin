import React, { Component } from "react";

export class PhotoGalleryThumbnail extends Component {
	render() {
		return (
			<div className="photo-thumbnail">
				<img src="https://picsum.photos/id/0/128/72" />
				<img src="https://picsum.photos/id/1/128/72" />
				<img src="https://picsum.photos/id/3/128/72" />
				<img src="https://picsum.photos/id/4/128/72" />
				<img src="https://picsum.photos/id/5/128/72" />
				<img src="http://via.placeholder.com/128x72" />
				<img src="http://via.placeholder.com/128x72" />
				<img src="http://via.placeholder.com/128x72" />
				<img src="http://via.placeholder.com/128x72" />
			</div>
		);
	}
}

export default PhotoGalleryThumbnail;
