import React, { Component } from "react";
import "./PhotoThumbnail.css";
export class PhotoGalleryThumbnail extends Component {
	render() {
		var width = 40;
		var height = 30;
		const imgCount = 9;
		var ids = [];
		for (let i = 0; i < imgCount; i++) {
			ids.push(i);
		}

		var imgs = ids.map((id, i) => (
			<img
				key={i}
				src={
					"http://picsum.photos/id/" +
					`${i.toString()}/` +
					`${width.toString()}/${height.toString()}`
				}
			/>
		));
		return <div className="photo-thumbnail">{imgs}</div>;
	}
}

export default PhotoGalleryThumbnail;
