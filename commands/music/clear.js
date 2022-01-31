module.exports = {
    name: 'clear',
    aliases: [],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Hiện không có nhạc nào đang phát. 😛`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, Không có bản nhạc nào trong hàng đợi sau bản nhạc hiện tại 😲`);

        await queue.clear();

        message.channel.send(`Hàng đợi vừa được xóa. 🗑️`);
    },
};