class A {
  val: string = ''
}

console.log('Hello world!')

const x: PropertyNames<A> = 'val'

console.log(x)
