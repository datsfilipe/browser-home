import { useEffect, useState } from 'react'
import { v4 as uuid} from 'uuid'
import { Menus } from '../types/menus'
import { database } from '../services/firebase'
import { ref, set, get, child } from '@firebase/database'
import { useAuth } from '../hooks/useAuth'
import { useToast } from '../hooks/useToast'
import { Item } from '../types/item'
import { push } from 'firebase/database'

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
  const { notify } = useToast()

  const [menus, setMenus] = useState<Menus>(defaultMenusTemplate)

  useEffect(() => {
    if (user.id.length < 1) return

    const dbRef = ref(database)
    get(child(dbRef, `menus/${user.id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        if (menus != snapshot.val()) {
          setMenus({
            id: snapshot.child('id').val(),
            first_menu: {
              title: snapshot.child('first_menu').child('title').val(),
              items: snapshot.child('first_menu').child('items').val(),
            },
            second_menu: {
              title: snapshot.child('second_menu').child('title').val(),
              items: snapshot.child('second_menu').child('items').val(),
            },
            third_menu: {
              title: snapshot.child('third_menu').child('title').val(),
              items: snapshot.child('third_menu').child('items').val(),
            },
          })
        }
      }
    }).catch((error) => {
      notify(error.message, '❗')
      console.log(error)
    })
  }, [
    menus, user.id
  ])

  function handleCreateMenus (authorId: string) {
    if (authorId.length < 1) return

    const dbRef = ref(database)
    get(child(dbRef, `menus/${authorId}`)).then((snapshot) => {
      if (snapshot.exists()) {

        if (menus.id.length < 1) {
          if (menus != snapshot.val()) {
            setMenus({
              id: snapshot.child('id').val(),
              first_menu: {
                title: snapshot.child('first_menu').child('title').val(),
                items: snapshot.child('first_menu').child('items').val(),
              },
              second_menu: {
                title: snapshot.child('second_menu').child('title').val(),
                items: snapshot.child('second_menu').child('items').val(),
              },
              third_menu: {
                title: snapshot.child('third_menu').child('title').val(),
                items: snapshot.child('third_menu').child('items').val(),
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
        })
        set(ref(database, 'menus/' + authorId + '/second_menu'), {
          title: defaultMenusTemplate.second_menu.title,
        })
        set(ref(database, 'menus/' + authorId + '/third_menu'), {
          title: defaultMenusTemplate.third_menu.title,
        })
      }
    }).catch((error) => {
      notify(error.message, '❗')
      console.log(error)
    })
  }

  function handleUpdateMenuTitle (authorId: string, menuIndex: number, titleValue: string) {
    if (authorId.length < 1) {
      notify('Você precisa efetuar o login para realizar essa ação', '💁')
      return
    }
    if (titleValue.length < 1) {
      notify('O valor informado não é aceitável', '🙅‍♀️')
      return
    }

    try {
      if (menuIndex === 0) {
        set(ref(database, 'menus/' + authorId + '/first_menu'), {
          title: titleValue,
        })
      } else if (menuIndex === 1) {
        set(ref(database, 'menus/' + authorId + '/second_menu'), {
          title: titleValue,
        })
      } else if (menuIndex === 2) {
        set(ref(database, 'menus/' + authorId + '/third_menu'), {
          title: titleValue,
        })
      } else {
        throw new Error('menuIndex value not accepted')
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(err: any) {
      notify(err.message, '❗')
      return
    }
  }

  function handleAddMenuItem (authorId: string, menuIndex: number, itemValue: Item) {
    if (authorId.length < 1) {
      notify('Você precisa efetuar o login para realizar essa ação', '💁')
      return
    }
    if (itemValue.name.length < 1 || itemValue.url.length < 1) {
      notify('O valor informado não é aceitável', '🙅‍♀️')
      return
    }

    try {
      if (menuIndex === 0) {
        push(ref(database, 'menus/' + authorId + '/first_menu' + '/items'), {
          id: itemValue.id,
          name: itemValue.name,
          url: itemValue.url
        })
      } else if (menuIndex === 1) {
        push(ref(database, 'menus/' + authorId + '/second_menu' + '/items'), {
          id: itemValue.id,
          name: itemValue.name,
          url: itemValue.url
        })
      } else if (menuIndex === 2) {
        push(ref(database, 'menus/' + authorId + '/third_menu' + '/items'), {
          id: itemValue.id,
          name: itemValue.name,
          url: itemValue.url
        })
      } else {
        throw new Error('menuIndex value not accepted')
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(err: any) {
      notify(err.message, '❗')
      return
    }
  }

  const value = { menus, handleUpdateMenuTitle, handleCreateMenus, handleAddMenuItem }

  return value
}
