var count = [1];
var guessArray = [];
var randomNumber=Math.floor(Math.random()*100)+1;
$("#hint").bind('click', function(){
  	$("#hint").text("TRY #" + randomNumber).css("color", "#000000").css("background-color", "yellow");});

function main(argument) {
	$("#hot").css("text-shadow","none");
	$("#cold").css("-webkit-animation","none");
	$("#higher").animate({top: "0px",}, "slow" );
	$("#lower").animate({top: "0px",}, "slow" );
  $("#repeat").css("visibility", "hidden");
  if (guessArray.length > 0) { 
    for (var i = 0; i<guessArray.length; i++) {
      if (guessArray[i] === argument) {
        $("#repeat").css("visibility", "visible");
      };
    };
  };
  guessArray.push(argument);
	if (count[0] === 1) {
    if (Math.abs(randomNumber - argument)<5) {
		$("#g-one").text(argument).css("background-color", "#ff2600");}
    else 
    $("#g-one").text(argument).css("background-color", "#B0E0E6").css("color", "#000000");}
	else if (count[0] === 2) {
		if (Math.abs(randomNumber - argument)<5) {
    $("#g-two").text(argument).css("background-color", "#ff2600");}
    else 
    $("#g-two").text(argument).css("background-color", "#B0E0E6").css("color", "#000000");}
	else if (count[0] === 3) {
		if (Math.abs(randomNumber - argument)<5) {
    $("#g-three").text(argument).css("background-color", "#ff2600");}
    else 
    $("#g-three").text(argument).css("background-color", "#B0E0E6").css("color", "#000000");}
	else if (count[0] === 4) {
		if (Math.abs(randomNumber - argument)<5) {
    $("#g-four").text(argument).css("background-color", "#ff2600");}
    else 
    $("#g-four").text(argument).css("background-color", "#B0E0E6").css("color", "#000000");}
	else if (count[0] === 5) {
		if (Math.abs(randomNumber - argument)<5) {
    $("#g-five").text(argument).css("background-color", "#ff2600");}
    else 
    $("#g-five").text(argument).css("background-color", "#B0E0E6").css("color", "#000000");}
	else if (count[0] === 6) {
		if (Math.abs(randomNumber - argument)<5) {
    $("#g-six").text(argument).css("background-color", "#ff2600");}
    else 
    $("#g-six").text(argument).css("background-color", "#B0E0E6").css("color", "#000000");}
	else if (count[0] === 7) {
		if (Math.abs(randomNumber - argument)<5) {
    $("#g-seven").text(argument).css("background-color", "#ff2600");}
    else 
    $("#g-seven").text(argument).css("background-color", "#B0E0E6").css("color", "#000000");}
	else if (count[0] === 8) {
		if (Math.abs(randomNumber - argument)<5) {
    $("#g-eight").text(argument).css("background-color", "#ff2600");}
    else 
    $("#g-eight").text(argument).css("background-color", "#B0E0E6").css("color", "#000000");}
	else if (count[0] === 9) {
		if (Math.abs(randomNumber - argument)<5) {
    $("#g-nine").text(argument).css("background-color", "#ff2600");}
    else 
    $("#g-nine").text(argument).css("background-color", "#B0E0E6").css("color", "#000000");}
	else 
		$("#g-ten").text(argument).css("background-color", "#000000");
	if (randomNumber != argument) {
		count[0] = count[0] + 1;
		if (Math.abs(randomNumber - argument)<5) {
			$("#hot").css("text-shadow","0 0 4px #ffffff, 0 -5px 4px #FFFF33, 2px -10px 6px #FFDD33, -2px -15px 11px #FF8800, 2px -25px 18px #FF2200");}
		else 
			$("#cold").css("-webkit-animation","wiggle 0.2s ease infinite");
		if (randomNumber > argument) {
			$("#higher").animate({top: "-100px",}, "slow" );}
		else 
			$("#lower").animate({top: "180px",}, "slow" );
		if (count[0] === 11) {
			$("#loser").css("visibility", "visible");
		} 
	}
	else 
		$("#winner").css("visibility", "visible");
};	


$("#one").bind('click', function(){
  main("1");});
$("#two").bind('click', function(){
  main("2");});
$("#three").bind('click', function(){
  main("3");});
$("#four").bind('click', function(){
  main("4");});
$("#five").bind('click', function(){
  main("5");});
$("#six").bind('click', function(){
  main("6");});
$("#seven").bind('click', function(){
  main("7");});
$("#eight").bind('click', function(){
  main("8");});
$("#nine").bind('click', function(){
  main("9");});
$("#ten").bind('click', function(){
  main("10");});
$("#eleven").bind('click', function(){
  main("11");});
$("#twelve").bind('click', function(){
  main("12");});
$("#thirteen").bind('click', function(){
  main("13");});
$("#fourteen").bind('click', function(){
  main("14");});
$("#fifteen").bind('click', function(){
  main("15");});
$("#sixteen").bind('click', function(){
  main("16");});
$("#seventeen").bind('click', function(){
  main("17");});
$("#eighteen").bind('click', function(){
  main("18");});
$("#nineteen").bind('click', function(){
  main("19");});
$("#twenty").bind('click', function(){
  main("20");});
$("#twentyone").bind('click', function(){
  main("21");});
$("#twentytwo").bind('click', function(){
  main("22");});
$("#twentythree").bind('click', function(){
  main("23");});
$("#twentyfour").bind('click', function(){
  main("24");});
$("#twentyfive").bind('click', function(){
  main("25");});
$("#twentysix").bind('click', function(){
  main("26");});
$("#twentyseven").bind('click', function(){
  main("27");});
$("#twentyeight").bind('click', function(){
  main("28");});
$("#twentynine").bind('click', function(){
  main("29");});
$("#thirty").bind('click', function(){
  main("30");});
$("#thirtyone").bind('click', function(){
  main("31");});
$("#thirtytwo").bind('click', function(){
  main("32");});
$("#thirtythree").bind('click', function(){
  main("33");});
$("#thirtyfour").bind('click', function(){
  main("34");});
$("#thirtyfive").bind('click', function(){
  main("35");});
$("#thirtysix").bind('click', function(){
  main("36");});
$("#thirtyseven").bind('click', function(){
  main("37");});
$("#thirtyeight").bind('click', function(){
  main("38");});
$("#thirtynine").bind('click', function(){
  main("39");});
$("#forty").bind('click', function(){
  main("40");});
$("#fortyone").bind('click', function(){
  main("41");});
$("#fortytwo").bind('click', function(){
  main("42");});
$("#fortythree").bind('click', function(){
  main("43");});
$("#fortyfour").bind('click', function(){
  main("44");});
$("#fortyfive").bind('click', function(){
  main("45");});
$("#fortysix").bind('click', function(){
  main("46");});
$("#fortyseven").bind('click', function(){
  main("47");});
$("#fortyeight").bind('click', function(){
  main("48");});
$("#fortynine").bind('click', function(){
  main("49");});
$("#fifty").bind('click', function(){
  main("50");});
$("#fiftyone").bind('click', function(){
  main("51");});
$("#fiftytwo").bind('click', function(){
  main("52");});
$("#fiftythree").bind('click', function(){
  main("53");});
$("#fiftyfour").bind('click', function(){
  main("54");});
$("#fiftyfive").bind('click', function(){
  main("55");});
$("#fiftysix").bind('click', function(){
  main("56");});
$("#fiftyseven").bind('click', function(){
  main("57");});
$("#fiftyeight").bind('click', function(){
  main("58");});
$("#fiftynine").bind('click', function(){
  main("59");});
$("#sixty").bind('click', function(){
  main("60");});
$("#sixtyone").bind('click', function(){
  main("61");});
$("#sixtytwo").bind('click', function(){
  main("62");});
$("#sixtythree").bind('click', function(){
  main("63");});
$("#sixtyfour").bind('click', function(){
  main("64");});
$("#sixtyfive").bind('click', function(){
  main("65");});
$("#sixtysix").bind('click', function(){
  main("66");});
$("#sixtyseven").bind('click', function(){
  main("67");});
$("#sixtyeight").bind('click', function(){
  main("68");});
$("#sixtynine").bind('click', function(){
  main("69");});
$("#seventy").bind('click', function(){
  main("70");});
$("#seventyone").bind('click', function(){
  main("71");});
$("#seventytwo").bind('click', function(){
  main("72");});
$("#seventythree").bind('click', function(){
  main("73");});
$("#seventyfour").bind('click', function(){
  main("74");});
$("#seventyfive").bind('click', function(){
  main("75");});
$("#seventysix").bind('click', function(){
  main("76");});
$("#seventyseven").bind('click', function(){
  main("77");});
$("#seventyeight").bind('click', function(){
  main("78");});
$("#seventynine").bind('click', function(){
  main("79");});
$("#eighty").bind('click', function(){
  main("80");});
$("#eightyone").bind('click', function(){
  main("81");});
$("#eightytwo").bind('click', function(){
  main("82");});
$("#eightythree").bind('click', function(){
  main("83");});
$("#eightyfour").bind('click', function(){
  main("84");});
$("#eightyfive").bind('click', function(){
  main("85");});
$("#eightysix").bind('click', function(){
  main("86");});
$("#eightyseven").bind('click', function(){
  main("87");});
$("#eightyeight").bind('click', function(){
  main("88");});
$("#eightynine").bind('click', function(){
  main("89");});
$("#ninety").bind('click', function(){
  main("90");});
$("#ninetyone").bind('click', function(){
  main("91");});
$("#ninetytwo").bind('click', function(){
  main("92");});
$("#ninetythree").bind('click', function(){
  main("93");});
$("#ninetyfour").bind('click', function(){
  main("94");});
$("#ninetyfive").bind('click', function(){
  main("95");});
$("#ninetysix").bind('click', function(){
  main("96");});
$("#ninetyseven").bind('click', function(){
  main("97");});
$("#ninetyeight").bind('click', function(){
  main("98");});
$("#ninetynine").bind('click', function(){
  main("99");});
$("#hundred").bind('click', function(){
  main("100");});
