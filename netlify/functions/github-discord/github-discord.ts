import type { Context } from "@netlify/functions"


const notify = async(message:string)=>{
    
        const body = {
            content: message,
            embeds: [
                {
                    image: {url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3IxY2tpazF6d3M2c2hsdWI1aWk3NXR3cDBmNTN0dzAwcXoxaTJ0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif'}
                }
            ]
        }

        const resp = await fetch(process.env.DISCORD_WEBHOOK_URL ?? '',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        if (!resp.ok) {
            console.log("Error sending message to discord");
            return false
            
        }

        return true
    
}
export default async (req: Request, context: Context) => {
  const myImportantVariable = process.env.MY_IMPORTANT_VARIABLE;

  await notify('hola mundo desde netlify dev')
  if (!process.env.MY_IMPORTANT_VARIABLE) {
    return new Response("Error: La variable de entorno MY_IMPORTANT_VARIABLE no está definida", { status: 500 });
  }

  console.log('Hola mundo desde los logs');
  
  return new Response("Valor de MY_IMPORTANT_VARIABLE: " + myImportantVariable);
}