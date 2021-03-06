export function checkBirthDate(value) {
  // Проверка даты рождения, формат DD/MM/YYYY
  return /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/.test(value);
}

export function checkTelephone(value) {
  return /7 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}/i.test(value);
}

export function checkDateIssued(value) {
  return /([0-1]\d|2[0-3])(.[0-5]\d){2}/.test(value);
}

export function isEmailAvailable(value) {
  if (value === "") return true;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value.length > 10);
    }, 500);
  });
}
