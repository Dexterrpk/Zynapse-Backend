const axios = require('axios');

async function responderComIA(mensagem) {
  const resposta = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Você é um atendente simpático e profissional." },
        { role: "user", content: mensagem }
      ]
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  return resposta.data.choices[0].message.content;
}

module.exports = { responderComIA };
