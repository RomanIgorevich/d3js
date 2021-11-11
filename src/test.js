








barGroups
.append("rect")
.attr("class", "bar")
.attr("x", (g) => xScale(g.day))
.attr("y", (g) => yScale(g.issues))
.attr("height", (g) => chart_height - yScale(g.issues))
.attr("width", xScale.bandwidth())
.on("mouseenter", function (actual, i) {
  d3.select(this)
    .transition()
    .duration(300)
    .attr("opacity", 0.6)
    .attr("x", (a) => xScale(a.day) - 5)
    .attr("width", xScale.bandwidth() + 10);
  barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", (a) => xScale(a.day) + xScale.bandwidth() / 2)
    .attr("y", (a) => yScale(a.issues) - 20)
    .attr("text-anchor", "middle")
    .text((a, idx) => {
      return idx !== i ? "" : `${a.issues} issues`;
    });
})
.on("mouseleave", function () {
  d3.selectAll(".issues").attr("opacity", 1);
  d3.select(this)
    .transition()
    .duration(300)
    .attr("opacity", 1)
    .attr("x", (a) => xScale(a.day))
    .attr("width", xScale.bandwidth());
  svg.selectAll(".value").remove();
});






































barGroups 

... 



.attr("width", xScale.bandwidth()) 
.on("mouseenter", function(actual, i) { 
    ... 















})
 .on("mouseleave", function() { 
     d3.selectAll(".issues")
 .attr("opacity", 1); d3.select(this) .transition() .duration(300)
  .attr("opacity", 1) .attr("x", a => xScale(a.day)) 
  
  
  
  
  .attr("width", xScale.bandwidth()); 
  
  
  
  
  svg.selectAll(".value").remove(); }); 
  
  barGroups 
  .append("rect")
        .attr("class", "bar")
        .attr("x", (g) => xScale(g.day))
        .attr("y", (g) => yScale(g.issues))
        .attr("height", (g) => chart_height - yScale(g.issues)) 
  .attr("width", xScale.bandwidth()) 
  .on("mouseenter", function(actual, i) { 
      
    d3.select(this)
    .transition()
    .duration(300)
    .attr("opacity", 0.6)
    .attr("x", (a) => xScale(a.day) - 5)
    .attr("width", xScale.bandwidth() + 10);
  barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", (a) => xScale(a.day) + xScale.bandwidth() / 2)
    .attr("y", (a) => yScale(a.issues) - 20)
    .attr("text-anchor", "middle")
    .text((a, idx) => {
      return idx !== i ? "" : `${a.issues} issues`;
    });
   })
   .on("mouseleave", function() { d3.selectAll(".issues")
   .attr("opacity", 1); d3.select(this) .transition() .duration(300)
    .attr("opacity", 1) .attr("x", a => xScale(a.day)) 
    .attr("width", xScale.bandwidth()); 
    svg.selectAll(".value")
    .remove(); }); 