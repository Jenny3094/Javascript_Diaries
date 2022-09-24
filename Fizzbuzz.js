function fizzBuzz (n) {
	const answer =[]

	for (let i=1; i <= n; i++) {
		if (i % 3 == 0 && i % 5 == 0) // if i modulo 3 and i modulo 5 equals 0
			answer.push("FizzBuzz") // print "FizzBuzz"

			else if (i % 3 == 0) // if i modulo 3 equals 0
			answer.push("Fizz") // print "Fizz"

			else if (i % 5 == 0) // if i modulo 5 equals 0
			answer.push("Buzz") // print "Buzz"

			else
			answer.push(i.toString()) //if i % 3 and i modulo 5 do not apply

	}

	return answer // print i

};

console.log(fizzBuzz()) // input the number range
