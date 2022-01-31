const maxVol = require("../../config.js").opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],                    //Don't touch it
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, Hiện không có bản nhạc nào đang phát!. ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Âm lượng hiện tại: **${queue.volume}** 🔊\n**Để thay đổi âm lượng, với từ \`1\` đến \`${maxVol}\` Nhập số âm lượng mà bạn muốn để thay đổi.**`);

        if (queue.volume === vol) return message.channel.send(`${message.author}, Âm lượng bạn muốn thay đổi đã là âm lượng hiện tại 😥`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`${message.author}, **Nhập một số từ \`1\` đến \`${maxVol}\` để thay đổi âm lượng .** ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Âm lượng đã đổi: **%${vol}**/**${maxVol}** 🔊` : `${message.author}, Có lỗi ở đây. ❌`) ;
    },
};