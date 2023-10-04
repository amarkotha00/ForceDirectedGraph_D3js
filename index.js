//Data has to be altered here (Can also use json and link the json here and initialise it to data.)
var data = {
    name: "",
    size: "25",
    attr: "Nada",
    children: [
        {
            name: "Parent1",
            attr: "1",
            size: 30000,
            color: "red",
            children: [
                {
                    name: "P1Child1",
                    attr: "Level 2",
                    size: 20000,
                    color: "#0561cb",
                    children: []
                },
                {
                    name: "P1Child1",
                    attr: "Level 1",
                    size: 20000,
                    color: "#0561cb",
                    children: [
                        {
                            name: "P1Child2",
                            attr: "Level 2",
                            size: 10000,
                            color: "#3895d3",
                            children: [
                                {
                                    name: "P1Child3",
                                    attr: "Level 3",
                                    size: 5000,
                                    color: "#58cced",
                                    children: [
                                        {
                                            name: "P1Child4",
                                            attr: "Level 4",
                                            size: 2500,
                                            color: "#93ebfe",
                                            children: []
                                        },
                                        {
                                            name: "P1Child4",
                                            attr: "Level 4",
                                            size: 2500,
                                            color: "#93ebfe",
                                            children: [
                                                {
                                                    name: "P1Child5",
                                                    attr: "Level 5",
                                                    size: 1000,
                                                    color: "d0efff",
                                                    children: [
                                                        {
                                                            name: "P1Child6",
                                                            attr: "Level 6",
                                                            size: 500,
                                                            color: "d0efff",
                                                            children: [
                                                                {
                                                                    name: "P1Child7",
                                                                    attr: "Level 7",
                                                                    size: 100,
                                                                    children: []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                // ... (continue with other children of Parent1)
            ]
        },
        {
            name: "Parent 2",
            attr: "Level 1",
            size: 30000,
            color: "red",
            children: [
                {
                    name: "P2Child2",
                    attr: "Level 2",
                    size: 20000,
                    color: "#0561cb",
                    children: [
                        {
                            name: "P2Child3",
                            size: 10000,
                            color: "#3895d3",
                            attr: "Level 3",
                            children: [
                                {
                                    name: "P2Child4",
                                    attr: "Level 4",
                                    size: 5000,
                                    color: "#58cced",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "P2Child3",
                            size: 10000,
                            color: "#3895d3",
                            attr: "Level 3",
                            children: [
                                {
                                    name: "P2Child4",
                                    attr: "Level 4",
                                    size: 5000,
                                    color: "#58cced",
                                    children: []
                                },
                                {
                                    name: "P2Child4",
                                    attr: "Level 4",
                                    size: 5000,
                                    color: "#58cced",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "P2Child3",
                            size: 10000,
                            color: "#3895d3",
                            attr: "Level 3",
                            children: []
                        },
                        {
                            name: "P2Child3",
                            size: 10000,
                            color: "#3895d3",
                            attr: "Level 3",
                            children: [
                                {
                                    name: "P2Child4",
                                    attr: "Level 4",
                                    size: 5000,
                                    color: "#58cced",
                                    children: []
                                },
                                {
                                    name: "P2Child4",
                                    attr: "Level 4",
                                    size: 5000,
                                    color: "#58cced",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "P2Child3",
                            size: 10000,
                            color: "#3895d3",
                            attr: "Level 3",
                            children: [
                                {
                                    name: "P2Child4",
                                    attr: "Level 4",
                                    size: 5000,
                                    color: "#58cced",
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "P2Child2",
                    attr: "",
                    size: 20000,
                    color: "#0561cb",
                    children: [
                        {
                            name: "P2Child3",
                            size: 10000,
                            color: "#3895d3",
                            attr: "Level 3",
                            children: [
                                {
                                    name: "P2Child4",
                                    attr: "Level 4",
                                    size: 5000,
                                    color: "#58cced",
                                    children: [
                                        {
                                            name: "P2Child5",
                                            attr: "Level 5",
                                            size: 2500,
                                            color: "#93ebfe",
                                            children: [
                                                {
                                                    name: "P2Child6",
                                                    attr: "Level 6",
                                                    size: 1000,
                                                    color: "d0efff",
                                                    children: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "P2Child3",
                            size: 10000,
                            color: "#3895d3",
                            attr: "Level 3",
                            children: [
                                {
                                    name: "P2Child4",
                                    attr: "Level 4",
                                    size: 5000,
                                    color: "#58cced",
                                    children: [
                                        {
                                            name: "P2Child5",
                                            attr: "Level 5",
                                            size: 2500,
                                            color: "#93ebfe",
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "P2Child3",
                            size: 10000,
                            color: "#3895d3",
                            attr: "Level 3",
                            children: [
                                {
                                    name: "P2Child4",
                                    attr: "",
                                    size: 5000,
                                    color: "#58cced",
                                    children: [
                                        {
                                            name: "P2Child5",
                                            attr: "Level 5",
                                            size: 2500,
                                            color: "#93ebfe",
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "P2Child2",
                    attr: "L2",
                    size: 20000,
                    color: "#0561cb",
                    children: [
                        {
                            name: "P2Child3",
                            size: 10000,
                            color: "#3895d3",
                            children: [
                                {
                                    name: "P2Child4",
                                    attr: "Level4",
                                    size: 5000,
                                    color: "#58cced",
                                    children: []
                                },
                                {
                                    name: "P2Child4",
                                    attr: "Level4",
                                    size: 5000,
                                    color: "#58cced",
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }

    ]
};


const width = 1200,                    //width and height of SVG
    height = 1100;

let i = 0;

const root = d3.hierarchy(data);
const transform = d3.zoomIdentity;
let node, link;

document.body.style.zoom = "92.75%"

//Original Code
//------------------------------------------------------------------------------//
const svg = d3
    .select("body")
    .append("svg")
    .call(
        d3
            .zoom()
            .scaleExtent([3 / 4, 8])
            .on("zoom", zoomed)
    )
    .append("g")
    .attr("transform", "translate(40,0)");


const simulation = d3                   //simulation function
    .forceSimulation()
    .force(
        "link",
        d3.forceLink().id(function (d) {
            return d.id;
        })
    )
    .force(
        "charge",
        d3
            .forceManyBody()
            .strength(-350)                 //the spacing between the nodes that are there (Higher Value -> distance btwn nodes increases)
            .distanceMax(450)               //the distance until which the nodes can extend upto within the SVG.
    )
    .force("center", d3.forceCenter(width / 2, height / 4))
    .on("tick", ticked);

function update() {                     //rootnodeupdatefunction         
    const nodes = flatten(root);
    const links = root.links();
    link = svg.selectAll(".link").data(links, function (d) {
        return d.target.id;
    });
    link.exit().remove();


    //------------- Link styling -----------------
    const linkEnter = link
        .enter()
        .append("line")
        .attr("class", "link")
        .style("stroke", "#000")
        .style("opacity", "0.25")
        .style("stroke-width", 1);
    link = linkEnter.merge(link);


    node = svg.selectAll(".node").data(nodes, function (d) {
        return d.id;
    });
    node.exit().remove();

    //------------- Node styling ------------------
    const nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "text")
        .attr("class", "node")
        .attr("stroke", "black")
        .attr("stroke-width", 0.5)
        .style("fill", color)
        .style("opacity", 1)
        .on("click", clicked)
        .call(
            d3
                .drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
        );

    nodeEnter
        .append("circle")
        .attr("r", function (d) {
            return Math.sqrt(d.data.size) / 10 || 4.5;
        });

    nodeEnter                           //Text Labels for Nodes
        .append("text")
        .attr("x", function (d) { return d.children || d._children ? -18 : 12; })
        .attr("dy", "0.34em")
        .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
        .text(function (d) { return d.data.name; });



    //-----------------------------------------------------------------------------------------------------//
    // var tooltip = d3.select("body")
    // .append("div")
    // .attr("class", "tooltip")
    // .style("opacity", 0);


    // node.text.attr('class', 'link')
    // 	.on('mouseover.tooltip', function(d) {
    //     	tooltip.transition()
    //       	.duration(300)
    //       	.style("opacity", .8);
    //     	tooltip.html(d.data.attr)
    //       	.style("left", (d3.event.pageX) + "px")
    //       	.style("top", (d3.event.pageY + 10) + "px");
    //   	})
    //   	.on("mouseout.tooltip", function() {
    //       tooltip.transition()
    //         .duration(100)
    //         .style("opacity", 0);
    //     })
    //     .on("mousemove", function() {
    //       tooltip.style("left", (d3.event.pageX) + "px")
    //         .style("top", (d3.event.pageY + 10) + "px");
    //     });
    //-----------------------------------------------------------------------------------------------------//



    //----------------ToolTip function---------------------
    const tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")

        .style("z-index", "10")
        .style("visibility", "hidden");


    nodeEnter
        .on("mouseover", function (d) {
            return tooltip
                .style("rectangle", "10px")
                .style("visibility", "visible")
                .html("<big><strong>" + d.data.name + "'s Attributes<br/>" + "</strong></big>" + d.data.attr).style("padding", "2px")
                .style("border", "2px solid black")
                .style("background-color", "white")
                // .style("background-color", "#171717")
                .style("box-shadow", "3px 3px 5px rgba(0, 0, 0, .5)")
                .style("border-radius", "4px")
                // .style("color", "whitesmoke")
                .style("font", " 12px Trebuchet MS")
                .style("top", "130px")
                .style("right", "35px")
                .style("padding", "5px")
        })
        .on('mousedown', function (d) { return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px"); })
        .on("mouseout", function (d) { return tooltip.style("visibility", "hidden"); });
    //

    node = nodeEnter.merge(node);
    simulation.nodes(nodes);
    simulation.force("link").links(links);
}

//Function to expand all nodes.
function expand(d) {
    if (d._children) {
        d.children = d._children;
        d.children.forEach(expand);
        d._children = null;
    } else if (d.children) {
        d.children.forEach(expand);
    }
}

//Function to collapse all nodes.
function collapse(d) {
    if (d.children && d.depth > 1) {   //increase the depth number accordingly to set the default level
        console.log("collapseif");
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    } else if (d.children) {
        console.log("collapseelse");
        d.children.forEach(collapse);
    }
}


//-----------------------------//

var expbtn = document.getElementById("Expand");
expbtn.addEventListener("click", function () {
    root.children.forEach((expand)),                   //iterate from root node to all nodes and a function to expand all the nodes.
        update()
});

var defbtn = document.getElementById("Collapse");
defbtn.addEventListener("click", function () {
    root.children.forEach((collapse)),                 //iterate from root node to all nodes and a function to collapse all the nodes till specified level.
        update()
});

//-----------------------------//


//-------------------------Search Box for Node Name.------------------------
var myBtn = document.getElementById("searchnode");
myBtn.addEventListener("click", function () {
    //find the node
    var selectedVal = document.getElementById("nodename").value.toLowerCase();
    var node = svg.selectAll(".node");
    if (selectedVal.toLowerCase() != "") {
        // {node.style("stroke", "white").style("stroke-width", "1"); } 
        // else {
        var selected = node.filter(function (d) { return d.data.name.toLowerCase() != selectedVal });
        console.log(selected)
        selected.style("opacity", "0");

        d3.selectAll(".node").transition()
            .duration(5000)
            .style("opacity", 1);

        var link = svg.selectAll(".link")
        link.style("opacity", "0");

        d3.selectAll(".link").transition()
            .duration(5000)
            .style("opacity", 0.25);
    }
}
);
//


//-------------------------Search Box for Node Attributes------------------------
var attrBtn = document.getElementById("searchattr");
attrBtn.addEventListener("click", function () {
    //find the node
    console.log('hellooooo')
    var aselectedVal = document.getElementById("nodeattr").value.toLowerCase();
    var node = svg.selectAll(".node");
    if (aselectedVal.toLowerCase() != "") {

        var aselected = node.filter(function (d) { return !(d.data.attr.toLowerCase().includes(aselectedVal)) });
        console.log(aselected)
        aselected.style("opacity", "0");

        d3.selectAll(".node").transition()
            .duration(5000)
            .style("opacity", 1);

        var link = svg.selectAll(".link")
        link.style("opacity", "0");

        d3.selectAll(".link").transition()
            .duration(5000)
            .style("opacity", 0.25);
    }
}
);
//

function sizeContain(num) {                                   //size of the node, being retrieved from the mentioned size in data.
    num = num > 1000 ? num / 1000 : num / 100;
    if (num < 4) num = 4;
    return num;
}


function color(d) {                                           //color of the node, being retrieved from the mentioned color in data.
    return d.data.color;
    // return d._children ? "#51A1DC" // collapsed package
    //   : d.children
    //     ? "#51A1DC" // expanded package
    //     : "#F94B4C"; // leaf node
}

function radius(d) {
    return d._children ? 8 : d.children ? 8 : 4;
}



function ticked() {
    link
        .attr("x1", function (d) {
            return d.source.x;
        })
        .attr("y1", function (d) {
            return d.source.y;
        })
        .attr("x2", function (d) {
            return d.target.x;
        })
        .attr("y2", function (d) {
            return d.target.y;
        });

    node.attr("transform", function (d) {
        return `translate(${d.x}, ${d.y})`;
    });
}

function clicked(d) {
    {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
        update(d);
    }
}

function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

function flatten(root) {
    const nodes = [];
    function recurse(node) {
        if (node.children) node.children.forEach(recurse);
        if (!node.id) node.id = ++i;
        else ++i;
        nodes.push(node);
    }
    recurse(root);
    return nodes;
}

function zoomed() {
    svg.attr("transform", d3.event.transform);
}

root.children.forEach((collapse))               //Command to show default view on opening of the page.
update();                                       //Plot the SVG.