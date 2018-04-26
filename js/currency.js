function filldropdown(){
	var select=document.getElementById("dropdown1");
	var selectfrom=document.getElementById("dropdownfrom");	

	//var options=["ZWD","ZMW","ZAR","YER","XCD","WST","VUV","VND","VEF","UZS","UYU","USD","UGX","UAH","TZS","TWD","TVD","TTD","TRY","TOP","TND","TMT","TJS","THB","SZL","SYP","SVC","STN","SRD","SOS","SLL","SHP","SGD","SEK","SDG","SCR","SBD","SAR","RWF","RUB","RSD","RON","QAR","PYG","PLN","PKR","PHP","PGK","PEN","PAB","OMR","NZD","NPR","NOK","NIO","NGN","NAD","MZN","MYR","MXN","MWK","MVR","MUR","MRU","MOP","MNT","MMK","MKD","MGA","MDL","MAD","LYD","LSL","LRD","LKR","LBP","LAK","KZT","KYD","KWD","KRW","KPW","KMF","KHR","KGS","KES","JPY","JOD","JMD","JEP","ISK","IRR","IQD","INR","IMP","ILS","IDR","HUF","HTG","HRK","HNL","HKD","GYD","GTQ","GNF","GMD","GIP","GHS","GGP","GEL","GBP","FKP","FJD","EUR","ETB","ERN","EGP","DZD","DOP","DKK","DJF","CZK","CVE","CUP","CUC","CRC","COP","CNY","CLP","CHF","CDF","CAD","BZD","BYN","BWP","BTN","BSD","BRL","BOB","BND","BMD","BIF","BHD","BGN","BDT","BBD","BAM","AZN","AWG","AUD","ARS","AOA","ANG","AMD","ALL","AFN","AED"];
	//var optionsname=["ZWD - Zimbabwe Dollar","ZMW - Zambia Kwacha","ZAR - South Africa Rand","YER - Yemen Rial","XCD - East Caribbean Dollar","WST - Samoa Tala","VUV - Vanuatu Vatu","VND - Viet Nam Dong","VEF - Venezuela Bolívar","UZS - Uzbekistan Som","UYU - Uruguay Peso","USD - United States Dollar","UGX - Uganda Shilling","UAH - Ukraine Hryvnia","TZS - Tanzania Shilling","TWD - Taiwan New Dollar","TVD - Tuvalu Dollar","TTD - Trinidad and Tobago Dollar","TRY - Turkey Lira","TOP - Tonga Pa'anga","TND - Tunisia Dinar","TMT - Turkmenistan Manat","TJS - Tajikistan Somoni","THB - Thailand Baht","SZL - Swaziland Lilangeni","SYP - Syria Pound","SVC - El Salvador Colon","STN - S.Tomé and Príncipe Dobra","SRD - Suriname Dollar","SOS - Somalia Shilling","SLL - Sierra Leone Leone","SHP - Saint Helena Pound","SGD - Singapore Dollar","SEK - Sweden Krona","SDG - Sudan Pound","SCR - Seychelles Rupee","SBD - Solomon Islands Dollar","SAR - Saudi Arabia Riyal","RWF - Rwanda Franc","RUB - Russia Ruble","RSD - Serbia Dinar","RON - Romania Leu","QAR - Qatar Riyal","PYG - Paraguay Guarani","PLN - Poland Zloty","PKR - Pakistan Rupee","PHP - Philippines Piso","PGK - Papua New Guinea Kina","PEN - Peru Sol","PAB - Panama Balboa","OMR - Oman Rial","NZD - New Zealand Dollar","NPR - Nepal Rupee","NOK - Norway Krone","NIO - Nicaragua Cordoba","NGN - Nigeria Naira","NAD - Namibia Dollar","MZN - Mozambique Metical","MYR - Malaysia Ringgit","MXN - Mexico Peso","MWK - Malawi Kwacha","MVR - Maldivian Rufiyaa","MUR - Mauritius Rupee","MRU - Mauritania Ouguiya","MOP - Macau Pataca","MNT - Mongolia Tughrik","MMK - Myanmar (Burma) Kyat","MKD - Macedonia Denar","MGA - Madagascar Ariary","MDL - Moldova Leu","MAD - Morocco Dirham","LYD - Libya Dinar","LSL - Lesotho Loti","LRD - Liberia Dollar","LKR - Sri Lanka Rupee","LBP - Lebanon Pound","LAK - Laos Kip","KZT - Kazakhstan Tenge","KYD - Cayman Islands Dollar","KWD - Kuwait Dinar","KRW - Korea (South) Won","KPW - Korea (North) Won","KMF - Comorian Franc","KHR - Cambodia Riel","KGS - Kyrgyzstan Som","KES - Kenya Shilling","JPY - Japan Yen","JOD - Jordan Dinar","JMD - Jamaica Dollar","JEP - Jersey Pound","ISK - Iceland Krona","IRR - Iran Rial","IQD - Iraq Dinar","INR - India Rupee","IMP - Isle of Man Pound","ILS - Israel Shekel","IDR - Indonesia Rupiah","HUF - Hungary Forint","HTG - Haiti Gourde","HRK - Croatia Kuna","HNL - Honduras Lempira","HKD - Hong Kong Dollar","GYD - Guyana Dollar","GTQ - Guatemala Quetzal","GNF - Guinea Franc","GMD - Gambia Dalasi","GIP - Gibraltar Pound","GHS - Ghana Cedi","GGP - Guernsey Pound","GEL - Georgia Lari","GBP - United Kingdom Pound","FKP - Falkland Islands Pound","FJD - Fiji Dollar","EUR - Euro Member Countries","ETB - Ethiopia Birr","ERN - Eritrea Nakfa","EGP - Egypt Pound","DZD - Algeria Dinar","DOP - Dominican Republic Peso","DKK - Denmark Krone","DJF - Djibouti Franc","CZK - Czech Republic Koruna","CVE - Cape Verde Escudo","CUP - Cuba Peso","CUC - Cuba Convertible Peso","CRC - Costa Rica Colon","COP - Colombia Peso","CNY - China Yuan Renminbi","CLP - Chile Peso","CHF - Switzerland Franc","CDF - Congo/Kinshasa Franc","CAD - Canada Dollar","BZD - Belize Dollar","BYN - Belarus Ruble","BWP - Botswana Pula","BTN - Bhutan Ngultrum","BSD - Bahamas Dollar","BRL - Brazil Real","BOB - Bolivia Bolíviano","BND - Brunei Darussalam Dollar","BMD - Bermuda Dollar","BIF - Burundi Franc","BHD - Bahrain Dinar","BGN - Bulgaria Lev","BDT - Bangladesh Taka","BBD - Barbados Dollar","BAM - Bosnian Convertible Marka","AZN - Azerbaijan Manat","AWG - Aruba Guilder","AUD - Australia Dollar","ARS - Argentina Peso","AOA - Angola Kwanza","ANG - Netherlands Antilles Guilder","AMD - Armenia Dram","ALL - Albania Lek","AFN - Afghanistan Afghani","AED - UAE Dirham"];	
	//If using complete list of current ISO currencies, only use if not feeding with PHP and using new API with Access Key, old API doesn't have all the currencies.

	var options=["EUR","AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","USD"];
	var optionsname=["EUR - Euro","AUD - Australia Dollar","BGN - Bulgaria Lev","BRL - Brazil Real","CAD - Canada Dollar","CHF - Switzerland Franc","CNY - China Yuan Renminbi","CZK - Czech Republic Koruna","DKK - Denmark Krone","GBP - United Kingdom Pound","HKD - Hong Kong Dollar","HRK - Croatia Kuna","HUF - Hungary Forint","IDR - Indonesia Rupiah","ILS - Israel Shekel","INR - India Rupee","ISK - Iceland Krona","JPY - Japan Yen","KRW - Korea (South) Won","MXN - Mexico Peso","MYR - Malaysia Ringgit","NOK - Norway Krone","NZD - New Zealand Dollar","PHP - Philippines Piso","PLN - Poland Zloty","RON - Romania Leu","RUB - Russia Ruble","SEK - Sweden Krona","SGD - Singapore Dollar","THB - Thailand Baht","TRY - Turkey Lira","USD - United States Dollar",];	


	for(var i=0; i<options.length; i++){var opt=options[i];
		var optname=optionsname[i];
		var el=document.createElement("option");
		el.textContent=optname;
		el.value=opt;
		var elfrom=document.createElement("option");
		elfrom.textContent=optname;
		elfrom.value=opt;		
		select.appendChild(el)
		selectfrom.appendChild(elfrom)		
	
	}
}

function convertCurrency(){
			var from=document.getElementById("dropdownfrom").value;
			var to= document.getElementById("dropdown1").value;
			var xmlhttp= new XMLHttpRequest();
			var url="http://api.fixer.io/latest?symbols="+ from +","+ to;
			xmlhttp.open("GET",url,true);
			xmlhttp.send();
			xmlhttp.onreadystatechange=function(){
				if (xmlhttp.readyState==4 && xmlhttp.status==200){
					var result=xmlhttp.responseText;
					//alert(result);
					var jsresult=JSON.parse(result);
					jsresult.rates["EUR"]=1;	//change in the Fixer API formatting, made it necessary for this function to work			
					var oneUnit=jsresult.rates[to]/jsresult.rates[from];
					var amounttotal=document.getElementById("fromAmount").value;
					document.getElementById("toAmount").value=(oneUnit*amounttotal).toFixed(2);
				}
			}
		}


function start(){
	filldropdown();
	convertCurrency();
	convertCurrencyvalidated();
}


function isNumeric() {
	var z;
	z=document.getElementById("fromAmount").value;	
  if(isNaN(z))
    {
     alert("Please, enter a positive amount of money to convert to another currency.");
     document.getElementById("fromAmount").value="";
    }
}



function convertCurrencyvalidated(){
	isNumeric();
	convertCurrency();
}


