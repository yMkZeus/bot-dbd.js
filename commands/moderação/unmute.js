module.exports = ({
    name: "unmute",
    code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
    $description[**Feito, o Usuario ** <@$Mentioned[1]> Foi Desmutado Pelo Administrador <@$authorID>]
    $color[RANDOM]
    $takeRoles[$findUser[$message[1]];$getServerVar[CargoMuted]]
    $onlyPerms[manageserver;$customEmoji[Rufy] **Voçê Não Tem a Permissão** \`Gerenciar Servidor\`]
    $onlyIf[$Mentioned[1]!=;**Você Deve mencionar uma Pessoa Para Mutar, exemplo** \`$getServerVar[prefix]unmute @Zebrinha \`]`
});