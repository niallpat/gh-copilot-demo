// validate date from text input in french format and convert it to a date object
export const validateDate = (date: string): Date | null => {
  const dateParts = date.split('/');
  if (dateParts.length !== 3) return null;
  const [day, month, year] = dateParts.map((part) => parseInt(part, 10));
  if (isNaN(day) || isNaN(month) || isNaN(year)) return null;
  return new Date(year, month - 1, day);
};

//function that validates the format of a GUID string
export function validateGUID(guid: string): boolean {
    const guidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i;
    return guidRegex.test(guid);
}

// function that validates the format of a IPV6 address string
export function validateIPV6(ipv6: string): boolean {
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})$/i;
    return ipv6Regex.test(ipv6);
}

// validate phone number from text input and extract the country code
export function validatePhoneNumber(phoneNumber: string): string | null {
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (!phoneRegex.test(phoneNumber)) return null;
    return phoneNumber.split(' ')[0];
}

