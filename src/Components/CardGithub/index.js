import React from 'react'
import './style.css'
import ghlogo from './images/ghlogo.png'

const AccountCard = ({person}) => {

    return (
        <div className='github-container'>
            <div className='github-card'>
                <div className='github-logo-div'><img className='github-logo' src={ghlogo} height={25} width={25} alt='ghlogo'/></div>
                <img className='profile-image' src={person.avatar_url} height={150} width={150} alt='profile'/>
                <div className='github-name'>{person.name}</div>
                <div className='github-login'>@{person.login}</div>
                <div className='github-bio'>{person.bio}</div>
                <div className='github-bottom-card'>
                    
                        <div className='github-followers'>
                            <div className='github-bottom-number'>{person.followers}</div>
                            <div className='github-bottom-text'>Followers</div> 
                        </div>
                        <div className='github-followers'>
                            <div className='github-bottom-number'>{person.following}</div>
                            <div className='github-bottom-text'>Following</div>
                        </div>
                        <div className='github-followers'>
                        <div className='github-bottom-number'>{person.public_repos}</div>
                            <div className='github-bottom-text'>Repositories</div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default AccountCard 