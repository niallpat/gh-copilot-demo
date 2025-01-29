// validate date from text input in french format and convert it to a date object
export const validateDate = (date: string) => {
  const dateParts = date.split('/');
  if (dateParts.length !== 3) {
    return null;
  }
  const [day, month, year] = dateParts;
  const parsedDate = new Date(`${year}-${month}-${day}`);
  if (isNaN(parsedDate.getTime())) {
    return null;
  }
  return parsedDate;
};

// function that validates the format of a GUID string
export const validateGUID = (guid: string) => {
    const guidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return guidRegex.test(guid);
};

// function that validates the format of a IPV6 address string
export const validateIPV6 = (ip: string) => {
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipv6Regex.test(ip);
};

// validate phone number from text input and extract the country code
export const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (!phoneRegex.test(phone)) {
        return null;
    }
    return phone.match(/\d+/g)?.join('');
};



