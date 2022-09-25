"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("bdsx/event");
const launcher_1 = require("bdsx/launcher");
const api_1 = require("../api");
event_1.events.serverOpen.on(() => {
    let sbx = setInterval(() => {
        const players = launcher_1.bedrockServer.serverInstance.getPlayers();
        players.forEach((pl) => {
            api_1.ScoreboardX.sendTo(pl);
        });
    }, api_1.config.speed * 1000);
    event_1.events.serverStop.on(() => { clearInterval(sbx); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvQztBQUNwQyw0Q0FBOEM7QUFDOUMsZ0NBQTZDO0FBRzdDLGNBQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUMxQixJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1FBQ3ZCLE1BQU0sT0FBTyxHQUFHLHdCQUFhLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzFELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUNuQixpQkFBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsRUFBRSxZQUFNLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxDQUFDO0lBRXRCLGNBQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUFDIn0=