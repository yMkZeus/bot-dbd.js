const dbd = require('dbd.js');

const bot = new dbd.Bot({
	token: 'ODIxNTI1OTc2ODI3NTU5OTU5.YFE_sA.crZnPvn05WWij713z3Uft7Lv6oM',
	prefix: '$getServerVar[prefix]'
});

bot.onMessage();

const fs = require('fs');

const folders = fs.readdirSync('./commands/');

for (const files of folders) {
	const folder = fs
		.readdirSync(`./commands/${files}/`)
		.filter(file => file.endsWith('.js'));

	for (const commands of folder) {
		const command = require(`./commands/${files}/${commands}`);
		bot.command(command);
	}
}

bot.variables({
	prefix: 's!'
});

bot.variables({
	CargoMuted: 'Muted'
});

bot.variables({
	Welcome: '',
});

bot.variables({
	Bye: '',
});

bot.awaitedCommand({
	name: 'awaitReaction1',
	code: ` $editMessage[$message[1];{title:! Mk Zeus Bot#6469 $ Painel de Ajuda } {description:**Ola** <@$authorID> **Bem-Vindo ao Painel de Ajuda V1 Abaixo Esta Todas as Categorias de Comandos Por Reação**

Categorias:
❪🔄❫ ➥ **Voltar**

❪1️⃣❫ ➥ **Painel de Moderação**

❪2️⃣❫ ➥ **Painel de Utilidades**

❪3️⃣❫ ➥ **Painel de Diversão**

❪🎵❫ ➥ **Painel de Musica**

❪🔧❫ ➥ **Painel de Configuração**}{color:RANDOM}{footer:🔄 Voltar}] `
});

bot.awaitedCommand({
	name: 'awaitReaction2',
	code: ` $editMessage[$message[1];{title:Painel de Moderação} {description:
 ❪❫ ➥ Punição
  \`$getServerVar[prefix]ban (usuario) (Motivo)\` **Bani o Usuario do Servidor**
 
  \`$getServerVar[prefix]kick (usuario)\` **Expulsa o Usuario do Servidor**
  
  \`$getServerVar[prefix]mute (usuario) (Motivo)\` **Silencia o Usuario**

  \`$getServerVar[prefix]unmute (usuario) (Motivo)\` **Des-Silencia o Usuario**
  
  \`$getServerVar[prefix]warn (usuario) (Motivo)\` **De um Aviso Para o Usuario**
   
  ❪❫ ➥ Falar
  \`$getServerVar[prefix]say\` **Faça o Bot Falar Algo**
  
  ❪❫ ➥ Chat
  \`$getServerVar[prefix]lock\` **Trava o Chat Atual**
   
  \`$getServerVar[prefix]unlock\` **Destrava o Chat Atual**
  
  \`$getServerVar[prefix]clear (Numero de Mensagens)\` **Limpa 2 Ate 500 Mensgens**}{color:RANDOM}{footer:🔄 Voltar}] `
});

bot.awaitedCommand({
	name: 'awaitReaction3',
	code: ` $editMessage[$message[1];{title:Painel de Utilidades} {description:**Your Text**}{color:RANDOM}{footer:🔄 Voltar}] `
});

bot.awaitedCommand({
	name: 'awaitReaction4',
	code: ` $editMessage[$message[1];{title:Painel de Diversão} {description:**Teste**}{color:RANDOM}{footer:🔄 Voltar}] `
});

bot.awaitedCommand({
	name: 'awaitReaction5',
	code: ` $editMessage[$message[1];{title:Painel de Musica} {description:
 ❪❫ ➥ \`$getServerVar[prefix]play\` Ira Tocar uma Musica em Um Canal de Voz
 
 ❪❫ ➥ \`$getServerVar[prefix]pausar\` Ira Pausar a Musica Tocando no Momento
 
 ❪❫ ➥ \`$getServerVar[prefix]pular\` Ira Pular a Musica Tocando e Ira Para a Proxima
 
 ❪❫ ➥ \`$getServerVar[prefix]resumir\` Ira FAzer a Musica Voltar a Tocar
 
 ❪❫ ➥ \`$getServerVar[prefix]parar\` Finaliza a Musica
 
 ❪❫ ➥ \`$getServerVar[prefix]volume\` Define um Volume Para a Musica
 
 ❪❫ ➥ \`$getServerVar[prefix]infosong\` Ve informações da Musica
 
 ❪❫ ➥ \`$getServerVar[prefix]lista\` Ve a Lista de Musicas
 
 ❪❫ ➥ \`$getServerVar[prefix]limparlista\` Limpa a PlayList de Musicas
 
 ❪❫ ➥ \`$getServerVar[prefix]loop\` Faz a Musica ser Tocada em LOOP}{color:RANDOM}{footer:🔄 Voltar}] `
});

bot.awaitedCommand({
	name: 'awaitReaction6',
	code: ` $editMessage[$message[1];{title:Painel de Configuração} {description:
  \`$getServerVar[prefix]setmute @cargo\` **Setara o Cargo que sera Usado Para Mutes Futuros**
  
  \`$getServerVar[prefix]setprefix (NovoPrefixo)\` **Este Comando Permite Mudar Meu Prefixo**
  
  \`$getServerVar[prefix]setwelcome #canal\` **Seta o Canal de Bem Vindo**
  
  \`$getServerVar[prefix]setbye #canal\` **Seta o Canal de Saida**}{color:RANDOM}{footer:🔄 Voltar}] `
});

bot.command({
name: "setwelcome",
code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
$description[Feito, a entrada Agora Foi Setado Para o Canal <#$mentionedChannels[1;yes]>]
$color[RANDOM]
$setServerVar[Welcome;$mentionedChannels[1;yes]]
$onlyIf[$mentionedChannels[1;yes]!=;Você Deve mencionar um Canal, exemplo \`$getServerVar[prefix]setwelcome #Geral\` ]
$onlyPerms[admin;$customEmoji[Rufy] Voçê Não Tem a Permissão \`Administrador\`] 
`
})

bot.command({
name: "setbye",
code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
$description[Feito, a saida Agora Foi Setado Para o Canal <#$mentionedChannels[1;yes]>]
$color[RANDOM]
$setServerVar[Bye;$mentionedChannels[1;yes]]
$onlyIf[$mentionedChannels[1;yes]!=;Você Deve mencionar um Canal, exemplo \`$getServerVar[prefix]setbye #Geral\` ]
$onlyPerms[admin;$customEmoji[Rufy] Voçê Não Tem a Permissão \`Administrador\`] 
`
})

bot.joinCommand({
        channel: "$getServerVar[Welcome]",
        code: `$title[Bem Vindo(a) Ao $serverName]
        $description[**Ola** <@$authorID> **que bom Que Se Juntou Conosco!**
        
        **❪❫ ➥Caso Precise de Ajuda Chame Nossa Equipe!**
        **❪❫ ➥Leia as Regras Do Servidor Para Evitar Punições Futuras!**
        **❪❫ ➥Caso Precise so Usar $getServerVar[prefix]ajuda Para me Chamar!**

        **ID do Usuario:**
        \`$authorID\`

        **Data da Conta:**
        \`$creationDate[$authorID;time]\`

        **Tag Do discord:**
        \`$username $userTag[$authorID]\`]
        $color[RANDOM]
        $footer[Entrou ]
        $addTimestamp
        `
})
bot.onJoined()

bot.leaveCommand({
        channel: "$getServerVar[Bye]",
        code: `$title[Que Pena!]
        $description[**o membro** <@$authorID> **Saiu do Servidor $serverName!**

        **ID do Usuario:**
        \`$authorID\`

        **Data da Conta:**
        \`$creationDate[$authorID;time]\`

        **Tag Do discord:**
        \`$username $userTag[$authorID]\`]
        $color[RANDOM]
        $footer[Saiu ]
        $addTimestamp`
})
bot.onLeave()

bot.status({
  text: "Bot Criado Por ! MdZ Zeus Maker#8910",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "Use s!ajuda Para Ver Meus Comandos!",
  type: "LISTENING",
  time: 12
})

bot.status({
  text: "Estou em $serverCount Servidores",
  type: "WATCHING",
  time: 12
})