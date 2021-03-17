module.exports = ({
name: "lista",
code: `$queue[1;30]
$onlyIf[$queueLength!=;**0;Não tem nada tocando.**]
$onlyIf[$voiceID!=;**Você nao esta em um canal de voz**]`
})