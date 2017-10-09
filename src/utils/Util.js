import moment from 'moment';

function timeStamp2String(time) {

  return moment.unix(time).format("YYYY-MM-DD hh:mm:ss");
};

function timeStamp2TString(time) {
  
    return moment.unix(time).format("YYYY-MM-DDThh:mm");
  };
export default {
    timeStamp2String,
    timeStamp2TString,
};