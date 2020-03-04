interface T {
  length: 1
}
function loggingIdentity<T>(arg: T[]): T[] {
  return arg;
}

console.log(loggingIdentity([1,2]))
