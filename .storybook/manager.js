import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: themes.dark,
  selectedPanel: undefined,
});