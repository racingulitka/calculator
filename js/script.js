let a = null;
let b = null;
let c = null;
let d = null;

function num1(){
	if (b != null) {
		if (c != null){
			c = c + "1";
		}else{
			c = "1";
		}
		document.getElementById('display').value = c;
	}else{
		if (a != null){
			a = a + "1";
		}else{
			a = "1";
		}
		document.getElementById('display').value = a;
	}
}

function num2(){
	if (b != null) {
		if (c != null){
			c = c + "2";
		}else{
			c = "2";
		}
		document.getElementById('display').value = c;
	}else{
		if (a != null){
			a = a + "2";
		}else{
			a = "2";
		}
		document.getElementById('display').value = a;
	}
}
function num3(){
	if (b != null) {
		if (c != null){
			c = c + "3";
		}else{
			c = "3";
		}
		document.getElementById('display').value = c;
	}else{
		if (a != null){
			a = a + "3";
		}else{
			a = "3";
		}
		document.getElementById('display').value = a;
	}
}

function num4(){
	if (b != null) {
		if (c != null){
			c = c + "4";
		}else{
			c = "4";
		}
		document.getElementById('display').value = c;
	}else{
		if (a != null){
			a = a + "4";
		}else{
			a = "4";
		}
		document.getElementById('display').value = a;
	}
}

function num5(){
	if (b != null) {
		if (c != null){
			c = c + "5";
		}else{
			c = "5";
		}
		document.getElementById('display').value = c;
	}else{
		if (a != null){
			a = a + "5";
		}else{
			a = "5";
		}
		document.getElementById('display').value = a;
	}
}

function num6(){
	if (b != null) {
		if (c != null){
			c = c + "6";
		}else{
			c = "6";
		}
		document.getElementById('display').value = c;
	}else{
		if (a != null){
			a = a + "6";
		}else{
			a = "6";
		}
		document.getElementById('display').value = a;
	}
}

function num7(){
	if (b != null) {
		if (c != null){
			c = c + "7";
		}else{
			c = "7";
		}
		document.getElementById('display').value = c;
	}else{
		if (a != null){
			a = a + "7";
		}else{
			a = "7";
		}
		document.getElementById('display').value = a;
	}
}

function num8(){
	if (b != null) {
		if (c != null){
			c = c + "8";
		}else{
			c = "8";
		}
		document.getElementById('display').value = c;
	}else{
		if (a != null){
			a = a + "8";
		}else{
			a = "8";
		}
		document.getElementById('display').value = a;
	}
}

function num9(){
	if (b != null) {
		if (c != null){
			c = c + "9";
		}else{
			c = "9";
		}
		document.getElementById('display').value = c;
	}else{
		if (a != null){
			a = a + "9";
		}else{
			a = "9";
		}
		document.getElementById('display').value = a;
	}
}

function num0(){
	if (b != null) {
		if (c != null){
			c = c + "0";
		}else{
			c = "0";
		}
		document.getElementById('display').value = c;
	}else{
		if (a != null){
			a = a + "0";
		}else{
			a = "0";
		}
		document.getElementById('display').value = a;
	}
}

function plus(){
	if (a!=null) {
		b = '+';
		document.getElementById('display').value = b;
	}else{
		document.getElementById('display').value = 'Введите первое число';
	}
}

function minus(){
	b = "-";
	document.getElementById('display').value = b;
}

function multiply(){
	b = "*";
	document.getElementById('display').value = b;
}

function delit(){
	b = "/";
	document.getElementById('display').value = b;
}

function clear1(){
	a = null;
	b = null;
	c = null;
	d = null;
	document.getElementById('display').value = a;
}

function num(){
	a = a + ".";
	document.getElementById('display').value = a;
}

function backspace(){
	a = null;
	b = null;
	c = null;
	d = null;
	document.getElementById('display').value = a;
}

function result(){
	if (b == "+"){
		d = +a + +c;
	}else if (b == "-"){
		d = +a - +c;
	}else if (b == "*"){
		d = +a * +c;
	}else if (b == "/"){
		d = +a / +c;
	}else{
		d = null;
	}
	document.getElementById('display').value = d;
	a = d;
}
