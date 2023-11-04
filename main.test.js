import { describe, expect, test } from "@jest/globals";

import {Bissexto} from "./main.js";

describe('Leap year', () => {
  test('Should return true if is a Leap year', () => {
    expect(Bissexto(1600)).toBe(true)
    expect(Bissexto(1732)).toBe(true)
    expect(Bissexto(1888)).toBe(true)
    expect(Bissexto(1944)).toBe(true)
    expect(Bissexto(2008)).toBe(true)
  })

  test('Should return false if is not a Leap year', () => {
    expect(Bissexto(1742)).toBe(false)
    expect(Bissexto(1889)).toBe(false)
    expect(Bissexto(1951)).toBe(false)
    expect(Bissexto(2011)).toBe(false)
  })
})