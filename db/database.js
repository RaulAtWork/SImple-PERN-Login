const records = [
  {
    username: "paco",
    password: "paco",
  },
];

export function validateUser({ username, password }) {
  if (
    records.some(
      (user) => user.username === username && user.password === password
    )
  ) {
    return true;
  } else {
    return false;
  }
}
