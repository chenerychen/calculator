// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add } from '../utilities.js';
import { subtract } from '../utilities.js'; 
import { multiply } from '../utilities.js'; 
import { divide } from '../utilities.js'; 

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // const expected = true;
    const x = 1; 
    const y = 2; 
    const sum = 3; 
    const sub = -1;
    const multi = 2; 
    const div = 0.5; 

    //Act 
    // Call the function you're testing and set the result to a const
    // const actual = false;
    const result = add(x, y);
    const subresult = subtract(x, y); 
    const multiresult = multiply(x, y); 
    const divisionresult = divide(x, y); 
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
    expect.equal(subresult, sub);
    expect.equal(multiresult, multi);
    expect.equal(divisionresult, div); 
});
