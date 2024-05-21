function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google AppScript');
}

function obtenerDatosHtml (nombre){

    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}