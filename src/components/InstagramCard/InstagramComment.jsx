import React from "react";
import smile from "./images/smile.png";

export class InstagramComment extends React.Component {
    render() {
        
        return (
          <div className="instagram-comment">
            <img className="comment-smile" src={smile} alt="" />
            <p className="comment-user">Добавьте комментарий...</p>
            <p className="comment-publish">Опубликовать</p>
          </div>
        )
    }
}