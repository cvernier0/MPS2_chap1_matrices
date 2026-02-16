var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "al1-recap_chap2_matrices-3",
  "level": "1",
  "url": "al1-recap_chap2_matrices-3.html",
  "type": "Section",
  "number": "1",
  "title": "— Testez vos réflexes",
  "body": " Testez vos réflexes   Vrai ou faux ?    Si sont deux matrices diagonales, alors et commutent:     C'est vrai !  Soient deux matrices diagonales, alors   donc       Si est une matrice carrée, et une matrice diagonale, alors et commutent, autrement dit .    C'est faux !  Par exemple, si on prend   alors   Plus généralement, on peut remarquer que, si on prend une matrice carrée et une matrice diagonale génériques   on a en fait   la première colonne de est multipliée par , la deuxième par , etc...  tandis que   la première ligne de est multipliée par , la deuxième par , etc...  Donc, pour qu'on ait quelle que soit la matrice , il faut en fait que , autrement dit que .      Pour toutes matrices , si alors .    C'est vrai!  Preuve 1: par contraposée  Supposons que , alors , donc .  Preuve 2: directement  Supposons que , alors et doivent avoir (au moins) un coefficient différent: autrement dit, il existe tels que   or le -ième coefficient de est , le -ième coefficient de est , donc les -ièmes coefficients de et sont différents, donc ces deux matrices sont différentes.      Pour toutes matrices , si alors .    C'est vrai!  On peut le montrer par contraposée  Supposons que , alors , autrement dit .      Pour toutes matrices , si alors .    Cette fois, c'est faux: deux matrices différentes peuvent avoir la même trace.  Par exemple, si on prend   alors mais   la trace ne \"voit\" que la diagonale, donc si les matrices diffèrent sur un coefficient qui n'est pas sur la diagonale, elles peuvent tout de même avoir la même trace.      Pour toutes matrices , s'il existe tel que (autrement dit si et ont au moins un coefficient diagonal différent) alors .    Ca aussi c'est faux: deux matrices peuvent avoir la même trace même si elles ont des diagonales différentes  Par exemple, si on prend   alors       Si sont deux matrices inversibles telles que alors, pour toute matrice , on a .    C'est faux : par exemple si on prend   alors   Et de manière générale, quelles que soient , égales ou non,   (où est la matrice nulle)      Si sont deux matrices inversibles telles que alors, pour toute matrice non nulle  , on a .    C'est faux : par exemple si on prend   alors       Pour toutes matrices , si m> alors, pour toute matrice inversible , on a .    Cette fois c'est vrai: on peut le montrer par contraposée.  Soient , supposons qu'il existe une matrice inversible telle que .  En multipliant cette égalité par l'inverse m> de , on trouve       Soit une matrice inversible. Alors, pour tout réel , la matrice est inversible et son inverse est     Faux: Si alors est la matrice nulle. Or celle-ci n'est pas inversible (pourquoi, au fait ?).      Soit une matrice inversible. Alors, pour tout réel non nul  , la matrice est inversible et son inverse est     Encore faux: Prenons par exemple   alors et sont inversibles, et par la formule de l'inverse pour les matrices 2x2 on a   donc .      Soit une matrice inversible. Alors, pour tout réel non nul , la matrice est inversible et son inverse est     Cette fois c'est vrai: Soit une matrice inversible, , alors   et   donc est inversible, et son inverse est bien .  Remarque: Par contre,   donc, sauf si , l'inverse de n'est pas !     "
},
{
  "id": "al1-recap_chap2_matrices-3-2-2",
  "level": "2",
  "url": "al1-recap_chap2_matrices-3.html#al1-recap_chap2_matrices-3-2-2",
  "type": "Exercise",
  "number": "1.1",
  "title": "",
  "body": "  Si sont deux matrices diagonales, alors et commutent:     C'est vrai !  Soient deux matrices diagonales, alors   donc    "
},
{
  "id": "al1-recap_chap2_matrices-3-2-3",
  "level": "2",
  "url": "al1-recap_chap2_matrices-3.html#al1-recap_chap2_matrices-3-2-3",
  "type": "Exercise",
  "number": "1.2",
  "title": "",
  "body": "  Si est une matrice carrée, et une matrice diagonale, alors et commutent, autrement dit .    C'est faux !  Par exemple, si on prend   alors   Plus généralement, on peut remarquer que, si on prend une matrice carrée et une matrice diagonale génériques   on a en fait   la première colonne de est multipliée par , la deuxième par , etc...  tandis que   la première ligne de est multipliée par , la deuxième par , etc...  Donc, pour qu'on ait quelle que soit la matrice , il faut en fait que , autrement dit que .   "
},
{
  "id": "al1-recap_chap2_matrices-3-2-4",
  "level": "2",
  "url": "al1-recap_chap2_matrices-3.html#al1-recap_chap2_matrices-3-2-4",
  "type": "Exercise",
  "number": "1.3",
  "title": "",
  "body": "  Pour toutes matrices , si alors .    C'est vrai!  Preuve 1: par contraposée  Supposons que , alors , donc .  Preuve 2: directement  Supposons que , alors et doivent avoir (au moins) un coefficient différent: autrement dit, il existe tels que   or le -ième coefficient de est , le -ième coefficient de est , donc les -ièmes coefficients de et sont différents, donc ces deux matrices sont différentes.   "
},
{
  "id": "al1-recap_chap2_matrices-3-2-5",
  "level": "2",
  "url": "al1-recap_chap2_matrices-3.html#al1-recap_chap2_matrices-3-2-5",
  "type": "Exercise",
  "number": "1.4",
  "title": "",
  "body": "  Pour toutes matrices , si alors .    C'est vrai!  On peut le montrer par contraposée  Supposons que , alors , autrement dit .   "
},
{
  "id": "al1-recap_chap2_matrices-3-2-6",
  "level": "2",
  "url": "al1-recap_chap2_matrices-3.html#al1-recap_chap2_matrices-3-2-6",
  "type": "Exercise",
  "number": "1.5",
  "title": "",
  "body": "  Pour toutes matrices , si alors .    Cette fois, c'est faux: deux matrices différentes peuvent avoir la même trace.  Par exemple, si on prend   alors mais   la trace ne \"voit\" que la diagonale, donc si les matrices diffèrent sur un coefficient qui n'est pas sur la diagonale, elles peuvent tout de même avoir la même trace.   "
},
{
  "id": "al1-recap_chap2_matrices-3-2-7",
  "level": "2",
  "url": "al1-recap_chap2_matrices-3.html#al1-recap_chap2_matrices-3-2-7",
  "type": "Exercise",
  "number": "1.6",
  "title": "",
  "body": "  Pour toutes matrices , s'il existe tel que (autrement dit si et ont au moins un coefficient diagonal différent) alors .    Ca aussi c'est faux: deux matrices peuvent avoir la même trace même si elles ont des diagonales différentes  Par exemple, si on prend   alors    "
},
{
  "id": "al1-recap_chap2_matrices-3-2-8",
  "level": "2",
  "url": "al1-recap_chap2_matrices-3.html#al1-recap_chap2_matrices-3-2-8",
  "type": "Exercise",
  "number": "1.7",
  "title": "",
  "body": "  Si sont deux matrices inversibles telles que alors, pour toute matrice , on a .    C'est faux : par exemple si on prend   alors   Et de manière générale, quelles que soient , égales ou non,   (où est la matrice nulle)   "
},
{
  "id": "al1-recap_chap2_matrices-3-2-9",
  "level": "2",
  "url": "al1-recap_chap2_matrices-3.html#al1-recap_chap2_matrices-3-2-9",
  "type": "Exercise",
  "number": "1.8",
  "title": "",
  "body": "  Si sont deux matrices inversibles telles que alors, pour toute matrice non nulle  , on a .    C'est faux : par exemple si on prend   alors    "
},
{
  "id": "al1-recap_chap2_matrices-3-2-10",
  "level": "2",
  "url": "al1-recap_chap2_matrices-3.html#al1-recap_chap2_matrices-3-2-10",
  "type": "Exercise",
  "number": "1.9",
  "title": "",
  "body": "  Pour toutes matrices , si m> alors, pour toute matrice inversible , on a .    Cette fois c'est vrai: on peut le montrer par contraposée.  Soient , supposons qu'il existe une matrice inversible telle que .  En multipliant cette égalité par l'inverse m> de , on trouve    "
},
{
  "id": "al1-recap_chap2_matrices-3-2-11",
  "level": "2",
  "url": "al1-recap_chap2_matrices-3.html#al1-recap_chap2_matrices-3-2-11",
  "type": "Exercise",
  "number": "1.10",
  "title": "",
  "body": "  Soit une matrice inversible. Alors, pour tout réel , la matrice est inversible et son inverse est     Faux: Si alors est la matrice nulle. Or celle-ci n'est pas inversible (pourquoi, au fait ?).   "
},
{
  "id": "al1-recap_chap2_matrices-3-2-12",
  "level": "2",
  "url": "al1-recap_chap2_matrices-3.html#al1-recap_chap2_matrices-3-2-12",
  "type": "Exercise",
  "number": "1.11",
  "title": "",
  "body": "  Soit une matrice inversible. Alors, pour tout réel non nul  , la matrice est inversible et son inverse est     Encore faux: Prenons par exemple   alors et sont inversibles, et par la formule de l'inverse pour les matrices 2x2 on a   donc .   "
},
{
  "id": "al1-recap_chap2_matrices-3-2-13",
  "level": "2",
  "url": "al1-recap_chap2_matrices-3.html#al1-recap_chap2_matrices-3-2-13",
  "type": "Exercise",
  "number": "1.12",
  "title": "",
  "body": "  Soit une matrice inversible. Alors, pour tout réel non nul , la matrice est inversible et son inverse est     Cette fois c'est vrai: Soit une matrice inversible, , alors   et   donc est inversible, et son inverse est bien .  Remarque: Par contre,   donc, sauf si , l'inverse de n'est pas !   "
},
{
  "id": "al1-recap_chap2_matrices-4",
  "level": "1",
  "url": "al1-recap_chap2_matrices-4.html",
  "type": "Section",
  "number": "2",
  "title": "— Entraînez-vous !",
  "body": " Entraînez-vous !     Opérations sur les matrices   Supposons qu'on ait 5 matrices de tailles respectives données ci-dessous:     A  B  C  D  E           Si les opérations ci-dessous sont réalisables, indiquer la taille de la matrice obtenue, par exemple , sinon indiquer                      C'est ça !        C'est ça !        C'est ça !  est de taille donc est de taille . Et      C'est ça !   est de taille donc est de taille .  aussi, donc est définie, et est de taille .  Enfin, est de taille donc est de taille .  Enfin, pour le produit de par ,      C'est ça !   est de taille , donc aussi.  est de taille , donc pas de la même taille que .  Donc la somme n'est pas définie.     C'est ça !   est de taille , donc est de taille , tout comme .  Donc la somme est définie, et est de taille .  est de taille donc est de taille .  Et pour le produit de par ,      C'est ça !   Pour le produit , on a   est de taille donc est de taille .  est de taille donc est de taille .  Donc le produit donne   Donc et sont définis, mais pas de même taille, et donc leur somme n'est pas définie.    C'est ça !   est de taille donc est de taille .  Donc le produit donne   est de taille , donc est de taille .  Donc le produit donne   est de même taille que , donc on peut les sommer, et est de taille .        Prenons maintenant les 5 matrices:   Pour chacune des opérations ci-dessous, donner la première colonne de la matrice obtenue (par exemple, pour , taper ). Si l'opératon n'est pas définie, taper .                   C'est ça !   Le calcul donne  donc .     C'est ça !   Le calcul donne     C'est ça !   Le calcul donne  donc      C'est ça !   Le calcul donne  donc .  Remarque: On peut utiliser les propriétés de la transposée pour simplifier le calcul:      C'est ça !   est de taille et est de taille , donc le produit n'existe pas. Et donc, non plus !     C'est ça !    On calcule  et d'un autre côté   donc      C'est ça !    On calcule     C'est ça !    On calcule   De là, avec la méthode d'inversion de Gauss:    et donc .      C'est ça !    On calcule, à l'aide de la méthode d'inversion de Gauss (cliquer pour agrandir),    donc   et donc en fin de compte       C'est ça !    On calcule (en fait, on a déjà calculé)   Du coup, , donc est inversible et       C'est ça !   On calcule   Mais, si on essaie d'inverser , on tombe sur un os:   n'est pas inversible, donc l'opération est impossible.     C'est ça !   et ne sont pas des matrices carrées, donc elles ne sont pas inversibles.       Inverses de matrices    Dans cet exercice, et sont toutes des matrices carrées de même taille .  Sélectionner toutes les affirmations correctes:    Si est inversible, l'inverse de est  Non, car      Si est inversible, l'inverse de est  C'est ça ! Pour le vérifier, on calcule      Si est l'inverse de , alors .  Exactement ! On a alors      L'inverse de est  Non, car ne donne généralement pas :   On ne peut plus simplifier ! Par contre,   donc l'inverse de est .     Si et commutent (c'est-à-dire, si ) alors l'inverse de est  C'est vrai, car dans ce cas et on a      Si l'inverse de est , alors .  Pas forcément ! est en effet égale à son inverse, mais ce n'est pas la seule.  Par exemple, pour , les matrices suivantes sont égales à leur inverse:        On note . Sélectionner l'option correcte:    n'est pas inversible.      .      .      .        Soit un nombre réel ou complexe. On note .  Sélectionner la ou les options correctes:    Quel que soit , est inversible.      Quel que soit , est inversible.      Si , est inversible.   C'est vrai : dans ce cas, \/     Si , est inversible.   C'est vrai : dans ce cas, \/     Si , est inversible.   C'est faux : dans ce cas, \/        Si alors .    C'est vrai : si on multiplie ces deux matrices, on trouve .       Si alors .    C'est faux : si on multiplie ces deux matrices, on trouve .      Si alors .    C'est vrai : si on multiplie ces deux matrices, on trouve .  On peut aussi remarquer que , donc .      Echelonnage de matrices    On considère les matrices suivantes:   Sélectionner toutes les affirmations correctes:    est échelonnée.  C'est faux : si c'était le cas, chaque ligne de aurait son premier coefficient non nul plus à droite que la ligne du dessus. Or, les lignes et de ont leur premier coefficience non nul sur la deuxième colonne.     est échelonnée réduite.  C'est faux, car elle n'est même pas échelonnée. Si c'était le cas, chaque ligne de aurait son premier coefficient non nul plus à droite que la ligne du dessus. Or, les lignes et de ont leur premier coefficience non nul sur la deuxième colonne.     est échelonnée.  C'est vrai :   La ligne nulle de n'est suivie d'aucune ligne non nulle:  Chaque ligne non nulle de a son premier coefficient non nul plus à droite que la ligne précédente;  Chaque ligne non nulle de a un comme premier coefficient non nul.      est échelonnée réduite.  C'est faux : si elle était échelonnée réduite, sur chaque colonne contenant un pivot, le pivot serait le seul coefficient non nul.  Or, sur la troisième colonne de , il y a un coefficient non nul au-dessus du pivot.     est échelonnée.  C'est vrai :   La ligne nulle de n'est suivie d'aucune ligne non nulle:  Chaque ligne non nulle de a son premier coefficient non nul plus à droite que la ligne précédente;  Chaque ligne non nulle de a un comme premier coefficient non nul.      est échelonnée réduite.  C'est vrai : est échelonnée, et sur chaque colonne contenant un pivot, le pivot est le seul coefficient non nul.     est échelonnée.  C'est faux : sinon, toutes les lignes suivant une ligne nulle devraient être nulles.  Mais ici, la troisième ligne de est nulle et pas la suivante.     est échelonnée réduite.  C'est faux : si elle était échelonnée réduite, elle serait échelonnée. Dans ce cas, toutes les lignes suivant une ligne nulle devraient être nulles.  Mais ici, la troisième ligne de est nulle et pas la suivante.       Considérons la matrice:   Alors le rang de A est    C'est ça !   Une forme échelonnée de est   Il y a trois pivots (encadrés ci-dessus) donc .        "
},
{
  "id": "al1-recap_chap2_matrices-4-4-2",
  "level": "2",
  "url": "al1-recap_chap2_matrices-4.html#al1-recap_chap2_matrices-4-4-2",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": " Supposons qu'on ait 5 matrices de tailles respectives données ci-dessous:     A  B  C  D  E           Si les opérations ci-dessous sont réalisables, indiquer la taille de la matrice obtenue, par exemple , sinon indiquer                      C'est ça !        C'est ça !        C'est ça !  est de taille donc est de taille . Et      C'est ça !   est de taille donc est de taille .  aussi, donc est définie, et est de taille .  Enfin, est de taille donc est de taille .  Enfin, pour le produit de par ,      C'est ça !   est de taille , donc aussi.  est de taille , donc pas de la même taille que .  Donc la somme n'est pas définie.     C'est ça !   est de taille , donc est de taille , tout comme .  Donc la somme est définie, et est de taille .  est de taille donc est de taille .  Et pour le produit de par ,      C'est ça !   Pour le produit , on a   est de taille donc est de taille .  est de taille donc est de taille .  Donc le produit donne   Donc et sont définis, mais pas de même taille, et donc leur somme n'est pas définie.    C'est ça !   est de taille donc est de taille .  Donc le produit donne   est de taille , donc est de taille .  Donc le produit donne   est de même taille que , donc on peut les sommer, et est de taille .      "
},
{
  "id": "al1-recap_chap2_matrices-4-4-3",
  "level": "2",
  "url": "al1-recap_chap2_matrices-4.html#al1-recap_chap2_matrices-4-4-3",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": " Prenons maintenant les 5 matrices:   Pour chacune des opérations ci-dessous, donner la première colonne de la matrice obtenue (par exemple, pour , taper ). Si l'opératon n'est pas définie, taper .                   C'est ça !   Le calcul donne  donc .     C'est ça !   Le calcul donne     C'est ça !   Le calcul donne  donc      C'est ça !   Le calcul donne  donc .  Remarque: On peut utiliser les propriétés de la transposée pour simplifier le calcul:      C'est ça !   est de taille et est de taille , donc le produit n'existe pas. Et donc, non plus !     C'est ça !    On calcule  et d'un autre côté   donc      C'est ça !    On calcule     C'est ça !    On calcule   De là, avec la méthode d'inversion de Gauss:    et donc .      C'est ça !    On calcule, à l'aide de la méthode d'inversion de Gauss (cliquer pour agrandir),    donc   et donc en fin de compte       C'est ça !    On calcule (en fait, on a déjà calculé)   Du coup, , donc est inversible et       C'est ça !   On calcule   Mais, si on essaie d'inverser , on tombe sur un os:   n'est pas inversible, donc l'opération est impossible.     C'est ça !   et ne sont pas des matrices carrées, donc elles ne sont pas inversibles.    "
},
{
  "id": "al1-recap_chap2_matrices-4-5-2",
  "level": "2",
  "url": "al1-recap_chap2_matrices-4.html#al1-recap_chap2_matrices-4-5-2",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": "  Dans cet exercice, et sont toutes des matrices carrées de même taille .  Sélectionner toutes les affirmations correctes:    Si est inversible, l'inverse de est  Non, car      Si est inversible, l'inverse de est  C'est ça ! Pour le vérifier, on calcule      Si est l'inverse de , alors .  Exactement ! On a alors      L'inverse de est  Non, car ne donne généralement pas :   On ne peut plus simplifier ! Par contre,   donc l'inverse de est .     Si et commutent (c'est-à-dire, si ) alors l'inverse de est  C'est vrai, car dans ce cas et on a      Si l'inverse de est , alors .  Pas forcément ! est en effet égale à son inverse, mais ce n'est pas la seule.  Par exemple, pour , les matrices suivantes sont égales à leur inverse:      "
},
{
  "id": "al1-recap_chap2_matrices-4-5-3",
  "level": "2",
  "url": "al1-recap_chap2_matrices-4.html#al1-recap_chap2_matrices-4-5-3",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": " On note . Sélectionner l'option correcte:    n'est pas inversible.      .      .      .      "
},
{
  "id": "al1-recap_chap2_matrices-4-5-4",
  "level": "2",
  "url": "al1-recap_chap2_matrices-4.html#al1-recap_chap2_matrices-4-5-4",
  "type": "Exercise",
  "number": "2.3",
  "title": "",
  "body": " Soit un nombre réel ou complexe. On note .  Sélectionner la ou les options correctes:    Quel que soit , est inversible.      Quel que soit , est inversible.      Si , est inversible.   C'est vrai : dans ce cas, \/     Si , est inversible.   C'est vrai : dans ce cas, \/     Si , est inversible.   C'est faux : dans ce cas, \/     "
},
{
  "id": "al1-recap_chap2_matrices-4-5-5",
  "level": "2",
  "url": "al1-recap_chap2_matrices-4.html#al1-recap_chap2_matrices-4-5-5",
  "type": "Exercise",
  "number": "2.4",
  "title": "",
  "body": "  Si alors .    C'est vrai : si on multiplie ces deux matrices, on trouve .    "
},
{
  "id": "al1-recap_chap2_matrices-4-5-6",
  "level": "2",
  "url": "al1-recap_chap2_matrices-4.html#al1-recap_chap2_matrices-4-5-6",
  "type": "Exercise",
  "number": "2.5",
  "title": "",
  "body": "  Si alors .    C'est faux : si on multiplie ces deux matrices, on trouve .   "
},
{
  "id": "al1-recap_chap2_matrices-4-5-7",
  "level": "2",
  "url": "al1-recap_chap2_matrices-4.html#al1-recap_chap2_matrices-4-5-7",
  "type": "Exercise",
  "number": "2.6",
  "title": "",
  "body": "  Si alors .    C'est vrai : si on multiplie ces deux matrices, on trouve .  On peut aussi remarquer que , donc .   "
},
{
  "id": "al1-recap_chap2_matrices-4-6-2",
  "level": "2",
  "url": "al1-recap_chap2_matrices-4.html#al1-recap_chap2_matrices-4-6-2",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": "  On considère les matrices suivantes:   Sélectionner toutes les affirmations correctes:    est échelonnée.  C'est faux : si c'était le cas, chaque ligne de aurait son premier coefficient non nul plus à droite que la ligne du dessus. Or, les lignes et de ont leur premier coefficience non nul sur la deuxième colonne.     est échelonnée réduite.  C'est faux, car elle n'est même pas échelonnée. Si c'était le cas, chaque ligne de aurait son premier coefficient non nul plus à droite que la ligne du dessus. Or, les lignes et de ont leur premier coefficience non nul sur la deuxième colonne.     est échelonnée.  C'est vrai :   La ligne nulle de n'est suivie d'aucune ligne non nulle:  Chaque ligne non nulle de a son premier coefficient non nul plus à droite que la ligne précédente;  Chaque ligne non nulle de a un comme premier coefficient non nul.      est échelonnée réduite.  C'est faux : si elle était échelonnée réduite, sur chaque colonne contenant un pivot, le pivot serait le seul coefficient non nul.  Or, sur la troisième colonne de , il y a un coefficient non nul au-dessus du pivot.     est échelonnée.  C'est vrai :   La ligne nulle de n'est suivie d'aucune ligne non nulle:  Chaque ligne non nulle de a son premier coefficient non nul plus à droite que la ligne précédente;  Chaque ligne non nulle de a un comme premier coefficient non nul.      est échelonnée réduite.  C'est vrai : est échelonnée, et sur chaque colonne contenant un pivot, le pivot est le seul coefficient non nul.     est échelonnée.  C'est faux : sinon, toutes les lignes suivant une ligne nulle devraient être nulles.  Mais ici, la troisième ligne de est nulle et pas la suivante.     est échelonnée réduite.  C'est faux : si elle était échelonnée réduite, elle serait échelonnée. Dans ce cas, toutes les lignes suivant une ligne nulle devraient être nulles.  Mais ici, la troisième ligne de est nulle et pas la suivante.     "
},
{
  "id": "al1-recap_chap2_matrices-4-6-3",
  "level": "2",
  "url": "al1-recap_chap2_matrices-4.html#al1-recap_chap2_matrices-4-6-3",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": " Considérons la matrice:   Alors le rang de A est    C'est ça !   Une forme échelonnée de est   Il y a trois pivots (encadrés ci-dessus) donc .      "
},
{
  "id": "al1-recap_chap2_matrices-5",
  "level": "1",
  "url": "al1-recap_chap2_matrices-5.html",
  "type": "Section",
  "number": "3",
  "title": "— Erreurs à ne pas faire",
  "body": " Erreurs à ne pas faire   C'est surtout le produit matriciel qui peut poser problème:   En général, le produit de matrices n'est pas commutatif : si sont deux matrices, on a généralement .  La commutativité peut prendre l'eau de différentes manières:   Il se peut que soit défini mais pas :  Notons , .  Est-ce que existe ? Et ?   est de taille , B est de taille donc existe, mais pas (Essayez !)  Il se peut que et n'aient pas la même taille:   ✑ Calculez et avec    Source:   Il se peut que et existent, aient la même taille mais :  ✑ Calculez et avec  Source:    Conséquence de la non-commutativité: si , on peut avoir   Notons .  Calculer et , puis comparer et .  On trouve:   Autre conséquence de la non-commutativité: en général, si et sont deux matrices carrées, et que est inversible, alors généralement .  On note .  Calculer , puis .  donc on a   Donc  On peut avoir , mais .  ✑ Calculer et pour     Source:   ⚠ On peut avoir mais .  ✑ Calculer et pour     Source:   On peut avoir mais . On dit dans ce cas que est nilpotente .  Posons . Calculer et en déduire que pour tout .   Donc , pour , .  Si sont inversibles, alors aussi, mais , et non .  Pour deux matrices inversibles , en général on n'a pas  .   Il se peut que et soient inversibles, mais que ne le soit pas.  Par exemple, et sont inversibles ✑ Quel est l'inverse de ? mais ne l'est pas.  Il se peut que soit inversible, mais :  ✑ Notons et . Que donnent , et ?     Soient , ,alors , et non .  Supposons que soit de taille et de taille . Quelle sont les tailles de , , , ? Est-ce que existe ? Et ?     n'existe pas    "
},
{
  "id": "al1-recap_chap2_matrices-5-2-2-1-1-3-1-1-2-1",
  "level": "2",
  "url": "al1-recap_chap2_matrices-5.html#al1-recap_chap2_matrices-5-2-2-1-1-3-1-1-2-1",
  "type": "Exemple",
  "number": "3.1",
  "title": "",
  "body": "Notons , .  Est-ce que existe ? Et ?   est de taille , B est de taille donc existe, mais pas (Essayez !) "
},
{
  "id": "al1-recap_chap2_matrices-5-2-2-1-1-3-1-2-2",
  "level": "2",
  "url": "al1-recap_chap2_matrices-5.html#al1-recap_chap2_matrices-5-2-2-1-1-3-1-2-2",
  "type": "Exemple",
  "number": "3.2",
  "title": "",
  "body": " ✑ Calculez et avec    Source:  "
},
{
  "id": "al1-recap_chap2_matrices-5-2-2-1-1-3-1-3-2",
  "level": "2",
  "url": "al1-recap_chap2_matrices-5.html#al1-recap_chap2_matrices-5-2-2-1-1-3-1-3-2",
  "type": "Exemple",
  "number": "3.4",
  "title": "",
  "body": "✑ Calculez et avec  Source:  "
},
{
  "id": "al1-recap_chap2_matrices-5-2-2-1-2-3",
  "level": "2",
  "url": "al1-recap_chap2_matrices-5.html#al1-recap_chap2_matrices-5-2-2-1-2-3",
  "type": "Exemple",
  "number": "3.6",
  "title": "",
  "body": "Notons .  Calculer et , puis comparer et .  On trouve:  "
},
{
  "id": "al1-recap_chap2_matrices-5-2-2-1-3-2",
  "level": "2",
  "url": "al1-recap_chap2_matrices-5.html#al1-recap_chap2_matrices-5-2-2-1-3-2",
  "type": "Exemple",
  "number": "3.7",
  "title": "",
  "body": "On note .  Calculer , puis .  donc on a   Donc "
},
{
  "id": "al1-recap_chap2_matrices-5-2-2-1-4-2",
  "level": "2",
  "url": "al1-recap_chap2_matrices-5.html#al1-recap_chap2_matrices-5-2-2-1-4-2",
  "type": "Exemple",
  "number": "3.8",
  "title": "",
  "body": "✑ Calculer et pour     Source:  "
},
{
  "id": "al1-recap_chap2_matrices-5-2-2-1-5-2",
  "level": "2",
  "url": "al1-recap_chap2_matrices-5.html#al1-recap_chap2_matrices-5-2-2-1-5-2",
  "type": "Exemple",
  "number": "3.10",
  "title": "",
  "body": "✑ Calculer et pour     Source:  "
},
{
  "id": "al1-recap_chap2_matrices-5-2-2-1-6-2",
  "level": "2",
  "url": "al1-recap_chap2_matrices-5.html#al1-recap_chap2_matrices-5-2-2-1-6-2",
  "type": "Exemple",
  "number": "3.12",
  "title": "",
  "body": "Posons . Calculer et en déduire que pour tout .   Donc , pour , . "
},
{
  "id": "al1-recap_chap2_matrices-5-2-2-1-8-2-1-2-2",
  "level": "2",
  "url": "al1-recap_chap2_matrices-5.html#al1-recap_chap2_matrices-5-2-2-1-8-2-1-2-2",
  "type": "Exemple",
  "number": "3.13",
  "title": "",
  "body": "✑ Notons et . Que donnent , et ?  "
},
{
  "id": "al1-recap_chap2_matrices-5-2-2-1-9-2",
  "level": "2",
  "url": "al1-recap_chap2_matrices-5.html#al1-recap_chap2_matrices-5-2-2-1-9-2",
  "type": "Exemple",
  "number": "3.14",
  "title": "",
  "body": "Supposons que soit de taille et de taille . Quelle sont les tailles de , , , ? Est-ce que existe ? Et ?     n'existe pas "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
