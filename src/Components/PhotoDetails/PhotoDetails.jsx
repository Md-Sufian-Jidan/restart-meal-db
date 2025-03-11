import { useLoaderData } from "react-router-dom";

const PhotoDetails = () => {
    const photoDetails = useLoaderData();
    console.log(photoDetails);
    const { albumId, id, title, url, thumbnailUrl } = photoDetails

    return (
        <div>
            <h1>No. {id}</h1>
            <h2>Title: {title}</h2>
            <p>Url: {url}</p>
            <p>Thumbnail Url: {thumbnailUrl}</p>
        </div>
    );
};

export default PhotoDetails;