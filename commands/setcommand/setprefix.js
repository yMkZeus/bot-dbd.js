module.exports = ({
name: "setprefix",
aliases: ['changeprefix', 'prefix'],
code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
$description[**Feito, Meu Novo Prefixo e** \`$message\`]
$color[RANDOM]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;**Você tem que colocar um prefixo, exemplo** \`$getServerVar[prefix]setprefix \`]
$onlyPerms[admin;$customEmoji[Rufy] **Voçê Não Tem a Permissão** \`ADMIN\`]`
});