






let data1 = '[{"name":"meheraz","age":20,"bangla":60,"english":70,"math":80,"biology":80,"physices":68},{"name":"sobuj","age":26,"bangla":60,"english":70,"math":60,"biology":60,"physices":98},{"name":"raihan","age":30,"bangla":60,"english":70,"math":90,"biology":80,"physices":78},{"name":"nijam","age":25,"bangla":60,"english":80,"math":90,"biology":60,"physices":98},{"name":"shakib","age":24,"bangla":60,"english":70,"math":60,"biology":40,"physices":98},{"name":"mohin","age":28,"bangla":60,"english":40,"math":50,"biology":66,"physices":93}]';





let data2 ='[{"Id":1,"Name":"Meheraz","Location":"dhanmondi","phone":7964},{"Id":2,"Name":"opu","Location":"mirpur","phone":46894},{"Id":3,"Name":"sajid","Location":"bonani","phone":501524},{"Id":4,"Name":"sojib","Location":"mirpur","phone":3674780},{"Id":5,"Name":"Rifat","Location":"dhanmondi","phone":3028106}]';





let data3 = '[{"name":"meheraz","age":40,"skill":"MERNstack","location":"dhaka","salary":1200},{"name":"Roni","age":30,"skill":"Laravel","location":"chandpur","salary":1230},{"name":"Diyan","age":20,"skill":"Dinajpur","location":"Dinajpur","salary":450},{"name":"Rabbi","age":35,"skill":"Golang","location":"josor","salary":1200},{"name":"Ovi","age":24,"skill":"Wordpress","location":"dhaka","salary":1300},{"name":"fahim","age":33,"skill":"java","location":"Dinajpur","salary":1200}]';


const all = [data1,data2,data3];
document.write(JSON.stringify(all));


//  localStorage data pass 

localStorage.setItem('alldata',all);


 


 




















 