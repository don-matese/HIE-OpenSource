"use strict";
var Leidos = window.Leidos || {};

Leidos.disableFieldEdit = function(context, fieldName)
{
    context.getFormContext().getData().getEntity().attributes.forEach(function (attr) {
        if (attr.getName() === fieldName) {
            attr.controls.forEach(function (c) {
                c.setDisabled(true);
            })
        }
    });
}


Leidos.gridRowSelected = function (context) {   
    Leidos.disableFieldEdit(context, "leidos_missingscores");
}

Leidos.gridRowSelectedAnswer = function(context) {      
    Leidos.disableFieldEdit(context, "leidos_previousratingvalue");
}
