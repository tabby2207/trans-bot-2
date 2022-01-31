module.exports = {
    name: 'save',
    aliases: [],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

  if (!queue || !queue.playing) return message.channel.send(`${message.author}, Hiện tại không có bản nhạc nào đang phát!.❌`);

        message.author.send(`Bản nhạc đã yêu cầu: **${queue.current.title}** | ${queue.current.author}, Máy chủ đã lưu: **${message.guild.name}** 👍🏻`) .then(() => {
            message.channel.send(`Tôi đã gửi tên của bản nhạc qua DMs ✅`);
        }).catch(error => {
            message.channel.send(`${message.author}, Tôi không thể gửi bản nhạc qua DMs, Yêu cầu bạn mở DMs. ❌`);
        });
    },
};