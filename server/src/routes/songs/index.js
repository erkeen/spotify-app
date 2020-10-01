const axios = require("axios");

const router = require("express").Router();

router.get("/:name", async (req, res, next) => {
  try {
    const response = await axios.get(
      `${process.env.SONGS_ENDPOINT}${req.params.name}`,
      {
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": process.env.API_KEY,
        },
      }
    );

    res.send(response.data.data);
    // console.log(process.env.API_KEY);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
