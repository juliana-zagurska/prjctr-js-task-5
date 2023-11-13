function timeDifference(start_date = '2023-01-01', end_date = '2023-01-10', unit = 'days') {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    const timeDifference = endDate - startDate;

    let result;
    switch (unit) {
        case 'hours':
            result = timeDifference / (1000 * 60 * 60);
            break;
        case 'minutes':
            result = timeDifference / (1000 * 60);
            break;
        case 'seconds':
            result = timeDifference / 1000;
            break;
        default: 
            result = timeDifference / (1000 * 60 * 60 * 24);
            break;
    }

    return result;
}

console.log(timeDifference('2023-01-01', '2024-01-11', 'days'));
console.log(timeDifference('2023-01-01', '2023-01-2', 'hours'));

/*--- task 2 --- */
function processProductPrices(productPrices) {
    const processedPrices = {};

    for (const key in productPrices) {
        if (productPrices.hasOwnProperty(key)) {
            const lowerCaseKey = key.toLowerCase();
            const roundedPrice = productPrices[key].toFixed(2);
            processedPrices[lowerCaseKey] = roundedPrice;
        }
    }

    return processedPrices;
}

const originalPrices = {
    'Product1': 12.3456,
    'Product2': 45.6789,
    'Product3': 78.1234,
    'Product4': 78
};

const processedPrices = processProductPrices(originalPrices);
console.log(processedPrices);

