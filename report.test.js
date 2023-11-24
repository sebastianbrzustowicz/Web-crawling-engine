const { sortPages } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sortPages 2 pages', ()=>{
    const input = {
        'http://sebastianbrzustowicz.pythonanywhere.com/offer': 7,
        'http://sebastianbrzustowicz.pythonanywhere.com': 8
    }
    const actual = sortPages(input)
    const expected = [
        ['http://sebastianbrzustowicz.pythonanywhere.com', 8],
        ['http://sebastianbrzustowicz.pythonanywhere.com/offer', 7]
    ]
    expect(actual).toEqual(expected)
})

test('sortPages 5 pages', ()=>{
    const input = {
        'http://sebastianbrzustowicz.pythonanywhere.com/path7': 7,
        'http://sebastianbrzustowicz.pythonanywhere.com/path3': 3,
        'http://sebastianbrzustowicz.pythonanywhere.com/path1': 1,
        'http://sebastianbrzustowicz.pythonanywhere.com/path2': 2,
        'http://sebastianbrzustowicz.pythonanywhere.com': 8
    }
    const actual = sortPages(input)
    const expected = [
        ['http://sebastianbrzustowicz.pythonanywhere.com', 8],
        ['http://sebastianbrzustowicz.pythonanywhere.com/path7', 7],
        ['http://sebastianbrzustowicz.pythonanywhere.com/path3', 3],
        ['http://sebastianbrzustowicz.pythonanywhere.com/path2', 2],
        ['http://sebastianbrzustowicz.pythonanywhere.com/path1', 1]
    ]
    expect(actual).toEqual(expected)
})