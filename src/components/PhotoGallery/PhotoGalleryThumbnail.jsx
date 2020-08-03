import React, { Component } from "react";
import "./PhotoThumbnail.css";
export class PhotoGalleryThumbnail extends Component {
	render() {
		var num = 128;
		var num2 = 72;
		return (
			<div className="photo-thumbnail">
				<img src="https://picsum.photos/id/0/128/72" />
				<img src="https://picsum.photos/id/1/128/72" />
				<img src="https://picsum.photos/id/3/128/72" />
				<img src="https://picsum.photos/id/4/128/72" />
				<img src="https://picsum.photos/id/5/128/72" />
				<img src="http://via.placeholder.com/128x72" />
				<img src="http://via.placeholder.com/128x72" />
				<img
					src={
						"http://picsum.photos/id/6/" +
						`${num.toString()}/${num2.toString()}`
					}
				/>
			</div>
		);
	}
}

export default PhotoGalleryThumbnail;
