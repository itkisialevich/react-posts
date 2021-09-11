
import React from "react";

import {FacebookCard} from "./components/FacebookCard";
import {OnlinerNews} from "./components/OnlinerNews";
import {VacancyCard} from "./components/VacancyCard";
import {InstagramCard} from "./components/InstagramCard";

import './App.css';

const tweets = [

  {
    avatarUrl: "https://cdn.disney.ru/assets/w1386/14347961-da88-4f0a-8556-2badfb7c8004.webp",
    name: "Mickey Mouse",
    company: "The Walt Disney Company",
    post: "Knowing how to laugh at yourself instead of blaming for your own weaknesses will make you happier. No one’s perfect after all.",
    likes: "Likes",
    reply: "Reply", 
    date: "2 second ago", 
  },
  
];

const news = [

  {
    imageUrl: "",
    rubric: "Кошелек",
    countComment: "239",
    title: "Что происходит с почтой, грузами и доставкой валюты?",
  },
  
];

const vacancy = [

  {
    position: "Junior React.js Engineer (Intership/React.js Lab)",
    company: "ООО АйтиРекс Групп",
    geo: "Минск",
    beginDiscription: "Медидинское обслуживание. Онлайн-ивенты. Реферальная программа.",
    endDiscription: "10+ лет успешной работы на глобальном рынке ИТ-услуг. Какие знания и навыки для старта: Базовые знания HTML...",
    date: "7 сентября"
  },
  
];

const instapost = [

  {
    name: "speak_like_belarus",
    geo: "Minsk, Belarus",
    count: "20",
    userComment: "хай самі сябе інтэгруюць!...",
    date: "8 часов назад"
  },
  
];

function App() {
  return (
    <div className="App">

       <h1 className="title-task"> Task 1 </h1>

        {tweets.map((tweet) => {
        const {
          avatarUrl,
          name,
          company,
          post,
          likes,
          reply,       
          date,
        } = tweet; 

        return (
          <FacebookCard
            avatarUrl={avatarUrl}
            name={name}
            company={company}
            post={post}
            likes={likes}
            reply={reply}
            date={date}  
          />
        );
      })}

      <h1 className="title-task"> Task 2 </h1>

      {news.map((article) => {
        const {
          imageUrl,
          rubric,
          countComment,
          title,
        } = article; 

        return (
          <OnlinerNews
            imageUrl={imageUrl}
            rubric={rubric}
            countComment={countComment}
            title={title}  
          />
        );
      })}

      <h1 className="title-task"> Task 3 </h1>

      {vacancy.map((item) => {
        const {
          position,
          company,
          geo,
          beginDiscription,
          endDiscription,
          date,
        } = item; 

        return (
          <VacancyCard
            position={position}
            company={company}
            geo={geo}
            beginDiscription={beginDiscription} 
            endDiscription={endDiscription} 
            date={date}
          />
        );
      })}

      <h1 className="title-task"> Task 4 </h1>

      {instapost.map((item) => {
        const {
          name,
          geo,
          count,
          userComment,
          date,
        } = item; 

        return (
          <InstagramCard
            name={name}
            geo={geo}
            count={count} 
            userComment={userComment} 
            date={date}
          />
        );
      })}

    </div>

    


  );
}


export default App;
