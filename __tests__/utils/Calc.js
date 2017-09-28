import 'react-native';
import React from 'react';
import { add } from '../../src/utils/Calc';
import renderer from 'react-test-renderer';

test('add nonnegative integer', () => {
  const val1 = 1;
  const val2 = 1;
  const result = add(val1, val2);
  const expected = val1 + val2;
  expect(expected).toBe(result);
});

test('add nonnegative integer and negative integer', () => {
  const val1 = 1;
  const val2 = -1;
  const result = add(val1, val2);
  const expected = val1 + val2;
  expect(expected).toBe(result);
});

test('add negative integer', () => {
  const val1 = -1;
  const val2 = -1;
  const result = add(val1, val2);
  const expected = val1 + val2;
  expect(expected).toBe(result);
});

test('add zero', () => {
  const val1 = 0;
  const val2 = 0;
  const result = add(val1, val2);
  const expected = val1 + val2;
  expect(expected).toBe(result);
});