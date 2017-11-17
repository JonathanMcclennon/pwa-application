import React from 'react';

const getParticipantsElements = (participants) => {
    return participants.map((participant) => {
        return <div className="card__wrestler">
            <img className="card__wrestler-img" src={participant.media.image} />
            <p className="card__wrestler-info">{participant.name}</p>
        </div>
    })
}

const getMembers = (participants, isTeamMatch) => {
   if (isTeamMatch) {
       return participants.map((team) => {
            return <div className="card__team">
                { getParticipantsElements(team.members) }
            </div>
        })
   }
   
   return getParticipantsElements(participants);
}

export default ({ name, participants, isTeamMatch}) => {

    return (<li className="card">
        <h3 className="card__title">{name}</h3>
        <section className="card__match">
            { getMembers(participants, isTeamMatch) }
        </section>
    </li>)

}