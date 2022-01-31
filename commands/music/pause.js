module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, Hiện tại không có bản nhạc nào đang phát!. ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Bản nhạc hiện đang phát có tên **${queue.current.title}** đã dừng ⏸` : `${message.author}, Có lỗi gì đó ở đây ❌`);
    },
};