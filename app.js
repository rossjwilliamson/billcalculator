

let selector = (s) => {
 
 return document.querySelector(s);

}



let btn = selector("#calculateBtn");

btn.addEventListener("click",() => {



let billAmount = selector("#billInput").value;
let calculateTotal = selector("#calculateTotal").value;
let billOutput = selector("#billOutput");




if(billAmount!="" && calculateTotal!=""){

	if(billAmount > 0 && calculateTotal > 0){



let total = billAmount / calculateTotal;


billOutput.innerHTML = `you need to pay £${total.toFixed(2)} each`;

}else{
	swal("OOPS","Please enter a number above 0 cheers","error");
}
}else{
	swal("OOPS","Please fill in all the form fields","error");
}

  

});
