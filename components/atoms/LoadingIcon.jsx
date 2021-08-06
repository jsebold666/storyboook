import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import shared from '../consts/shared';

const LoadingIcon = styled(CircularProgress)`
  width: 24px !important;
  height: 24px !important;
  color: ${props => props.color || `${shared['periwinkle']}`} !important;
`;

export default LoadingIcon;
