import axios from 'axios'
import { useQuery } from 'react-query'
import Card, { ICharacter }  from '../../components/Card';
import { Container } from './styles';

const fetchCharacters = async ()=>{
  return axios.get("https://www.breakingbadapi.com/api/characters");
}

function App() {
  const {isLoading, data,isError, error} = useQuery("characters",fetchCharacters);
  
  if(isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>Error: {error.message}</div>
  }
  return (
    <Container>
      {
        data?.data.map((character:ICharacter)=>{
          return (
            <Card 
              key={character.name}
              name={character.name} 
              birthday={character.birthday}
              img={character.img} 
              nickname={character.nickname}  
              />
          )
        })
      }
    </Container>
  )
}

export default App
