function welcome(name: string, title?: string): string {
  if (title) {
    return `Welcome ${title} ${name}`;
  }
  return `Welcome ${name}`;
}

console.log(welcome("Alice"));
console.log(welcome("Alice", "MS."));
