import React from 'react';
import { useQuery, NetworkStatus } from '@apollo/client';
import { GET_PLAYERS } from '../API/Queries';

const Players = () => {
  const { loading, error, data, networkStatus } = useQuery(GET_PLAYERS, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return <div>Loading hi hai tbse</div>;
  }
  return (
    <div>
      <ul>
        <li>Player name</li>
      </ul>
    </div>
  );
};

export default Players;
