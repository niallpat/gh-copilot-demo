import {describe, it} from 'mocha';
import {expect} from 'chai';

import {validateDate, validateIPV6} from '../utils/validators';

// test the validateDate function
describe('validateDate', () => {
  it('should return a date object when the input is a valid date', () => {
    const date = '01/12/2022';
    const result = validateDate(date);
    expect(result).to.be.a('Date');
  });
  it('should return null when the input is not a valid date', () => {
    const date = '01-12-2022';
    const result = validateDate(date);
    expect(result).to.be.null;
  });
});