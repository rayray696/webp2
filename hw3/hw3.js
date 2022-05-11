var random = "IOPASDFGHJKLZQWERTYUXCVBNM";
var codeArray = [];
var number = 0; 
//建立隨機字母 
function createCode(){
	//0-25
	var index = parseInt(Math.random()*26);
	return random.charAt(index);
};
//建立顯示label方法
function createLabel(code){
	var label = document.createElement("label");
	label.className = "label";
	label.style.left = "50px";
	label.innerHTML = code;
	label.code = code;
	var html = document.documentElement;
	//所有label標籤的x座標
	var labelY = 70;
	label.style.top = labelY+"px";
	return label;
}
function createLabe2(code){
	var label = document.createElement("label");
	label.className = "label";
	label.style.left = "50px";
	label.innerHTML = code;
	label.code = code;
	var html = document.documentElement;
	var labelY = 90;
	label.style.top = labelY+"px";
	return label;
}
function createLabe3(code){
	var label = document.createElement("label");
	label.className = "label";
	label.style.left = "50px";
	label.innerHTML = code;
	label.code = code;
	var html = document.documentElement;
	var labelY = 110;
	label.style.top = labelY+"px";
	return label;
}
function createLabe4(code){
	var label = document.createElement("label");
	label.className = "label";
	label.style.left = "50px";
	label.innerHTML = code;
	label.code = code;
	var html = document.documentElement;
	var labelY = 130;
	label.style.top = labelY+"px";
	return label;
}
function createLabe5(code){
	var label = document.createElement("label");
	label.className = "label";
	label.style.left = "50px";
	label.innerHTML = code;
	label.code = code;
	var html = document.documentElement;
	//所有label標籤的x座標
	var labelY = 150;
	label.style.top = labelY+"px";
	return label;
}

window.onload = function(){
	document.getElementById("startBtn").disabled = false;
	//註冊鍵盤事件
	document.documentElement.onkeydown=function(event){
		var keyCode = event.keyCode; //獲取按下的嗎
		var code = String.fromCharCode(keyCode);//A-Z
		var i = 0;
		//label標籤
		var label = codeArray[i];
		if(label.code==code){
			clearInterval(label.interval_id);
			label.parentNode.removeChild(label);
			codeArray.splice(i,1);
			number+=10;
			document.getElementById("msg").innerHTML = number+"分";
		}
	};
};
//讓label標籤慢慢的從上向下移動
function runLabelTop(label){
	//獲取頁面的高度
	var Length = 500;
	label.interval_id = setInterval(function(){
		var left = parseInt(label.style.left);
		left +=1;
		//判斷label是否已經超過頁面的高度
		if(left > Length-30){
			removeLabel(label,false);
		}else{
			label.style.left = left +"px";
		}
	},10);
}
//flag = false使用者沒有按下該字母
function removeLabel(label,flag){
	clearInterval(label.interval_id);
	label.parentNode.removeChild(label);
	codeArray.shift();
	stopGame();
	number-=10;
	document.getElementById("msg").innerHTML = number+"分";

}
var game_id = null;
//開始遊戲
function startGame(startButton){
	number = 0;
	document.getElementById("msg").innerHTML = number+"分";
	startButton.disabled = true;
	game_id = setInterval(function(){
		//建立要顯示的字元
		var code1 =createCode();
		var code2 =createCode();
		var code3 =createCode();
		var code4 =createCode();
		var code5=createCode();
		//建立一個label顯示字元
		var label = createLabel(code);
		var label = createLabe2(code);
		var label = createLabe3(code);
		var label = createLabe4(code);
		var label = createLabe5(code);
		//讓label標籤慢慢向下移動,修改標籤的style.top屬性
		runLabelTop(label);
    runLabelTop(label2);
    runLabelTop(label3);
    runLabelTop(label4);
    runLabelTop(label5);
		//把label標籤節加入到頁面中
		document.body.appendChild(label);
		document.body.appendChild(labe2);
		document.body.appendChild(labe3);
		document.body.appendChild(labe4);
		document.body.appendChild(labe5);
		codeArray.push(label);
		codeArray.push(label2);
		codeArray.push(label3);
		codeArray.push(label);
		codeArray.push(label5);

	},700);
}
