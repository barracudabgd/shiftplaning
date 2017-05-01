import moment from 'moment'

export function getDateTime() {
  var weekDaysNmb = 7,
      dateRange,
      startDate,
      endDate,
      weekDays = [];

  // Set Monday to the first day of the week.
  moment.updateLocale('en',  {week : {
    dow : 1
  }});

  startDate = moment().weekday(0).format('DD-MM-YYYY')
  endDate = moment().weekday(6).format('DD-MM-YYYY')
  dateRange = startDate + '-' + endDate

  for(let i = 0; i < weekDaysNmb; i++) {
    weekDays.push({
      dayName: moment().weekday(i).format('dddd'),
      dayDate: moment().weekday(i).format('DD-MM-YYYY')
    })
  }

  return {
    type: 'GET_DATE_TIME',
    payload: {
      dateRange: dateRange,
      weekDays: weekDays,
      weekTracker: 0
    }
  }
}

export function setWeek(direction, weekTracker) {
  var weekDaysNmb = 7,
      dateRange,
      startDate,
      endDate,
      weekDays = [],
      weekTracker = weekTracker;

  weekTracker = direction == 'Next' ? weekTracker+1 : weekTracker-1;

  switch(true) {
    case weekTracker > 0: {
      let date = moment().add(weekTracker, 'weeks');

      startDate = date.weekday(0).format('DD-MM-YYYY')
      endDate = date.weekday(6).format('DD-MM-YYYY')
      dateRange = startDate + '-' + endDate

      for(let i = 0; i < 7; i++) {
        weekDays.push({
          dayName: date.weekday(i).format('dddd'),
          dayDate: date.weekday(i).format('DD-MM-YYYY')
        })
      }
      break
    }
    case weekTracker < 0: {
      let goBack = Math.abs(weekTracker),
          date = moment().subtract(goBack, 'weeks')

      startDate = date.weekday(0).format('DD-MM-YYYY')
      endDate = date.weekday(6).format('DD-MM-YYYY')
      dateRange = startDate + '-' + endDate

      for(let i = 0; i < 7; i++) {
        weekDays.push({
          dayName: date.weekday(i).format('dddd'),
          dayDate: date.weekday(i).format('DD-MM-YYYY')
        })
      }
      break
    }
    case weekTracker == 0: {
      startDate = moment().weekday(0).format('DD-MM-YYYY')
      endDate = moment().weekday(6).format('DD-MM-YYYY')
      dateRange = startDate + '-' + endDate

      for(let i = 0; i < 7; i++) {
        weekDays.push({
          dayName: moment().weekday(i).format('dddd'),
          dayDate: moment().weekday(i).format('DD-MM-YYYY')
        })
      }
      break
    }
  }

  return {
    type: 'SET_WEEK',
    payload: {
      dateRange: dateRange,
      weekDays: weekDays,
      weekTracker: weekTracker
    }
  }
}