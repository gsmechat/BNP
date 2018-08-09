Maquette
1 - Introduction
Le comité d’entreprise (CE) de la banque BNP Paribas souhaite rénover son site internet. En effet, celui-ci à 15 ans maintenant, il est grand temps de lui donner un petit coup de jeune !

Lisez bien tout le sujet, les conditions techniques sont à la fin.


2 - Contexte
Vous devez proposer au comité d’entreprise une maquette de ce site rassemblant toutes les fonctionnalités demandées. Ses fonctionnalités doivent d'être dynamiques. C’est-à-dire que si la fonctionnalité est un ajout de quelque chose, l’ajout devra visuellement se passer. Evidemment, si l’on rafraichie la page, les données sont perdues.


3 -	Cahier des charges fonctionnel

 3.1 -	La page d'acceuil

  3.1.1 -	Le header
La page d’accueil du CE comprendra une barre d’entête offrant la possibilité :

De se connecter (nouvelle page, popup ou modal… A votre appréciation), si l'utilisateur n'est pas connecté.
D'accéder à ses informations personnelles, si l'utilisateur est connecté.
D'avoir accès à ses flags/notifications qui serviront à le prévenir s’il doit apporter des justificatifs pour un voyage ou si ses billets pour un spectacle sont disponibles à l’accueil.
La recherche.
Evidemment, à gauche de cette barre (où à droite si cela convient mieux), il doit apparaître le logo du CE. Comme l’actuel est vieillot, vous pouvez en proposer un nouveau (une de vos créations ou sinon, Dribbble est votre ami).

Le header doit être présent et identique (sauf cas utilisateur connecté/déconnecté) sur toutes les pages de votre maquette.


  3.1.2 -	Le contenu
Sur un premier niveau, il faudra faire apparaître un slider affichant les nouveautés du CE. Voici quatre exemples de nouveautés pour vos maquettes :

Le 14 décembre, la BNP bénéficie d’une projection avant-première du nouveau Star Wars. Les places sont disponibles à l’achat sur la billetterie du CE.
Un voyage collectif est organisé : en Ouzbékistan. Des places sont encore disponibles.
Une colonie de vacances en Midi-Pyrénées a été réservée par le CE pour les enfants des salariés BNP Paribas et ses filiales.
Nouvelles conditions de remboursement des frais de garde pour vos enfants. Voir.
Sur un deuxième niveau, on répertoriera 3 témoignages vantant les avancés du CE.

Sur un troisième niveau, on listera les 3 derniers partenaires du CE :

Kadéo
Fnac
Gaumont
Leurs logos seront filtrés en gris et lorsque l’on passe la souris sur un des logos, il retrouve ses couleurs normales.

  3.1.3 -	Le footer
Celui-ci sera divisé en 3 parties :

Les informations de contact (téléphone, adresse, email) avec un lien vers le formulaire de contact.
Les réseaux sociaux « Suivez notre actualité » (facebook, instagram et twitter)
Un petit « à propos de » qui sera un mini historique du CE. Vous pourrez le remplacer par un lorem ipsum si vous n’êtes pas inspiré.
 3.2 - La page utilisateur
Celle-ci sera divisée en 3 parties. Vous pouvez les présenter sous forme d’onglets.

  3.2.1 -	Les informations
Les informations utilisateur comprennent :

Son nom,
Son prénom,
Son adresse,
Son numéro de téléphone,
Son adresse mail,
Ce qu'il reste de ses droits,
L’utilisateur doit pouvoir éditer ses informations. Lorsque l’on clique sur le bouton « Editer », l’utilisateur peut changer ses informations (soit à travers une modal avec les informations actuelles, soit par le remplacement des informations par des champs textes contenant les informations). Lorsqu’il valide, les informations sont modifiées (visuellement pour la maquette). Une alerte permet d’avoir l’assurance que tout s'est bien passé. Si par exemple, l’utilisateur a entré des caractères spéciaux dans son numéro de téléphone ou si son mail n’a pas le bon format, il faut que ça lui soit précisé.

  3.2.2 -	Les informations des ayant-droits
Les ayant-droits sont les membres de la famille étant descendants et conjoint. Les ascendants ne peuvent être considérés comme des ayant-droits. Les ayant-droits bénéficient de leur propre part au CE. Un ouvrant-droit (l’utilisateur donc) bénéficie de 1600€ de droits par an et les ayant-droits de 1200€ par an et par personne. Ces droits ne peuvent être dépensés qu’à travers des achats au CE.

Cet onglet affiche tous les bénéficiaires associés à l’utilisateur mais ne travaillant pas à la BNP. Les informations affichées pour chaque ayant-droit sont :

Son nom,
Son prénom,
Sa date de naissance,
La liaison familiale (enfant ou conjoint),
Ce qu'il reste de ses droits.
Il faut pouvoir éditer chaque ayant-droits mais aussi en supprimer (avec modal de validation ou autre) et en ajouter. N’oubliez pas la dynamique de la page.

  3.2.3 -	Les informations bancaires et les justificatifs
Dans cet onglet, vous devez afficher les informations du RIB, la possibilité de les éditer.

Mais aussi la liste de tous les justificatifs divers :

Acte de naissance/Contrat de mariage.
Passeports et cartes d’identité pour les voyages organisés.
Factures
Vous devrez simuler (visuellement uniquement) le téléchargement des fichiers avec barre d’avancement etc...

  3.2.4 -	Formulaire de contact et google Map
Dans cette page vous devrez proposer un formulaire de contact basique avec une vérification sur les champs lors de validation ainsi qu’une google Map. Pour être sure que vous le fassiez tous, je veux que ce soit votre adresse perso ou celle de vos parents qui soit montrée par la google Map. Ne vous inquiétez pas, je ne débarquerais pas armée chez vous ! (je ne débarquerais pas tout court d’ailleurs).

 3.3 - BONUS : l’administration des utilisateurs et des prestations
Pour les plus courageux d’entre vous, vous pouvez réaliser des maquettes dynamiques de l’administration. Son contenu est 100% à votre appréciation mais doit être pertinente en terme d’ergonomie mais aussi en terme d’acquisition de compétences. Si ce que vous présentez n’apporte pas plus que ce que vous avez avec le sujet, ça ne sera pas considéré comme bonus. Tournez-vous vers jQuery Ui, ça devrait vous donnez des idées pertinentes.

 3.3 - BONUS : Autres
Tout autre bonus ne sera accessible que si vous avez plus de 15/20. Il devra être également pertinent. Ces bonus sont 100% de votre choix. Vous devez me signaler ce que vous avez fait (histoire que je ne rate pas) dans un fichier « bonus.txt » où vous listez vos bonus et où je peux les trouver dans votre interface.

 4. - Cahier des charges techniques
Les technologies autorisées sont :

Le HTML5,
Le Javascript,
Le CSS3,
Un framework CSS (Bootstrap/Foundation/Materialize…),
Un “framework” javascript (jQuery, Angular JS…) ou plusieurs.
Bien évidemment, le CE de la BNP ne veut pas un vieux framework css comme design. Vous devrez proposer un design qui vous est propre (dribbble.com pour les idées – attention au pompage de code, je le pisterai). Cette partie design est obligatoire.
