module.exports = ({
name: "loop",
code: `$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;Loop Ativado];false;Loop Desativado]
$onlyIf[$queueLength!=0;Não tem nada tocando.]
$onlyIf[$voiceID!=;**Você nao esta em um canal de voz**]`
});