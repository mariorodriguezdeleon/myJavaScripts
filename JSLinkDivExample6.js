(function(){
    var overrideContext = {};
    overrideContext.Templates = {};
    overrideContext.Templates.Item = overrideTemplate;
    overrideContext.Templates.Header = overrideHeader;
    overrideContext.Templates.Footer = overrideFooter;
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideContext);
})();

function overrideTemplate(ctx){
    return "<div style='font-size: 18px;border:solid 1px Silver;margin-bottom: 6px;padding: 4px;width:200px;'>" 
    + ctx.CurrentItem.Title
    + "</div>";
}

function overrideHeader(){
    return  "<a href=\"https://www.google.com\"><h2>This is filler</h2></a>" //Additional Code can be added here to call other services e.g. adding logic to add new item
}

function overrideFooter(){
    return "<h2> This is filler</h2>" //Additional Code can be added here to call other services, e.g. adding logic to add new item
}