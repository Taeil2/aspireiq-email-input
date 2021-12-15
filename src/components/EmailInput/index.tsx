import InputBox from './../InputBox';
import Tag from './../Tag';
import styled from 'styled-components';

const EmailInputDiv = styled.div`
  background: #fdfdfd;
  border-radius: 8px;
  box-shadow: 0px 10px 3px rgb(0 0 0 / 2%);
  padding: 20px;
`

const EmailInput = () => {
  return <EmailInputDiv>Enter Recipients <InputBox /><Tag /></EmailInputDiv>
}

export default EmailInput;