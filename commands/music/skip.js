module.exports = ({
name: "pular",
code: `$skipSong
⏩ Pulado!
$onlyIf[$queueLength>1;So tem $queueLength Musica nao da]
$onlyIf[$queueLength!=0;**Não tem nada tocando.**]
$onlyIf[$voiceID!=;**Você nao esta em um canal de voz**]`
});