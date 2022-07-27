import {Container, Margin, ValueContainer} from "./styles.js";

function TotalMoney({display}) {
  const sum = display.reduce((acc, currentValue) => {
    if (currentValue.type === 'entrada') {
      return acc + Number(currentValue.value);
    }
    return acc - Number(currentValue.value);
  }, 0);

  return (
    <Container>
      <Margin>  
        <ValueContainer>
          <p>Valor total:</p>
          <p>$ {sum}</p>
        </ValueContainer>
        <span>O valor se refere ao saldo</span>
      </Margin>
    </Container>
  )
}

export default TotalMoney;