//Services
app.service('cityService',function () {

    this.city;
    this.days=[1,2,3,4,5,6,7];
    this.day=2;
    this.convert=function(){
        var com;
        var test=this.city;
        //console.log(typeof(this.city));
        //console.log(this.city);
        var test1=test.formatted_address.toString();
        //console.log(test.formatted_address);
        //console.log(test1);
        com=(test1).indexOf(",");
        //console.log(com);
        var query=(test1).slice(0,com);
        //console.log(query);
        return query;
    };
});