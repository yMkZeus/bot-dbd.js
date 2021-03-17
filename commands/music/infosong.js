module.exports = ({
name: "infosong",
aliases: "pl",
code: `$author[Tocando Agora;https://cdn.discordapp.com/emojis/729630163750354955.gif?size=1024]
$title[$songInfo[title]]
$addField[LINK;$songInfo[url]]]
$footer[$botPingms para carregar isto.]
$thumbnail[$songInfo[thumbnail]]
$color[RANDOM]
$onlyIf[$queueLength!=0;Não tem nada tocando.]
$onlyIf[$voiceID!=;**Você nao esta em um canal de voz**]`
});