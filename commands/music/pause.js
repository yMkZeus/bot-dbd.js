module.exports = ({
name: "pausar",
code: `$pauseSong
**⏸️ Pausado**
$onlyIf[$queueLength!=0;Nao tem nada tocando.]
$onlyIf[$voiceID!=;**Você nao esta em um canal de voz**]`
});