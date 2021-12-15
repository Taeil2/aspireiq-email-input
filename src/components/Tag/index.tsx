import { ReactComponent as CloseSvg } from './../../assets/close.svg';
import { ReactComponent as ErrorCircleSvg } from './../../assets/error-circle.svg';
import styled from 'styled-components'

const StyledTag = styled.div`
  font-weight: 700;
  background: #EDEDED;
  background: #F3B7BD;
`

const Tag = () => {
  return <StyledTag>Tag <CloseSvg /><ErrorCircleSvg /></StyledTag>
}

export default Tag;