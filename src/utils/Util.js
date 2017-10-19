import moment from 'moment';

function timeStamp2String(time) {
  if (time === 0 || time === '0') return '';
  let formatedTime = moment.unix(time).format("YYYY-MM-DD hh:mm:ss");
  return formatedTime
};

function timeStamp2TString(time) {
  if (time === 0 || time === '0') return '';
  return moment.unix(time).format("YYYY-MM-DD");
};
export default {
  timeStamp2String,
  timeStamp2TString,
};