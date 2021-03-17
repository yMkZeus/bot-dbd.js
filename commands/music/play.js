module.exports = ({
 name: "play",
 code: `
$color[RANDOM]
$thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
$title[**Mk Zeus Music**]
$description[**Musica adicionada com sucesso**
[$songInfo[title]\\]($songInfo[url])]
$playSong[$message;1m;{title:Erro}{description:**Ocorreu um erro para tocar essa música tente novamente!**}{color:RANDOM}]
$onlyIf[$message!=;{title:Erro}{description:**Coloque o nome da música para eu tocar ela...**}]
$onlyIf[$voiceID!=;**Você nao esta em um canal de voz**]
$cooldown[3s;Espere um pouco para usar o comando novamente]`
});