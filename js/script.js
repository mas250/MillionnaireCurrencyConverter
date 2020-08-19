function calculate(){ 
    
                var netWorth = document.getElementById("portfolio").value
                var countries = [ "GBP", "USD", "JMD", "JOD", "JPY" ]
                var richlist = []

                
                for (i = 1; i < countries.length-1; i++){
                    
                    
                    var requestURL = 'https://api.exchangerate.host/convert?from='+countries[0]+'&to='+countries[i]+'&amount='+netWorth ;
                    console.log(requestURL)

                    var request = new XMLHttpRequest();
                    request.open('GET', requestURL);
                request.responseType = 'json';
                request.send();
                
                   
                 request.onload = function() {
                    var response = request.response;
                    richlist.push(response)
               
                // if (response) {richlist.push(response.result)}
                

                 }
                

                
                
              
                
                if( (netWorth * 2) > 100 ){
                    document.getElementById("richList").innerHTML = "Yes"
                }
                else{
                    document.getElementById("richList").innerHTML = "No"
                    console.log(netWorth)
                }
}
console.log(richlist);
            }