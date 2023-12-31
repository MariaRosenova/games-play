const baseUrl = "https://games-server-65236baf6c3c.herokuapp.com/data";

export function getAll() {
  return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc`).then((res) =>
    res.json()
  );
}

export function getOne(id) {
  return (fetch(`${baseUrl}/games/${id}`).then((res) => res.json()));
}

export function getLatest() {
    return (fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`).then(res => res.json()));
}