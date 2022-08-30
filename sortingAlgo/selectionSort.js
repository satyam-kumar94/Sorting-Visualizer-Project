async function selectionSort( arr,time,colors){
     
   
    
     for(let i=0;i<arr.length-1;i++){
     let small = 999999999;
     let ind = -1;
     for(let j=i;j<arr.length;j++){
      await Sleep(time);
       if(arr[j].val < small){
       small = arr[j].val;
       ind = j;
       }  
     }
     await Sleep(time);
     await colorSelected(arr,ind,i,colors[1]);
     swap(arr,ind,i);
     //await Sleep(time);
     await colorUnSelected(arr,ind,i,colors[0]);

    
     } 
    
    for(let i=0;i<arr.length;i++){
        await Sleep(.5)
        colorSorted(arr,i,colors[2])
    } 
    
    
   
   }