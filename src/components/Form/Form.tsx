import React, { ChangeEvent, useEffect, useState } from 'react'
import { Input } from '../Input/Input'
import { Container, InputWrapper, StyledForm, Subtitle, Title, Total } from './styles'
import { SingleValue } from 'react-select';
import { Button } from '../Button/Button';
import { useInput } from '../../hooks/useInput';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { Option } from '../../types/types';


const options: Option[] = [
    { value: 10, label: '10%' },
    { value: 15, label: '15%' },
    { value: 20, label: '20%' },
]

export const Form = () => {
    const billValue = useInput();
    const countPerson = useInput();
    const [select, setSelect] = useState(options[0].value);
    const [total, setTotal] = useState(((0).toFixed(2)));
    const [isDisabled, setIsDisabled] = useState(true);

    const handleSelect = (value: number) => {
        setSelect(value);
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (billValue.value && countPerson.value) {
            setTotal(`${((+billValue.value) / (+countPerson.value) * (1 + select / 100)).toFixed(2)}`)
        }
    }


    const onHandleChange = (event: SingleValue<Option>) => {
        if (event) {
            handleSelect(event.value);
        }
    };


    useEffect(() => {
        if (billValue.value && countPerson.value) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [billValue, countPerson]);


    return (
        <Container>
            <StyledForm onSubmit={handleSubmit}>
                <Title >Welcome to App</Title>
                <Subtitle>Let’s go calculate your tips</Subtitle>
                <InputWrapper>
                    <Input value={billValue.value} onChange={billValue.onChange} placeholder='Enter bill' />
                    <Input {...countPerson} placeholder='Enter persons' />
                    <CustomSelect onChange={onHandleChange} options={options}
                        defaultValue={options[0]} />
                </InputWrapper>
                <Total>Total:{total} $</Total>
                <Button disabled={isDisabled} />
            </StyledForm>
        </Container>
    )
}




