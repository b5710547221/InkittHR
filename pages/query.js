import window from "global/window";
import document from "global/document";
import FuzzySearch from 'fuzzy-search';
window.addEventListener("load", function(){
    document.getElementById('name').addEventListener("keyup", function(event){hinter(event)});
    if (window.XMLHttpRequest) {
        window.hinterXHR = new XMLHttpRequest();
     } else {
        window.hinterXHR = new ActiveXObject("Microsoft.XMLHTTP");
    }    
});

function hinter(event) {
const input = event.target;
const data = [{
    name: { 
      fruit: ['apple','mango']
    },
    nation: ['USA','UK']
  }];
const searcher = new FuzzySearch(data, ['name.fruit', 'nation'], {
    caseSensitive: true,
  });
const result = searcher.search(input.value);
const min_characters = 0;

if (!isNaN(input.value) || input.value.length < min_characters ) { 
    return;
} else if(result.length > min_characters){ 
    window.hinterXHR.abort();
    window.hinterXHR.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse( this.responseText ); 
            
            input.value.innerHTML = "";

            response.forEach(function(item) {
               
                var option = document.createElement('option');
                option.value = item;
                data.appendChild(option);
            });
        }
    };
    
}
}

