module.exports = {
    name: 'stop',
    aliases: ['st'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Hiện tại không có bản nhạc nào đang phát!. ❌`);

        queue.destroy();

        message.channel.send(`Nhạc đang phát trên máy chủ này đã stop, hẹn gặp lại các bạn lần sau 👋`);
    },
};