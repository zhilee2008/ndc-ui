
function timeStamp2String(time) {
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var date = datetime.getDate();
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var second = datetime.getSeconds();
    var mseconds = datetime.getMilliseconds();
    return year + "-"
        + month.length < 2 ? ('0' + month) : month + "-"
            + date.length < 2 ? ('0' + date) : date + " "
                + hour.length < 2 ? ('0' + hour) : hour + ":"
                    + minute.length < 2 ? ('0' + minute) : minute + ":"
                        + second.length < 2 ? ('0' + second) : second;
};
export default {
    timeStamp2String,
};