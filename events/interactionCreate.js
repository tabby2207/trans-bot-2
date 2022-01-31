module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = client.player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
          if (!queue || !queue.playing) return int.reply({ content: `Hiện không có nhạc nào đang phát. ❌`, ephemeral: true, components: [] });

            int.member.send(`**Bản nhạc đã lưu: \`${queue.current.title}\` | Gửi bởi \`${queue.current.author}\`, Máy chủ đã lưu: \`${int.member.guild.name}\` ✅**`).then(() => {
                return int.reply({ content: `Tôi đã gửi cho bạn tên của bản nhạc trong DMs ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Tôi không thể DMs bạn, Yêu cầu bạn bật DMs trong "Cài đặt bảo mật". ❌`, ephemeral: true, components: [] });
            });
        }
    }
};