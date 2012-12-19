define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['window'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"wm-window ";
  foundHelper = helpers.classname;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.classname; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" >\n	<div class=\"wm-window-box\">\n		<header class=\"wm-window-title\" unselectable=\"on\">\n			<div class=\"wm-button-group\">\n				<button class=\"wm-close\">&nbsp;</button>\n				<button class=\"wm-maximize\">&nbsp;</button>\n				<button class=\"wm-minimize\">&nbsp;</button>\n			</div>\n\n			<h1 unselectable=\"on\">";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h1>\n		</header>\n\n		<section class=\"wm-content\"></section>\n\n		<button class=\"wm-resize\">&nbsp;</button>\n	</div>\n	<div class=\"wm-window-overlay\"></div>\n</div>\n";
  return buffer;});
});
