export const getRandomData = (ArrayList,num)=>
{

     if(num>4) num=0

    const numArr =[
        [1,11,22,33,44,55,66,77,88,99,100],
        [2,4,6,8,10,12,14,16,18,20],
        [3,9,11,13,15,17,19,21,23,43,31,41],
        [1,3,5,7,11,13,15,66,44,33,22,44,77]
    ]
    

   const randomData = numArr[num].map((number)=>ArrayList[number])
   return randomData
}