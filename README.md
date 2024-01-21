# Roll20 Custom Character Sheet for Inquisitor 40k

## The Goal

Roll20 is an online-table-top-RPG-platform where dice-and-model-based games such as D&D can be played. Character Sheets are represented as HTML pages windowed (an i-frame element) within the "table top map" which is itself effectively a complex web page. The Character Sheet defines the game being played and the dice that are rolled, effects had etc. Custom character sheets allow any game played with dice and models (within some limitations) to be played on Roll20. Online guides/wikis/documentation exist to assist custom sheets, hundreds and probably thousands of other games have already been incarnated on Roll20 . . . I should be able to do this!

The aim here is to produce a functional custom character sheet for Inquisitor; a table top RPG based around small-team combat (bands of 3-7 characters usually) based in the Warhammer: 40k universe. The game is no longer in print but I have an original copy of the rulebook (errata and all). A functional sheet that can be used to play the game, even if significant human information input is required, would require some HTML and CSS and a tiny bit of JS. The map, distances and a lot of dice stuff is already handled by Roll20 but more complex code could automate a lot of the human user input (in far, far future iterations).

- [Roll20 - Virtual Tabletop for playing RPG's](https://roll20.net/welcome)
- [The out-of-print Rulebook for Inquisitor](chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cdn.preterhuman.net/texts/gaming_and_diversion/Warhammer_40K_Collection/Warhammer%2040k%20-%20Inquisitor%20-%20The%20Living%20Rule%20Book%201.1%20(Part%20I).pdf)

### Credit
The majority of this sheet was adapted from the Dark-Heresy sheet by [NeirinD](https://github.com/NeirinD). Thank you for lovingly crafting an elegant sheet that provided the bones and sinew of this personal project.
The original Dark Heresy Sheet can be found [here](https://github.com/Roll20/roll20-character-sheets/tree/master/Dark_Heresy)

I hope to produce something worthy of being added to the Roll2-character-sheets repositiory.

### Dev Map
<ol>
  <li>Basic ruleset and rolls functionality</li>
  <li>Talent implementation with scalability for people to add homebrew talents</li>
  <li>UX improvements - automated range modifer input, automated damage added to sheet, etc</li>
  <li>Character creation workflow (Charactermancer)</li>
</ol>

JP
