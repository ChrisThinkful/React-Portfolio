import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Card() {
    return (
        <div className='cards'>
            <h2>PROJECTS</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src=''
                        text='A library application created using HTML, CSS, and Javascript.'
                        altText='Library App'
                        label='Track Your Books'
                        path='https://github.com/ChrisThinkful/library'
                        />
                        <CardItem 
                        src='' 
                        text='Do some quick maths with this Calculator built with HTML, CSS, and Javascript'
                        altText='Calculator App'
                        label='Calculator'
                        path='https://github.com/ChrisThinkful/Calculator'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='' 
                        text='Travel back in time with this web-based recreation of a childhood favorite - The Etch-A-Sketch!'
                        altText='Etch-A-Sketch'
                        label='Etch-A-Sketch'
                        path='https://github.com/ChrisThinkful/Etch-A-Sketch'
                        />
                        <CardItem 
                        src='' 
                        text="Have a go at this nerd's take on Rock Paper Scissors"
                        altText='Rock Paper Scissors'
                        label='Warrior Wizard Ranger'
                        path='https://github.com/ChrisThinkful/Rock-Paper-Scissors'
                        />
                        <CardItem 
                        src=''
                        text='A sample landing page for a portfolio or blog.'
                        altText='Landing Page'
                        label='Awesome Landing Page'
                        path='https://christhinkful.github.io/Landing-Page/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
