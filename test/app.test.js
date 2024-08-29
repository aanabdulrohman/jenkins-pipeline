import { expect } from 'chai';

// Misalkan ini adalah fungsi yang ingin kita uji di index.js
import { isTrue, sum } from '../index.js';

describe('Simple App Test', function() {
    it('should return true', function() {
        expect(isTrue()).to.be.true;
    });

    it('should return sum of two numbers', function() {
        expect(sum(2, 3)).to.equal(5);
    });
});
