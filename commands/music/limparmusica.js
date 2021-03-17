module.exports = ({
name: "limparlista",
code: `$clearSongQueue
$stopSong
$editIn[125ms;Lista limpa] ⚠️ Limpando...
$onlyIf[$queueLength!=0;**Não tem nada tocando.**]`
});