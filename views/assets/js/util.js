function dateDiff(startDate,endDate) {
  var diff = endDate.getTime()-startDate.getTime();
  return diff/86400000;
};
