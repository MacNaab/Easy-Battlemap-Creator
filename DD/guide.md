# Sommaire
- [DungeonDraft](#dungeondraft)
  - [Escaliers](#escaliers)
    - [Ombrage](#ombrage-des-escaliers)
    - [Rampes d'escalier](#rampes-descalier-et-ombres-par-rapport-aux-sources-lumineuses)
    - [Sources lumineuses](#ombrage-avec-des-sources-lumineuses-%C3%A0-proximit%C3%A9)
- [Crosshead Studio](#crosshead-studio)
  - [Rivière](#rivi%C3%A8re)



# DungeonDraft
## Escaliers
### Ombrage des escaliers
![Escalier de base (Path)](https://preview.redd.it/cdo5xs8dkpc61.png?width=402&format=png&auto=webp&s=04432b485e053fbea3f9afdcd4287a7f81898fd2)

Il s'agit de l'actif d'escalier de base de FA. Comme vous pouvez le voir, il y a déjà quelques ombres mineures, mais il est généralement assez vide. Vous l'avez avec ou sans garde-corps sur les côtés, mais pour les besoins de ce tutoriel, peu importe celui que nous utilisons.

Pour commencer, nous voulons que chaque marche de l'escalier ressorte un peu plus. Cela, nous pouvons le faire en plaçant des ombres horizontalement sur la ligne noire qui sépare chaque marche d'escalier. Pour cela, j'utilise le ShadowPathLarge75 sur une largeur de 0,1.

![](https://preview.redd.it/ufmk5a0hkpc61.png?width=234&format=png&auto=webp&s=2e5ff9f8f017f118d1fe23ccead04e5aeb057731)

Cela améliorera déjà la profondeur de chaque marche de l'escalier. J'ai mis en évidence le chemin d'ombre que j'ai dessiné pour indiquer comment chaque chemin est aligné avec les étapes, et cela ressemble à ceci :

![](https://preview.redd.it/irmxfbrjkpc61.png?width=349&format=png&auto=webp&s=f206de7795d9723c432f13992f3b4e1330759196)

Nous pouvons maintenant passer à l'étape suivante, qui consiste à ajouter l'ombrage des côtés d'un escalier. Dans la plupart des situations, votre escalier sera placé contre un mur ou aura une sorte de garde-corps. Cela projette des ombres sur les escaliers, en particulier au point de rencontre de l'escalier et du mur. Dans cet exemple, nous avons les "garde-corps" à la verticale. Pour compléter cela, nous allons placer deux des mêmes chemins d'ombre que nous avons déjà utilisés, bien que cette fois, nous ajusterons la transition d'entrée et la transition de sortie sur "fondu".

![](https://preview.redd.it/mykyig1lkpc61.png?width=267&format=png&auto=webp&s=bb9cb67aab40a93f5f8b4d0d70996cf0abc9e516)

Si vous ne le faites pas, l'ombre risque de se terminer un peu plus brusquement, ce que je n'aime pas. Cela vous donnera les résultats suivants :

![](https://preview.redd.it/nrfsodulkpc61.png?width=324&format=png&auto=webp&s=0423cc04ed0710f102fe4e60d810d88f9e8444ca)

Eh bien, je l'aime déjà. Le seul problème maintenant, c'est que si vous regardez l'escalier, cela peut prendre une seconde ou deux pour remarquer dans quelle direction monte ou descend, bien que l'ombrage des marches ait déjà aidé à empêcher cela. Nous pouvons attirer l'attention sur l'endroit où l'escalier se dirige (vers le haut ou vers le bas) en assombrissant considérablement un côté de celui-ci.

De manière générale, vous voudriez que le côté le plus bas soit le plus sombre. Bien qu'il y ait quelques exceptions à cela, par exemple, la pièce du bas est éclairée et la pièce du haut n'est pas éclairée.

Pour y parvenir, nous allons ajouter un chemin d'ombre le long de la partie inférieure des escaliers, mais cette fois, il sera beaucoup plus grand. Dans ce cas, j'ai utilisé ShadowPathVLarge50 en bas :

![](https://preview.redd.it/4flsq5fnkpc61.png?width=358&format=png&auto=webp&s=881c8d0cc8ebea1fc6351784ec3a8fc743f4841f)

Vous pouvez jouer avec la noirceur en utilisant un chemin d'ombre d'opacité différent. Vous pouvez aller un peu plus sombre si cela mène à un sous-sol sombre, ou un peu plus clair si les pièces à l'étage et au rez-de-chaussée sont éclairées.

Et voilà, vous avez un escalier avec des ombres décentes qui aident votre carte à apparaître !

Pour résumer j'ai les 4 escaliers côte à côte, et quelques exemples de plans que j'ai fait pour vous !

![](https://preview.redd.it/ds6ws1xokpc61.png?width=969&format=png&auto=webp&s=aae42cbbff295be2aa3baa73514a203d8ecf220c)

Je me rends compte qu'il ne s'agit pas d'un didacticiel très détaillé sur la façon de faire de l'ombre, mais j'espère que l'explication simple le rendra facile à appliquer dans vos propres cartes. Si vous voulez en savoir plus sur l'ombrage, je vous recommande vraiment de regarder cette vidéo de [Baily Wiki](https://www.youtube.com/watch?v=pKru2cuUMuM&t=30s&ab_channel=Baileywiki), qui couvre plus de détails sur l'application d'ombres dans une carte. Si vous avez d'autres vidéos ou publications utiles qui pourraient aider les gens à créer de meilleures cartes, n'hésitez pas à les partager dans les commentaires !

Traduction du guide de [FakeFairytale](https://www.reddit.com/r/dungeondraft/comments/l21qdh/shading_tutorial_stairs_with_example_images/)

## Rampes d'escalier et ombres par rapport aux sources lumineuses

### Les bases

Commençons par un simple morceau de balustrade, d'accord ? Mettons en place le scénario : nous sommes à l'extérieur (oui, pas encore d'escalier) le soleil nous frappe du haut de la carte (ceci est important car les ombres diagonales sont, d'après mon expérience, plus difficiles à obtenir que les ombres droites horizontales ou verticales ).

Le prochain passage peut être assez évident pour certains d'entre vous, mais d'autres pourraient trouver cela utile. Si vous savez déjà comment faire une ombre de balustrade, vous pouvez ignorer cette section. En raison d'une limite d'images sur les messages de 20, je ne peux pas montrer tous les paramètres, chemins et outils exacts que j'ai utilisés, même si je ferai de mon mieux pour les décrire.

Pour une balustrade, nous voulons utiliser une fine ligne d'ombre, sinon le spectateur supposera que vos balustrades sont faites de morceaux de bois ridiculement épais, ou que votre source de lumière est extrêmement proche de la balustrade, ce qui n'est souvent pas le cas. J'utilise souvent les 25 ou 50 ombres d'opacité, celles qui ressortent le mieux au final. J'ai également réglé mes transitions In et Out sur "fondu" (je n'aime pas les ombres qui se coupent nettement et elles se fondent mieux, bien que dans la vraie vie, elles seraient probablement coupées nettes, choisissez ce que vous voulez) et maintenant il est temps de dessinez les premières ombres.

![](https://preview.redd.it/178t8aaar7i61.png?width=1743&format=png&auto=webp&s=b1d375acf9c9ed3ba3528a868520b6757630899d)

Gardez à l'esprit que plus la source de lumière est élevée par rapport à l'objet, plus l'ombre sera longue. Par exemple, lorsque vous vous tenez dehors pendant une journée d'été pendant environ 12 heures du lever au coucher du soleil, vous verrez que pendant les premières heures, votre ombre est longue. C'est parce que le soleil vous frappe d'un angle très horizontal car il est juste au-dessus de l'horizon à ce moment-là. Plus tard, à midi, le soleil sera directement au-dessus de vous (selon l'endroit où vous vous trouvez bien sûr), vous offrant une ombre courte, directement à vos pieds. Vous pouvez également le remarquer lorsque vous marchez sous les lampadaires la nuit, vous verrez votre ombre grandir et rétrécir au fur et à mesure que vous vous déplacez de lanterne en lanterne.

Pour ce tutoriel, j'ai juste utilisé 1 longueur d'ombre de bloc de grille, 50 opacité double chemin d'ombre mince à une largeur de 0,35. (à peu près aussi large que les piliers).

Maintenant, pour la balustrade elle-même, j'ai utilisé le même chemin mais à une largeur de 0,25 au lieu de 0,35 et j'ai dessiné deux lignes horizontalement juste en dessous du haut des stores des piliers.

![](https://preview.redd.it/49pd1xtht7i61.png?width=1673&format=png&auto=webp&s=2b8dc60b30605492a1abf992f6b3c1cfaae4dfdf)

Les chemins d'ombre s'étendent un peu au-delà des piliers en raison du "réglage du fondu". Si vous ne le faisiez pas, les ombres se couperaient avant d'atteindre le pilier et nous ne le voulons pas, alors assurez-vous qu'elles se mélangent bien !

Pour les barres, nous allons rendre le chemin de l'ombre encore plus fin (0,15), et je descends d'un cran en opacité à 25 au lieu de 50. La raison en est que j'imagine une barre ne bloquant pas beaucoup la lumière, donc la l'ombre ne serait pas aussi sombre non plus, surtout pas à l'extérieur. Décider de ces choses prend un certain temps pour s'y habituer, mais vous vous y habituerez avec un peu de pratique.

![](https://preview.redd.it/txf37emuu7i61.png?width=1809&format=png&auto=webp&s=b0ba4d53ee9ee1c0246f88704f33a3ae7b473168)

![](https://preview.redd.it/3ook5cjzv7i61.png?width=1764&format=png&auto=webp&s=cb04a95e283ebf73bf4816caf8b953c15c25b422)

Vous pouvez utiliser autant de barres que vous le souhaitez. Ici, j'y suis allé avec beaucoup, mais vous pouvez en faire moins si vous le souhaitez. Maintenant, vous remarquerez peut-être quelques "erreurs" ici et là, mais dans une carte réelle, elles seraient extrêmement difficiles à remarquer. Souvent, je ne me soucie pas de le rendre parfait et je ne pense pas que vous le devriez non plus, à moins que ce ne soit votre truc.

Voici quelques exemples où j'ai utilisé cette technique sans trop tenir compte des autres objets ou de la source lumineuse.

![](https://preview.redd.it/dp49uvsuw7i61.png?width=458&format=png&auto=webp&s=0563c5fad50ccb4473aa06798b335aeb59c93a97)

Lorsque vous collez cela sur votre carte, ou sur les escaliers d'ailleurs, cela semble déjà plus intéressant qu'un simple escalier vide.

### Balustrade coudée
Si vous souhaitez aller plus loin qu'une simple rampe droite, vous pouvez y ajouter des coudes et des coins. Cela nécessite cependant un travail supplémentaire en ce qui concerne l'ombrage. Pour une source de lumière comme le soleil, le travail d'ombre est le plus simple et le plus simple. Si la source lumineuse était plus proche, cependant, beaucoup de choses changeront. Je vais y répondre dans une minute, voici d'abord deux exemples de virages sur une carte d'extérieur.

![](https://preview.redd.it/jdvzzupnx7i61.png?width=565&format=png&auto=webp&s=2de19e2e5afa8692ec06f3229aa6b7e574afd90c)

![](https://preview.redd.it/4sbt25wox7i61.png?width=631&format=png&auto=webp&s=50fda655f4016d48ffde393ec9266fad08b6d02d)

Comme vous pouvez le remarquer, une ombre commencera à se cacher sous un objet. Il se rapproche progressivement de la balustrade au fur et à mesure que la balustrade fait son tour, finissant par disparaître entièrement en dessous. Pour illustrer, j'ai légèrement modifié l'exemple précédent.

![](https://preview.redd.it/k76xwzor08i61.png?width=1363&format=png&auto=webp&s=c7742405c2fce84548d6c9483b5fbcbfd51e139b)

Nous devons connecter les ombres du garde-corps, en le rapprochant progressivement du garde-corps au fur et à mesure que le coude augmente, et passer sous le garde-corps à partir du point où il devient vertical. Pour ce faire, nous utilisons l'outil de courbe construit dans DD. (Maj-clic) Nous commençons le chemin au même point où l'ombre de la balustrade pénètre dans le pilier, et en le plaçant sur le côté inférieur du pilier réel sur la droite.

![](https://preview.redd.it/2xcl72gk18i61.png?width=1302&format=png&auto=webp&s=af3447283b241b3921de49647c2be72f5250dc1d)

L'étape suivante consiste à ajouter à nouveau des barres, ce qui n'est pas si difficile maintenant que vous savez où les ombres des barres doivent se terminer.

![](https://preview.redd.it/bu86lqhf28i61.png?width=1477&format=png&auto=webp&s=89a6cb0e2251f86f96c118ac29a5e66886a53aa6)

Maintenant, cela fonctionne parce que nous sommes à l'extérieur et la source de lumière est très loin. Si nous allons à l'intérieur où la source de lumière est souvent très proche, les choses changent.

### Ombrage avec des sources lumineuses à proximité.
Alors, qu'est-ce qui change ? Je vais commencer par quelques images pour vous donner une impression.

![](https://preview.redd.it/tghbozz838i61.png?width=611&format=png&auto=webp&s=fa124cbe90e5f03cd9bcd4de218874be3c7ff4d1)
![](https://preview.redd.it/upggnr6i38i61.png?width=552&format=png&auto=webp&s=9dcc1d83732cee38df278cae04f6b786872ec40a)
![](https://preview.redd.it/h23w65mf38i61.png?width=637&format=png&auto=webp&s=5019b07afeeda26172f7a38a53d4c71771a440dd)

Veuillez noter que ces exemples, en particulier le premier et le deuxième, sont toujours à proprement parler faux. Pour être tout à fait honnête, Dungeondraft n'est pas très bien adapté pour le placement d'ombre et de lumière. C'est un constructeur de carte de bataille après tout, pas un simulateur d'éclairage.

Ces exemples sont cependant les plus proches que j'aime être du "réalisme" et avec mon niveau d'expérience actuel et les outils de DD et ses limites, aller plus loin vers le réalisme devient juste une activité chronophage et ennuyeuse.

C'est un peu plus facile à faire sur des surfaces planes car la longueur des ombres reste constante sur les objets autour de la source lumineuse. Sur un escalier, cependant, il faut aussi tenir compte de l'axe Z (profondeur, l'escalier qui monte ou qui descend) qui est très difficile à obtenir.

Néanmoins, je vais donner un exemple pour les deux cas, après quoi nous terminerons ce didacticiel déjà assez long.

Changeons de scénario : nous sommes maintenant à l'intérieur avec une lanterne sur un tabouret, la balustrade est positionnée autour d'elle :

![](https://preview.redd.it/kz4j96al58i61.png?width=1270&format=png&auto=webp&s=536ee4017d1845a616c1940bc04891ae1951ecbb)

L'ombre va maintenant se projeter vers l'extérieur de la lanterne et projeter une ombre sur le côté opposé.

En créant ces ombres, j'ai réalisé qu'il est utile de déterminer l'angle des barres et du pilier si vous tracez un chemin d'ombre du point d'origine de la source lumineuse à la balustrade. Vous pouvez ensuite ajuster les lignes à l'aide de "Modifier les points" jusqu'à ce qu'elles proviennent du garde-corps.

![](https://preview.redd.it/28pv2kw139i61.png?width=1446&format=png&auto=webp&s=37e44a3c774d89bfb9452a677fe4bc3d6fe643e9)
![](https://preview.redd.it/9urz6omp49i61.png?width=1439&format=png&auto=webp&s=5ab5a84f2da153b125d1aff04dcba92220f630e1)

Comme vous pouvez le voir, les ombres tournent en fonction de l'angle sur lequel elles se trouvent par rapport à la source de lumière. Cependant, comme la balustrade est à la même hauteur, toutes les ombres ont la même longueur. Dans un escalier, ce n'est pas pareil. Alors, mettons en place un nouveau scénario !

![](https://preview.redd.it/o90jgdtw69i61.png?width=1088&format=png&auto=webp&s=778a69e93a73d0b198fcb1df6716f56dc5bf822a)

Nous allons à nouveau utiliser la technique décrite dans l'exemple précédent. Nous traçons une ligne à partir du point d'origine pour les piliers, et après celle-ci pour la balustrade. Cette fois cependant, au lieu de tracer une ligne horizontale droite pour la balustrade, nous allions la faire en diagonale, en se rapprochant du mur du haut en descendant dans l'escalier. De plus, j'ai agrandi un peu la ligne au fur et à mesure que je descendais, en commençant à une largeur de 0,25 et en terminant à 0,45.

![](https://preview.redd.it/zuvufi3t89i61.png?width=1521&format=png&auto=webp&s=3bb1139b1b376cf01a728729d94ac2e3ab59a74f)

Maintenant, nous pouvons faire la même chose avec les barres de la balustrade. En les tirant de la source lumineuse, j'ajusterai les quelques barres les plus à droite à quelque chose d'un peu plus large.

![](https://preview.redd.it/4ggb63ada9i61.png?width=1678&format=png&auto=webp&s=754f5382ad03c4a570519e7b4f91e0e52dc45fce)

Traduction du guide de [FakeFairytale](https://www.reddit.com/r/dungeondraft/comments/lmpqfz/tutorial_shading_part_2_staircase_railings_and/)

------------------

# Crosshead Studio
## Rivière
![enter image description here](https://cdn.discordapp.com/attachments/801579512131354674/839885875084001310/river_template_export.jpg)
