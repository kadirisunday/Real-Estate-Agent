import { useEffect, useState } from 'react';
import './main-page.css';
import Header from './header';

function App() {
  //load data
  const [allHouses, setAllHouses] = useState([]);
  useEffect(()=> {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);
  return (
    <div className="container">
     <Header subtitle="Providing houses all over the world"  title="some titles"/>
    </div>
  );
}

export default App;
