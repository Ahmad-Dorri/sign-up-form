export function isInputValid(value, type) {
  switch (type) {
    case 'firstname': {
      const res = /^[a-zA-Z]+$/.exec(value);
      const valid = !!res;
      return valid;
    }
    case 'lastname': {
      const res = /^[a-zA-Z]+$/.exec(value);
      const valid = !!res;
      return valid;
    }
    case 'email': {
      const res =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.exec(
          value
        );
      const valid = !!res;
      return valid;
    }
    case 'phoneNumber': {
      const res = /^09\d{9}$/.exec(value);
      const valid = !!res;
      return valid;
    }
    case 'password': {
      const res = /^[a-z0-9._A-Z]+$/.exec(value);
      const valid = !!res;
      return valid;
    }
    default:
      break;
  }
}
