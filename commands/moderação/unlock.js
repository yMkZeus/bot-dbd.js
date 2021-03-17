module.exports = ({
name: "unlock",
code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
$description[
$modifyChannelPerms[$channelID;+sendmessages;$guildID] **Este canal foi Destrancado com sucesso! Use**  \`$getServerVar[prefix]lock\` **Para Travar o Chat!**]  $onlyBotPerms[admin;❌|**Eu não tenho permissão de Administrador!]
$onlyPerms[manageserver;:x: **Voce Não Tem a Permissão** Gerenciar Servidor  **Para Usar Este Comando**]
`
});