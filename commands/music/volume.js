module.exports = ({
name: "volume", 
code: `$volume[$message[1]]
$onlyIf[$message[1]<101;**O vulume maximo so e 100%**]
$onlyIf[$charCount[$message[1]]<4;Falha.]
$onlyIf[$isNumber[$message[1]]==true;Nao e um numero!]
$onlyIf[$message[1]!=;**Volume so pode ser mudado ate 1 - 100**]
$editIn[1s;**Vilume mudado para $message[1]%**] **Mudando..**
$onlyIf[$queueLength!=0;**Não tem nada tocando.**]
$onlyIf[$voiceID!=;**Você nao esta em um canal de voz**]`
});