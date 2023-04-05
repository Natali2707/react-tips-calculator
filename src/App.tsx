import React from 'react';
import { Form } from './components/Form/Form';
import { GlobalStyles } from './ui/GlobalStyles';


export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Form />
    </div>
  )
}



//Хуки-это всегда ф-ции. Хук useState позвол получить доступ к состоянию реакт ,доступ к shadow virtual дому для измен-я состояния у функц. компонентов