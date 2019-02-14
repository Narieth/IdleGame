//Creating guilds  -------------------------------------------------------------------------------------------------------
guildIds = ["fighterGuild", "rogueGuild", "mageGuild", "helperGuild", "merchantGuild", "bardGuild"];
expeditionNames = ["Royal Protection", "Sabotage", "Arcane Warding", "Lecture", "Smart Investment", "Songwriting"]
guildNames = ["Stalwart Protectors", "Shadow Syndicate", "Order of the Magi", "Royal Academy", "Merchant's Guild", "Bards College"];
guildIcons = ["././images/fighterGuildIcon.png", "././images/rogueGuildIcon.png", "././images/mageGuildIcon.png", "././images/helperGuildIcon.png", "././images/merchantGuildIcon.png", "././images/bardGuildIcon.png" ]
guildRep = [0,0,0,0,0,0];
guildRank = [0,0,0,0,0,0];
//guildRank = [4,4,4,4,4,3];
//guildRank = [1,2,3,4,4,1];
guildTitles = ["Initiate", "Novice", "Member", "Officer", "Leader"];
guildTitleRep = [1000, 2000, 4000, 7400];
guildOpen = ["no", "no", "no", "yes", "yes", "yes"];
//guildTitleRep = [1,1,1,1];
//tokenCount = [0,0,0,0,0,0];
tokenCount = [100,100,100,100,100,99];
inNumber = [0,0,0,0,0,0];
inCosts = [10,10,10,10,10,10];
inBonus = [0,0,0,0,0,0];
inNames = ["Elite Armoury", "Poison Shop", "Scrying Orbs", "Private Lectures", "Black Market", "Town Square"];

//level
levelCap = [1000, 2500, 5000, 10000, 16000, 24000, 35000, 50000, 100000, 250000, 500000, 1000000, 1700000, 5000000];
//levelCap = [1000,1,2,3,4,5,6,7,8,9,10,11,12,13];

//Creating helpers  -------------------------------------------------------------------------------------------------------
helperIds = ["farmer", "soldier", "scout", "cleric", "cavalier", "wyrm"];
helperNames = ["Farmer", "Soldier", "Scout", "Cleric", "Cavalier", "Wyrm"];
helperIcons = ["././images/helperFarmer.png", "././images/helperSoldier.png", "././images/helperScout.png", "././images/helperCleric.png", "././images/helperCavalier.png", "././images/helperWyrm.png"];
//helperCosts = [100, 250, 500,1000,2000,5000];
helperLevels = [0,0,0,0,0,0];
//helperBaseProds = [1,2,4,6,8,15];
//helperBaseCosts = [100,250,500,1000,2000,5000]; 
//helperProds = [1,2,4,6,8,15];
helperTypes = ["unlocked", "locked","locked", "locked","locked", "locked"];

//reworked ?
helperCosts = [100,250,400,800,1480,5000]
helperBaseCosts = [100,250,400,800,1480,5000]
helperBaseProds = [1,3,6,15,34,84]
helperProds = [0,0,0,0,0,0]


//Creating quests ------------------------------------------------------------------------------------------------------
questIds = ["initiate", "novice", "member", "officer", "leader", "ids"];
questMods = [0.75, 1, 1.1, 1.25, 1.5];
//questTimes = [60000, 120000, 300000, 600000, 1800000, 60000, 120000, 300000, 600000, 60000, 120000, 300000, 60000, 120000, 60000];
questTimes = [60000];
//questTimes = [1000,2000,3000,4000,5000,10000];
questRewards = [60, 130, 350, 700, 1000];
questSpreads = [1,2,3,4,5,6];


//creating deeds    ---- need icons for agility and sorcery still

//id, name, desc, req, amount, effect, quant, type, unlock, icon, iconLocked, icon achieved, icon selected

var meleedeed1 = Object.create(allDeeds);
meleedeed1.init("meleedeed1", "Brawler Title", "Prove your strength in a brawl.", "cp", 139, "cp", 5, "Melee", "u", "././images/Upgrades/meleeDeed1unlocked.png", "././images/Upgrades/meleeDeed1locked.png",  "././images/Upgrades/meleeDeed1achieved.png", "././images/Upgrades/meleeDeed1selected.png");
var meleedeed2 = Object.create(allDeeds);
meleedeed2.init("meleedeed2", "Arm Wrestling", "Improve your strength to win an arm wrestling tournament", "enrageCasts", 1, "goldMod", 1, "Melee", "l", "././images/Upgrades/testIcon.png", "././images/Upgrades/testIconLocked.png",  "././images/Upgrades/testIconMelee.png", "././images/Upgrades/testIconMeleeSelected.png");
var meleedeed3 = Object.create(allDeeds);
meleedeed3.init("meleedeed3", "Arm Wrestling", "Improve your strength to win an arm wrestling tournament", "helpersProduced", 1000, "helperMod", 1, "Melee", "l", "././images/Upgrades/testIcon.png", "././images/Upgrades/testIconLocked.png",  "././images/Upgrades/testIconMelee.png", "././images/Upgrades/testIconMeleeSelected.png");
var meleedeed4 = Object.create(allDeeds);
meleedeed4.init("meleedeed4", "Arm Wrestling", "Improve your strength to win an arm wrestling tournament", "cp", 100, "goldMod", 0.1, "Melee", "l", "././images/Upgrades/testIcon.png", "././images/Upgrades/testIconLocked.png",  "././images/Upgrades/testIconMelee.png", "././images/Upgrades/testIconMeleeSelected.png");

var agilitydeed1 = Object.create(allDeeds);
agilitydeed1.init("agilitydeed1", "Deadly Potential", "Prove your cunning with a massive critical hit.", "cc", 136, "goldMod", 0.25, "Agility", "u", "././images/Upgrades/agilityDeed1unlocked.png", "././images/Upgrades/agilityDeed1locked.png", "././images/Upgrades/agilityDeed1achieved.png", "././images/Upgrades/agilityDeed1selected.png");
var agilitydeed2 = Object.create(allDeeds);
agilitydeed2.init("agilitydeed2", "Arm Wrestling", "Improve your strength to win an arm wrestling tournament", "goldMod", 2.5, "goldMod", 1, "Agility", "l", "././images/Upgrades/testIcon.png", "././images/Upgrades/testIconLocked.png", "././images/Upgrades/testIconAgility.png", "././images/Upgrades/testIconAgilitySelected.png");
var agilitydeed3 = Object.create(allDeeds);
agilitydeed3.init("agilitydeed3", "Arm Wrestling", "Improve your strength to win an arm wrestling tournament", "completeQuest", 1, "tokenGain", 1, "Agility", "l", "././images/Upgrades/testIcon.png", "././images/Upgrades/testIconLocked.png", "././images/Upgrades/testIconAgility.png", "././images/Upgrades/testIconAgilitySelected.png");
var agilitydeed4 = Object.create(allDeeds);
agilitydeed4.init("agilitydeed4", "Arm Wrestling", "Improve your strength to win an arm wrestling tournament", "cp", 100, "goldMod", 0.1, "Agility", "l", "././images/Upgrades/testIcon.png", "././images/Upgrades/testIconLocked.png", "././images/Upgrades/testIconAgility.png", "././images/Upgrades/testIconAgilitySelected.png");

var sorcerydeed1 = Object.create(allDeeds);
sorcerydeed1.init("sorcerydeed1", "Mana Leak", "Restored resource is the source of your power.", "regen", 1500, "regen", 3, "Sorcery", "u", "././images/Upgrades/sorceryDeed1unlocked.png", "././images/Upgrades/sorceryDeed1locked.png", "././images/Upgrades/sorceryDeed1achieved.png", "././images/Upgrades/sorceryDeed1selected.png");
var sorcerydeed2 = Object.create(allDeeds);
sorcerydeed2.init("sorcerydeed2", "Arm Wrestling", "Improve your strength to win an arm wrestling tournament", "spellsCast", 10, "spellPower", 1, "Sorcery", "l", "././images/Upgrades/testIcon.png", "././images/Upgrades/testIconLocked.png", "././images/Upgrades/testIconSorcery.png", "././images/Upgrades/testIconSorcerySelected.png");
var sorcerydeed3 = Object.create(allDeeds);
sorcerydeed3.init("sorcerydeed3", "Arm Wrestling", "Improve your strength to win an arm wrestling tournament", "mMissleHit", 200, "maxMana", 100, "Sorcery", "l", "././images/Upgrades/testIcon.png", "././images/Upgrades/testIconLocked.png", "././images/Upgrades/testIconSorcery.png", "././images/Upgrades/testIconSorcerySelected.png");
var sorcerydeed4 = Object.create(allDeeds);
sorcerydeed4.init("sorcerydeed4", "Arm Wrestling", "Improve your strength to win an arm wrestling tournament", "cp", 100, "goldMod", 0.1, "Sorcery", "l", "././images/Upgrades/testIcon.png", "././images/Upgrades/testIconLocked.png", "././images/Upgrades/testIconSorcery.png", "././images/Upgrades/testIconSorcerySelected.png");


var deedList=[];
deedList.push(meleedeed1);
deedList.push(meleedeed2);
deedList.push(meleedeed3);
deedList.push(meleedeed4);

deedList.push(agilitydeed1);
deedList.push(agilitydeed2);
deedList.push(agilitydeed3);
deedList.push(agilitydeed4);

deedList.push(sorcerydeed1);
deedList.push(sorcerydeed2);
deedList.push(sorcerydeed3);
deedList.push(sorcerydeed4);



//creating talents
var t1click = Object.create(allTalents);
t1click.init("t1click", "Improved Clicking", "cp", "Increases your click production", 1, "././images/Upgrades/powerUpgrade1.png", "t1", "", "u", "rgba(255,255,255,0.2)", 0, 5, "");
var t1crit = Object.create(allTalents);
t1crit.init("t1crit", "Improved Critical", "cc", "Increases your critical chance", 1, "././images/Upgrades/critUpgrade1.png", "t1", "", "u", "rgba(255,255,255,0.2)", 0, 5, "%");
var t1xp = Object.create(allTalents);
t1xp.init("t1xp", "Fast Learner", "xp", "Increases your base exp gain chance", 100, "././images/xpTalent.png", "t1", "", "u", "rgba(255,255,255,0.2)", 0, 5, "%");
var mt2click = Object.create(allTalents);
mt2click.init("mt2click", "Heavy Swings", "cp", "Increases your click production", 2, "././images/Upgrades/strengthUpgrade1.png", "t2", "meleeClass", "l", "rgba(128,0,0,0.2)", 0, 5, "");
var mt2clickPower = Object.create(allTalents);
mt2clickPower.init("mt2clickPower", "Fast Improvement", "cPower", "Increases exp gain per click", 2, "././images/Upgrades/critUpgrade2.png", "t2", "meleeClass", "l", "rgba(128,0,0,0.2)", 0, 5, "");
var mt2helpers = Object.create(allTalents);
mt2helpers.init("mt2helpers", "Leadership", "helper", "Increases mercenaries production", 2, "././images/Upgrades/knowledgeOrb2.png", "t2", "meleeClass", "l", "rgba(128,0,0,0.2)", 0, 5, "%");
var at2crit = Object.create(allTalents);
at2crit.init("at2crit", "Find Weakness", "cc", "Increases your critical chance", 2, "././images/Upgrades/strengthUpgrade1.png", "t2", "agilityClass", "l", "rgba(85,107,47,0.2)", 0, 5, "");
var at2xp = Object.create(allTalents);
at2xp.init("mt2xp", "Window of opportunity", "xp", "Increases base exp gain chance", 200, "././images/Upgrades/critUpgrade2.png", "t2", "agilityClass", "l", "rgba(85,107,47,0.2)", 0, 5, "%");
var at2gold = Object.create(allTalents);
at2gold.init("mt2gold", "Quick Hands", "goldGain", "Increases overall gold gain", 1, "././images/Upgrades/knowledgeOrb2.png", "t2", "agilityClass", "l", "rgba(85,107,47,0.2)", 0, 5, "%");
var st2mana = Object.create(allTalents);
st2mana.init("st2mana", "Expanded Mind", "maxMana", "Increases your maximum mana", 5, "././images/Upgrades/strengthUpgrade1.png", "t2", "sorceryClass", "l", "rgba(48,181,217,0.2)", 0, 5, "");
var st2regen = Object.create(allTalents);
st2regen.init("st2regen", "Arcane Power", "regen", "Increases your mana regeneration", 1, "././images/Upgrades/critUpgrade2.png", "t2", "sorceryClass", "l", "rgba(48,181,217,0.2)", 0, 5, "/s");
var st2rep = Object.create(allTalents);
st2rep.init("st2rep", "Mystical Influence", "rep", "Increases your reputation chance", 1, "././images/Upgrades/knowledgeOrb2.png", "t2", "sorceryClass", "l", "rgba(48,181,217,0.2)", 0, 5, "%");

var bt3click = Object.create(allTalents);
bt3click.init("bt3click", "Vigorous Smash", "cp", "Increases your click production", 10, "././images/Upgrades/knowledgeOrb2.png", "t3", "berserkerClass", "l", "rgba(70,15,15,0.2)", 0, 1, "");
var bt3crit = Object.create(allTalents);
bt3crit.init("bt3crit", "Devastating Strikes", "cc", "Increases your critical chance", 5, "././images/Upgrades/knowledgeOrb2.png", "t3", "berserkerClass", "l", "rgba(70,15,15,0.2)", 0, 1, "%");
var pt3regen = Object.create(allTalents);
pt3regen.init("pt3regen", "Divine Atunement", "regen", "Increases your mana regeneration", 6, "././images/Upgrades/knowledgeOrb2.png", "t3", "paladinClass", "l", "rgba(215,210,86,0.2)", 0, 1, "/s");
var pt3helpers = Object.create(allTalents);
pt3helpers.init("pt3helpers", "Divine Leadership", "helper", "Increases mercenaries production", 4, "././images/Upgrades/knowledgeOrb2.png", "t3", "paladinClass", "l", "rgba(215,210,86,0.2)", 0, 1, "%");
var wt3click = Object.create(allTalents);
wt3click.init("wt3click", "Tactical Combat", "cp", "Increases your click production", 8, "././images/Upgrades/knowledgeOrb2.png", "t3", "warMarshalClass", "l", "rgba(191,37,124,0.2)", 0, 1, "");
var wt3helpers = Object.create(allTalents);
wt3helpers.init("wt3helpers", "War Tactician", "helper", "Increases mercenaries production", 5, "././images/Upgrades/knowledgeOrb2.png", "t3", "warMarshalClass", "l", "rgba(191,37,124,0.2)", 0, 1, "%");

var tt3crit = Object.create(allTalents);
tt3crit.init("tt3crit", "Ambush", "cc", "Increases your critical chance", 7, "././images/Upgrades/knowledgeOrb2.png", "t3", "thiefClass", "l", "rgba(94,64,18,0.2)", 0, 1, "%");
var tt3gold = Object.create(allTalents);
tt3gold.init("tt3gold", "Pickpocket", "goldGain", "Increases your overall gold gain", 7, "././images/Upgrades/knowledgeOrb2.png", "t3", "thiefClass", "l", "rgba(94,64,18,0.2)", 0, 1, "%");
var at3crit = Object.create(allTalents);
at3crit.init("at3crit", "Ambush", "cc", "Increases your critical chance", 10, "././images/Upgrades/knowledgeOrb2.png", "t3", "assassinClass", "l", "rgba(43,11,78,0.2)", 0, 1, "%");
var at3click = Object.create(allTalents);
at3click.init("at3click", "Backstab", "cp", "Increases your click production", 6, "././images/Upgrades/knowledgeOrb2.png", "t3", "assassinClass", "l", "rgba(43,11,78,0.2)", 0, 1, "");
var rt3click = Object.create(allTalents);
rt3click.init("rt3click", "Aimed Shot", "cp", "Increases your click production", 8, "././images/Upgrades/knowledgeOrb2.png", "t3", "rangerClass", "l", "rgba(20,100,23,0.2)", 0, 1, "");
var rt3helpers = Object.create(allTalents);
rt3helpers.init("rt3helpers", "Simple Fidelity", "helper", "Increases your mercenaries production", 5, "././images/Upgrades/knowledgeOrb2.png", "t3", "rangerClass", "l", "rgba(20,100,23,0.2)", 0, 1, "%");

var wt3regen = Object.create(allTalents);
wt3regen.init("wt3regen", "Mana Surge", "regen", "Increases your mana regeneration", 10, "././images/Upgrades/knowledgeOrb2.png", "t3", "wizardClass", "l", "rgba(35,100,138,0.2)", 0, 1, "/s");
var wt3mana = Object.create(allTalents);
wt3mana.init("wt3mana", "Inhuman Capacity", "maxMana", "Increases your maximum mana", 50, "././images/Upgrades/knowledgeOrb2.png", "t3", "wizardClass", "l", "rgba(35,100,138,0.2)", 0, 1, "");
var lt3helpers = Object.create(allTalents);
lt3helpers.init("lt3helpers", "Mind Control", "helper", "Increases mercenaries production", 6, "././images/Upgrades/knowledgeOrb2.png", "t3", "lichClass", "l", "rgba(70,42,127,0.2)", 0, 1, "%");
var lt3mana = Object.create(allTalents);
lt3mana.init("lt3mana", "Dark Ritual", "maxMana", "Increases your maximum mana", 45, "././images/Upgrades/knowledgeOrb2.png", "t3", "lichClass", "l", "rgba(70,42,127,0.2)", 0, 1, "");
var dt3regen = Object.create(allTalents);
dt3regen.init("dt3regen", "Dryads Blessing", "regen", "Increases your mana regeneration", 9, "././images/Upgrades/knowledgeOrb2.png", "t3", "druidClass", "l", "rgba(32,148,71,0.2)", 0, 1, "/s");
var dt3token = Object.create(allTalents);
dt3token.init("dt3token", "Calm Nature", "token", "Increases your token chance gain", 5, "././images/Upgrades/knowledgeOrb2.png", "t3", "druidClass", "l", "rgba(32,148,71,0.2)", 0, 1, "%");


var talentList = [];
talentList.push(t1click);
talentList.push(t1crit);
talentList.push(t1xp);
talentList.push(mt2click);
talentList.push(mt2clickPower);
talentList.push(mt2helpers);
talentList.push(at2crit);
talentList.push(at2xp);
talentList.push(at2gold);
talentList.push(st2mana);
talentList.push(st2regen);
talentList.push(st2rep);

talentList.push(bt3click);
talentList.push(bt3crit);
talentList.push(pt3regen);
talentList.push(pt3helpers);
talentList.push(wt3click);
talentList.push(wt3helpers);

talentList.push(tt3crit);
talentList.push(tt3gold);
talentList.push(at3crit);
talentList.push(at3click);
talentList.push(rt3click);
talentList.push(rt3helpers);

talentList.push(wt3regen);
talentList.push(wt3mana);
talentList.push(lt3helpers);
talentList.push(lt3mana);
talentList.push(dt3regen);
talentList.push(dt3token);

//creating equipment
var protectorArmour = Object.create(allGear);
protectorArmour.init("protectorArmour", "Full Plate Armour", "l", "p", "Click production", 5, "armour", "././images/testHelper.png", "");
var protectorWeapon = Object.create(allGear);
protectorWeapon.init("protectorWeapon", "Sword and Shield", "l", "p", "Click production", 10, "weapon", "././images/testHelper.png", "");
var protectorRing = Object.create(allGear);
protectorRing.init("protectorRing", "Ring of Defense", "l", "p", "Click production", 3, "ring", "././images/testHelper.png", "");
var protectorCloak = Object.create(allGear);
protectorCloak.init("protectorCloak", "Steel Cover", "l", "p", "Click production", 2, "cloak", "././images/testHelper.png", "");
var protectorAura = Object.create(allGear);
protectorAura.init("protectorAura", "Knight Title", "l", "p", "Click production", 5, "aura", "././images/testHelper.png", "");

var syndicateArmour = Object.create(allGear);
syndicateArmour.init("syndicateArmour", "Leather Armour", "l", "s", "Critical chance", 2, "armour", "././images/Upgrades/powerUpgrade1.png", "%");
var syndicateWeapon = Object.create(allGear);
syndicateWeapon.init("syndicateWeapon", "Dual Daggers", "l", "s", "Critical chance", 2, "weapon", "././images/testHelper.png", "%");
var syndicateRing = Object.create(allGear);
syndicateRing.init("syndicateRing", "Ring of Agility", "l", "s", "Critical chance", 1, "ring", "././images/testHelper.png", "%");
var syndicateCloak = Object.create(allGear);
syndicateCloak.init("syndicateCloak", "Robe of Disguise", "l", "s", "Critical chance", 1, "cloak", "././images/testHelper.png", "%");
var syndicateAura = Object.create(allGear);
syndicateAura.init("syndicateAura", "Shadowy Presence", "l", "s", "Critical chance", 2, "aura", "././images/testHelper.png", "%");

var magiArmour = Object.create(allGear);
magiArmour.init("magiArmour", "Caster Robes", "l", "m", "Max Mana", 15, "armour", "././images/testHelper.png", "");
var magiWeapon = Object.create(allGear);
magiWeapon.init("magiWeapon", "Magical Staff", "l", "m", "Mana Regen", 3, "weapon", "././images/testHelper.png", "");
var magiRing = Object.create(allGear);
magiRing.init("magiRing", "Ring of Magic", "l", "m", "Max Mana", 5, "ring", "././images/testHelper.png", "");
var magiCloak = Object.create(allGear);
magiCloak.init("magiCloak", "Arcane Cover", "l", "m", "Max Mana", 10, "cloak", "././images/testHelper.png", "");
var magiAura = Object.create(allGear);
magiAura.init("magiAura", "Potent Shroud", "l", "m", "Mana Regen", 2, "aura", "././images/testHelper.png", "");

var helperArmour = Object.create(allGear);
helperArmour.init("helperArmour", "Professors Regalia", "l", "h", "Mercenary Production", 1, "armour", "././images/testHelper.png", "%");
var helperWeapon = Object.create(allGear);
helperWeapon.init("helperWeapon", "Walking Cane", "l", "h", "Mercenary Production", 2, "weapon", "././images/testHelper.png", "%");
var helperRing = Object.create(allGear);
helperRing.init("helperRing", "Academy Signet", "l", "h", "Mercenary Production", 1, "ring", "././images/testHelper.png", "%");
var helperCloak = Object.create(allGear);
helperCloak.init("helperCloak", "Royal Mantle", "l", "h", "Mercenary Production", 1, "cloak", "././images/testHelper.png", "%");
var helperAura = Object.create(allGear);
helperAura.init("helperAura", "Dean Title", "l", "h", "Mercenary Production", 2, "aura", "././images/testHelper.png", "%");

var merchantArmour = Object.create(allGear);
merchantArmour.init("merchantArmour", "Robe of Many Pockets", "l", "me", "Gold Gain", 1, "armour", "././images/testHelper.png", "%");
var merchantWeapon = Object.create(allGear);
merchantWeapon.init("merchantWeapon", "Haggling Hand", "l", "me", "Gold Gain", 1, "weapon", "././images/testHelper.png", "%");
var merchantRing = Object.create(allGear);
merchantRing.init("merchantRing", "Diamond Ring", "l", "me", "Gold Gain", 1, "ring", "././images/testHelper.png", "%");
var merchantCloak = Object.create(allGear);
merchantCloak.init("merchantCloak", "Bag of Many Things", "l", "me", "Gold Gain", 1, "cloak", "././images/testHelper.png", "%");
var merchantAura = Object.create(allGear);
merchantAura.init("merchantAura", "Master Negotiator", "l", "me", "Gold Gain", 1, "aura", "././images/testHelper.png", "%");

var bardArmour = Object.create(allGear);
bardArmour.init("bardArmour", "Performers Clothes", "l", "b", "Token Chance", 0.2, "armour", "././images/testHelper.png", "%");
var bardWeapon = Object.create(allGear);
bardWeapon.init("bardWeapon", "Lute", "l", "b", "Token Chance", 0.3, "weapon", "././images/testHelper.png", "%");
var bardRing = Object.create(allGear);
bardRing.init("bardRing", "Inkeepers Token", "l", "b", "Token Chance", 0.2, "ring", "././images/testHelper.png", "%");
var bardCloak = Object.create(allGear);
bardCloak.init("bardCloak", "Regular Cape", "l", "b", "Token Chance", 0.1, "cloak", "././images/testHelper.png", "%");
var bardAura = Object.create(allGear);
bardAura.init("bardAura", "Golden Voice", "l", "b", "Token Chance", 0.2, "aura", "././images/testHelper.png", "%");

var basicArmour = Object.create(allGear);
basicArmour.init("basicArmour", "Adventurers Robes", "l", "ba", "Critical Chance", 1, "armour", "././images/testHelper.png", "%");
var basicWeapon = Object.create(allGear);
basicWeapon.init("basicWeapon", "Short Sword", "l", "ba", "Click production", 2, "weapon", "././images/testHelper.png", "");
var basicRing = Object.create(allGear);
basicRing.init("basicRing", "Wooden Ring", "l", "ba", "Mana Regen", 1, "ring", "././images/testHelper.png", "");
var basicCloak = Object.create(allGear);
basicCloak.init("basicCloak", "Torn Cape", "l", "ba", "Gold Gain", 1, "cloak", "././images/testHelper.png", "%");
var basicAura = Object.create(allGear);
basicAura.init("basicAura", "Kind Person", "l", "ba", "Mercenary Production", 2, "aura", "././images/testHelper.png", "%");

var trainingArmour = Object.create(allGear);
trainingArmour.init("trainingArmour", "Workout Attire", "l", "t", "Base xp Chance", 200, "armour", "././images/testHelper.png", "%");
var trainingWeapon = Object.create(allGear);
trainingWeapon.init("trainingWeapon", "Practice Staff", "l", "t", "Base xp Chance", 200, "weapon", "././images/testHelper.png", "%");
var trainingRing = Object.create(allGear);
trainingRing.init("trainingRing", "Finger-Tape", "l", "t", "Base xp Chance", 200, "ring", "././images/testHelper.png", "%");
var trainingCloak = Object.create(allGear);
trainingCloak.init("trainingCloak", "Extra Weights", "l", "t", "Base xp Chance", 200, "cloak", "././images/testHelper.png", "%");
var trainingAura = Object.create(allGear);
trainingAura.init("trainingAura", "Determined", "l", "t", "Base xp Chance", 200, "aura", "././images/testHelper.png", "%");

var gearList = [];
gearList.push(protectorArmour);
gearList.push(protectorWeapon);
gearList.push(protectorRing);
gearList.push(protectorCloak);
gearList.push(protectorAura);

gearList.push(syndicateArmour);
gearList.push(syndicateWeapon);
gearList.push(syndicateRing);
gearList.push(syndicateCloak);
gearList.push(syndicateAura);

gearList.push(magiArmour);
gearList.push(magiWeapon);
gearList.push(magiRing);
gearList.push(magiCloak);
gearList.push(magiAura);

gearList.push(helperArmour);
gearList.push(helperWeapon);
gearList.push(helperRing);
gearList.push(helperCloak);
gearList.push(helperAura);

gearList.push(merchantArmour);
gearList.push(merchantWeapon);
gearList.push(merchantRing);
gearList.push(merchantCloak);
gearList.push(merchantAura);

gearList.push(bardArmour);
gearList.push(bardWeapon);
gearList.push(bardRing);
gearList.push(bardCloak);
gearList.push(bardAura);

gearList.push(basicArmour);
gearList.push(basicWeapon);
gearList.push(basicRing);
gearList.push(basicCloak);
gearList.push(basicAura);

gearList.push(trainingArmour);
gearList.push(trainingWeapon);
gearList.push(trainingRing);
gearList.push(trainingCloak);
gearList.push(trainingAura);

//Creating spells  -------------------------------------------------------------------------------------------------------
//ids, names, costs, types, icons, descs, effects, quants, durations, crit, mods, suffixes, autocast



var goldRush = Object.create(allSpells);
goldRush.init("goldRush", "Gold Rush", 5, "basic", "././images/Spells/keenSenses.png", "Increases your gold income by ", "duration", 1, 3000, 0, "goldMod", "%", "noCast");
var keenSenses = Object.create(allSpells);
keenSenses.init("keenSenses", "Keen Senses", 50, "agilityClass", "././images/Spells/keenSenses.png", "Your critical chance is increased by ", "duration", 10, 10000, 0, "critchance", "%", "noCast");
var rage = Object.create(allSpells);
rage.init("rage", "Enrage", 100, "meleeClass", "././images/Spells/rage.png", "You become enraged, increasing your click production by ", "duration", 1, 20000, 0, "cp", "%", "noCast");
var magicMissile = Object.create(allSpells);
magicMissile.init("magicMissile", "Magic Missile", 25, "sorceryClass", "././images/Spells/magicMissile.png", "A bolt of magical energy empowered by maximum mana and mana regeneration.", "directdamage", 1, 0, 0, "maxManaRegen", "", "noCast");

var preciseShot = Object.create(allSpells);
preciseShot.init("preciseShot", "Precise Shot", 30, "rangerClass", "", "A single well placed shot empowered by mercenary levels and is able to critically hit.", "directdamage", 3, 0, 1, "helper", "", "noCast");
var generousAid = Object.create(allSpells);
generousAid.init("generousAid", "Generous Aid", 50, "rangerClass", "", "Increases mercenaries production based on your critical chance.<br> Will increase by ", "duration", 0.75, 20000, 0, "helper", "%", "noCast");

var shadowStrike = Object.create(allSpells);
shadowStrike.init("shadowStrike", "Shadow Strike", 35, "assassinClass", "", "A strike from the shadows empowered by critical chance and is able to critically hit.", "directdamage", 3, 0, 1, "crit", "", "noCast");
var stealth = Object.create(allSpells);
stealth.init("stealth", "Stealth", 40, "assassinClass", "", "Enter the shadows increasing your overall gold income based on your critical chance. <br> Will increase by ", "duration", 0.75, 20000, 0, "goldMod", "%", "noCast");

var nimbleFingers = Object.create(allSpells);
nimbleFingers.init("nimbleFingers", "Nimble Fingers", 40, "thiefClass", "", "Nothing can catch you unguarded increasing your overall gold income based on your critical chance.<br> Will increase by ", "duration", 0.75, 20000, 0, "goldMod", "%", "noCast");
var pickPocket = Object.create(allSpells);
pickPocket.init("pickPocket", "Pick a pocket", 30, "thiefClass", "", "Pick some pockets. The amount of gold picked increases with overall gold income.", "directdamage", 1, 0, 1, "goldMod", "", "noCast");

var smash = Object.create(allSpells);
smash.init("smash", "Smash", 25, "berserkerClass", "", "Channel all your strength into one strike. Increases with click production.", "directdamage", 1, 0, 0, "cp", "", "noCast");
var frenzy = Object.create(allSpells);
frenzy.init("frenzy", "Frenzy", 45, "berserkerClass", "", "Enter frenzy which increases your click production based on your click production.<br> Will increase by ", "duration", 0.75, 20000, 0, "cp", "%", "noCast");

var smite = Object.create(allSpells);
smite.init("smite", "Smite", 20, "paladinClass", "", "Strike your foe with divine might. Increased by guild standings.", "directdamage", 1, 0, 0, "guildRanks", "", "noCast");
var prayer = Object.create(allSpells);
prayer.init("prayer", "Prayer", 40, "paladinClass", "", "Offer a prayer to your gods, increasing your mana regeneration based on your click production.<br> Will increase by ", "duration", 3, 20000, 0, "manaRegen", "/s", "noCast");

var battleCry = Object.create(allSpells);
battleCry.init("battleCry", "Battle Cry", 40, "warMarshalClass", "", "Rally your mercenaries boosting their overall production based on click production.<br> Will increase by ", "duration", 0.75, 20000, 0, "helper", "%", "noCast");
var frontalAssault = Object.create(allSpells);
frontalAssault.init("frontalAssault", "Frontal Assault", 30, "warMarshalClass", "", "Charge onto your enemy increased with the amount of helpers.", "directdamage", 1, 0, 0, "helper", "", "noCast");

var manaSurge = Object.create(allSpells);
manaSurge.init("manaSurge", "Mana Surge", 50, "wizardClass", "", "Increase your mana regeneration based on spells cast.<br> Will increase by ", "duration", 5, 30000, 0, "manaRegen", "/s", "noCast");
var mentalCapacity = Object.create(allSpells);
mentalCapacity.init("mentalCapacity", "Mental Capacity", 50, "wizardClass", "", "Increase your max mana based on spells cast.<br> Will increase by ", "duration", 25, 30000, 0, "maxMana", "", "noCast");

var borrowedPower = Object.create(allSpells);
borrowedPower.init("borrowedPower", "Borrowed Power", 50, "lichClass", "", "Increase your mana regeneration by ", "duration", 5, 30000, 0, "manaRegen", "/s", "noCast");
var servitude = Object.create(allSpells);
servitude.init("servitude", "Servitude", 50, "lichClass", "", "Increase mercenaries production based on mana regeneration.<br> Will increase by ", "duration", 0.75, 30000, 0, "helper", "%", "noCast");

var kindness = Object.create(allSpells);
kindness.init("kindness", "Kindness", 50, "druidClass", "", "Increase overall gold gain based on mana regeneration.<br> Will increase by ", "duration", 0.75, 30000, 0, "goldMod", "%", "noCast");
var plainFocus = Object.create(allSpells);
plainFocus.init("plainFocus", "Plain Focus", 50, "druidClass", "", "Increase you chance to find a guild token based on your gold gain.<br> Will increase by ", "duration", 1, 60000, 0, "tokenGain", "%", "noCast");

var spellsList = [];
spellsList.push(goldRush);
spellsList.push(keenSenses);
spellsList.push(rage);
spellsList.push(magicMissile);
spellsList.push(preciseShot);
spellsList.push(generousAid);
spellsList.push(shadowStrike);
spellsList.push(stealth);
spellsList.push(nimbleFingers);
spellsList.push(pickPocket);
spellsList.push(smash);
spellsList.push(frenzy);
spellsList.push(smite);
spellsList.push(prayer);
spellsList.push(battleCry);
spellsList.push(frontalAssault);
spellsList.push(manaSurge);
spellsList.push(mentalCapacity);
spellsList.push(borrowedPower);
spellsList.push(servitude);
spellsList.push(kindness);
spellsList.push(plainFocus);

//creating feats
 
var testFeat = Object.create(allFeats);
testFeat.init("test", "I am clicking!", true, "././images/Upgrades/testIcon.png", "Achieved for clicking the void 100 times.", "manualClicks", 100, "nShown");


var clicker1 = Object.create(allFeats);
clicker1.init("clicker01", "I am clicking!", false, "././images/Upgrades/testIcon.png", "Achieved for clicking the void 100 times.", "manualClicks", 100, "nShown");
var clicker2 = Object.create(allFeats);
clicker2.init("clicker02", "I wish I was a berserker...", false, "././images/Upgrades/testIcon.png", "Achieved for clicking the void 1000 times.", "manualClicks", 1000, "nShown");
var clicker3 = Object.create(allFeats);
clicker3.init("clicker03", "The clicking commences", false, "././images/Upgrades/testIcon.png", "Achieved for clicking the void 10000 times.", "manualClicks", 10000, "nShown");
var clicker4 = Object.create(allFeats);
clicker4.init("clicker04", "Transcendant clicks", false, "././images/Upgrades/testIcon.png", "Achieved for clicking the void 100000 times.", "manualClicks", 100000, "nShown");
var clicker5 = Object.create(allFeats);
clicker5.init("clicker05", "Divine Click", false, "././images/Upgrades/testIcon.png", "Achieved for clicking the void 1000000 times.", "manualClicks", 1000000, "nShown");
var farmers1 = Object.create(allFeats);
farmers1.init("farmers01", "Bountyful Harvest", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 100 farmers.", "farmer", 100, "nShown");
var farmers2 = Object.create(allFeats);
farmers2.init("farmers02", "Expansive agriculture", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 1000 farmers.", "farmer", 1000, "nShown");
var soldiers1 = Object.create(allFeats);
soldiers1.init("soldiers02", "Small Batalion", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 100 soldiers.", "soldier", 100, "nShown");
var soldiers2 = Object.create(allFeats);
soldiers2.init("soldiers02", "Extensive Army", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 1000 soldiers.", "soldier", 1000, "nShown");
var scouts1 = Object.create(allFeats);
scouts1.init("scouts01", "Land Explored", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 100 scouts.", "scout", 100, "nShown");
var scouts2 = Object.create(allFeats);
scouts2.init("scouts02", "Temporal Scrying", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 1000 scouts.", "scout", 1000, "nShown");
var clerics1 = Object.create(allFeats);
clerics1.init("clerics01", "Sufficient Healing Power", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 100 clerics.", "cleric", 100, "nShown");
var clerics2 = Object.create(allFeats);
clerics2.init("clerics02", "Healing Overflow", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 1000 clerics.", "cleric", 1000, "nShown");
var cavaliers1 = Object.create(allFeats);
cavaliers1.init("cavaliers01", "Blitzkrieg!", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 100 cavaliers.", "cavalier", 100, "nShown");
var cavaliers2 = Object.create(allFeats);
cavaliers2.init("cavaliers01", "Countless Cavalry", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 1000 cavaliers.", "cavalier", 1000, "nShown");
var wyrms1 = Object.create(allFeats);
wyrms1.init("wyrms01", "Monster Tamer", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 100 wyrms.", "wyrm", 100, "nShown");
var wyrms2 = Object.create(allFeats);
wyrms2.init("wyrms02", "Wyrmrider", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 1000 wyrms.", "wyrm", 1000, "nShown");

var mercenaries1 = Object.create(allFeats);
mercenaries1.init("mercenaries01", "Now thats a crowd!", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 1000 mercenaries.", "mercenaryCount", 1000, "nShown");
var mercenaries2 = Object.create(allFeats);
mercenaries2.init("mercenaries02", "A prominent General", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 5000 mercenaries.", "mercenaryCount", 5000, "nShown");
var mercenaries3 = Object.create(allFeats);
mercenaries3.init("mercenaries03", "Head of a Nation", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 12500 mercenaries.", "mercenaryCount", 12500, "nShown");
var mercenaries4 = Object.create(allFeats);
mercenaries4.init("mercenaries04", "Emperor", false, "././images/Upgrades/testIcon.png", "Achieved for hiring 100000 mercenaries.", "mercenaryCount", 100000, "nShown");

var protectors1 = Object.create(allFeats);
protectors1.init("protectors01", "True Stalwart Protector", false, "././images/Upgrades/testIcon.png", "Achieved for becoming the leader of Stalwart Protectors.", "fighterGuild", 4, "nShown");
var syndicate1 = Object.create(allFeats);
syndicate1.init("syndicate01", "Sworn to Secrecy", false, "././images/Upgrades/testIcon.png", "Achieved for becoming the leader of Shadow Syndicate.", "rogueGuild", 4, "nShown");
var magi1 = Object.create(allFeats);
magi1.init("magi01", "Archmage", false, "././images/Upgrades/testIcon.png", "Achieved for becoming the leader of Order of the Magi.", "mageGuild", 4, "nShown");
var academy1 = Object.create(allFeats);
academy1.init("academy01", "Knowledgable Dean", false, "././images/Upgrades/testIcon.png", "Achieved for becoming the leader of the Royal Academy.", "helperGuild", 4, "nShown");
var merchant1 = Object.create(allFeats);
merchant1.init("merchant01", "Pyramid Scheme", false, "././images/Upgrades/testIcon.png", "Achieved for becoming the leader of Merchants Guild.", "merchantGuild", 4, "nShown");
var bard1 = Object.create(allFeats);
bard1.init("bard01", "Crowd Gatherer", false, "././images/Upgrades/testIcon.png", "Achieved for becoming the leader of Bards College.", "bardGuild", 4, "nShown");
var guildLeader1 = Object.create(allFeats);
guildLeader1.init("guildLeader01", "Gotta lead them all", false, "././images/Upgrades/testIcon.png", "Achieved for becoming the leader of every guild.", "allGuildsLeader", 4, "nShown");

var classFeat1 = Object.create(allFeats);
classFeat1.init("classFeat01", "Specializing is fun", false, "././images/Upgrades/testIcon.png", "Achieved for choosing a class path.", "si", "", "nShown");
var classFeat2 = Object.create(allFeats);
classFeat2.init("classFeat02", "Sticking to a path", false, "././images/Upgrades/testIcon.png", "Achieved for specializing in your class path.", "featClass02", "", "nShown");
var classFeat3 = Object.create(allFeats);
classFeat3.init("classFeat03", "Absolute Specialization", false, "././images/Upgrades/testIcon.png", "Achieved for attaining a specialized class.", "featClass03", "", "nShown");

var firstSetFeat = Object.create(allFeats);
firstSetFeat.init("firstSetFeat", "Matching Equipment", false, "././images/Upgrades/testIcon.png", "Achieved for equipping your first set.", "firstSet", "", "nShown");

var questsCompleted1 = Object.create(allFeats);
questsCompleted1.init("questsCompleted1", "My First Quest", false, "././images/Upgrades/testIcon.png", "Achieved for completing your fitst quest.", "quests", 1, "nShown");
var questsCompleted2 = Object.create(allFeats);
questsCompleted2.init("questsCompleted2", "Look ma, I'm questing!", false, "././images/Upgrades/testIcon.png", "Achieved for completing 5 quests.", "quests", 5, "nShown");
var questsCompleted3 = Object.create(allFeats);
questsCompleted3.init("questsCompleted3", "Novice Quester", false, "././images/Upgrades/testIcon.png", "Achieved for completing 10 quests.", "quests", 10, "nShown");
var questsCompleted4 = Object.create(allFeats);
questsCompleted4.init("questsCompleted4", "Quests are usefull", false, "././images/Upgrades/testIcon.png", "Achieved for completing 50 quests.", "quests", 50, "nShown");
var questsCompleted5 = Object.create(allFeats);
questsCompleted5.init("questsCompleted5", "Quest Grinder", false, "././images/Upgrades/testIcon.png", "Achieved for completing 100 quests.", "quests", 100, "nShown");
var questsCompleted6 = Object.create(allFeats);
questsCompleted6.init("questsCompleted6", "Questmaster", false, "././images/Upgrades/testIcon.png", "Achieved for completing 1000 quests.", "quests", 1000, "nShown");

var explorationsCompleted1 = Object.create(allFeats);
explorationsCompleted1.init("explorationsCompleted1", "My First Expedition", false, "././images/Upgrades/testIcon.png", "Achieved for completing your first expedition.", "explorations", 1, "nShown");
var explorationsCompleted2 = Object.create(allFeats);
explorationsCompleted2.init("explorationsCompleted2", "Exploring the Lands", false, "././images/Upgrades/testIcon.png", "Achieved for completing 5 expeditions.", "explorations", 5, "nShown");
var explorationsCompleted3 = Object.create(allFeats);
explorationsCompleted3.init("explorationsCompleted3", "Into the Unknown", false, "././images/Upgrades/testIcon.png", "Achieved for completing 10 expeditions.", "explorations", 10, "nShown");
var explorationsCompleted4 = Object.create(allFeats);
explorationsCompleted4.init("explorationsCompleted4", "Lands Explored", false, "././images/Upgrades/testIcon.png", "Achieved for completing all expeditions.", "explorations", 30, "nShown");

var investments1 = Object.create(allFeats);
investments1.init("investments1", "Doubtful Investment", false, "././images/Upgrades/testIcon.png", "Achieved for investing once.", "investments", 1, "nShown");
var investments2 = Object.create(allFeats);
investments2.init("investments2", "Maybe This Will Pay Off", false, "././images/Upgrades/testIcon.png", "Achieved for investing 5 times.", "investments", 5, "nShown");
var investments3 = Object.create(allFeats);
investments3.init("investments3", "Vesting in", false, "././images/Upgrades/testIcon.png", "Achieved for investing 10 times.", "investments", 10, "nShown");
var investments4 = Object.create(allFeats);
investments4.init("investments4", "Prominent Investor", false, "././images/Upgrades/testIcon.png", "Achieved for investing 50 times.", "investments", 50, "nShown");
var investments5 = Object.create(allFeats);
investments5.init("investments5", "Stock Market", false, "././images/Upgrades/testIcon.png", "Achieved for investing 100 times.", "investments", 100, "nShown");
var investments6 = Object.create(allFeats);
investments6.init("investments6", "I own everything", false, "././images/Upgrades/testIcon.png", "Achieved for investing 1000 times.", "investments", 1000, "nShown");

var gear1 = Object.create(allFeats);
gear1.init("gear1", "Loot!", false, "././images/Upgrades/testIcon.png", "Achieved for attaining your first equipment.", "equipment", 1, "nShown");
var gear2 = Object.create(allFeats);
gear2.init("gear2", "More Loot!", false, "././images/Upgrades/testIcon.png", "Achieved for attaining 10 pieces of equipment.", "equipment", 10, "nShown");
var gear3 = Object.create(allFeats);
gear3.init("gear3", "All of the Loot!", false, "././images/Upgrades/testIcon.png", "Achieved for attaining all possible equipment.", "equipment", 35, "nShown");

var featsList = [];

featsList.push(clicker1);
featsList.push(clicker2);
featsList.push(clicker3);
featsList.push(clicker4);
featsList.push(clicker5);
featsList.push(farmers1);
featsList.push(farmers2);
featsList.push(soldiers1);
featsList.push(soldiers2);
featsList.push(scouts1);
featsList.push(scouts2);
featsList.push(clerics1);
featsList.push(clerics2);
featsList.push(cavaliers1);
featsList.push(cavaliers2);
featsList.push(wyrms1);
featsList.push(wyrms2);
featsList.push(mercenaries1);
featsList.push(mercenaries2);
featsList.push(mercenaries3);
featsList.push(mercenaries4);
featsList.push(protectors1);
featsList.push(syndicate1);
featsList.push(magi1);
featsList.push(academy1);
featsList.push(merchant1);
featsList.push(bard1);
featsList.push(guildLeader1);
featsList.push(classFeat1);
featsList.push(classFeat2);
featsList.push(classFeat3);
featsList.push(firstSetFeat);
featsList.push(questsCompleted1);
featsList.push(questsCompleted2);
featsList.push(questsCompleted3);
featsList.push(questsCompleted4);
featsList.push(questsCompleted5);
featsList.push(questsCompleted6);
featsList.push(explorationsCompleted1);
featsList.push(explorationsCompleted2);
featsList.push(explorationsCompleted3);
featsList.push(explorationsCompleted4);
featsList.push(investments1);
featsList.push(investments2);
featsList.push(investments3);
featsList.push(investments4);
featsList.push(investments5);
featsList.push(investments6);
featsList.push(gear1);
featsList.push(gear2);
featsList.push(gear3);

//Creating upgrades -------------------------------------------------------------------------------------------------------

var powerUpgrade1 = Object.create(allUpgrades);
powerUpgrade1.init("powerUpgrade01","Inhuman Power", 50, "unlocked", "././images/Upgrades/powerUpgrade1.png", "Increases base click production by 100%.", "clickproduction", 1, "", "", "", "basic", "reset");
var powerUpgrade2 = Object.create(allUpgrades);
powerUpgrade2.init("powerUpgrade02", "Muscle Mass", 100, "locked", "././images/Upgrades/powerUpgrade2.png", "Increases base click production by 100%.", "clickproduction", 1, "", "", "", "", "reset");
var powerUpgrade3 = Object.create(allUpgrades);
powerUpgrade3.init("powerUpgrade03", "Muscle Mass", 175, "locked", "././images/Upgrades/powerUpgrade3.png", "Increases base click production by 100%.", "clickproduction", 1, "", "", "", "", "reset");
var powerUpgrade4 = Object.create(allUpgrades);
powerUpgrade4.init("powerUpgrade04", "Muscle Mass", 300, "locked", "././images/Upgrades/powerUpgrade4.png", "Increases base click production by 100%.", "clickproduction", 1, "", "", "", "", "reset");
var powerUpgrade5 = Object.create(allUpgrades);
powerUpgrade5.init("powerUpgrade05", "Muscle Mass", 500, "locked", "././images/Upgrades/powerUpgrade5.png", "Increases base click production by 100%.", "clickproduction", 1, "", "", "", "", "reset");
var powerUpgrade6 = Object.create(allUpgrades);
powerUpgrade6.init("powerUpgrade06","Inhuman Power", 1000, "locked", "././images/Upgrades/powerUpgrade6.png", "Increases base click production by 200%.", "clickproduction", 2, "", "", "", "", "reset");
var powerUpgrade7 = Object.create(allUpgrades);
powerUpgrade7.init("powerUpgrade07", "Muscle Mass", 2500, "locked", "././images/Upgrades/powerUpgrade7.png", "Increases base click production by 200%.", "clickproduction", 2, "", "", "", "", "reset");
var powerUpgrade8 = Object.create(allUpgrades);
powerUpgrade8.init("powerUpgrade08", "Muscle Mass", 7500, "locked", "././images/Upgrades/powerUpgrade8.png", "Increases base click production by 200%.", "clickproduction", 2, "", "", "", "", "reset");
var powerUpgrade9 = Object.create(allUpgrades);
powerUpgrade9.init("powerUpgrade09", "Muscle Mass", 15000, "locked", "././images/Upgrades/powerUpgrade9.png", "Increases base click production by 200%.", "clickproduction", 2, "", "", "", "", "reset");
var powerUpgrade10 = Object.create(allUpgrades);
powerUpgrade10.init("powerUpgrade10", "Muscle Mass", 50000, "locked", "././images/Upgrades/powerUpgrade10.png", "Increases base click production by 200%.", "clickproduction", 2, "", "", "", "", "reset");

var critUpgrade1 = Object.create(allUpgrades);
critUpgrade1.init("critUpgrade01", "Precision", 100, "unlocked", "././images/Upgrades/critUpgrade1.png", "Increases your critical chance by 1%", "critchance", 1, "", "", "", "", "reset");
var critUpgrade2 = Object.create(allUpgrades);
critUpgrade2.init("critUpgrade02", "Deadly Precision", 250, "locked", "././images/Upgrades/critUpgrade2.png", "Increases your critical chance by 1%", "critchance", 1, "", "", "", "", "reset");
var critUpgrade3 = Object.create(allUpgrades);
critUpgrade3.init("critUpgrade03", "Deadly Precision", 600, "locked", "././images/Upgrades/critUpgrade3.png", "Increases your critical chance by 1%", "critchance", 1, "", "", "", "", "reset");
var critUpgrade4 = Object.create(allUpgrades);
critUpgrade4.init("critUpgrade04", "Deadly Precision", 1200, "locked", "././images/Upgrades/critUpgrade4.png", "Increases your critical chance by 1%", "critchance", 1, "", "", "", "", "reset");
var critUpgrade5 = Object.create(allUpgrades);
critUpgrade5.init("critUpgrade05", "Deadly Precision", 2500, "locked", "././images/Upgrades/critUpgrade5.png", "Increases your critical chance by 1%", "critchance", 1, "", "", "", "", "reset");
var critUpgrade6 = Object.create(allUpgrades);
critUpgrade6.init("critUpgrade06", "Precision", 4000, "locked", "././images/Upgrades/critUpgrade6.png", "Increases your critical chance by 1%", "critchance", 1, "", "", "", "", "reset");
var critUpgrade7 = Object.create(allUpgrades);
critUpgrade7.init("critUpgrade07", "Deadly Precision", 9500, "locked", "././images/Upgrades/critUpgrade7.png", "Increases your critical chance by 1%", "critchance", 1, "", "", "", "", "reset");
var critUpgrade8 = Object.create(allUpgrades);
critUpgrade8.init("critUpgrade08", "Deadly Precision", 17000, "locked", "././images/Upgrades/critUpgrade8.png", "Increases your critical chance by 1%", "critchance", 1, "", "", "", "", "reset");
var critUpgrade9 = Object.create(allUpgrades);
critUpgrade9.init("critUpgrade09", "Deadly Precision", 25000, "locked", "././images/Upgrades/critUpgrade9.png", "Increases your critical chance by 1%", "critchance", 1, "", "", "", "", "reset");
var critUpgrade10 = Object.create(allUpgrades);
critUpgrade10.init("critUpgrade10", "Deadly Precision", 35000, "locked", "././images/Upgrades/critUpgrade10.png", "Increases your critical chance by 1%", "critchance", 1, "", "", "", "", "reset");


var knowledgeOrb1 = Object.create(allUpgrades);
knowledgeOrb1.init("knowledgeOrb01", "Edible Mana", 25, "unlocked", "././images/Upgrades/knowledgeOrb1.png", "A tiny amount of pure knowledge.", "knowledge", 0.01, "", "", "", "", "reset");
var knowledgeOrb2 = Object.create(allUpgrades);
knowledgeOrb2.init("knowledgeOrb02", "Glowing Knowledge", 1000, "locked", "././images/Upgrades/knowledgeOrb2.png", "Further increases your capabilities.", "knowledge", 0.02, "", "", "", "", "reset");
var knowledgeOrb3 = Object.create(allUpgrades);
knowledgeOrb3.init("knowledgeOrb03", "Alloyed Vision", 5000, "locked", "././images/Upgrades/knowledgeOrb3.png", "How much of this can a single mortal even embrace?", "knowledge", 0.03, "", "", "", "", "reset");
var knowledgeOrb4 = Object.create(allUpgrades);
knowledgeOrb4.init("knowledgeOrb04", "Alloyed Vision", 5000, "locked", "././images/Upgrades/knowledgeOrb4.png", "How much of this can a single mortal even embrace?", "knowledge", 0.04, "", "", "", "", "reset");
var knowledgeOrb5 = Object.create(allUpgrades);
knowledgeOrb5.init("knowledgeOrb05", "Alloyed Vision", 5000, "locked", "././images/Upgrades/knowledgeOrb5.png", "How much of this can a single mortal even embrace?", "knowledge", 0.05, "", "", "", "", "reset");
var knowledgeOrb6 = Object.create(allUpgrades);
knowledgeOrb6.init("knowledgeOrb06", "Alloyed Vision", 5000, "locked", "././images/Upgrades/knowledgeOrb6.png", "How much of this can a single mortal even embrace?", "knowledge", 0.06, "", "", "", "", "reset");
var knowledgeOrb7 = Object.create(allUpgrades);
knowledgeOrb7.init("knowledgeOrb07", "Alloyed Vision", 5000, "locked", "././images/Upgrades/knowledgeOrb7.png", "How much of this can a single mortal even embrace?", "knowledge", 0.07, "", "", "", "", "reset");
var knowledgeOrb8 = Object.create(allUpgrades);
knowledgeOrb8.init("knowledgeOrb08", "Alloyed Vision", 5000, "locked", "././images/Upgrades/knowledgeOrb8.png", "How much of this can a single mortal even embrace?", "knowledge", 0.08, "", "", "", "", "reset");
var knowledgeOrb9 = Object.create(allUpgrades);
knowledgeOrb9.init("knowledgeOrb09", "Alloyed Vision", 5000, "locked", "././images/Upgrades/knowledgeOrb9.png", "How much of this can a single mortal even embrace?", "knowledge", 0.09, "", "", "", "", "reset");
var knowledgeOrb10 = Object.create(allUpgrades);
knowledgeOrb10.init("knowledgeOrb10", "Alloyed Vision", 5000, "locked", "././images/Upgrades/knowledgeOrb10.png", "How much of this can a single mortal even embrace?", "knowledge", 0.1, "", "", "", "", "reset");

var classUpgrade = Object.create(allUpgrades);
classUpgrade.init("classUpgrade01", "Specialization", 5000, "locked", "././images/Upgrades/classUpgrade.png", "Choose a specialization for your hero.", "", "", "", "", "", "", "reset");
var meleeClass = Object.create(allUpgrades);
meleeClass.init("meleeClass", "Path of the Warrior", 5000, "pick1", "././images/Upgrades/meleeClass.png", "Specialize in the art of the melee.", "meleeClassUpgrade01", "si", 0, 2, 5, 0, "reset");
var agilityClass = Object.create(allUpgrades);
agilityClass.init("agilityClass", "Path of the Rogue", 5000, "pick1", "././images/Upgrades/agilityClass.png", "Specialize in the art of cunning evasion.", "agilityClassUpgrade01", "si", 0, 5, 0, 5, "reset");
var sorceryClass = Object.create(allUpgrades);
sorceryClass.init("sorceryClass", "Path of the Sorcery", 5000, "pick1", "././images/Upgrades/sorceryClass.png", "Specialize in the art of spellcasting.", "sorceryClassUpgrade01", "si", 25, 10, 0, 0, "reset");

var agilityClassUpgrade = Object.create(allUpgrades);
agilityClassUpgrade.init("agilityClassUpgrade01", "The art of Cunning", 50000, "locked", "././images/Upgrades/testIcon.png", "Choose a specialization for your hero.", "", "", "", "", "", "t2Spec", "reset");
var assassinClass = Object.create(allUpgrades);
assassinClass.init("assassinClass", "Assasin", 50000, "typeA01", "././images/Upgrades/testIcon.png", "Become the master of the shadows.", "agilityClassUpgrade11", "featClass02", 10, 0, 2, 5, "reset");
var rangerClass = Object.create(allUpgrades);
rangerClass.init("rangerClass", "Ranger", 50000, "typeA01", "././images/Upgrades/testIcon.png", "Become the master of ranged combat.", "agilityClassUpgrade12", "featClass02", 0, 5, 2, 0, "reset");
var thiefClass = Object.create(allUpgrades);
thiefClass.init("thiefClass", "Thief", 50000, "typeA01", "././images/Upgrades/testIcon.png", "Taking valuables while in combat.", "agilityClassUpgrade13", "featClass02", 10, 3, 5, 0, "reset");

var sorceryClassUpgrade = Object.create(allUpgrades);
sorceryClassUpgrade.init("sorceryClassUpgrade01", "The art of Spellweaving", 50000, "locked", "././images/Upgrades/testIcon.png", "Choose a specialization for your hero.", "", "", "", "", "", "t2Spec", "reset");
var wizardClass = Object.create(allUpgrades);
wizardClass.init("wizardClass", "Wizard", 50000, "typeS01", "././images/Upgrades/testIcon.png", "Draw your powers from knowledge of the arcane.", "sorceryClassUpgrade11", "featClass02", 50, 5, 0, 0, "reset");
var lichClass = Object.create(allUpgrades);
lichClass.init("lichClass", "Lich", 50000, "typeS01", "././images/Upgrades/testIcon.png", "Dabble into dark arts.", "sorceryClassUpgrade12", "featClass02", 25, 8, 0, 0, "reset");
var druidClass = Object.create(allUpgrades);
druidClass.init("druidClass", "Druid", 50000, "typeS01", "././images/Upgrades/testIcon.png", "Harness the chaotic power of Gaia herself.", "sorceryClassUpgrade13", "featClass02", 0, 12, 0, 0, "reset");

var meleeClassUpgrade = Object.create(allUpgrades);
meleeClassUpgrade.init("meleeClassUpgrade01", "The art of Combat Prowess", 50000, "locked", "././images/Upgrades/testIcon.png", "Choose a specialization for your hero.", "", "", "", "", "", "t2Spec", "reset");
var paladinClass = Object.create(allUpgrades);
paladinClass.init("paladinClass", "Paladin", 50000, "typeM01", "././images/Upgrades/testIcon.png", "Focus your defensive combat prowess.", "meleeClassUpgrade11", "featClass02", 25, 8, 1, 1, "reset");
var warMarshalClass = Object.create(allUpgrades);
warMarshalClass.init("warMarshalClass", "War Marshal", 50000, "typeM01", "././images/Upgrades/testIcon.png", "Become a master of warfare.", "meleeClassUpgrade12", "featClass02", 5, 2, 3, 3, "reset");
var berserkerClass = Object.create(allUpgrades);
berserkerClass.init("berserkerClass", "Berserker", 50000, "typeM01", "././images/Upgrades/testIcon.png", "Focus all your might into offense.", "meleeClassUpgrade13", "featClass02", 10, 5, 6, 0, "reset");




var unlockHelper = Object.create(allUpgrades);
unlockHelper.init("unlockHelper", "Hire a mercenary", 50000, "locked", "././images/Upgrades/unlockHelper.png", "Accept aid from a mercenary that helps you attack automatically.", "helperBox", "", "", "", "", "", "reset");

var unlockGuild = Object.create(allUpgrades);
unlockGuild.init("unlockGuild", "Guild Invitation", 50000, "locked", "././images/Upgrades/unlockGuild.png", "You are now skilled enough to start earning reputation with different factions.", "guildBox", "", "", "", "", "", "save");

var unlockQuests = Object.create(allUpgrades);
unlockQuests.init("unlockQuests", "The adventures begin", 50000, "locked", "././images/Upgrades/unlockQuests.png", "Quests help you get reputation with the guilds easier.", "questBox", "", "", "", "", "", "save");








var fighterGuildUpgrade1 = Object.create(allUpgrades);
fighterGuildUpgrade1.init("fighterGuildUpgrade1", "Novice Stalwart Protector", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Stalwart Protectors grants you increased click production.", "clickproduction", 5, "", "", "f", "guild", "guild");
var fighterGuildUpgrade2 = Object.create(allUpgrades);
fighterGuildUpgrade2.init("fighterGuildUpgrade2", "Official Member of Stalwart Protectors", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Stalwart Protectors grants you increased click production.", "clickproduction", 6, "", "", "f", "guild", "guild");
var fighterGuildUpgrade3 = Object.create(allUpgrades);
fighterGuildUpgrade3.init("fighterGuildUpgrade3", "Stalwart Officer", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Stalwart Protectors grants you increased click production.", "clickproduction", 7, "", "", "f", "guild", "guild");
var fighterGuildUpgrade4 = Object.create(allUpgrades);
fighterGuildUpgrade4.init("fighterGuildUpgrade4", "Leader of Stalwart Protectors", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Stalwart Protectors grants you increased click production.", "clickproduction", 10, "", "", "f", "guild", "guild");

var rogueGuildUpgrade1 = Object.create(allUpgrades);
rogueGuildUpgrade1.init("rogueGuildUpgrade1", "Novice Shadow", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Shadow Syndicate grants you increased critical chance.", "critchance", 1, "", "", "r", "guild", "guild");
var rogueGuildUpgrade2 = Object.create(allUpgrades);
rogueGuildUpgrade2.init("rogueGuildUpgrade2", "Official Member of the Syndicate", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Shadow Syndicate grants you increased critical chance.", "critchance", 2, "", "", "r", "guild", "guild");
var rogueGuildUpgrade3 = Object.create(allUpgrades);
rogueGuildUpgrade3.init("rogueGuildUpgrade3", "Shadow Officer", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Shadow Syndicate grants you increased critical chancen.", "critchance", 2, "", "", "r", "guild", "guild");
var rogueGuildUpgrade4 = Object.create(allUpgrades);
rogueGuildUpgrade4.init("rogueGuildUpgrade4", "Leader of the Syndicate", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Shadow Syndicate grants you increased critical chance.", "critchance", 5, "", "", "r", "guild", "guild");

var mageGuildUpgrade1 = Object.create(allUpgrades);
mageGuildUpgrade1.init("mageGuildUpgrade1", "Novice Mage", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Order of the Magi increases your maximum mana.", "maxMana", 15, "", "", "m", "guild", "guild");
var mageGuildUpgrade2 = Object.create(allUpgrades);
mageGuildUpgrade2.init("mageGuildUpgrade2", "Official Member of the Order", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Order of the Magi increases your maximum mana.", "maxMana", 25, "", "", "m", "guild", "guild");
var mageGuildUpgrade3 = Object.create(allUpgrades);
mageGuildUpgrade3.init("mageGuildUpgrade3", "Mage Officer", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Order of the Magi increases your maximum mana.", "maxMana", 60, "", "", "m", "guild", "guild");
var mageGuildUpgrade4 = Object.create(allUpgrades);
mageGuildUpgrade4.init("mageGuildUpgrade4", "Leader of the Order", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Order of the Magi increases your mana regeneration.", "mRegen", 5, "", "", "m", "guild", "guild");

var helperGuildUpgrade1 = Object.create(allUpgrades);
helperGuildUpgrade1.init("helperGuildUpgrade1", "Scholar", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Royal Academy increases production of your mercenaries.", "helpersMod", 0.05, "", "", "h", "guild", "guild");
var helperGuildUpgrade2 = Object.create(allUpgrades);
helperGuildUpgrade2.init("helperGuildUpgrade2", "Official Member of the Academy", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Royal Academy increases production of your mercenaries.", "helpersMod", 0.05, "", "", "h", "guild", "guild");
var helperGuildUpgrade3 = Object.create(allUpgrades);
helperGuildUpgrade3.init("helperGuildUpgrade3", "Spokesman", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Royal Academy increases production of your mercenaries.", "helpersMod", 0.05, "", "", "h", "guild", "guild");
var helperGuildUpgrade4 = Object.create(allUpgrades);
helperGuildUpgrade4.init("helperGuildUpgrade4", "Headmaster", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Royal Academy increases production of your mercenaries.", "helpersMod", 0.1, "", "", "h", "guild", "guild");

var merchantGuildUpgrade1 = Object.create(allUpgrades);
merchantGuildUpgrade1.init("merchantGuildUpgrade1", "Novice Merchant", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Merchants increases your overall gold gain.", "goldGain", 0.01, "", "", "me", "guild", "guild");
var merchantGuildUpgrade2 = Object.create(allUpgrades);
merchantGuildUpgrade2.init("merchantGuildUpgrade2", "Official Member of the Merchants", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Merchants increases your overall gold gain.", "goldGain", 0.02, "", "", "me", "guild", "guild");
var merchantGuildUpgrade3 = Object.create(allUpgrades);
merchantGuildUpgrade3.init("merchantGuildUpgrade3", "Sly Dealer", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Merchants increases your overall gold gain.", "goldGain", 0.03, "", "", "me", "guild", "guild");
var merchantGuildUpgrade4 = Object.create(allUpgrades);
merchantGuildUpgrade4.init("merchantGuildUpgrade4", "Master Merchant", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Merchants increases your overall gold gain.", "goldGain", 0.04, "", "", "me", "guild", "guild");

var bardGuildUpgrade1 = Object.create(allUpgrades);
bardGuildUpgrade1.init("bardGuildUpgrade1", "Novice Bard", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Bards College increases the chance of finding a guild token.", "tokenGain", 1, "", "", "b", "guild", "guild");
var bardGuildUpgrade2 = Object.create(allUpgrades);
bardGuildUpgrade2.init("bardGuildUpgrade2", "Official Member of the Bards College", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Bards College increases the chance of finding a guild token.", "tokenGain", 1, "", "", "b", "guild", "guild");
var bardGuildUpgrade3 = Object.create(allUpgrades);
bardGuildUpgrade3.init("bardGuildUpgrade3", "Instrumentalist", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Bards College increases the chance of finding a guild token.", "tokenGain", 1, "", "", "b", "guild", "guild");
var bardGuildUpgrade4 = Object.create(allUpgrades);
bardGuildUpgrade4.init("bardGuildUpgrade4", "Master Performer", 50000, "locked", "././images/Upgrades/testIcon.png", "Your allegiance with Bards College increases the chance of finding a guild token.", "tokenGain", 1, "", "", "b", "guild", "guild");










var specialHelper = Object.create(allUpgrades);
specialHelper.init("spcHelper", "Guilds Chosen", 50000, "locked", "././images/Upgrades/testIcon.png", "As a guildmaster of all the guilds, you can choose your prefered champion.", "chooseSpcHelper", "chooseHelper", 10, "", "", "", "reset");


var testUpgrade = Object.create(allUpgrades);
testUpgrade.init("testUpgrade", "Test", 5000, "unlocked", "././images/Upgrades/knowledgeOrb3.png", "How much of this can a single mortal even embrace?How much of this can a single mortal even embrace?How much of this can a single mortal even embrace?How much of this can a single mortal even embrace?How much of this can a single mortal even embrace?How much of this can a single mortal even embrace?How much of this can a single mortal even embrace?", "", "", "", "", "", "", "reset");

var farmerUpgrade1 = Object.create(allUpgrades);
farmerUpgrade1.init("farmerUpgrade1", "Fertile Fields", 5000, "locked", "././images/Upgrades/testIcon.png", "Increases farmers production by 100%", "helper", "farmer", "", "", "", "", "reset");
var farmerUpgrade2 = Object.create(allUpgrades);
farmerUpgrade2.init("farmerUpgrade2", "Advanced Agriculture", 10000, "locked", "././images/Upgrades/testIcon.png", "Increases farmers production by an additional 100%", "helper", "farmer", "", "", "", "", "reset");
var farmerUpgrade3 = Object.create(allUpgrades);
farmerUpgrade3.init("farmerUpgrade3", "Divine Soil", 50000, "locked", "././images/Upgrades/testIcon.png", "Increases farmers production by an additional 100%", "helper", "farmer", "", "", "", "", "reset");
var soldierUpgrade1 = Object.create(allUpgrades);
soldierUpgrade1.init("soldierUpgrade1", "Advanced Training", 12500, "locked", "././images/Upgrades/testIcon.png", "Increases soldiers production by 100%", "helper", "soldier", "", "", "", "", "reset");
var soldierUpgrade2 = Object.create(allUpgrades);
soldierUpgrade2.init("soldierUpgrade2", "Expert Technique", 25000, "locked", "././images/Upgrades/testIcon.png", "Increases soldiers production by an additional 100%", "helper", "soldier", "", "", "", "", "reset");
var soldierUpgrade3 = Object.create(allUpgrades);
soldierUpgrade3.init("soldierUpgrade3", "Elite Augmentation", 125000, "locked", "././images/Upgrades/testIcon.png", "Increases soldiers production by an additional 100%", "helper", "soldier", "", "", "", "", "reset");
var scoutUpgrade1 = Object.create(allUpgrades);
scoutUpgrade1.init("scoutUpgrade1", "Binoculars", 25000, "locked", "././images/Upgrades/testIcon.png", "Increases scouts production by 100%", "helper", "scout", "", "", "", "", "reset");
var scoutUpgrade2 = Object.create(allUpgrades);
scoutUpgrade2.init("scoutUpgrade2", "Darkvision", 50000, "locked", "././images/Upgrades/testIcon.png", "Increases scouts production by an additional 100%", "helper", "scout", "", "", "", "", "reset");
var scoutUpgrade3 = Object.create(allUpgrades);
scoutUpgrade3.init("scoutUpgrade3", "Truesight", 250000, "locked", "././images/Upgrades/testIcon.png", "Increases scouts production by an additional 100%", "helper", "scout", "", "", "", "", "reset");
var clericUpgrade1 = Object.create(allUpgrades);
clericUpgrade1.init("clericUpgrade1", "Potent Prayer", 50000, "locked", "././images/Upgrades/testIcon.png", "Increases clerics production by 100%", "helper", "cleric", "", "", "", "", "reset");
var clericUpgrade2 = Object.create(allUpgrades);
clericUpgrade2.init("clericUpgrade2", "Expand Knowledge", 100000, "locked", "././images/Upgrades/testIcon.png", "Increases clerics production by an additional 100%", "helper", "cleric", "", "", "", "", "reset");
var clericUpgrade3 = Object.create(allUpgrades);
clericUpgrade3.init("clericUpgrade3", "Touch of the Divine", 500000, "locked", "././images/Upgrades/testIcon.png", "Increases clerics production by an additional 100%", "helper", "cleric", "", "", "", "", "reset");
var cavalierUpgrade1 = Object.create(allUpgrades);
cavalierUpgrade1.init("cavalierUpgrade1", "Fast Mount", 100000, "locked", "././images/Upgrades/testIcon.png", "Increases cavaliers production by 100%", "helper", "cavalier", "", "", "", "", "reset");
var cavalierUpgrade2 = Object.create(allUpgrades);
cavalierUpgrade2.init("cavalierUpgrade2", "Obsidian Lance", 200000, "locked", "././images/Upgrades/testIcon.png", "Increases cavaliers production by an additional 100%", "helper", "cavalier", "", "", "", "", "reset");
var cavalierUpgrade3 = Object.create(allUpgrades);
cavalierUpgrade3.init("cavalierUpgrade3", "Nightmare", 1000000, "locked", "././images/Upgrades/testIcon.png", "Increases cavaliers production by an additional 100%", "helper", "cavalier", "", "", "", "", "reset");
var wyrmUpgrade1 = Object.create(allUpgrades);
wyrmUpgrade1.init("wyrmUpgrade1", "Dragon Wings", 250000, "locked", "././images/Upgrades/testIcon.png", "Increases wyrms production by 100%", "helper", "wyrm", "", "", "", "", "reset");
var wyrmUpgrade2 = Object.create(allUpgrades);
wyrmUpgrade2.init("wyrmUpgrade2", "Dragon Roar", 500000, "locked", "././images/Upgrades/testIcon.png", "Increases wyrms production by an additional 100%", "helper", "wyrm", "", "", "", "", "reset");
var wyrmUpgrade3 = Object.create(allUpgrades);
wyrmUpgrade3.init("wyrmUpgrade3", "Dragon Breath", 2500000, "locked", "././images/Upgrades/testIcon.png", "Increases wyrms production by an additional 100%", "helper", "wyrm", "", "", "", "", "reset");

var spcFarmer = Object.create(allUpgrades);
spcFarmer.init("spcFarmer", "Landlord", 100000, "typeSPC", "././images/Upgrades/testIcon.png", "Gift a piece of your land to your farmer.", "farmer", "landlord", "", "", "", "", "reset");
var spcSoldier = Object.create(allUpgrades);
spcSoldier.init("spcSoldier", "Veteran", 100000, "typeSPC", "././images/Upgrades/testIcon.png", "Promote your soldier", "soldier", "royalGuard", "", "", "", "", "reset");
var spcScout = Object.create(allUpgrades);
spcScout.init("spcScout", "Nightwatcher", 100000, "typeSPC", "././images/Upgrades/testIcon.png", "Grant your scout the ability to see in complete darkness.", "scout", "nightwatcher", "", "", "", "", "reset");
var spcCleric = Object.create(allUpgrades);
spcCleric.init("spcCleric", "Priest", 100000, "typeSPC", "././images/Upgrades/testIcon.png", "Bathe your cleric in divine power.", "cleric", "divinePriest", "", "", "", "", "reset");
var spcCavalier = Object.create(allUpgrades);
spcCavalier.init("spcCavalier", "Hellrider", 100000, "typeSPC", "././images/Upgrades/testIcon.png", "Bend your cavalier with infernal wrath.", "cavalier", "hellrider", "", "", "", "", "reset");
var spcWyrm = Object.create(allUpgrades);
spcWyrm.init("spcWyrm", "Dragon", 100000, "typeSPC", "././images/Upgrades/testIcon.png", "Transform your wyrm into an actual dragon.", "wyrm", "dragon", "", "", "", "", "reset");



// feats upgrades
var clicker01upgrade = Object.create(allUpgrades);
clicker01upgrade.init("clicker01upgrade", "Improved Clicking", 100, "clicker01", "././images/Upgrades/clicker01upgrade.png", "Increases your clicking production by 1", "clickproduction", 1, "", "", "", "feat");
var clicker02upgrade = Object.create(allUpgrades);
clicker02upgrade.init("clicker02upgrade", "Powerful Clicks", 1000, "clicker02", "././images/Upgrades/clicker02upgrade.png", "Increases your clicking production by 2", "clickproduction", 2, "", "", "", "feat");
var clicker03upgrade = Object.create(allUpgrades);
clicker03upgrade.init("clicker03upgrade", "Enchanted Clicks", 5000, "clicker03", "././images/Upgrades/clicker03upgrade.png", "Increases your clicking production by 3", "clickproduction", 3, "", "", "", "feat");
var clicker04upgrade = Object.create(allUpgrades);
clicker04upgrade.init("clicker04upgrade", "Clicking Might", 10000, "clicker04", "././images/Upgrades/clicker04upgrade.png", "Increases your clicking production by 4", "clickproduction", 4, "", "", "", "feat");
var clicker05upgrade = Object.create(allUpgrades);
clicker05upgrade.init("clicker05upgrade", "Blessed Clicks", 50000, "clicker05", "././images/Upgrades/clicker05upgrade.png", "Increases your clicking production by 5", "clickproduction", 5, "", "", "", "feat");

var mercenaries01upgrade = Object.create(allUpgrades);
mercenaries01upgrade.init("mercenaries01upgrade", "Inspiring Speech", 100000, "mercenaries01", "././images/Upgrades/mercenariesUpgrade1.png", "Increases your mercenaries production by 4%", "helperProd", 0.04, "", "", "", "feat");
var mercenaries02upgrade = Object.create(allUpgrades);
mercenaries02upgrade.init("mercenaries02upgrade", "Commanders Authority", 500000, "mercenaries02", "././images/Upgrades/mercenariesUpgrade2.png", "Increases your mercenaries production by 6%", "helperProd", 0.06, "", "", "", "feat");
var mercenaries03upgrade = Object.create(allUpgrades);
mercenaries03upgrade.init("mercenaries03upgrade", "Unparalleled Presence", 1000000, "mercenaries03", "././images/Upgrades/mercenariesUpgrade3.png", "Increases your mercenaries production by 10%", "helperProd", 0.1, "", "", "", "feat");
var mercenaries04upgrade = Object.create(allUpgrades);
mercenaries04upgrade.init("mercenaries04upgrade", "Pious Guise", 10000000, "mercenaries04", "././images/Upgrades/mercenariesUpgrade4.png", "Increases your mercenaries production by 15%", "helperProd", 0.15, "", "", "", "feat");

var guildLeader01upgrade = Object.create(allUpgrades);
guildLeader01upgrade.init("guildLeader01upgrade", "Efficient Bureaucracy", 10000000, "guildLeader01", "././images/Upgrades/testIcon.png", "Enhances the effects granted by each of the guilds", "ultimateGuildUpgrade", "", "", "", "", "feat");

var autocasting0 = Object.create(allUpgrades);
autocasting0.init("autocasting0", "Automated Casting", 1000000, "unlocked", "././images/Upgrades/autoCasting.png", "Enables you to automaticly cast spells.", "", "", "", "", "", "");

/*
var landlordUpgrade = Object.create(allUpgrades);
landLordUpgrade.init("landlordUpgrade", "Agronomist", 100000, "locked", "././images/Upgrades/testIcon.png", "Teach your landlord how to utilize his lands to the maximum.", "", "", "", "", "", "");
*/

var upgradesList = [];
upgradesList.push(powerUpgrade1);
upgradesList.push(powerUpgrade2);
upgradesList.push(powerUpgrade3);
upgradesList.push(powerUpgrade4);
upgradesList.push(powerUpgrade5);
upgradesList.push(powerUpgrade6);
upgradesList.push(powerUpgrade7);
upgradesList.push(powerUpgrade8);
upgradesList.push(powerUpgrade9);
upgradesList.push(powerUpgrade10);

upgradesList.push(critUpgrade1);
upgradesList.push(critUpgrade2);
upgradesList.push(critUpgrade3);
upgradesList.push(critUpgrade4);
upgradesList.push(critUpgrade5);
upgradesList.push(critUpgrade6);
upgradesList.push(critUpgrade7);
upgradesList.push(critUpgrade8);
upgradesList.push(critUpgrade9);
upgradesList.push(critUpgrade10);

upgradesList.push(knowledgeOrb1);
upgradesList.push(knowledgeOrb2);
upgradesList.push(knowledgeOrb3);
upgradesList.push(knowledgeOrb4);
upgradesList.push(knowledgeOrb5);
upgradesList.push(knowledgeOrb6);
upgradesList.push(knowledgeOrb7);
upgradesList.push(knowledgeOrb8);
upgradesList.push(knowledgeOrb9);
upgradesList.push(knowledgeOrb10);

upgradesList.push(classUpgrade);
upgradesList.push(meleeClass);
upgradesList.push(agilityClass);
upgradesList.push(sorceryClass);
upgradesList.push(agilityClassUpgrade);
upgradesList.push(assassinClass);
upgradesList.push(rangerClass);
upgradesList.push(thiefClass);
upgradesList.push(meleeClassUpgrade);
upgradesList.push(sorceryClassUpgrade);
upgradesList.push(testUpgrade);
upgradesList.push(paladinClass);
upgradesList.push(warMarshalClass);
upgradesList.push(berserkerClass);
upgradesList.push(wizardClass);
upgradesList.push(lichClass);
upgradesList.push(druidClass);


upgradesList.push(unlockHelper);
upgradesList.push(unlockGuild);
upgradesList.push(unlockQuests);

upgradesList.push(fighterGuildUpgrade1);
upgradesList.push(fighterGuildUpgrade2);
upgradesList.push(fighterGuildUpgrade3);
upgradesList.push(fighterGuildUpgrade4);
upgradesList.push(rogueGuildUpgrade1);
upgradesList.push(rogueGuildUpgrade2);
upgradesList.push(rogueGuildUpgrade3);
upgradesList.push(rogueGuildUpgrade4);
upgradesList.push(mageGuildUpgrade1);
upgradesList.push(mageGuildUpgrade2);
upgradesList.push(mageGuildUpgrade3);
upgradesList.push(mageGuildUpgrade4);
upgradesList.push(helperGuildUpgrade1);
upgradesList.push(helperGuildUpgrade2);
upgradesList.push(helperGuildUpgrade3);
upgradesList.push(helperGuildUpgrade4);
upgradesList.push(merchantGuildUpgrade1);
upgradesList.push(merchantGuildUpgrade2);
upgradesList.push(merchantGuildUpgrade3);
upgradesList.push(merchantGuildUpgrade4);
upgradesList.push(bardGuildUpgrade1);
upgradesList.push(bardGuildUpgrade2);
upgradesList.push(bardGuildUpgrade3);
upgradesList.push(bardGuildUpgrade4);
upgradesList.push(farmerUpgrade1);
upgradesList.push(farmerUpgrade2);
upgradesList.push(farmerUpgrade3);
upgradesList.push(soldierUpgrade1);
upgradesList.push(soldierUpgrade2);
upgradesList.push(soldierUpgrade3);
upgradesList.push(scoutUpgrade1);
upgradesList.push(scoutUpgrade2);
upgradesList.push(scoutUpgrade3);
upgradesList.push(clericUpgrade1);
upgradesList.push(clericUpgrade2);
upgradesList.push(clericUpgrade3);
upgradesList.push(cavalierUpgrade1);
upgradesList.push(cavalierUpgrade2);
upgradesList.push(cavalierUpgrade3);
upgradesList.push(wyrmUpgrade1);
upgradesList.push(wyrmUpgrade2);
upgradesList.push(wyrmUpgrade3);
upgradesList.push(specialHelper);
upgradesList.push(spcFarmer);
upgradesList.push(spcSoldier);
upgradesList.push(spcScout);
upgradesList.push(spcCleric);
upgradesList.push(spcCavalier);
upgradesList.push(spcWyrm);

upgradesList.push(clicker01upgrade);
upgradesList.push(clicker02upgrade);
upgradesList.push(clicker03upgrade);
upgradesList.push(clicker04upgrade);
upgradesList.push(clicker05upgrade);
upgradesList.push(mercenaries01upgrade);
upgradesList.push(mercenaries02upgrade);
upgradesList.push(mercenaries03upgrade);
upgradesList.push(mercenaries04upgrade);
upgradesList.push(guildLeader01upgrade);
//upgradesList.push(landLordUpgrade);

upgradesList.push(autocasting0);