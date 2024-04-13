function printEveryNthElementFromAnArray(arr, num) {
let finalArr = []
for (let i=0; i<arr.length; i+=num){
    let toPrint=arr[i]
    finalArr.push(toPrint)
}
console.log(finalArr);
} 
printEveryNthElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2);
printEveryNthElementFromAnArray(['dsa',
'asd', 
'test', 
'tset'], 
2
);
printEveryNthElementFromAnArray(['1', 
'2',
'3', 
'4', 
'5'], 
6)
