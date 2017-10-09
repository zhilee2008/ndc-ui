import moment from 'moment';

function timeStamp2String(time) {

  return moment.unix(time).format("YYYY-MM-DD hh:mm:ss");
};
export default {
    timeStamp2String,
};