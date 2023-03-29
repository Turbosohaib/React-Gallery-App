import React from "react";


function ImageCard({ image }) {

    console.log(image)

    return (
        <div>

            <a href={image.pageURL} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img src={image.webformatURL} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{image.tags}</h3>
                <a href={image.previewURL} >Download</a>
                <p className="mt-1 text-lg font-small text-gray-900">{image.type} by {image.user}</p>

            </a>
        </div>
    );
}

export default ImageCard;