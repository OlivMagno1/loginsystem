exports.handler = async (event, context) => {

  //inicializando Stytch
  const stytch = require("stytch");
  const client = new stytch.Client({
    project_id: process.env.PROJECT_ID,
    secret: process.env.SECRET,
    env: stytch.envs.test
  })

  //headers necessário para habilitar CORS, deve ser retornado junto com o statusCode: 200.
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
  };

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 200,
      headers,
      body: "This was not a POST request!"
    };
  }

  const { email, password } =  JSON.parse(event.body);

  try {
    const resp = await client.passwords.authenticate({
      email,
      password,
      session_duration_minutes: 15
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        headers,
        message: "Entrou no sistema com sucesso",
        token: resp.session_token
      }),
    };
  } catch (err) {
    console.log(err);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: false,
        headers,
        message: err.error_message,
        err: err
      }),
    };
  }
};