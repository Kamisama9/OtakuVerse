import WebTorrent from "webtorrent";

const FindAnime = async(req, res) => {
  const client = new WebTorrent();
  const torrentId =
    "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent";

  client.add(torrentId, (torrent) => {
    const file = torrent.files.find((file) => file.name.endsWith(".mp4"));
    if (file) {
      return res.status(200).json({message:"Got the video"})
    } else {
      res.status(404).json({ message: "Video file not found in the torrent." });
    }
  });

  client.on("error", (err) => {
    console.error("Torrent error:", err);
    res.status(500).json({ message: "Error processing torrent." });
  });
};

export default FindAnime;
