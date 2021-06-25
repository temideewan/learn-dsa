function countdown(num){
    // base case
    if(num<=0){
        console.log('all done');
        return;
    }

    console.log(num);
    num--;
    // different input
    countdown(num);
}

countdown(5);