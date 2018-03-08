function jsdate_to_iso8601(date) {
  var year = date.getFullYear();
  var month = ("00" + (date.getMonth() + 1)).substr(-2);
  var day = ("00" + date.getDate()).substr(-2);
  return year + "-" + month + "-" + day;
}
function jsdate_to_display(date) {
  var year = date.getFullYear();
  var month = ("00" + (date.getMonth() + 1)).substr(-2);
  var day = ("00" + date.getDate()).substr(-2);
  return month + "/" + day + "/" + year ;
}
function iso8601_to_display(iso_date) {
  var arr = iso_date.split('-');
  return arr[1] + '/' + arr[2] + '/' + arr[0];
}
function iso8601_to_date(dateStr) {
  var parts = dateStr.split("-");
  return new Date(parts[0], parts[1] - 1, parts[2]);
}
function display_to_date(dateStr) {
  var parts = dateStr.split("/");
  return new Date(parts[2], parts[0] - 1, parts[1]);
}
function getLastNdays(nDaysAgo) {
  var today = new Date();
  var before = new Date();
  return before.setDate(today.getDate() - nDaysAgo);
}
String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};

Date.prototype.getUnixTimeStamp = function(hours_offset) {
  if(hours_offset){
    var offset = 3600000*hours_offset;
    return Math.round((this).getTime()+offset);
  } else {
    return Math.round((this).getTime());
  }
}
function unique(array) {
    return $.grep(array, function(el, index) {
        return index === $.inArray(el, array);
    });
}
String.prototype.toProperCase = function(){
  return this.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
function averageCatch(sum,count,oncatch,decimals){
  if(count>0){var avg = sum/count}else{var avg = oncatch};
  avg = avg.toFixed(decimals);
  return avg;
}
var QUARTERS_INFO = [{
	quarter: 1
	, start_month: 0
	, end_month: 2
}, {
	quarter: 2
	, start_month: 3
	, end_month: 5
}, {
	quarter: 3
	, start_month: 6
	, end_month: 8
}, {
	quarter: 4
	, start_month: 9
	, end_month: 11
}];
var QUARTERS = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];

function NumCommas(yourNumber) {
	//Seperates the components of the number
	var n = yourNumber.toString().split(".");
	//Comma-fies the first part
	n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	//Combines the two sections
	return n.join(".");
}


function col1Asc(b, a) {
    if (a[0] === b[0]) {return 0} else {return (a[0] > b[0]) ? -1 : 1;}
}
function col1Desc(b, a) {
    if (a[0] === b[0]) {return 0} else {return (a[0] > b[0]) ? -1 : 1;}
}
function col2Asc(b, a) {
    if (a[1] === b[1]) {return 1} else {return (a[1] > b[1]) ? -2 : 2;}
}
function col2Desc(b, a) {
    if (a[1] === b[1]) {return 1} else {return (a[1] > b[1]) ? -2 : 2;}
}
function col3Asc(b, a) {
    if (a[2] === b[2]) {return 2} else {return (a[2] > b[2]) ? -3 : 3;}
}
function col3Desc(b, a) {
    if (a[2] === b[2]) {return 2} else {return (a[2] > b[2]) ? -3 : 3;}
}
function col4Asc(b, a) {
    if (a[3] === b[3]) {return 3} else {return (a[3] > b[3]) ? -4 : 4;}
}
function col4Desc(b, a) {
    if (a[3] === b[3]) {return 3} else {return (a[3] > b[3]) ? -4 : 4;}
}
function col5Asc(b, a) {
    if (a[4] === b[4]) {return 4} else {return (a[4] > b[4]) ? -5 : 5;}
}
function col5Desc(b, a) {
    if (a[4] === b[4]) {return 4} else {return (a[4] > b[4]) ? -5 : 5;}
}
function col6Asc(b, a) {
    if (a[5] === b[5]) {return 5} else {return (a[5] > b[5]) ? -6 : 6;}
}
function col6Desc(b, a) {
    if (a[5] === b[5]) {return 5} else {return (a[5] > b[5]) ? -6 : 6;}
}

Number.prototype.round = function(decimals) {
 var num = this;
        var n = Math.pow(10, decimals);
        return Math.round( (n * num).toFixed(decimals) )  / n;
}

Number.prototype.formatNumber = function(shorten, hideUnnecessaryDecimals, returnSuffixSeparate) {
  var number = this*1;
  var fnum;
  var prefix = "";
  var suffix = "";
  if(number>=1000000000){
    fnum = +(number/1000000000)//.toFixed(decimals_max);
    suffix = "B"
  } 
  else if(number>=1000000){
    fnum = +(number/1000000)//.toFixed(decimals_max);
    suffix = "M"
  }
  else if(number>=1000){
    fnum = +(number/1000)//.toFixed(decimals_max);
    suffix = "K"
  }
  else if(number<1000){
    fnum = (number);//+0.001//.toFixed(decimals_max);
    suffix = ""
  }
  var text = fnum.round(2);//Math.round(fnum);
  if(returnSuffixSeparate){
    return {number:text,suffix:suffix};
  }else{
  return prefix+text+suffix;
  }
//  return out;//target.split(search).join(replacement);
};
