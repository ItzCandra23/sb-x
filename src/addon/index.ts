import { ServerPlayer } from "bdsx/bds/player";
import * as fs from "fs";
import * as path from "path";

export function getAddons(player: ServerPlayer): [string, string][] {
    let o: [string, string][] = [];
    let addonsPath = path.join(__dirname, "../../addons");
    fs.readdir(addonsPath, (err, files) => {
        if (err) {
            console.log(`[Scoreboard-Addon] Error! ${err}`);
        } else {
            files.forEach((file) => {
                require("../../addons/"+file).getProcessedTags(player).forEach((tag: [string, string]) => {
                    if (o.includes(tag) === false) o.push(tag);
                });
            });
        }
    });
    return o;
}
