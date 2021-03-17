module.exports = ({
name: "clear",
code: `$author[Limpeza;https://thumbs.gfycat.com/AltruisticDistinctAoudad-size_restricted.gif]
$description[**Pronto** \`$noMentionMessage $replaceText[$replaceText[&$mentioned[1]&;&&;messages\` **
foram limpos**;1];&$mentioned[1]&;**das últimas mensagens de**;1] $replaceText[$replaceText[&$mentioned[1]&;&&;;1];&$mentioned[1]&;<@$mentioned[1]>;1]]
$clear[$message]
$color[RANDOM]
$cooldown[10s;<@$authorID> **Você precisa esperar %time% para usar este comando novamente**]
$footer[Limpo Por: $username[$authorID]#$discriminator[$authorID]]
$suppressErrors[**Especifique um Numero Exemplo:** \`$getServerVar[prefix]clear <numero>\`]
$onlyIf[$noMentionMessage<=500; **Você pode Deletar 2-500 mensagens por comando**]
$onlyIf[$noMentionMessage>=2;**Você pode Deletar 2-500 mensagens por comando**]
$onlyIf[$noMentionMessage!=;** Adicione um número para apagar as mensagens*, **Especifique um Numero Exemplo:** \`$getServerVar[prefix]clear <number>\`]
$onlyIf[$isNumber[$noMentionMessage]==true;Escolha o número de mensagens para deletar! **Especifique um Numero Exemplo:** \`$getServerVar[prefix]clear <number>\`]
$onlyIf[$message[1]!=;**Especifique um Numero Exemplo:** \`$getServerVar[prefix]clear <number>\`]
$onlyBotPerms[managemessages;**Eu não tenho \`MANAGE_MESSAGES\` permissões para usar este comando**]
$onlyPerms[managemessages;**Você não tem esta permissão para excluir mensagens:** __**Gerenciar mensagens**__]`
});