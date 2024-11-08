{
  //

  console.log(sumArray([1, 3, 3, 3, 6]))

function removeDuplicates(arr: number[]): number[] {
    const uniqueNumbers: number[] = [];
    const seenNumbers: number[] = [];

  
    arr.forEach((num : number) => {
        if (!seenNumbers.includes(num)) {
        uniqueNumbers.push(num);
        seenNumbers.push(num);
      }
})
  
    return uniqueNumbers;
  }
  

 // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5,5,6,4,7,7])); 

  //
    
}