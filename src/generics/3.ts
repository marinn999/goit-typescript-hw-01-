function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB) as T & U;
}
//`extends object` варто зробити для того, щоб обмежети дженерік тип можливістю передачі даних об'єкного типу.
//В функції використовується метод конкатинації двох об'єктів.
