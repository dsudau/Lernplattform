export function mapItems(items) {
  items.map((item) => {
    return item;
  });
}
export function isUserNameExisting(items, name) {
  let isExisting = false;
  items.map((item) => {
    if (item.name == name) {
      isExisting = true;
    }
  });
  return isExisting;
}
export function isEmailExisting(items, email) {
  let isExisting = false;
  items.map((item) => {
    if (item.email == email) {
      isExisting = true;
    }
  });
  return isExisting;
}
export function isPasswordExistingByUserName(items, userName, password) {
  let isExisting = false;
  items.map((item) => {
    if (item.password == password && item.name == userName) {
      isExisting = true;
    }
  });
  return isExisting;
}
export function isPasswordExistingByEmail(items, email, password) {
  let isExisting = false;
  items.map((item) => {
    if (item.password == password && item.email == email) {
      isExisting = true;
    }
  });
  return isExisting;
}
export function getIDByEmailAndPassword(items, email, password) {
  let id = 0;
  items.map((item) => {
    if (item.email == email && item.password == password) {
      id = item.id;
    }
  });
  return id;
}
export function getIDByUserNameAndPassword(items, userName, password) {
  let id = 0;
  items.map((item) => {
    if (item.name == userName && item.password == password) {
      id = item.id;
    }
  });
  return id;
}
export function getUserNameByID(items, id) {
  let userName = "";
  items.map((item) => {
    if (item.id == id) {
      userName = item.name;
    }
  });
  return userName;
}
export function getEmailByID(items, id) {
  let email = "";
  items.map((item) => {
    if (item.id == id) {
      email = item.email;
    }
  });
  return email;
}
export function getRoleIDByRoleName(items, name) {
  let id = 0;
  items.map((item) => {
    if (item.name == name) {
      id = item.id;
    }
  });
  return id;
}
export function getNewID(items) {
  if (items) {
    let newID = items.length + 1;
    let isExisting = true;
    while (isExisting) {
      isExisting = false;
      items.map((item) => {
        if (item.id == newID) {
          newID += 1;
          isExisting = true;
        }
      });
    }
    return newID;
  }
  return null;
}
