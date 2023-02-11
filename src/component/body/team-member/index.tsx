import React from 'react'

const TeamMember: React.FC = () => {
  return (
    <>  
        <div className="category">
                    <h1 className="title">Team-members</h1>
                    <div className="members">
                        <div className="member">
                            <h5 className="name">Antons Playden</h5>
                            <h5 className="role">Dental Hygienist</h5>
                            <div className="line"></div>
                            <img src="./img/member-1.png" alt="" className="avatar"/>
                        </div>
                        <div className="member">
                            <h5 className="name">Lowe Coronas</h5>
                            <h5 className="role">Financial Analyst</h5>
                            <div className="line"></div>
                            <img src="./img/member2.png" alt="" className="avatar"/>
                        </div>
                        <div className="member second-row">
                            <h5 className="name">Galvan Bonifas</h5>
                            <h5 className="role">Media Manager</h5>
                            <div className="line"></div>
                            <img src="./img/member3.png" alt="" className="avatar"/>
                        </div>
                        <div className="member second-row">
                            <h5 className="name">Galvan Bonifas</h5>
                            <h5 className="role">Media Manager</h5>
                            <div className="line"></div>
                            <img src="./img/member4.png" alt="" className="avatar"/>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default TeamMember