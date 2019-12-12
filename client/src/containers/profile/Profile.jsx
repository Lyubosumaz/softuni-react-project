import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import GameHistoryCard from './components/game-history-card/GameHistoryCard';
import handleRoute from '../../utils/handleRoutes';
import defaultProfilePic from '../../assets/img/default_profile.png';
import http from '../../services/http';
import secondsToClock from '../../utils/secondsToClock';
import './profile.css';

function Profile(props) {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        http.User.profile().then((gameProfile) => {
            setProfile(gameProfile);
        })
    }, []);

    return (
        <div className="main-container">
            <h1>Profile</h1>

            {profile &&
                <div className="profile-card">
                    <div>
                        <h1>{props.userName}</h1>
                        <img src={defaultProfilePic} alt="Profile" />
                    </div>

                    <div className="profile-stats">
                        <p><b>Your Game Profile Records:</b></p>
                        <p><b>Total Games Played: {profile.totalGames}</b></p>
                        <p><b>Total Time Played: {secondsToClock(profile.totalTime)}</b></p>
                        <p><b>Total Gold Accumulated: {profile.totalGold}</b></p>
                    </div>
                </div>}

            <div className="profile-game-history">
                {profile && profile.gameHistory.slice(0).reverse().map((data, index) => {
                    return (<GameHistoryCard key={index} data={data} />);
                })}
            </div>

            <div className="info-container">
                <p>Play one more game <button className="info-button" onClick={handleRoute('/game')}>Here</button>!</p>
            </div>
        </div >
    );
};

function mapStateToProps(state) {
    return {
        userName: state.user.userName,
    };
};

export default connect(mapStateToProps)(Profile);