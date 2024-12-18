import { Router } from "express";
import FindAnime from "../Controllers/TorrentController.js";
import Scrape from "../Controllers/ScrapperController.js"

const router = Router();

router.get("/play", FindAnime);
router.get('/scrape',Scrape);

export default router;
