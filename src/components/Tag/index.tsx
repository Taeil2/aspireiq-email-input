// import { ReactComponent as CloseSvg } from './../../assets/close.svg'; // this had some strange styling errors
import { ReactComponent as ErrorCircleSvg } from './../../assets/error-circle.svg';
import closeIcon from './../../assets/close.png';
import styled from 'styled-components';

const StyledTag = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 14px;
  cursor: default;
  padding: 5px 8px;
  border-radius: 6px;
  position: relative;
  padding-right: 25px;
  line-height: 1em;
  margin: 14px 0;
  margin-right: 2px;

  .close-icon {
    display: inline-block;
    display: none;
    position: absolute;
    right: 8px;
    top: 6px;
    cursor: pointer;
    width: 12px;
    height: 12px;
  }

  .error-icon {
    width: 13px;
    height: 13px;
    margin-left: 5px;
    display: inline-block;
    vertical-align: bottom;
  }

  &:hover {
    background: #EDEDED;
    .close-icon {
      display: inline-block;
    }
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
  entries: [string, boolean][];
  setEntries: any;
}

const Tag = ({name, index, valid = true, entries, setEntries}: TagProps) => {
  const removeTag = () => {
    const entriesClone = [...entries];
    entriesClone.splice(index, 1);
    setEntries(entriesClone);
  }

  return (
    <>
      { valid
        ? <StyledTag>{name}<img src={closeIcon} alt="remove email" className="close-icon" onClick={removeTag}/></StyledTag>
        : <StyledTag className="invalid">{name}<ErrorCircleSvg className="error-icon" /><img src={closeIcon} alt="remove email" className="close-icon" onClick={removeTag} /></StyledTag>
      }
    </>
    );
}

export default Tag;