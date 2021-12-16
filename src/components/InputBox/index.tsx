import Autocomplete from './../Autocomplete';
import styled from 'styled-components';
import { useState } from 'react';
import { validateEmail } from './../../utils/validateEmail';

const TextInputWrapper = styled.div`
  display: inline-block;
  /* position: relative; */
  width: 100%;
  min-width: 100px;
  input {
    border: 0;
    width: 100%;
    font-size: 14px;
    height: 50px;
    caret-color: #3996e0;
    color: #1A1818;
    &::placeholder {
      color: #bdbdbd;
    }
    &:focus {
      outline: none;
    }
  }
`

interface TextInputProps {
  entries: [string, boolean][];
  setEntries: any;
}

const TextInput = ({ entries, setEntries }: TextInputProps) => {
  const [ value, setValue ] = useState<string>('');

  let placeholderText;
  if (entries.length === 0) {
    placeholderText = 'Enter recipients...';
  } else {
    placeholderText = '';
  }

  const handleKeyDown = (e: any) => {
    // when hitting enter, space, or tab
    if (e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 9) {
      e.preventDefault();
      if (value !== '') {
        if (validateEmail(value)) {
          setEntries([...entries, [value, 1]]);
        } else {
          setEntries([...entries, [value, 0]]);
        }
      }
      setValue('');
    }
    // if hitting backspace on an empty value, delete the last item
    if (e.keyCode === 8 && value === '') {
      const entriesClone = [...entries];
      entriesClone.pop();
      setEntries(entriesClone);
    }
  }

  return <TextInputWrapper>
      {/* <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholderText} /> */}
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} placeholder={placeholderText} />
      <Autocomplete search={value} entries={entries} setEntries={setEntries} setValue={setValue} />
    </TextInputWrapper>
}

export default TextInput;