import { emails } from './emails';
import styled from 'styled-components'

const AutocompleteWrapper = styled.div`
  background: #fdfdfd;
  border-radius: 8px;
  box-shadow: 0px 10px 3px rgb(0 0 0 / 2%);
  padding: 20px;
`

const Autocomplete = () => {
  console.log('emails', emails);
  
  return <AutocompleteWrapper></AutocompleteWrapper>
}

export default Autocomplete;