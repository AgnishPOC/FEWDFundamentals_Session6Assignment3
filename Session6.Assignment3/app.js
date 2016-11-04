var num=1000;
var sum=0;
    var displaySumFor=function()
    {
        for (var i=0;i<=1000;i++)
        {
            sum=sum+i;
        }
        console.log("Sum of Numbers(1000) using 'For' loop = "+sum);
        sum=0; // Resetting the value of sum to 0 after completing iteration
    }

    var displaySumWhile=function(){
    while(num!=0)
    {
        sum=sum+num;
        num--;
    }
    console.log("Sum of Numbers(1000) using 'While' loop = "+sum);
        sum=0;// Resetting the value of sum to 0 after completing iteration
    };

    displaySumFor();
    displaySumWhile();