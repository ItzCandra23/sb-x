import { ServerPlayer } from "bdsx/bds/player";
import { events } from "bdsx/event";
import * as fs from "fs";
import { getAddons } from "../addon";

const hiddenTag = "scoreboardx:hidden";

export var config: {
    title: string[];
    lines: [string, number][];
    speed: number;
} = {
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
}

try { config = require(__dirname + "../../../config.json") } catch(e) { console.log(`[Scoreboard-X] config.json not found!`) }

/**Scoreboard-X class. */
export class ScoreboardX {
    /**Set hidden mode. */
    static setHiddenMode(player: ServerPlayer, hidden: boolean): boolean {
        if (hidden === true) return player.addTag(hiddenTag);
        return player.removeTag(hiddenTag);
    }

    /**Get player hidden mode. */
    static isHidden(player: ServerPlayer): boolean {
        if (player.hasTag(hiddenTag)) return true;
        return false;
    }

    /**Get scoreboard title. */
    static title(): string {
        return config.title[Math.floor(Math.random() * config.title.length)];
    }

    /**Get scoreboard lines.*/
    static lines(player: ServerPlayer): [string, number][] {
        let o: [string, number][] = [];
        config.lines.forEach((v) => {
            getAddons(player).forEach((vv) => {
                let line: [string, number] = [v[0].replace(vv[0], vv[1]), v[1]];
                if (o.includes(line) === false) o.push(line);
            });
        });
        return o;
    }

    /**Send scoreboard to player. */
    static sendTo(player: ServerPlayer): boolean {
        if (this.isHidden(player)) {
            player.removeFakeScoreboard();
            return false;
        }

        player.setFakeScoreboard(this.title(), this.lines(player));
        return true;
    }

    /**writeConfigFile. */
    static writeFile(): void {
        fs.writeFile(__dirname + "../../../config.json", JSON.stringify(config), (err) => {
            if (err) {
                console.log(`[Scoreboard-X] writeFile Error! ${err}`);
                return;
            }
            console.log(`[Scoreboard-X] writeFile Success!`);
        });
    }
}

events.serverStop.on(() => {
    ScoreboardX.writeFile();
});