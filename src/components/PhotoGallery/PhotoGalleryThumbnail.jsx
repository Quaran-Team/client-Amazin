import React, { Component } from "react";

export class PhotoGalleryThumbnail extends Component {
	render() {
		return (
			<React.Fragment className="photo-thumbnail">
				<img src="https://picsum.photos/id/0/128/72" />
				<img src="https://picsum.photos/id/1/128/72" />
				<img src="https://picsum.photos/id/3/128/72" />
				<img src="http://via.placeholder.com/128x72" />
				<img src="http://via.placeholder.com/128x72" />
			</React.Fragment>
		);
	}
}

export default PhotoGalleryThumbnail;
