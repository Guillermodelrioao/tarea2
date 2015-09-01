//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------

INPUT = "2\n3 9\n17 24";//The inicial data
console.log(INPUT);
console.log();
var res = INPUT.split("\n");//elemenate the \n
arr=res;//Copy the data to the array
cas = parseInt(res[0]);//Convert the data in int
for(b=1;b<=cas;b++){
	var temp=arr[b].split(" ");//Separets the data 
	console.log(cuadradoPerfecto(parseInt(temp[0]),parseInt(temp[1])));//Call the function and count
}
function cuadradoPerfecto(ini,fin){
	x=0;//declares the counter
	for(i=ini;i<=fin;i++){
		if(Math.sqrt(i)%1==0){//Compare if the data is a Square number
		x++;
		}
}
return x;
}
