import { Item } from './item';

export type Menus = {
  id: string;
  first_menu: {
    title: string;
    items?: Item[];
  }
  second_menu: {
    title: string;
    items?: Item[];
  }
  third_menu: {
    title: string;
    items?: Item[];
  }
}
