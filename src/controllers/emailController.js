import { transporter } from "../email/index.js";

export async function controllerGetEmail(req, res) {
    return res.json({ ok: 'Contact Get Succesfull' })
  }

export async function controllerPostEmail(req, res) {
  const contact = req.body;
  if(contact.name && contact.email && contact.tel && contact.model && contact.office) {
    await transporter.sendMail({
      from: 'Servidor Node.js',
      to: 'jonathanpoblet228@gmail.com',
      subject: 'Taraborelli Automobile nueva consulta',
      html: `<p>Nombre: ${contact.name}</p><p>Email: ${contact.email}</p><div><p>Telefono: ${contact.tel}</p><p>Modelo buscando: ${contact.model}</p><br><p>Sucursal: ${contact.office}</p></div>`
    })
    res.json({ succesfull: "Email send" });
  } 
  else res.status(400).json({error: 'Faltan datos de envio'});
}