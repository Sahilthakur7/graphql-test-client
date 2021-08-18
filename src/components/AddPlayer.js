import React, { useState } from 'react';
import { useQuery, NetworkStatus, useMutation } from '@apollo/client';
import { GET_TEAMS, ADD_PLAYER_MUTATION, GET_PLAYERS } from '../API/Queries';

const AddPlayer = () => {
  const { loading, error, data } = useQuery(GET_TEAMS);
  const [mutateFunction, { mutationData, mutationLoading, mutationError }] =
    useMutation(ADD_PLAYER_MUTATION);

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [team, setTeam] = useState('');

  const renderTeamOptions = () => {
    if (loading) {
      return <option>Loading teams..</option>;
    }

    const teamsList = data?.teams?.map((team) => (
      <option key={team.id} value={team.id}>
        {team.name}
      </option>
    ));

    return teamsList;
  };

  const submitForm = (e) => {
    if (e) e.preventDefault();

    mutateFunction({
      variables: { name, teamId: team, position },
      refetchQueries: [{ query: GET_PLAYERS }],
    });
  };

  return (
    <form id="add-player" onSubmit={submitForm}>
      <div className="field">
        <label>Player Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="field">
        <label>Player Position</label>
        <input type="text" onChange={(e) => setPosition(e.target.value)} />
      </div>
      <div className="field">
        <label>Team</label>
        <select onChange={(e) => setTeam(e.target.value)}>
          {renderTeamOptions()}
        </select>
      </div>

      <button type="submit">+</button>
    </form>
  );
};

export default AddPlayer;
