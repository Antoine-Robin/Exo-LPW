const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const admin = require("firebase-admin");

const serviceAccount = require("./config/test-auth-c3588-firebase-adminsdk-xxyta-d4bc474986.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/secret", checkAuth, (req, res) => {
  res.json({
    message: "Si tu vois ce message, c'est que tu es quelqu'un d'important !",
  });
});

app.listen(9999, () => {
  console.log(`App running on localhost:9999`);
});

// Fonction middleware pour vérifier l'authentification
function checkAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send("Unauthorized");
  }

  admin
    .auth()
    .verifyIdToken(req.headers.authorization)
    .then(() => next())
    .catch(() => res.status(403).send("Unauthorized"));
}
