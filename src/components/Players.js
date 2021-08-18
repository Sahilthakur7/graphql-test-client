import React from 'react';
import { useQuery, NetworkStatus } from '@apollo/client';
import { GET_PLAYERS } from '../API/Queries';

const Players = () => {
  const { loading, error, data, networkStatus } = useQuery(GET_PLAYERS, {
    notifyOnNetworkStatusChange: true,
  });

  const renderPlayers = () => {
    const playersList = data?.players?.map((player) => (
      <li key={player.id}>{player.name}</li>
    ));

    return playersList;
  };

  if (loading) {
    return <div>Loading hi hai tbse</div>;
  }
  return (
    <div>
      <ul>
        {renderPlayers()}
      </ul>
    </div>
  );
};

export default Players;
