export function capitalize(s: string) 
{
   return s.replace(/\b\w/g, (char) => char.toUpperCase());
}