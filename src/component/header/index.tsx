import React from 'react'

const Header: React.FC = () => {
  return (
    <>
        <header className="header">
            <div className="back-button">
                <button className="btn" >
                    <img src="./svg/back-btn.svg" alt="" />
                </button>
            </div>
            <div className="info">
                <button className="btn avatar">
                    <img src="./svg/avatar.svg" alt="" />
                </button>
                <div>
                    <h1>Pattie Trusdale</h1>
                    <p>Full-stack Developer</p>
                </div>
            </div>
            <button className="hire-btn">HIRE</button>
        </header>
    </>
  )
}

export default Header