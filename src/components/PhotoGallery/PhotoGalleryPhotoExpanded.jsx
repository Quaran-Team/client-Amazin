import React, { Component } from "react";

export class PhotoGalleryPhotoExpanded extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		const width = 640;
		const height = 320;
		return (
			<div className="photo-expanded">
				<img
					src={`http://picsum.photos/id/${this.props.imgId.toString()}/${width.toString()}/${height.toString()}`}
				></img>
			</div>
		);
	}
}

export default PhotoGalleryPhotoExpanded;
