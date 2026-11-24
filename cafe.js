'use strict';

const text = {
  en: {
    silver: 'Silver', gold: 'Gold', table: 'Table {0}', carrying: 'Choose the table for {0}.',
    wrongTable: 'This dish belongs at table {0}.', comboOrder: '{0} dishes still to serve',
    regular: 'Regular', favorite: 'Favorite dish', friends: 'A regular brought a friend today.',
    timeBuy: '+12 s · 1 gold', timeBought: '12 extra seconds for this shift and waiting guests.',
    hintBuy: 'Recipe hint · 2 silver', boostBuy: 'Finish this dish · 5 silver', boostDone: 'The dish is ready to serve.',
    menuSetup: 'Today’s menu · Choose at least three dishes before opening.',
    menuOn: 'On the menu', menuOff: 'Add to the menu',
    staffTitle: 'Staff for today', staffNone: 'Work solo', staffCook: 'Ivo Hedgehog · bakehouse',
    staffWait: 'Otto Otter · table service', staffHire: 'Hire · {0} silver', staffChosen: 'Selected',
    staffInfo: 'Ivo completes the first recipe step. Otto brings finished dishes to the right tables.',
    staffWage: 'The wage is paid when you hire. Select one assistant per day.',
    series: 'Service streak', bestSeries: 'Best streak',
    actionPour: 'Hold to pour', actionStir: 'Stir in a circle', actionOven: 'Tap when the marker is in the green zone',
    actionAssist: 'Complete with a tap', actionEarly: 'Timing missed · the guest waits 2 seconds less.',

    title: 'Café by the Lake', tagline: 'A woodland café for animal guests',
    startGame: 'Start game', continueGame: 'Continue',
    loading: 'Opening the café…', loadError: 'Your saved game is temporarily unavailable.', retry: 'Try again',
    difficulty: 'Difficulty', difficultyTime: '{0} s per day', chooseDifficulty: 'Choose before opening.',
    prepareOrder: 'Prepare', kitchenBusy: 'Kitchen busy', preparingOrder: 'Preparing · {0} s', readyOrder: 'Ready to serve',
    recipeSequence: 'Tap the steps in order', recipeProgress: '{0} of {1} steps done', recipeHint: 'Show recipe',
    recipeWrong: 'Wrong step · the guest waits 2 seconds less.',
    viewKitchen: 'Kitchen', viewLake: 'Lakeside', kitchenChef: 'Mara Badger', kitchenIdle: 'Mara’s kitchen',
    kitchenIdleDetail: 'Mara is ready for the next order.', kitchenOrder: '{0} orders',
    kitchenMaking: 'Mara is preparing the order', kitchenReady: 'Ready at the counter', kitchenServed: 'Served to {0}',
    kitchenMissed: '{0} leaves disappointed', kitchenMissedDetail: 'The guest left without their order.',
    menuPrice: '{0} silver',
    day: 'Day', coins: 'Coins', reputation: 'Reputation', guestbook: 'Guestbook', tableCount: '{0} / {1} tables',
    orders: 'Orders', pantry: 'Pantry', build: 'Build', journal: 'Journal', help: 'How to play',
    open: 'Open café', nextDay: 'Start day {0}', resume: 'Resume', pause: 'Pause', close: 'Close café',
    prep: 'Before opening', openScene: 'Open for guests', paused: 'Café paused', closed: 'Closing time',
    prepare: 'Stock up, then open for the day.', running: '{0} s until closing · {1}/{2} guests arrived', nextGuest: 'Next guest in {0} s',
    closing: 'Today’s guests have been served or have left.', tomorrow: 'Review the day in the journal.',
    firstMorning: 'It’s your first morning by the lake. Open when you’re ready.',
    loaded: 'Saved game restored.', extended: 'Saved game restored. More campaign chapters are ready to play.', opened: 'The first guest is here. Prepare the order, then serve it before they leave.',
    guestLeft: '{0} guest(s) left before being served.', served: '+{0} coins from {1}.',
    tipped: '+{0} coins from {1}, including a {2}-coin tip.',
    bought: 'Received {0} portions of {1}.', built: '{0} is ready.', newMorning: 'Good morning! Check your pantry before opening.',
    gardenMorning: 'Good morning! Your garden has supplied fresh ingredients.',
    dayDone: 'Day {0} finished. {1} guests served and {2} coins earned.',
    goalDone: 'Chapter complete: {0}.', ending: 'Your café is a lakeside landmark. The campaign is complete.',
    openFirst: 'Ready for your first guest?', openFirstBody: 'Open the café to take the first order. Each order shows ingredients and waiting time.',
    waiting: 'The tables are free', waitingBody: 'Another guest will arrive shortly.',
    noneToday: 'Nobody else is on the way', noneTodayBody: 'Close the café to finish the day.',
    dayFinished: 'The day is over', dayFinishedBody: 'Visit the journal for your results. Start a new day when you’re ready.',
    serve: 'Serve · {0}', missing: '{0} missing', remaining: '{0} s', orderTime: 'Guest patience',
    stock: '{0} portions in stock', buy: 'Buy · {0}', buyCaption: 'Supplies arrive in boxes of {0} portions.',
    emergency: 'Free supply', emergencyCaption: 'When coins run low, you can request one emergency box per day.',
    menu: 'Menu', locked: 'Unlocks with {0}', opensDay: 'Available from day {0}',
    installed: 'Built', buildPrice: 'Build · {0}',
    journalEmpty: 'No finished days yet', journalEmptyBody: 'Your first daily report will appear after closing.',
    journalStats: '{0} served · {1} left · {2} coins earned',
    goal: 'Campaign goal', chapterList: 'Chapters', chapterStatus: 'Chapter {0} · {1}',
    chapterDone: 'Completed', chapterCurrent: 'In progress', chapterLater: 'Upcoming', chapterFrom: 'From day {0}',
    goalDay: 'Finish day {0}', goalRep: '{0}/{1} reputation', goalBuild: '{0}/{1} upgrades',
    goalServe: '{0}/{1} guests served', endless: 'Keep your café open', endlessBody: 'All {0} chapters are complete. Free play is open.',
    today: 'Today’s café', servedLabel: 'Served', lost: 'Left', revenue: 'Revenue',
    saveReady: 'Progress saves automatically.', saveDone: 'Progress saved.', saveFailed: 'Could not save. Will retry after your next action.',
    reset: 'New game', resetTitle: 'Start a new café?', resetBody: 'Starting over replaces your current progress.', resetYes: 'Start over',
    cancel: 'Cancel', okay: 'Got it', switch: 'Deutsch', audioOn: 'Sound effects: on', audioOff: 'Sound effects: off',
    audioPlatformOff: 'Sound muted by YouTube', platformPaused: 'Game paused by YouTube',
    music: 'Music', musicFile: 'Choose your audio file', musicVolume: 'Music volume',
    musicPlay: 'Play music', musicPause: 'Pause music', musicError: 'Could not play this audio file.',
    helpSteps: [
      'Choose a difficulty before opening. Tap the preparation steps in order, then serve the dish. Use Show recipe if you get stuck. Quick service earns a tip.',
      'Buy ingredients in the Pantry. You can restock while guests are waiting.',
      'Spend coins on upgrades in Build. New recipes and more seats help you grow.',
      'Close when the final guests leave or when the day ends. Check the Journal and work toward the campaign goals.'
    ]
  },
  de: {
    silver: 'Silber', gold: 'Gold', table: 'Tisch {0}', carrying: 'Wähle den Tisch für {0}.',
    wrongTable: 'Das Gericht gehört an Tisch {0}.', comboOrder: 'Noch {0} Gerichte zu servieren',
    regular: 'Stammgast', favorite: 'Lieblingsgericht', friends: 'Ein Stammgast hat heute einen Freund mitgebracht.',
    timeBuy: '+12 Sek. · 1 Gold', timeBought: '12 Sekunden extra für den Spieltag und wartende Gäste.',
    hintBuy: 'Rezepthinweis · 2 Silber', boostBuy: 'Gericht fertigstellen · 5 Silber', boostDone: 'Das Gericht ist servierfertig.',
    menuSetup: 'Tageskarte · Wähle vor dem Öffnen mindestens drei Angebote.',
    menuOn: 'Auf der Karte', menuOff: 'Auf die Karte',
    staffTitle: 'Personal für heute', staffNone: 'Allein arbeiten', staffCook: 'Ivo Igel · Backstube',
    staffWait: 'Otto Otter · Tischservice', staffHire: 'Einstellen · {0} Silber', staffChosen: 'Eingestellt',
    staffInfo: 'Ivo erledigt den ersten Rezeptschritt. Otto bringt fertige Gerichte an den richtigen Tisch.',
    staffWage: 'Der Lohn wird beim Einstellen fällig. Pro Tag kannst du eine Aushilfe einstellen.',
    series: 'Service-Serie', bestSeries: 'Beste Serie',
    actionPour: 'Zum Eingießen gedrückt halten', actionStir: 'In einem Kreis rühren', actionOven: 'Tippen, wenn der Marker im grünen Bereich ist',
    actionAssist: 'Mit einem Tipp abschließen', actionEarly: 'Zeitpunkt verpasst · der Gast wartet 2 Sekunden weniger.',

    title: 'Café am See', tagline: 'Dein Waldcafé für tierische Gäste',
    startGame: 'Spiel starten', continueGame: 'Weiterspielen',
    loading: 'Das Café öffnet gleich …', loadError: 'Der Spielstand ist vorübergehend nicht verfügbar.', retry: 'Erneut versuchen',
    difficulty: 'Schwierigkeit', difficultyTime: '{0} s pro Tag', chooseDifficulty: 'Vor der Öffnung wählen.',
    prepareOrder: 'Zubereiten', kitchenBusy: 'Küche belegt', preparingOrder: 'In Arbeit · {0} s', readyOrder: 'Bereit zum Servieren',
    recipeSequence: 'Tippe die Schritte in der richtigen Reihenfolge an', recipeProgress: '{0} von {1} Schritten erledigt', recipeHint: 'Rezept ansehen',
    recipeWrong: 'Falscher Schritt · der Gast wartet 2 Sekunden weniger.',
    viewKitchen: 'Küche', viewLake: 'Seeufer', kitchenChef: 'Mara Dachs', kitchenIdle: 'Maras Küche',
    kitchenIdleDetail: 'Mara wartet auf die nächste Bestellung.', kitchenOrder: '{0} bestellt',
    kitchenMaking: 'Mara bereitet die Bestellung zu', kitchenReady: 'An der Ausgabe bereit', kitchenServed: 'Für {0} serviert',
    kitchenMissed: '{0} geht enttäuscht', kitchenMissedDetail: 'Der Gast hat seine Bestellung nicht bekommen.',
    menuPrice: '{0} Silber',
    day: 'Tag', coins: 'Münzen', reputation: 'Ruf', guestbook: 'Gästebuch', tableCount: '{0} / {1} Tische',
    orders: 'Bestellungen', pantry: 'Vorrat', build: 'Ausbau', journal: 'Chronik', help: 'Spielhilfe',
    open: 'Café öffnen', nextDay: 'Tag {0} beginnen', resume: 'Fortsetzen', pause: 'Pause', close: 'Café schließen',
    prep: 'Vor der Öffnung', openScene: 'Geöffnet für Gäste', paused: 'Café pausiert', closed: 'Feierabend',
    prepare: 'Prüfe deinen Vorrat und öffne dann das Café.', running: 'Noch {0} s · {1}/{2} Gäste angekommen', nextGuest: 'Nächster Gast in {0} s',
    closing: 'Alle Gäste für heute wurden bedient oder sind gegangen.', tomorrow: 'Deine Tagesbilanz steht in der Chronik.',
    firstMorning: 'Der erste Morgen am See. Öffne das Café, wenn du bereit bist.',
    loaded: 'Spielstand geladen.', extended: 'Spielstand geladen. Weitere Kampagnenkapitel warten auf dich.', opened: 'Dein erster Gast ist da. Bereite die Bestellung zu und serviere sie, bevor er geht.',
    guestLeft: '{0} Gäste sind nach langem Warten gegangen.', served: '+{0} Münzen von {1}.',
    tipped: '+{0} Münzen von {1}, inklusive {2} Münzen Trinkgeld.',
    bought: '{0} Portionen {1} geliefert.', built: '{0} ist fertig.', newMorning: 'Guten Morgen! Prüfe deinen Vorrat vor der Öffnung.',
    gardenMorning: 'Guten Morgen! Dein Garten hat frische Zutaten geliefert.',
    dayDone: 'Tag {0} ist vorbei. {1} Gäste bedient und {2} Münzen verdient.',
    goalDone: 'Kapitel abgeschlossen: {0}.', ending: 'Dein Café ist jetzt ein Wahrzeichen am See. Die Kampagne ist abgeschlossen.',
    openFirst: 'Bereit für den ersten Gast?', openFirstBody: 'Öffne das Café. Jede Bestellung zeigt Zutaten und Wartezeit.',
    waiting: 'Die Tische sind frei', waitingBody: 'Der nächste Gast kommt in Kürze.',
    noneToday: 'Heute kommt niemand mehr', noneTodayBody: 'Schließe das Café, um den Tag abzurechnen.',
    dayFinished: 'Der Tag ist vorbei', dayFinishedBody: 'Deine Tagesbilanz steht in der Chronik. Beginne den nächsten Morgen, wenn du bereit bist.',
    serve: 'Servieren · {0}', missing: '{0} fehlt', remaining: '{0} s', orderTime: 'Wartezeit',
    stock: '{0} Portionen im Vorrat', buy: 'Kaufen · {0}', buyCaption: 'Zutatenkisten enthalten je {0} Portionen.',
    emergency: 'Gratis-Nachschub', emergencyCaption: 'Bei knappen Münzen kannst du einmal am Tag eine Notfallkiste bestellen.',
    menu: 'Speisekarte', locked: 'Freischaltung durch {0}', opensDay: 'Verfügbar ab Tag {0}',
    installed: 'Gebaut', buildPrice: 'Bauen · {0}',
    journalEmpty: 'Noch keine Tagesbilanz', journalEmptyBody: 'Dein erster Tagesbericht erscheint nach Feierabend.',
    journalStats: '{0} bedient · {1} gegangen · {2} Münzen Umsatz',
    goal: 'Kampagnenziel', chapterList: 'Kapitelübersicht', chapterStatus: 'Kapitel {0} · {1}',
    chapterDone: 'Abgeschlossen', chapterCurrent: 'In Arbeit', chapterLater: 'Ausstehend', chapterFrom: 'Ab Tag {0}',
    goalDay: 'Tag {0} abschließen', goalRep: '{0}/{1} Ruf', goalBuild: '{0}/{1} Ausbauten',
    goalServe: '{0}/{1} Gäste bedient', endless: 'Betreibe dein Café weiter', endlessBody: 'Alle {0} Kapitel sind abgeschlossen. Du kannst jetzt frei weiterspielen.',
    today: 'Heutiger Betrieb', servedLabel: 'Bedient', lost: 'Gegangen', revenue: 'Umsatz',
    saveReady: 'Fortschritt wird automatisch gespeichert.', saveDone: 'Fortschritt gespeichert.', saveFailed: 'Speichern fehlgeschlagen. Neuer Versuch bei der nächsten Aktion.',
    reset: 'Neues Spiel', resetTitle: 'Ein neues Café eröffnen?', resetBody: 'Beim Neustart wird dein bisheriger Fortschritt ersetzt.', resetYes: 'Neu beginnen',
    cancel: 'Abbrechen', okay: 'Verstanden', switch: 'English', audioOn: 'Spieltöne: an', audioOff: 'Spieltöne: aus',
    audioPlatformOff: 'Ton durch YouTube stummgeschaltet', platformPaused: 'Spiel durch YouTube pausiert',
    music: 'Musik', musicFile: 'Eigene Audiodatei wählen', musicVolume: 'Musiklautstärke',
    musicPlay: 'Musik abspielen', musicPause: 'Musik pausieren', musicError: 'Diese Audiodatei konnte nicht abgespielt werden.',
    helpSteps: [
      'Wähle vor der Öffnung die Schwierigkeit. Tippe die Zubereitungsschritte der Reihe nach an und serviere dann. Bei Bedarf hilft „Rezept ansehen“. Schneller Service bringt Trinkgeld.',
      'Kaufe Zutaten unter Vorrat. Du kannst auch bei geöffnetem Café nachbestellen.',
      'Investiere unter Ausbau in neue Rezepte und zusätzliche Tische.',
      'Schließe nach dem letzten Gast oder bei Ende der Öffnungszeit. In der Chronik siehst du deine Ergebnisse.'
    ]
  }
};

const goods = {
  beans: { en: 'Coffee beans', de: 'Kaffeebohnen', cost: 8 },
  flour: { en: 'Flour', de: 'Mehl', cost: 7 },
  berries: { en: 'Wild berries', de: 'Waldbeeren', cost: 9 },
  honey: { en: 'Honey', de: 'Honig', cost: 10 },
  herbs: { en: 'Herbs', de: 'Kräuter', cost: 7 },
  apples: { en: 'Lake apples', de: 'Seeäpfel', cost: 11, upgrade: 'orchard' }
};
const recipes = {
  coffee: { en: 'Woodland coffee', de: 'Waldkaffee', price: 8, needs: ['beans'] },
  pastry: { en: 'Warm pastry', de: 'Warmes Gebäck', price: 9, needs: ['flour'] },
  tart: { en: 'Berry tart', de: 'Beerentörtchen', price: 14, needs: ['flour', 'berries'] },
  cake: { en: 'Coffee & berry cake', de: 'Kaffee & Beerentorte', price: 22, needs: ['beans', 'flour', 'berries'], upgrade: 'oven' },
  honeyroll: { en: 'Honey bun', de: 'Honigschnecke', price: 19, needs: ['flour', 'honey'], upgrade: 'counter' },
  tea: { en: 'Lakeside herbal tea', de: 'Kräutertee vom See', price: 13, needs: ['herbs'], upgrade: 'garden' },
  lemonade: { en: 'Wild berry lemonade', de: 'Waldbeerlimonade', price: 20, needs: ['berries', 'honey'], upgrade: 'jetty' },
  picnic: { en: 'Forest picnic', de: 'Waldpicknick', price: 32, needs: ['flour', 'berries', 'honey', 'herbs'], upgrade: 'pavilion' },
  galette: { en: 'Apple galette', de: 'Apfelgalette', price: 24, needs: ['apples', 'flour'], upgrade: 'orchard' },
  feast: { en: 'Festival platter', de: 'Seefest-Platte', price: 38, needs: ['apples', 'honey', 'berries', 'flour'], upgrade: 'festivalKitchen' },
  honeyTea: {"en":"Forest honey tea","de":"Waldhonigtee","price":22,"needs":["herbs","honey"],"upgrade":"teaRoom"},
  strudel: {"en":"Apple strudel","de":"Apfelstrudel","price":32,"needs":["apples","flour","honey"],"upgrade":"bakehouse"},
  galaMenu: {"en":"Lakeside tasting menu","de":"Seemenü","price":53,"needs":["apples","honey","berries","flour","herbs"],"upgrade":"banquetHall"}
};
const preparationSteps = {
  coffee: { de: ['Bohnen mahlen', 'Kaffee aufbrühen', 'In die Tasse gießen'], en: ['Grind the beans', 'Brew the coffee', 'Pour into the cup'] },
  pastry: { de: ['Teig kneten', 'Gebäck formen', 'Im Ofen backen'], en: ['Knead the dough', 'Shape the pastry', 'Bake in the oven'] },
  tart: { de: ['Törtchenboden formen', 'Boden backen', 'Mit Waldbeeren belegen'], en: ['Shape the tart shell', 'Bake the shell', 'Top with wild berries'] },
  cake: { de: ['Tortenboden backen', 'Mit Beeren füllen', 'Kaffee aufbrühen', 'Torte und Kaffee anrichten'], en: ['Bake the cake base', 'Fill with berries', 'Brew the coffee', 'Plate the cake and coffee'] },
  honeyroll: { de: ['Teig ausrollen', 'Honig aufstreichen', 'Einrollen und backen'], en: ['Roll out the dough', 'Spread the honey', 'Roll up and bake'] },
  tea: { de: ['Kräuter ins Teesieb geben', 'Heißes Wasser aufgießen', 'Ziehen lassen und Sieb entfernen'], en: ['Put herbs in the infuser', 'Pour in hot water', 'Steep and remove the infuser'] },
  lemonade: { de: ['Beeren zerdrücken', 'Mit Wasser und Honig mischen', 'Ins Glas gießen'], en: ['Crush the berries', 'Mix with water and honey', 'Pour into a glass'] },
  picnic: { de: ['Brötchen backen', 'Honig und Beeren abfüllen', 'Kräuter dazulegen', 'Alles in den Korb packen'], en: ['Bake the rolls', 'Pack honey and berries', 'Add the herbs', 'Pack the picnic basket'] },
  galette: { de: ['Teig ausrollen', 'Apfelscheiben auflegen', 'Ränder falten und backen'], en: ['Roll out the pastry', 'Arrange the apple slices', 'Fold the edges and bake'] },
  feast: { de: ['Mini-Törtchen backen', 'Äpfel schneiden', 'Beeren und Honig dazugeben', 'Auf der Platte anrichten'], en: ['Bake the mini tarts', 'Slice the apples', 'Add berries and honey', 'Arrange on the platter'] },
  honeyTea: { de: ['Kräuter ins Teesieb geben', 'Heißes Wasser aufgießen', 'Ziehen lassen und Sieb entfernen', 'Honig einrühren'], en: ['Put herbs in the infuser', 'Pour in hot water', 'Steep and remove the infuser', 'Stir in honey'] },
  strudel: { de: ['Teig dünn ausziehen', 'Äpfel und Honig darauf verteilen', 'Strudel einrollen', 'Im Ofen backen'], en: ['Stretch the pastry thin', 'Spread the apples and honey', 'Roll up the strudel', 'Bake in the oven'] },
  galaMenu: { de: ['Gebäck backen', 'Apfel-Beeren-Häppchen vorbereiten', 'Mit Honig und Kräutern verfeinern', 'Auf dem Seeteller anrichten'], en: ['Bake the pastries', 'Prepare the apple and berry bites', 'Finish with honey and herbs', 'Arrange on the lakeside plate'] }
};
const upgrades = {
  terrace: { en: 'Lakeside terrace', de: 'Seeterrasse', cost: 44, day: 1, info: { en: 'Adds one table.', de: 'Ein zusätzlicher Tisch.' } },
  oven: { en: 'Bakery oven', de: 'Backstube', cost: 55, day: 1, info: { en: 'Adds coffee & berry cake to the menu.', de: 'Kaffee & Beerentorte kommen auf die Karte.' } },
  garden: { en: 'Herb garden', de: 'Kräutergarten', cost: 48, day: 2, info: { en: 'Adds herbal tea. Grows 2 herbs and 1 berry portion each morning.', de: 'Kräutertee auf der Karte. Jeden Morgen wachsen 2 Kräuter- und 1 Beerenportion nach.' } },
  lanterns: { en: 'Shore lanterns', de: 'Uferlaternen', cost: 61, day: 3, info: { en: 'Guests wait 8 seconds longer.', de: 'Gäste warten 8 Sekunden länger.' } },
  counter: { en: 'Honey counter', de: 'Honigtheke', cost: 75, day: 4, info: { en: 'Adds honey buns and stocks 3 portions of honey.', de: 'Honigschnecken auf der Karte und 3 Portionen Honig im Vorrat.' } },
  jetty: { en: 'Wooden jetty', de: 'Bootssteg', cost: 95, day: 6, info: { en: 'Adds one table and berry lemonade.', de: 'Ein weiterer Tisch und Waldbeerlimonade.' } },
  pantry: { en: 'Storage shelves', de: 'Vorratsregale', cost: 110, day: 8, info: { en: 'Each purchased box contains 6 portions.', de: 'Gekaufte Kisten enthalten je 6 Portionen.' } },
  pavilion: { en: 'Forest pavilion', de: 'Waldpavillon', cost: 146, day: 10, info: { en: 'Adds the forest picnic and raises fast-service tips by 1 coin.', de: 'Waldpicknick auf der Karte. Schneller Service bringt 1 Münze extra.' } },
  orchard: { en: 'Lakeside orchard', de: 'Obstgarten', cost: 170, day: 15, info: { en: 'Adds apple galettes and grows 3 apples each morning.', de: 'Apfelgalette auf der Karte. Jeden Morgen wachsen 3 Seeäpfel nach.' } },
  festivalKitchen: { en: 'Festival kitchen', de: 'Festküche', cost: 208, day: 19, requires: 'orchard', info: { en: 'Adds the festival platter.', de: 'Die Seefest-Platte kommt auf die Karte.' } },
  meadow: { en: 'Festival meadow', de: 'Festwiese', cost: 240, day: 23, info: { en: 'Adds one table and welcomes one more guest each day.', de: 'Ein weiterer Tisch und Platz für einen zusätzlichen Gast pro Tag.' } },
  teaRoom: {"en":"Tea room","de":"Teestube","cost":280,"day":29,"requires":"garden","info":{"en":"Adds forest honey tea.","de":"Waldhonigtee kommt auf die Karte."}},
  bakehouse: {"en":"Lakeside bakehouse","de":"Backhaus","cost":330,"day":36,"requires":"festivalKitchen","info":{"en":"Adds apple strudel. Produces 2 portions of flour each morning.","de":"Apfelstrudel kommt auf die Karte. Jeden Morgen kommen 2 Portionen Mehl hinzu."}},
  boathouse: {"en":"Boathouse","de":"Bootshaus","cost":385,"day":43,"requires":"jetty","info":{"en":"Adds one table and welcomes one extra guest each day.","de":"Ein zusätzlicher Tisch und ein weiterer Gast pro Tag."}},
  winterGarden: {"en":"Winter garden","de":"Wintergarten","cost":445,"day":50,"requires":"teaRoom","info":{"en":"Guests wait 5 seconds longer, and 2 herbs grow each morning.","de":"Die Gäste warten 5 Sekunden länger. Jeden Morgen wachsen 2 Portionen Kräuter nach."}},
  banquetHall: {"en":"Banquet hall","de":"Festsaal","cost":520,"day":57,"requires":"winterGarden","info":{"en":"Adds the lakeside tasting menu.","de":"Das Seemenü kommt auf die Karte."}}
};
const guests = [
  ['🦊', 'Fritzi Fuchs', 'Fritzi Fox'], ['🐰', 'Hedi Hase', 'Hedy Hare'],
  ['🐻', 'Bodo Bär', 'Bodo Bear'], ['🦔', 'Ivo Igel', 'Ivy Hedgehog'],
  ['🦦', 'Otto Otter', 'Otto Otter'], ['🦆', 'Enna Ente', 'Enna Duck'],
  ['🐿️', 'Sina Eichhorn', 'Sina Squirrel'], ['🦝', 'Mika Waschbär', 'Mika Raccoon']
];
const guestSprites = ['fox', 'hare', 'bear', 'hedgehog', 'otter', 'duck', 'squirrel', 'raccoon'];
const dishSprites = {
  coffee: 'coffee', pastry: 'pastry', tart: 'tart', cake: 'cake', honeyroll: 'roll', tea: 'herbal',
  lemonade: 'lemonade', picnic: 'picnic', galette: 'galette', feast: 'festival', honeyTea: 'tea', strudel: 'strudel', galaMenu: 'gala'
};
const EMBEDDED_ART = {};
const CAFE_MUSIC_SRC = './Seeruhe.mp3';
const recipeSounds = {
  coffee: ['grind', 'pour', 'pour'], pastry: ['dough', 'dough', 'oven'], tart: ['dough', 'oven', 'plate'],
  cake: ['oven', 'mix', 'pour', 'plate'], honeyroll: ['dough', 'mix', 'oven'], tea: ['prepare', 'pour', 'steep'],
  lemonade: ['grind', 'mix', 'pour'], picnic: ['oven', 'mix', 'prepare', 'plate'], galette: ['dough', 'cut', 'oven'],
  feast: ['oven', 'cut', 'mix', 'plate'], honeyTea: ['prepare', 'pour', 'steep', 'mix'],
  strudel: ['dough', 'mix', 'dough', 'oven'], galaMenu: ['oven', 'cut', 'mix', 'plate']
};
const weather = [
  { id: 'sun', en: 'Sunny', de: 'Sonnig', wait: 0, pace: 0 },
  { id: 'fog', en: 'Morning fog', de: 'Morgennebel', wait: 4, pace: 1 },
  { id: 'rain', en: 'Light rain', de: 'Landregen', wait: 2, pace: 2 },
  { id: 'wind', en: 'Warm wind', de: 'Warmer Wind', wait: -3, pace: -1 },
  { id: 'dusk', en: 'Golden evening', de: 'Abendlicht', wait: 2, pace: -1 }
];
const events = {
  3: { en: 'Forest market · +2 tips', de: 'Waldmarkt · +2 Trinkgeld', tip: 2, guests: 0 },
  7: { en: 'Lakeside picnic · +2 guests', de: 'Seepicknick · +2 Gäste', tip: 0, guests: 2 },
  11: { en: 'Harvest day · +2 tips', de: 'Erntefest · +2 Trinkgeld', tip: 2, guests: 0 },
  14: { en: 'Lantern festival · +2 guests', de: 'Laternenfest · +2 Gäste', tip: 0, guests: 2 },
  17: { en: 'Apple market · +2 tips', de: 'Apfelmarkt · +2 Trinkgeld', tip: 2, guests: 0 },
  21: { en: 'Shore party · +2 guests', de: 'Uferfest · +2 Gäste', tip: 0, guests: 2 },
  25: { en: 'Evening concert · +2 tips', de: 'Abendkonzert · +2 Trinkgeld', tip: 2, guests: 0 },
  28: { en: 'Grand lake festival · +2 guests and tips', de: 'Großes Seefest · +2 Gäste und Trinkgeld', tip: 2, guests: 2 },
  35: {"en":"Tea tasting · +2 tips","de":"Teeverkostung · +2 Trinkgeld","tip":2,"guests":0},
  42: {"en":"Bakery market · +2 guests","de":"Backhausmarkt · +2 Gäste","tip":0,"guests":2},
  49: {"en":"Lakeside regatta · +2 guests","de":"Regatta · +2 Gäste","tip":0,"guests":2},
  56: {"en":"Winter garden concert · +2 tips","de":"Wintergartenkonzert · +2 Trinkgeld","tip":2,"guests":0},
  63: {"en":"Lakeside gala · +3 guests and +2 tips","de":"Jahresgala · +3 Gäste und +2 Trinkgeld","tip":2,"guests":3}
};
const chapters = [
  { en: 'A fresh start', de: 'Ein neuer Anfang', day: 3, rep: 36, builds: 1, served: 10 },
  { en: 'A lakeside gathering place', de: 'Ein Treffpunkt am See', day: 7, rep: 64, builds: 3, served: 30 },
  { en: 'A woodland landmark', de: 'Ein Wahrzeichen am See', day: 14, rep: 85, builds: 6, served: 72 },
  { en: 'A party on the shore', de: 'Ein Fest am Ufer', day: 21, rep: 92, builds: 9, served: 130 },
  { en: 'The grand lake festival', de: 'Das große Seefest', day: 28, rep: 95, builds: 11, served: 190 },
  {"en":"The tea room opens","de":"Die Teestube am See","day":35,"rep":95,"builds":12,"served":260},
  {"en":"A bakery by the shore","de":"Das Backhaus am Ufer","day":42,"rep":95,"builds":13,"served":330},
  {"en":"The boathouse regatta","de":"Die Bootshaus-Regatta","day":49,"rep":96,"builds":14,"served":400},
  {"en":"The winter garden","de":"Lichter im Wintergarten","day":56,"rep":97,"builds":15,"served":480},
  {"en":"The annual lakeside gala","de":"Die große Jahresgala","day":63,"rep":98,"builds":16,"served":560}
];
const tabs = ['orders', 'pantry', 'build', 'journal'];
const difficulties = {
  easy: { en: 'Relaxed', de: 'Entspannt', seconds: 100, patience: 8, pace: 1.15, cooking: 0.75 },
  normal: { en: 'Normal', de: 'Normal', seconds: 78, patience: 0, pace: 1, cooking: 1 },
  hard: { en: 'Challenging', de: 'Anspruchsvoll', seconds: 60, patience: -7, pace: 0.78, cooking: 1.1 }
};
const favorites = ['coffee', 'tart', 'cake', 'pastry', 'tea', 'lemonade', 'galette', 'strudel'];
const staffWages = { cook: 8, waiter: 10 };
const recipeChallengeTypes = {
  coffee:[1,'pour'], pastry:[2,'oven'], tart:[1,'oven'], cake:[2,'pour'],
  honeyroll:[1,'stir'], tea:[1,'pour'], lemonade:[1,'stir'], picnic:[1,'stir'], galette:[2,'oven'],
  feast:[2,'stir'], honeyTea:[1,'pour'], strudel:[3,'oven'], galaMenu:[2,'stir']
};

const STOCK_LIMIT = 99;
const HISTORY_LIMIT = 90;
const MAX_TABLES = 6;
const SAVE_KEY = 'lakeside-cafe-v1';
const protocol = globalThis.ytgame;
const hosted = protocol?.IN_PLAYABLES_ENV === true;
const node = id => document.getElementById(id);
const game = node('game');
const content = node('content');
const dialog = node('dialog');

let lang = 'en';
let state = newGame();
let currentTab = 'orders';
let carryingId = null;
let kitchenGesture = null;
let preferredView = null;
let guestReaction = null;
let gameEntered = false;
let resumedGame = false;
let message = ['firstMorning'];
let manualPause = false;
let platformPause = false;
let started = false;
let loading = false;
let timer = null;
let lastTick = 0;
let autosaveElapsed = 0;
let cloudLoaded = false;
let pendingSave = null;
let saving = false;
let saveStatus = 'saveReady';
let platformAudio = !hosted || protocol.system.isAudioEnabled();
let sound = true;
const cafeAudio = new CafeAudio();
const musicTrack = node('music-track');
let musicRequested = Boolean(CAFE_MUSIC_SRC);
let musicNeedsGesture = false;
let musicObjectUrl = '';
let musicGain = null;
if (CAFE_MUSIC_SRC) musicTrack.src = CAFE_MUSIC_SRC;

function local(item) { return item[lang]; }
function t(key, ...values) {
  return text[lang][key].replace(/\{(\d+)\}/g, (_, index) => String(values[Number(index)] ?? ''));
}
function set(id, value) {
  const element = node(id);
  if (element.textContent !== value) element.textContent = value;
}
function esc(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function newGame() {
  return {
    version: 6, gold: 2, extraTime: 0, streak: 0, bestStreak: 0, visits: Array(guests.length).fill(0),
    menu: [], staff: null, friends: 0, difficulty: 'normal', day: 1, coins: 42, reputation: 24, stock: { beans: 5, flour: 6, berries: 4, honey: 2, herbs: 2, apples: 0 },
    upgrades: [], orders: [], history: [], phase: 'prep', served: 0, lost: 0, revenue: 0,
    elapsed: 0, nextGuest: 0, sequence: 0, arrivals: 0, totalServed: 0, chapter: 0, emergencyUsed: false
  };
}
function clamp(value, low, high) { return Math.min(high, Math.max(low, value)); }
function int(value, defaultValue = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? clamp(Math.floor(number), 0, Number.MAX_SAFE_INTEGER) : defaultValue;
}
function boundedTime(value, high) {
  return Number.isFinite(value) ? clamp(value, 0, high) : 0;
}
function restore(saved) {
  if (!saved || typeof saved !== 'object' || !Object.hasOwn(saved, 'day')) throw new Error('Unrecognized game save');
  const result = newGame();
  for (const key of ['day', 'coins', 'reputation', 'served', 'lost', 'revenue', 'sequence', 'arrivals', 'totalServed', 'chapter', 'gold', 'streak', 'bestStreak', 'friends']) {
    if (saved[key] != null) result[key] = int(saved[key], result[key]);
  }
  result.day = Math.max(1, result.day);
  result.reputation = Math.min(100, result.reputation);
  result.chapter = Math.min(chapters.length, result.chapter);
  result.phase = ['prep', 'open', 'summary'].includes(saved.phase) ? saved.phase : 'prep';
  const legacyStock = Array.isArray(saved.stock) ? Object.fromEntries(Object.keys(goods).map((key, index) => [key, saved.stock[index]])) : saved.stock;
  for (const key of Object.keys(goods)) {
    if (legacyStock?.[key] != null) result.stock[key] = Math.min(STOCK_LIMIT, int(legacyStock[key]));
  }
  const legacyUpgrades = { terrasse: 'terrace', ofen: 'oven', garten: 'garden', laternen: 'lanterns' };
  if (Array.isArray(saved.upgrades)) {
    result.upgrades = [...new Set(saved.upgrades.map(id => legacyUpgrades[id] ?? id).filter(id => Object.hasOwn(upgrades, id)))];
  }
  if (Array.isArray(saved.history)) {
    result.history = saved.history.slice(-HISTORY_LIMIT).filter(entry => entry && typeof entry === 'object')
      .map(entry => ({ day: int(entry.day, 1), served: int(entry.served), lost: int(entry.lost), revenue: int(entry.revenue), difficulty: Object.hasOwn(difficulties, entry.difficulty) ? entry.difficulty : 'normal', bestStreak: int(entry.bestStreak) }));
  }
  if (saved.version == null) {
    result.sequence = int(saved.order_number);
    result.totalServed = result.history.reduce((sum, entry) => sum + entry.served, result.phase === 'open' ? result.served : 0);
    result.arrivals = result.served + result.lost + (Array.isArray(saved.orders) ? saved.orders.length : 0);
    if (saved.won) result.chapter = 2;
  }
  result.difficulty = Object.hasOwn(difficulties, saved.difficulty) ? saved.difficulty : 'normal';
  result.extraTime = Math.min(24, int(saved.extraTime));
  result.friends = Math.min(1, result.friends);
  result.visits = result.visits.map((_, index) => int(saved.visits?.[index]));
  result.staff = Object.hasOwn(staffWages, saved.staff) ? saved.staff : null;
  result.menu = Array.isArray(saved.menu) ? [...new Set(saved.menu.filter(id => Object.hasOwn(recipes, id) &&
    (!recipes[id].upgrade || result.upgrades.includes(recipes[id].upgrade))))] : [];
  result.elapsed = boundedTime(saved.elapsed, difficulties[result.difficulty].seconds + result.extraTime);
  result.nextGuest = boundedTime(saved.nextGuest ?? saved.next_guest, 25);
  result.emergencyUsed = saved.emergencyUsed === true;
  if (result.phase === 'open' && Array.isArray(saved.orders)) {
    let kitchenRestored = false;
    const expiredParties = new Set();
    result.orders = saved.orders.slice(0, MAX_TABLES * 2).flatMap((entry, index) => {
      if (!entry || typeof entry !== 'object') return [];
      const recipe = entry.recipe ?? ['coffee', 'pastry', 'tart', 'cake'][entry.dish];
      const party = int(entry.party ?? entry.id);
      const max = boundedTime(entry.max, 100);
      const left = boundedTime(entry.left, max);
      if (!Object.hasOwn(recipes, recipe)) return [];
      if (left <= 0) { expiredParties.add(party); return []; }
      let stage = entry.stage === 'ready' ? 'ready' : 'waiting';
      const cookLeft = boundedTime(entry.cookLeft, 10);
      const stepsDone = Math.min(int(entry.stepsDone), preparationSteps[recipe].en.length);
      if (entry.stage === 'cooking') {
        stage = cookLeft > 0 && !kitchenRestored ? 'cooking' : 'ready';
      } else if (entry.stage === 'assembling') {
        stage = stepsDone < preparationSteps[recipe].en.length && !kitchenRestored ? 'assembling' : 'ready';
      }
      kitchenRestored ||= stage === 'cooking' || stage === 'assembling';
      const table = clamp(int(entry.table ?? index + 1), 1, MAX_TABLES);
      const challenge = entry.challenge === recipeChallengeTypes[recipe][1] && stage === 'assembling' ? entry.challenge : null;
      return [{ id: int(entry.id), party, table, guest: int(entry.guest ?? entry.animal) % guests.length,
        recipe, left, max, stage, cookLeft, stepsDone, hinted: entry.hinted === true, boosted: entry.boosted === true,
        challenge, challengeAt: boundedTime(entry.challengeAt, result.elapsed), readyAt: boundedTime(entry.readyAt, result.elapsed) }];
    });
    if (expiredParties.size > 0) {
      result.orders = result.orders.filter(order => !expiredParties.has(order.party));
      result.lost += expiredParties.size;
      result.streak = 0;
      result.reputation = Math.max(0, result.reputation - 2 * expiredParties.size);
    }
    result.sequence = Math.max(result.sequence, ...result.orders.map(order => order.id + 1));
    result.arrivals = Math.max(result.arrivals, result.served + result.lost + new Set(result.orders.map(order => order.party)).size);
  }
  return result;
}

function currentDifficulty() { return difficulties[state.difficulty]; }
function daySeconds() { return currentDifficulty().seconds + state.extraTime; }
function kitchenBusy() { return state.orders.some(order => order.stage === 'cooking' || order.stage === 'assembling'); }
function preparationSeconds(recipe) { return (1.1 + recipe.needs.length * 0.65) * currentDifficulty().cooking; }

function built(id) { return state.upgrades.includes(id); }
function capacity() { return 2 + Number(built('terrace')) + Number(built('jetty')) + Number(built('meadow')) + Number(built('boathouse')); }
function forecast() { return weather[(state.day - 1) % weather.length]; }
function dayEvent() { return events[((state.day - 1) % chapters.at(-1).day) + 1]; }
function guestLimit() {
  const base = Math.min(4 + Math.floor((state.day - 1) * 0.55), 10);
  return base + (dayEvent()?.guests ?? 0) + Number(built('meadow')) + Number(built('boathouse')) + state.friends;
}
function boxSize() { return built('pantry') ? 6 : 4; }
function guestName(order) { return guests[order.guest][lang === 'de' ? 1 : 2]; }
function availableRecipes() { return Object.entries(recipes).filter(([, recipe]) => !recipe.upgrade || built(recipe.upgrade)); }
function need(recipe) { return recipe.needs.filter(id => state.stock[id] < 1); }
function availableGoods() { return Object.entries(goods).filter(([, good]) => !good.upgrade || built(good.upgrade)); }
function offerAid(id) { return !state.emergencyUsed && state.coins < goods[id].cost && state.stock[id] === 0; }
function servicePaused() { return manualPause || platformPause || dialog.open; }
function mayClose() { return state.phase === 'open' && state.arrivals >= guestLimit() && state.orders.length === 0; }

function offeredRecipes() {
  const all = availableRecipes();
  const chosen = all.filter(([id]) => state.menu.includes(id));
  return chosen.length >= Math.min(3, all.length) ? chosen : all;
}
function occupiedTables() { return new Set(state.orders.map(order => order.table)); }
function activeTables() { return Array.from({ length: capacity() }, (_, index) => index + 1); }

function addGuest() {
  const table = activeTables().find(id => !occupiedTables().has(id));
  if (!table) return;
  const available = offeredRecipes();
  let index = (state.sequence + Math.floor(state.sequence / 4) + state.day - 1) % available.length;
  if (state.arrivals === 0 && state.day === 1) index = 0;
  const guest = (state.arrivals + Math.floor((state.day - 1) / 2)) % guests.length;
  const favored = available.findIndex(([id]) => id === favorites[guest]);
  if (state.visits[guest] >= 3 && favored >= 0 && state.arrivals % 2 === 0) index = favored;
  const dishes = [available[index][0]];
  if (state.day >= 3 && state.arrivals % 4 === 2 && available.length > 1) {
    dishes.push(available[(index + 1) % available.length][0]);
  }
  const max = 28 + currentDifficulty().patience + forecast().wait + (built('lanterns') ? 8 : 0) +
    (built('winterGarden') ? 5 : 0) + (dishes.length > 1 ? 8 : 0);
  const party = state.sequence;
  for (const recipe of dishes) {
    state.orders.push({ id: state.sequence++, party, table, guest, recipe, max, left: max, stage: 'waiting', cookLeft: 0 });
  }
  state.arrivals++;
  if (state.friends && state.arrivals === guestLimit()) note('friends');
  const availableHours = Math.max(4.6, 11.2 - (state.day - 1) * 0.39 + forecast().pace);
  state.nextGuest = (dayEvent()?.guests ? Math.max(4.2, availableHours - 1.3) : availableHours) * currentDifficulty().pace;
}

function evaluateGoals() {
  const original = state.chapter;
  while (state.chapter < chapters.length) {
    const goal = chapters[state.chapter];
    if (state.day < goal.day || state.reputation < goal.rep ||
        state.upgrades.length < goal.builds || state.totalServed < goal.served) break;
    state.chapter++;
  }
  state.gold += state.chapter - original;
  return original !== state.chapter;
}

function closeDay() {
  if (state.phase !== 'open') return;
  const unserved = state.orders[0];
  if (unserved) guestReaction = { order: unserved, stage: 'disappointed', until: state.elapsed + 2.8 };
  else if (guestReaction?.stage !== 'disappointed') guestReaction = null;
  const missed = occupiedTables().size;
  state.lost += missed;
  if (missed) state.streak = 0;
  state.reputation = Math.max(0, state.reputation - missed * 2);
  carryingId = null;
  state.orders = [];
  state.phase = 'summary';
  manualPause = false;
  state.history.push({ day: state.day, served: state.served, lost: state.lost, revenue: state.revenue, difficulty: state.difficulty, bestStreak: state.bestStreak });
  state.history = state.history.slice(-HISTORY_LIMIT);
  const progressed = evaluateGoals();
  playEffect(progressed ? 'chapter' : 'close');
  if (progressed && state.chapter === chapters.length) note('ending');
  else if (progressed) note('goalDone', chapters[state.chapter - 1]);
  else note('dayDone', state.day, state.served, state.revenue);
  commit();
}

function advance() {
  if (state.phase === 'prep') {
    preferredView = null;
    guestReaction = null;
    state.phase = 'open';
    state.friends = Number(state.day >= 4 && state.visits.some(visits => visits >= 3));
    currentTab = 'orders';
    addGuest();
    playEffect('bell');
    note('opened');
  } else if (state.phase === 'summary') {
    preferredView = null;
    guestReaction = null;
    state.day++;
    state.phase = 'prep';
    currentTab = 'orders';
    state.elapsed = 0;
    state.nextGuest = 0;
    state.arrivals = 0;
    state.served = 0;
    state.lost = 0;
    state.revenue = 0;
    state.emergencyUsed = false;
    state.extraTime = 0;
    state.streak = 0;
    state.bestStreak = 0;
    state.staff = null;
    carryingId = null;
    if (built('garden')) {
      addStock('herbs', 2);
      addStock('berries', 1);
    }
    if (built('orchard')) addStock('apples', 3);
    if (built('bakehouse')) addStock('flour', 2);
    if (built('winterGarden')) addStock('herbs', 2);
    playEffect('dawn');
    note(built('garden') || built('orchard') || built('winterGarden') ? 'gardenMorning' : 'newMorning');
  } else if (!servicePaused() && mayClose()) {
    closeDay();
    return;
  } else {
    return;
  }
  commit();
}

function prepareOrder(id) {
  if (state.phase !== 'open' || servicePaused() || kitchenBusy()) return;
  const order = state.orders.find(item => item.id === Number(id));
  if (!order || order.stage !== 'waiting') return;
  const recipe = recipes[order.recipe];
  if (need(recipe).length > 0) return;
  for (const ingredient of recipe.needs) state.stock[ingredient]--;
  guestReaction = null;
  order.stage = 'assembling';
  order.stepsDone = state.staff === 'cook' ? 1 : 0;
  order.lastWrong = null;
  order.challenge = null;
  playEffect('prepare');
  commit();
}

function chooseRecipeStep(orderId, index) {
  if (state.phase !== 'open' || servicePaused()) return;
  const order = state.orders.find(item => String(item.id) === String(orderId));
  if (!order || order.stage !== 'assembling' || order.left <= 0 || order.challenge) return;
  const step = Number(index);
  const total = preparationSteps[order.recipe].en.length;
  if (!Number.isInteger(step) || step < order.stepsDone || step >= total) return;
  if (step !== order.stepsDone) {
    reducePatience(order);
    order.lastWrong = step;
    playEffect('wrong');
  } else {
    const [challengeStep, challenge] = recipeChallengeTypes[order.recipe];
    if (step === challengeStep) {
      order.challenge = challenge;
      order.challengeAt = state.elapsed;
      order.lastWrong = null;
    } else {
      finishStep(order);
    }
  }
  commit();
}

function reducePatience(order) {
  const remaining = Math.max(0, order.left - 2);
  for (const dish of state.orders) if (dish.party === order.party) dish.left = remaining;
}

function finishStep(order) {
  playEffect(recipeSounds[order.recipe][order.stepsDone]);
  order.stepsDone++;
  order.lastWrong = null;
  order.challenge = null;
  if (order.stepsDone === preparationSteps[order.recipe].en.length) {
    markReady(order);
  }
}
function markReady(order) {
  order.stage = 'ready';
  order.readyAt = state.elapsed;
  order.challenge = null;
  playEffect('ready', .25);
}

function serve(id, table) {
  if (state.phase !== 'open' || servicePaused()) return false;
  const order = state.orders.find(item => item.id === Number(id));
  if (!order || order.stage !== 'ready' || order.left <= 0) return false;
  if (Number(table) !== order.table) {
    note('wrongTable', order.table);
    playEffect('wrong');
    renderSummary();
    return false;
  }
  const recipe = recipes[order.recipe];
  const tip = order.left >= order.max * 0.68 ? 2 + Number(built('pavilion')) + (dayEvent()?.tip ?? 0) : 0;
  let earned = recipe.price + tip;
  state.orders = state.orders.filter(item => item !== order);
  if (carryingId === order.id) carryingId = null;
  if (!state.orders.some(item => item.party === order.party)) {
    state.served++;
    state.totalServed++;
    state.visits[order.guest]++;
    state.streak++;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    if (state.streak % 3 === 0) earned += 3;
    if (state.streak % 6 === 0) state.gold++;
    state.reputation = Math.min(100, state.reputation + 2 + Number(tip > 0));
  }
  state.coins += earned;
  state.revenue += earned;
  guestReaction = { order, stage: 'served', until: state.elapsed + 2.4 };
  note(tip ? 'tipped' : 'served', earned, order, tip);
  playEffect(tip ? 'tip' : 'serve');
  commit();
  return true;
}

function openTables(id) {
  const order = state.orders.find(item => item.id === Number(id));
  if (!order || order.stage !== 'ready' || servicePaused()) return;
  carryingId = order.id;
  note('carrying', recipes[order.recipe]);
  renderSummary();
  node('table-map').querySelector('button:not(:disabled)')?.focus();
}
function buyTime() {
  if (state.phase !== 'open' || servicePaused() || state.gold < 1 || state.extraTime >= 24) return;
  state.gold--;
  state.extraTime += 12;
  for (const order of state.orders) {
    if (order.left > 0) {
      order.left += 12;
      order.max += 12;
    }
  }
  note('timeBought');
  playEffect('buy');
  commit();
}
function hireStaff(id) {
  const wage = staffWages[id];
  if (!wage || state.staff || state.phase !== 'prep' || state.coins < wage) return;
  state.coins -= wage;
  state.staff = id;
  playEffect('buy');
  commit();
}
function selectMenu(id) {
  if (state.phase !== 'prep' || !availableRecipes().some(([recipe]) => recipe === id)) return;
  const current = offeredRecipes().map(([recipe]) => recipe);
  if (current.includes(id) && current.length <= 3) return;
  state.menu = current.includes(id) ? current.filter(recipe => recipe !== id) : [...current, id];
  playEffect('click');
  commit();
}
function recipePerk(id, perk) {
  if (state.phase !== 'open' || servicePaused()) return;
  const order = state.orders.find(item => item.id === Number(id));
  if (!order || order.stage !== 'assembling' || order.left <= 0) return;
  if (perk === 'hint' && !order.hinted && state.coins >= 2) {
    state.coins -= 2;
    order.hinted = true;
  } else if (perk === 'boost' && !order.boosted && state.coins >= 5) {
    state.coins -= 5;
    order.boosted = true;
    order.stepsDone = preparationSteps[order.recipe].en.length;
    markReady(order);
    note('boostDone');
  } else return;
  playEffect('buy');
  commit();
}
function ovenPosition(order) { return Math.floor(((state.elapsed - order.challengeAt) % 2.4) / 2.4 * 100); }
function completeChallenge(id, assisted = false) {
  if (state.phase !== 'open' || servicePaused()) return;
  const order = state.orders.find(item => item.id === Number(id));
  if (!order || !order.challenge || order.left <= 0) return;
  if (!assisted && order.challenge !== 'oven') return;
  const position = ovenPosition(order);
  if (!assisted && (position < 36 || position > 69)) {
    reducePatience(order);
    note('actionEarly');
    playEffect('wrong');
  } else {
    finishStep(order);
  }
  commit();
}

function addStock(id, quantity) { state.stock[id] = Math.min(STOCK_LIMIT, state.stock[id] + quantity); }

function buy(id, emergency = false) {
  const good = goods[id];
  if (!good || (good.upgrade && !built(good.upgrade))) return;
  let quantity = boxSize();
  if (emergency) {
    if (!offerAid(id)) return;
    quantity = 2;
    state.emergencyUsed = true;
  } else {
    if (state.coins < good.cost || state.stock[id] >= STOCK_LIMIT) return;
    state.coins -= good.cost;
    quantity = Math.min(quantity, STOCK_LIMIT - state.stock[id]);
  }
  addStock(id, quantity);
  note('bought', quantity, good);
  playEffect('buy');
  commit();
}

function build(id) {
  const upgrade = upgrades[id];
  if (!upgrade || built(id) || state.day < upgrade.day || state.coins < upgrade.cost ||
      (upgrade.requires && !built(upgrade.requires))) return;
  state.coins -= upgrade.cost;
  state.upgrades.push(id);
  if (id === 'counter') addStock('honey', 3);
  if (id === 'garden') addStock('herbs', 2);
  if (id === 'orchard') addStock('apples', 3);
  note('built', upgrade);
  playEffect('build');
  commit();
}

function tick() {
  const now = performance.now();
  const delta = clamp((now - lastTick) / 1000, 0, 0.5);
  lastTick = now;
  state.elapsed += delta;
  state.nextGuest -= delta;
  autosaveElapsed += delta;
  let redraw = false;
  if (guestReaction && state.elapsed >= guestReaction.until) {
    guestReaction = null;
    renderKitchen();
  }
  let missed = null;
  const departed = new Set();
  for (const order of state.orders) {
    order.left -= delta;
    if (order.left <= 0) {
      missed ??= order;
      departed.add(order.party);
      continue;
    }
    if (order.stage !== 'cooking') continue;
    order.cookLeft = Math.max(0, order.cookLeft - delta);
    if (order.cookLeft === 0 && order.left > 0) {
      markReady(order);
      redraw = true;
    }
  }
  state.orders = state.orders.filter(order => !departed.has(order.party));
  if (missed) {
    guestReaction = { order: missed, stage: 'disappointed', until: state.elapsed + 2.8 };
    if (!state.orders.some(order => order.id === carryingId)) carryingId = null;
    state.lost += departed.size;
    state.streak = 0;
    state.reputation = Math.max(0, state.reputation - departed.size * 2);
    note('guestLeft', departed.size);
    playEffect('leave');
    redraw = true;
  }
  if (state.elapsed >= daySeconds()) {
    closeDay();
    return;
  }
  if (state.nextGuest <= 0 && state.arrivals < guestLimit() && occupiedTables().size < capacity() &&
      daySeconds() - state.elapsed > 6) {
    addGuest();
    playEffect('bell');
    redraw = true;
  }
  if (redraw) {
    queueSave();
    if (currentTab === 'orders') renderContent();
    renderSummary();
  }
  if (state.staff === 'waiter') {
    const ready = state.orders.find(order => order.stage === 'ready' && state.elapsed - (order.readyAt ?? 0) >= .9);
    if (ready) serve(ready.id, ready.table);
  }
  if (autosaveElapsed >= 8) queueSave();
  renderClock();
}
function syncSimulation() {
  const run = gameEntered && state.phase === 'open' && !servicePaused();
  syncMusic();
  if (timer !== null && !run) {
    clearInterval(timer);
    timer = null;
  } else if (timer === null && run) {
    lastTick = performance.now();
    timer = setInterval(tick, 100);
  }
}
function note(key, ...values) { message = [key, ...values]; }
function formatMessage() {
  const [key, ...values] = message;
  return t(key, ...values.map(value => typeof value === 'object' ? (value.guest != null ? guestName(value) : local(value)) : value));
}
function commit() {
  queueSave();
  render();
  syncSimulation();
}

function metric(label, value) {
  return `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`;
}

function render() {
  renderSummary();
  renderTabs();
  renderContent();
  renderClock();
}

function art(name) { return EMBEDDED_ART[name] ?? './' + name + '.webp'; }

function showArt(id, name) {
  const image = node(id);
  const source = art(name);
  if (image.getAttribute('src') !== source) image.setAttribute('src', source);
}

function renderKitchen() {
  const scene = node('scene');
  const view = preferredView ?? (state.phase === 'open' || guestReaction?.stage === 'disappointed' ? 'kitchen' : 'lake');
  const visible = view === 'kitchen';
  scene.dataset.view = view;
  scene.setAttribute('aria-labelledby', visible ? 'kitchen-title' : 'scene-title');
  node('kitchen-visual').hidden = !visible;
  const toggle = node('view-toggle');
  toggle.setAttribute('aria-expanded', String(visible));
  set('view-toggle', t(visible ? 'viewLake' : 'viewKitchen'));
  if (!visible) return;

  const active = guestReaction?.order ?? state.orders.find(order => order.stage === 'cooking' || order.stage === 'assembling') ??
    state.orders.find(order => order.stage === 'ready') ?? state.orders[0];
  const stage = guestReaction?.stage ?? (active?.stage === 'assembling' ? 'cooking' : active?.stage) ?? 'idle';
  scene.dataset.kitchenStage = stage;
  showArt('chef-image', 'chef');
  node('visitor-image').hidden = !active;
  const showDish = !!active && active.stage !== 'assembling' && ['cooking', 'ready', 'served'].includes(stage);
  node('kitchen-dish').hidden = !showDish;
  if (!active) {
    set('kitchen-caption', t('kitchenChef'));
    set('kitchen-title', t('kitchenIdle'));
    set('kitchen-detail', t('kitchenIdleDetail'));
    return;
  }
  const expression = stage === 'served' ? '-happy' : stage === 'disappointed' ? '-sad' : '';
  showArt('visitor-image', guestSprites[active.guest] + expression);
  if (showDish) showArt('dish-image', 'dish-' + dishSprites[active.recipe]);
  const caption = { waiting: 'kitchenOrder', cooking: 'kitchenMaking', ready: 'kitchenReady', served: 'kitchenServed', disappointed: 'kitchenMissed' }[stage];
  set('kitchen-caption', t(caption, guestName(active)));
  set('kitchen-title', local(recipes[active.recipe]));
  set('kitchen-detail', stage === 'disappointed' ? t('kitchenMissedDetail') : '');
}

function renderSummary() {
  document.documentElement.lang = lang;
  document.title = t('title');
  for (const [id, key] of [
    ['brand', 'title'], ['tagline', 'tagline'], ['counter-title', 'guestbook'],
    ['goal-label', 'goal'], ['stats-title', 'today'], ['help-button', 'help'], ['chapter-list-button', 'chapterList'],
    ['language', 'switch'], ['reset', 'reset'], ['platform-pause-text', 'platformPaused']
  ]) set(id, t(key));
  node('metrics').innerHTML = metric(t('day'), state.day) + metric(t('silver'), state.coins) + metric(t('reputation'), state.reputation + ' / 100') + metric(t('gold'), state.gold);
  set('table-count', t('tableCount', occupiedTables().size, capacity()));
  set('time-buy', t('timeBuy'));
  node('time-buy').hidden = state.phase !== 'open';
  node('time-buy').disabled = state.gold < 1 || state.extraTime >= 24 || servicePaused();
  const tableMap = node('table-map');
  tableMap.hidden = state.phase !== 'open';
  tableMap.innerHTML = activeTables().map(table => {
    const guest = state.orders.find(order => order.table === table);
    const label = t('table', table) + (guest ? ' · ' + guestName(guest) : '');
    return button(label, 'deliver-table', table,
      servicePaused() || carryingId == null || !guest, !!guest && carryingId != null);
  }).join('');
  set('difficulty-label', t('difficulty'));
  set('difficulty-time', t('difficultyTime', daySeconds()));
  const difficultySelect = node('difficulty-select');
  difficultySelect.disabled = state.phase !== 'prep' || platformPause;
  if (difficultySelect.dataset.language !== lang) {
    difficultySelect.replaceChildren(...Object.entries(difficulties).map(([id, option]) => {
      const element = document.createElement('option');
      element.value = id;
      element.textContent = local(option);
      return element;
    }));
    difficultySelect.dataset.language = lang;
  }
  difficultySelect.value = state.difficulty;
  set('weather', local(forecast()));
  const event = dayEvent();
  node('event').hidden = !event;
  if (event) set('event', local(event));
  node('scene').dataset.weather = forecast().id;
  renderKitchen();
  const phaseName = { prep: 'prep', open: servicePaused() ? 'paused' : 'openScene', summary: 'closed' }[state.phase];
  set('scene-title', t(phaseName));
  const visibleBuilds = state.upgrades.slice(-5);
  const extraBuilds = state.upgrades.length - visibleBuilds.length;
  node('scene-builds').innerHTML = visibleBuilds.map(id => `<span>${esc(local(upgrades[id]))}</span>`).join('') +
    (extraBuilds > 0 ? `<span>+${extraBuilds}</span>` : '');
  set('feedback', formatMessage());
  node('stats').innerHTML = metric(t('servedLabel'), state.served) + metric(t('lost'), state.lost) + metric(t('revenue'), state.revenue) + metric(t('series'), state.streak);

  const goal = chapters[state.chapter];
  set('chapter-name', goal ? local(goal) : t('endless'));
  set('chapter-count', `${Math.min(state.chapter + 1, chapters.length)} / ${chapters.length}`);
  set('goal-title', goal ? local(goal) : t('endless'));
  if (goal) {
    const completedDay = state.phase === 'summary' ? state.day : state.day - 1;
    const objectives = [
      [completedDay >= goal.day, t('goalDay', goal.day)],
      [state.reputation >= goal.rep, t('goalRep', state.reputation, goal.rep)],
      [state.upgrades.length >= goal.builds, t('goalBuild', state.upgrades.length, goal.builds)],
      [state.totalServed >= goal.served, t('goalServe', state.totalServed, goal.served)]
    ];
    node('goal-items').innerHTML = objectives.map(([done, title]) =>
      `<li${done ? ' class="done"' : ''}><span aria-hidden="true">${done ? '✓' : '○'}</span> ${esc(title)}</li>`).join('');
  } else {
    node('goal-items').innerHTML = `<li class="done">${esc(t('endlessBody', chapters.length))}</li>`;
  }
  updateAudioControl();
  set('save-status', t(saveStatus));
}

function renderTabs() {
  const container = node('tabs');
  if (!container.firstElementChild) {
    for (const tab of tabs) {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.act = 'tab';
      button.dataset.id = tab;
      button.setAttribute('aria-controls', 'content');
      container.append(button);
    }
  }
  for (const button of container.children) {
    button.textContent = t(button.dataset.id);
    button.setAttribute('aria-current', String(currentTab === button.dataset.id));
  }
}

function renderClock() {
  node('scene').dataset.paused = String(servicePaused());
  const isOpen = state.phase === 'open';
  const canClose = mayClose();
  node('clock').value = state.phase === 'summary' ? 100 : clamp(state.elapsed / daySeconds() * 100, 0, 100);
  node('clock').setAttribute('aria-label', t('day'));
  let timerCopy = !isOpen
    ? t(state.phase === 'prep' ? 'prepare' : 'tomorrow')
    : (servicePaused() ? t('paused') : canClose ? t('closing') : t('running', Math.max(0, Math.ceil(daySeconds() - state.elapsed)), state.arrivals, guestLimit()));
  if (isOpen && !servicePaused() && state.orders.length === 0 && state.arrivals < guestLimit() &&
      daySeconds() - state.elapsed > state.nextGuest + 6) {
    timerCopy += ' · ' + t('nextGuest', Math.max(1, Math.ceil(state.nextGuest)));
  }
  set('timer-copy', timerCopy);
  const main = node('advance');
  set('advance', t(state.phase === 'prep' ? 'open' : state.phase === 'summary' ? 'nextDay' : canClose ? 'close' : 'openScene', state.day + 1));
  main.disabled = platformPause || (isOpen && (!canClose || servicePaused()));
  node('pause').hidden = !isOpen;
  node('pause').disabled = platformPause;
  set('pause', t(manualPause ? 'resume' : 'pause'));
  for (const order of state.orders) {
    const oven = node(`oven-${order.id}`);
    if (oven) oven.style.setProperty('--position', ovenPosition(order) + '%');
    const time = node(`wait-${order.id}`);
    if (!time) continue;
    const urgent = order.left < 8;
    time.classList.toggle('danger', urgent);
    set(time.id, t('remaining', Math.ceil(order.left)));
    if (order.stage === 'cooking') {
      set(`cook-${order.id}`, t('preparingOrder', Math.ceil(order.cookLeft)));
      node(`cook-progress-${order.id}`).value = preparationSeconds(recipes[order.recipe]) - order.cookLeft;
    }
    const bar = node(`bar-${order.id}`);
    bar.value = order.left / order.max * 100;
    bar.classList.toggle('urgent', urgent);
  }
}

function button(label, action, id, disabled = false, primary = false) {
  return `<button type="button" class="${primary ? 'primary' : ''}" data-act="${action}" data-id="${esc(id)}"${disabled ? ' disabled' : ''}>${esc(label)}</button>`;
}

function empty(title, body) {
  return `<div class="empty"><h3>${esc(t(title))}</h3><p>${esc(t(body))}</p></div>`;
}

function card(title, subtitle, action = '', portrait = '', detail = '') {
  const picture = portrait ? `<img class="animal animal-portrait" src="${art(portrait)}" alt="">` : '';
  return `<article class="row"><div class="row-main"><div class="row-caption">${picture}
    <div><strong>${esc(title)}</strong><small>${esc(subtitle)}</small></div>
    </div>${action}</div>${detail}</article>`;
}

function stepPositions(id, count) {
  const positions = Array.from({ length: count }, (_, index) => index);
  let seed = (id + 1) >>> 0;
  for (let index = count - 1; index > 0; index--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const other = seed % (index + 1);
    [positions[index], positions[other]] = [positions[other], positions[index]];
  }
  if (positions.every((step, index) => step === index)) positions.push(positions.shift());
  return positions;
}

function recipeControls(order) {
  const steps = local(preparationSteps[order.recipe]);
  if (order.challenge) {
    const labels = {pour:'actionPour',stir:'actionStir',oven:'actionOven'};
    const action = order.challenge === 'oven'
      ? `<div id="oven-${order.id}" class="oven-timing" aria-hidden="true"></div>` +
        button(t(labels.oven), 'oven-check', order.id, servicePaused(), true)
      : `<button type="button" class="gesture-track" data-gesture="${order.challenge}" data-order="${order.id}"${servicePaused() ? ' disabled' : ''}>${esc(t(labels[order.challenge]))}</button>`;
    return `<fieldset class="recipe-task"><legend>${esc(t(labels[order.challenge]))}</legend>
      ${action} ${button(t('actionAssist'), 'challenge-assist', order.id, servicePaused())}
      ${button(t('boostBuy'), 'recipe-boost', order.id, servicePaused() || state.coins < 5)}</fieldset>`;
  }
  const choices = stepPositions(order.id, steps.length).map(index => {
    const done = index < order.stepsDone;
    const wrong = index === order.lastWrong;
    const label = (done ? '✓ ' : '') + steps[index];
    return `<button type="button" data-act="recipe-step" data-id="${order.id}:${index}"
      class="recipe-choice${wrong ? ' recipe-choice-wrong' : ''}"${done || servicePaused() ? ' disabled' : ''}>${esc(label)}</button>`;
  }).join('');
  const hint = steps.map(step => `<li>${esc(step)}</li>`).join('');
  const feedback = order.lastWrong == null ? t('recipeProgress', order.stepsDone, steps.length) : t('recipeWrong');
  return `<fieldset class="recipe-task"><legend>${esc(t('recipeSequence'))}</legend>
    <p class="${order.lastWrong == null ? '' : 'missing'}" role="status">${esc(feedback)}</p>
    <div class="recipe-choices">${choices}</div>
    ${order.hinted
      ? `<details id="recipe-hint-${order.id}" open><summary>${esc(t('recipeHint'))}</summary><ol>${hint}</ol></details>`
      : button(t('hintBuy'), 'recipe-hint', order.id, servicePaused() || state.coins < 2)}
    ${button(t('boostBuy'), 'recipe-boost', order.id, servicePaused() || state.coins < 5)}
  </fieldset>`;
}

function ordersList() {
  if (state.orders.length === 0) {
    if (state.phase === 'prep') return empty('openFirst', 'openFirstBody');
    if (state.phase === 'summary') return empty('dayFinished', 'dayFinishedBody');
    return mayClose() ? empty('noneToday', 'noneTodayBody') : empty('waiting', 'waitingBody');
  }
  return state.orders.map(order => {
    const recipe = recipes[order.recipe];
    const missing = order.stage === 'waiting' ? need(recipe) : [];
    const ingredients = recipe.needs.map(id => missing.includes(id)
      ? `<span class="missing">${esc(t('missing', local(goods[id])))}</span>` : esc(local(goods[id]))).join(' · ');
    let detail = `<small class="ingredients"><span>${ingredients}</span><time id="wait-${order.id}"></time></small>
      <progress class="patience" id="bar-${order.id}" max="100" value="100" aria-label="${esc(t('orderTime'))}"></progress>`;
    let action;
    if (order.stage === 'assembling') {
      action = '';
      detail += recipeControls(order);
    } else if (order.stage === 'cooking') {
      action = `<div class="order-cooking"><span id="cook-${order.id}">${esc(t('preparingOrder', Math.ceil(order.cookLeft)))}</span>
        <progress id="cook-progress-${order.id}" max="${preparationSeconds(recipe)}" value="0" aria-labelledby="cook-${order.id}"></progress></div>`;
    } else if (order.stage === 'ready') {
      action = button(t('serve', recipe.price), 'serve', order.id, servicePaused(), true);
    } else {
      const busy = kitchenBusy();
      action = button(t(busy ? 'kitchenBusy' : 'prepareOrder'), 'prepare-order', order.id,
        servicePaused() || missing.length > 0 || busy, !busy);
    }
    const otherDishes = state.orders.filter(item => item.table === order.table).length;
    const details = [guestName(order), t('table', order.table)];
    if (state.visits[order.guest] >= 3) details.push(t('regular'));
    if (order.recipe === favorites[order.guest]) details.push(t('favorite'));
    if (otherDishes > 1) details.push(t('comboOrder', otherDishes));
    if (order.stage === 'ready') details.push(t('readyOrder'));
    const label = details.join(' · ');
    return card(local(recipe), label, action, guestSprites[order.guest], detail);
  }).join('');
}

function pantryList() {
  const items = availableGoods();
  const canReceiveAid = items.some(([id]) => offerAid(id));
  const supply = items.map(([id, item]) => {
    const order = offerAid(id) ? button(t('emergency'), 'aid', id)
      : button(t('buy', item.cost), 'buy', id, state.coins < item.cost || state.stock[id] >= STOCK_LIMIT, true);
    return card(local(item), t('stock', state.stock[id]), order);
  }).join('');
  const offered = offeredRecipes().map(([id]) => id);
  const menu = availableRecipes().map(([id, recipe]) => {
    const ingredients = recipe.needs.map(id => local(goods[id])).join(' · ');
    return `<article class="menu-dish">
      <img src="${art('dish-' + dishSprites[id])}" alt="">
      <strong>${esc(local(recipe))}</strong><small>${esc(ingredients)}</small>
      <span>${esc(t('menuPrice', recipe.price))}</span>
      ${state.phase === 'prep' ? button(t(offered.includes(id) ? 'menuOn' : 'menuOff'), 'menu-recipe', id,
        offered.includes(id) && offered.length <= 3, offered.includes(id)) : ''}</article>`;
  }).join('');
  return `<p class="content-caption">${esc(t('buyCaption', boxSize()))}${canReceiveAid ? ' ' + esc(t('emergencyCaption')) : ''}</p>
    ${supply}<h3 class="menu-heading">${esc(t(state.phase === 'prep' ? 'menuSetup' : 'menu'))}</h3><div class="menu-gallery">${menu}</div>`;
}

function buildList() {
  return Object.entries(upgrades).map(([id, upgrade]) => {
    const installed = built(id);
    const unlocked = state.day >= upgrade.day;
    const missingRequirement = upgrade.requires && !built(upgrade.requires);
    const info = local(upgrade.info) + (unlocked ? '' : ' ' + t('opensDay', upgrade.day) + '.') +
      (missingRequirement ? ' ' + t('locked', local(upgrades[upgrade.requires])) + '.' : '');
    return card(local(upgrade), info,
      button(t(installed ? 'installed' : 'buildPrice', upgrade.cost), 'build', id,
        installed || !unlocked || missingRequirement || state.coins < upgrade.cost, true));
  }).join('') + staffPanel();
}
function staffPanel() {
  const options = Object.entries(staffWages).map(([id, wage]) => card(t(id === 'cook' ? 'staffCook' : 'staffWait'),
    state.staff === id ? t('staffChosen') : '',
    button(t(state.staff === id ? 'staffChosen' : 'staffHire', wage), 'hire-staff', id,
      state.phase !== 'prep' || !!state.staff || state.coins < wage, true))).join('');
  return `<h3>${esc(t('staffTitle'))}</h3><p class="content-caption">${esc(t('staffInfo'))} ${esc(t('staffWage'))}</p>${options}`;
}

function journalList() {
  if (!state.history.length) return empty('journalEmpty', 'journalEmptyBody');
  return state.history.slice().reverse().map(entry => card(
    t('day') + ' ' + entry.day, t('journalStats', entry.served, entry.lost, entry.revenue) + ' · ' + t('bestSeries') + ' ' + entry.bestStreak
  )).join('');
}

function renderContent() {
  const focused = content.contains(document.activeElement) ? document.activeElement : null;
  const scroll = content.scrollTop;
  const openHints = [...content.querySelectorAll('details[open]')].map(hint => hint.id);
  const html = { orders: ordersList, pantry: pantryList, build: buildList, journal: journalList }[currentTab]();
  content.setAttribute('aria-label', t(currentTab));
  content.innerHTML = html;
  for (const id of openHints) {
    const hint = node(id);
    if (hint) hint.open = true;
  }
  content.scrollTop = scroll;
  if (focused?.dataset.act) {
    const candidates = [...content.querySelectorAll('button:enabled')];
    const replacement = candidates.find(item => item.dataset.act === focused.dataset.act && item.dataset.id === focused.dataset.id);
    const orderId = focused.dataset.id?.split(':')[0];
    const kitchenChoice = ['prepare-order', 'recipe-step'].includes(focused.dataset.act)
      ? candidates.find(item => ['recipe-step', 'serve'].includes(item.dataset.act) && item.dataset.id?.split(':')[0] === orderId)
      : null;
    const target = replacement ?? kitchenChoice ?? (focused.dataset.act === 'serve' ? candidates[0] : null) ?? content;
    target.focus({ preventScroll: !kitchenChoice || target !== kitchenChoice });
  } else if (focused?.tagName === 'SUMMARY') {
    node(focused.parentElement?.id)?.querySelector('summary')?.focus({ preventScroll: true });
  }
}

function updateAudioControl() {
  set('sound', t(!platformAudio ? 'audioPlatformOff' : sound ? 'audioOn' : 'audioOff'));
  node('sound').disabled = !platformAudio;
  node('sound').setAttribute('aria-pressed', String(sound && platformAudio));
  node('music-settings').hidden = hosted && !CAFE_MUSIC_SRC;
  node('music-file').hidden = hosted;
  node('music-file-label').hidden = hosted;
  set('music-label', t('music'));
  set('music-file-label', t('musicFile'));
  set('music-volume-label', t('musicVolume'));
  set('music-toggle', t(musicRequested ? 'musicPause' : 'musicPlay'));
  node('music-toggle').disabled = !platformAudio || !musicTrack.getAttribute('src');
  node('music-toggle').setAttribute('aria-pressed', String(musicRequested));
}

function displaySaveStatus(key) {
  saveStatus = key;
  if (!platformPause && started) set('save-status', t(key));
}

function queueSave() {
  autosaveElapsed = 0;
  const snapshot = JSON.stringify(state);
  if (!hosted) {
    try {
      localStorage.setItem(SAVE_KEY, snapshot);
      displaySaveStatus('saveDone');
    } catch {
      displaySaveStatus('saveFailed');
    }
    return;
  }
  pendingSave = snapshot;
  void flushSave();
}

async function flushSave() {
  if (!cloudLoaded || saving || pendingSave === null || platformPause) return;
  const snapshot = pendingSave;
  pendingSave = null;
  saving = true;
  let succeeded = false;
  try {
    await protocol.game.saveData(snapshot);
    succeeded = true;
    displaySaveStatus('saveDone');
  } catch {
    pendingSave ??= snapshot;
    displaySaveStatus('saveFailed');
  } finally {
    saving = false;
  }
  if (succeeded && pendingSave !== null && !platformPause) void flushSave();
}

function playEffect(cue, delay = 0) {
  if (sound && platformAudio && !servicePaused()) cafeAudio.effect(cue, delay);
}

function setMusicVolume() {
  const volume = Number(node('music-volume').value) / 100;
  if (musicGain) musicGain.gain.value = volume;
  else musicTrack.volume = volume;
}

function connectMusicGain() {
  const context = cafeAudio.unlock();
  if (!context || musicGain) return;
  const connect = () => {
    if (musicGain || context.state !== 'running') return;
    try {
      const source = context.createMediaElementSource(musicTrack);
      musicGain = context.createGain();
      musicTrack.volume = 1;
      source.connect(musicGain).connect(context.destination);
      setMusicVolume();
    } catch {
      // Native media playback stays available without a Web Audio media node.
    }
  };
  if (context.state === 'running') connect();
  else void context.resume().then(connect).catch(() => {});
}

function syncMusic(fromGesture = false) {
  const canPlay = started && musicRequested && platformAudio && !platformPause && musicTrack.getAttribute('src');
  if (!canPlay) {
    if (!musicTrack.paused) musicTrack.pause();
    return;
  }
  if (fromGesture && !musicGain) connectMusicGain();
  if (!musicTrack.paused || (musicNeedsGesture && !fromGesture)) return;
  setMusicVolume();
  void musicTrack.play().then(() => {
    musicNeedsGesture = false;
  }).catch(error => {
    if (error.name === 'AbortError') return;
    if (error.name === 'NotAllowedError') {
      musicNeedsGesture = true;
      return;
    }
    musicRequested = false;
    set('music-status', t('musicError'));
    updateAudioControl();
  });
}

function showDialog(mode) {
  dialog.dataset.mode = mode;
  dialog.returnValue = '';
  const reset = mode === 'reset';
  set('dialog-title', t(reset ? 'resetTitle' : mode === 'help' ? 'help' : 'chapterList'));
  let body = `<p>${esc(t('resetBody'))}</p>`;
  if (mode === 'help') body = `<ol>${text[lang].helpSteps.map(step => `<li>${esc(step)}</li>`).join('')}</ol>`;
  if (mode === 'chapter-list') {
    const list = chapters.map((chapter, index) => {
      const status = index < state.chapter ? 'chapterDone' : index === state.chapter ? 'chapterCurrent' : 'chapterLater';
      return `<li${status === 'chapterCurrent' ? ' aria-current="true"' : ''}>
        <small>${esc(t('chapterStatus', index + 1, t(status)))}</small>
        <strong>${esc(local(chapter))}</strong><small>${esc(t('chapterFrom', chapter.day))}</small></li>`;
    }).join('');
    body = `<ol class="campaign-list">${list}</ol>`;
  }
  node('dialog-body').innerHTML = body;
  node('dialog-cancel').hidden = !reset;
  set('dialog-cancel', t('cancel'));
  set('dialog-confirm', t(reset ? 'resetYes' : 'okay'));
  dialog.showModal();
  syncSimulation();
  renderClock();
}

game.addEventListener('click', event => {
  const item = event.target.closest('button[data-act]');
  if (!item || platformPause || dialog.open || !gameEntered) return;
  const id = item.dataset.id;
  switch (item.dataset.act) {
    case 'advance': advance(); break;
    case 'pause':
      kitchenGesture = null;
      manualPause = !manualPause;
      if (manualPause) cafeAudio.stop();
      else playEffect('click');
      commit();
      break;
    case 'prepare-order': prepareOrder(id); break;
    case 'recipe-step': chooseRecipeStep(...id.split(':')); break;
    case 'serve': openTables(id); break;
    case 'deliver-table': if (carryingId != null) serve(carryingId, id); break;
    case 'time-buy': buyTime(); break;
    case 'hire-staff': hireStaff(id); break;
    case 'menu-recipe': selectMenu(id); break;
    case 'recipe-hint': recipePerk(id, 'hint'); break;
    case 'recipe-boost': recipePerk(id, 'boost'); break;
    case 'oven-check': completeChallenge(id); break;
    case 'challenge-assist': completeChallenge(id, true); break;
    case 'switch-view':
      playEffect('click');
      preferredView = node('scene').dataset.view === 'kitchen' ? 'lake' : 'kitchen';
      renderKitchen();
      break;
    case 'buy': buy(id); break;
    case 'aid': buy(id, true); break;
    case 'build': build(id); break;
    case 'tab':
      playEffect('click');
      currentTab = id;
      content.scrollTop = 0;
      render();
      break;
    case 'help': case 'reset': case 'chapter-list':
      playEffect('click');
      showDialog(item.dataset.act);
      break;
    case 'language':
      playEffect('click');
      lang = lang === 'en' ? 'de' : 'en';
      render();
      break;
    case 'sound':
      if (!platformAudio) break;
      sound = !sound;
      if (!sound) cafeAudio.stop();
      else playEffect('click');
      updateAudioControl();
      break;
  }
});

game.addEventListener('pointerdown', event => {
  const track = event.target.closest('[data-gesture]');
  if (!track || track.disabled || !event.isPrimary || event.button !== 0 || servicePaused()) return;
  const bounds = track.getBoundingClientRect();
  kitchenGesture = { pointer: event.pointerId, id: track.dataset.order, type: track.dataset.gesture,
    at: performance.now(), x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2,
    length: 0, angle: null };
});
document.addEventListener('pointermove', event => {
  const gesture = kitchenGesture;
  if (!gesture || event.pointerId !== gesture.pointer || gesture.type !== 'stir') return;
  const x = event.clientX - gesture.x;
  const y = event.clientY - gesture.y;
  if (Math.hypot(x, y) < 8) return;
  const angle = Math.atan2(y, x);
  if (gesture.angle != null) {
    const shift = angle - gesture.angle;
    gesture.length += Math.atan2(Math.sin(shift), Math.cos(shift));
  }
  gesture.angle = angle;
  if (Math.abs(gesture.length) >= Math.PI * 1.7) {
    kitchenGesture = null;
    completeChallenge(gesture.id, true);
  }
});
document.addEventListener('pointerup', event => {
  const gesture = kitchenGesture;
  if (!gesture || event.pointerId !== gesture.pointer) return;
  kitchenGesture = null;
  if (gesture.type === 'pour' && performance.now() - gesture.at >= 540) completeChallenge(gesture.id, true);
});
document.addEventListener('pointercancel', () => { kitchenGesture = null; });

node('difficulty-select').addEventListener('change', event => {
  const id = event.target.value;
  if (gameEntered && !platformPause && state.phase === 'prep' && Object.hasOwn(difficulties, id)) {
    state.difficulty = id;
    playEffect('click');
    commit();
  }
});

node('music-file').addEventListener('change', event => {
  const file = event.target.files?.[0];
  if (hosted || !file) return;
  musicTrack.pause();
  if (musicObjectUrl) URL.revokeObjectURL(musicObjectUrl);
  musicObjectUrl = URL.createObjectURL(file);
  musicTrack.src = musicObjectUrl;
  musicRequested = true;
  musicNeedsGesture = false;
  set('music-status', file.name);
  updateAudioControl();
  syncMusic(true);
});
node('music-toggle').addEventListener('click', () => {
  if (!platformAudio || !musicTrack.getAttribute('src')) return;
  musicRequested = !musicRequested;
  updateAudioControl();
  syncMusic(true);
});
node('music-volume').addEventListener('input', setMusicVolume);

function retryMusicOnInteraction(event) {
  if (event.isTrusted && (musicNeedsGesture || !musicGain)) syncMusic(true);
}
document.addEventListener('click', retryMusicOnInteraction, true);
document.addEventListener('keydown', retryMusicOnInteraction, true);

node('dialog-cancel').addEventListener('click', () => dialog.close('cancel'));
node('dialog-confirm').addEventListener('click', () => dialog.close('confirm'));
dialog.addEventListener('close', () => {
  if (platformPause) return;
  if (dialog.dataset.mode === 'reset' && dialog.returnValue === 'confirm') {
    state = newGame();
    carryingId = null;
    kitchenGesture = null;
    preferredView = null;
    guestReaction = null;
    currentTab = 'orders';
    manualPause = false;
    note('firstMorning');
    commit();
  } else {
    render();
    syncSimulation();
  }
});

function onPlatformPause() {
  if (platformPause) return;
  kitchenGesture = null;
  if (gameEntered) queueSave();
  platformPause = true;
  node('scene').dataset.paused = 'true';
  syncSimulation();
  cafeAudio.stop();
  game.inert = true;
  node('home-screen').inert = true;
  dialog.style.visibility = 'hidden';
  node('platform-pause').hidden = false;
}

function onPlatformResume() {
  if (!platformPause) return;
  platformPause = false;
  game.inert = false;
  node('home-screen').inert = false;
  dialog.style.visibility = '';
  node('platform-pause').hidden = true;
  void flushSave();
  if (!started && cloudLoaded) revealGame();
  else if (gameEntered) {
    render();
    syncSimulation();
  } else if (started) {
    node('start-cafe').focus({ preventScroll: true });
    syncMusic();
  }
}

function deadline(promise, ms) {
  let timeout;
  return Promise.race([
    promise,
    new Promise((_, reject) => { timeout = setTimeout(() => reject(new Error('Timed out')), ms); })
  ]).finally(() => clearTimeout(timeout));
}

function revealGame() {
  if (started || platformPause) return;
  document.documentElement.lang = lang;
  document.title = t('title');
  set('home-title', t('title'));
  set('start-cafe', t(resumedGame ? 'continueGame' : 'startGame'));
  set('music-status', 'Seeruhe');
  updateAudioControl();
  showArt('studio-logo', 'studio');
  node('splash').hidden = true;
  node('home-screen').hidden = false;
  started = true;
  syncMusic();
  node('start-cafe').focus({ preventScroll: true });
  if (hosted) protocol.game.gameReady();
}

node('start-cafe').addEventListener('click', () => {
  if (platformPause || !started || gameEntered) return;
  gameEntered = true;
  syncMusic(true);
  playEffect('click');
  render();
  node('home-screen').hidden = true;
  game.hidden = false;
  (state.phase === 'open' ? node('pause') : node('advance')).focus({ preventScroll: true });
  syncSimulation();
});

async function prepareGame() {
  if (loading || started || platformPause) return;
  loading = true;
  node('retry').hidden = true;
  set('loading', t('loading'));
  let raw;
  try {
    if (hosted) {
      raw = await deadline(protocol.game.loadData(), 8000);
      cloudLoaded = true;
    } else {
      try { raw = localStorage.getItem(SAVE_KEY); } catch { raw = null; }
    }
    if (raw) {
      try {
        const saved = JSON.parse(raw);
        const restored = restore(saved);
        if (restored) {
          state = restored;
          resumedGame = true;
          manualPause = state.phase === 'open';
          note(((saved.version === 1 && restored.chapter === 3) || (saved.version === 2 && restored.chapter === 5)) ? 'extended' : 'loaded');
        }
      } catch {
        protocol?.health?.logWarning();
      }
    }
    revealGame();
  } catch {
    set('loading', t('loadError'));
    set('retry', t('retry'));
    node('retry').hidden = false;
  } finally {
    loading = false;
  }
}
node('retry').addEventListener('click', () => { void prepareGame(); });

if (hosted) {
  protocol.system.onPause(onPlatformPause);
  protocol.system.onResume(onPlatformResume);
  protocol.system.onAudioEnabledChange(enabled => {
    platformAudio = enabled === true;
    if (!platformAudio) cafeAudio.stop();
    syncMusic();
    if (started && !platformPause) updateAudioControl();
  });
}
requestAnimationFrame(() => {
  requestAnimationFrame(async () => {
    if (hosted) {
      protocol.game.firstFrameReady();
      try {
        const locale = await deadline(protocol.system.getLanguage(), 800);
        if (typeof locale === 'string' && /^de(?:-|$)/i.test(locale)) lang = 'de';
      } catch {
        // English remains available if YouTube's language setting cannot be loaded.
      }
    } else {
      lang = 'de';
    }
    document.querySelector('.splash h1').textContent = t('title');
    await prepareGame();
  });
});
