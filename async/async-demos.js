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

    //async (using callback)
    function addAsync(x,y, callback /* fn */){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning result`)
            callback(result); /* invoking the given function */
        }, 5000)
    }

    function addAsyncClient(x,y){
        console.log(`[@client] invoking the service`)
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`)
        });
    }

    window['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        var promise = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                const result = x + y;
                console.log(`   [@service] returning result`)
                resolveFn(result);
            }, 5000)
        })
        return promise;
    }

    //window['addAsyncPromise'] = addAsyncPromise;

    /* 
        subscribing to the promise object (p)
            p.then(successCallback) //callback 'successCallback' invoked when the operation is successful
            p.catch(failureCallback) //callback 'failureCallback' invoked when the operation is fails
    */

    function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`);
        var promise = addAsyncPromise(x,y);
        promise.then(function(result){
            console.log(`[@client] result = ${result}`);
        })
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient

})()