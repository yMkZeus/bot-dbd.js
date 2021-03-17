module.exports = ({
    name: "ban",
    code: `
$color[RANDOM] 
$author[🌈 Usuario Fez Bosta e Foi Banido]
$addField[Sobre:;
Reação:
> $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Uma reação não foi fornecida.];false;$messageSlice[1]]
Date:
> $day $month $year
]
$addField[Info Do Usuario;
$userTag[$findUser[$message[1]]] - $findUser[$message[1]]]
$addField[Moderador;
$userTag - $authorID]
$thumbnail[$userAvatar[$findUser[$message[1]]]]
$ban[$findUser[$message[1]];$userTag: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Uma reação não foi fornecida.];false;$messageSlice[1]];7]
$if[$memberExists[$findUser[$message[1]]]==true]
$onlyIf[$rolePosition[$highestRole[$findUser[$message[1]]]]>$rolePosition[$highestRole];⛔ - Para usar isso, você precisa ter um Cargo mais Alto do que o usuário mencionado.]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - Você não pode banir a si mesmo (Ou então, eu não Consegui encontrar esse usuário)**]
$onlyIf[$findUser[$message[1]]!=$clientID;**⛔ - Não posso me banir, isso é ilegal.**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**⛔ - Voçê Não Pode Banir o Dono Do Servidor!**]
$elseIf[$memberExists[$findUser[$message[1]]]==false]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - Você não pode banir a si mesmo (Ou então, eu não Consegui encontrar esse usuário)**]
$endelseIf
$endif
$onlyIf[$isBanned[$findUser[$message[1]]]==false;**⛔ - Este Usuario ja Esta Banido Neste Servidor**]
$onlyIf[$message!=;**⛔ - Por favor, especifique o usuário que deseja banir. Uso correto:** \`$getServerVar[prefix]ban <@User> [Reação\\]\`]
$onlyPerms[ban;**⛔ - Para Usar Isso Voçê Precisa da Permissão \`banir Membros\`**]
 $onlyBotPerms[ban;**⛔ - Não Tenho a Permissão:** \`banir Membros\` Para Executar Esse Comando]`
});