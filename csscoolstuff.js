let rad;
let c; 
let length=20;
let val;
function start1(){
	c=color(250,250,0);
	
	rad=createRadio();rad.class('bdd');
	rad.position(850,100);
	rad.option('red',1);
	rad.option('restart',2);
	rad.option('chgradius',3);
	rad.changed(addColor);
}
function addColor(){
	if(rad.value()){
	if(rad.value()=='1'){c=color(250,0,0);length=20;}
	if(rad.value()=='2'){setup();let ang=0;}
	if(rad.value()=='3'){length=40;c=color(0,250,250);}
	}
}

