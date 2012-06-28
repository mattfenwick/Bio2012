//http://www.bioinformatics.org/sms/common_new.js	;
var sequence = "mennktsvds ksinnfevkt ihgsksvdsg iyldssykmd ypemgiciii nnknfhkstg mssrsgtdvd aanlretfmg lkyqvrnknd ltredilelm dsvskedhsk rssfvcvils hgdegviygt ngpvelkklt sffrgdycrs ltgkpklfii qacrgteldc gietdsgtde emacqkipve adflyaysta pgyyswrnsk dgswfiqslc smlklyahkl efmhiltrvn rkvatefesf sldstfhakk qipcivsmlt kelyfyh"
var length = sequence.length;
var sequenceType = typeOfSequence();

/*Function: removes whitespace from protein sequence
 * Input: protein sequence with whitespace
 * Output:protein sequence without whitespace
 */
function removeSpaces(seq) {
	var noSpaces = "",i,character;
	for (i = 0; i < seq.length; i++) {
		 character = seq[i];
		if (character !== (" ")) {
			noSpaces += character;
		}
	}
	return noSpaces;
}
/*
 * Function: determines the format of protein sequence
 * Output:returns 1 if one letter codes are used, 3 if three letter codes are used, and 0 if full names are used
 */
function typeOfSequence() {
	if (sequence.substring(0, 1) === "M") {
		return 1;
	}

	if (sequence.substring(0, 4) === "Met") {
		return 3;
	}
	if (sequence.substring(0, 11) === "Methionine") {
		return 0;
	}
}


function AminoAcid(fullName, threeLett, oneLett, weight, property){
	this.fullName=fullName;
	this.oneLett=oneLett;
	this.threeLett=threeLett;
	this.weight=weight;
}
var aminoAcidsReference=[new AminoAcid("Alanine","Ala","A",89.09,"hydrophobic"),
new AminoAcid("Cysteine", "Cys","C",121.15,"hydrophilic"),
new AminoAcid("Aspartic Acid","Asp","D",133.10,"negative"),
new AminoAcid("Glutamic Acid","Glu","E",147.15,"negative"),
new AminoAcid("Phenylalanine","Phe","F",165.19,"hydrophobic"),
new AminoAcid("Glycine","Gly","G",75.07,"hydrophobic"),
new AminoAcid("Histidine","His","H",155.16,"positive"),
new AminoAcid("Isoleucine","Ile","I",131.17,"hydrophobic"),
new AminoAcid("Lysine","Lys","K",146.19,"positive"),
new AminoAcid("Leucine","Leu","L",131.17,"hydrophobic"),
new AminoAcid("Methionine","Met","M",149.21,"hydrophobic"),
new AminoAcid("Asparagine","Asn","N",132.12,"hydrophilic"),
new AminoAcid("Proline","Pro","P",115.13,"hydrophobic"),
new AminoAcid("Glutamine","Gln","Q",146.15,"hydrophilic"),
new AminoAcid("Arginine","Arg","R",174.20,"positive"),
new AminoAcid("Serine","Ser","S",105.09,"hydrophilic"),
new AminoAcid("threonine","Thr","T",119.12,"hydrophilic"),
new AminoAcid("Valine","Val","V",117.15,"hydrophobic"),
new AminoAcid("Tryptophan","Trp","W",204.23,"tryptophan"),
new AminoAcid("Tyrosine","Tyr","Y",101.19,"hydrophilic")];

//Transfers string sequence into an array of amino acids
function loadSequence(seq) {
	var seq1 = removeSpaces(seq);
	seq1=seq1.toUpperCase();
	var i,acid, letter;
	var aminoAcids =[];
	var letterCodes = createOneLetterLookup(aminoAcidsReference);
	for (i = 0; i < seq1.length; i++) {
		 letter = seq1[i];
		 acid = letterCodes[letter];
		aminoAcids.push(acid);
	}
	return aminoAcids;
}

//Function: creates an object whose keys are one letter abbvs and properties are amino acid objects 
function createOneLetterLookup(aminoAcids){
	var i,allLetters={};
	for(i =0; i<aminoAcids.length;i++){
		allLetters[aminoAcids[i].oneLett]=aminoAcids[i];	
	}
	return allLetters;
}

//calculates total molecular weight of given protein sequence
function getMolecularWeight(aminoAcids) {
	var totalWeight = 0,i,acid,acidWeight;
	for (i = 0; i < aminoAcids.length; i++) {
		 acidWeight = aminoAcids[i].weight;
		 totalWeight += acidWeight;
	}
	return totalWeight;
}

//calculates weight percentage of a given amino acid from the given amino acid sequence
//returns a percentage as a number
function calcWeightPercentage(acidseq,acid) {
    var length = acidseq.length;
    var weight = acid.weight;
    var totalWeight=getMolecularWeight(acidseq);
    var i,numOfAcid=0;totalAcidWeight=0,unRounded=0,finalPercent=0;
    for(i = 0; i<length; i++){
    	if(acidseq[i]===acid){
    		numOfAcid++;
    	}
    }
    totalAcidWeight = numOfAcid*weight;
    unRounded= (totalAcidWeight/totalWeight)*100;
    finalPercent = unRounded.toPrecision(3);
    return Number(finalPercent);
}

//returns an object containing all amino acids and corresponding weight percentages
function getAllWeightPercentages(acidseq, oneLetterLookup) {
	var allAcidWeights = {}, currentAcid, i, currentWeight;
	for (i = 0; i < acidseq.length; i++) {
		currentAcid = acidseq[i];
		currentWeight = calcWeightPercentage(acidseq, currentAcid)
		allAcidWeights[acidseq[i].fullName] = currentWeight;
	}
	return allAcidWeights;
}

//creates object that has aminoAcid names as keys whose properties will be percentages
function createFullLetterLookup(aminoAcids) {
	var i, allLetters = {};
	for (i = 0; i < aminoAcids.length; i++) {
		allLetters[aminoAcids[i].fullName] = 0;
	}
	return allLetters;
}

function getAllWeightPercentages2(acidseq, fullLetterLookup) {
	var allAcidWeights = fullLetterLookup, currentAcid, i, currentWeight;
	for (i = 0; i < acidseq.length; i++) {
		currentAcid = acidseq[i];
		currentWeight = calcWeightPercentage(acidseq, currentAcid);
		allAcidWeights[currentAcid.fullName] = currentWeight;
	}
	return allAcidWeights;
}

//when called, takes a string protein sequence and outputs an object with amino acid weight percentages
function run(sequence){
	var aminoAcids = loadSequence(sequence),oneLetterLookup=createOneLetterLookup(aminoAcidsReference),
	fullLetterLookup = createFullLetterLookup(aminoAcidsReference),
	finalObj=getAllWeightPercentages(aminoAcids);
	return finalObj
}

function calc
/*
 * 
 Might not need these functions
function getUniqueAcids(acidSeq,oneLetterLookup){
	var uniqueAcids=[],i,isUnique;
	for(i=0;i<acidseq.length;i++){
		currentAcid=acidseq[i];
		isUnique=unqueAcids.forEach(isEqual(acid))
		if(!isUnique){
			uniqueAcids.push(currentAcid);
		}
	}
}
function isEqual(acid){
	if(this===acid){
		return true;
	}
	return false;
}
*/
