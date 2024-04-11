# Roll20 Custom Character Sheet for Inquisitor 40k

<img src="assets\inq-logo-rect.png" style="max-height: 150px; margin-left: 40%;">

## The Goal

Roll20 is an online-table-top-RPG-platform where dice-and-model-based games such as D&D can be played. Character Sheets are represented as HTML pages windowed (an i-frame element) within the "table top map" web page. The Character Sheet defines the game being played and the dice that are rolled, modifiers, effects had etc. Custom character sheets allow any game played with dice and models (with some limitations) to be played on Roll20. Online guides/wikis/documentation exist to assist custom sheet development, thousands of other games have already been incarnated on Roll20 . . . I should be able to do this!

The aim here is to produce a functional custom character sheet for Inquisitor; a table top RPG based around small-team combat (bands of 3-7 characters usually) based in the Warhammer: 40k universe. The game is no longer in print but I have an original copy of the rulebook (errata and all). A functional sheet that can be used to play the game, even if significant human information input is required, would require some HTML and CSS and a tiny bit of JS. The map, distances and a lot of dice stuff is already handled by Roll20 but more complex code could automate a lot of the human user input (in far, far future iterations).

- [Roll20 - Virtual Tabletop for playing RPG's](https://roll20.net/welcome)
- [The out-of-print Rulebook for Inquisitor](https://wh40k.lexicanum.com/wiki/Inquisitor_Rulebook)

## Credit

The majority of this sheet was adapted from the Dark-Heresy sheet by [NeirinD](https://github.com/NeirinD). Thank you for lovingly crafting an elegant sheet that provided the bones and sinew of this personal project.
The original Dark Heresy Sheet can be found [here](https://github.com/Roll20/roll20-character-sheets/tree/master/Dark_Heresy)

I hope to produce something worthy of being added to the Roll2-character-sheets repositiory.

## Dev Map

<ol>
  <li>Basic ruleset and rolls functionality</li>
  <li>Talent implementation with scalability for people to add homebrew talents</li>
  <li>UX improvements - automated range modifer input, automated hit location rolls, damage added to sheet, etc</li>
  <li>GM's Guide</li>
  <li>Character creation workflow (Charactermancer which would require a Compendium vs. Macro)</li>
</ol>

JP

___

## About this Sheet

- This sheet was created using [this sheet](https://github.com/Roll20/roll20-character-sheets/tree/master/Dark_Heresy) as a template. Credit - [NeirinD](https://github.com/NeirinD)

- This first iteration aims to implement the fundamental rules and rolls with UX/automation deferred to later iterations. Expect significant user input during rolls until future versions.

- I would describe the currrent style as "hobo-auspex". I think it is thematic but may have some accessibilty issues (and some people may just find the 'computer green-text output' look abrasive). Feedback welcome and the design and surface will be revisited later in development.

- Rolls and modifiers: The rules have a broad selection of contextual modifiers. These are currently handled as queries for user input when the roll is made (requiring the user to have some familiarity with the game, +/- a GM, and ideally a rulebook).

  - The rulebook is available online [here](https://wh40k.lexicanum.com/wiki/Inquisitor_Rulebook), but in future I would love to volunteer to create a compendium (this is currently an option of Marketplace partners but I'll explore it)

  - Many/most user queries could be handled with JavaScript in the form of Sheetworkers, this will be adressed in a third iteration.

- Talents: Talents, special abilities, psychic powers and bionics have not (yet) been implemented, the second iteration will focus on these talents and abilities.

## The Basic Ruleset

#### *"Almost every character that isn't a Space Marine is a glass cannon, and I've still seen a Grey Knight lose his head to a melta bomb"*

A character has a variety of '*characteristics*' such as Ballistic Skill (BS) for ranged weapon use and Willpower (WP) for handling psychic and psychological effects.

A character has a '*Speed*'. This determines how many actions they can perform a turn. *After* a character declares their actions, a number of d6 equal to the character's Speed is rolled and an action is performed successfuly on a 4+.

Characters have *Talents* which are essentially 'Feats' if you are familiar with D&D. Psychic powers, mutations and other special abilities are essentially handled the same way, in that they are items on a character sheet that can be used actively or provide passive benefits. Many Talents provide modifiers for rolls (first iteration - user input, later iterations - automated with JavaScript)

Damage has a location system. Each location has potential levels of injury with associated *immediate* and *prolonged* effects. This ranges from a lightly wounded leg reducing a characters movement speed, all the way up to instant death resulting from a crippled head injury.

*Armour* provides damage reduction, cheaper '*ablative*' armour is destroyed as it soaks damage.

*Ranged weapons* have firing modes (single, semi-auto, full-auto), ammunition is tracked, various types (laser, projectile, plasma, melta), and 10 possible range modifer profiles that provide a range of modifiers in 5 yard incrememnts (a pistol has better modifiers at short range and terrible modifiers at long range, while a sniper rifle might have terrible modifiers at short range, great modifiers at optimal range, then worsening modifiers at extreme range). A table of range profiles is included in the repo but this finicky system is a key target for automation.

*Melee combat* is fast-paced and unforgiving. Rolls are modified by difference in *reach* of weapons, relative positioning of characters and a host of Talents and abilities. Defenders have the option of *parrying* or *dodging*. A *counter attack* can be achieved relavtively easily by rolling well on a parry, but both dodging and parrying get much more difficult with each subsequent attempt in a turn.

The rulebook does contain a points-based system for character creation. There is significant capacity for homebrewed content and this needs to be allowed for in the sheet and any character creation system. It is worth noting that armour, especially power armour, can result in a significant point cost and it is not uncommon for one or two fully armoured Space Marines to have the same point value as an entire 5-7 person killteam (that's a lot of eggs in one basket when a guardsmen in flak armour can still headshot your marine, with a bit of luck . . . and maybe a melta cannon).

While two players with experience in the system could run a one-shot scenario without a GM, I believe the most fun way to use the system is with a GM that can provide narrative and plot between scenarios. The ruleset technically does not include out-of-combat rules/rolls but with the reasonably broad range of characteristics and percentage-based rolls, it is easy for a GM to rule-of-fun an entire narrative side of the game. I plan to include a "So you want to run an Inquisitor Campaign" Guide with some of my own tips and tricks for both cooperative and adversarial campaigns.

___

### Implemented Features (v0.1)
- Speed is calculated by sheet from characteristics. Rolling speed rolls the appropriate number of D6 and returns the number of successful actions.

- System shock value (the amount of damamge froma single source that requires a test to remain conscious) is calculated by sheet from characteristics. Rolling System shock will test against the Toughness and report success or failure.

- Consciouness value is calculated by sheet from characteristics. This value is displayed above System Shock but is not rollable, beacuse once a character's total damage passes the Consciousness threshold, they are down without a chance to roll.

- Total damage is calculated by sheet from the sum of all location damage.

- Dodge button/roll is implemented with queries for user to determine correct target.

- Parry button/roll is implemented with queries for user to determine correct target.


### Features to be Added

- Counterattck check for parry rolls

- Talents & Abilities

- Automation to reduce number of user queries and streamline UX

___
### Usage Notes


___
### Change Log