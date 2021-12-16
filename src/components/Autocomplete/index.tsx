import { emails } from './emails';
import styled from 'styled-components'

const AutocompleteWrapper = styled.div`
  background: #fdfdfd;
  color: #1A1818;
  box-shadow: 0px 4px 14px rgba(26, 24, 24, 0.08);
  border-radius: 4px;

  position: absolute;
  background: #fdfdfd;
  width: 294px;
  max-height: 261px;
  
  overflow-y: auto;
  
  .entry {
    font-size: 14px;
    line-height: 24px;
    padding: 7px 21px;
    cursor: default;
    &:hover {
      background: #EFF5F9;
    }
  }
  
  padding-bottom: 15px;
  .fade {
    position: absolute;
    bottom: 15px;
    width: 100%;
    height: 10px;
    background: linear-gradient(180deg, transparent 0%, rgba(253,253,253, 1) 100%);
  }
`

interface AutocompleteProps {
  search: string;
  entries: [string, boolean][];
  setEntries: any;
  setValue: any;
}

const Autocomplete = ({ search, entries, setEntries, setValue }: AutocompleteProps) => {
  if (search === '') {
    return null;
  }
  
  const matches = emails.filter(email => email.includes(search));
  
  if (!matches.length) {
    return null;
  }

  const addEmail = (match: string) => {
    setEntries([...entries, [match, 1]]);
    setValue('');
  }
  
  return <AutocompleteWrapper>
    {
      matches.map((match) => {
        return <div className="entry" onClick={() => addEmail(match)}>{match}</div>
      })
    }
    {/* <div className="fade"></div> */}
  </AutocompleteWrapper>
}

export default Autocomplete;