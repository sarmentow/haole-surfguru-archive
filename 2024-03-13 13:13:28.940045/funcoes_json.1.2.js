var flagCarrega=false;function leJsonPais(){var fonte=webroot+"locais/paises2";var cMax,op,cc=0;var option;$.getJSON(fonte,function(data){$('#pais_seletor_previsao').html("");$('<select>').attr({'id':'paisPrevisao','name':'paisPrevisao','style':'display:none','onchange':'javascript:carregaPais();'}).appendTo('#pais_seletor_previsao');if(pais==""){$('<option>').html('Selecione...').appendTo('#paisPrevisao');}
$.each(data,function(i){op=data[i].slug;option=new Option(data[i].nome,op);if(pais==op){$('<option>').attr({'value':data[i].slug,'selected':'selected'}).html(data[i].nome).appendTo('#paisPrevisao');}else{$('<option>').attr({'value':data[i].slug}).html(data[i].nome).appendTo('#paisPrevisao');}
cc++;});if(cc==1){$("#paisPrevisao").val(op);pais=op;}
$("#paisPrevisao").fadeIn(500);if(estado!=""){leJsonEstado();}});}
function leJsonEstado(){var fonte=webroot+"locais/estados/"+pais;var cMax,op,cc=0;var option;$.getJSON(fonte,function(data){$('#estado_seletor_previsao').html("");$('<select>').attr({'id':'estadoPrevisao','name':'estadoPrevisao','style':'display:none','onchange':'javascript:carregaEstado();'}).appendTo('#estado_seletor_previsao');if(estado==""){$('<option>').html('Selecione...').appendTo('#estadoPrevisao');}
$.each(data,function(i){op=data[i].slug;option=new Option(data[i].nome,op);if(estado==op){$('<option>').attr({'value':data[i].slug,'selected':'selected'}).html(data[i].nome).appendTo('#estadoPrevisao');}else{$('<option>').attr({'value':data[i].slug}).html(data[i].nome).appendTo('#estadoPrevisao');}
cc++;});if(cc==1){$("#estadoPrevisao").val(op);estado=op;}
$("#estadoPrevisao").fadeIn(500);if(estado!=""){leJsonMunicipio();}});}
function leJsonMunicipio(){if(pais==undefined||pais==""){pais='brasil';}
var fonte=webroot+"locais/municipios/"+pais+"/"+estado;var cMax,cc=0;$.getJSON(fonte,function(data){$('<select>').attr({'id':'municipioPrevisao','name':'municipioPrevisao','style':'display:none','onchange':'javascript:carregaMunicipio();'}).appendTo('#municipio_seletor_previsao');if(cidade==""){$('<option>').html('Selecione...').appendTo('#municipioPrevisao');}
$.each(data,function(i){op=data[i].slug;option=new Option(data[i].nome,op);if(cidade==op){$('<option>').attr({'value':data[i].slug,'selected':'selected'}).html(data[i].nome).appendTo('#municipioPrevisao');}else{$('<option>').attr({'value':data[i].slug}).html(data[i].nome).appendTo('#municipioPrevisao');}
cc++;});flagCarrega=true;if(cc==1){$("#municipioPrevisao").val(op);cidade=op;carregaMunicipio();}
$("#municipioPrevisao").fadeIn(500);});}
function leJsonMunicipio2(){if(pais==undefined||pais==""){pais='brasil';}
var fonte=webroot+"locais/municipios2/"+pais+"/"+estado;var cMax,cc=0;$.getJSON(fonte,function(data){$('<select>').attr({'id':'municipioPrevisao','name':'municipioPrevisao','style':'display:none','onchange':'javascript:carregaMunicipio();'}).appendTo('#municipio_seletor_previsao');if(cidade==""){$('<option>').html('Selecione...').appendTo('#municipioPrevisao');}
$.each(data,function(i){op=data[i].slug;option=new Option(data[i].nome,op);if(cidade==op){$('<option>').attr({'value':data[i].slug,'selected':'selected'}).html(data[i].nome).appendTo('#municipioPrevisao');}else{if(data[i].nome.indexOf("│")>=0){$('<option>').attr({'value':data[i].slug}).attr({'style':'color:#aaa;'}).html(data[i].nome).appendTo('#municipioPrevisao');}else{$('<option>').attr({'value':data[i].slug}).html(data[i].nome).appendTo('#municipioPrevisao');}}
cc++;});flagCarrega=true;if(cc==1){$("#municipioPrevisao").val(op);cidade=op;carregaMunicipio();}
$("#municipioPrevisao").fadeIn(500);});}
function leJsonPraia(){if(pais==undefined||pais==""){pais='brasil';}
var fonte=webroot+"locais/praias/"+pais+"/"+estado+"/"+municipio;var cMax,cc=0;$.getJSON(fonte,function(data){$('<select>').attr({'id':'praiaPrevisao','name':'praiaPrevisao','style':'display:none','onchange':'javascript:carregaPraia();'}).appendTo('#praia_seletor_previsao');if(cidade==""){$('<option>').html('Selecione...').appendTo('#praiaPrevisao');}
$.each(data,function(i){op=data[i].slug;option=new Option(data[i].nome,op);if(praia==op){$('<option>').attr({'value':data[i].slug,'selected':'selected'}).html(data[i].nome).appendTo('#praiaPrevisao');}else{$('<option>').attr({'value':data[i].slug}).html(data[i].nome).appendTo('#praiaPrevisao');}
cc++;});flagCarrega=true;if(cc==1){$("#praiaPrevisao").val(op);cidade=op;carregaPraia();}
$("#praiaPrevisao").fadeIn(500);});}