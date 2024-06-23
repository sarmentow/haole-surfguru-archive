var diaSem = ["","Dom","Seg","Ter","Qua","Qui","Sex","Sab","",""];
var diaSemExtenso = ["","Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","",""];
var direcoes_graficos = ["n","nne","ne","ene","e","ese","se","sse","s","sso","so","oso","o","ono","no","nno","n"];
var direcoes_graficos_extenso = ["Norte","Norte-Nordeste","Nordeste","Leste-Nordeste","Leste","Leste-Sudeste","Sudeste","Sul-Sudeste","Sul","Sul-Sudoeste","Sudoeste","Oeste-Sudoeste","Oeste","Oeste-Noroeste","Noroeste","Norte-Noroeste","Norte"];
var unidadesVento = ['nos','kmh','ms','mph'];
var unidadesVentoSigla = ["nos","Km/h","m/seg","mph"];
var statusAstros=['sol nasce','sol poente','lua nasce','lua poente','lua nova','quarto crescente','lua cheia','quarto minguante'];
var nomeDiaSem = ['SEG','TER','QUA','QUI','SEX','SAB','DOM'];
var nomeMes = ['','Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
var nomeDiaSemana = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'];
var nomeMesExtenso = ['','janeiro','fevereiro','marco','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];

var textosAltura =  new Array(2);
textosAltura[0] = ["flat","meio metrinho","meio metro","meio metrão","um<br/>metro",
"um<br/>metro<br/>e meio","um<br/>metrão<br/>e meio","dois metros","dois metros<br/>e meio",
"três metros","três metros<br/>e meio","quatro metros","cinco metros","seis metros","sete metros",
"oito metros","nove metros","dez metros<br/>ou mais"];

textosAltura[1] = ["flat","um<br/>pé","dois<br/>pés","três<br/>pés","quatro<br/>pés",
"cinco<br/>pés","seis<br/>pés","sete<br/>pés","oito<br/>pés",
"dez<br/>pés","doze<br/>pés","quinze<br/>pés","dezoito<br/>pés","vinte<br/>pés","vinte<br/>e cinco<br/>pés",
"vinte<br/>oito<br/>pés","trinta<br/>pés","mais de<br/>trinta<br/>e cinco<br/>pés"];

var statusTipo= ['retirada','ativa','em manutenção','desativada'];

var notas = ['péssimo','ruim','regular','bom','épico','excelente'];

var labelsAltura = ['Altura Total das Ondas','Altura das Vagas','Altura do Swell de Sul','Altura do Swell de Norte','* Altura do Surf','* Altura das Vagas no Surf','* Altura do Swell A no Surf','* Altura do Swell B no Surf','Altura do Swell'];
var labelsPeriodo = ['Período Primário das Ondas','Período das Vagas','Período do Swell de Sul','Período do Swell de Norte','* Período do Surf','* Período das Vagas no Surf','* Período do Swell A no Surf','* Período do Swell B no Surf','Período do Swell'];
var labelsDirecao = ['Direção Primária das Ondas','Direção das Vagas','Direção do Swell de Sul','Direção do Swell de Norte','* Direção do Surf','* Direção das Vagas no Surf','* Direção do Swell A no Surf','* Direção do Swell B no Surf','Direção do Swell'];

var dirSiglas = ["N","E","S","O","N"];

var wvhgt = "Altura Ondas";
var wvs = "Ondas";
var mts = "metros";
var ft = "pés";
var kts="nós";
var wvprd = "Período Ondas";
var scnds = "segundos";
var wnd = "Vento Médio";
var wndSpd = "Velocidade Média do Vento";
var vVcst = "velocidade do vento costeiro";
var vVmt = "velocidade do vento maritimo";
var dVmt = "direção do vento maritimo";
var rjVct = "rajadas do vento costeiro";
var wtfcst = "Previsão Tempo";
var seatmp = "Temperatura da água";
var stmp = "water";
var enrg = "Energia";
var weak = "Fraco";
var offshr = "Terral";
var crss = "Cruzado";
var onShr="Maral";
var clds="nuvens";
var rain="chuva";
var tds="MARÉS";
var tdHts="ALTURA DAS MARÉS";
var tdSmr = "SUMÁRIO DAS MARÉS";
var mTdTbl = "TABELA DE MARÉS MENSAL PARA";
var grfc="GRÁFICO";
var tbl="TABELA";
var mnth="MENSAL";
var tdsIn="Marés em";
var drgHr="ARRASTE AQUI";
var crcnt="crescente";
var full="cheia";
var wning="minguante";
var morFcst="Tem MAIS Previsão";
var ahd="Adiante";
var sgnUp="Assine o Surfguru PRO";
var hvAcss="para ter acesso à previsão";
var extnd="prolongada até 15 dias.";
var sgProAlso="O Surfguru PRO ainda";
var alrts="possibilita receber alertas";
var byMail="por email, além de";
var cnslt="consultar todo o";
var hndCst="histórico de previsões.";
var clqHr="CLIQUE AQUI";
var gsts="rajadas";
var hour="hora";
var wvEnrg="Energia das ondas";
var wvPwr="Potência das ondas";
var nwm="nova";

var waitData="Aguarde... Carregando dados.";
var dailyGphcs="GRÁFICOS DAS LEITURAS DO DIA";
var show="MOSTRAR";
var hide="ESCONDER";
var wndGsts="Vento e Rajadas";
var wnd2="vento";
var wndDir="Dire\u00E7\u00E3o do Vento";
var tmpHti="Temperatura e \u00CDndice de Calor";
var tmpDw="Temperatura e Ponto de Orvalho";
var airTmp="Temperatura do ar";
var arTp="Temp. ar";
var air="ar";
var dwPt="pt. de orvalho";
var dewPt="ponto de orvalho";
var htIdx="Ind. Calor";
var htIndx="\u00EDndice de calor";
var tmpr="temperatura";
var mdnt="0h";
var am6="6h";
var noon="12h";
var pm6="18h";
var hmdPcp="Umidade e Precipita\u00E7\u00E3o";
var hmd="umidade";
var pcp="precipita\u00E7\u00E3o";
var pcpAtp="Precipita\u00E7\u00E3o e Press\u00E3o Atmosf\u00E9rica";
var hmdAtp="Umidade e Press\u00E3o Atmosf\u00E9rica";
var rdnUv="Radia\u00E7\u00E3o Solar e \u00EDndice UV";
var rdn="radiacao";
var Uvidx="indice UV";
var slRdn="Radia\u00E7\u00E3o Solar";
var atP="Press\u00E3o Atmosf\u00E9rica";
var psr="Press\u00E3o";
var sW="SO";
var nW="NO";
var dirE = "L";
var dirW = "O";
var prd = "período";
var drc = "direção";
var dgrs = "graus";
var hgt = "altura";
var dawn = "madrugada";
var mrng="manha";
var aftn="tarde";
var nigt="noite";
var buoy="Boia";
var inactv="Boia Inativa";
var noWvDat="N\u00e3o h\u00e1 dados de ondas";
var ltst="Ultima";
var ltsRdg = "Ultima leitura";
var upto =" a ";
var innn ="em";
var mnthTbl="TABELA DE MAR&Eacute;S MENSAL PARA ";
var data = "Dados";
var xtrnal = "link externo";
var mls = "milhas";