var allUpgrades = {
	init: function(id, name, cost, type, icon, desc, effect, quant, maxMana, manaRegen, clickProd, critChance, reset){
		this.id = id;
		this.name = name;
		this.cost = cost;
		this.type = type;
		this.icon = icon;
		this.desc = desc;
		this.effect = effect;
		this.quant = quant;
		this.maxMana = maxMana;
		this.manaRegen = manaRegen;
		this.clickProd = clickProd;
		this.critChance = critChance;
		this.reset=reset;
	},
	getInfo: function(){
		var info = [];
		info.push(this.id);
		info.push(this.name);
		info.push(this.cost);
		info.push(this.type);
		info.push(this.icon);
		info.push(this.desc);
		info.push(this.effect);
		info.push(this.quant);
		info.push(this.maxMana);
		info.push(this.manaRegen);
		info.push(this.clickProd);
		info.push(this.critChance);
		info.push(this.reset);
		return info;
	},
};

var allSpells = {
	init: function(id, name, cost, type, icon, desc, effect, quant, duration, crit, mod, suffix, autocast){
		this.id = id;
		this.name = name;
		this.cost = cost;
		this.type = type;
		this.icon = icon;
		this.desc = desc;
		this.effect = effect;
		this.quant = quant;
		this.duration = duration;
		this.crit = crit;
		this.mod = mod;
		this.suffix = suffix;
		this.autocast=autocast;
	},
	getInfo: function(){
		var info = [];
		info.push(this.id);
		info.push(this.name);
		info.push(this.cost);
		info.push(this.type);
		info.push(this.icon);
		info.push(this.desc);
		info.push(this.effect);
		info.push(this.quant);
		info.push(this.duration);
		info.push(this.crit);
		info.push(this.mod);
		info.push(this.suffix);
		info.push(this.autocast);
		return info;
	},
};

var allFeats = {
	init:function(id, name, type, icon, desc, effect, quant, shown){
		this.id=id;
		this.name=name;
		this.type=type;
		this.icon=icon;
		this.desc=desc;
		this.effect=effect;
		this.quant=quant;
		this.shown=shown;
	},
	getInfo: function(){
		var info=[];
		info.push(this.id);
		info.push(this.name);
		info.push(this.type);
		info.push(this.icon);
		info.push(this.desc);
		info.push(this.effect);
		info.push(this.quant);
		info.push(this.shown);
		return info;
	}
}

var allGear = {
	init:function(id, name, unlocked, set, effect, quant, type, icon, suffix){
		this.id = id;
		this.name = name;
		this.unlocked = unlocked;
		this.set = set;
		this.effect = effect;
		this.quant = quant;
		this.type=type;
		this.icon=icon;
		this.suffix=suffix;
	},
	getInfo: function(){
		var info=[];
		info.push(this.id);
		info.push(this.name);
		info.push(this.unlocked);
		info.push(this.set);
		info.push(this.effect);
		info.push(this.quant);
		info.push(this.type);
		info.push(this.icon);
		info.push(this.suffix);
		return info;
	}
}

var allTalents = {
	init:function(id, name, type, desc, quant, icon, tier, classes, unlock, bg, bought, max, suffix){
		this.id=id;
		this.name=name;
		this.type=type;
		this.desc=desc;
		this.quant=quant;
		this.icon=icon;
		this.tier=tier;
		this.classes=classes;
		this.unlock=unlock;
		this.bg=bg;
		this.bought=bought;
		this.max=max;
		this.suffix=suffix;
	},
	getInfo:function(){
		var info=[];
		info.push(this.id);
		info.push(this.name);
		info.push(this.type);
		info.push(this.desc);
		info.push(this.quant);
		info.push(this.icon);
		info.push(this.tier);
		info.push(this.classes);
		info.push(this.unlock);
		info.push(this.bg);
		info.push(this.bought);
		info.push(this.max);
		info.push(this.suffix);
		return info;
	}
}

var allDeeds = {
	init:function(id, name, desc, req, amount, effect, quant, type, unlock, icon, iconLocked, iconAchieved, iconSelected){
		this.id=id;
		this.name=name;
		this.desc=desc;
		this.req=req;
		this.amount=amount;
		this.effect=effect;
		this.quant=quant;
		this.type=type;
		this.unlock=unlock;
		this.icon=icon;
		this.iconLocked=iconLocked;
		this.iconAchieved=iconAchieved;
		this.iconSelected=iconSelected;
	},
	getInfo:function(){
		var info=[];
		info.push(this.id);
		info.push(this.name);
		info.push(this.desc);
		info.push(this.req);
		info.push(this.amount);
		info.push(this.effect);
		info.push(this.quant);
		info.push(this.type);
		info.push(this.unlock);
		info.push(this.icon);
		info.push(this.iconLocked);
		info.push(this.iconAchieved);
		info.push(this.iconSelected);
		return info;
	}
}


function displayInfo(){
	console.log("Gold mod: "+goldMod);
	console.log("Helpers mod: "+helpersMod);
	console.log("Void power: "+voidPower);
	//console.log();
	//console.log();
	//console.log();
}

function voidClick(){
	var finishSpells=0;
	for(var i=0;i<document.getElementById("spells").children.length;i++){
		if(document.getElementById(document.getElementById("spells").children[i].id).classList.length==1){
			finishSpells++;
		}
	}
	if(finishSpells==document.getElementById("spells").children.length){
		if(calculateVoidPower(add)>voidPower){
			if(checkLeaders()<=5){
				if(document.getElementById("startQuestButton").classList!="hidden"){
					reset();
				}
			}
			else{
				if(voidPrevent==false){
					reset();
				}// make something to just reset
			}	
		}
	}
}

function castSpell(index){
	//console.log(spellEffects[index], spellQuants[index]);
	if(spellEffects[index]=="duration"){durationSpell(index, "noDisplay");}
	else if(spellEffects[index]=="directdamage"){
		directSpell(index);
		if(spellCrit[index]==1){
			var isCrit = Math.floor(Math.random()*100)+1;
			if(isCrit<=cc){add+=2*Math.floor(spellQuants[index]*cp*goldMod*clickMod);}
			else{add+=Math.floor(spellQuants[index]*cp*goldMod*clickMod);}
		}
		else if(spellCrit[index]==0){add+=Math.round(cp*spellQuants[index]*goldMod*clickMod);}
		
	}
}

function spellTimeout(index, value){
	var timeout = setTimeout(function(){
		//console.log(spellIds[index], mod);
		document.getElementById(spellIds[index]).classList.remove(document.getElementById(spellIds[index]).classList[1]);  //removes active spell css (colored backgrounds)
		removeSpellBonuses(index, value);
		advanceHelper("", "");
		document.getElementById("damage").innerHTML = Math.round(cp*goldMod*clickMod);
		document.getElementById("production").innerHTML = Math.round(allHelperProd*goldMod*helpersMod);
		document.getElementById("gold").innerHTML = Math.round(add);
	}, spellDurations[index]);
}

function autocast(index){
	if(spellAutocasts[index]=="noCast"){
		spellAutocasts[index]="autoCast";
		autoCastArray.push(spellIds[index]);
	}
	else if(spellAutocasts[index]=="autoCast"){
		spellAutocasts[index]="noCast";
		autoCastArray.splice(autoCastArray.indexOf(spellIds[index]),1);
	}
	displayAutocastIcons(autoCastArray)
}

function displayAutocastIcons(array){
	document.getElementById("autocastIcons").innerHTML="";
	var autoCastDivs = "";
	for(var i=0; i<array.length;i++){
		autoCastDivs+="<div id=\"autoCast"+i+"\" class=\"autocastIcon\" style=\"top:"+(document.getElementById(array[i]).offsetTop+54)+"px;\">"+(i+1)+"</div>"
	}
	document.getElementById("autocastIcons").innerHTML+=autoCastDivs;
}

function removeSpellBonuses(index, value){
	if(spellMods[index]=="goldMod"){
		goldMod-=value;
	}
	else if(spellMods[index]=="critchance"){
		cc-=value;
	}
	else if(spellMods[index]=="cp"){
		clickMod-=value;
	}
	else if(spellMods[index]=="helper"){
		helpersMod-=value;
	}
	else if(spellMods[index]=="manaRegen"){
		regen-=value;
	}
	else if(spellMods[index]=="maxMana"){
		maxMana-=value;
	}
	else if(spellMods[index]=="tokenGain"){
		tokenChance-=value;
	}
}

function roundNumber(num, scale) {
	if(!("" + num).includes("e")) {
	  return +(Math.round(num + "e+" + scale)  + "e-" + scale);
	} else {
	  var arr = ("" + num).split("e");
	  var sig = ""
	  if(+arr[1] + scale > 0) {
		sig = "+";
	  }
	  return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
	}
  }

function durationSpell(index, type){
	//console.log(spellIds[index]);
	if(spellMods[index]=="goldMod"){
		if(spellTypes[index]=="basic"){  //this is flat
			var mod=spellQuants[index];
		}else if(spellTypes[index]=="thiefClass"){
			var mod=spellQuants[index]+Math.floor(cc/3)*0.01;
		}else if(spellTypes[index]=="druidClass"){
			var mod=spellQuants[index]+regen*0.01;
			mod=(Math.round(mod*100)/100);
		}else if(spellTypes[index]=="assassinClass"){
			var mod=spellQuants[index]+Math.floor(cc/2)*0.01;
		}
		if(type!="display"){goldMod+=mod;}
	}else if(spellMods[index]=="critchance"){
		var mod=spellQuants[index];
		if(type!="display"){cc+=mod;}
	}else if(spellMods[index]=="cp"){
		if(spellTypes[index]=="meleeClass"){
			var mod=spellQuants[index];
		}
		else if(spellTypes[index]=="berserkerClass"){
			var mod=spellQuants[index]+Math.floor(cp/30)*0.01;
		}
		if(type!="display"){clickMod+=mod;}
	}
	else if(spellMods[index]=="helper"){
		if(spellTypes[index]=="rangerClass"){
			var mod=spellQuants[index]+(Math.floor(cc/2))*0.01;
		}
		else if(spellTypes[index]=="warMarshalClass"){
			var mod=spellQuants[index]+Math.floor((cp*goldMod*clickMod)/5)*0.01;
		}
		else if(spellTypes[index]=="lichClass"){
			var mod=spellQuants[index]+regen/100;
		}
		if(type!="display"){helpersMod+=mod;}
	}
	else if(spellMods[index]=="manaRegen"){
		if(spellTypes[index]=="paladinClass"){
			var mod=spellQuants[index]+Math.floor(cp/20);
		}
		else if(spellTypes[index]=="wizardClass"){
			var mod=spellQuants[index]+Math.floor(spellsCast/100);
		}
		else if(spellTypes[index]=="lichClass"){
			var mod=spellQuants[index];
		}
		if(type!="display"){regen+=mod;}
	}
	else if(spellMods[index]=="maxMana"){
		var mod=spellQuants[index]+Math.floor(spellsCast/10);
		if(type!="display"){maxMana+=mod;}
	}
	else if(spellMods[index]=="tokenGain"){
		var mod=spellQuants[index]+Math.floor(goldMod);
		if(type!="display"){tokenChance+=mod;}
	}
	
	//console.log(type, mod);
	if(type=="display"){return mod;}
	else{
		if(spellIds[index]=="rage"){enrageCasts++;}
		if(enrageCasts>=deedAmounts[deedIds.indexOf("meleedeed2")] && sbc=="meleeActivated" && deedUnlocked[deedIds.indexOf("meleedeed2")]=="u"){achieveDeed("meleedeed2");}
		document.getElementById(spellIds[index]).classList.add(sbc);
		spellTimeout(index, mod);
		
	}
}

function directSpell(index){
	var dmgMod = 1;
	if(spellMods[index]=="maxManaRegen"){
		var manaMod=Math.floor((maxMana-100)/5)*0.1;
		var regenMod = (regen-1)*0.1;
		dmgMod+=manaMod+regenMod;
	}
	else if(spellMods[index]=="helper"){
		var helpersCount = 0;
		for(var j=0;j<helperIds.length;j++){
			if(helperTypes[j]=="locked"){
				helpersCount--;
			}
			helpersCount+=helperLevels[j];
		}
		var helpersMod = 1+helpersCount/1000;
		dmgMod+=Math.floor(3*helpersMod);
	}
	else if(spellMods[index]=="crit"){
		dmgMod+=8*(cc/10);
	}
	else if(spellMods[index]=="goldMod"){
		dmgMod+=3*goldMod;
	}
	else if(spellMods[index]=="cp"){
		dmgMod+=cp*0.5;
	}
	else if(spellMods[index]=="guildRanks"){
		var hMod = 5;
		for(i=0;i<guildRank.length;i++){
			hMod+=guildRank[i];
		}
		dmgMod+=Math.floor(hMod/6);
	}
	else if(spellMods[index]==""){}
	spellQuants[index]=dmgMod;
	if(Math.round(cp*spellQuants[index]*goldMod*clickMod)>=deedAmounts[deedIds.indexOf("sorcerydeed3")]&&sbc=="sorceryActivated"&&deedUnlocked[deedIds.indexOf("sorcerydeed3")]=="u"){achieveDeed("sorcerydeed3");}
}

function displayVoidPortal(){
	if(level>=10){
		if(document.getElementById("guildTab").classList!="tab hidden" && document.getElementById("helperTab").classList!="tab hidden" && document.getElementById("spellTab").classList!="tab hidden"){
			document.getElementById("voidPortal").classList.remove("hidden");
		}
	}
}

function addXp(){
	currentExp+=Math.floor((Math.floor(Math.random()*3)+1)*clickingPower);
	if(currentExp>=levelExp){
		currentExp=0;
		if(level!=15){  //this might not be needed
			level++;
			talentPoints++;
		}
		if(level==2){
			generateLoot("Workout Attire");
		}
		if(level>1 && document.getElementById("talents").classList=="hoverable hidden"){
			document.getElementById("talents").classList.remove("hidden");
		}
		if(level==5){
			generateLoot("Practice Staff");
			typeList[idList.indexOf("unlockHelper")]="unlocked";
			document.getElementById("upgradesBox").innerHTML = "";
			var allUpgradesDiv = createUpgrades(idList, nameList, costList, typeList, iconList);
			$("#upgradesBox").append(allUpgradesDiv[0]);
			
		}
		if(level==6 && typeList[idList.indexOf("classUpgrade01")]=="locked"){
			typeList[idList.indexOf("classUpgrade01")]="unlocked";
			document.getElementById("upgradesBox").innerHTML = "";
			document.getElementById("upgradesBox").innerHTML = createUpgrades(idList, nameList, costList, typeList, iconList)[0];
		}
		displayVoidPortal();
		
		if(level==15 && finalClass!=true){      //unlocks t2 specs
			finalClass=true;
			for(var j=0;j<idList.length;j++){
				if(quantList[j]=="si" && typeList[j]=="bought"){
					typeList[idList.indexOf(effectList[j])]="unlocked";	
					//console.log(critList[idList.indexOf(effectList[j])], typeList[idList.indexOf(effectList[j])]);
					document.getElementById("upgradesBox").innerHTML = "";
					var allUpgradesDiv = createUpgrades(idList, nameList, costList, typeList, iconList);
					$("#upgradesBox").append(allUpgradesDiv[0]);
				}
			}
		}
		displayTalents();
		for(var i=0;i<levelCap.length;i++){
			if(level>=15){
				maxLevel=true;
			}
			else{
				if(levelExp==levelCap[i]){
					var j=i+1;
					levelExp=levelCap[j];
					i=levelCap.length;
				}
			}
		}
	}
	if(maxLevel==true){
		$("#currentXpLayer").css("width", 155);
		document.getElementById("levelBar").innerHTML = "<div id=\"currentXpLayer\" style=\"width:"+155+"px\"></div><div id=levelXp>Max Level</div>";
		document.getElementById("levelNumber").innerHTML = level;
	}
	else if(maxLevel==false){
		currentProgress = currentExp/levelExp;
		$("#currentXpLayer").css("width", 155*currentProgress);
		document.getElementById("levelBar").innerHTML = "<div id=\"currentXpLayer\" style=\"width:"+currentProgress*155+"px\"></div><div id=\"currentXp\">"+currentExp+"</div>/<div id=levelXp>"+levelExp+"</div>";
		document.getElementById("levelNumber").innerHTML = level;
	}
	
}

function unlockTalents(classClicked){
	for(var j=0;j<talentIds.length;j++){
		if(classClicked==talentClasses[j]){
			talentUnlock[j]="u";
		}
	}
}

function displayTalents(){
	var background = "";
	var t3Background = "";
	var t1Talents = "";
	var t1TalentsPart = "";
	var t2Talents = "";
	var t2TalentsPart = "";
	var t3Talents = "";
	var t3TalentsPart = "";	
	//console.log(talentUnlock);
	for(var i=0;i<talentIds.length;i++){
		if(talentTiers[i]=="t1"){
			t1TalentsPart+="<div id=\""+talentIds[i]+"\" class=\"talents\" style=\"background-image:url("+talentIcons[i]+")\" onClick=\"talentClick(this.id)\" onmouseover=\"talentMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"></div><div id=\""+talentIds[i]+"Bought\" class=\"talentBought\">"+talentBought[i]+"/"+talentMax[i]+"</div>";
		}
		else if(talentTiers[i]=="t2" && talentUnlock[i]=="u"){
			t2TalentsPart+="<div id=\""+talentIds[i]+"\" class=\"talents\" style=\"background-image:url("+talentIcons[i]+")\" onClick=\"talentClick(this.id)\" onmouseover=\"talentMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"></div><div id=\""+talentIds[i]+"Bought\" class=\"talentBought\">"+talentBought[i]+"/"+talentMax[i]+"</div>";
			background=talentBackgrounds[i];
		}
		else if(talentTiers[i]=="t3" && talentUnlock[i]=="u"){
			t3TalentsPart+="<div id=\""+talentIds[i]+"\" class=\"talents\" style=\"background-image:url("+talentIcons[i]+")\" onClick=\"talentClick(this.id)\" onmouseover=\"talentMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"></div><div id=\""+talentIds[i]+"Bought\" class=\"talentBought\">"+talentBought[i]+"/"+talentMax[i]+"</div>";
			t3Background=talentBackgrounds[i];
		}
	}
	
	t1Talents+="<div id=\""+talentTiers[talentTiers.indexOf("t1")]+"\" class=\"talentBg\" style=\"background:"+talentBackgrounds[talentTiers.indexOf("t1")]+"\">"+t1TalentsPart+"</div>"
	t2Talents+="<div id=\""+talentTiers[talentTiers.indexOf("t2")]+"\" class=\"talentBg\" style=\"background:"+background+"\">"+t2TalentsPart+"</div>"
	t3Talents+="<div id=\""+talentTiers[talentTiers.indexOf("t3")]+"\" class=\"talentBg\" style=\"background:"+t3Background+"\">"+t3TalentsPart+"</div>"
	document.getElementById("talentsBox").innerHTML = "<div class=\"talentBoxTitle\">Talents - "+talentPoints+"</div>"+t1Talents+t2Talents+t3Talents;
}

function spendTalentPoint(talent){
	//console.log("spending talent points");
	//console.log(talent, talentTypes[talentIds.indexOf(talent)], talentQuants[talentIds.indexOf(talent)]/10);
	talentBought[talentIds.indexOf(talent)]++;
	talentPoints--;
	talentPointsSpent++;
	if(talentTiers[talentIds.indexOf(talent)]=="t1"){t1spent++;}
	else if(talentTiers[talentIds.indexOf(talent)]=="t2"){t2spent++;}
	else if(talentTiers[talentIds.indexOf(talent)]=="t3"){t3spent++;}
	if(talentTypes[talentIds.indexOf(talent)]=="cp"){cp+=talentQuants[talentIds.indexOf(talent)];}
	else if(talentTypes[talentIds.indexOf(talent)]=="cc"){cc+=talentQuants[talentIds.indexOf(talent)];}
	else if(talentTypes[talentIds.indexOf(talent)]=="xp"){xpChance+=(talentQuants[talentIds.indexOf(talent)]/10);}
	else if(talentTypes[talentIds.indexOf(talent)]=="cPower"){clickingPower+=talentQuants[talentIds.indexOf(talent)];}
	else if(talentTypes[talentIds.indexOf(talent)]=="helper"){helpersMod+=(talentQuants[talentIds.indexOf(talent)])/100;}
	else if(talentTypes[talentIds.indexOf(talent)]=="goldGain"){goldMod+=(talentQuants[talentIds.indexOf(talent)])/100;}
	else if(talentTypes[talentIds.indexOf(talent)]=="maxMana"){maxMana+=talentQuants[talentIds.indexOf(talent)];}
	else if(talentTypes[talentIds.indexOf(talent)]=="regen"){regen+=talentQuants[talentIds.indexOf(talent)];}
	else if(talentTypes[talentIds.indexOf(talent)]=="rep"){repMod+=(talentQuants[talentIds.indexOf(talent)])/100;}
	else if(talentTypes[talentIds.indexOf(talent)]=="token"){tokenChance+=talentQuants[talentIds.indexOf(talent)];}
	displayTalents();
	advanceHelper("", "");
	document.getElementById("damage").innerHTML = Math.round(cp*goldMod*clickMod);
	document.getElementById("production").innerHTML = Math.round(allHelperProd*goldMod*helpersMod);
}

function createUpgrades (ids, names, costs, types, icons){
	var unlockedDiv = "";
	var boughtDiv = "";
	var lockedDiv = "";
	var fList = [];
	var rows;
	var uc = 0;
	var bc = 0;
	for(var count=0; count<ids.length; count++) {
		if(types[count]=="unlocked"){
			unlockedDiv += "<div id=\""+ids[count]+"\" class=\"upgrade "+types[count]+"\" style=\"background-image:url("+icons[count]+");\" onClick=\"upgradeClick(this.id)\" onmouseover=\"upgradeMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"></div>";
			uc++;
		}
		else if(types[count]=="locked"){
			lockedDiv += "<div id=\""+ids[count]+"\" class=\"upgrade "+types[count]+"\" style=\"background-image:url("+icons[count]+");\"></div>";
		}
		else if(types[count]=="bought"){
			boughtDiv += "<div id=\""+ids[count]+"\" class=\"upgrade "+types[count]+"\" style=\"background-image:url("+icons[count]+");\" onmouseover=\"upgradeMouseover(this.id)\" onmouseout=\"mouseoutFunction()\"></div>";
			bc++;
		}
	}
	rows = Math.floor(uc/4);
	if(uc%4>0){rows++;}
	rows+=Math.floor(bc/4);
	if(bc%4>0){rows++;}
	if(rows>=6){
		fList.push("<div id=\"availableUpgrades\"><div class=\"boxTitle\">Available Upgrades</div>"+unlockedDiv+"</div><div id=\"boughtUpgrades\" class=\"boxTitle\">Bought Upgrades</div><div id=\"boughtUpgradesWrapper\" style=\"width:265px\">"+boughtDiv+"</div>");
		fList.push(true);
	}
	else{
		fList.push("<div id=\"availableUpgrades\"><div class=\"boxTitle\">Available Upgrades</div>"+unlockedDiv+"</div><div id=\"boughtUpgrades\" class=\"boxTitle\">Bought Upgrades</div><div id=\"boughtUpgradesWrapper\">"+boughtDiv+"</div>")
		fList.push(false);
	}
	return fList;
	
	
	
}

function reformUpgrade(id){
	length = id.length-2;
	tier = id.slice(-2);
	oId = id.slice(0,length);
	if(tier=="01"){tier="02";}
	else if(tier=="02"){tier="03";}
	else if(tier=="03"){tier="04";}
	else if(tier=="04"){tier="05";}
	else if(tier=="05"){tier="06";}
	else if(tier=="06"){tier="07";}
	else if(tier=="07"){tier="08";}
	else if(tier=="08"){tier="09";}
	else if(tier=="09"){tier="10";}
	else if(tier=="10"){tier="11";}
	else if(tier=="11"){tier="12";}
	else if(tier=="12"){tier="13";}
	else if(tier=="13"){tier="14";}
	else if(tier=="14"){tier="15";}
	reformedUpgradeId = oId+tier;
	return reformedUpgradeId;
}

function createValues(statsList, lvl, cp, cc, pd, md){
	var statsTable = "";
	var statsDiv = "";
	cp++;
	var valuesList = [];
	valuesList.push(lvl);
	valuesList.push(cp);
	valuesList.push(cc+"%");
	for(var table=0; table<statsList.length; table++){
		statsTable += "<tr><th id=\"statsB\">"+statsList[table]+"</th><th id=\"valuesBox\">"+valuesList[table]+"</th></tr><br>";
	}
	statsDiv += "<div id=\"statsBoxTitle\">Character Information</div><table id=\"statTable\">"+statsTable+"</table>"
	return statsDiv;
}

function showUnlockedFeat(featPosition){
	//document.getElementById("feats").style.backgroundImage = "url(././images/FeatsIconAlerted.png)";
	document.getElementById("unlockedFeatBox").style.opacity=0;
	goldMod+=0.001;
	featBoxTransparency=0;
	wait1seconds=0;
	var showUnlockedFeat = "";
	document.getElementById("unlockedFeatBox").classList.remove("hidden");
	showUnlockedFeat += "<div id=\"showUnlockedFeatBox\"><div id=\"featTitle\">"+featNames[featPosition]+"</div><div id=\"unlockedFeatDescription\">"+featDescs[featPosition]+"</div></div>";
	document.getElementById("unlockedFeatBox").innerHTML = showUnlockedFeat;
	document.getElementById("unlockedFeatBox").style.top=395-document.getElementById("unlockedFeatBox").offsetHeight+"px";
	var displayFeatBox = setInterval(function(){
		document.getElementById("unlockedFeatBox").style.opacity=featBoxTransparency;
		featBoxTransparency+=0.01;
		if(featBoxTransparency>=1.01){
			featBoxTransparency=1;
			wait1seconds+=10
			if(wait1seconds>=1000){	
				document.getElementById("unlockedFeatBox").classList.add("hidden");	
				clearInterval(displayFeatBox);
			}
		}
	}, 10)
	for(var i=0; i<idList.length;i++){
		if(typeList[i]==featIds[featPosition]){
			typeList[i]="unlocked";
			document.getElementById("upgradesBox").innerHTML = "";
			var allUpgradesDiv = createUpgrades(idList, nameList, costList, typeList, iconList);
			$("#upgradesBox").append(allUpgradesDiv[0]);
			if(allUpgradesDiv[1]==true){
				var adjustMaxHeight = 325-document.getElementById("boughtUpgrades").offsetTop;
				document.getElementById("boughtUpgradesWrapper").style.maxHeight = adjustMaxHeight+"px";
			}		
		}
	}
	if(document.getElementById("featsBox").classList == "hidden theBoxes" || document.getElementById("featsBox").classList == "theBoxes hidden"){
		createFeats();
		document.getElementById("feats").classList.add("featsAlerted");
	}
}

function displayFeatAlertIcons(){
	for(var i=0;i<featIds.length;i++){
		if(featTypes[i]==true && featShown[i]=="nShown"){
			document.getElementById("alertIcon"+i).style.top=document.getElementById(featIds[i]).offsetTop+70+"px";
			document.getElementById("alertIcon"+i).style.left=document.getElementById(featIds[i]).offsetLeft+114+"px";
		}
	}
}

function createFeats(){
	var unlockedFeatsCount = 0;
	var unlockedFeats = "";
	for(var i=0;i<featIds.length;i++){
		if(featTypes[i]==true){
			unlockedFeatsCount++;
			if(unlockedFeatsCount==10 && gearUnlocked[gearNames.indexOf("Torn Cape")]=="l"){
				generateLoot("Torn Cape");
			}
			if(featShown[i]=="nShown"){
				unlockedFeats+="<div id=\""+featIds[i]+"\" class=\"feat\" style=\"background-image: url("+featIcons[i]+")\" onmouseover=\"featsMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"></div><div id=\"alertIcon"+i+"\" class=\"alert\"></div>";
			}
			else if(featShown[i]=="shown"){
				unlockedFeats+="<div id=\""+featIds[i]+"\" class=\"feat\" style=\"background-image: url("+featIcons[i]+")\" onmouseover=\"featsMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"></div>"
			}
		}
	}
	var featBoost = unlockedFeatsCount/10;
	if(unlockedFeatsCount>24){
		document.getElementById("featsBox").style.width = "260px";
		return "<div id=\"featsBoxTitle\">Feats "+unlockedFeatsCount+"/"+featIds.length+" - "+featBoost+"% boost</div><div id=\"unlockedFeatsWrapper\" style=\"overflow-x:hidden\">"+unlockedFeats+"</div>";
	}
	else{
		return "<div id=\"featsBoxTitle\">Feats "+unlockedFeatsCount+"/"+featIds.length+" - "+featBoost+"% boost</div><div id=\"unlockedFeatsWrapper\">"+unlockedFeats+"</div>";
	}
}

function checkLeaders(){
	var rankLeaders = 0;
	for(var i=0;i<6;i++){
		if(guildRank[i]==4){
			rankLeaders++;
		}
	}
	return rankLeaders;
}

function createHelpers(){  //should be ok now
	document.getElementById("mercContent").innerHTML= "";
	var helpersDiv = "";
	allHelperProd = 0;
	$("#helperProduction").removeClass("hidden");
	for(var h=0; h<helperIds.length; h++){
		if(helperTypes[h]=="unlocked"){
			helpersDiv += "<div id="+helperIds[h]+" class=\"helpers\"><div id=\"helperIconSpace\" style=\"background-image:url("+helperIcons[h]+")\"></div><div id=\"helperInformation\"><div id=\"helperNameSpace\">"+helperNames[h]+"</div><div id=\"helperLvlSpace\">Lvl: "+helperLevels[h]+"</div><div id=\"helperCostSpace\">Cost: "+helperCosts[h]+"</div><div id=\"helperProdSpace\">"+Math.floor(helperProds[h]*helpersMod*goldMod)+"</div></div></div>";
			allHelperProd+=helperProds[h];
		}
	}
	document.getElementById("production").innerHTML = Math.round(allHelperProd*goldMod*helpersMod);
	$("#mercContent").append(helpersDiv);
	if(voidStage1==false){
		setInterval(function(){
			//if(regen>=deedAmounts[deedIds.indexOf("sorcerydeed1")]&&sbc=="sorceryActivated"&&deedUnlocked[deedIds.indexOf("sorcerydeed1")]=="u"){achieveDeed("sorcerydeed1");}
			if(investmentsActive==false){
				if(document.getElementById("startQuestButton").className=="hidden" && document.getElementById("progressNumbers").innerHTML=="0:00"){
					if(document.getElementsByClassName("spells agilityActivated").length>1&&sbc=="agilityActivated"&&deedUnlocked[deedIds.indexOf("agilitydeed3")]=="u"){
						if(document.getElementsByClassName("spells agilityActivated")[0].id=="goldRush"&&document.getElementsByClassName("spells agilityActivated")[1].id=="keenSenses"){
							achieveDeed("agilitydeed3");	
						}
					}
					
					if(checkLeaders()==6){
						if(document.getElementById("fullExpeditionTimer").classList=="hidden"){
							createQuests("stage2");
						}
					}
					else{createQuests("stage1");}
				}
			}
			if(goldMod>=deedAmounts[deedIds.indexOf("agilitydeed2")]&&sbc=="agilityActivated"&&deedUnlocked[deedIds.indexOf("agilitydeed2")]=="u"){achieveDeed("agilitydeed2");}
			add+=Math.round(allHelperProd*helpersMod*goldMod);
			helpersProduced += Math.round(allHelperProd*helpersMod*goldMod);
			if(helpersProduced>=deedAmounts[deedIds.indexOf("meleedeed3")]&& deedUnlocked[deedIds.indexOf("meleedeed3")]=="u" && sbc=="meleeActivated"){achieveDeed("meleedeed3");}
			document.getElementById("gold").innerHTML = Math.round(add);
			if(document.getElementById("guildTab").className != "tab hidden"){
				advanceGuild(document.getElementsByClassName("guilds selected")[0].id);
				if(guildRank[guildIds.indexOf(document.getElementsByClassName("guilds selected")[0].id)]==4){
					var isToken = Math.floor(Math.random()*100)+1;
					if(isToken<=tokenChance){	
						tokenCount[guildIds.indexOf(document.getElementsByClassName("guilds selected")[0].id)]++;
						if(investmentsActive==true){
							createQuests("stage3");
						}
					}
				}
			}
		}, 1000);
	}
	
}

function displayHelperProd(){
	var helpersDiv = "";
	allHelperProd = 0;
	for(var h=0; h<helperIds.length; h++){
		if(helperTypes[h]=="unlocked"){
			helpersDiv += "<div id="+helperIds[h]+" class=\"helpers\"><div id=\"helperIconSpace\" style=\"background-image:url("+helperIcons[h]+")\"></div><div id=\"helperInformation\"><div id=\"helperNameSpace\">"+helperNames[h]+"</div><div id=\"helperLvlSpace\">Lvl: "+helperLevels[h]+"</div><div id=\"helperCostSpace\">Cost: "+helperCosts[h]+"</div><div id=\"helperProdSpace\">"+Math.round(helperProds[h]*goldMod*helpersMod)+"</div></div></div>";
			allHelperProd+=helperProds[h];
		}
	}
}

function advanceHelper(pos, a){
	var helpersCount = 0;
	if(a==false){
		if(add>=helperCosts[pos]){
			add-=helperCosts[pos];
			helperLevels[pos]++;
			//unlocks next helper
			if(helperLevels[pos]>=25 && helperTypes[pos+1]=="locked"){
				helperTypes[pos+1]="unlocked";
			}
			//unlocks upgrades
			if(helperLevels[pos]==50){
				if(helperIds[pos]=="soldier"){
					generateLoot("Short Sword");
				}
				typeList[idList.indexOf(helperIds[pos]+"Upgrade1")]="unlocked";
				document.getElementById("upgradesBox").innerHTML = "";
				allUpgradesDiv = createUpgrades(idList, nameList, costList, typeList, iconList);
				$("#upgradesBox").append(allUpgradesDiv[0]);
				if(allUpgradesDiv[1]==true){
					var adjustMaxHeight = 325-document.getElementById("boughtUpgrades").offsetTop;
					document.getElementById("boughtUpgradesWrapper").style.maxHeight = adjustMaxHeight+"px";
				}
			}
			else if(helperLevels[pos]==100){
				typeList[idList.indexOf(helperIds[pos]+"Upgrade2")]="unlocked";
				document.getElementById("upgradesBox").innerHTML = "";
				allUpgradesDiv = createUpgrades(idList, nameList, costList, typeList, iconList);
				$("#upgradesBox").append(allUpgradesDiv[0]);
				if(allUpgradesDiv[1]==true){
					var adjustMaxHeight = 325-document.getElementById("boughtUpgrades").offsetTop;
					document.getElementById("boughtUpgradesWrapper").style.maxHeight = adjustMaxHeight+"px";
				}
			}
			else if(helperLevels[pos]==500){
				typeList[idList.indexOf(helperIds[pos]+"Upgrade3")]="unlocked";
				document.getElementById("upgradesBox").innerHTML = "";
				allUpgradesDiv = createUpgrades(idList, nameList, costList, typeList, iconList);
				$("#upgradesBox").append(allUpgradesDiv[0]);
				if(allUpgradesDiv[1]==true){
					var adjustMaxHeight = 325-document.getElementById("boughtUpgrades").offsetTop;
					document.getElementById("boughtUpgradesWrapper").style.maxHeight = adjustMaxHeight+"px";
				}
			}

			helperProds[pos]+=helperBaseProds[pos];
			helperCosts[pos]+=helperBaseCosts[pos];

			for(var j=0;j<helperIds.length;j++){
				if(helperTypes[j]=="locked"){
					helpersCount--;
				}
				helpersCount+=helperLevels[j];
			}
			if(helpersCount>=100 && typeList[idList.indexOf("unlockGuild")]=="locked"){
				typeList[idList.indexOf("unlockGuild")]="unlocked";
			}
			for(var j=0;j<featIds.length;j++){
				if(helperIds[pos]==featEffects[j] && helperLevels[pos]==featQuants[j]){
					featTypes[j]=true;
					showUnlockedFeat(j);
					$("#featsBox").empty();
					$("#featsBox").append(createFeats());
					displayFeatAlertIcons();
				}
				if(featEffects[j]=="mercenaryCount" && helpersCount >= featQuants[j] && featTypes[j]==false){
					featTypes[j]=true;
					showUnlockedFeat(j);
					$("#featsBox").empty();
					$("#featsBox").append(createFeats());
					displayFeatAlertIcons();
				}
			}
		}
	}
	var helpersDiv = "";
	allHelperProd = 0;
	for(var h=0; h<helperIds.length; h++){
		if(helperTypes[h]=="unlocked"){
			helpersDiv += "<div id="+helperIds[h]+" class=\"helpers\" onclick=\"helpersClick(this.id)\" onmouseover=\"helpersMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"><div id=\"helperIconSpace\" style=\"background-image:url("+helperIcons[h]+")\"></div><div id=\"helperInformation\"><div id=\"helperNameSpace\">"+helperNames[h]+"</div><div id=\"helperLvlSpace\">Lvl: "+helperLevels[h]+"</div><div id=\"helperCostSpace\">Cost: "+helperCosts[h]+"</div><div id=\"helperProdSpace\">"+Math.round(helperProds[h]*goldMod*helpersMod)+"</div></div></div>";
			allHelperProd+=helperProds[h];
		}
	}

	document.getElementById("mercContent").innerHTML = "";
	document.getElementById("gold").innerHTML = add;
	$("#mercContent").append(helpersDiv);
}

function createGuilds(selectedGuild){
	var guildsDiv = "";
	document.getElementById("guildContent").innerHTML = "";	
	for(var i=0; i<guildIds.length; i++){
		if(guildRank[i]>=4){
			guildsDiv+="<div id="+guildIds[i]+" class=\"guilds "+guildOpen[i]+"\" onclick=\"guildClick(this.id)\" onmouseover=\"guildMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"><div id=\"guildIconSpace\" style=\"background-image:url("+guildIcons[i]+"); background-size:contain; background-repeat:no-repeat\"></div><div id=\"guildInformation\"><div id=\"guildNameSpace\">"+guildNames[i]+"</div><div id=\"guildTitleSpace\">"+guildTitles[guildRank[i]]+"</div><div id=\"guildRepSpace\"><div id=\"tokenIconSpace\" style=\"background-image:url("+guildIcons[i]+")\"></div>"+tokenCount[i]+"</div></div></div>";
		}
		else{
			guildsDiv+="<div id="+guildIds[i]+" class=\"guilds "+guildOpen[i]+"\" onclick=\"guildClick(this.id)\" onmouseover=\"guildMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"><div id=\"guildIconSpace\" style=\"background-image:url("+guildIcons[i]+"); background-size:contain; background-repeat:no-repeat\"></div><div id=\"guildInformation\"><div id=\"guildNameSpace\">"+guildNames[i]+"</div><div id=\"guildTitleSpace\">"+guildTitles[guildRank[i]]+"</div><div id=\"guildRepSpace\" style=\"font-size:8px; top:-13px;\">"+guildRep[i]+"/"+guildTitleRep[guildRank[i]]+"</div></div></div>";
		}
	}
	document.getElementById("guildContent").innerHTML = guildsDiv;
	if(selectedGuild==""){
		for(var j=0;j<guildIds.length;j++){
			if(guildOpen[guildIds.indexOf(guildIds[j])]=="yes"){
				$("#"+guildIds[j]).addClass("selected");
				j=guildIds.length;
			}
		}	
	}
	else{$("#"+selectedGuild).addClass("selected");}
}

function advanceGuild(selectedGuild, guilds, rewards){// expanded a bit for quests and it works
	if(selectedGuild=="questRewards"){
		for(var j=0;j<guilds.length;j++){
			guildRep[guilds[j]]+=rewards[j];
		}
		for(var i=0;i<guildIds.length;i++){
			if(guildRank[i]!=4 && guildRep[i]>guildTitleRep[guildRank[i]]){
				guildRep[i]-=guildTitleRep[guildRank[i]];
				guildRank[i]++;
			}
			if(guildRank[i]==4){
				guildRep[i]=0;
			}
		}
	}
	else{
		var sPos = guildIds.indexOf(selectedGuild);
		if (guildRank[sPos]!=4){
			var checkRepGain = Math.floor(Math.random()*10000)+1;
			var countHelpers=0;
			
			for(var hCount=0; hCount<helperIds.length;hCount++){
				if(helperTypes[hCount]=="unlocked"){
					countHelpers+=helperLevels[hCount];
				}
			}
			if(checkRepGain<=Math.floor(countHelpers*repMod)){
				guildRep[sPos]++;
			}
		}
		if(guildRep[sPos]>=guildTitleRep[guildRank[sPos]]){
			guildRep[sPos]=0;
			guildRank[sPos]++;
			if(guildRank[sPos]==2){
				if(guildIds[sPos]=="bardGuild"){
					generateLoot("Kind Person");
				}			
			}
			else if(guildRank[sPos]==4){
				for(var j=0; j<featIds.length;j++){
					if(guildIds[sPos]==featEffects[j]){
						featTypes[j]=true;
						showUnlockedFeat(j);
					}
				}
			}
			typeList[idList.indexOf(selectedGuild+"Upgrade"+guildRank[sPos])]="unlocked";
			document.getElementById("upgradesBox").innerHTML = "";
			allUpgradesDiv = createUpgrades(idList, nameList, costList, typeList, iconList);
			$("#upgradesBox").append(allUpgradesDiv[0]);
			if(allUpgradesDiv[1]==true){
				var adjustMaxHeight = 325-document.getElementById("boughtUpgrades").offsetTop;
				document.getElementById("boughtUpgradesWrapper").style.maxHeight = adjustMaxHeight+"px";
			}
		}
		if(guildRank[sPos]==4){
			document.getElementById(selectedGuild).innerHTML = "<div id=\"guildIconSpace\" style=\"background-image:url("+guildIcons[sPos]+")\"></div><div id=\"guildInformation\"><div id=\"guildNameSpace\">"+guildNames[sPos]+"</div><div id=\"guildTitleSpace\">"+guildTitles[guildRank[sPos]]+"</div><div id=\"guildRepSpace\"><div id=\"tokenIconSpace\" style=\"background-image:url("+guildIcons[sPos]+")\"></div>"+tokenCount[sPos]+"</div></div>";
			var allLeaders = true;
			var tokenCheck = true;
			for(var i=0;i<guildIds.length;i++){
				if(guildRank[i]<=3){
					allLeaders=false;
				}
				if(tokenCount[i]<manaList[(idList.indexOf("spcHelper"))]){
					tokenCheck=false;
				}
			}
			if(allLeaders==true && featTypes[featIds.indexOf("guildLeader01")]==false){
				featTypes[featIds.indexOf("guildLeader01")]=true;
				showUnlockedFeat(featIds.indexOf("guildLeader01"));
			}
			if(allLeaders==true && tokenCheck==true && typeList[idList.indexOf("spcHelper")]=="locked" && typeList[idList.indexOf("wyrmUpgrade1")]=="bought" ){
				typeList[idList.indexOf("spcHelper")]="unlocked";
				document.getElementById("upgradesBox").innerHTML = "";
				allUpgradesDiv = createUpgrades(idList, nameList, costList, typeList, iconList);
				$("#upgradesBox").append(allUpgradesDiv[0]);
				if(allUpgradesDiv[1]==true){
					var adjustMaxHeight = 325-document.getElementById("boughtUpgrades").offsetTop;
					document.getElementById("boughtUpgradesWrapper").style.maxHeight = adjustMaxHeight+"px";
				}
			}
		}
		else{
			document.getElementById(selectedGuild).innerHTML = "<div id=\"guildIconSpace\" style=\"background-image:url("+guildIcons[sPos]+")\"></div><div id=\"guildInformation\"><div id=\"guildNameSpace\">"+guildNames[sPos]+"</div><div id=\"guildTitleSpace\">"+guildTitles[guildRank[sPos]]+"</div><div id=\"guildRepSpace\" style=\"font-size:8px; top:-13px;\">"+guildRep[sPos]+"/"+guildTitleRep[guildRank[sPos]]+"</div></div>";
		}
	}
}

function timeWarp(time){
	var helpersTax = 0;
	for(var v = 0;v<time;v++){
		var isCrit = Math.floor(Math.random()*100)+1;
		if(isCrit<=cc){
			console.log(Math.round(2*cp*goldMod*clickMod));
			add+=Math.round(2*cp*goldMod*clickMod);
		}
		else{
			add+=Math.round(cp*goldMod*clickMod);
		}
		document.getElementById("gold").innerHTML = add;

		if(document.getElementById("guildTab").className!="tab hidden"){
			advanceGuild(document.getElementsByClassName("guilds selected")[0].id);
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
				displayFeatAlertIcons();
			}
		}
		addXp();	
		
		if((v%10)==0 && typeList[idList.indexOf("unlockHelper")]=="bought"){
			helpersTax += allHelperProd
		}
	}
}

function adjustQuestChance(list){
	var initiateChance = 0;
	var noviceChance = 0;
	var memberChance = 0;
	var officerChance = 0;
	var leaderChance = 0;
	for(var i=4;i>=0;i--){
		if(list[i]>0){
			var maxPos = i;
			i=-1;
		}
	}
	for(var j=0;j<=maxPos;j++){
		if(j==0){
			if(list[j]==0){initiateChance=16;}
			else{initiateChance=16*list[j];}
		}
		else if(j==1){
			if(list[j]==0){noviceChance=16;}
			else{noviceChance=16*list[j];}
		}
		else if(j==2){
			if(list[j]==0){memberChance=16;}
			else{memberChance=16*list[j];}
		}
		else if(j==3){
			if(list[j]==0){officerChance=16;}
			else{officerChance=16*list[j];}
		}
		else if(j==4){
			if(list[j]==0){leaderChance=16;}
			else{leaderChance=16*list[j];}
		}		
	}
	allChances = initiateChance+noviceChance+memberChance+officerChance+leaderChance;
	noviceChance+=initiateChance;
	memberChance+=noviceChance;
	officerChance+=memberChance;
	leaderChance+=officerChance;
	var chanceRandomizer = Math.floor(Math.random()*allChances);
	if(chanceRandomizer<initiateChance){
		return("initiate");
	}
	else if(initiateChance+1<chanceRandomizer && chanceRandomizer<noviceChance){
		return("novice");
	}
	else if(noviceChance+1<chanceRandomizer && chanceRandomizer<memberChance){
		return("member");
	}
	else if(memberChance+1<chanceRandomizer && chanceRandomizer<officerChance){
		return("officer");
	}
	else if(officerChance+1<chanceRandomizer){
		return("leader");
	}	
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
	  // And swap it with the current element.
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
	return array;
}

function distributeRewards(reward){
	var guilds = [];
	var icons = [];
	var rewards = [];
	var guildIconsDiv = "";
	var tokenRewardsDiv = "";
	var returnList = [];

	for(var i=0;i<guildIds.length;i++){
		if(guildOpen[i]=="yes" && guildRank[i]!=4){
			guilds.push(guildIds.indexOf(guildIds[i]));
		}
	}
	shuffle(guilds);

	for(var j=0;j<guilds.length;j++){
		icons.push(guildIcons[guilds[j]]);
	}
	if(guilds.length==1){
		rewards.push(reward);
	}
	else if(guilds.length==2){
		rewards.push(Math.floor(reward*0.66));
		rewards.push(Math.floor(reward*0.37));
	}
	else if(guilds.length==3){
		rewards.push(Math.floor(reward*0.45));
		rewards.push(Math.floor(reward*0.30));
		rewards.push(Math.floor(reward*0.25));
	}
	else if(guilds.length==4){
		rewards.push(Math.floor(reward*0.40));
		rewards.push(Math.floor(reward*0.28));
		rewards.push(Math.floor(reward*0.20));
		rewards.push(Math.floor(reward*0.12));
	}

	for(var k=0;k<guilds.length;k++){
		guildIconsDiv += "<div id=\"guildReward\" style=\"background-image:url("+icons[k]+")\"></div>";
		tokenRewardsDiv += "<div id=\"guildTokenReward\">"+rewards[k]+"</div>";
	}
	var divs=guildIconsDiv+"<br>"+tokenRewardsDiv;
	returnList.push(divs);
	returnList.push(guilds);
	returnList.push(rewards);

	return returnList;
}

function startQuest(eachGuildReward){
	var displayQuestProgress;
	document.getElementById("startQuestButton").classList.add("hidden");	
	var questProgressTimer = 0;
	var minutes = ~~questTime/60000;
	var seconds = questTime%60000;
	if (displayQuestProgress){
		clearInterval(displayQuestProgress);
	}
	displayQuestProgress = setInterval(function(){	
		questProgressTimer+=1000;		
		var	currentProgress=questProgressTimer/questTime;
		if(seconds==0){
			minutes-=1;
			seconds+=60;
		}
		seconds-=1;
		if (seconds<10){
			secondsString = "";
			secondsString = "0"+Math.floor(seconds);
			document.getElementById("progressNumbers").innerHTML = minutes+":"+secondsString;
		}
		else{document.getElementById("progressNumbers").innerHTML = minutes+":"+Math.floor(seconds);}
				
		$("#currentQuestTimer").css("width", 155*currentProgress);
		if(questProgressTimer>=questTime){
			$("#currentQuestTimer").css("width", 0);				
			document.getElementById("lastQuestRewards").innerHTML="<div id=\"prevQuest\">Previous Spoils</div><div id=\"guildQuestRewards\">"+eachGuildReward[0]+"</div>";	
			clearInterval(displayQuestProgress);
			displayQuestProgress = 0;
			advanceGuild("questRewards", eachGuildReward[1], eachGuildReward[2]);
			createGuilds(document.getElementsByClassName("guilds yes selected")[0].id);
			questProgressTimer = 0;
			questsCompleted++;
			for(var i=0;i<featIds.length;i++){
				if(featEffects[i]=="quests" && featQuants[i]==questsCompleted && featTypes[i]==false){
					featTypes[i]=true;
					showUnlockedFeat(featIds.indexOf(featIds[i]));
				}
			}
			if(document.getElementById("questBox").classList == "hidden"){
				document.getElementById("questTab").classList.add("alerted");
				//console.log("alert");
			}
		}
		
	}, 100);
}

function startExpedition(guild, questTime){
	var displayExpeditionProgress;
	document.getElementById("startExpeditionButton").classList.add("hidden");	
	var questProgressTimer = 0;
	var minutes = ~~questTime/60000;
	var seconds = questTime%60000;
	if (displayExpeditionProgress){
		clearInterval(displayExpeditionProgress);
	}
	voidPrevent = true;
	displayExpeditionProgress = setInterval(function(){	
		questProgressTimer+=1000;		
		var	currentProgress=questProgressTimer/questTime;
		if(seconds==0){
			minutes-=1;
			seconds+=60;
		}
		seconds-=1;
		if (seconds<10){
			secondsString = "";
			secondsString = "0"+Math.floor(seconds);
			document.getElementById("expeditionProgressNumbers").innerHTML = minutes+":"+secondsString;
		}
		else{document.getElementById("expeditionProgressNumbers").innerHTML = minutes+":"+Math.floor(seconds);}
				
		$("#currentExpeditionTimer").css("width", 155*currentProgress);
		if(questProgressTimer>=questTime){
			voidPrevent=false;
			document.getElementById("fullExpeditionTimer").classList.add("hidden");
			$("#currentExpeditionTimer").css("width", 0);				
			clearInterval(displayExpeditionProgress);
			displayExpeditionProgress = 0;
			createGuilds("");
			questProgressTimer = 0;
			generateLoot("");
			document.getElementById("startExpeditionButton").classList.remove("hidden");
			var countingTokens = 0;
			for(var i=0;i<6;i++){
				if(tokenCount[i]>=100){countingTokens++;}
			}
			if(countingTokens!=6){document.getElementById("startExpeditionButton").classList.add("hidden");}
			
			expeditionsCompleted++;
			for(var i=0;i<featIds.length;i++){
				if(featEffects[i]=="explorations" && featQuants[i]==expeditionsCompleted && featTypes[i]==false){
					featTypes[i]=true;
					showUnlockedFeat(featIds.indexOf(featIds[i]));
				}
			}
		}
		
	}, 1000);
}

function generateLoot(item){
	//$("#mouseoverDiv").remove();
	if(item==""){
		var expeditionDrop = Math.floor(Math.random()*gearIds.length);
		var gearPopupTitle = "Expedition Rewards:"
		while(gearUnlocked[expeditionDrop]=="u"){
			console.log("rerolling");
			expeditionDrop = Math.floor(Math.random()*gearIds.length);
		}
		document.getElementById("popupBox").innerHTML = "<div id=\"pickClassBox\"><div id=\"pickClassTitle\">"+gearPopupTitle+"</div><div id=\"expeditionRewardItem\"><div id=\"expeditionRewardIcon\" style=\"background-image:url("+gearIcons[expeditionDrop]+")\"></div><div id=\"expeditionRewardInfo\">"+gearNames[expeditionDrop]+"</div></div><div id=\"claimRewardButton\">Claim Item</div></div>"
		document.getElementById("popupBox").classList.remove("hidden");
		$("#popupBox").on("click", "#claimRewardButton", function(){
			if(item==""){createQuests("stage2");}
			unlockGear(gearNames[expeditionDrop]);
			document.getElementById("popupBox").classList.add("hidden");
		});
	}else{
		if(gearUnlocked[gearNames.indexOf(item)]=="l"){
			document.getElementById("mouseoverDiv").classList.add("hidden");
			var gearPopupTitle = "What is this?";
			var expeditionDrop = gearNames.indexOf(item);
			document.getElementById("popupBox").innerHTML = "<div id=\"pickClassBox\"><div id=\"pickClassTitle\">"+gearPopupTitle+"</div><div id=\"expeditionRewardItem\"><div id=\"expeditionRewardIcon\" style=\"background-image:url("+gearIcons[expeditionDrop]+")\"></div><div id=\"expeditionRewardInfo\">"+gearNames[expeditionDrop]+"</div></div><div id=\"claimRewardButton\">Claim Item</div></div>"
			document.getElementById("popupBox").classList.remove("hidden");
			$("#popupBox").on("click", "#claimRewardButton", function(){
				if(item==""){createQuests("stage2");}
				unlockGear(gearNames[expeditionDrop]);
				document.getElementById("popupBox").classList.add("hidden");
			});
		}
	}
}

function unlockGear(item){
	var attainedGear = 0;
	for(var i=0; i<gearIds.length;i++){
		if(gearNames[i]==item){
			gearUnlocked[i]="u";
		}
	}
	for(var j=0;j<gearIds.length;j++){
		if(gearUnlocked[j]=="u"){
			attainedGear++;
		}
	}
	if(attainedGear>0 && document.getElementById("stats").classList=="hoverable hidden"){
		document.getElementById("stats").classList.remove("hidden");
	}
	if(attainedGear==gearIds.length){
		investmentsActive=true;
		createQuests("stage3");
		featTypes[featIds.indexOf("gear3")]=true;
		showUnlockedFeat(featIds.indexOf("gear3"));
	}else if(attainedGear==1){
		if(featTypes[featIds.indexOf("gear1")]==false){
			document.getElementById("stats").classList.remove("hidden");
			featTypes[featIds.indexOf("gear1")]=true;
			showUnlockedFeat(featIds.indexOf("gear1"));
		}
	}else if(attainedGear==10){
		featTypes[featIds.indexOf("gear2")]=true;
		showUnlockedFeat(featIds.indexOf("gear2"));
	}
}

function displayRelevantGear(gearType, prevState, prevItem){
	var unlockedGear = [];
	for(var i=0; i<gearIds.length;i++){
		if(gearType==gearTypes[i] && gearUnlocked[i]=="u"){
			unlockedGear.push(gearIds[i]);
		}
	}
	if(unlockedGear.length>0){
		popUpGear(unlockedGear, prevState, prevItem);
	}
}

function popUpGear(gearArray, prevState, prevItem){
	var gearDiv = "";
	for(var i=0;i<gearArray.length;i++){
		gearDiv+= "<div id=\""+gearIds[gearIds.indexOf(gearArray[i])]+"\" class=\"gearEquip\" onclick=\"gearEquipClick(this.id)\">"+gearNames[gearIds.indexOf(gearArray[i])]+"</div>";
	}
	document.getElementById("popupBox").classList.remove("hidden");
	document.getElementById("popupBox").innerHTML = "<div id=\"pickClassBox\"><div id=\"pickClassTitle\">Equip an Item</div>"+gearDiv+"</div>";
	previousState=prevState;
	previousItem=prevItem;
}

function equipItem(item, prevState, prevItem){
	document.getElementById("popupBox").classList.add("hidden");
	document.getElementById(gearTypes[gearIds.indexOf(item)]).style.backgroundImage = "url("+gearIcons[gearIds.indexOf(item)]+")";
	document.getElementById(gearTypes[gearIds.indexOf(item)]+"Info").innerHTML = gearNames[gearIds.indexOf(item)]+"<br>"+gearEffects[gearIds.indexOf(item)]+": +"+gearQuants[gearIds.indexOf(item)]+gearSuffixes[gearIds.indexOf(item)];
	if(prevState=="replacing"){
		if(gearEffects[gearNames.indexOf(prevItem)]=="Click production"){
			cp-=gearQuants[gearNames.indexOf(prevItem)];
		}
		else if(gearEffects[gearNames.indexOf(prevItem)]=="Critical chance"){
			cc-=gearQuants[gearNames.indexOf(prevItem)];
		}
		else if(gearEffects[gearNames.indexOf(prevItem)]=="Max Mana"){
			maxMana-=gearQuants[gearNames.indexOf(prevItem)];
		}
		else if(gearEffects[gearNames.indexOf(prevItem)]=="Mana Regen"){
			regen-=gearQuants[gearNames.indexOf(prevItem)];
		}
		else if(gearEffects[gearNames.indexOf(prevItem)]=="Mercenary Production"){
			helpersMod-=gearQuants[gearNames.indexOf(prevItem)]/100;
		}
		else if(gearEffects[gearNames.indexOf(prevItem)]=="Gold Gain"){
			goldMod-=gearQuants[gearNames.indexOf(prevItem)]/100;
		}
		else if(gearEffects[gearNames.indexOf(prevItem)]=="Token Chance"){
			tokenChance-=gearQuants[gearNames.indexOf(prevItem)]/100;
		}
		else if(gearEffects[gearNames.indexOf(prevItem)]=="Base xp Chance"){
			xpChance-=gearQuants[gearNames.indexOf(prevItem)]/10;
		}
	}
	if(gearEffects[gearIds.indexOf(item)]=="Click production"){
		cp+=gearQuants[gearIds.indexOf(item)];
	}
	else if(gearEffects[gearIds.indexOf(item)]=="Critical chance"){
		cc+=gearQuants[gearIds.indexOf(item)];
	}
	else if(gearEffects[gearIds.indexOf(item)]=="Max Mana"){
		maxMana+=gearQuants[gearIds.indexOf(item)];
	}
	else if(gearEffects[gearIds.indexOf(item)]=="Mana Regen"){
		regen+=gearQuants[gearIds.indexOf(item)];
	}
	else if(gearEffects[gearIds.indexOf(item)]=="Mercenary Production"){
		helpersMod+=gearQuants[gearIds.indexOf(item)]/100;
	}
	else if(gearEffects[gearIds.indexOf(item)]=="Gold Gain"){
		goldMod+=gearQuants[gearIds.indexOf(item)]/100;
	}
	else if(gearEffects[gearIds.indexOf(item)]=="Token Chance"){
		tokenChance+=gearQuants[gearIds.indexOf(item)]/100;
	}
	else if(gearEffects[gearIds.indexOf(item)]=="Base xp Chance"){
		xpChance+=gearQuants[gearIds.indexOf(item)]/10;
	}
	checkSet();
	advanceHelper("", "");
	document.getElementById("damage").innerHTML = Math.round(cp*goldMod*clickMod);
	document.getElementById("production").innerHTML = Math.round(allHelperProd*goldMod*helpersMod);
}

function checkSet(){
	//console.log("calling checkSet");
	var sets=[];
	var typeOfGear = ["armour", "weapon", "ring", "cloak", "aura"];
	//console.log(document.getElementById("armourInfo").innerHTML.match(/^[^<]+/)[0]); //actually works  --------------------
	for(var i=0;i<typeOfGear.length;i++){
		if(document.getElementById(typeOfGear[i]+"Info").innerHTML!=""){
			sets.push(gearSet[gearNames.indexOf(document.getElementById(typeOfGear[i]+"Info").innerHTML.match(/^[^<]+/)[0])]);
		}
	}
	const allEqual = arr => arr.every( v => v === arr[0] ) //this i dont get, but it works
	if(allEqual(sets) && sets.length==5){
		if(firstSet==false){
			firstSet=true;
			featTypes[featIds.indexOf("firstSetFeat")]=true;
			showUnlockedFeat(featIds.indexOf("firstSetFeat"));
		}
		document.getElementById("setSegment").classList.remove("hidden");
		applySetBonus(sets[0]);
	}
	else{
		if(document.getElementById("setSegment").classList[1]==undefined){
			removeSetBonus(document.getElementById("setTitle").innerHTML);
		}
		document.getElementById("setSegment").classList.add("hidden");
	}
}

function removeSetBonus(set){
	if(set=="Protector Set"){cp-=25;}
	else if(set=="Syndicate Set"){cc-=7;}
	else if(set=="Magi Set"){maxMana-=25;regen-=5;}
	else if(set=="Academy Set"){helpersMod-=0.03;}
	else if(set=="Merchant Set"){goldMod-=0.02;}
	else if(set=="Bard Set"){tokenChance-=0.01;}
	else if(set=="Basic Set"){repMod-=0.1;}
	else if(set=="Training Set"){xpChance-=90;}
}

function applySetBonus(set){
	//console.log("Calling applySetBonus");
	var setDiv;
	var setName;
	if(set=="p"){
		setName = "Protector Set";
		setDiv = "+25 Click production";
		cp+=25;
	}
	else if(set=="s"){
		setName = "Syndicate Set";
		setDiv = "+7% Critical Chance";
		cc+=7;
	}
	else if(set=="m"){
		setName = "Magi Set";
		setDiv = "+25 Mana, +5 Mana Regen";
		maxMana+=25;
		regen+=5;
	}
	else if(set=="h"){
		setName = "Academy Set";
		setDiv = "+3% Helper Production";
		helpersMod+=0.03;
	}
	else if(set=="me"){
		setName = "Merchant Set";
		setDiv = "+2% Gold Gain";
		goldMod+=0.02;
	}
	else if(set=="b"){
		setName = "Bard Set";
		setDiv = "+1% Token Chance";
		tokenChance+=0.01;
	}
	else if(set=="ba"){
		setName = "Basic Set";
		setDiv = "+10% Reputation Gain";
		repMod+=0.1;
	}
	else if(set="t"){
		setName = "Training Set";
		setDiv = "+900% Base xp Chance";
		xpChance+=90;
	}
	document.getElementById("setTitle").innerHTML = setName;
	document.getElementById("setInfo").innerHTML = setDiv;
}

function checkForLoop(){
	var rolls = 0;
	for(var i=0;i<1;i++){
		var rolling = Math.floor(Math.random()*100)+1
		//console.log(rolling);
		if(rolling==100){
			i=2;
		}
		i--;
		rolls++;
	}
	console.log(rolls);
}

function createQuests(stage){
	var displayQuestProgress = null;
	document.getElementById("questTab").classList.remove("hidden");
	if(stage=="stage1"){
		document.getElementById("startQuestButton").classList.remove("hidden");
		var questReward=0;
		var questTitle;	
		var generatedQuestDiv = "";
		var ranksList = [0,0,0,0,0];
		for(var i=0;i<guildRank.length;i++){  //getting the highest guild rank 
			if(guildRank[i]==0){ranksList[0]++;}
			else if(guildRank[i]==1){ranksList[1]++;}
			else if(guildRank[i]==2){ranksList[2]++;}
			else if(guildRank[i]==3){ranksList[3]++;}
			else if(guildRank[i]==4){ranksList[4]++;}
		}
		var checking = adjustQuestChance(ranksList);   //something is fucky (returns undefined from time to time);
		for(var j=0;j<=1;j++){
			if(checking==undefined){
				checking = adjustQuestChance(ranksList);
				j--
			}
		}
		questId = checking;
		rewardMod = questMods[questIds.indexOf(checking)];

		var timeNumber = Math.floor(Math.random()*questTimes.length);
		questTime = questTimes[timeNumber];
		
		if(questTime==60000){questReward=60; questTitle="Easy Quest";}					//bad
		else if(questTime==120000){questReward=130; questTitle="Medium Quest";}
		else if(questTime==300000){questReward=350; questTitle="Hard Quest";}
		else if(questTime==600000){questReward=700; questTitle="Very Hard Quest";}
		else if(questTime==1800000){questReward=1000; questTitle="Elite Quest";}

		questReward=Math.floor(questReward*rewardMod);
		var eachGuildReward = distributeRewards(questReward);  
		if(eachGuildReward[1].length==0){
			document.getElementById("startQuestButton").classList.add("hidden");
			document.getElementById("lastQuestRewards").classList.add("hidden");
			document.getElementById("fullQuestTimer").classList.add("hidden");
			document.getElementById("questContent").innerHTML = "No quests are available at the moment.";
		}
		else{
			generatedQuestDiv += "<div id=\"questName\">"+questTitle+"</div><div id=\"guildQuestRewards\">"+eachGuildReward[0]+"</div>";
			document.getElementById("questContent").innerHTML = generatedQuestDiv;
			document.getElementById("progressNumbers").innerHTML = ~~questTime/60000+":00";
			document.getElementById("startQuestButton").onclick = function(){
				startQuest(eachGuildReward);
			}	
		}
		
	}
	else if(stage=="stage2"){
		var guildIconsDiv = "";
		var checkTokens = 0;
		document.getElementById("startQuestButton").classList.add("hidden");
		document.getElementById("questBox").querySelector(".boxTitle").innerHTML = "Expeditions";
		document.getElementById("startExpeditionButton").classList.remove("hidden");
		document.getElementById("lastQuestRewards").classList.add("hidden");
		document.getElementById("fullQuestTimer").classList.add("hidden");
		document.getElementById("questContent").innerHTML = "";	
		//if(document.getElementById("fullExpeditionTimer").className!="hidden"){
		//	document.getElementById("startExpeditionButton").classList.remove("hidden");
		//}
		for(var k=0;k<guildIds.length;k++){
			if(tokenCount[k]>=100){
				guildIconsDiv += "<div id=\"guildReward\" style=\"background-image:url("+guildIcons[k]+")\"></div><div id=\"expeditionTokenReward\" style=\"border-color:green\">100</div><br>";
				checkTokens++;
			}
			else if(tokenCount[k]<100){
				guildIconsDiv += "<div id=\"guildReward\" style=\"background-image:url("+guildIcons[k]+")\"></div><div id=\"expeditionTokenReward\">100</div><br>";
			}
		}
		document.getElementById("questContent").innerHTML = guildIconsDiv;
		if(checkTokens==6){document.getElementById("startExpeditionButton").classList.remove("hidden");}
		else{document.getElementById("startExpeditionButton").classList.add("hidden");}
		//if(checkTokens<6){document.getElementById("startExpeditionButton").classList.add("hidden");}
		document.getElementById("startExpeditionButton").onclick = function(){
			document.getElementById("startExpeditionButton").classList.add("hidden");
			document.getElementById("fullExpeditionTimer").classList.remove("hidden");
			document.getElementById("currentExpeditionTimer").classList.remove("hidden");
			document.getElementById("expeditionProgressNumbers").classList.remove("hidden");
			startExpedition("", 5000);  //change time when done ----------------------------------------------------
			for(var i=0;i<guildIds.length;i++){
				tokenCount[i]-=100;
			}
			createGuilds("");
		}
	}
	else if(stage=="stage3"){
		var investmentsDiv = "";
		for(var i=0;i<guildIds.length;i++){
			if(tokenCount[i]>=inCosts[i]){
				investmentsDiv+="<div id=\"inSegment"+guildIds[i]+"\" class=\"inSegments\" style=\"background:rgba(255,255,255,0.3)\"><div id=\"inIcon\" style=\"background-image:url("+guildIcons[i]+")\"></div><div id=\"inName\">"+inNames[i]+"</div><div id=\"inBonus\">"+inBonus[i]+"%</div><br><div id=\"inCost\">Cost:  "+inCosts[i]+"</div><div id=\"investButton"+guildIds[i]+"\" class=\"investButton\" onclick=\"investButtonClick(this.id)\">Invest</div></div>";
			}
			else{
				investmentsDiv+="<div id=\"inSegment"+guildIds[i]+"\" class=\"inSegments\"><div id=\"inIcon\" style=\"background-image:url("+guildIcons[i]+")\"></div><div id=\"inName\">"+inNames[i]+"</div><div id=\"inBonus\">"+inBonus[i]+"%</div><br><div id=\"inCost\">Cost:  "+inCosts[i]+"</div></div>";
			}
		}
		document.getElementById("questBox").innerHTML = "<div class=\"boxTitle\">Investments</div>"+investmentsDiv;
	}	
}

function invest(guild){
	var clickedGuild = guild.slice(12);
	if(tokenCount[guildIds.indexOf(clickedGuild)]>=inCosts[guildIds.indexOf(clickedGuild)]){
		countInvestments++;
		tokenCount[guildIds.indexOf(clickedGuild)]-=inCosts[guildIds.indexOf(clickedGuild)];
		inCosts[guildIds.indexOf(clickedGuild)]+=10;
		inBonus[guildIds.indexOf(clickedGuild)]+=1;
		goldMod+=0.01;
		createQuests("stage3");
		//console.log();
		createGuilds(document.getElementsByClassName("guilds yes selected")[0].id);
		advanceHelper("", "");
		document.getElementById("damage").innerHTML = Math.round(cp*goldMod*clickMod);
		document.getElementById("production").innerHTML = Math.round(allHelperProd*goldMod*helpersMod);
	}
	for(var i=0;i<featIds.length;i++){
		if(featEffects[i]=="investments" && featQuants[i]==countInvestments && featTypes[i]==false){
			featTypes[i]=true;
			showUnlockedFeat(featIds.indexOf(featIds[i]));
		}
	}
}

function upgrade(classId, index){   //maybe needs rework
	//console.log(classId, index);
	document.getElementById("popupBox").innerHTML="";
	if(classId=="classUpgrade01"){
		$("#popupBox").removeClass("hidden");
		var pickClassDiv = "";
		for(var l=0; l<=idList.length; l++){
			if(typeList[l]=="pick1"){
				pickClassDiv += "<div id=\""+idList[l]+"\" class=\"upgrade "+typeList[l]+"\" style=\"background-image:url("+iconList[l]+")\" onclick=\"popupUpgradeClick(this.id)\" onmouseover=\"popupUpgradeMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"></div>";
			}
		}
		return($("#popupBox").append("<div id=\"pickClassBox\"><div id=\"pickClassTitle\">Pick your specialization</div>"+pickClassDiv+"</div>"));
	}
	else if(classId=="agilityClassUpgrade01"){
		$("#popupBox").removeClass("hidden");
		var pickClassDiv = "";
		for(var l=0; l<=idList.length; l++){
			if(typeList[l]=="typeA01"){
				pickClassDiv += "<div id=\""+idList[l]+"\" class=\"upgrade "+typeList[l]+"\" style=\"background-image:url("+iconList[l]+")\" onclick=\"popupUpgradeClick(this.id)\" onmouseover=\"popupUpgradeMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"></div>";
			}
		}
		typeList[index]="locked";
		return($("#popupBox").append("<div id=\"pickClassBox\"><div id=\"pickClassTitle\">Pick your specialization</div>"+pickClassDiv+"</div>"));
	}
	
	else if(classId=="meleeClassUpgrade01"){
		$("#popupBox").removeClass("hidden");
		var pickClassDiv = "";
		for(var l=0; l<=idList.length; l++){
			if(typeList[l]=="typeM01"){
				pickClassDiv += "<div id=\""+idList[l]+"\" class=\"upgrade "+typeList[l]+"\" style=\"background-image:url("+iconList[l]+")\"onclick=\"popupUpgradeClick(this.id)\" onmouseover=\"popupUpgradeMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"></div>";
			}
		}
		typeList[index]="locked";
		return($("#popupBox").append("<div id=\"pickClassBox\"><div id=\"pickClassTitle\">Pick your specialization</div>"+pickClassDiv+"</div>"));
	}
	else if(classId=="sorceryClassUpgrade01"){
		$("#popupBox").removeClass("hidden");
		var pickClassDiv = "";
		for(var l=0; l<=idList.length; l++){
			if(typeList[l]=="typeS01"){
				pickClassDiv += "<div id=\""+idList[l]+"\" class=\"upgrade "+typeList[l]+"\" style=\"background-image:url("+iconList[l]+")\"onclick=\"popupUpgradeClick(this.id)\" onmouseover=\"popupUpgradeMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"></div>";
			}
		}
		typeList[index]="locked";
		return($("#popupBox").append("<div id=\"pickClassBox\"><div id=\"pickClassTitle\">Pick your specialization</div>"+pickClassDiv+"</div>"));
	}
	else if(classId=="unlockHelper"){
        typeList[index]="bought";
		$("#helperTab").removeClass("hidden"); 
		displayVoidPortal();
        createHelpers();
    }
    else if(classId=="unlockGuild"){
		typeList[index]="bought";
		typeList[idList.indexOf("unlockQuests")]="unlocked";   //this upgrade functional..........-.-.-.-.-.-.-.
		$("#guildTab").removeClass("hidden");
		displayVoidPortal();
        createGuilds("");
	}

	else if(classId=="unlockQuests"){
		typeList[index]="bought";
		document.getElementById("questTab").classList.remove("hidden");
		if(checkLeaders()==6){createQuests("stage2");}
		else{createQuests("stage1");}
	}
	else if(classId=="spcHelper"){
		typeList[index]="bought";
		$("#popupBox").removeClass("hidden");
		var pickHelperDiv = "";
		for(var l=0; l<=idList.length; l++){
			if(typeList[l]=="typeSPC"){
				pickHelperDiv += "<div id=\""+idList[l]+"\" class=\"upgrade "+typeList[l]+"\" style=\"background-image:url("+iconList[l]+")\"></div>";
			}
		}
		return($("#popupBox").append("<div id=\"pickClassBox\"><div id=\"pickClassTitle\">Pick your champion</div>"+pickHelperDiv+"</div>"));
	}
	else if(classId=="autocasting0"){
		typeList[index]="bought";
	}
	else if(critList[index]=="guild"){
		typeList[index] = "bought";
		if(effectList[index]=="clickproduction"){
			cp+=quantList[index];
			document.getElementById("damage").innerHTML = Math.round(cp*goldMod*clickMod);
		}
		else if(effectList[index]=="critchance"){
			cc+=quantList[index];
		}
		else if(effectList[index]=="maxMana"){
			maxMana+=quantList[index];
		}
		else if(effectList[index]=="mRegen"){
			regen+=quantList[index];
		}
		else if(effectList[index]=="helpersMod"){
			helpersMod+=quantList[index];
		}
		else if(effectList[index]=="goldGain"){
			goldMod+=quantList[index];
		}
		else if(effectList[index]=="tokenGain"){
			tokenChance+=quantList[index];
		}
	}
	else if(critList[index]=="feat"){
		typeList[index]="bought";
		if(effectList[index]=="clickproduction"){
			cp+=quantList[index];
		}
		else if(effectList[index]=="helperProd"){
			helpersMod+=quantList[index];
		}
		else if(effectList[index]=="ultimateGuildUpgrade"){  //will need some reworking
			cp+=5;
			cc+=1;
			maxMana+=10;
			regen+=1;
			goldMod+=0.05;
			helpersMod+=0.05;
			tokenChance+=0.05;
		}
	}
	else if(effectList[index]=="helper"){//modified to display % instead of produciton 
		typeList[index] = "bought";
		for(var g=0;g<helperIds.length;g++){
			if(quantList[index]==helperIds[g]){
				helperProds[g]*=2;
				helperBaseProds[g]*=2;
				advanceHelper(g, true);
				$("#mercContent").empty();
				var helpersDiv = "";
				allHelperProd = 0;
				$("#helperProduction").removeClass("hidden");
				for(var h=0; h<helperIds.length; h++){
					if(helperTypes[h]=="unlocked"){
						allHelperProd+=helperProds[h];
						helpersDiv += "<div id="+helperIds[h]+" class=\"helpers\" onclick=\"helpersClick(this.id)\" onmouseover=\"helpersMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"><div id=\"helperIconSpace\" style=\"background-image:url("+helperIcons[h]+")\"></div><div id=\"helperInformation\"><div id=\"helperNameSpace\">"+helperNames[h]+"</div><div id=\"helperLvlSpace\">Lvl: "+helperLevels[h]+"</div><div id=\"helperCostSpace\">Cost: "+helperCosts[h]+"</div><div id=\"helperProdSpace\">"+helperProds[h]+"</div></div></div>";
					}
				}
				document.getElementById("production").innerHTML = Math.round(allHelperProd*goldMod*helpersMod);
				$("#mercContent").append(helpersDiv);
			}
		}
	}
	else{
		if(idList[index]=="powerUpgrade07"){generateLoot("Finger-Tape");}
		if(idList[index]=="critUpgrade09"){generateLoot("Extra Weights");}
		if(idList[index]=="knowledgeOrb08"){generateLoot("Determined");}
		typeList[index] = "bought";
		if(effectList[index]=="clickproduction"){
			cp+=quantList[index];
			document.getElementById("damage").innerHTML = Math.round(cp*goldMod*clickMod);
		}
		else if(effectList[index]=="critchance"){
			cc+=quantList[index];
		}
		else if(effectList[index]=="knowledge"){
			goldMod+=quantList[index];
		}
		var comparingUpgrades = reformUpgrade(classId);
		for (var i=0; i<idList.length; i++) {
			if(comparingUpgrades==idList[i]){
				typeList[i] = "unlocked";
			}
		}
	}
}

function displayDeeds(){
	//for(var i=0;i<)
	var warrDeeds = "<div class=\"deedsBoxTitle\">Melee "+mSpent+"/"+mPower+"</div>";
	var agiDeeds = "<div class=\"deedsBoxTitle\">Agility "+aSpent+"/"+aPower+"</div>";
	var sorcDeeds = "<div class=\"deedsBoxTitle\">Sorcery "+sSpent+"/"+sPower+"</div>";
	for(var i=0;i<deedIds.length;i++){
		if(deedUnlocked[i]=="l"){var usedIcon=deedIconsLocked[i];}
		else if(deedUnlocked[i]=="u"){var usedIcon=deedIcons[i];}
		else if(deedUnlocked[i]=="a"){var usedIcon=deedIconsAchieved[i];}
		else if(deedUnlocked[i]=="s"){var usedIcon=deedIconsSelected[i];}
		if(deedTypes[i]=="Melee"){
			warrDeeds+="<div id=\""+deedIds[i]+"\" class=\"deed\" onclick=\"deedClick(this.id)\" onmouseover=\"deedMouseover(this.id)\" onmouseout=\"mouseoutFunction()\" style=\"background-image:url("+usedIcon+")\"></div>";
		}
		else if(deedTypes[i]=="Agility"){
			agiDeeds+="<div id=\""+deedIds[i]+"\" class=\"deed\" onclick=\"deedClick(this.id)\" onmouseover=\"deedMouseover(this.id)\" onmouseout=\"mouseoutFunction()\" style=\"background-image:url("+usedIcon+")\"></div>";
		}
		else if(deedTypes[i]=="Sorcery"){
			sorcDeeds+="<div id=\""+deedIds[i]+"\" class=\"deed\" onclick=\"deedClick(this.id)\" onmouseover=\"deedMouseover(this.id)\" onmouseout=\"mouseoutFunction()\" style=\"background-image:url("+usedIcon+")\"></div>";
		}
	}
	document.getElementById("deedsBox").innerHTML = warrDeeds+agiDeeds+sorcDeeds;
}

function achieveDeed(id){
	var index=deedIds.indexOf(id);
	deedUnlocked[index]="a";
	document.getElementById(deedIds[index]).style.backgroundImage="url("+deedIconsAchieved[index]+")";
	var newDeed = id.slice(0,id.length-1)+(parseInt(id[id.length-1], 10)+1);
	console.log(newDeed);
	if(deedUnlocked[deedIds.indexOf(newDeed)]=="l"){
		deedUnlocked[deedIds.indexOf(newDeed)]="u";
		displayDeeds();
	}	
}

function classBenefits(manaBg){
	console.log(manaBg);
	//var fsi = spellTypes.indexOf(manaBg);
	var fui = idList.indexOf(manaBg);
	if(featTypes[featIds.indexOf("classFeat01")]==false){   //clunky
		featTypes[featIds.indexOf("classFeat01")]=true;
		showUnlockedFeat(featIds.indexOf("classFeat01"));
	}
	document.getElementById("deeds").classList.remove("hidden");
	if(quantList[fui]=="si" && voidStage1==false){
		setInterval(function(){
			currentMana+=regen/10;
			checkPixels = currentMana/maxMana;
			
			if(currentMana>maxMana){
				currentMana=maxMana;
			}
			else{
				$("#currentMana").css("width", 155*checkPixels);
				regenerated+=regen/10;
				if(regenerated>=deedAmounts[deedIds.indexOf("sorcerydeed1")]&&sbc=="sorceryActivated"&&deedUnlocked[deedIds.indexOf("sorcerydeed1")]=="u"){achieveDeed("sorcerydeed1");}
			}
			document.getElementById("manaNumbers").innerHTML = Math.round(currentMana)+" / "+Math.round(maxMana)+" - "+regen+"/sec";		
		}, 100);
	}
	if(manaBg=="agilityClass"){
		guildOpen[1]="yes";
		sbc = "agilityActivated";
		//primaryDeeds="Agility";
		aPower++;
		$("#resourceRegen").css("background", "rgba(85,107,47,0.5)");
		createGuilds("");
		
	}
	else if(manaBg=="meleeClass"){
		guildOpen[0]="yes";
		sbc = "meleeActivated";
		$("#resourceRegen").css("background", "rgba(128,0,0,0.5)")
		createGuilds("");
		mPower++;
		//primaryDeeds="Melee";
	}
	else if(manaBg=="sorceryClass"){
		guildOpen[2]="yes";
		sbc = "sorceryActivated";
		$("#resourceRegen").css("background", "rgba(48,181,217,0.5)")
		createGuilds("");
		sPower++;
		//primaryDeeds="Sorcery";
	}
	displayDeeds();
	for(var i=0;i<spellIds.length;i++){
		if(idList[fui]==spellTypes[i]){
			unlockedSpellsDiv += "<div id=\""+spellIds[i]+"\" class=\"spells\" onclick=\"spellsClick(this.id)\" onmouseover=\"spellsMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"><div id=\"spellIcon\" style=\"background-image:url("+spellIcons[i]+")\"></div><p id=\"spellTitle\">"+spellNames[i]+"</p><p id=\"spellCost\">"+spellCosts[i]+" energy</p></div>";
		}
	}
	maxMana+=manaList[fui];
	regen+=regenList[fui];
	cp+=prodList[fui];
	cc+=critList[fui];
	$("#spellBox").addClass("hidden");
	$("#guildBox").addClass("hidden");
	$("#helperBox").addClass("hidden");
	$("#questBox").addClass("hidden");
	$("#spellBox").removeClass("hidden");
}

function updateMana(){
	currentMana+=regen/100;
	var checkPixels = currentMana/maxMana;
	if(currentMana>maxMana){
		currentMana=maxMana;
	}
	else{
		$("#currentMana").css("width", 155*checkPixels);
	}
	document.getElementById("manaNumbers").innerHTML = Math.round(currentMana)+" / "+Math.round(maxMana)+" - "+regen+"/sec";
}


//++++++++++++++++--------------------------+++++++++++++++++++++++++++++++++++++++++++

function displayMouseoverDiv(div, top, left){
	document.getElementById("mouseoverDiv").innerHTML = div
	document.getElementById("mouseoverDiv").style.top = top+"px";
	document.getElementById("mouseoverDiv").style.left = left+"px";
}


function hoverableClick(clickedId){
	document.getElementById("upgradesBox").classList.add("hidden");
	document.getElementById("deedsBox").classList.add("hidden");
	document.getElementById("featsBox").classList.add("hidden");
	document.getElementById("statsBox").classList.add("hidden");
	document.getElementById("talentsBox").classList.add("hidden");
	
	if(document.getElementById(clickedId).classList=="hoverable clicked"){
		document.getElementById(clickedId).classList.remove("clicked");
	}
	else{
		var x = document.getElementById("leftColumn").querySelectorAll(".hoverable");
		for(var i=0;i<x.length;i++){
			if(x[i].classList=="hoverable clicked"){
				x[i].classList.remove("clicked");
			}
		}
		document.getElementById(clickedId).classList.add("clicked");
		if(clickedId=="upgrades"){
			document.getElementById("upgradesBox").classList.remove("hidden");
			document.getElementById("upgradesBox").innerHTML = "";
			var allUpgradesDiv = createUpgrades(idList, nameList, costList, typeList, iconList);
			document.getElementById("upgradesBox").innerHTML = allUpgradesDiv[0];
			if(allUpgradesDiv[1]==true){
				var adjustMaxHeight = 325-document.getElementById("boughtUpgrades").offsetTop;
				document.getElementById("boughtUpgradesWrapper").style.maxHeight = adjustMaxHeight+"px";
			}
		}
		else if(clickedId=="deeds"){
			document.getElementById("deedsBox").classList.remove("hidden");
			displayDeeds();

		}
		else if(clickedId=="feats"){
			document.getElementById("feats").classList.remove("featsAlerted");
			document.getElementById("featsBox").classList.remove("hidden");
			document.getElementById("featsBox").innerHTML = "";
			document.getElementById("featsBox").innerHTML = createFeats();
			displayFeatAlertIcons();
		}
		else if(clickedId=="stats"){
			document.getElementById("statsBox").classList.remove("hidden");
		}
		else if(clickedId=="talents"){
			document.getElementById("talentsBox").classList.remove("hidden");
			displayTalents();
		}
	}
}

function upgradeMouseover(id){  //needs some work for offsets with scrollbar
	document.getElementById("mouseoverDiv").classList.remove("hidden");
	var index = idList.indexOf(id);
	var offsetTop = document.getElementById(id).offsetTop+39;
	var offsetLeft = document.getElementById(id).offsetLeft+132;
	if(typeList[index]=="bought"){
		var offsetTop = document.getElementById(id).offsetTop+document.getElementById("boughtUpgradesWrapper").offsetTop+39;
		var offsetLeft = document.getElementById(id).offsetLeft+137;
	}
	else{
		var offsetTop = document.getElementById(id).offsetTop+39;
		var offsetLeft = document.getElementById(id).offsetLeft+132;
	}
	if(add>costList[index] && typeList[index]!="bought"){
		document.getElementById(id).style.boxShadow = "inset 0 0 50px 50px rgba(255, 255, 255, 0.3";
	}
	var mouseoverDivTop = document.getElementById("mouseoverDiv").offsetHeight;
	//console.log(document.getElementById("boughtUpgradesWrapper").scrollHeight);
	if(mouseoverDivTop+offsetTop>363){
		offsetTop = document.getElementById(id).offsetTop+39+document.getElementById("boughtUpgradesWrapper").offsetTop;
		offsetTop-=offsetTop+document.getElementById("mouseoverDiv").offsetHeight-382;
	}
	var div = "<p id=\"mouseoverName\">"+nameList[index]+"</p><p id=\"mouseoverCost\">Cost: "+costList[index]+" gold coins</p><p id=\"mouseoverDesc\">"+descList[index]+"</p>";
	displayMouseoverDiv(div, offsetTop, offsetLeft);
}

function upgradeClick(upgradeId){
	document.getElementById("mouseoverDiv").classList.add("hidden");
	var index = idList.indexOf(upgradeId);
	if(document.getElementById(upgradeId).classList=="upgrade unlocked"){
		if(costList[index]<=add){
			add-=costList[index];
			document.getElementById("gold").innerHTML = Math.round(add);
			upgrade(upgradeId, index);
			advanceHelper("", true);	
			document.getElementById("damage").innerHTML = Math.round(cp*goldMod*clickMod);
			if(upgradeId=="unlockHelper"){
				document.getElementById("spellBox").classList.add("hidden");
				document.getElementById("helperBox").classList.remove("hidden");
			}
		}
		else{console.log("Need more gold");}
	}	
	document.getElementById("upgradesBox").innerHTML = "";
	document.getElementById("production").innerHTML = Math.round(allHelperProd*goldMod*helpersMod);
	allUpgradesDiv = createUpgrades(idList, nameList, costList, typeList, iconList);
	document.getElementById("upgradesBox").innerHTML = allUpgradesDiv[0];
	if(allUpgradesDiv[1]==true){
		var adjustMaxHeight = 325-document.getElementById("boughtUpgrades").offsetTop;
		document.getElementById("boughtUpgradesWrapper").style.maxHeight = adjustMaxHeight+"px";
	}
}

function talentMouseover(id){
	document.getElementById("mouseoverDiv").classList.remove("hidden");
	var index=talentIds.indexOf(id);
	if(talentTiers[index]=="t1"&&t1spent<5&&talentPoints>0){document.getElementById(id).style.border="outset";}
	else if(talentTiers[index]=="t2"&&t2spent<8&&t1spent==5&&talentPoints>0&&talentBought[index]!=talentMax[index]){document.getElementById(id).style.border="outset";}
	else if(talentTiers[index]=="t3"&&t3spent<1&&t2spent==8&&talentPoints>0&&talentBought[index]!=talentMax[index]){document.getElementById(id).style.border="outset";}
	var offsetTop = document.getElementById(id).offsetTop+68;
	var offsetLeft = document.getElementById(id).offsetLeft+140;
	if(talentTiers[index]=="t2"){offsetTop+=109;}
	else if(talentTiers[index]=="t3"){offsetTop+=201;}
	var div="<p id=\"mouseoverName\">"+talentNames[index]+"</p><p id=\"mouseoverDesc\">"+talentDescs[index]+" by "+talentQuants[index]+talentSuffixes[index]+"<br>Currently increased by "+talentQuants[index]*talentBought[index]+talentSuffixes[index]+"</p>";
	displayMouseoverDiv(div, offsetTop, offsetLeft);
}

function talentClick(talentId){
	if(talentPoints>0 && talentBought[talentIds.indexOf(talentId)]<talentMax[talentIds.indexOf(talentId)]){
		if(talentTiers[talentIds.indexOf(talentId)]=="t1" && t1spent<5){spendTalentPoint(talentId);}
		else if(talentTiers[talentIds.indexOf(talentId)]=="t2" && t2spent<8 && t1spent==5){spendTalentPoint(talentId);}
		else if(talentTiers[talentIds.indexOf(talentId)]=="t3" && t3spent<1 && t2spent==8){spendTalentPoint(talentId);}
	}
}

function helpersClick(id){
	advanceHelper(helperIds.indexOf(id), false); //change first argument if needed
	document.getElementById("production").innerHTML = Math.round(allHelperProd*goldMod*helpersMod);
}

function helpersMouseover(id){
	index = helperIds.indexOf(id);
	if(add>=helperCosts[index]){
		document.getElementById(id).childNodes[1].style.background="rgba(200,200,200,0.4)";
	}
	else{

	}
	document.getElementById("mouseoverDiv").classList.remove("hidden");
	var offsetTop = document.getElementById(id).offsetTop+43;
	if(offsetTop>=300){offsetTop-=20;}   //align for wyrms only - a bit specific
	var offsetLeft = document.getElementById(id).offsetLeft+196;
	var div="<p id=\"mouseoverName\">"+helperNames[index]+"</p><p id=\"mouseoverCost\">Level: "+helperLevels[index]+"</p><p id=\"mouseoverDuration\">Cost: "+helperCosts[index]+"</p><p id=\"mouseoverDesc\">"+helperProds[index]+"<br>"+Math.floor((helperProds[index]/allHelperProd)*100)+"%</p>";
	displayMouseoverDiv(div, offsetTop, offsetLeft);
}

function tabClick(id){
	document.getElementById("spellBox").classList.add("hidden");
	document.getElementById("helperBox").classList.add("hidden");
	document.getElementById("guildBox").classList.add("hidden");
	document.getElementById("questBox").classList.add("hidden");
	if(id=="spellTab"){
		document.getElementById("spellBox").classList.remove("hidden");
	}
	else if(id=="helperTab"){
		document.getElementById("helperBox").classList.remove("hidden");
	}
	else if(id=="guildTab"){
		document.getElementById("guildBox").classList.remove("hidden");
	}
	else if(id=="questTab"){
		document.getElementById("questBox").classList.remove("hidden");
		document.getElementById("questTab").classList.remove("alerted");
	}
}

function guildClick(id){
	if(guildOpen[guildIds.indexOf(id)]!="no"){
		for(var i=0;i<guildIds.length;i++){
			document.getElementById(guildIds[i]).classList.remove("selected");
		}
		document.getElementById(id).classList.add("selected");
	}
}

function guildMouseover(id){
	document.getElementById("mouseoverDiv").classList.remove("hidden");
	var index=guildIds.indexOf(id);
	var offsetTop = document.getElementById(id).offsetTop+38;
	var offsetLeft = document.getElementById(id).offsetLeft+194;
	var div="<p id=\"mouseoverName\">"+guildNames[index]+"</p><p id=\"mouseoverCost\">Current reputation: "+guildRep[index]+"</p><p id=\"mouseoverDuration\">"+tokenCount[index]+" Guild Tokens</p>";
	displayMouseoverDiv(div, offsetTop, offsetLeft);
}

function popupUpgradeClick(id){
	document.getElementById("pickClassBox").innerHTML = "";
	document.getElementById("popupBox").classList.add("hidden");
	typeList[idList.indexOf(id)]="bought";
	for(var i=0;i<idList.length;i++){
		if(idList[i]=="classUpgrade01"){
			unlockTalents(id);
			if(level==15){
				typeList[idList.indexOf(effectList[idList.indexOf(id)])]="unlocked";
			}
			typeList[i]="locked";
			document.getElementById("spellTab").classList.remove("hidden");
		}
	}
	document.getElementById("spellBox").classList.remove("hidden");
	manaBg=id;
	classBenefits(manaBg);
	document.getElementById("spells").innerHTML = unlockedSpellsDiv;
	if(quantList[idList.indexOf(id)]=="featClass02"){
		if(featTypes[featIds.indexOf("classFeat02")]==false){
			featTypes[featIds.indexOf("classFeat02")]=true;
			showUnlockedFeat(featIds.indexOf("classFeat02"));
		}
		for(var j=0;j<idList.length;j++){
			if(manaBg==effectList[j]){
				typeList[j]="unlocked";
				//console.log(manaBg, effectList[j]);
			}
		}
	}
	else if(quantList[idList.indexOf(id)]=="featClass03"){
		if(featTypes[featIds.indexOf(id)]==false){
			featTypes[featIds.indexOf("classFeat03")]=true;
			showUnlockedFeat(featIds.indexOf("classFeat03"));
		}
	}
	document.getElementById("upgradesBox").innerHTML = "";
	allUpgradesDiv = createUpgrades(idList, nameList, costList, typeList, iconList);
	document.getElementById("upgradesBox").innerHTML = allUpgradesDiv[0];
	if(allUpgradesDiv[1]==true){
		var adjustMaxHeight = 325-document.getElementById("boughtUpgrades").offsetTop;
		document.getElementById("boughtUpgradesWrapper").style.maxHeight = adjustMaxHeight+"px";
	}
	document.getElementById("damage").innerHTML = Math.round(cp*goldMod*clickMod);
	document.getElementById("mouseoverDiv").classList.add("hidden");
}

function popupUpgradeMouseover(id){
	document.getElementById("mouseoverDiv").classList.remove("hidden");
	var index=idList.indexOf(id);
	var div="<p id=\"mouseoverName\">"+nameList[index]+"</p><p id=\"mouseoverDesc\">"+descList[index]+"</p>";
	var offsetTop = document.getElementById(id).offsetTop+157;
	var offsetLeft = document.getElementById(id).offsetLeft+120;
	if(add>=costList[index] && typeList[index]!="bought"){
		document.getElementById(id).style.boxShadow="inset 0 0 50px 50px rgba(255, 255, 255, 0.3";
	}
	displayMouseoverDiv(div, offsetTop, offsetLeft);
}

function spellsClick(id){
	var index = spellIds.indexOf(id);
	if(shiftPressed==true && typeList[idList.indexOf("autocasting0")]=="bought"){
		autocast(index);
	}
	else{
		if(document.getElementById(id).classList=="spells"){
			if(currentMana>=spellCosts[index]){
				spellsCast++;
				if(spellsCast==100){
					generateLoot("Wooden Ring");
				}
				if(spellsCast>=deedAmounts[deedIds.indexOf("sorcerydeed2")]&&sbc=="sorceryActivated"&&deedUnlocked[deedIds.indexOf("sorcerydeed2")]=="u"){achieveDeed("sorcerydeed2");}
				currentMana-=spellCosts[index];
				castSpell(index);
				document.getElementById("damage").innerHTML = Math.round(cp*goldMod*clickMod);
				document.getElementById("production").innerHTML = Math.round(allHelperProd*goldMod*helpersMod);
				document.getElementById("gold").innerHTML = Math.round(add);
			}
		}
	}
}

function spellsMouseover(id){
	document.getElementById("mouseoverDiv").classList.remove("hidden");
	var index=spellIds.indexOf(id);
	var offsetTop = document.getElementById(id).offsetTop+38;
	var offsetLeft = document.getElementById(id).offsetLeft+195;
	if(spellDurations[index]==0){
		directSpell(index);
		var div = "<p id=\"mouseoverName\">"+spellNames[index]+"</p><p id=\"mouseoverCost\">Cost: "+spellCosts[index]+" energy</p><p id=\"mouseoverDesc\">"+spellDescs[index]+"<br>Will grant: "+Math.floor(spellQuants[index]*cp*goldMod*clickMod)+" coins</p>";
	}
	else{
		var displayMod = durationSpell(index, "display");
		if(spellSuffixes[index]=="/s" || spellMods[index] == "maxMana" || spellIds[index]=="keenSenses"){var modDiv=displayMod+spellSuffixes[index];}
		else{var modDiv=(Math.round(displayMod*100))+spellSuffixes[index];}
		var div="<p id=\"mouseoverName\">"+spellNames[index]+"</p><p id=\"mouseoverCost\">Cost: "+spellCosts[index]+" energy</p><p id=\"mouseoverDuration\">Duration: "+spellDurations[index]/1000+" seconds</p><p id=\"mouseoverDesc\">"+spellDescs[index]+modDiv+"</p>";
	}
	displayMouseoverDiv(div, offsetTop, offsetLeft);
}

function featsMouseover(id){
	document.getElementById("mouseoverDiv").classList.remove("hidden");
	var index = featIds.indexOf(id);
	var offsetTop = document.getElementById(id).offsetTop-1;
	var offsetLeft = document.getElementById(id).offsetLeft+132;
	var div="<p id=\"mouseoverName\">"+featNames[index]+"</p><p id=\"mouseoverDesc\">"+featDescs[index]+"</p>";
	displayMouseoverDiv(div, offsetTop, offsetLeft);
	if(document.getElementById("alertIcon"+index)!=null){
		document.getElementById("alertIcon"+index).remove();
		featShown[index]="shown";
	}
}

function voidMouseover(){
	if(Math.floor(calculateVoidPower(add)*100)>voidPower*100){
		document.getElementById("mouseoverDiv").classList.remove("hidden");
		var displayVoid = Math.floor(calculateVoidPower(add)*100)-voidPower*100;
		var div="<p id=\"mouseoverName\">Entering the void will grant: "+displayVoid+" void power.</p>";
		var offsetTop = document.getElementById("voidPortal").offsetTop+205;
		var offsetLeft = document.getElementById("voidPortal").offsetLeft-13;
		displayMouseoverDiv(div, offsetTop, offsetLeft);
	}
}

function expeditionButtonMouseover(id){
	for(var i=0;i<guildIds.length;i++){
		if(guildIds[i]==id && tokenCount[guildIds.indexOf(guildIds[i])]>=100){
			document.getElementById(id).backgroundColor = "rgba(255,255,255,0.3)";
		}
	}
}

function gearIconClick(id){
	id = id.slice(0,-7);
	if(document.getElementById(id).style.backgroundImage==""){
		displayRelevantGear(id, "empty");
	}
	else{
		displayRelevantGear(id, "replacing", document.getElementById(id+"Info").innerHTML.match(/^[^<]+/)[0]);
	}

}

function gearEquipClick(id){
	equipItem(id, previousState, previousItem);
}

function investButtonClick(id){
	invest(id);
}

function deedClick(id){
	var index=deedIds.indexOf(id);
	var pass=false;
	if(deedUnlocked[index]=="a"){
		if(deedTypes[index]=="Melee" && mSpent<mPower){pass=true; mSpent++;}
		else if(deedTypes[index]=="Agility" && aSpent<aPower){pass=true; aSpent++;}
		else if(deedTypes[index]=="Sorcery" && sSpent<sPower){pass=true; sSpent++;}
		if(pass==true){
			deedUnlocked[index]="s";
			deedBonus(true, index);
			displayDeeds();
		}
	}
	else if(deedUnlocked[index]=="s"){
		if(deedTypes[index]=="Melee"){mSpent--;}
		else if(deedTypes[index]=="Agility"){aSpent--;}
		else if(deedTypes[index]=="Sorcery"){sSpent--;}
		deedUnlocked[index]="a";
		displayDeeds();
		deedBonus(false, index);
	}
}


function deedBonus(add, index){
	if(add){
		if(deedEffects[index]=="cp"){
			cp+=deedQuants[index];
		}
		else if(deedEffects[index]=="goldMod"){
			goldMod+=deedQuants[index];
		}
		else if(deedEffects[index]=="regen"){
			regen+=deedQuants[index];
		}
		
	}
	else{
		if(deedEffects[index]=="cp"){
			cp-=deedQuants[index];
		}
		else if(deedEffects[index]=="goldMod"){
			goldMod-=deedQuants[index];
		}
		else if(deedEffects[index]=="regen"){
			regen-=deedQuants[index];
		}
	}
	document.getElementById("damage").innerHTML = Math.round(cp*goldMod*clickMod);
	document.getElementById("production").innerHTML = Math.round(allHelperProd*goldMod*helpersMod);
	//document.getElementById("gold").innerHTML = Math.round(add);
}

function deedMouseover(id){
	if(deedUnlocked[deedIds.indexOf(id)]!="l"){
		document.getElementById("mouseoverDiv").classList.remove("hidden");
		var index=deedIds.indexOf(id);
		var div="<p id=\"mouseoverName\">"+deedNames[index]+"</p><p id=\"mouseoverDesc\">"+deedDescs[index]+"</p>";
		var offsetTop = document.getElementById(id).offsetTop+38;
		var offsetLeft = document.getElementById(id).offsetLeft+132;
		displayMouseoverDiv(div, offsetTop, offsetLeft);
	}
}

function displayMouseoverDiv(div, top, left){
	document.getElementById("mouseoverDiv").innerHTML = div
	document.getElementById("mouseoverDiv").style.top = top+"px";
	document.getElementById("mouseoverDiv").style.left = left+"px";
}

function mouseoutFunction(id){ //id should be optional
	if(id!=null){
		if(id=="startExpeditionButton"){
			document.getElementById(id).backgroundColor = "rgba(255,255,255,0)";
		}
		document.getElementById(id).style.boxShadow="none";
		if(document.getElementById(id).classList=="talents"){
			document.getElementById(id).style.border="inset";
		}
		else if(document.getElementById(id).classList=="helpers"){
			document.getElementById(id).childNodes[1].style.background="rgba(0,0,0,0.3)";
		}
		else if(document.getElementById(id).classList=="upgrade unlocked"){
			document.getElementById(id).style.boxShadow = "none";
		}
	}
	document.getElementById("mouseoverDiv").innerHTML = "";
	document.getElementById("mouseoverDiv").classList.add("hidden");
}