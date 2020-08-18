import React, { Component } from "react";
import "./PhotoThumbnail.css";
export class PhotoGalleryThumbnail extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const width = 40;
		const height = 30;
		const imgCount = 15;
		var ids = [];
		for (let i = 0; i < imgCount; i++) {
			ids.push(i);
		}
		var imgs = ids.map((id, i) => {
			return (
				<img
					onMouseEnter={() => this.props.updateHoverState(id)}
					key={i}
					src={`http://picsum.photos/id/${id.toString()}/${width.toString()}/${height.toString()}`}
				/>
			);
		});
		return <div className="photo-thumbnail">{imgs}</div>;
	}
}

export default PhotoGalleryThumbnail;
