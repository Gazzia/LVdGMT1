var saveParams_Perso = ["plGold", "plHealthMax", "plHealth", "numpage", "pseudo", "race", "classe", "origine"];
var saveParams_Stats = ["classeXForce", "classeXFesse", "classeXChar", "classeXDex", "raceXForce", "raceXFesse", "raceXChar", "raceXDex", "raceXSag", "raceXInt", "bForce", "bFesse", "bChar", "bDex", "bSag", "bInt"];

var saveParams_Options = ["Setting_MusicOn", "Setting_SoundOn"];
var saveParams_Divers = ["tookRiverGold", "nbKnock2_2", "combatWon_RatSoufflant", "tookCorpseGold", "talkedToGuard", "sawhole", "caughtbyguard", "failedToSeduceGuard", "passedGate"];

var saveParams_InvArme = ["selected_arme", "arme_Branche", "arme_Baton"];
var saveParams_InvHead = ["selected_head"];
var saveParams_InvTorse = ["selected_torse"];
var saveParams_InvLeg = ["selected_leg"];
var saveParams_InvFoot = ["selected_foot"];
var saveParams_InvTools = ["tool_Shovel"];
//
var saveParams_InvTotal = saveParams_InvArme.concat(saveParams_InvHead, saveParams_InvTorse, saveParams_InvLeg, saveParams_InvFoot, saveParams_InvTools);
var saveParams_DiversTotal = saveParams_Perso.concat(saveParams_Options, saveParams_Divers, saveParams_Stats);
//

var saveParams_InvTotal_Length = saveParams_InvTotal.length;
var saveParams_DiversTotal_Length = saveParams_DiversTotal.length;
