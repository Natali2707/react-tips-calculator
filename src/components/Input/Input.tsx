import React, { ChangeEvent } from 'react'
import { StyledInput } from './styles'

interface InputProps {
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
}

export const Input = ({ value, onChange, placeholder }: InputProps) => {
    return (
        <StyledInput type="number" value={value} onChange={onChange} placeholder={placeholder} />
    )
}




























// import React from 'react'
// import { StyledSelect } from '../Form/styles'
// import { InputWrapper, StyledInput } from './styles'

// interface InputProps {
//     billValue: number,
//     // countPersonValue: number,
// }
// export const Input = ({ billValue }: InputProps) => {
//     return (
//         <div>

//             {/* {/* {/* <StyledInput value={dataOrder.billValue} placeholder='Enter bill' /> */}
//             {/* <StyledInput value={value} /> */}
//             {/* <StyledSelect>0$</StyledSelect> */}
//             <StyledInput >
//                 billValue={billValue}
//             </StyledInput>
//             <StyledInput >
//                 {/* countPersonValue={countPersonValue} */}
//             </StyledInput>
//             {/* <StyledInput value={value}></StyledInput> */}
//             {/* <StyledInput value={dataOrder.billValue} placeholder='Enter bill' />
//                 <StyledInput value={dataOrder.countPersonValue} placeholder='Enter  persons' /> */}


//         </div>
//     )
// }
