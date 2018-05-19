const Square = function (){
	//方块数据
	this.data =[
		[0,1,0,0],
		[0,1,0,0],
		[0,1,1,0],
		[0,0,0,0]
	]
	//原点
	this.origin = {
		x:3,y:0
	}
	//旋转方向
	this.dir =0
	//旋转
	this.rotates =[
		[
			[0,1,0,0],
			[0,1,0,0],
			[0,1,1,0],
			[0,0,0,0]
		],
		[
			[0,0,0,0],
			[0,1,1,1],
			[0,1,0,0],
			[0,0,0,0]
		],
		[
			[0,0,0,0],
			[0,1,1,0],
			[0,0,1,0],
			[0,0,1,0]
		],
		[
			[0,0,0,0],
			[0,0,1,0],
			[1,1,1,0],
			[0,0,0,0]
		],
	]
}
Square.prototype.canDown = function(isValid){
	let test ={}
	test.x = this.origin.x;
	test.y = this.origin.y+1;
	return isValid(test,this.data)
}
Square.prototype.down = function(){
	this.origin.y++;
}
Square.prototype.canLeft =function(isValid){
	let  test={};
	test.x = this.origin.x -1;
	test.y = this.origin.y;
	return isValid(test,this.data);
}
Square.prototype.left = function(){
	this.origin.x--;
}
Square.prototype.canRight =function(isValid){
	let  test={};
	test.x = this.origin.x + 1;
	test.y = this.origin.y;
	return isValid(test,this.data);
}
Square.prototype.right = function(){
	this.origin.x++;
}

//旋转逻辑
Square.prototype.canRotate =function(isValid){
	let d = this.dir + 1;
	(d == 4) && (d=0)
	let  test=[
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];
	for(let i = 0 ;i<this.data.length;i++){
		for(let j = 0;j<this.data.length;j++){
			test[i][j] = this.rotates[d][i][j]
		}
	}
	
	return isValid(this.origin,test);
}
Square.prototype.rotate = function(){
	this.dir = this.dir + 1;
	(this.dir == 4) && (this.dir=0)
	
	for(let i = 0 ;i<this.data.length;i++){
		for(let j = 0;j<this.data.length;j++){
			this.data[i][j] = this.rotates[this.dir][i][j]
		}
	}
}