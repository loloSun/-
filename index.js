var bigbox = document.getElementsByClassName('bigbox')[0],
	li = bigbox.getElementsByTagName('li'),
	aa = bigbox.getElementsByTagName('a')[0],
	page = document.getElementsByClassName('page')[0],
	timer = null,
	aClick = false; // a标签是否可点击     

var arr = [0,1,2,4,7,6,5,3] 


function start(endPosition,str) {
    var i = 0;  //此处定义一个i执行效果类似于for循环
    var t = 60;  //转动速度
    var round = 6; // 转动的圈数
    var roundNum = round * 8;   // 转动的次数
    // 相当于手动添加一个循环 i是每一项 t是循环一次的时间 timer是循环时执行的事件
    timer = setTimeout(run, t);
    function run() {
        for(var j = 0; j < li.length; j++) {
        	li[j].className = '';
            li[j].style.width = '100px'
        }
        // 转动的开始位置 都是第一个方块
        // 通过 i % 8 得到此刻 arr 数组中的下标
        // [i % li.length]的结果只能有8种：0,1,2,3,4,5,6,7
        var ord = arr[i % li.length];
        // 给选中的方块加样式
        li[ord].className = "active";
        li[ord].style.width = '102px'
        bigbox.style.width='302px'
        i++;
        // 当i的数量小于roundNum-8+endPosition次(5圈的次数+随机停止的地方)的数量(使减速的事件执行一圈)，t(速度)不变
        if(i < roundNum - 8 + endPosition){
            timer = setTimeout(run, t);
            //否则让t(时间)每次增加li下标乘以5，此时计时器速度降低，同时标签刷新速度也会降低
        } else if (i >= roundNum - 8 && i < roundNum + endPosition){
            t += (i - roundNum + 8) * 5;
        	timer = setTimeout(run, t);
        }
        //当i大于 roundNum + 随机出来的数字(循环次数大于转动次数)，计时器结束，提示中奖信息
        if( i >= roundNum + endPosition){
        	page.innerHTML = str;
        	var timer2 = null;
        	timer2 = setTimeout(function(){
	            page.style.display="block";
	            clearTimeout(timer2);
        	},1000);
        	//当计时器结束后让a标签变为可点击状态
	        aClick = false;    
	        clearTimeout(timer);
        }                
    }
} 
//先定义一个num用来存放得到的随机函数
var num = 0;
var str = ''
aa.onclick = function() {
	var endPosition = 0; 
var str = ''
    // 当bReady为true时a标签为不可点状态
    if(aClick) return false;  
    // 再次点击时让page框消失
    page.style.display = "none";
    // 当点击之后就让bReady为false，即a不可点状态 
    aClick = true; 
    // 随机数字  
    num = random(0,101)
    if(num<50){
    	endPosition = 1;
    } else if(num<67) {
    	endPosition = 2;
    } else if(num<80) {
    	endPosition = 3
    } else if(num<90) {
    	endPosition = 4
    } else if(num<94) {
    	endPosition = 5
    } else if(num<97) {
    	endPosition = 6
    } else if(num<99) {
    	endPosition = 7
    } else {
    	endPosition = 8
    }
    console.log(num,endPosition)
    switch (endPosition){
    	case 1:
    		str = '很遗憾您没有中奖';
    		break;
    	case 2:
    		str = '再来一次';
    		break;
    	case 3:
    		str = '恭喜您中了旺仔牛奶糖！';
    		break;
    	case 4:
    		str = '恭喜您中了旺仔小馒头！';
    		break;
    	case 5:
    		str = '恭喜您中了旺旺小小酥！';
    		break;
    	case 6:
    		str = '恭喜您中了旺旺仙贝 + 旺旺雪饼！';
    		break;
    	case 7:
    		str = '恭喜您获得旺仔牛奶一箱！';
    		break;
    	case 8:
    		str = '恭喜您获得价值199元旺旺大礼包！';
    		break;
    }
    // 执行函数start，num为上面的随机数，后面的字符串为在page信息框中展示的信息，可以随便更改   
    start(endPosition,str);  
}
//随机函数，在九宫格跑起来之前就得到要随机到的地方
function random(n, m) {
    return parseInt((m - n) * Math.random() + n);
}
 

