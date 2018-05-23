

function login(){
	var button =document.getElementById('btn');

	button.onclick =function func1(){

		//	

		/*var name =document.getElementById('user').value,

			mail =document.getElementById('email').value,


			pass =document.getElementById('password').value,


			currentTime =time.toLocaleString();*/

		

		

		var	form =document.getElementById('form-login'),

			validMessage =document.getElementById('valid-message'),

			validity =form.checkValidity();

			

			/*if (validity==true){

				e.preventDefault();
					/*window.location="users.html?name="+name+"&password="+pass+"&email="+mail+"&time="+currentTime;*/
					//validMessage.innerHTML ='Thank you' +" "+name.toUpperCase()+" " +"for your login";


			/*	setTimeout(function(){
	                validMessage.innerHTML = "done";
	                 // The URL that will be redirected too.
	            }, 3000);	
	            
	            

				}*/



				
	          
			/*else {

				if (name.length==0 &&pass.length==0 ){
					validMessage.innerHTML ="Please input the empty fields";
				}

				else if (name.length==0){
					validMessage.innerHTML ="Please input your name";

				}

				else if(mail.length==0){
					validMessage.innerHTML ="Please input your mail";

				}
				else if (mail.indexOf('@')==-1){
					validMessage.innerHTML ="Your email must included the Character '@' ";

				}
				else if(mail.charAt(mail.indexOf('@')+1)==""){
					validMessage.innerHTML ="Please enter a part following '@' in the email field ";

				}*/
				/*
				
				else if(pass.length==0){
					validMessage.innerHTML ="Please input your password";
				}*/

				
				
			
				
				
			
	}
};


function users(){
	var fullName =getValue('name'),

		telephone =getValue('telephone'),

		mobile =getValue('mobile'),

		addresse =getValue('addresse'),

		userName =getValue('userName'),

		password =getValue('password'),

		mainTable =document.getElementById('main-table'),


		tableBody =document.getElementById('user-information');



	

	



	if (fullName !=""&& telephone !=""&&mobile !="" &&addresse !="" &&userName !="" &&password !=""){
		
			
			window.location = window.location.href.split("?")[0];
		
		
	}


		



		

		function getValue(varname)
	                {
	                    var url = window.location.href;
	                    var qparts = url.split("?");

	                    if (qparts.length == 1)
	                    {
	                        return "";
	                    }
	                    else{
	                        var query = qparts[1];
	                        var vars = query.split("&");
	                        var value = "";
	                        for (i=0;i<vars.length;i++)
	                        {
	                            var parts = vars[i].split("=");
	                            if (parts[0] == varname)
	                            {
	                                value = parts[1];
	                                break;
	                            }
	                        }
	                        value = unescape(value);

	                        // Convert "+"s to " "s
	                        value.replace(/\+/g," ");
	                        return value;
	                    }

	                }


	 
	var	info =function (){
		this.users =new Array();
	};

	var User =function (fullName,tel,mob,addr,userName,pass){
		this.fullName =fullName;
		this.tel =tel;
		this.mob =mob;
		this.addr =addr;

		this.userName =userName;

		this.pass =pass;

	};

	var currentTable =null;
	currentTable =JSON.parse(localStorage.getItem('info'));

	if (!currentTable){
		createEmptyStorage();
	}


	updateCurrentTable();

	currentTable.addUser =function(user){
		currentTable.users.push(user);
			if (user.userName !=""&& user.pass !=""&&user.mob !="" &&user.tel !="" &&user.addr !="" &&user.fullName !=""){
				
					localStorage.setItem('info',JSON.stringify(currentTable));
					

					

				

				

		
			}
	};


	done(fullName,telephone,mobile,addresse,userName,password);


	




	function done(fullName,tel,mob,addr,userName,pass){
		var user =new User(fullName,tel,mob,addr,userName,pass);
		currentTable.addUser(user);
		updateCurrentTable();
		



	}

	function createEmptyStorage(){
		localStorage.clear();
		localStorage.setItem('info',JSON.stringify(new info()));
		currentTable =JSON.parse(localStorage.getItem('info'));
	}


	function updateCurrentTable(){
		tableBody.innerHTML ='';
		for (var i =0 ;i <currentTable.users.length ;i++){
			if (currentTable.users[i].fullName !=""&& currentTable.users[i].pass !=""&&currentTable.users[i].tel !=""
				&&currentTable.users[i].mob !="" &&currentTable.users[i].addr !="" &&currentTable.users[i].userName !=""){
				
					var rowElement =document.createElement('tr');
					rowElement.className ='table-row';
					tableBody.appendChild(rowElement);

					var fullNameElement =document.createElement('td'),

						passElement =document.createElement('td'),

						telElement =document.createElement('td'),

						idElement =document.createElement('td');

						mobElement =document.createElement('td');

						userNameElement =document.createElement('td');

						addrElement =document.createElement('td');

					

					//idElement.className ='id-data';

					idElement.innerHTML =1+parseInt(i);

					

					fullNameElement.innerHTML =currentTable.users[i].fullName;

					
					passElement.innerHTML =currentTable.users[i].pass;

					addrElement.innerHTML =currentTable.users[i].addr;

					mobElement.innerHTML =currentTable.users[i].mob;

					userNameElement.innerHTML =currentTable.users[i].userName;

					telElement.innerHTML =currentTable.users[i].tel;



					rowElement.appendChild (idElement);

					rowElement.appendChild (fullNameElement);

					rowElement.appendChild (telElement);

					rowElement.appendChild (mobElement);

					rowElement.appendChild (addrElement);

					rowElement.appendChild (userNameElement);

					rowElement.appendChild (passElement);

				

			




}
			}

		}
			



		}



		


		









	



