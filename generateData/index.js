var svg = d3.select('svg');

/* Your code goes here */

//tree different way make circle


//////////////////////////////////////////////
/*The first one
var array = ["milk", 'eggs', 'bread', 'buttter'];

console.log(array[3]);

var student = {"name": "Erica", "job": "professor", "age": 34};

console.log(student.age);

var classRoom = [
    {"name": "Erica1", "job": "professor", "age": 34},
    {"name": "Erica2", "job": "professor", "age": 34},
    {"name": "Erica3", "job": "professor", "age": 34}


];


console.log(classRoom);

console.log(classRoom[1]);

console.log( classRoom[1].age);*/

/*myCircle = { 'cx': 100, 'cy': 200, 'r': 20, 'color': 'blue'};

//var myArray = [myCircle}; or

var myArray = [
    { 'cx': 20, 'cy': 200, 'r': 20, 'color': 'blue'},
    { 'cx': 40, 'cy': 200, 'r': 20, 'color': 'blue'},
    { 'cx': 60, 'cy': 200, 'r': 20, 'color': 'blue'},
    { 'cx': 80, 'cy': 200, 'r': 20, 'color': 'blue'},
    { 'cx': 100, 'cy': 200, 'r': 20, 'color': 'blue'}

];

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function (d) {

        console.log(d);
        return d.cx;
    })
    .attr('cy', function(d){
        return d.cy;

    })
    .attr('r', function(d){
        return d.r;

    })
    .attr('fill', function(d){
        return d.color;

    });*/

//////////////////////////////////////////////
/*The seconde one

myArray = [ {}, {}, {}, {}, {} ];

for (i = 0; i < 5 ; i++) {

    //console.log('circle' + i);
    //myArray[i].name = 'circle' + i;

    //myArray[i].cx = i * 100;
    myArray[i].cx = Math.random() * 100;
    myArray[i].cy = i * 100;
    myArray[i].r = 20;
}

console.log(myArray);

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function (d) {

        console.log(d);
        return d.cx;
    })
    .attr('cy', function(d){
        return d.cy;

    })
    .attr('r', function(d){
        return d.r;

    })
    .attr('fill', function(d) {
        return d.color;
    })
    .attr('fill', 'pink');

*/



//////////////////////////////////////////////
/*The tired one

myArray = [ {}, {}, {}, {}, {} ];

myArray.forEach(function(element, i){
    element.cx = i * 100;
    element.cy = i * 100;
    element.r = 25;

});

console.log(myArray);
*/



//////////////////////////////////////////////
/*The four one


myArray = [];

for (i=0; i < 100; i++) {
    var object = {cx: 400 * Math.random(), cy: Math.random() * 400, r: 10};

    myArray.push(object);
    svg.selectAll('circle')
        .data(myArray)
        .enter()
        .append('circle')
        .attr('cx', function (d) {

            console.log(d);
            return d.cx;
        })
        .attr('cy', function(d){
            return d.cy;

        })
        .attr('r', function(d){
            return d.r;

        })
        .attr('fill', function(d) {
            return d.color;
        })
        .attr('fill', 'pink');

}
console.log(myArray);

*/



