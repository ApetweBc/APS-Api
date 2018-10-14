// https://api.apptweak.com/ios/searches.json?term=bingo&country=be&device=ipad

// var url = "https://api.apptweak.com";
// var OS = "/ios/";
// var json = "searches.json?term=";
// var country = "&country=";
// var NameOfCountry = "be";
// var device = "&device=";
// var typeOfDevice = "ipad";
// var name = "bingo";
// var name = document.getElementById("name").value;
// var url = "https://api.apptweak.com";
// var OS = "/ios/";
// var json = "searches.json?term=";
// var country = "&country=";
// var NameOfCountry = "be";
// var device = "&device=";
// var typeOfDevice = "ipad";
// var name = "bingo";
// var name,

	//   fetch(url + OS + json + name + country + NameOfCountry + device + typeOfDevice, {headers})

	
// element = document.getElementById('#name');
// if (element != null) {
//     name = element.value;
//     console.log(element);
// }
// else {
//     name = null;
//     console.log(' no value');
// }


//         var el = document.getElementById("#submit"); 
//         if(el){
//                 el.addEventListener("click", getUsers);
//                 console.log(getUsers());
//                 console.log('1')
// ;               
//             }   
var headers = {
	'method': 'GET',
	'X-Apptweak-Key': 'kMAM0iZmvn9uFcRlV22Ss57PAzU',
	'Cache-Control': 'no-cache',
	'mode': 'cors'

};

function getUsers() {


	var item = document.getElementById("name").value;
	// http://api.searchman.io/v1/android/us/search/rank?q=bingo&apiKey=1d99d7c8c20d06fbde52ed504c601d96

	fetch("http://api.searchman.io/v1/android/us/search/rank?q=" + item + "&apiKey=b5665a709f7e0ae712b05718a4a62955", {
			mode: 'cors'
		})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			let output = '<h2> 2018/2019 Season</h2>';
			//   When the JSon is object, Use this object.keys
			// when is arrays, use data.forEach
			Object.keys(data).forEach(function(user) {
				output += `
      <table class="table">
              <thead>
                  

                  <th width="200">App ID</th>

                  <th width="200">App Name</th>
                  <th width="200">Rating</th>
                  <th width="200">Currency</th>
                  <th width="200">Purchase</th>
                  <th width="200">Comments</th>
                  <th width="200">Price</th>
                  
                  
              </thead>

              <tbody>
                  
                  <tr>
                  <td>${data.appId}</td>
                  <td>${user[1].appName}</td>
                  <td>${user[1].averageUserRating}</td>
                  <td>${user[1].currency}</td>
                  <td>${user[1].hasInAppPurchases}</td>       
                  <td>${user[1].commentCount}</td>
                  <td>${user[1].price}</td>
                     
                      
                  
                  </tr>
              </tbody>
          </table>
          

      
      `;
			});
			var element = document.getElementById('output');
			element.innerHTML = output;
		})

		.catch(function(error) {
			console.log('Looks like there was a problem: \n', error);
		});
}

// myobject();