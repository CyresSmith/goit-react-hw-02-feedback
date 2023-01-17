import styled from 'styled-components';
import {
  color,
  typography,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  variant,
} from 'styled-system';

const Box = styled('div')(
  color,
  typography,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  variant({
    variants: {
      container: {
        width: 'container',
        ml: 'auto',
        mr: 'auto',
        pl: [5],
        pr: [5],
      },

      section: {
        pt: [6],
        pb: [6],
        display: 'flex',
      },

      widget: {
        p: [5],
        borderRadius: [16],
      },
    },
  })
);

export default Box;