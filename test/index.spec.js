const moment = require('moment')
const isChineseHoliday = require('../lib')

describe('isChineseHoliday', () => {

  test('it should get is chinese holiday', () => {

    expect(isChineseHoliday('2018-10-01')).toBeTruthy()
    expect(isChineseHoliday(moment('2018-09-29'))).toBeFalsy()
    expect(isChineseHoliday(moment('2018-09-17'))).toBeFalsy()

    expect(isChineseHoliday('2018-12-29')).toBeFalsy()
    expect(isChineseHoliday('2019-01-01')).toBeTruthy()

    expect(isChineseHoliday('2019-09-29')).toBeFalsy()
    expect(isChineseHoliday('2019-10-12')).toBeFalsy()

    expect(isChineseHoliday('2019-06-07')).toBeTruthy()
    expect(isChineseHoliday('2019-09-13')).toBeTruthy()
  })

})