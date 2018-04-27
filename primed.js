class primed {
  constructor() {
    this.primeList = [1,2,3,5,7];
  }

  isPrime(n) {
    if(n % 2 === 0){
      return false;
    }
    for(var i = 3; i <= Math.sqrt(n); i=i+2) {
      if(n % i === 0) {
        return false;
      }
    }
    return n > 1;
  }

  findNextPrime(value) {
    return this.primeSearchBy(value, 2);
  }

  findPreviousPrime(value) {
    return this.primeSearchBy(value, -2);
  }

  primeSearchBy(value, step) {
    value = Math.floor(value);
    if(value % 2 === 0) {
      value = value + (step/2);
    }
    if(this.isPrime(value)) {
      return value;
    }
    do {
      value = value + step;
    }
    while( !this.isPrime(value) );
    return value;
  }

  findAllPrimes(start, finish) {
    this.primeList = []
    if(start <= 2) {
      this.primeList = start < 2? [1,2]: [2]
      start = 3;
    }
    if(start % 2 === 0){start++;}
    for(start; start <= finish; start=start+2) {

      if(start % 5 !== 0 && this.isPrime(start)){
        this.primeList.push(start);
      }
    }
    return this.primeList;
  }
};
