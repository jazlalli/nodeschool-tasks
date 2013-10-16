var args = process.argv.splice(2),
	answer = 0;

for(var i=0, l=args.length; i<l; i+=1) {
	answer += args[i]++;
}

console.log(answer);