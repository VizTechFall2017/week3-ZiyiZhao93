var svg = d3.select('svg');

/* Your code goes here */
myArray = [];

for (i=0; i < 100; i++) {
    var object = {cx: 1000 * Math.random(), cy: 800 * Math.random(), r: 5};

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
        .attr('fill', 'pink');

}

console.log(myArray);