import InputBox from './../InputBox';
import Tag from './../Tag';
import styled from 'styled-components';
import { useState } from 'react';

const EmailInputDiv = styled.div`
  display: flex;
  width: 400px;
  background: #fdfdfd;
  border-radius: 8px;
  box-shadow: 0px 10px 3px rgb(0 0 0 / 2%);
  padding: 0 13px;

  overflow-x: auto;
`;

const EmailInput = () => {
  // entries are in the format: [ name, valid ]
  const [ entries, setEntries ] = useState<[string, boolean][]>([['theresa@outlook.com', true], ['another', true], ['wrong', false]]);
  // const [ entries, setEntries ] = useState<[string, boolean][]>([]);

  return <EmailInputDiv>
      {entries.map((entry, index) => {
        if (entry[1]) {
          return <Tag name={entry[0]} index={index} key={index} entries={entries} setEntries={setEntries} />
        } else {
          return <Tag name={entry[0]} index={index} key={index} valid={false} entries={entries} setEntries={setEntries} />
        }
      })}
      <InputBox entries={entries} setEntries={setEntries} />
    </EmailInputDiv>;
}

export default EmailInput;