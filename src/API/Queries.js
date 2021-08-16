import { gql } from '@apollo/client';

export const GET_PLAYERS = gql`
  query getPlayersQuery {
    players {
      name
      team {
		  name
	  }
    }
  }
`;

