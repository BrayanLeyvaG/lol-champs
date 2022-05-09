import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import SearchInput from './components/SearchInput'


function App() {

  const [champList, setchampList] = useState([])

  const getData = async () => {
    await axios.get('http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json')
      .then((res) => {
        const data = res.data.data
        setchampList(data)
      })
  }
  
  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="App">
      <Navbar/>
      <SearchInput champList={champList} setchampList={setchampList}/>
      <Cards champList={champList}/>
    </div>
  )
}

export default App
