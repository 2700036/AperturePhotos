class JsonPlaceHolderApi {
  getUsers = () => {
    return fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
      .then((res) => {
        return res.map(({ id, name, username }) => {
          return { id, name, username };
        });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };
  getAlbums = () => {
    return fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };
  getPhotos = () => {
    return fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  getData = () => {
    return Promise.all([this.getUsers(), this.getAlbums(), this.getPhotos()]).then((res) => {
      const [users, albums, photos] = res;
      const filledAlbums = albums.map((el) => {
        const albumsPhotos = photos.filter(({ albumId }) => albumId === el.id);
        return { ...el, photos: albumsPhotos };
      });
      return users.map((el) => {
        const usersAlbums = filledAlbums.filter(({ userId }) => userId === el.id);
        return { ...el, albums: usersAlbums };
      });
    });
  };
}

const jsonPlaceHolderApi = new JsonPlaceHolderApi();

export default jsonPlaceHolderApi;
