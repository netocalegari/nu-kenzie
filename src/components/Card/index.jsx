import { Container, InfoContainer, Type } from "./styles.js";
import {FaTrash} from 'react-icons/fa';

function Card({item, display, setDisplay, listTransactions, setListTransactions}) {
  function deleteCard() {
    const transactions = listTransactions.filter((transaction) => transaction.id !== item.id)
    setDisplay(transactions);
    setListTransactions(transactions);
  }

  

  return (
    <Container>
      <InfoContainer>
        <h2>{item.description}</h2>
        <span>$ {item.value}</span>
        <button onClick={() => deleteCard()}><FaTrash/></button>
      </InfoContainer>
      <Type>
        <p>{item.type}</p>
      </Type>
    </Container>
  )
}

export default Card;