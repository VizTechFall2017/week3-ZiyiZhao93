var svg = d3.select('svg');

/* Your code goes here */

d3.csv('blackboard.csv', function (dataIn) {
    console.log(dataIn);

    svg.selectAll('rect')
        .data(dataIn)
        .enter()
        .append('rect')
        .attr('x', function(d){
            console.log(d.x);
            return d.x;
        })
        .attr('y', function(d){
            return d.y;
        })
        .attr('width', function(d){
            return d.width;

        })
        .attr('height', function(d){
            return d.height;
        })
        .attr('fill', function(d){
            return d.fill;
        });
});

