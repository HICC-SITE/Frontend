import STYLE from '@constants/style';
import hexToRGBA from '@utils/hexToRgba';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem 2rem;
  border: none;
  border-radius: 1.2rem;

  & > p {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.typography.common.button1};
  }

  background: ${(props) => hexToRGBA(props.theme.colors.grey002, 0.3)};

  z-index: ${STYLE.Z_INDEX.COMMON};
  background-clip: padding-box;

  &::after {
    position: absolute;
    top: 0rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    padding: 0.12rem;
    background: linear-gradient(
      to bottom,
      ${(props) => hexToRGBA(props.theme.colors.white, 0.5)} 0%,
      ${(props) => hexToRGBA(props.theme.colors.white, 0.1)} 100%
    );
    content: '';
    z-index: ${STYLE.Z_INDEX.HIDE};
    border-radius: 1.2rem;
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
  }
`;

export default ButtonStyle;
