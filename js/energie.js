
function Energiebedarf(form,gew)
{
form.T5.value = 1440-form.T4.value-form.T6.value-form.T7.value-form.T8.value-form.T9.value-form.T10.value-form.T11.value-form.T12.value;

if(form.R1[1].checked)
{gu = 297.9*Math.pow(gew,0.75)
*(1+0.004*(30-form.alter.value)+0.010*(form.groesse.value/Math.pow(gew,0.333333333)-43.4));
} else
{gu = 275.3*Math.pow(gew,0.75)
*(1+0.004*(30-form.alter.value)+0.018*(form.groesse.value/Math.pow(gew,0.333333333)-42.1));
}
form.T1.value = parseInt(gu);
lu = (form.T5.value/60*2+form.T6.value/60*4+form.T7.value/60*8+form.T8.value/60*12+form.T9.value/60*25+form.T10.value/60*30+form.T11.value/60*45+form.T12.value/60*57)*gew;
eu = (gu+lu)*1.06;
}

function Zuordnen(form)
{Energiebedarf(form,form.gewicht.value);
form.T2.value = parseInt(lu);
form.T3.value = parseInt(eu);
form.T13.value = parseInt(eu/4.18);

ng=form.groesse.value-100;
ug=form.gewicht.value-ng;

if(ug>=0){s32 = " % über ";
} else
{s32 = " % unter ";
}

s2 = "Mit "+form.gewicht.value+" kg liegen Sie "+parseInt(ug*100/ng)+s32+" Ihrem Normalgewicht von "+ng+" kg. Das Normalgewicht berechnet sich aus der Körpergröße in cm minus 100. Heute verwendet man jedoch für die Beurteilung des Körpergewichtes den BMI (Body Mass Index). Er beträgt bei Ihnen: "+parseInt(form.gewicht.value/(form.groesse.value/100 * form.groesse.value/100))+". Der BMI wird berechnet aus dem Körpergewicht in kg durch das Quadrat der Größe in Meter. Der optimale BMI ist vom Alter abhängig, im allgemeinen wird aber ein BMI unter 18.5 als Untergewicht, ein BMI über 25 als leichtes und ein BMI über 30 als schweres Übergewicht bezeichnet. ";
s3 = "Wichtiger für die Beurteilung von Normal- und Übergewicht ist allerdings die Verteilung des Fettgewebes. Die negative Wirkung des Übergewichtes wird vor allem durch die Fettpolster am Bauch bestimmt. ";
s4 = "An anderer Stelle ist das Vorhandensein von Fettgewebe von weit geringerer Bedeutung. ";
Energiebedarf(form,form.gewicht.value);
if(form.R1[0].checked) {s20 = " jährige Frau "; } else {s20 = " jähriger Mann ";}
s5 = "Als "+form.alter.value+s20+"kann man aus ihren eingegebenen Daten etwa einen Energiebedarf von "+form.T3.value+" kJ/Tag berechnen. ";
s6 = ""; s7 = ""; s8 = ""; s9 = ""; 
if ((form.gewicht.value*100/ng)>110) {
k = 1; d1 = form.gewicht.value;
while((d1 > ng)&&(k < 500))
{Energiebedarf(form,d1);

/*
if(form.R1[1].checked)
{gu1 = 297.9*Math.pow(gew,0.75)
*(1+0.004*(30-form.alter.value)+0.010*(form.groesse.value/Math.pow(gew,0.333333333)-43.4));
} else
{gu1 = 275.3*Math.pow(gew,0.75)
*(1+0.004*(30-form.alter.value)+0.018*(form.groesse.value/Math.pow(gew,0.333333333)-42.1));
}
lu1 = (form.T5.value/60*2+form.T6.value/60*4+form.T7.value/60*8+form.T8.value/60*12+form.T9.value/60*25+form.T10.value/60*30+form.T11.value/60*45+form.T12.value/60*57)*d1;
eu1 = (gu1+lu1)*1.06;
*/

d1 = d1-(eu-4200)/29310; k = k+1;
}
s6 = " Wenn Sie eine Diät mit 4200 kJ pro Tag (1000 kcal) durchführen, könnten Sie in etwa "+parseInt(k/7+1)+" Wochen Ihr Normalgewicht erreichen. ";
s7 = "Sie hätten mit diesem Gewicht ("+parseInt(d1)+" kg) dann noch einen Energiebedarf von ungefähr "+parseInt((gu+lu)*1.06);
s8 = "kJ/Tag. Da der Grundumsatz jedoch häufig stärker absinkt als erwartet und es individuelle Unterschiede gibt, ";
s9 = "sollten diese Werte nur als Anhaltspunkte dienen.";
Energiebedarf(form,form.gewicht.value);
}
form.S1.value = s2+s3+s4+s5+s6+s7+s8+s9; }





