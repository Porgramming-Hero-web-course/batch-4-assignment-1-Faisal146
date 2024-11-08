{
    //

    function countWordOccurrences(sentence: string, word: string): number {
     
        const lowerSentence = sentence.toLowerCase()
        const lowerWord = word.toLowerCase()
      
        const wordArray : string[] = lowerSentence.split(" ")

        let sum : number = 0

        wordArray.forEach((word) => {
            if(word === lowerWord) {
                sum += 1
            }
        })

        return sum


        
      
      }
      
    //  console.log(countWordOccurrences("TypeScript is great. I love TypeScript", "typescript"));
    
    


    //
}