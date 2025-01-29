import { describe, it } from 'mocha';
import { expect } from 'chai';
import { validateDate, validateIPV6 } from '../utils/validators';

// test the validateDate function
describe('validateDate', () => {
  it('should return a Date object for a valid date', () => {
    const date = '01/02/2022';
    const result = validateDate(date);
    expect(result).to.be.instanceOf(Date);
  });

  it('should return null for an invalid date', () => {
    const date = '01/02/2022/03';
    const result = validateDate(date);
    expect(result).to.be.null;
  });

  // add an it block to test that it throws an error when given an empty string
    it('should throw an error when given an empty string', () => {
        const date = '';
        expect(() => validateDate(date)).to.throw();
    });
});