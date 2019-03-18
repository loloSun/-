# 九宫格抽奖
## 项目思路
- 开始按钮点击之后，在抽奖结束前不可二次点击
	- 解决方法：设置一个开关，初始值为false，点击开关后变为true，抽奖结束后变为false
	```
	var aClick = false;

	aa.onclick = function(){
		if(aClick) return false;  
    	aClick = true; 
	}
	```

- 停止位置随机，当转动到达一定圈数（5圈）后，减速转动一圈，停止到随机位置
	- 解决方法：获取一个随机数，当转动次数小于5圈总次数-1圈次数+随机数，即匀速转动，否则减速转动
	```
	if(i < roundNum - 8 + endPosition){
        timer = setTimeout(run, t);
    } else if (i >= roundNum - 8 && i < roundNum + endPosition){
        t += (i - roundNum + 8) * 5; // //否则让t(时间)每次增加li下标乘以5，此时计时器速度降低，同时标签刷新速度也会降低
        timer = setTimeout(run, t);
    }
	```
	- 当转动总次数大于5圈总次数+随机数，则停止转动
	```
    if( i >= roundNum + endPosition){
        ···
        // 当计时器结束后让a标签变为可点击状态
	    aClick = false;    
	    clearTimeout(timer);
    }                 
	```
- 概率问题
	- 解决方法：取0-100随机数num,若num<50，停止随机数为1.若50<num<67，停止随机数为2······
	```
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
	```
