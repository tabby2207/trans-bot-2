const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

 
if (!queue || !queue.playing) return message.channel.send(`${message.author}, Hiện tại không có bản nhạc nào đang phát!. ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`${message.author}, Bạn nên tắt chế độ vòng lặp của âm nhạc hiện có **(${client.config.px})** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Chế độ vòng lặp: **${queue.repeatMode === 0 ? 'Không hoạt động' : 'Hoạt động'}**, Toàn bộ chuỗi sẽ lặp lại không ngừng 🔁` : `${message.author}, Có lỗi ở đây. ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`${message.author}, Ở chế độ Vòng lặp, trước tiên bạn phải tắt hàng đợi hiện có **(${client.config.px}hàng đợi vòng lặp)** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Chế độ vòng lặp: **${queue.repeatMode === 0 ? 'Không hoạt động' : 'Hoạt động'}**, Nhạc hiện tại sẽ được lặp lại không ngừng (tất cả nhạc trong danh sách **${client.config.px}hàng đợi vòng lặp ** Bạn có thể lặp lại nó với tùy chọn.) 🔂` : `${message.author}, Có gì đó không ổn ❌`);
};
    },
};