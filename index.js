// Code your solutions in this file

function writeCards( names, message ) {
    let result = [];
    for ( let i = 0; i < names.length; i++ ) {
        result.push( `Thank you, ${ names[ i ] }, for the wonderful ${ message } gift!` );
    }
    return result;
}

function countDown( number ) {
    while ( number > -1 ) {
        console.log( number );
        number--;
    }
}