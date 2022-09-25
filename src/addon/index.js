"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddons = void 0;
const fs = require("fs");
const path = require("path");
function getAddons(player) {
    let o = [];
    let addonsPath = path.join(__dirname, "../../addons");
    fs.readdir(addonsPath, (err, files) => {
        if (err) {
            console.log(`[Scoreboard-Addon] Error! ${err}`);
        }
        else {
            files.forEach((file) => {
                require("../../addons/" + file).getProcessedTags(player).forEach((tag) => {
                    if (o.includes(tag) === false)
                        o.push(tag);
                });
            });
        }
    });
    return o;
}
exports.getAddons = getAddons;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5QkFBeUI7QUFDekIsNkJBQTZCO0FBRTdCLFNBQWdCLFNBQVMsQ0FBQyxNQUFvQjtJQUMxQyxJQUFJLENBQUMsR0FBdUIsRUFBRSxDQUFDO0lBQy9CLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3RELEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ2xDLElBQUksR0FBRyxFQUFFO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNuQixPQUFPLENBQUMsZUFBZSxHQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQXFCLEVBQUUsRUFBRTtvQkFDckYsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUs7d0JBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUFmRCw4QkFlQyJ9