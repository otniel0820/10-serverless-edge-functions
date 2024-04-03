import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  const myImportantVariable = process.env.MY_IMPORTANT_VARIABLE;
  if (!process.env.MY_IMPORTANT_VARIABLE) {
    return new Response("Error: La variable de entorno MY_IMPORTANT_VARIABLE no está definida", { status: 500 });
  }

  console.log('Hola mundo desde los logs');
  
  return new Response("Valor de MY_IMPORTANT_VARIABLE: " + myImportantVariable);
}