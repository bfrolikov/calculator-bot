const checkHello = (message) => {
  if (message.search(/привет/mi) !== -1)
    return true;
  else
    return false;

};

const checkHelp = (message) => {
  if (message.search(/помощь/mi) !== -1)
    return true;
  else
    return false;
};

module.exports = { checkHello, checkHelp };
