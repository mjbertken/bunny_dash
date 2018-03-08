
function dateRangeInit(){
load_timer('dateRangeInit() start');  
//var today = new Date();
var CQ = moment().quarter();//Math.floor(((new Date()).getMonth() + 3) / 3);
var ranges = {};
ranges["Today"]=
              [moment().format('MM/DD/YYYY')
              ,moment().format('MM/DD/YYYY')
              ];
ranges["Yesterday"]=
              [moment().subtract(1, 'days').format('MM/DD/YYYY')
              ,moment().subtract(1, 'days').format('MM/DD/YYYY')
              ];
var per =""; var dc = 3;
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
ranges["This Week"]=
              [moment().startOf('week').format('MM/DD/YYYY')
              ,moment().format('MM/DD/YYYY')
              ];
ranges["Last Week"]=
              [moment().startOf('week').subtract(1, 'days').startOf('week').format('MM/DD/YYYY')
              ,moment().startOf('week').subtract(1, 'days').format('MM/DD/YYYY')
              ];
var per =""; var dc = 7;
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
var per =""; var dc = 10;
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
var per =""; var dc = 14;
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
var per =""; var dc = 21;
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
var per = "Month"; var dc = 30;              
  ranges["This "+per]=[moment().startOf(per).format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
  ranges["Last "+per]=[moment().startOf(per).subtract(1, 'days').startOf(per).format('MM/DD/YYYY'),moment().startOf(per).subtract(1, 'days').format('MM/DD/YYYY')];
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];

var per =""; var dc = 45;
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
var per =""; var dc = 60;
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
var per =""; var dc = 75;
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
var per = "Quarter"; var dc = 90;              
  ranges["This "+per]=[moment().startOf(per).format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
  ranges["Last "+per]=[moment().startOf(per).subtract(1, 'days').startOf(per).format('MM/DD/YYYY'),moment().startOf(per).subtract(1, 'days').format('MM/DD/YYYY')];
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
var per =""; var dc = 120;
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
var per =""; var dc = 180;
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
var per =""; var dc = 270;
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
var per = "Year"; var dc = 365;              
  ranges["This "+per]=[moment().startOf(per).format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];
  ranges["Last "+per]=[moment().startOf(per).subtract(1, 'days').startOf(per).format('MM/DD/YYYY'),moment().startOf(per).subtract(1, 'days').format('MM/DD/YYYY')];
  ranges[dc+" Days"]=[moment().subtract((dc-1), 'days').format('MM/DD/YYYY'),moment().format('MM/DD/YYYY')];

ranges["All"]=[
                moment().subtract(900, 'days').format('MM/DD/YYYY')
                ,moment().format('MM/DD/YYYY')
              ];
$('input#date-range-input').daterangepicker(
{
    locale: {
      format: 'MM/DD/YYYY',
      customRangeLabel: 'Custom'
    },
    ranges,
    "alwaysShowCalendars": true,
    startDate: moment().subtract((30-1), 'days').format('MM/DD/YYYY'),//moment(MINIMUM_DATE).format('MM/DD/YYYY'),//'01/01/2013',
    endDate: moment().format('MM/DD/YYYY'),//'12/31/2013',
    opens:'left'
}, 
function(start, end, label) {
$('#from-date').html(start.format('MM/DD/YYYY'));
$('#to-date').html(end.format('MM/DD/YYYY'));
    $('#date-range-input-group').attr('date-type',label);
    console.log("A new date range was chosen: [ " +label+" ] " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
});
}
