module.exports = {
  grantType: process.env.GRANT_TYPE || "client_credentials",
  clientId:
    process.env.CLIENT_ID ||
    "PAR_minkapp_6e1826e2244daa534d045865fa68cf86a87aed47159818e6411bbbd3693285ef",
  clientSecret:
    process.env.CLIENT_SECRET ||
    "b85473bfef6a83970d71bd8d99a1cd716fed9f3145440d5dae0b900ab078d70f",
  scopeConnect:
    process.env.SCOPE_CONNECT ||
    "application_PAR_minkapp_6e1826e2244daa534d045865fa68cf86a87aed47159818e6411bbbd3693285ef api_offresdemploiv1 o2dsoffre"
};
