const sumAll = function(from, to) {
    if ((from < 0 || to < 0) ||
        (!Number.isInteger(from) || !Number.isInteger(to))) return 'ERROR';
    if (from > to) {
        let fromBckp = from;
        from = to;
        to = fromBckp;
    }

    let sum = 0;
    for (let i = from; i <= to; i++) sum += i;

    return sum;
};

//  n + (n-1) + (n-2) + ... + (x+1) + x

// Do not edit below this line
module.exports = sumAll;
