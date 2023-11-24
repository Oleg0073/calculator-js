const OPERATIONS = {
    sum: '+',
    substract: '-',
    multipy: '*',
    divison: '/',
};

function calculate({a, b, operation }) {
    let result = null;

    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a, b);
            
            break;

        case OPERATIONS.substract:  
            result = substract(a, b);
            break;

        case OPERATIONS.multipy:
            result = multipy(a, b);
            break;

        case OPERATIONS.divison:    
            result = divison(a, b);
            break;

    
        default:
            break;
    }

    return result;

}