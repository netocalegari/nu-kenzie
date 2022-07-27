import { useState } from "react";

import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

import { MainContainer } from "./style";
import TotalMoney from "./components/TotalMoney";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [display, setDisplay] = useState([...listTransactions]);
  console.log(display, display.length)
  console.log(listTransactions, listTransactions.length)


  return (

    
      isLoggedIn ? 
      <>
        <div className="App">
          <Header setIsLoggedIn={setIsLoggedIn}/>
          <MainContainer>
            <Form 
              listTransactions={listTransactions} 
              setListTransactions={setListTransactions}
              setDisplay={setDisplay}/>
            <List 
              display={display} 
              setDisplay={setDisplay} 
              listTransactions={listTransactions} 
              setListTransactions={setListTransactions}/>
            {
              listTransactions.length > 0 
              && <TotalMoney display={display}/>                    
            }
          </MainContainer>
        </div>
      </>

      :

      <LandingPage setIsLoggedIn={setIsLoggedIn}/>
    
   
  );
}

export default App;
