import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Card() {
    return (
        <div className='cards'>
            <h2>LATEST PROJECTS</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/reservation.jpg'
                        text='A web application used by restaurant personnel to create, read, update, and delete reservations for customers.'
                        altText='Reservations App'
                        label='Periodic Tables'
                        path='https://github.com/ChrisThinkful/Restaurant-Reservations'
                        />
                        <CardItem 
                        src='images/movie.jpg' 
                        text='Check out reviews of your favorite movies or write a review of one you have just watched.'
                        altText='Movies App'
                        label='WeLoveMovies'
                        path='https://github.com/ChrisThinkful/Project_WeLoveMovies_1'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/food.jpg' 
                        text='Order and have food from your favorite restaurants delivered to your door!'
                        altText='Food Delivery'
                        label='GrubDash'
                        path='https://github.com/ChrisThinkful/Project_GrubDash_Qualified_1'
                        />
                        <CardItem 
                        src='images/flashcards.jpg' 
                        text='Flashcards are a proven methodology for learning. Now, you can create cards and decks right in this application!'
                        altText='Flashcards'
                        label='Flashcard-O-Matic'
                        path='https://github.com/ChrisThinkful/Project_Flashcards_Qualified_1'
                        />
                        <CardItem 
                        src='images/timer.jpg'
                        text='Cycle between periods of Focus and Break using the Pomodoro Timer.'
                        altText='Tomato Timer'
                        label='Pomodoro Study Timer'
                        path='https://github.com/ChrisThinkful/Pomodoro_Timer'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
