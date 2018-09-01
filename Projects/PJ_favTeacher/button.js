// JavaScript Docuent
//Font color is 859CE5

function reset() {
	//header show
	document.querySelector("#headerName").style.display = "block";
	document.querySelector("#quote").style.display = "block";
	//bio none
	document.querySelector("#bioSection").style.display = "none";
	document.querySelector("#bioSectParagraph").style.display = "none";
	document.querySelector("#bio").style.color = "#859CE5";
	document.querySelector("#selectOne").style.transition = "translateY(0px)";
	//impact none
	document.querySelector("#impactSection").style.display = "none";
	document.querySelector("#impactSectionParagraph").style.display = "none";
	document.querySelector("#impact").style.color = "#859CE5";
	document.querySelector("#selectOne").style.transition = "translateY(0px)";
	//career none
	document.querySelector("#careerSection").style.display = "none";
	document.querySelector("#careerSectParagraph").style.display = "none";
	document.querySelector("#career").style.color = "#859CE5";
	document.querySelector("#selectOne").style.transition = "translateY(0px)";
}

function bio() {
	//Bio Show
	document.querySelector("#bioSection").style.display = "block";
	document.querySelector("#bioSectParagraph").style.display = "block";
	document.querySelector("#bio").style.color = "#fff";
	document.querySelector("#selectOne").style.transition = "translateY(-10px)";
	//Header none
	document.querySelector("#headerName").style.display = "none";
	document.querySelector("#quote").style.display = "none";
	//Impact none
	document.querySelector("#impactSection").style.display = "none";
	document.querySelector("#impactSectionParagraph").style.display = "none";
	document.querySelector("#impact").style.color = "#859CE5";
	document.querySelector("#selectOne").style.transition = "translateY(0px)";
	//Career None
	document.querySelector("#careerSection").style.display = "none";
	document.querySelector("#careerSectParagraph").style.display = "none";
	document.querySelector("#career").style.color = "#859CE5";
	document.querySelector("#selectOne").style.transition = "translateY(0px)";
}

function career() {
	//Career Show
	document.querySelector("#careerSection").style.display = "block";
	document.querySelector("#careerSectParagraph").style.display = "block";
	document.querySelector("#career").style.color = "#fff";
	document.querySelector("#selectOne").style.transition = "translateY(-10px)";
	//Header none
	document.querySelector("#headerName").style.display = "none";
	document.querySelector("#quote").style.display = "none";
	//Impact none
	document.querySelector("#impactSection").style.display = "none";
	document.querySelector("#impactSectionParagraph").style.display = "none";
	document.querySelector("#impact").style.color = "#859CE5";
	document.querySelector("#selectOne").style.transition = "translateY(0px)";
	//Bio none
	document.querySelector("#bioSection").style.display = "none";
	document.querySelector("#bioSectParagraph").style.display = "none";
	document.querySelector("#bio").style.color = "#859CE5";
	document.querySelector("#selectOne").style.transition = "translateY(0px)";
}

function impact() {
	//Impact none
	document.querySelector("#impactSection").style.display = "block";
	document.querySelector("#impactSectionParagraph").style.display = "block";
	document.querySelector("#impact").style.color = "#fff";
	document.querySelector("#selectOne").style.transition = "translateY(-10px)";
	//Header none
	document.querySelector("#headerName").style.display = "none";
	document.querySelector("#quote").style.display = "none";
	//Bio none
	document.querySelector("#bioSection").style.display = "none";
	document.querySelector("#bioSectParagraph").style.display = "none";
	document.querySelector("#bio").style.color = "#859CE5";
	document.querySelector("#selectOne").style.transition = "translateY(0px)";
	//Career none
	document.querySelector("#careerSection").style.display = "none";
	document.querySelector("#careerSectParagraph").style.display = "none";
	document.querySelector("#career").style.color = "#859CE5";
	document.querySelector("#selectOne").style.transition = "translateY(0px)";
}

/*End if you didn't notice*/