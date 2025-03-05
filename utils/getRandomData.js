export const getRandomData = (ArrayList,num)=>
{
    console.log(ArrayList);
     if(num>4) num=0

    const numArr =[
        [1,11,22,33,44,55,66,77,88,99,100,110,111,121],
        [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34],
        [3,9,11,13,15,17,19,21,23,43,31,41,47,73,29,133],
        [1,3,5,7,11,13,15,66,44,33,22,44,77,65,87,17,43]
    ]
    

   const randomData = numArr[num].map((number)=>ArrayList[number])
   return randomData
}