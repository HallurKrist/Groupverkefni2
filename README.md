
## Að keyra verkefnið
Til að keyra verkefnið þarf að vera með node.js í tölvunni sem verið er að vinna í.
Þegar viðkomandi er kominn með node.js þá þarf hann að keyra í cmd eða svipuðu umhverfi inni í verkefnis möppunni eftirfarandi skipanir:

* `npm install` þessi skipun mun ná í og installa ollum node_module sem þarf til að keyra verkefnið
* `npm run test` til að sjá hvaða villur eru til staðar (ættu ekki að vera neinar villur)
* `npm run eslintFix` og `npm run stylelintFix` ef einhverjar villur komu upp þá ætti að vera nóg að keyra þessar skipanir til að losna við þær
* `npm run dev` mun síðan keyra verkefnið locally í tölvunni og mun vakta allar breytingar á skránnum og breyta síðunni í samræmi 

## Tæki og tól

Eftirfarandi er sett upp í verkefni:

* `.stylelintrc` með upplýsingum um hvernig stylelint eigi að haga sér. Setja þarf upp `stylelint-config-primer` pakkann
* `.eslintrc` skrá sem segir til um hvernig lint fyrir JavaScript skrár skuli háttað
* `.gitignore` sem hunsar algengar skrár, [sjá nánar](https://help.github.com/ignore-files/)
  - Allt undir `./dist` hunsað sem þýðir að það verður _ekki_ checkað inn. Það er gert vegna þess að þær skrár eru útbúnar af tólum þegar verkefni er keyrt.
* `.gitattributes` sem kemur í veg fyrir ósamræmi sem geta komið upp þegar unnið er á milli stýrikerfa
* `.editorconfig` sem samræmir notkun á tabs og spaces, bilum [og fleira](https://editorconfig.org/)
* `grid.css` til að sjá grid sem fyrirmynd er unnin eftir
* `src/` mappa með
  - `styles/` undirmöppu með `styles.scss` grunni
  - `lib/` undirmappa sem gæti innihaldið JavaScript kóða auk tillögu að grunni fyrir virkni á forsíðu
  - `index.js` skrá sem vísar í `lib/`
* `dist/` mappa sem ætti að innihalda _þýddar_ sass og JavaScript skrár
* `img/` með öllum myndum sem þarf í verkefnið
* `package.json` hefur uppsett script ásamt dependencies
  - `eslint` til að keyra eslint
  - `eslintFix` til að laga einfaldar villur úr eslint auðveldlega
  - `stylelint` til að keyra stylelint
  - `stylelintFix` til að laga einfaldar villur úr stylelint auðveldlega
  - `test` til að keyra bæði `eslint` og `stylelint`
  - `browser-sync` til að keyra verkefni
  - `sass` til að keyra fyrstu þýðingu
  - `sass-watch` til að fylgjast með sass skrám og þýða
  - `rollup` til að keyra þyðingu á öllum js skránum og þjappa þeim
  - `rollup-watch` til að vakta js skrár og þjappa þeim við breytingar á þeim
  - `dev` til að keyra `sass` og `browser-sync`


## Hópmeðlimir

* `Hallur Kristinn Hallsson` 
  - hkh32@hi.is 
  - Dæmatímahópur 2
* `Heiða Helgudóttir` 
  - heh72@hi.is 
  - Dæmatímahópur 2
* `Guðmundur Garðar Árnason` 
  - gga3@hi.is 
  - Dæmatímahópur 5
