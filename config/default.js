module.exports = {

    app: {
        port: 3000,
        views_folder: __dirname + "/../src/apps/views",
        view_engine: "ejs",
        static_folder: __dirname + "/../src/public",
        session_key: "vietpro",
        session_secure: false,
        tmp: __dirname + "/../temp",
        // url: "http://localhost:3000",
    },
    mail: {
        host: "smtp.gmail.com",
        post: 587,
        secure: false,
        auth: {
            user: "vietpro.shop28@gmail.com",
            pass: "rnqqtpbwsivtqopl",
        }
    }

}