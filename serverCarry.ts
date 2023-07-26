mp.events.add({
    'player:carry': (player: PlayerMp, target: PlayerMp): void => {
        player.setVariable('carryInfo', target)
    },
    'player:stopCarry': (player: PlayerMp): void => {
        if (player.getVariable('carryInfo')) {
            var target: PlayerMp | void = player.getVariable('carryInfo');

            player.call('detachAll', [target]);
            target.data.dropAnim = true;
            player.setVariable('carryInfo', null)
            return;
        }
    }
})
