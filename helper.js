

// create a div for representing a number in bar form
function createDiv(parent , number ,colors)
{
    let ele = document.createElement("div");  // creating a div elememt
    ele.style.height = number +"px";
    ele.style.width = "10px";
    ele.style.background = colors[0];   // setting the property of the children 
    ele.classList.add("bar");
    
    parent.appendChild(ele);            // add to the parent class
    return {
        div : ele,
        val : number
    }
}


function createRandArray(parent,size,colors){        // create a random array 
    let arr = [];
    for(let i=0;i<size;i++){
        let rand = Math.floor(Math.random()*500+30);
        arr.push( createDiv(parent, rand , colors) );
    }
    return arr;
}


function swap(array,i,j)
{                                                       // swap two nodes
    let temp = {...array[i]};
    // console.log(temp);
    array[i].div.style.height = array[j].val+"px";
    array[i].val = array[j].val;
    
    array[j].div.style.height = temp.val+"px";
    array[j].val = temp.val;
}

async function colorSelected(array,i,j,color){          // change the color 
     array[i].div.style.backgroundColor = color;
     array[j].div.style.backgroundColor = color;
}

async function colorUnSelected(array,i,j,color){         // reverse set the color
    array[i].div.style.backgroundColor = color;
    array[j].div.style.backgroundColor = color;
}

async function colorSorted(array,i,color){
    array[i].div.style.backgroundColor = color;          // after sorting
}

function Sleep(ms) {                                     // sleep time
	return new Promise(resolve => setTimeout(resolve, ms));
}

function copyProp(el1,el2){                              // for merge sort 
    el1.div.style.height = el2.val+"px";
    el1.val = el2.val;
}