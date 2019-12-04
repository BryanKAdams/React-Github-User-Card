import React from "react";



const UserCard = props => {
    return (
        <>
            {props.followerData.map(follower => (
                <div key={follower.id} className="card">
                    <img alt={follower.avatar_url} src={follower.avatar_url} />
                    <div className="card-info">

                        <p className="username">{follower.login}</p>

                        <p>Location: {follower.location}</p>
                        <p>Profile: {follower.html_url}</p>
                        <p>Followers: {follower.followers}</p>
                        <p>Following: {follower.following}</p>
                        <p>Bio: {follower.bio}</p>
                    </div>
                </div>

            ))}
        </>
    )
}

export default UserCard;
