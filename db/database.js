const records = [
  {
    username: "paco",
    password: "paco",
  },
];

export function validateUser({ username, password }) {
  return records.some(
    (user) => user.username === username && user.password === password
  );
}

function checkUser(username) {
  return records.some((user) => user.username === username);
}

export function registerUser({ username, password }) {
  if (checkUser(username)) {
    return false;
  } else {
    records.push({ username, password });
    return { username };
  }
}
