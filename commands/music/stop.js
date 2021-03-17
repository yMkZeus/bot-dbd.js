module.exports = ({
name: "parar",
code: `$stopSong
$sendMessage[⏹️ Parado.;no]
$onlyIf[$queueLength!=0;Não tem nada tocando.]
$deleteIn[5s]`
});