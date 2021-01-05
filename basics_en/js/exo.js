var titre = new Array();
var conseil = new Array();
var exo = new Array();
var conseils = new Array();
var lettres = new Array();

titre[0]=[];
titre[1]=[];
lettres[0]=[];
lettres[1]=[];
exo[0]=[];
exo[1]=[];

/*
bepo v1.0 => index=0
bepo v1.1 => index=1
ex: 
exo[index_bepo][num_exercice]
*/

conseils[0]="";
conseils[1]="";
conseils[2]="";
conseils[3]="";
conseils[4]="";
conseils[5]="";
conseils[6]="";
conseils[7]="";
conseils[8]="";


  titre[0][0]="30 Consonants of the Tibetan alphabet";
  titre[1][0]=titre[0][0];
lettres[0][0]="";
lettres[1][0]=lettres[0][0];
    exo[0][0]="ཀ ཁ ག ང ཀ ཁ ག ང###ཅ ཆ ཇ ཉ ཅ ཆ ཇ ཉ###ཏ ཐ ད ན ཏ ཐ ད ན###པ ཕ བ མ པ ཕ བ མ###ཙ ཚ ཛ ཝ ཙ ཚ ཛ ཝ###ཞ ཟ འ ཡ ཞ ཟ འ ཡ###ར ལ ཤ ས ར ལ ཤ ས###ཧ ཨ ཧ ཨ";
    exo[1][0]=exo[0][0];

conseil[0]=0;

  titre[0][1]="Superscripts";
  titre[1][1]=titre[0][1];
lettres[0][1]="";
lettres[1][1]=lettres[0][1];
    exo[0][1]="རྐ རྒ རྔ རྗ རྙ རྟ རྡ རྦ རྨ རྩ རྫ###ལྐ ལྒ ལྔ ལྕ ལྗ ལྟ ལྡ ལྤ ལྦ ལྷ###སྐ སྒ སྔ སྙ སྟ སྡ སྣ སྤ སྦ སྨ སྩ";
    exo[1][1]=exo[0][1];

conseil[1]=0;

  titre[0][2]="Subscripts";
  titre[1][2]=titre[0][2];
lettres[0][2]="urUR";
lettres[1][2]=lettres[0][2];
    exo[0][2]="ཀྱ ཁྱ གྱ པྱ ཕྱ བྱ མྱ###ཀྲ ཁྲ གྲ ཏྲ ཐྲ དྲ པྲ ཕྲ བྲ སྲ ཧྲ###ཀླ གླ བླ ཟླ རླ སླ";
    exo[1][2]=exo[0][2];

conseil[2]=0;

  titre[0][3]="Stack of 3 letters";
  titre[1][3]=titre[0][3];
lettres[0][3]="";
lettres[1][3]=lettres[0][3];
    exo[0][3]="རྐྱ རྒྱ རྨྱ###སྐྱ སྒྱ སྤྱ སྦྱ སྨྱ སྐྲ སྒྲ སྤྲ སྦྲ སྨྲ###སྣྲ";
    exo[1][3]=exo[0][3];

conseil[3]=0;

  titre[0][4]="Prefixes on simple letters";
  titre[1][4]=titre[0][1];
lettres[0][4]="";
lettres[1][4]=lettres[0][4];
    exo[0][4]="གཅ གཉ གཏ གད གན གཙ གཞ གཟ གཡ གཤ གས###དཀ དག དང དཔ དབ དམ###བཀ བག བཅ བཏ བད བཙ བཞ བཟ བཤ བས###མཁ མག མང མཆ མཇ མཉ མཐ མད མན མཚ མཛ###འཁ འག འཆ འཇ འཐ འད འཕ འབ འཚ འཛ";
    exo[1][4]=exo[0][4];

conseil[4]=0;

  titre[0][5]="Prefixes on stacks";
  titre[1][5]=titre[0][5];
lettres[0][5]="";
lettres[1][5]=lettres[0][5];
    exo[0][5]="བརྐ བརྒ བརྔ བརྗ བརྙ བརྟ བརྡ བརྣ བརྩ བརྫ###བལྟ བལྡ###བསྐ བསྒ བསྔ བསྙ བསྟ བསྡ བསྣ བསྩ###བཀྱ བགྱ###བཀྲ བགྲ བསྲ###བཀླ བཟླ བརླ བསླ###བརྐྱ བརྒྱ བསྐྱ བསྒྱ###བསྐྲ བསྒྲ###མཁྱ མགྱ###མཁྲ མགྲ###འཁྱ འགྱ འཕྱ འཔྱ###འཁྲ འགྲ འདྲ འཕྲ འབྲ";
    exo[1][5]=exo[0][5];

conseil[5]=0;

  titre[0][6]="Vowels";
  titre[1][6]=titre[0][6];
lettres[0][6]="";
lettres[1][6]=lettres[0][6];
    exo[0][6]="ཀི ཁུ གེ ངོ###ཅི ཆུ ཇེ ཉོ###ཏི ཐུ དེ ནོ###པི ཕུ བེ མོ###ཙི ཚུ ཛེ ཝོ###ཞི ཟུ འེ ཡོ###རི ལུ ཤེ སོ###ཧི ཨུ";
    exo[1][6]=exo[0][6];

conseil[6]=0;

  titre[0][7]="Suffixes, vowels+suffixes";
  titre[1][7]=titre[0][7];
lettres[0][7]="";
lettres[1][7]=lettres[0][7];
    exo[0][7]="ཀག ཀང ཀད ཀན ཀབ ཀམ བཀའ ཀར ཀལ ཀས###ཀིག ཀུང ཀེད ཀོན ཀིབ ཀུམ ཀེ ཀོར ཀིལ ཀུས###ཅག ཅང ཅད ཅན ཅབ ཅམ བཅའ ཅར ཅལ ཅས###ཅིག ཅུང ཅེད ཅོན ཅིབ ཅུམ བཅེ ཅོར ཅིལ ཅུས";
    exo[1][7]=exo[0][7];

conseil[7]=0;

  titre[0][8]="Wazur";
  titre[1][8]=titre[0][8];
lettres[0][8]="";
lettres[1][8]=lettres[0][8];
    exo[0][8]="ཀྭ ཁྭ གྭ ཉྭ###དྭ ཚྭ ཞྭ ཟྭ###རྭ ལྭ ཤྭ ཧྭ###གྲྭ ཕྱྭ རྩྭ";
    exo[1][8]=exo[0][8];

conseil[8]=0;

  titre[0][9]="Short text sample with tsek.";
  titre[1][9]=titre[0][9];
lettres[0][9]="";
lettres[1][9]=lettres[0][9];
    exo[0][9]="སངས་ རྒྱས་ ཆོས་ དང་###ཚོགས་ ཀྱི་ མཆོག་ རྣམས་ ལ་###བྱང་ ཆུབ་ བར་ དུ་###བདག་ ནི་ སྐྱབས་ སུ་ མཆི་###བདག་ གིས་ བྱིན་ སོགས་###གྱིས་ པའི་ བསོད་ ནམས་ ཀྱིས་###འགྲོ་ ལ་ ཕན་ ཕྱིར་###སངས་ རྒྱས་ འགྲུབ་ པར་ ཤོག་";
    exo[1][9]=exo[0][9];

conseil[9]=0;
