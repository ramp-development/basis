import { groups } from './groups';
import { mouse } from './mouse';
import { nav } from './nav';

export const animations = () => {
  // setTimeout(groups, 1000);
  mouse();
  nav();
  groups();
};
