//http://www.bioinformatics.org/sms/common_new.js	;
var sequence = $("#protein").val();
var aminoAcids = [];
var length = sequence.length; 
var sequenceType = typeOfSequence();
function typeOfSequence()
{
if(sequence.substring(0,1).equals("M"))	
	{
		return 1;
	}

if(sequence.substring(0,4).equals("Met"))	
	{
		return 3;
	}
if(sequence.substring(0,11).equals("Methionine"))	
	{
		return 0;
	}
}

var ArrayOfAminoAcidThreeLett=["Ala","Cys","Asp","Glu","Phe","Gly",
                               "His","Ile","Lys","Leu","Met","Asn","Pro","Gln","Arg","Ser","Thr","Val","Trp","Tyr","End"];
var ArrayOfAminoAcidOneLett=["A","C","D","E","F","G","H","I","K","L","M","N","P","Q","R","S","T","V","W","Y","Z"];

var ArrayOfAminoAcids = ["Alanine","Cysteine","Glutamine","Phenylalinine","Glycine","Histidine","Isoleucine",
                         "Lysine","Leucine","Methionine","Asparagine","Proline","Glutamine","Arginine","Serine",
                         		"Threonine","Valine","Tryptophan","Tryosine","End"];
var ArrayOfAminoWeights = [89.09,121.15,133.10,147.15,165.19,75.07,155.16,131.17,146.19,131.17,
                           149.21,132.12,115.13,1146.15,174.20,105.09,119.12,117.15,204.23,101.19,146.64];

function loadSequence()
{
	for(var i=0; i<length;i++)
	{
		var acids = sequence.substring(i,i+1);
		aminoAcids[i] = acids;
	}
}
function getMolecularWeight()
{
	var totalWeight =0;
	for(var i=0;i<length;i++)
		{
			
			var acid = aminoAcids[i];
			var indexOfAcid =0;
			if(type = 1)
				{
					 indexOfAcid = ArrayOfAminoAcidThreeLett.indexOf(acid);
				}
			else
			{
				 indexOfAcid = ArrayOfAminoAcidOneLett.indexOf(acid);
			}
			var acidWeight = ArrayOfAminoAcidWeights[indexOfAcid];
			totalWeight+=acidWeight;
		}
	return totoalWeight;
	
}
function calcPercentage(a)
{
	
}
var analyzer ={load:loadSequence(),getWeight:getMolecularWeight,};
