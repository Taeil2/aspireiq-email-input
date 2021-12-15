import Autocomplete from './../Autocomplete';
import styled from 'styled-components'

const Input = styled.input`
  background: #fdfdfd;
  border-radius: 8px;
  box-shadow: 0px 10px 3px rgb(0 0 0 / 2%);
  padding: 20px;
`

const TextInput = () => {
  return <div>
      <Input type="text" placeholder='Enter recipients...' />
      <Autocomplete />
    </div>
}

export default TextInput;