require("dotenv").config();
const ENV = {
    ZOHO_CLIENT_ID: process.env.ZOHO_CLIENT_ID,
    ZOHO_CLIENT_SECRET: process.env.ZOHO_CLIENT_SECRET,
    PORT: process.env.PORT,
    REDIRECT_URI: process.env.REDIRECT_URI,
};
export default ENV;
