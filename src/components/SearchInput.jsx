import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';

export default function SearchInput({champList, setchampList}) {
    const [Champs, setChamps] = useState({})
    const [inputValue, setInputValue] = useState('');
    const options = []
    const [value, setValue] = useState(options[0]);

    const getData = async () => {
        await axios.get('http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json')
          .then((res) => {
              const data = res.data.data
              setChamps(data)
            })
        }
        
        useEffect(() => {
            getData()
        }, [])
        
        function champs() {
            Object.keys(Champs).map(champ => (
                options.push(champ)
            ))
        }


    
    champs()


    
    
    function submit() {
        const listSearch = Object.values(Champs).filter(champ => champ.name.toLowerCase().includes(inputValue.toLocaleLowerCase()))
        setchampList(listSearch)
    }
    
    useEffect(() => {
        submit()
    }, [inputValue])
    


  return (
    <Container>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Champion" />}
      />
      <br />
    </Container>
  );
}