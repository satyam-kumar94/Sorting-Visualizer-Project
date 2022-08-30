async function partitionAroundPivot( arr, l,r,time,colors){
   
   
    let p = arr[r];
    let i = l-1;
    for(let j=l ; j<r ;j++){
        if(arr[j].val < p.val)
        {
            i++;
            //  await Sleep(time)
            await colorSelected(arr,j,i,colors[1])
            swap(arr,j,i);
            await Sleep(time)
            await colorUnSelected(arr,j,i,colors[1])
        }
    }
    swap(arr,r,i+1);
    await Sleep(time)
    await colorSorted(arr,i+1,colors[2])
    return i+1;
}
async function quickSortCall( arr, l, h,time,colors){
    if(l<h)
    {
        let p = await partitionAroundPivot(arr,l,h,time,colors);
        await  quickSortCall( arr,l,p-1 ,time,colors);
        await  quickSortCall(arr,p+1,h,time,colors);
    }
}

async function quickSort( arr,time,colors){
    await quickSortCall(arr,0,arr.length-1,time,colors);  
     for(let i=0;i<arr.length;i++){
         colorSorted(arr,i,colors[2])
     }
 }
