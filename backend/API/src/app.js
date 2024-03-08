import express from "express";
import exphbs from "express-handlebars";
import { homeRoutes } from "./routes/home.routes.js";
import { sobreRoutes } from "./routes/sobre.routes.js";
const app = express();
const port = 3000;

//TEMPLATE ENGINE
app.set("views", "../../../frontend/src/views"); // Seta a pasta views como a pasta principal onde busca os arquivos
app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
    //Permite a gente usar o #each com handlebar para instanciar variáveis dentro do html
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set("view engine", "handlebars");

// MIDDLEWARES
app.use(express.json());

// ANTIGO BODY PARSER
app.use(express.urlencoded({ extended: false }));

// CALL ROUTES
app.use(homeRoutes);
app.use(sobreRoutes);

// ARQUIVOS ESTÁTICOS (CSS)
app.use(express.static("../../../frontend/public"));

// RODAR SERVER
app.listen(port, () => console.log(`API RODANDO EM http://localhost:${port}`));
