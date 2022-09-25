import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { config, ScoreboardX } from "../api";


events.serverOpen.on(() => {
let sbx = setInterval(() => {
    const players = bedrockServer.serverInstance.getPlayers();
    players.forEach((pl) => {
        ScoreboardX.sendTo(pl);
    });
}, config.speed*1000);

events.serverStop.on(() => { clearInterval(sbx) });
});