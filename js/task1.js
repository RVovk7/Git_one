"use strict";
(function(){
replaceElements('ul.background', 'ol', [
{ key: 'type', value: 'a' },
{ key: 'style', value: 'border: 1px dashed red; padding: 15px 35px;' }
]);
replaceElements('span', 'i', [ { key: 'style', value: 'text-align: center; display: block;' } ]);
	function replaceElements(tag,ntag,obj){
		let lis = document.querySelector(tag);
		 let tg = document.createElement(ntag);
		for (let i=0;  i < lis.attributes.length; i++){
		tg.setAttribute(lis.attributes[i].name, lis.attributes[i].value);			
			                                      }	
					obj.forEach(function(el){
					tg.setAttribute(el.key, el.value)
		                   });
		let es = lis.cloneNode(true);
	    es = es.childNodes;
		 while (es.length !== 0){
			 	   tg.appendChild(es[0]); 
	   }
		lis.replaceWith(tg);          
		 }}());