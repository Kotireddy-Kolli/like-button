import { useState } from "react";
import "./LikeButtons.css"
export const LikeButton = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [isFeching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);
    const handleToggleLike = () => {
        setIsFetching(true);
        setTimeout(() => {
            const isSuccess = Math.floor(Math.random()*2);
            if(isSuccess){
                setIsLiked(!isLiked);
                setIsFetching(false);
                setError(null);
            }else{
                setIsFetching(false);
                setError("Error updating details")
            }
            console.log(isSuccess)
        },500)
    }
   return <button onClick={handleToggleLike} className={`fav-btn ${isLiked ? "liked" : "like"}`}>
        <span>{isFeching ? "loading.." : (isLiked ? "❤️" : "🤍")}</span>{" "}
        <span>{isLiked ? "Liked" : "Like"}</span>
    </button>
}