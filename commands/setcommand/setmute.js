module.exports = ({
name: "setmute", 
code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
$description[**Feito, o Mute Agora Foi Setado Para o Cargo** <@$mentionedRoles[1]>]
$color[RANDOM]
$setServerVar[CargoMuted;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=;**Você Deve mencionar um Cargo, exemplo** \`$getServerVar[prefix]setmute @Muted /\`]
$onlyPerms[admin;$customEmoji[Rufy] **Voçê Não Tem a Permissão** \`ADMIN\`] 
`
})