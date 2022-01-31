module.exports = {
    name: 'back',
    aliases: [],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Hiện không có nhạc nào đang phát! ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`${message.author}, Không có nhạc nào đã phát trước đó ❌`);

        await queue.back();

        message.channel.send(`Bản nhạc trước đó đang bắt đầu phát ... ✅`);
    },
};