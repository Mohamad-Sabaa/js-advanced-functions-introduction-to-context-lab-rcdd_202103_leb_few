// Your code here
function createEmployeeRecord (row) {
   return {
     firstName: row[0],
     familyName: row[1],
     title: row[2],
     payPerHour: row[3],
     timeInEvents: [],
     timeOutEvents: []
   }
}

 function createEmployeeRecords(data) {
   return data.map(row => createEmployeeRecord(row))
 }

 function createTimeInEvent(obj, fullDate) {
   let [date, hour] = fullDate.split(' ')
   obj.timeInEvents.push({
     type: "TimeIn",
     date,
     hour: parseInt(hour)
   })
   return obj;
 }

function createTimeOutEvent(obj, fullDate) {
  let [date, hour] = fullDate.split(' ')
  obj.timeOutEvents.push({
    type: "TimeOut",
    date,
    hour: parseInt(hour)
  })
  return obj
}

function hoursWorkedOnDate(obj, date) {
  let timeIn = obj.timeInEvents.find(e => e.date === date);
  let timeOut = obj.timeOutEvents.find(e => e.date === date);
  return ( timeOut.hour - timeIn.hour) / 100;
}
