function getFields(){
	var get=window.location.href;
	get=get.substr(get.indexOf("?")+1);
	get=decodeURI(get);
	get=get.replace(/\+/g, " ");
	get=get.split("&");
	var formFields={};
	for (i=0; i<get.length; i++){
		var temp=get[i].substr(0, get[i].indexOf("="));
		if (temp.indexOf("[]")>-1){
			var tempTwo=[];
			var tempThree=temp;
			while (temp.indexOf("[]")>-1){
				var temp=get[i].substr(0, get[i].indexOf("="));
				if (temp===tempThree){
					tempTwo.push(get[i].substr(get[i].indexOf("=")+1).replace("+", " "));
					i++;
				}
				else{
					i--;
				}
			}
			formFields[tempThree.replace("[]", "")]=tempTwo;
		}
		else{
			formFields[temp]=get[i].substr(get[i].indexOf("=")+1).replace("+", " ");
		}
	}
	return formFields;
}