// Tableau de citations
let citations = [
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
    ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
    ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
    ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
    ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
    ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
    ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
    ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
    ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
    ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
    ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
    ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
    ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
    ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
    ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
    ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
    ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
    ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"],
    ["J'ai appris à être toujour silencieux.","Albert Einstein"],
    ["Chaque fois que je croyais avoir été rejeté pour quelque chose de bon, j’étais tôt ou tard réorienté vers quelque chose de meilleur.","Dr. Steve Maraboli"],
    ["Le rejet est simplement une redirection ; une correction de cours à votre destin.","Bryant McGill"],
    ["Ne perdez jamais votre temps avec des gens qui ne sont pas disponibles à en passer avec vous.","Ian Semple"],
    ["Le temps ne te fait pas perdre tes amis il te fait comprendre qui sont les vrais.",""],
    ["A la fin, nous nous souviendrons non pas des mots de nos ennemis, mais des silences de nos amis.","Martin Luther King"],
    ["Ami de chacun, ami d'aucun.","Proverbe Français"],
    ["Les vrais amis se font rares, donc ton hypocrisie me fait rire.","Ninho"],
    ["Il est extrêmement dangereux d'encourager les gens à se considérer comme exceptionnels, quelle que soit leur motivation.","Vladimir Poutine"],
    ["Comparé à il y a 10 ans, la principale motivation pour la défection est passée de la nourriture à la liberté.","Kim Jong-un"],
    ["La valeur d'un homme ne se mesure pas à son argent, son statut ou ses possessions. La valeur d'un homme réside dans sa personnalité, sa sagesse, sa créativité, son courage, son indépendance et sa maturité.","Mark W. B. Brinton"],
    ["Les faux honnêtes gens sont ceux qui déguisent leurs défauts aux autres et à eux-mêmes. Les vrais honnêtes gens sont ceux qui les connaissent parfaitement et les confessent.","François de La Rochefoucauld"],
    ["Si Amélie préfère vivre dans le rêve et rester une jeune fille introvertie, c'est son droit. Car rater sa vie est un droit inaliénable.","Le Fabuleux Destin D'Amélie Poulain - le narrateur"],
    ["On se trompe en confondant introverti et timide. Un introverti n’a pas peur des autres, c’est quelqu’un qui est incapable de tourner ses sentiments vers l’extérieur, il les renvoie en lui-même. L’introverti est totalement lisse, ne montre aucune émotion. Il veut être plus normal que la normalité."," Valérie Trierweiler"],
    ["Les introvertis sont des malades mentaux en formation, des novices attentifs qui préparent souci par souci leur admission à l'asile psychiatrique.","René Carbonneau"],
    ["la sagesse populaire prétend que l'on apprend davantage de ses défaites que de ses victoires... Je passais toujours plus de temps à réfléchir aux matchs perdus qu'aux matchs gagnés.","Sir Alex Ferguson"],["La nature fait les hommes semblables, la vie les rend differents.","Confucius"]
  ];

let btn = document.getElementById('nouveau');
let citation = document.getElementById('citation');
let auteur = document.getElementById('auteur');
let iterateur = 0;
btn.addEventListener('click',()=>{
    iterateur++;
    for (let i = 0; i < citations.length; i++) {
        if (i==iterateur) {
            citation.innerText=citations[i][0];
            auteur.innerText= citations[i][1];
            
        }if (i==0) {
            citation.innerText=citations[i][0];
            auteur.innerText= citations[i][1];
        }if (iterateur==citations.length) {
            i=0;
            iterateur=0;
        }
    }
});

// // citations.forEach(element => {
// //    for (let index = 0; index < element.length; index++) {
// //         console.log(element[index]);
// //    }
// // });