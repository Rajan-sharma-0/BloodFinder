import React from 'react'
import "./Styles/Benefits.css"
import heart from "../assets/heart.png"
export default function Benefits() {
  return (
    <div className='benefits'>
        <h1>Benefits of Donating Blood</h1>
        <div className="benefitsList">
            <div className="benefit">
                <img src={heart} alt="heart" />
                <span>Reduces Cardiovascular Risks</span>
            </div>
            <div className="benefit">
                <img src="https://img.icons8.com/?size=100&id=Gg3M15cSS7uz&format=png&color=000000" alt="heart" />
                <span>Reduces Risk of Cancer</span>
            </div>
            <div className="benefit">
                <img src="https://img.icons8.com/?size=100&id=vGqCV9FnnqWk&format=png&color=000000" alt="heart" />
                <span>Helps in Weight Loss</span>
            </div>
            <div className="benefit">
                <img src="https://img.icons8.com/?size=100&id=a6dnrEonevaP&format=png&color=000000" alt="heart" />
                <span>Lowers Cholesterol Levels</span>
            </div>
            <div className="benefit">
                <img src="https://img.icons8.com/?size=100&id=qhfMUc4uUBFy&format=png&color=000000" alt="heart" />
                <span>Balances Iron Level in Blood</span>
            </div>
            <div className="benefit">
                <img src="https://img.icons8.com/?size=100&id=T7s9rvGhKn33&format=png&color=FA5252" alt="heart" />
                <span>Enhances Production of RBCs</span>
            </div>
        </div>
    </div>
  )
}
