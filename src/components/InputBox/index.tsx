import Autocomplete from './../Autocomplete';
import { execSync } from 'child_process';
import { isAnyArrayBuffer } from 'util/types';
import styled from 'styled-components';
import { useState } from 'react';

const TextInputWrapper = styled.div`
  display: inline-block;
  position: relative;
  input {
    border: 0;
  }
`

interface TextInputProps {
  entries: [string, boolean][];
  setEntries: any;
}

const TextInput = ({ entries, setEntries }: TextInputProps) => {
  const [ value, setValue ] = useState<string>('');

  return <TextInputWrapper>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter recipients...' />
      <Autocomplete search={value} entries={entries} setEntries={setEntries} />
    </TextInputWrapper>
}

export default TextInput;