module.exports = {
    name: 'skip',
    aliases: [],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);
 
        if (!queue || !queue.playing) return message.channel.send(`${message.author}, THiện tại không có bản nhạc nào đang phát!. ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `**${queue.current.title}**, Đã tạm dừng nhạc ⏸` : `${message.author}, Có gì đó không ổn ❌`);
    },
};