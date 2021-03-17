module.exports = ({
name: "kick",
code: `$kick[$findUser[$message[1]]]
 $title[Chutado Na Bunda]
 $description[
 Usuario Chutado Do Servidor
 **Tag:** $userTag[$findUser[$message[1]]]
 **Mention:** <@$findUser[$message[1]]>
 **ID:** $findUser[$message[1]]]
 $footer[Chutado Por $username[$authorID]]
 $addTimestamp
 $color[RANDOM]
$onlyIf[$findUser[$message[1]]!=$clientID;**❌ Não Posso Expulsar eu Mesmo**]
$onlyIf[$findUser[$message[1]]!=$authorID;**❌ Não Posso Expulsar Voçê Mesmo**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌ Voçê Não Pode Expulsar Alguem Com um Cargo Superior ao Seu!**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌ Voçê Não Pode Expulsar Alguem Com um Cargo Superior ao Seu!**]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;**❌ Não foi encontrado um membro com este ID/nome/menção no servidor**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**❌ Não Consigo expulsar o Dono do Servidor!**]
$onlyIf[$message[1]!=;**❌ Por favor, mencione alguém para Expulsar. Uso correto:** \`$getServerVar[prefix]kick <@User> [Reação\\]\`]
$onlyBotPerms[kick;**❌ Não tenho Permissão de Expulsar!**]
$onlyPerms[kick;**❌ Voçê não tem Permissão de Executar Este Comando!**]`
});