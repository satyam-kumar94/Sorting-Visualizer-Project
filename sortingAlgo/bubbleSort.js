
async function bubbleSort(array,time,colors){
    const length = array.length;
    for(let i=0; i<length; i++)
    {
        for(let j = i+1; j<length ; j++)
        {
            if(array[i].val > array[j].val)
            {
                 await colorSelected( array , i , j, colors[1]);
                 swap (array , i , j);
                 await Sleep(time);
                 await colorUnSelected(array , i , j , colors[0]);
            }
        }
     }
     
    for(let i=0; i<length; i++)
    {
        await Sleep(time);
        await colorSorted(array, i ,colors[2]);
    }
 }