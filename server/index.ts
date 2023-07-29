import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  res.send({
    app: "Travel Vault",
  });
});

app.listen(PORT, () => {
  console.log(
    `----- inside index.ts :: express app running for travel vault -----`
  );
});
