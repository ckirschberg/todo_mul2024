import { useState } from "react";

function LikeCounter() {
        // get     //set/ændre
    const [likes, setLikes] = useState(0);
    
    // function handleLikeClick() {
    //     setLikes(likes + 1);
    // }
    // function handleDislikeClick() {
    //     setLikes(likes - 1);
    // }

    function handleLikes(add) {
        setLikes(likes + add);}

    return (
        <div>
            <p>Likes: {likes}</p>
            <button onClick={() => handleLikes(1)}>Like</button>
            <button onClick={() => handleLikes(-1)}>Dislike</button>
        </div>
    )
}

export default LikeCounter;