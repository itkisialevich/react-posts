import React from "react";

export class OnlinerNews extends React.Component {
    render() {

        const {rubric, countComment, title} = this.props;

        return (
           
            <div className="news">
        
               <div className="news-head">
    
                  <div className="rubric">
                    <p className="rubric-title">{rubric}</p>
                  </div>
    
                  <div className="comment">
                    <p className="count">{countComment}</p>
                  </div>
                
                </div>
    
                <h2 className="title">{title}</h2>
            
            </div>


        )

    }
}