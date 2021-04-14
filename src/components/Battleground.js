import { useState, useEffect } from 'react';
import axios from 'axios';

const Battleground = () => {
  const [team, setTeam] = useState();
  const [enemyTeam, setEnemyTeam] = useState();
  const [usrLvl, setUsrLvl] = useState(1);
  useEffect(() => {
    const types = Array(usrLvl + 2).fill('');
    const getTeam = async () => {
      try {
        const typesResults = await Promise.all(
          types.map((type, i) => axios.get(`https://pokeapi.co/api/v2/type/${i + 1}`))
        );
        const pokemonsResults = await Promise.all(
          typesResults.map(({ data: { pokemon } }) =>
            axios.get(pokemon[Math.floor(Math.random() * pokemon.length + 1)].pokemon.url)
          )
        );
        const pokemonsForTeams = pokemonsResults.map(({ data }) => ({ ...data }));
        return pokemonsForTeams;
      } catch (error) {
        console.log(error);
      }
    };
    getTeam().then(pokemons => setTeam(pokemons));
    getTeam().then(pokemons => setEnemyTeam(pokemons));
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {team ? (
            team.map(p => (
              <div key={p.id}>
                <img src={p.sprites.front_default} style={{ transform: 'scaleX(-1)' }} />
                <div>{p.name}</div>
              </div>
            ))
          ) : (
            <div>Loading</div>
          )}
        </div>
        <div className='col'>
          {enemyTeam ? (
            enemyTeam.map(p => (
              <div key={p.id}>
                <img src={p.sprites.front_default} />
                <div>{p.name}</div>
              </div>
            ))
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Battleground;
