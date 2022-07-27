import Card from '../Card/index.jsx';
import EmptyCard from '../EmptyCard/index.jsx';
import {Container, Header, NoMovesTitle} from './styles.js'

function List({listTransactions, setListTransactions, display, setDisplay}) {
  function filterAll() {
    setDisplay([...listTransactions]);
  };

  function filterEntry() {
    const entry = listTransactions.filter((item) => item.type === 'entrada');
    setDisplay([...entry]);
  };

  function filterExpense() {
    const expense = listTransactions.filter((item) => item.type === 'saida');
    setDisplay([...expense]);
  }

  return (
    <Container>
      <Header>
        <h2>Resumo financeiro</h2>

        <div>
          <button onClick={filterAll}>Todos</button>
          <button onClick={filterEntry}>Entradas</button>
          <button onClick={filterExpense}>Despesas</button>
        </div>
      </Header>

      <div>
        {
          listTransactions.length !== 0
            ?            
            display.map((item, index) => {
              return (
                <Card 
                  key={index}
                  id={index}
                  item={item}
                  display={display}
                  setDisplay={setDisplay}
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}/>
            )
          })          
        
            :
            <>
              <NoMovesTitle>Você ainda não possui nenhum lançamento</NoMovesTitle>
              <EmptyCard/>
              <EmptyCard/>
              <EmptyCard/>
            </>       
        }

      </div>

    </Container>
  )
};

export default List;