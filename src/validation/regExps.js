const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const validNameRegex = RegExp(/^[a-zA-Z ]+$/);
const validDateRegex = RegExp(/^\d{4}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])$/);

export {
  validEmailRegex,
  validNameRegex,
  validDateRegex,
}
