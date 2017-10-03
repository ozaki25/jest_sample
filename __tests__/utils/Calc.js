import 'react-native';
import React from 'react';
import { add } from '../../src/utils/Calc';
import renderer from 'react-test-renderer';

describe('add two numbers', () => {
  test('both positive numbers', () => {
    const val1 = 1;
    const val2 = 1;
    const result = add(val1, val2);
    const expected = val1 + val2;
    expect(expected).toBe(result);
  });

  test('positive number and negative number', () => {
    const val1 = 1;
    const val2 = -1;
    const result = add(val1, val2);
    const expected = val1 + val2;
    expect(expected).toBe(result);
  });

  test('both negative numbers', () => {
    const val1 = -1;
    const val2 = -1;
    const result = add(val1, val2);
    const expected = val1 + val2;
    expect(expected).toBe(result);
  });

  test('both zero', () => {
    const val1 = 0;
    const val2 = 0;
    const result = add(val1, val2);
    const expected = val1 + val2;
    expect(expected).toBe(result);
  });
});