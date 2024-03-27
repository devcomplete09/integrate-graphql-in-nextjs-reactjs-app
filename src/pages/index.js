import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_COUNTRIES = gql`
  query Query {
    countries {
      code
      currency
      native
      name
      emojiU
      emoji
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(GET_COUNTRIES);
  const { countries = [] } = data || {};

  return (
    <div className="grid grid-flow-cols grid-cols-12">
      <div className="col-span-6 col-start-4 text-center underline text-sm">
        Countries list
      </div>
      <div className="col-span-10 col-start-2" >
      {
        countries.length ? countries.map(({ name, emoji, currency, code }) => {
          return <div className="text-[10pt]" key={ name }>
            {emoji} - {name} ({currency}) ({code})
          </div>
        }) : loading ? <div>Loading...</div> : null
      }
      </div>
    </div>
  );
}

export default Home;
