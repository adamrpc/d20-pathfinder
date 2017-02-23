"use strict";angular.module("d20-pathfinder",["ngRoute","d20-engine"]),angular.module("d20-pathfinder").factory("FeatBlood",["AbstractFeat",function(a){var b=new a("blood");return b.name="Blood",b.description="The race of the creature.",b.conditions=[],b.hidden=!0,b.bonuses=["race[#]+1"],b}]),angular.module("d20-pathfinder").factory("FeatDarkVision",["AbstractFeat",function(a){var b=new a("dark_vision");return b.name="Dark vision",b.description="Can see in the dark up to 18m.",b.conditions=[],b.hidden=!0,b.bonuses=["+base_vision+18"],b}]),angular.module("d20-pathfinder").factory("FeatDefensiveTraining",["AbstractFeat",function(a){var b=new a("defensive_training");return b.name="Defensive training",b.description="Gains AC bonus against creature of # subtype.",b.conditions=[],b.hidden=!0,b.bonuses=["AC[dodge(#)]+4"],b}]),angular.module("d20-pathfinder").factory("FeatElvenImmunities",["AbstractFeat",function(a){var b=new a("elven_immunities");return b.name="Elven immunities",b.description="Immune to magic sleep effects and get a racial bonus against enchantment spells and effects.",b.conditions=[],b.hidden=!0,b.bonuses=["+save[sleep]+2","+save[spell]+2","+save[enchant]+2"],b}]),angular.module("d20-pathfinder").factory("FeatElvenMagics",["AbstractFeat",function(a){var b=new a("elven_magics");return b.name="Elven magics",b.description="Resistant to spells and able to identify the properties of magic items.",b.conditions=[],b.hidden=!0,b.bonuses=["+CL+2","+spellCraft[properties]+2"],b}]),angular.module("d20-pathfinder").factory("FeatFearless",["AbstractFeat",function(a){var b=new a("fearless");return b.name="Fearless",b.description="Receive a racial bonus against fear",b.conditions=[],b.hidden=!0,b.bonuses=["+save[fear]+2"],b}]),angular.module("d20-pathfinder").factory("FeatFreeBardSpell",["AbstractFeat",function(a){var b=new a("free_bard_spell");return b.name="Free bard spell",b.description="Can cast # once a day if the creature charisma is greater than 11.",b.conditions=["stat(cha)>=11"],b.hidden=!0,b.bonuses=["limit(1j)|spell[cha(#)]"],b}]),angular.module("d20-pathfinder").factory("FeatGnomeMagics",["AbstractFeat",function(a){var b=new a("gnome_magics");return b.name="Gnome magics",b.description="Increase the difficulty to escape illusion spells that the creature casts.",b.conditions=[],b.hidden=!0,b.bonuses=["+DC[illusion]+1"],b}]),angular.module("d20-pathfinder").factory("FeatGreed",["AbstractFeat",function(a){var b=new a("greed");return b.name="Greed",b.description="Receive a bonus to determine the price of nonmagical goods that contain precious metals or gemstones.",b.conditions=[],b.hidden=!0,b.bonuses=["+appraise[metal]+2","+appraise[gem]+2"],b}]),angular.module("d20-pathfinder").factory("FeatHalflingLuck",["AbstractFeat",function(a){var b=new a("halfling_luck");return b.name="Halfling luck",b.description="Lucky for everything.",b.conditions=[],b.hidden=!0,b.bonuses=["+save[any]+1"],b}]),angular.module("d20-pathfinder").factory("FeatHardy",["AbstractFeat",function(a){var b=new a("hardy");return b.name="Hardy",b.description="Resistant against poison, spells, and spell-like abilities.",b.conditions=[],b.hidden=!0,b.bonuses=["+save[poison]+2","+save[spell]+2","+save[spell_like]+2"],b}]),angular.module("d20-pathfinder").factory("FeatHatred",["AbstractFeat",function(a){var b=new a("hatred");return b.name="Hatred",b.description="Stronger against against # due to special training against these hated foes.",b.conditions=[],b.hidden=!0,b.bonuses=["+atk_target[#]+1"],b}]),angular.module("d20-pathfinder").factory("FeatIntimidating",["AbstractFeat",function(a){var b=new a("intimidating");return b.name="Intimidating",b.description="Intimidating due to his fearsome nature.",b.conditions=[],b.hidden=!0,b.bonuses=["+intimidate+2"],b}]),angular.module("d20-pathfinder").factory("FeatKeenSenses",["AbstractFeat",function(a){var b=new a("keen_senses");return b.name="Keen senses",b.description="Receive perception bonus.",b.conditions=[],b.hidden=!0,b.bonuses=["+perception+2"],b}]),angular.module("d20-pathfinder").factory("FeatLowLightVision",["AbstractFeat",function(a){var b=new a("low_light_vision");return b.name="Low-light vision",b.description="The creature can see twice as far as humans in conditions of dim light.",b.conditions=[],b.hidden=!0,b.bonuses=["light_source*2"],b}]),angular.module("d20-pathfinder").factory("FeatMultitalented",["AbstractFeat",function(a){var b=new a("multitalented");return b.name="Multitalented",b.description="Choose two favored classes at first level.",b.conditions=[],b.hidden=!0,b.bonuses=["+favored_class+1"],b}]),angular.module("d20-pathfinder").factory("FeatOrcFerocity",["AbstractFeat",function(a){var b=new a("orc_ferocity");return b.name="Orc ferocity",b.description="Once per day, when the creature is brought below 0 hit points but not killed, he can fight on for one more round as if disabled. At the end of his next turn, unless brought to above 0 hit points, he immediately falls unconscious and begins dying.",b.conditions=[],b.hidden=!0,b.bonuses=["limit(1j)|ferocity"],b}]),angular.module("d20-pathfinder").run(["FeatLib","FeatLoader","FeatSize","FeatSlowAndSteady","FeatLowLightVision","FeatDarkVision","FeatGreed","FeatBlood","FeatStonecunning","FeatDefensiveTraining","FeatHatred","FeatHardy","FeatStability","FeatWeaponProficiency","FeatElvenImmunities","FeatElvenMagics","FeatKeenSenses","FeatGnomeMagics","FeatFreeBardSpell","FeatResistance","FeatSkillFocus","FeatMultitalented","FeatIntimidating","FeatOrcFerocity","FeatFearless","FeatHalflingLuck","FeatSureFooted","FeatSkilled",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){var C="pathfinder",D=function(){this.id=C};D.prototype.load=function(){var D=Array.from(arguments),E=_.includes(D,b.ALL)||_.includes(D,C);_.forEach([c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B],function(b){(E||_.includes(D,b.id))&&a.register(b.id,b)})},b.register(C,new D)}]),angular.module("d20-pathfinder").factory("FeatResistance",["AbstractFeat",function(a){var b=new a("resistance");return b.name="Resistance",b.description="Resistant against # spells and effects.",b.conditions=[],b.hidden=!0,b.bonuses=["+save[spell(#)]+2","+save[effect(#)]+2"],b}]),angular.module("d20-pathfinder").factory("FeatSize",["$log","AbstractFeat",function(a,b){var c=["I","Min","TP","P","M","G","TG","Gig","C"],d=angular.copy(b);angular.extend(d.prototype,b.prototype),d.prototype.bonus=function(b,d){var e=d.match(/^([a-zA-Z_]+?|#)(\[((#|[a-zA-Z_]+?)|([a-zA-Z_]+)\((#|[a-zA-Z_]+?)\))])?$/),f={base_bonus:0,bonus:0,malus:0,malus_limit:0,bonus_limit:0};if(!e)return a.warn("Bad skill formatting ("+d+") while computing bonus ("+this.id+"), returning 0."),f;var g=e[1],h=e[4]?e[4]:e[5],i=e[6],j="racial"===h||"any"===h||!h,k="any"===g||"any"===h||"any"===i,l=0,m=_.indexOf(c,_.has(b,"feat")&&_.has(b.feat,this.id)?b.feat[this.id]:null);return m>=0&&("AC"===g&&j?l=Math.pow(2,Math.abs(m-4))*(m-4>0?-1:1):"CMB"!==g&&"CMD"!==g||!j?"stealth"===g&&j?l=4*-(m-4):"base_speed"===g&&j&&(l=m):l=Math.pow(2,Math.abs(m-4))*(m-4>0?1:-1)),k?{any:{base_bonus:0,bonus:0,malus:0,malus_limit:0,bonus_limit:0},racial:{base_bonus:l,bonus:0,malus:0,malus_limit:0,bonus_limit:0}}:(f.base_bonus=l,f)};var e=new d("size");return e.name="Size",e.description="",e.conditions=["feat(size!)"],e.hidden=!0,e.bonuses=["AC[size(any)]","+CMB","+CMD","+stealth","+base_speed"],e}]),angular.module("d20-pathfinder").factory("FeatSkilled",["AbstractFeat",function(a){var b=new a("skilled");return b.name="Skilled",b.description="The creature gains an additional skill rank at 1st level and one additional rank whenever it gains a level.",b.conditions=[],b.hidden=!0,b.bonuses=["+skill_point+1"],b}]),angular.module("d20-pathfinder").factory("FeatSkillFocus",["AbstractFeat",function(a){var b=new a("skill_focus");return b.name="Skill focus",b.description="The creature is particularly adept at #.",b.conditions=[],b.hidden=!1,b.bonuses=["skill(#<10)|+#+3","skill(#>=10)|+#+6"],b}]),angular.module("d20-pathfinder").factory("FeatSlowAndSteady",["AbstractFeat",function(a){var b=new a("slow_and_steady");return b.name="Slow and steady",b.description="Reduce base speed, but the speed is never modified by armor or encumbrance.",b.hidden=!0,b.conditions=[],b.bonuses=["-base_speed[racial]-1","!-inventory_speed","!-armor_speed"],b}]),angular.module("d20-pathfinder").factory("FeatStability",["AbstractFeat",function(a){var b=new a("stability");return b.name="Stability",b.description="Resisting against bull rush or trip attempt while standing on the ground.",b.conditions=[],b.hidden=!0,b.bonuses=["+CMD+4"],b}]),angular.module("d20-pathfinder").factory("FeatStonecunning",["AbstractFeat",function(a){var b=new a("stonecunning");return b.name="Stonecunning",b.description="Notice unusual stonework, such as traps and hidden doors located in stone walls or floors.",b.conditions=[],b.hidden=!0,b.bonuses=["perception[stone]+2","auto_perception[stone]"],b}]),angular.module("d20-pathfinder").factory("FeatSureFooted",["AbstractFeat",function(a){var b=new a("sure_footed");return b.name="Sure footed",b.description="Receive a bonus on acrobatics and climbing.",b.conditions=[],b.hidden=!0,b.bonuses=["+acrobatics+2","+climbing+2"],b}]),angular.module("d20-pathfinder").factory("FeatWeaponProficiency",["AbstractFeat",function(a){var b=new a("weapon_proficiency");return b.name="Weapon proficiency",b.description="The creature is are trained in the use of #.",b.conditions=[],b.hidden=!1,b.bonuses=["!-atk_weapon[#]-4"],b}]),angular.module("d20-pathfinder").factory("RaceDwarf",["AbstractRace",function(a){var b=new a("dwarf");return b.name="Dwarf",b.description="",b.stats=["con+2","wis+2","cha-2"],b.feats=["size[M]","slow_and_steady","dark_vision","greed","blood[dwarf]","stonecunning","defensive_training[giant]","hatred[orc]","hatred[golinoid]","hardy","stability","weapon_proficiency[battle_axe]","weapon_proficiency[heavy_war_peak]","weapon_proficiency[war_hammer]"],b.languages=["common","dwarf"],b.availableLanguages=["common-depths","giant","gnome","goblin","orc","earthy","aquatic","igneous","aerial"],b}]),angular.module("d20-pathfinder").factory("RaceElf",["AbstractRace",function(a){var b=new a("elf");return b.name="Elf",b.description="",b.stats=["dex+2","int+2","con-2"],b.feats=["size[M]","low_light_vision","elven_immunities","elven_magics","keen_senses","blood[elf]","weapon_proficiency[long_bow]","weapon_proficiency[composite_long_bow]","weapon_proficiency[bow]","weapon_proficiency[composite_bow]","weapon_proficiency[sword]","weapon_proficiency[rapier]"],b.languages=["common","elf"],b.availableLanguages=["celestial","draconic","gnoll","gnome","goblin","orc","sylvan"],b}]),angular.module("d20-pathfinder").factory("RaceGnome",["AbstractRace",function(a){var b=new a("gnome");return b.name="Gnome",b.description="",b.stats=["con+2","cha+2","str-2"],b.feats=["size[P]","low_light_vision","blood[gnome]","defensive_training[giant]","hatred[reptilian]","hatred[goblinoid]","gnome_magics","free_bard_spell[animal_communication]","free_bard_spell[dancing_lights]","free_bard_spell[prestidigitation]","free_bard_spell[imaginary_sound]","resistance[illusion]","keen_senses"],b.languages=["common","gnome"],b.availableLanguages=["draconic","elf","giant","goblin","dwarf","orc"],b}]),angular.module("d20-pathfinder").factory("RaceHalfElf",["AbstractRace",function(a){var b=new a("half_elf");return b.name="Half-elf",b.description="",b.stats=["any+2"],b.feats=["size[M]","low_light_vision","skill_focus[any]","elven_immunities","blood[elf]","blood[human]","blood[half_elf]","keen_senses","multitalented"],b.languages=["common","elf"],b.availableLanguages=["abyssal","aklo","aquatic","aerial","celestial","common-depths","draconic","giant","gnoll","gnome","goblin","halfelin","igneous","infernal","dwarf","orc","sylvan","earthy"],b}]),angular.module("d20-pathfinder").factory("RaceHalfOrc",["AbstractRace",function(a){var b=new a("half_orc");return b.name="Half-orc",b.description="",b.stats=["any+2"],b.feats=["size[M]","dark_vision","intimidating","blood[half_orc]","blood[orc]","blood[human]","orc_ferocity","weapon_proficiency[great_axe]","weapon_proficiency[2_handed_cimetery]"],b.languages=["common","orc"],b.availableLanguages=["abyssal","draconic","giant","gnoll","goblin"],b}]),angular.module("d20-pathfinder").factory("RaceHalfling",["AbstractRace",function(a){var b=new a("halfling");return b.name="Halfling",b.description="",b.stats=["dex+2","cha+2","str-2"],b.feats=["size[P]","blood[halfelin]","fearless","halfling_luck","keen_senses","sure_footed","weapon_proficiency[sling]"],b.languages=["common","halfelin"],b.availableLanguages=["abyssal","elf","gnome","goblin","dwarf"],b}]),angular.module("d20-pathfinder").factory("RaceHuman",["AbstractRace",function(a){var b=new a("human");return b.name="Human",b.description="",b.stats=["any+2"],b.feats=["size[M]","blood[human]","any","skilled"],b.languages=["common"],b.availableLanguages=["abyssal","aklo","aquatic","aerial","celestial","common-depths","draconic","elf","giant","gnoll","gnome","goblin","halfelin","igneous","infernal","dwarf","orc","sylvan","earthy"],b}]),angular.module("d20-pathfinder").run(["RaceLoader","RaceLib","RaceDwarf","RaceElf","RaceGnome","RaceHalfElf","RaceHalfOrc","RaceHalfling","RaceHuman",function(a,b,c,d,e,f,g,h,i){var j="pathfinder",k=function(){this.id=j};k.prototype.load=function(){var k=Array.from(arguments),l=_.includes(k,a.ALL)||_.includes(k,j);_.forEach([c,d,e,f,g,h,i],function(a){(l||_.includes(k,a.id))&&b.register(a.id,a)})},a.register(j,new k)}]),angular.module("d20-pathfinder").factory("SkillAC",["AbstractSkill",function(a){var b=new a("AC");return b.hidden=!0,b.stat="dex",b.base=10,b.variants={touch:["armor","shield","natural"],flat_footed:["dodge","stat"]},b}]),angular.module("d20-pathfinder").run(["SkillLoader","SkillLib","SkillAC",function(a,b,c){var d="pathfinder",e=function(){this.id=d};e.prototype.load=function(){var e=Array.from(arguments),f=_.includes(e,a.ALL)||_.includes(e,d);_.forEach([c],function(a){(f||_.includes(e,a.id))&&b.register(a.id,a)})},a.register(d,new e)}]),angular.module("d20-pathfinder").factory("StatCharisma",["AbstractStat",function(a){var b=new a("cha");return b.min=0,b.name="Charisma (Cha)",b.description="Charisma measures personality, personal magnetism, ability to lead, and appearance. A creature with a Charisma score of 0 is not able to exert himself in any way and is unconscious.",b}]),angular.module("d20-pathfinder").factory("StatConstitution",["AbstractStat",function(a){var b=new a("con");return b.min=0,b.name="Constitution (Con)",b.description="Constitution represents health and stamina. A Constitution bonus increases hit points.",b}]),angular.module("d20-pathfinder").factory("StatDexterity",["AbstractStat",function(a){var b=new a("dex");return b.min=0,b.name="Dexterity (Dex)",b.description="Dexterity measures agility, reflexes, and balance. A creature with a Dexterity score of 0 is incapable of moving and is effectively immobile (but not unconscious).",b}]),angular.module("d20-pathfinder").factory("StatIntelligence",["AbstractStat",function(a){var b=new a("int");return b.min=0,b.name="Intelligence (Int)",b.description="Intelligence determines how well a creature learns and reasons. This ability affects spellcasting ability in many ways. Creatures of animal-level instinct have Intelligence scores of 1 or 2. Any creature capable of understanding speech has a score of at least 3. A creature with an Intelligence score of 0 is comatose.",b}]),angular.module("d20-pathfinder").run(["StatLoader","StatLib","StatCharisma","StatDexterity","StatConstitution","StatIntelligence","StatStrength","StatWisdom",function(a,b,c,d,e,f,g,h){var i="pathfinder",j=function(){this.id=i};j.prototype.load=function(){var j=Array.from(arguments),k=_.includes(j,a.ALL)||_.includes(j,i);_.forEach([c,d,e,f,g,h],function(a){(k||_.includes(j,a.id))&&b.register(a.id,a)})},a.register(i,new j)}]),angular.module("d20-pathfinder").factory("StatStrength",["AbstractStat",function(a){var b=new a("str");return b.min=0,b.name="Strength (Str)",b.description="Strength measures muscle and physical power. Strength also sets the maximum amount of weight your character can carry. A creature with a Strength score of 0 is too weak to move in any way and is unconscious.",b}]),angular.module("d20-pathfinder").factory("StatWisdom",["AbstractStat",function(a){var b=new a("wis");return b.min=0,b.name="Wisdom (Wis)",b.description="Wisdom describes willpower, common sense, awareness, and intuition. A creature with a Wisdom score of 0 is incapable of rational thought and is unconscious.",b}]);