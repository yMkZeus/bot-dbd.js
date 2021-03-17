module.exports = ({
name: "resumir",
code: `$resumeSong
**▶️ Despausado**
$onlyIf[$queueLength!=0;Não tem nada tocando.]
$onlyIf[$voiceID!=;**Você nao esta em um canal de voz**]`
});