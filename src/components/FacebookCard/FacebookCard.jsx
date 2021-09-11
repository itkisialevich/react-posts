import React from "react";

import { FacebookPoint } from "./FacebookPoint"

export class FacebookCard extends React.Component {
    render() {
        const {avatarUrl, name, company, post, likes, reply, date } = this.props;
        return (
        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginLeft: "20px",
        width: "500px",
        height: "150px",
        fontSize: "15px",
        fontWeight: "400px",
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#ffffff"
        }}>

            <div style={{
            width: "120px",
            height: "120px",
            backgroundSize: "contain",
            backgroundImage:  `url(${avatarUrl})`,
            backgroundRepeat: "no-repeat, repeat",
            backgroundPosition: "center"
            }}>
            </div> 
            

            <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "0px",
            width: "350px",
            height: "120px"
            }}>

                <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: "15px",
                }}>
                  <p style={{
                   margin: "0px",
                   color: "#1877f2",
                   }}>
                  {name}</p>
                  <FacebookPoint />
                  <p style={{
                   margin: "0px",
                   color: "#aeb2b6",
                   }}>
                  {company}</p>
                </div>
               
               <p style={{
                margin: "0px",
                textAlign: "left"
                }}>
               {post}</p>

                <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "0px",
                }}>
                  <p style={{
                   margin: "0px",
                   color: "#1877f2",
                   }}>
                  {likes}</p>
                  <FacebookPoint />
                  <p style={{
                   margin: "0px",
                   color: "#1877f2",
                   }}>
                  {reply}</p>
                  <FacebookPoint />
                  <p style={{
                   margin: "0px",
                   color: "#aeb2b6",
                   }}>
                  {date}</p>
                </div>

             
            </div>
            
        </div>
    );
    }
}

