import exprss from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

import { getAll, writePills, getData } from "./assets/js/firebaseHelper.js";

const app = exprss();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



//how to using res.sendFile ?

app.use('/assets', exprss.static(__dirname + '/assets'));
app.use(exprss.static(__dirname + '/public'));


app.use("/js", exprss.static('./assets/js/'));
app.use("/js1", exprss.static('./assets/js/main.js'));
app.use("/js2", exprss.static('./assets/js/giris.js'));
app.use("/css", exprss.static('./assets/css/'));
app.use("/img", exprss.static('./assets/img/'));
app.get('/', (_req, res) => {
    res.sendFile(`${__dirname}/index.html`);

});
app.get('./main');
const server = app.listen(4000);
console.log(server.address().port);


//getAll();
getData("konum");