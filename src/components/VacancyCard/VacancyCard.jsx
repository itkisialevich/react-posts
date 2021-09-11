import React from "react";
import iconChecked from "./iconChecked.png";

export class VacancyCard extends React.Component {
    render() {
        const {position, company, geo, beginDiscription, endDiscription, date} = this.props;

        return (
        <div className="vacancy-card">
        
          <h3 className="vacancy-title">{position}</h3>

          <div className="vacancy-company">
            <p className="company-name">{company}</p>
            <img src={iconChecked} alt=""/>
          </div>

          <p className="vacancy-geo">{geo}</p>

          <p className="vacancy-discription">{beginDiscription}</p>
          <p className="vacancy-discription">{endDiscription}</p>

          <div className="vacancy-footer">
            <button className="vacancy-button" type="button">Откликнуться</button>
            <p className="vacancy-date">{date}</p>
          </div>
        
        </div>
        )
    }
}