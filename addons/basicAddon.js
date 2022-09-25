"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProcessedTags = void 0;
const launcher_1 = require("bdsx/launcher");
function getProcessedTags(player) {
    const serverInstance = launcher_1.bedrockServer.serverInstance;
    const item = player.getMainhandSlot();
    const pos = player.getFeetPos();
    return [
        ["{name}", player.getName()],
        ["{online}", `${serverInstance.getActivePlayerCount()}`],
        ["{max_online}", `${serverInstance.getMaxPlayers()}`],
        ["{item_name}", item.getName()],
        ["{item_custom_name}", item.getCustomName()],
        ["{item_id}", `${item.getId()}`],
        ["{item_damage}", `${item.getAttackDamage()}`],
        ["{item_damage_value}", `${item.getDamageValue()}`],
        ["{item_max_damage}", `${item.getMaxDamage()}`],
        ["{item_count}", `${item.getAmount()}`],
        ["{item_amount}", `${item.getAmount()}`],
        ["{item_max_amount}", `${item.getMaxStackSize()}`],
        ["{x}", `${pos.x}`],
        ["{y}", `${pos.y}`],
        ["{z}", `${pos.z}`],
        ["{server_name}", serverInstance.getMotd()],
        ["{server_version}", serverInstance.getGameVersion().fullVersionString],
        ["{ip}", player.getNetworkIdentifier().getAddress()],
        ["{ping}", `${launcher_1.bedrockServer.rakPeer.GetAveragePing(player.getNetworkIdentifier().address)}`],
        ["{time}", `${launcher_1.bedrockServer.level.getTime()}`],
        ["{world_player_count}", `${launcher_1.bedrockServer.level.getPlayers().length}`],
    ];
}
exports.getProcessedTags = getProcessedTags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNBZGRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2ljQWRkb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNENBQThDO0FBRTlDLFNBQWdCLGdCQUFnQixDQUFDLE1BQW9CO0lBQ2pELE1BQU0sY0FBYyxHQUFHLHdCQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3BELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0QyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEMsT0FBTztRQUNILENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixDQUFDLFVBQVUsRUFBRSxHQUFHLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUM7UUFDeEQsQ0FBQyxjQUFjLEVBQUUsR0FBRyxjQUFjLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQztRQUNyRCxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUNoQyxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO1FBQzlDLENBQUMscUJBQXFCLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQztRQUNuRCxDQUFDLG1CQUFtQixFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7UUFDL0MsQ0FBQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztRQUN2QyxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1FBQ3hDLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQztRQUNsRCxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0MsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsaUJBQWlCLENBQUM7UUFDdkUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEQsQ0FBQyxRQUFRLEVBQUUsR0FBRyx3QkFBYSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUM1RixDQUFDLFFBQVEsRUFBRSxHQUFHLHdCQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDOUMsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLHdCQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3pFLENBQUM7QUFDTixDQUFDO0FBM0JELDRDQTJCQyJ9