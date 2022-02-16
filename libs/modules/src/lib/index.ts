import { animation } from './animation';
import { background } from './background';
import { border } from './border';
import { container } from './container';
import { cursor } from './cursor';
import { filter } from './filter';
import { flex } from './flex';
import { font } from './font';
import { gradient } from './gradient';
import { grid } from './grid';
import { outline } from './outline';
import { shadow } from './shadow';
import { sizing } from './sizing';
import { spacing } from './spacing';
import { transform } from './transform';
import { transition } from './transition';

export {
  animation,
  background,
  border,
  container,
  cursor,
  filter,
  flex,
  font,
  gradient,
  grid,
  outline,
  shadow,
  sizing,
  spacing,
  transform,
  transition,
};

const modules = {
  ...animation,
  ...background,
  ...border,
  ...container,
  ...cursor,
  ...filter,
  ...flex,
  ...font,
  ...gradient,
  ...grid,
  ...outline,
  ...shadow,
  ...sizing,
  ...spacing,
  ...transform,
  ...transition,
};

export default modules;
