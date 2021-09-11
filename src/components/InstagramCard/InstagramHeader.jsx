import React from "react";
import instAvatar from "./images/instAvatar.png";
import instMenu from "./images/instMenu.png";

export class InstagramHeader extends React.Component {
    render() {
        const {name, geo} = this.props;

        return (
            <div className="instagram-header">
              <img className="header-avatar" src={instAvatar} alt="" />
              <div className="header-user">
                <h3 className="header-name">{name}</h3>
                <p className="header-geo">{geo}</p>
              </div>
              <img className="header-menu" src={instMenu} alt="" />
          </div>
        )
    }
}

