function build_social_widget(context){
  var template_id = 'handlebars-social-widget';
  // Grab the template script
  var theTemplateScript = $("#"+template_id).html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  
  // Add the compiled html to the page
  var target_parent = context.target_parent;
  var exists = $(target_parent).find('#'+template_id+'_'+context.container_id).length;
  if(exists>0){context['isnew']=false}else{context['isnew'] = true};
  var theCompiledHtml = theTemplate(context);
  
  if(exists>0){$(target_parent).find('#'+template_id+'_'+context.container_id).html(theCompiledHtml)}
  if(exists==0){$(target_parent).append(theCompiledHtml)}
  $('#'+template_id+'_'+context.container_id).slideDown();
}

function generate_test_social_widget(){
  var arr = ['facebook','twitter','instagram','linkedin','bbb','google'];
  for(var a=0;a<arr.length;a++){
    var platform = arr[a];
    
    var followers = 1230;
    var followers_chg = 123;
    var rating = 4.5;
    var data = {
      "target_parent":'#social-row',
      "container_id":platform,
      "platform":platform,
      "label_1_i_class":"fa fa-thumbs-up",
      "value_1":followers,
      "label_2_i_class":"fa fa-rss",
      "value_2":followers,
      "followers_chg":'+'+followers_chg,
      "rating":rating
    }
    build_social_widget(data);
  }
}
