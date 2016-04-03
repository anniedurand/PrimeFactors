var primeFactors = function(number) {
    var array = [];
    for (var i = (number - 1); i > 1; i--) {
        if (number % i === 0) {
            var prime = true;
            for (var j = (i-1); j > 1; j--) {
                if (i % j === 0) {
                    prime = false;
                }
            };
            if (prime) {
                var k = i;
                array.push(k);
            };
        };
    };
    console.log(array);
};

primeFactors(147);
