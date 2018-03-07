function build_social_widget(context){
  var template_id = 'handlebars-social-widget';
  // Grab the template script
  var theTemplateScript = $("#"+template_id).html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  
  // Add the compiled html to the page
  var target_parent = '#social-row';
  var exists = $(target_parent).find('#'+template_id+'_'+context.container_id).length;
  if(exists>0){context['isnew']=false}else{context['isnew'] = true};
  var theCompiledHtml = theTemplate(context);
  
  if(exists>0){$(target_parent).find('#'+template_id+'_'+context.container_id).html(theCompiledHtml)}
  if(exists==0){$(target_parent).append(theCompiledHtml)}
  $('#'+template_id+'_'+context.container_id).slideDown();
}
