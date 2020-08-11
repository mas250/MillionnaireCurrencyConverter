function calculate(){ 
                var netWorth = document.getElementById("portfolio").value
                var countries = ["USD", "GBP"]
                countries.push("EUR")
                var requestURL = 'https://api.exchangerate.host/convert?from='+countries[1]+'&to='+countries[2]+'&amount='+netWorth ;
                var request = new XMLHttpRequest();

                var richlist = []
                
                
                request.open('GET', requestURL);
                request.responseType = 'json';
                request.send();

                request.onload = function() {
                var response = request.response;
                console.log(response);
                

                
                if( (netWorth * 2) > 100 ){
                    document.getElementById("richList").innerHTML = "Yes"
                }
                else{
                    document.getElementById("richList").innerHTML = "No"
                    console.log(netWorth)
                }
}
            }