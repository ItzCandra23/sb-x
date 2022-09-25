import { ServerPlayer } from "bdsx/bds/player";
import { bedrockServer } from "bdsx/launcher";

export function getProcessedTags(player: ServerPlayer): [string, string][] {
    const serverInstance = bedrockServer.serverInstance;
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
        ["{ping}", `${bedrockServer.rakPeer.GetAveragePing(player.getNetworkIdentifier().address)}`],
        ["{time}", `${bedrockServer.level.getTime()}`],
        ["{world_player_count}", `${bedrockServer.level.getPlayers().length}`],
    ];
}