$(function(){$('#slide-girls').cycle({fx:'scrollHorz',timeout:200,prev:'#prev-girls',next:'#next-girls',pager:'#nav-slider-girls',pagerAnchorBuilder:pagerFactory});$('#slide-tv').cycle({fx:'scrollHorz',timeout:0,prev:'#prev-tv',next:'#next-tv',pager:'#nav-slider-tv',pagerAnchorBuilder:pagerFactory});$('#slide-trips').cycle({fx:'scrollHorz',timeout:0,prev:'#prev-trips',next:'#next-trips',pager:'#nav-slider-trips',pagerAnchorBuilder:pagerFactory});$('#slide-galerias').cycle({fx:'scrollHorz',timeout:0,prev:'#prev-galerias',next:'#next-galerias',pager:'#nav-slider-galerias',pagerAnchorBuilder:pagerFactory});function pagerFactory(idx,slide){var s=idx>20?' style="display:none"':'';return '<li'+s+'><a href="#">'+(idx+1)+'</a></li>';};});