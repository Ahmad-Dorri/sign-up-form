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
    default:
      break;
  }
}
