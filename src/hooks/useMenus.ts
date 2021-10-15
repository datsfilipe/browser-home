import { useEffect, useState } from 'react';
import { v4 as uuid} from 'uuid';
import { Menus } from '../types/menus';
import { database } from '../services/firebase';
import { ref, set, get, child } from '@firebase/database';
import { useAuth } from '../hooks/useAuth';

export function useMenus() {
  const defaultMenusTemplate: Menus = {
    id: '',
    first_menu: {
      title: 'Social'
    },
    second_menu: {
      title: 'Study'
    },
    third_menu: {
      title: 'Games'
    }
  }

  const { user } = useAuth()

  const [menus, setMenus] = useState<Menus>(defaultMenusTemplate)

  useEffect(() => {
    if (user.id.length < 1) return;

    const dbRef = ref(database);
    get(child(dbRef, `menus/${user.id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        if (menus != snapshot.val()) {
          setMenus({
            id: snapshot.child('id').val(),
            first_menu: {
              title: snapshot.child('first_menu').child('title').val(),
            },
            second_menu: {
              title: snapshot.child('second_menu').child('title').val(),
            },
            third_menu: {
              title: snapshot.child('third_menu').child('title').val(),
            },
          })
        }
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [
    menus, user.id
  ]);

  function handleCreateMenus (authorId: string) {
    if (authorId.length < 1) return;

    const dbRef = ref(database);
    get(child(dbRef, `menus/${authorId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log('data already exists...');

        if (menus.id.length < 1) {
          if (menus != snapshot.val()) {
            setMenus({
              id: snapshot.child('id').val(),
              first_menu: {
                title: snapshot.child('first_menu').child('title').val(),
              },
              second_menu: {
                title: snapshot.child('second_menu').child('title').val(),
              },
              third_menu: {
                title: snapshot.child('third_menu').child('title').val(),
              },
            })
          }
        }
      } else {
        set(ref(database, 'menus/' + authorId), {
          id: uuid(),
        })
        set(ref(database, 'menus/' + authorId + '/first_menu'), {
          title: defaultMenusTemplate.first_menu.title,
        });
        set(ref(database, 'menus/' + authorId + '/second_menu'), {
          title: defaultMenusTemplate.second_menu.title,
        });
        set(ref(database, 'menus/' + authorId + '/third_menu'), {
          title: defaultMenusTemplate.third_menu.title,
        });
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  function handleUpdateMenuTitle (authorId: string, menuIndex: number, titleValue: string) {
    if (authorId.length < 1) return;
    if (titleValue.length < 1) {
      console.log('Value not accepted');
      return;
    };

    try {
      if (menuIndex === 0) {
        set(ref(database, 'menus/' + authorId + '/first_menu'), {
          title: titleValue,
        });
      } else if (menuIndex === 1) {
        set(ref(database, 'menus/' + authorId + '/second_menu'), {
          title: titleValue,
        });
      } else if (menuIndex === 2) {
        set(ref(database, 'menus/' + authorId + '/third_menu'), {
          title: titleValue,
        });
      } else {
        throw new Error('menuIndex value not accepted');
      }
    } catch(err) {
      console.error(err);
    }
  }

  const value = { menus, handleUpdateMenuTitle, handleCreateMenus }

  return value;
}
