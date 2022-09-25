"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreboardX = exports.config = void 0;
const event_1 = require("bdsx/event");
const fs = require("fs");
const addon_1 = require("../addon");
const hiddenTag = "scoreboardx:hidden";
exports.config = {
    title: [
        `&l&kii&r&l&aScoreboard&2X&f&kii`,
        `&l&kii&r&l&5SB&c-&dX&f&kii`,
        `&l&kii&r&l&bHello&1World&f&kii`,
    ],
    lines: [
        ["Name: &a{name}", 1],
        ["Item: &a{item_name}", 2],
        ["Ping: &a{ping}", 3],
        ["Players: &a{online}&7/&a{max_online}", 4],
        ["{x}, {y}, {z}", 5],
    ],
    speed: 1
};
try {
    exports.config = require(__dirname + "../../../config.json");
}
catch (e) {
    console.log(`[Scoreboard-X] config.json not found!`);
}
/**Scoreboard-X class. */
class ScoreboardX {
    /**Set hidden mode. */
    static setHiddenMode(player, hidden) {
        if (hidden === true)
            return player.addTag(hiddenTag);
        return player.removeTag(hiddenTag);
    }
    /**Get player hidden mode. */
    static isHidden(player) {
        if (player.hasTag(hiddenTag))
            return true;
        return false;
    }
    /**Get scoreboard title. */
    static title() {
        return exports.config.title[Math.floor(Math.random() * exports.config.title.length)];
    }
    /**Get scoreboard lines.*/
    static lines(player) {
        let o = [];
        exports.config.lines.forEach((v) => {
            (0, addon_1.getAddons)(player).forEach((vv) => {
                let line = [v[0].replace(vv[0], vv[1]), v[1]];
                if (o.includes(line) === false)
                    o.push(line);
            });
        });
        return o;
    }
    /**Send scoreboard to player. */
    static sendTo(player) {
        if (this.isHidden(player)) {
            player.removeFakeScoreboard();
            return false;
        }
        player.setFakeScoreboard(this.title(), this.lines(player));
        return true;
    }
    /**writeConfigFile. */
    static writeFile() {
        fs.writeFile(__dirname + "../../../config.json", JSON.stringify(exports.config), (err) => {
            if (err) {
                console.log(`[Scoreboard-X] writeFile Error! ${err}`);
                return;
            }
            console.log(`[Scoreboard-X] writeFile Success!`);
        });
    }
}
exports.ScoreboardX = ScoreboardX;
event_1.events.serverStop.on(() => {
    ScoreboardX.writeFile();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzQ0FBb0M7QUFDcEMseUJBQXlCO0FBQ3pCLG9DQUFxQztBQUVyQyxNQUFNLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztBQUU1QixRQUFBLE1BQU0sR0FJYjtJQUNBLEtBQUssRUFBRTtRQUNILGlDQUFpQztRQUNqQyw0QkFBNEI7UUFDNUIsZ0NBQWdDO0tBQ25DO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDckIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDckIsQ0FBQyxzQ0FBc0MsRUFBRSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZCO0lBQ0QsS0FBSyxFQUFFLENBQUM7Q0FDWCxDQUFBO0FBRUQsSUFBSTtJQUFFLGNBQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDLENBQUE7Q0FBRTtBQUFDLE9BQU0sQ0FBQyxFQUFFO0lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFBO0NBQUU7QUFFOUgseUJBQXlCO0FBQ3pCLE1BQWEsV0FBVztJQUNwQixzQkFBc0I7SUFDdEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFvQixFQUFFLE1BQWU7UUFDdEQsSUFBSSxNQUFNLEtBQUssSUFBSTtZQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDZCQUE2QjtJQUM3QixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQW9CO1FBQ2hDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUMxQyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsMkJBQTJCO0lBQzNCLE1BQU0sQ0FBQyxLQUFLO1FBQ1IsT0FBTyxjQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGNBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsMEJBQTBCO0lBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBb0I7UUFDN0IsSUFBSSxDQUFDLEdBQXVCLEVBQUUsQ0FBQztRQUMvQixjQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLElBQUEsaUJBQVMsRUFBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxJQUFJLEdBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLO29CQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELGdDQUFnQztJQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQW9CO1FBQzlCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2QixNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM5QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBc0I7SUFDdEIsTUFBTSxDQUFDLFNBQVM7UUFDWixFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDN0UsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDdEQsT0FBTzthQUNWO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBbkRELGtDQW1EQztBQUVELGNBQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUN0QixXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDNUIsQ0FBQyxDQUFDLENBQUMifQ==