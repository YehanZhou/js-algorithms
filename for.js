function fn() {
    const array1 = [1,2,3,4,5];
    const array2 = [11,22,33,44,55];
    for (let j = 0; j < array1.length; j++) {
        const elem = array1[j]
        if(elem === 3) { 
            break;
            // continue;
            // return 'haha';
        }
        console.log(array1[j])
        for (let i = 0; i < array2.length; i++) {
            const element = array2[i];
            if(element === 33) { 
                break;
                // continue;
                // return 'haha';
            }
            console.log(element);
        }
    }
   
}
fn();