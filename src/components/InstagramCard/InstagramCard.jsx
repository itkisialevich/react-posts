import React from "react"; 

import { InstagramHeader } from "./InstagramHeader";
import { InstagramComment } from "./InstagramComment";

import insta from "./images/insta.png";
import like from "./images/like.png";
import message from "./images/message.png";
import fly from "./images/fly.png";
import numb from "./images/numb.png";
import marker from "./images/marker.png";

export class InstagramCard extends React.Component {
    render() {

        const {name, geo, count, userComment, date} = this.props;
        
        return (

            <div className="instagram-card">

              <InstagramHeader 
              name={name}
              geo={geo}
              />
    
              <img className="instagram-photo" src={insta} alt="" />
    
              <div className="instagram-actions">
                <div className="active-actions">
                  <img className="action-like" src={like} alt="" />
                  <img className="action-message" src={message} alt="" />
                  <img className="action-fly" src={fly} alt="" />
                </div>
                <img className="action-numb" src={numb} alt="" />
                <img className="action-marker" src={marker} alt="" /> 
              </div>
    
              <h3 className="instagram-likes">{count} отметок "Нравится"</h3>
    
              <div className="instaram-about">
                <h3 className="header-name">{name}</h3>
                <p className="about-user">{userComment}</p>
                <p className="about-yet">ещё</p>
              </div>
    
              <p className="instagram-date">{date}</p>
    
              <InstagramComment />
            
            </div>

        )
    }
}