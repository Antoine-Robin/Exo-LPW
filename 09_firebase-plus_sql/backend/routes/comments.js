const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware");
const db = require("../db");

// Créer un nouveau commentaire
router.post("/", verifyToken, async (req, res) => {
  const { postId, content } = req.body;
  const author_id = req.user.uid; // assuming req.user contains the authenticated user object
  const date = new Date();
  const created_at = `${date.toISOString().split("T")[0]} ${
    date.toTimeString().split(" ")[0]
  }`;
  const updated_at = created_at;

  // insert the new article into the database
  const result = await db
    .promise()
    .query(
      "INSERT INTO comments (content, author_id, created_at, updated_at, post_id) VALUES (?, ?, ?, ?, ?)",
      [content, author_id, created_at, updated_at, postId]
    );

  // return the ID of the newly created article
  const newCommentId = result[0].insertId;
  res.status(201).json({ id: newCommentId });
});

// Récupérer tous les commentaires pour un article spécifique
router.get("/post/:postId", async (req, res) => {
  try {
    // retrieve all posts from the database
    const result = await db
      .promise()
      .query("SELECT * FROM comments WHERE post_id = " + req.params.postId);
    res.status(200).json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Récupérer un commentaire par ID
router.get("/:id", async (req, res) => {
  // ...
});

// Mettre à jour un commentaire
router.put("/:id", verifyToken, async (req, res) => {
  // ...
});

// Supprimer un commentaire
router.delete("/:id", verifyToken, async (req, res) => {
  // ...
});

module.exports = router;
