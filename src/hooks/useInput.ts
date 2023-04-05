import { ChangeEvent, useCallback, useState } from "react";

export const useInput = (initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    //чтобы узнавать самое свежее значение исп ф-цию ончэйндж
    setValue(event.target.value); //устанавливает самое свежее значение
  }, []);

  return {
    value,
    onChange,
  };
};

// useCallback Это один из способов оптимизации, применяемый для увеличения скорости выполнения компьютерных программ. Перед вызовом функции проверяется, вызывалась ли функция ранее: если не вызывалась,
//  то функция вызывается, и результат её выполнения сохраняется; если вызывалась, то используется сохранённый результат.
