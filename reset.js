function loadResetData(){
    idList.splice(0,idList.length);
    nameList.splice(0,nameList.length);
    costList.splice(0,costList.length);
    typeList.splice(0,typeList.length);
    descList.splice(0,descList.length);
    effectList.splice(0,effectList.length);
    quantList.splice(0,quantList.length);
    manaList.splice(0,manaList.length);
    regenList.splice(0,regenList.length);
    prodList.splice(0,prodList.length);
    critList.splice(0,critList.length);
    resetList.splice(0,resetList.length);
    talentIds.splice(0,talentIds.length);
    talentNames.splice(0,talentNames.length);
    talentTypes.splice(0,talentTypes.length);
    talentDescs.splice(0,talentDescs.length);
    talentQuants.splice(0,talentQuants.length);
    talentIcons.splice(0,talentIcons.length);
    talentTiers.splice(0,talentTiers.length);
    talentClasses.splice(0,talentClasses.length);
    talentUnlock.splice(0,talentUnlock.length);
    talentBackgrounds.splice(0,talentBackgrounds.length);
    talentBought.splice(0,talentBought.length);
    talentMax.splice(0,talentMax.length);
    talentSuffixes.splice(0,talentSuffixes.length);
    spellAutocasts.splice(0,spellAutocasts.length);
    unlockedSpells.splice(0,unlockedSpells.length);
    autoCastArray.splice(0,autoCastArray.length);
    add = 0;
    cp = 1;
    cc = 0;
    level = 1;
    clickMod = 1;
    unlockedDiv = "";
    lockedDiv = "";
    boughtDiv = "";
    stopClicking = false;
    lastClick = 0;
    regen = 1;
    maxMana = 100;
    currentMana = 0;
    unlockedSpellsDiv = "";
    spellsInit = 0;
    mercenaryDiv = "";
    allHelperProd = 0;
    helpersMod = 1;
    goldMod = 1;
    featBoxTransparency = 0;
    wait1seconds = 0;
    displayUnlockedFeats;
    tokenChance = 1;
    autoClicks = 0;
    var previousState;
    var previousItem;
    expeditionsCompleted = 0;
    questsCompleted = 0;
    countInvestments = 0;
    repMod = 1;
    currentExp=0;
    levelExp=1000;
    xpChance=10;		 //sasdasdasd base 10
    clickingPower=3;		 //sasdasdasd base 3
    talentPoints=0; 
    talentPointsSpent=0;
    t1spent=0;
    t2spent=0;
    t3spent=0;
    maxLevel=false;
    finalClass=false;
    shiftPressed=false;
    voidStage1=true;  //later true
    allHelperProd=0;
    helpersMod=1;
    helperTypes = ["unlocked", "locked","locked", "locked","locked", "locked"];
    helperCosts = [100,250,400,800,1480,5000];
    helperProds = [0,0,0,0,0,0];
    helperLevels = [0,0,0,0,0,0];
    guildOpen = ["no", "no", "no", "yes", "yes", "yes"];
    mPower = 1;
    aPower = 1;
    sPower = 1;
    mSpent = 0;
    aSpent = 0;
    sSpent = 0;
    helpersProduced = 0;
    regenerated = 0;

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
        resetList.push(allUpgrades.getInfo()[12]);
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

}

function calculateVoidPower(gold){
    var power=Math.floor(((gold-100000)/1000000)*100)/100;
    //var power=(Math.floor(Math.log(gold+1)/Math.log(1.1))-voidPower)/100;
    return power;
}

function stopSpells(array){
	//console.log(array);
}

function reset(){
    for(var i=0;i<deedIds.length;i++){
        if(deedUnlocked[i]=="s"){
            deedUnlocked[i]="a";
            console.log("deactivating "+deedIds[i]);
            deedBonus(false, i);
        }
    }
    voidPower=calculateVoidPower(add);
    loadResetData();   //from original database
    goldMod+=voidPower;
    unlockedSpellsDiv = "<div id=\""+spellIds[0]+"\" class=\"spells\" onclick=\"spellsClick(this.id)\" onmouseover=\"spellsMouseover(this.id)\" onmouseout=\"mouseoutFunction(this.id)\"><div id=\"spellIcon\" style=\"background-image:url("+spellIcons[0]+")\"></div><p id=\"spellTitle\">"+spellNames[0]+"</p><p id=\"spellCost\">"+spellCosts[0]+" energy</p></div>";
    document.getElementById("spellTab").classList.add("hidden");
    document.getElementById("spellBox").classList.add("hidden");
    document.getElementById("helperProduction").classList.add("hidden");
    document.getElementById("helperTab").classList.add("hidden");
    document.getElementById("voidPower").classList.remove("hidden");
    document.getElementById("power").classList.remove("hidden");
    document.getElementById("voidPortal").classList.add("hidden");
    document.getElementById("deedsBox").classList.add("hidden");
    document.getElementById("deeds").classList.add("hidden");
    document.getElementById("power").innerHTML = Math.round(voidPower*100);
    createUpgrades(idList, nameList, costList, typeList, iconList);

    //for upgrades    - guild upgrade works
    for(var i=0;i<idList.length;i++){	
        if(resetList[i]=="save"){
            typeList[i]="bought";
            upgrade(idList[i], i);
            if(effectList[i]=="guildBox"){
                document.getElementById(effectList[i]).classList.remove("hidden");
            }
        }
    }

    //feat upgrades

    for(var i=0;i<featIds.length;i++){
        if(featEffects[i]=="manualClicks" && featTypes[i]==true){
            for(var j=0;j<idList.length;j++){
                if(featIds[i]==typeList[j]){
                    typeList[j]="unlocked";
                }
            }
        }
    }

    //spells
    for(var i=0;i<spellIds.length;i++){
        spellAutocasts[i]="noCast";
    }
    document.getElementById("gold").innerHTML = add;
    document.getElementById("damage").innerHTML = Math.round(cp*goldMod)*clickMod;
    document.getElementById("levelNumber").innerHTML = level;
    document.getElementById("levelBar").innerHTML = "<div id=\"currentXpLayer\" style=\"width:"+(currentExp/levelExp)*155+"px\"></div><div id=\"currentXp\">"+currentExp+"</div>/<div id=levelXp>"+levelExp+"</div>";
    for(var i=0;i<5;i++){
        var a = document.getElementById("leftColumn").getElementsByClassName("hoverable")[i].id;   
        if(document.getElementById(a+"Box").classList!="hidden theBoxes"){
            document.getElementById(a).classList.remove("clicked");
            document.getElementById(a+"Box").classList.add("hidden");
            
        }
    }

    //feat upgrades
}
