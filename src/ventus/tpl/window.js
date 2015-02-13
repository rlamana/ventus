define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"wm-window "
    + escapeExpression(((helper = (helper = helpers.classname || (depth0 != null ? depth0.classname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"classname","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"wm-window-box\">\n		<header class=\"wm-window-title\" unselectable=\"on\">\n			<h1 unselectable=\"on\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n			<div class=\"wm-button-group\">\n				<button class=\"wm-minimize\">&nbsp;</button>\n				<button class=\"wm-maximize\">&nbsp;</button>\n				<button class=\"wm-close\">&nbsp;</button>\n			</div>\n		</header>\n\n		<section class=\"wm-content\"></section>\n\n		<button class=\"wm-resize\">&nbsp;</button>\n	</div>\n	<div class=\"wm-window-overlay\"></div>\n</div>\n";
},"useData":true}); });