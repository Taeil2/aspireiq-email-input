import InputBox from './../InputBox';
import Tag from './../Tag';
import styled from 'styled-components';
import { useState } from 'react';

const EmailInputDiv = styled.div`
  background: #fdfdfd;
  border-radius: 8px;
  box-shadow: 0px 10px 3px rgb(0 0 0 / 2%);
  padding: 20px;
`

const EmailInput = () => {
  const [ entries, setEntries ] = useState([['theresa@outlook.com', true], ['another', true], ['wrong', false]]);

  return <EmailInputDiv>
      {entries.map((entry, index) => {
        if (entry[1]) {
          return <Tag name={entry[0]} index={index} />
        } else {
          return <Tag name={entry[0]} index={index} valid={false} />
        }
      })}
      <InputBox />
    </EmailInputDiv>;
}

export default EmailInput;