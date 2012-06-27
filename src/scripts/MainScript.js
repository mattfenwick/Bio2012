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
	
	sequence = noSpaces;
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
function AminoAcid(fullName, threeLett, oneLett, weight){
	this.fullName=fullName;
	this.oneLett=oneLett;
	this.threeLett=threeLett;
	this.weight=weight;
}
var aminoAcidsReference=[new AminoAcid("Alanine","Ala","A",89.09),
new AminoAcid("Cysteine", "Cys","C","121.15"),
new AminoAcid("Aspartic Acid","Asp","D"),
new AminoAcid("Glutamic Acid","Glu","E"),
new AminoAcid("Phenylalanine","Phe","F"),
new AminoAcid("Glycine","Gly","G"),
new AminoAcid("Histidine","His","H"),
new AminoAcid("Isoleucine","Ile","I"),
new AminoAcid("Lysine","Lys","K"),
new AminoAcid("Leucine","Leu","L"),
new AminoAcid("Methionine","Met","M"),
new AminoAcid("Asparagine","Asn","N"),
new AminoAcid("Proline","Pro","P"),
new AminoAcid("Glutamine","Gln","Q"),
new AminoAcid("Arginine","Arg","R"),
new AminoAcid("Serine","Ser","S"),
new AminoAcid("threonine","Thr","T"),
new AminoAcid("Valine","Val","V"),
new AminoAcid("Tryptophan","Trp","W"),
new AminoAcid("Tyrosine","Tyr","Y")];

//Transfers string sequence into an array of amino acids
function loadSequence(seq) {
	
	var i,acids;
	var aminoAcids =[];
	var letterCodes = createOneLetterLookup(aminoAcidsReference);
	for (i = 0; i < seq.length; i++) {
		 acids
		aminoAcids.push(letterCodes[seq[i]]);
	}
	return aminoAcids;
}

function createOneLetterLookup(aminoAcids){
	var i,allLetters={};
	for(i =0; i<aminoAcids.length;i++){
		allLetters[aminoAcids[i].oneLett]=aminoAcids[i];
		
	}
	return allLetters;
}

function getMolecularWeight() {
	var totalWeight = 0,i,acid, indexOfAcid,acidWeight;
	for (i = 0; i < length; i++) {

		 acid = aminoAcids[i];
		 indexOfAcid = 0;
		if (type = 1) {
			indexOfAcid = ArrayOfAminoAcidThreeLett.indexOf(acid);
		} else {
			indexOfAcid = ArrayOfAminoAcidOneLett.indexOf(acid);
		}
	    acidWeight = ArrayOfAminoAcidWeights[indexOfAcid];
		totalWeight += acidWeight;
	}
	return totoalWeight;
}

function calcWeightPercentage(a) {

}

var analyzer = {
	load : loadSequence,
	getWeight : getMolecularWeight,
};
