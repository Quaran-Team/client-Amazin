import React, { Component } from "react";
import ReactImageMagnify from "react-image-magnify";
import "./PhotoGalleryPhotoExpanded.css";

export class PhotoGalleryPhotoExpanded extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		const width = 420;
		const height = 360;
		const widthLarge = width * 2.5;
		const heightLarge = height * 2.5;

		const smallerImg = `http://picsum.photos/id/${this.props.imgId.toString()}/${width.toString()}/${height.toString()}`;
		const largerImg = `http://picsum.photos/id/${this.props.imgId.toString()}/${widthLarge.toString()}/${heightLarge.toString()}`;
		return (
			<div
				className="photo-expanded fluid__image-container"
				style={{
					marginTop: "auto",
					marginRight: 0.5 + "em",
					marginBottom: "auto",
					marginLeft: 0.5 + "em",
				}}
			>
				<ReactImageMagnify
					{...{
						smallImage: {
							alt: "Laptop",
							isFluidWidth: true,
							src: smallerImg,
							width: width,
							height: height,
							imageClassName: "smallImg",
						},
						largeImage: {
							src: largerImg,
							width: widthLarge,
							height: heightLarge,
						},
						lensStyle: {
							// background: "hsla(0, 0%, 100%, .3)",
							border: "1px solid #ccc",
						},
						isHintEnabled: true,
						shouldHideHintAfterFirstActivation: false,
						shouldUsePositiveSpaceLens: true,
					}}
				/>
			</div>
		);
	}
}

export default PhotoGalleryPhotoExpanded;
