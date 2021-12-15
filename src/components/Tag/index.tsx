import { ReactComponent as CloseSvg } from './../../assets/close.svg';
import { ReactComponent as ErrorCircleSvg } from './../../assets/error-circle.svg';
import styled from 'styled-components'

const StyledTag = styled.div`
  font-weight: 700;
  &:hover {
    background: #EDEDED;
  }
  &.invalid {
    background: #F3B7BD;
    &:hover {
      background: #F3B7BD;
    }
  }
`

interface TagProps {
  name: string;
  index: number;
  valid?: boolean;
}

const Tag = ({name, index, valid = true}: TagProps) => {
  return (
    <>
      { valid
        ? <StyledTag>{name}<CloseSvg /></StyledTag>
        : <StyledTag className="invalid">{name}<ErrorCircleSvg /><CloseSvg /></StyledTag>
      }
    </>
    );
}

export default Tag;