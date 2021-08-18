import { gql } from '@apollo/client';

export const GET_PLAYERS = gql`
  query getPlayersQuery {
    players {
      name
      id
      team {
        name
      }
    }
  }
`;

export const GET_TEAMS = gql`
  query getTeamsQuery {
    teams {
      name
      id
    }
  }
`;

export const ADD_PLAYER_MUTATION = gql`
  mutation addPlayer($name: String! , $position: String!, $teamId: ID!) {
    addPlayer(name: $name, position: $position, teamId: $teamId) {
      name
      id
    }
  }
`;
