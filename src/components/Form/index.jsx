import { useState } from 'react';
import { toast } from 'react-toastify';

import {FormTag, LabelContainer, ValueContainer} from './styles.js';


function Form({listTransactions, setListTransactions, setDisplay}) {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('');
  
  function addTransaction() {
    if (!type || !description || !value) {
      return toast.error('Preencha os campos');
    }
    
    const transaction = {
      id: listTransactions.length + 1,
      description,
      value,
      type
    }

    const update = [...listTransactions, transaction];
    
    setListTransactions(update);
    setDisplay(update);    
  }

  return (
    <div className="formContainer">
      <FormTag onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="description">Descrição</label>
        <input name='description' type="text" maxLength='40' placeholder="Digite aqui sua descrição" onChange={(event) => setDescription(event.target.value)}/>
        <p>Ex: compra de roupas</p>

        <LabelContainer>
          <label htmlFor="value">Valor</label>
          <label htmlFor="type">Tipo de valor</label>
        </LabelContainer>

        <ValueContainer>
          <input name='value' type="number" maxLength='10' onChange={(event) => setValue(event.target.value)}/>

          <select name="type" id="payment" onChange={(event) => setType(event.target.value)}>
            <option value="">Escolha o tipo</option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </ValueContainer>
        <button onClick={addTransaction}>Inserir valor</button>
      </FormTag>
    </div>
  );
};

export default Form;