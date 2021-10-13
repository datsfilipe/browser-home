  function handleCreateMenus (authorId: string) {
    if (authorId.length < 1) return;

    const dbRef = ref(database);
    get(child(dbRef, `menus/${authorId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log('data already exists...');

        if (menus.id.length < 1) {
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
