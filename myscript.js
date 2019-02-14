//var add = 20000000;
var add=0;
var currentId, currentName, currentCost, manaVar;
var cp = 1;
var cc = 0;
var level = 1;
var clickMod = 1;
var unlockedDiv = "";
var lockedDiv = "";
var boughtDiv = "";
var idList = [];
var nameList = [];
var costList = [];
var typeList = [];
var iconList = [];
var descList = [];
var effectList = [];
var quantList = [];
var manaList = [];
var regenList = [];
var prodList = [];
var critList = [];
var unlockedSpells = [];
var spellIds = [];
var spellNames = [];
var spellCosts = [];
var spellTypes = [];
var spellIcons = [];
var spellDescs = [];
var spellEffects = [];
var spellQuants = [];
var spellDurations = [];
var spellCrit = [];
var statsList = ["Level", "Click Damage", "Critical Chance"];
var stopClicking = false;
var lastClick = 0;
var regen = 1;    // oooooopss
var maxMana = 100;
var currentMana = 0;
var unlockedSpellsDiv = "";
var spellsInit = 0;
var mercenaryDiv = "";
var allHelperProd = 0;
var helpersMod = 1;
var goldMod = 1;
var featIds = [];
var	featNames = [];
var featTypes = [];
var featIcons = [];
var	featDescs = [];
var featEffects = [];
var featQuants = [];
var manualClicks = 0;
var featBoxTransparency = 0;
var wait1seconds = 0;
var displayUnlockedFeats;
var tokenChance = 1;
var autoClicks = 0;
var gearIds = [];
var gearNames = [];
var gearUnlocked = [];
var gearSet = [];
var gearEffects = [];
var gearQuants = [];
var gearTypes = [];
var gearIcons = [];
var gearSuffixes = [];
var previousState;
var previousItem;
var expeditionsCompleted = 0;
var questsCompleted = 0;
var firstSet = false;
var investmentsActive = false;
var countInvestments = 0;
var repMod = 1;
var questsDone = false;
var spellsCast=0;
var critCount=0;
var currentExp = 0;
var levelExp = 1000;
var xpChance = 10;		 //sasdasdasd base 10
var clickingPower = 3;		 //sasdasdasd base 3
var talentPoints = 0; 
var talentIds = [];
var talentNames = [];
var talentTypes = [];
var talentDescs = [];
var talentQuants = [];
var talentIcons = [];
var talentTiers = [];
var talentClasses = [];
var talentUnlock = [];
var talentBackgrounds = [];
var talentBought = [];
var talentPointsSpent = 0;
var talentMax = [];
var talentSuffixes = [];
var t1spent = 0;
var t2spent = 0;
var t3spent = 0;
var maxLevel = false;
var featShown = [];
var spellMods = [];
var finalClass = false;
var spellSuffixes = [];
var shiftPressed=false;
var spellAutocasts = [];
var autoCastArray = [];
var voidStage1 = false;
var resetList = [];
var stopTimeout = false;
var voidPower = 0;
var voidPrevent=false;
//var primaryDeeds = "";
//var secondaryDeeds = "";
var deedIds = [];
var deedNames = [];
var deedDescs = [];
var deedReqs = [];
var deedAmounts = [];
var deedEffects = [];
var deedQuants = [];
var deedTypes = [];
var deedUnlocked = [];
var deedIcons = [];
var deedIconsLocked = [];
var deedIconsAchieved = [];
var deedIconsSelected = [];
var sbc;
var mPower = 1;
var aPower = 1;
var sPower = 1;
var mSpent = 0;
var aSpent = 0;
var sSpent = 0;
var helpersProduced = 0;
var enrageCasts = 0;
var regenerated = 0;


$(document).ready(function(){
	$(function(){
		onPageLoad();
	});
});

function loadData(){
	upgradesList.forEach(function(allUpgrades){
		idList.push(allUpgrades.getInfo()[0]);
		nameList.push(allUpgrades.getInfo()[1]);
		costList.push(allUpgrades.getInfo()[2]);
		typeList.push(allUpgrades.getInfo()[3]);
		iconList.push(allUpgrades.getInfo()[4]);
		descList.push(allUpgrades.getInfo()[5]);
		effectList.push(allUpgrades.getInfo()[6]);
		quantList.push(allUpgrades.getInfo()[7]);
		manaList.push(allUpgrades.getInfo()[8]);
		regenList.push(allUpgrades.getInfo()[9]);
		prodList.push(allUpgrades.getInfo()[10]);
		critList.push(allUpgrades.getInfo()[11]);
	});

	spellsList.forEach(function(allSpells){
		spellIds.push(allSpells.getInfo()[0]);
		spellNames.push(allSpells.getInfo()[1]);
		spellCosts.push(allSpells.getInfo()[2]);
		spellTypes.push(allSpells.getInfo()[3]);
		spellIcons.push(allSpells.getInfo()[4]);
		spellDescs.push(allSpells.getInfo()[5]);
		spellEffects.push(allSpells.getInfo()[6]);
		spellQuants.push(allSpells.getInfo()[7]);
		spellDurations.push(allSpells.getInfo()[8]);
		spellCrit.push(allSpells.getInfo()[9]);
		spellMods.push(allSpells.getInfo()[10]);
		spellSuffixes.push(allSpells.getInfo()[11]);
		spellAutocasts.push(allSpells.getInfo()[12]);
	});

	additionalContent();

	featsList.forEach(function(allFeats){
		featIds.push(allFeats.getInfo()[0]);
		featNames.push(allFeats.getInfo()[1]);
		featTypes.push(allFeats.getInfo()[2]);
		featIcons.push(allFeats.getInfo()[3]);
		featDescs.push(allFeats.getInfo()[4]);
		featEffects.push(allFeats.getInfo()[5]);
		featQuants.push(allFeats.getInfo()[6]);
		featShown.push(allFeats.getInfo()[7]);
	});

	gearList.forEach(function(allGear){
		gearIds.push(allGear.getInfo()[0]);
		gearNames.push(allGear.getInfo()[1]);
		gearUnlocked.push(allGear.getInfo()[2]);
		gearSet.push(allGear.getInfo()[3]);
		gearEffects.push(allGear.getInfo()[4]);
		gearQuants.push(allGear.getInfo()[5]);
		gearTypes.push(allGear.getInfo()[6]);
		gearIcons.push(allGear.getInfo()[7]);
		gearSuffixes.push(allGear.getInfo()[8]);
	});

	talentList.forEach(function(allTalents){
		talentIds.push(allTalents.getInfo()[0]);
		talentNames.push(allTalents.getInfo()[1]);
		talentTypes.push(allTalents.getInfo()[2]);
		talentDescs.push(allTalents.getInfo()[3]);
		talentQuants.push(allTalents.getInfo()[4]);
		talentIcons.push(allTalents.getInfo()[5]);
		talentTiers.push(allTalents.getInfo()[6]);
		talentClasses.push(allTalents.getInfo()[7]);
		talentUnlock.push(allTalents.getInfo()[8]);
		talentBackgrounds.push(allTalents.getInfo()[9]);
		talentBought.push(allTalents.getInfo()[10]);
		talentMax.push(allTalents.getInfo()[11]);
		talentSuffixes.push(allTalents.getInfo()[12]);
	});

	deedList.forEach(function(allDeeds){
		deedIds.push(allDeeds.getInfo()[0]);
		deedNames.push(allDeeds.getInfo()[1]);
		deedDescs.push(allDeeds.getInfo()[2]);
		deedReqs.push(allDeeds.getInfo()[3]);
		deedAmounts.push(allDeeds.getInfo()[4]);
		deedEffects.push(allDeeds.getInfo()[5]);
		deedQuants.push(allDeeds.getInfo()[6]);
		deedTypes.push(allDeeds.getInfo()[7]);
		deedUnlocked.push(allDeeds.getInfo()[8]);
		deedIcons.push(allDeeds.getInfo()[9]);
		deedIconsLocked.push(allDeeds.getInfo()[10]);
		deedIconsAchieved.push(allDeeds.getInfo()[11]);
		deedIconsSelected.push(allDeeds.getInfo()[12]);
	});
}

function additionalContent(){
	var checkToAutocast = setInterval(function(){
		for(var i=0;i<autoCastArray.length;i++){
			if(i!=0){
				for(var k=0;k<i;k++){
					if(spellEffects[spellIds.indexOf(autoCastArray[k])]=="duration" && document.getElementById(autoCastArray[k]).classList[1]==undefined){
						i=autoCastArray.length;
					}
				}
			}
			if(spellEffects[spellIds.indexOf(autoCastArray[i])]=="duration" && spellAutocasts[spellIds.indexOf(autoCastArray[i])]=="autoCast" && currentMana>spellCosts[spellIds.indexOf(autoCastArray[i])] && document.getElementById(autoCastArray[i]).classList.length==1){
				document.getElementById(autoCastArray[i]).classList.add(sbc);
				spellsCast++;
				if(spellsCast==100){
					generateLoot("Wooden Ring");
				}
				currentMana-=spellCosts[spellIds.indexOf(autoCastArray[i])];
				castSpell(spellIds.indexOf(autoCastArray[i]));
			}
			else if(spellEffects[spellIds.indexOf(autoCastArray[i])]=="directdamage" && spellAutocasts[spellIds.indexOf(autoCastArray[i])]=="autoCast"){
				var casts = Math.floor(currentMana/spellCosts[spellIds.indexOf(autoCastArray[i])]);
				for(var j=0;j<casts;j++){
					spellsCast++;
					currentMana-=spellCosts[spellIds.indexOf(autoCastArray[i])];
					castSpell(spellIds.indexOf(autoCastArray[i]));
					
				}
			}
			if(spellsCast>=deedAmounts[deedIds.indexOf("sorcerydeed2")]&&sbc=="sorceryActivated"&&deedUnlocked[deedIds.indexOf("sorcerydeed2")]=="u"){achieveDeed("sorcerydeed2");}
			advanceHelper("", "");
			document.getElementById("damage").innerHTML = Math.round(cp*goldMod*clickMod);
			document.getElementById("production").innerHTML = Math.round(allHelperProd*goldMod*helpersMod);
			document.getElementById("gold").innerHTML = Math.round(add);
		}
	}, 1000)
}

function fbQuestion(data){
	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
	for(var i=0;i<data.length;i++){
		console.log(data.charAt(i));
	}
}

function onPageLoad(){	
	//fbQuestion("data");
	loadData();
	//prepare first spell
	unlockedSpellsDiv = "<div id=\""+spellIds[0]+"\" class=\"spells\" onclick=\"spellsClick(this.id)\" onmouseover=\"spellsMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"><div id=\"spellIcon\" style=\"background-image:url("+spellIcons[0]+")\"></div><p id=\"spellTitle\">"+spellNames[0]+"</p><p id=\"spellCost\">"+spellCosts[0]+" energy</p></div>";

	document.getElementById("gold").innerHTML = add;
	document.getElementById("damage").innerHTML = Math.round(cp*goldMod)*clickMod;
	document.getElementById("levelNumber").innerHTML = level;
	document.getElementById("levelBar").innerHTML = "<div id=\"currentXpLayer\" style=\"width:"+(currentExp/levelExp)*155+"px\"></div><div id=\"currentXp\">"+currentExp+"</div>/<div id=levelXp>"+levelExp+"</div>";
	

	document.addEventListener('keydown', function(event) {
		if(event.keyCode == 16){
				shiftPressed=true;
		}
		else if(event.keyCode == 38){
			displayInfo();
		}
		
	});
	document.addEventListener('keyup', function(event) {
		if(event.keyCode == 32){
			timeWarp(1000);
		}
		if(event.keyCode == 16){
			shiftPressed=false;
		}
		
	});

	document.getElementById("clickMe").onclick = clickFunction;

	function clickFunction(){
		//challenge 1 for melee -----change cp req
		if(cp*goldMod*clickMod>=deedAmounts[deedIds.indexOf("meleedeed1")] && sbc=="meleeActivated" && deedUnlocked[deedIds.indexOf("meleedeed1")]=="u"){achieveDeed("meleedeed1");}
		calculateVoidPower(add);
		var gainXp = Math.floor(Math.random()*1000)+1;
		if(gainXp<=xpChance && level<15){
			addXp();
		}

		var isCrit = Math.floor(Math.random()*100)+1;
		if(isCrit<=cc){
			critCount++;
			if(critCount==100){
				generateLoot("Adventurers Robes");
			}
			if(critCount>=5 && sbc=="agilityActivated" && deedUnlocked[deedIds.indexOf("agilitydeed1")]=="u"){achieveDeed("agilitydeed1");}
			//console.log(Math.round(2*cp*goldMod*clickMod));
			add+=Math.round(2*cp*goldMod*clickMod);
		}
		else{
			add+=Math.round(cp*goldMod*clickMod);
		}
		document.getElementById("gold").innerHTML = add;

		if(document.getElementById("guildTab").className!="tab hidden"){
			//advanceGuild(document.getElementsByClassName("guilds selected")[0].id);
			if(guildRank[guildIds.indexOf(document.getElementsByClassName("guilds selected")[0].id)]==4){
				var isToken = Math.floor(Math.random()*100)+1;
				if(isToken<=tokenChance){
					tokenCount[guildIds.indexOf(document.getElementsByClassName("guilds selected")[0].id)]++;
				}
			}	
		}
		manualClicks++;
		for(var i=0;i<featIds.length;i++){
			if(featEffects[i]=="manualClicks" && featQuants[i]==manualClicks){
				featTypes[i]=true;
				showUnlockedFeat(i);
				$("#featsBox").empty();
				$("#featsBox").append(createFeats());
			}
		}
	}
}