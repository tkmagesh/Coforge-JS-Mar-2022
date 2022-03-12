/* 
Asynchronous operations
    Operations that are initated but will complete sometime in future and we donot wait for its completion

*/

(function(){

    //sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const result = x + y;
        console.log(`   [@service] returning result`)
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`)
        const result = addSync(x,y); //waiting for the addSync function to complete and return the result
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient;

    //async
    function addAsync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning result`)
            return result;
        }, 5000)
    }

    function addAsyncClient(x,y){
        console.log(`[@client] invoking the service`)
        const result = addAsync(x,y);
        console.log(`[@client] result = ${result}`)
    }

    window['addAsyncClient'] = addAsyncClient;

})()