const isFirstNameValid = (firstName) => {
  const re = /^[a-zA-Z0-9_ ]{3,30}$/;
  return re.test(String(firstName).toLowerCase());
};

const isLastNameValid = (lastName) => {
  const re = /^[a-zA-Z0-9_ ]{3,30}$/;
  return re.test(String(lastName).toLowerCase());
};

const isOccupationValid = (occupation) => {
  const re = /^[a-zA-Z0-9_ ]{3,30}$/;
  return re.test(String(occupation).toLowerCase());
};

export { isFirstNameValid, isLastNameValid, isOccupationValid };
