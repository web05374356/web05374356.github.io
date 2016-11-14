$(Document).ready(function () {
    $("#A").click(function () {
        $("svg").animate({ left: '+=50px' });
    });
    $("#B").click(function () {
        $("svg").animate({ top: '+=50px' });
    });
});
var c1=d3.select('svg').append('ellipse');
c1.attr('cx',345).attr('cy',95).attr('rx',30).attr('ry',32).attr('fill','chocolate').attr('stroke','purple').attr('stroke-width',2);
var c2=d3.select('svg').append('ellipse');
c2.attr('cx',455).attr('cy',95).attr('rx',30).attr('ry',32).attr('fill','chocolate').attr('stroke','purple').attr('stroke-width',2);
var c3=d3.select('svg').append('ellipse');
c3.attr('cx',375).attr('cy',280).attr('rx',18).attr('ry',35).attr('fill','chocolate').attr('stroke','purple').attr('stroke-width',2);
var c4=d3.select('svg').append('ellipse');
c4.attr('cx',425).attr('cy',280).attr('rx',18).attr('ry',35).attr('fill','chocolate').attr('stroke','purple').attr('stroke-width',2);
var c5=d3.select('svg').append('ellipse');
c5.attr('cx',385).attr('cy',242).attr('rx',40).attr('ry',40).attr('fill','chocolate').attr('stroke','purple').attr('stroke-width',2);
var c6=d3.select('svg').append('ellipse');
c6.attr('cx',415).attr('cy',242).attr('rx',40).attr('ry',40).attr('fill','chocolate').attr('stroke','purple').attr('stroke-width',2);
var c7=d3.select('svg').append('polygon');
c7.attr('points','400,153 330,290 470,290').attr('fill','lime').attr('stroke','purple').attr('stroke-width',1);
var c8=d3.select('svg').append('cllipse');
c8.attr('cx',400).attr('cy',153).attr('rx',82).attr('ry',70).attr('fill','white').attr('stroke','purple').attr('stroke-width',2);
var c9=d3.select('svg').append('circle');
c9.attr('cx',363).attr('cy',150).attr('r',10).attr('fill','balck').attr('stroke','black').attr('stroke-width',1);
var c10=d3.select('svg').append('circle');
c10.attr('cx',429).attr('cy',150).attr('r',10).attr('fill','balck').attr('stroke','black').attr('stroke-width',1);
var c11=d3.select('svg').append('circle');
c11.attr('cx',359).attr('cy',146).attr('r',5).attr('fill','white').attr('stroke','black').attr('stroke-width',0.5);
var c12=d3.select('svg').append('circle');
c12.attr('cx',425).attr('cy',146).attr('r',5).attr('fill','white').attr('stroke','black').attr('stroke-width',0.5);
var c13=d3.select('svg').append('ellipse');
c13.attr('cx',396).attr('cy',160).attr('rx',10).attr('ry',6).attr('fill','black').attr('stroke','white').attr('stroke-width',0.5);
var c14=d3.select('svg').append('line');
c14.attr('x1',385).attr('y1',180).attr('x2',410).attr('y2',180).attr('stroke','rgb(255,0,0)').attr('stroke-width',1);
var c15=d3.select('svg').append('rect');
c15.attr('x',393.5).attr('y',181).attr('width',10).attr('height',16).attr('fill','rgb(128,118,115)').attr('stroke-width',1).attr('stroke','rgb(0,0,0,)');

 /*     <ellipse cx="345" cy="95" rx="30" ry="32" style="fill:chocolate;stroke:purple;stroke-width:2" />
        <ellipse cx="455" cy="95" rx="30" ry="32" style="fill:chocolate;stroke:purple;stroke-width:2" />
        <ellipse cx="375" cy="280" rx="18" ry="35" style="fill:chocolate;stroke:purple;stroke-width:2" />
        <ellipse cx="425" cy="280" rx="18" ry="35" style="fill:chocolate;stroke:purple;stroke-width:2" />
        <ellipse cx="385" cy="242" rx="40" ry="40" style="fill:chocolate;stroke:purple;stroke-width:2" />
        <ellipse cx="415" cy="242" rx="40" ry="40" style="fill:chocolate;stroke:purple;stroke-width:2" />
        <polygon points="400,153 330,290 470,290" style="fill:lime;stroke:purple;stroke-width:1" />
        <ellipse cx="400" cy="153" rx="82" ry="70" style="fill:white;stroke:purple;stroke-width:2" />
        <circle cx="363" cy="150" r="10" stroke="black" stroke-width="1" fill="black" />
        <circle cx="429" cy="150" r="10" stroke="black" stroke-width="1" fill="black" />
        <circle cx="359" cy="146" r="5" stroke="black" stroke-width="0.5" fill="white" />
        <circle cx="425" cy="146" r="5" stroke="black" stroke-width="0.5" fill="white" />
        <ellipse cx="396" cy="160" rx="10" ry="6" style="fill:black;stroke:white;stroke-width:0.5" />
        <line x1="385" y1="180" x2="410" y2="180" style="stroke:rgb(255,0,0);stroke-width:1" />
        <rect x="393.5" y="181" width="10" height="16" style="fill:rgb(128,118,115);stroke-width:1;stroke:rgb(0,0,0) " /> */
