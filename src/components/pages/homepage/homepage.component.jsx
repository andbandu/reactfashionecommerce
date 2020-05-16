import React from 'react'
import './homepage.styles.scss'
import './directory.styles.scss'
import './menu-item.styles.scss'

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-items">
                <div className='content'>
                    <h1 className= "title">Hats</h1>
                    <span className = "subtitle">show now</span>
                </div>
            </div>
            <div className="menu-items">
                <div className='content'>
                    <h1 className= "title">jackets</h1>
                    <span className = "subtitle">show now</span>
                </div>
            </div>
            <div className="menu-items">
                <div className='content'>
                    <h1 className= "title">Sneekers</h1>
                    <span className = "subtitle">show now</span>
                </div>
            </div>
            <div className="menu-items">
                <div className='content'>
                    <h1 className= "title">Women</h1>
                    <span className = "subtitle">show now</span>
                </div>
            </div>
            <div className="menu-items">
                <div className='content'>
                    <h1 className= "title">Mens</h1>
                    <span className = "subtitle">show now</span>
                </div>
            </div>
        </div>
    </div>
)


export default HomePage;
  
    
