import React, { Component } from "react";

export class PhotoGalleryPhotoExpanded extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		const i = 0;
		var width = 640;
		var height = 320;
		return (
			<React.Fragment className="photo-expanded">
				<img
					src={
						"http://picsum.photos/id/" +
						`${i.toString()}/` +
						`${width.toString()}/${height.toString()}`
					}
				></img>
			</React.Fragment>
		);
	}
}

export default PhotoGalleryPhotoExpanded;
