export function parseGreetings(name: string) {
  const time = new Date().getHours();
  if (time < 12) {
    return `Bom dia, ${name}.`;
  } else if (time < 18) {
    return `Boa tarde, ${name}.`;
  } else {
    return `Boa noite, ${name}.`;
  }
}
