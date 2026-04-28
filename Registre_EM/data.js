const mockPlayersData = [
  {
    "id": "87874287494508544",
    "pseudo": "〘 1 〙Seblor",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "07/07/2024"
  },
  {
    "id": "91977919953399808",
    "pseudo": "[CLTCH] Papyboumboum",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "24/03/2024"
  },
  {
    "id": "93444522968612864",
    "pseudo": "Loky",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/12/2024"
  },
  {
    "id": "95583086699352064",
    "pseudo": "John Campbell",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/09/2025"
  },
  {
    "id": "101078271537446912",
    "pseudo": "Jeeron",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/03/2024"
  },
  {
    "id": "105446975297556480",
    "pseudo": "HaXGamiG",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/03/2025"
  },
  {
    "id": "106113017812398080",
    "pseudo": "Biji",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2026"
  },
  {
    "id": "106345223935782912",
    "pseudo": "Wiamor",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/05/2024"
  },
  {
    "id": "106510623088623616",
    "pseudo": "MirageCentury",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/12/2024"
  },
  {
    "id": "107628828314054656",
    "pseudo": "Didou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2025"
  },
  {
    "id": "110075692607107072",
    "pseudo": "Anxium",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/02/2025"
  },
  {
    "id": "111021489276354560",
    "pseudo": "LewisOB",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/11/2025"
  },
  {
    "id": "113349370971160576",
    "pseudo": "jaysondu18",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2025"
  },
  {
    "id": "115904866584363008",
    "pseudo": "Warzen",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/01/2025"
  },
  {
    "id": "116519323006271489",
    "pseudo": "NSY",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/12/2025"
  },
  {
    "id": "116991718422740995",
    "pseudo": "Sweedn",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/04/2024"
  },
  {
    "id": "117747855824781316",
    "pseudo": "Mass",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/02/2026"
  },
  {
    "id": "119183865792167936",
    "pseudo": "NeO-",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2025"
  },
  {
    "id": "121381014076522496",
    "pseudo": "hydra",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/05/2024"
  },
  {
    "id": "122435325099245568",
    "pseudo": "Rimbaud",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2025"
  },
  {
    "id": "123041915573633024",
    "pseudo": "Zoz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2026"
  },
  {
    "id": "127105009639882752",
    "pseudo": "Gene0Five",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/04/2025"
  },
  {
    "id": "130690653800759296",
    "pseudo": "Criozz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/08/2025"
  },
  {
    "id": "132564443388313600",
    "pseudo": "Naakho",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/07/2025"
  },
  {
    "id": "133032834993487872",
    "pseudo": "Buffalo Soldier",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "05/04/2026"
  },
  {
    "id": "133998254772846600",
    "pseudo": "Draz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2024"
  },
  {
    "id": "134069660285927425",
    "pseudo": "Tramy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2025"
  },
  {
    "id": "135744577947697152",
    "pseudo": "Hakkera Endo",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "05/02/2024"
  },
  {
    "id": "139727762901565440",
    "pseudo": "lastwolfplays",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "23/03/2024"
  },
  {
    "id": "140106358769844225",
    "pseudo": "code",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2026"
  },
  {
    "id": "141205613312081920",
    "pseudo": "Litanrk",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/01/2025"
  },
  {
    "id": "141643651745841152",
    "pseudo": "Shughart",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/03/2025"
  },
  {
    "id": "141867003873853440",
    "pseudo": "Pekins",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/03/2025"
  },
  {
    "id": "142003940827856896",
    "pseudo": "Inyathi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/07/2025"
  },
  {
    "id": "142181488274833408",
    "pseudo": "BlackPixxel",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/06/2025"
  },
  {
    "id": "142317014730539008",
    "pseudo": "BigBang",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/05/2024"
  },
  {
    "id": "143430673187733505",
    "pseudo": "Grim Reaper",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/08/2024"
  },
  {
    "id": "145597836078088192",
    "pseudo": "pantoine_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2026"
  },
  {
    "id": "145948177906794497",
    "pseudo": "DeZaA",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/03/2024"
  },
  {
    "id": "146405112359682048",
    "pseudo": "Pheno",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/12/2024"
  },
  {
    "id": "147359648473808897",
    "pseudo": "Heos",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/11/2024"
  },
  {
    "id": "147762520914919424",
    "pseudo": "Xenophys",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "09/03/2025"
  },
  {
    "id": "147850659524378624",
    "pseudo": "Vito Morelli",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/04/2025"
  },
  {
    "id": "148914864335749121",
    "pseudo": "benuaq",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/12/2025"
  },
  {
    "id": "149465083553120256",
    "pseudo": "Tristan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/03/2026"
  },
  {
    "id": "149548605370400769",
    "pseudo": "Calden",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/02/2025"
  },
  {
    "id": "149886992052781056",
    "pseudo": "=BoB=BreizhoO",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/12/2024"
  },
  {
    "id": "150088960876478464",
    "pseudo": "FaceKill234",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/06/2025"
  },
  {
    "id": "150306774145171458",
    "pseudo": "SCH Phoenix",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "03/08/2024"
  },
  {
    "id": "150658557929455616",
    "pseudo": "Jean Michel Garnier",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/10/2024"
  },
  {
    "id": "150802323482869760",
    "pseudo": "sunkiller12",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/09/2024"
  },
  {
    "id": "150953978740342784",
    "pseudo": "-=Ew0k=- Brzhk",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/03/2025"
  },
  {
    "id": "151554292145192961",
    "pseudo": "Photun",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "22/08/2024"
  },
  {
    "id": "152414454598991873",
    "pseudo": "Tipolix",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "13/04/2025"
  },
  {
    "id": "152490292199555073",
    "pseudo": "Favess09",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2023"
  },
  {
    "id": "152928052639301632",
    "pseudo": "=ATM= Sarak",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/04/2025"
  },
  {
    "id": "153124286280761344",
    "pseudo": "REVELTTT",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/05/2025"
  },
  {
    "id": "153177010443649024",
    "pseudo": "Jeremo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/01/2025"
  },
  {
    "id": "153222298952794112",
    "pseudo": "YAMOKY",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/06/2024"
  },
  {
    "id": "154882785545289728",
    "pseudo": "GuldenDracK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/04/2025"
  },
  {
    "id": "155429596957900800",
    "pseudo": "MarvisBack",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/10/2024"
  },
  {
    "id": "155834617927041025",
    "pseudo": "Equivoc",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/03/2025"
  },
  {
    "id": "157189782311665666",
    "pseudo": "Edel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/10/2024"
  },
  {
    "id": "157508660866711552",
    "pseudo": "mousse",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/04/2026"
  },
  {
    "id": "157597866272096256",
    "pseudo": "Crunch",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/09/2025"
  },
  {
    "id": "157614423450714112",
    "pseudo": "MisterJackD",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/07/2025"
  },
  {
    "id": "158613025299890176",
    "pseudo": "kalihum",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/05/2025"
  },
  {
    "id": "158645157732941825",
    "pseudo": "Jack Poutine",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/10/2024"
  },
  {
    "id": "158645372128854017",
    "pseudo": "Zay",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/02/2024"
  },
  {
    "id": "158662628850270209",
    "pseudo": "SkL",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/01/2025"
  },
  {
    "id": "158986404053909504",
    "pseudo": "Tony tony chopper",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2025"
  },
  {
    "id": "159639569011048448",
    "pseudo": "--ch4r0zz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2026"
  },
  {
    "id": "159648200859320320",
    "pseudo": "AdriWiiiZz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/03/2025"
  },
  {
    "id": "159678345125167104",
    "pseudo": "Arthurdevid",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/06/2025"
  },
  {
    "id": "159985870458322944",
    "pseudo": "MEE6",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/03/2025"
  },
  {
    "id": "160137666271117312",
    "pseudo": "Siła",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "15/12/2024"
  },
  {
    "id": "161070303550767104",
    "pseudo": "Sulrik",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2025"
  },
  {
    "id": "161147312167583744",
    "pseudo": "O_Dylan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/01/2026"
  },
  {
    "id": "162227542730866688",
    "pseudo": "valink618",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/11/2025"
  },
  {
    "id": "162893188346937344",
    "pseudo": "Insiderone/kasukikun",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/09/2024"
  },
  {
    "id": "163316220685189120",
    "pseudo": "Oraks",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/04/2025"
  },
  {
    "id": "163371940570988544",
    "pseudo": "Newjakale",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2025"
  },
  {
    "id": "163621253175836672",
    "pseudo": "Praday",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/04/2024"
  },
  {
    "id": "163729213889839104",
    "pseudo": "Snafouz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2026"
  },
  {
    "id": "163729825331150849",
    "pseudo": "AureoleSolide",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/05/2025"
  },
  {
    "id": "164124744247934976",
    "pseudo": "Mike Honcho",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/04/2026"
  },
  {
    "id": "164399946580230144",
    "pseudo": "LAKAce",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/04/2024"
  },
  {
    "id": "164503409175560192",
    "pseudo": "Yatah",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/04/2025"
  },
  {
    "id": "164824828186984448",
    "pseudo": "TITO",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/12/2024"
  },
  {
    "id": "164825504321372160",
    "pseudo": "Adam",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/03/2025"
  },
  {
    "id": "165132143998009345",
    "pseudo": "Tiflar",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/11/2025"
  },
  {
    "id": "166170575734046720",
    "pseudo": "HYTEK31",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2025"
  },
  {
    "id": "166492415379636225",
    "pseudo": "Meyta",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/01/2025"
  },
  {
    "id": "167319036965683203",
    "pseudo": "YukovDz ✔",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/04/2026"
  },
  {
    "id": "168115542505422848",
    "pseudo": "Chad Sky",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "01/06/2025"
  },
  {
    "id": "168685952598933504",
    "pseudo": "Sorrow Deathless",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/01/2025"
  },
  {
    "id": "168828755987529728",
    "pseudo": "OVNI",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2026"
  },
  {
    "id": "169561463197794305",
    "pseudo": "Popex",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/09/2024"
  },
  {
    "id": "169837279597166592",
    "pseudo": "R4ziel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/03/2025"
  },
  {
    "id": "169838174627954688",
    "pseudo": "Raven33.be",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/03/2025"
  },
  {
    "id": "170573598119952384",
    "pseudo": "Greetschin",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/10/2025"
  },
  {
    "id": "170668662125101057",
    "pseudo": "Frack_MrLeProf",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/04/2024"
  },
  {
    "id": "170731511744561153",
    "pseudo": "Turtle",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/03/2025"
  },
  {
    "id": "171752116547878912",
    "pseudo": "La Tarte à la Crème",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/05/2024"
  },
  {
    "id": "172370447734800384",
    "pseudo": "Jean Madmax",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2024"
  },
  {
    "id": "172409670483312640",
    "pseudo": "Makaku",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2026"
  },
  {
    "id": "172793724462563330",
    "pseudo": "Moinooo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/01/2025"
  },
  {
    "id": "173170770132992001",
    "pseudo": "Dadou4571",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "173721028697128960",
    "pseudo": "Gakerai",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/08/2025"
  },
  {
    "id": "173838203617411073",
    "pseudo": "Recrue | Dust",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/04/2026"
  },
  {
    "id": "174146771931496448",
    "pseudo": "-GuiSmO-",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/10/2024"
  },
  {
    "id": "174563449853050880",
    "pseudo": "recrue | bagnet",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2025"
  },
  {
    "id": "175337628856614912",
    "pseudo": "Machete",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/04/2024"
  },
  {
    "id": "175609793233289216",
    "pseudo": "Dieselo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/05/2024"
  },
  {
    "id": "175613957917114368",
    "pseudo": "fury_61",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "18/03/2024"
  },
  {
    "id": "176058876720840704",
    "pseudo": "Gandalf",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2026"
  },
  {
    "id": "176404951734550529",
    "pseudo": "Engue69",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/07/2024"
  },
  {
    "id": "176847829195685888",
    "pseudo": "Kevlar",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/08/2024"
  },
  {
    "id": "177311539425050625",
    "pseudo": "(I.D.P) Bamacø",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/11/2025"
  },
  {
    "id": "177335316485636097",
    "pseudo": "75_Rangers _TM",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "08/06/2025"
  },
  {
    "id": "177505219536486400",
    "pseudo": "Starkya",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/05/2024"
  },
  {
    "id": "177710953964503040",
    "pseudo": "daishou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/03/2025"
  },
  {
    "id": "177753145001115648",
    "pseudo": "Solidement aigri",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/03/2025"
  },
  {
    "id": "177790632746549249",
    "pseudo": "Max-E",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/03/2025"
  },
  {
    "id": "177804975148236801",
    "pseudo": "BobbyK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2026"
  },
  {
    "id": "177868119744839690",
    "pseudo": "HaviK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/12/2025"
  },
  {
    "id": "177899809334624256",
    "pseudo": "⑥⑨ 𝙽𝚎𝚗𝚒𝚝𝚘 😈",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/02/2025"
  },
  {
    "id": "178078477763739650",
    "pseudo": "hubert",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2024"
  },
  {
    "id": "178273187086336000",
    "pseudo": "ιɴѕιdιυѕѕ",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/01/2025"
  },
  {
    "id": "178460360804663296",
    "pseudo": "JaJa's",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "15/08/2024"
  },
  {
    "id": "179645644791742464",
    "pseudo": "Hugo Lacanhu",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/08/2025"
  },
  {
    "id": "179970723769614336",
    "pseudo": "=𝐍𝐢𝐜𝐨𝟕𝟓=",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/04/2025"
  },
  {
    "id": "180091616315310080",
    "pseudo": "Eloas Monsentos",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/02/2024"
  },
  {
    "id": "180359257856671744",
    "pseudo": "Mirana Falcone",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/03/2024"
  },
  {
    "id": "180372628752695307",
    "pseudo": "Marty",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/08/2024"
  },
  {
    "id": "180713377830666240",
    "pseudo": "Turrikaym#2183",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/07/2024"
  },
  {
    "id": "180773579275763712",
    "pseudo": "Kyle Lanegan",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "04/04/2024"
  },
  {
    "id": "181017336348672000",
    "pseudo": "Dopamine",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/04/2025"
  },
  {
    "id": "181473644512411648",
    "pseudo": "Paulochon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/02/2025"
  },
  {
    "id": "181841959609040904",
    "pseudo": "Mystik",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/04/2024"
  },
  {
    "id": "181888973780680704",
    "pseudo": "Beren",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2024"
  },
  {
    "id": "182070741863235584",
    "pseudo": "Dunn",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2025"
  },
  {
    "id": "182180880205217793",
    "pseudo": "Serum",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/04/2025"
  },
  {
    "id": "182429336937168900",
    "pseudo": "SkybackFury",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/08/2025"
  },
  {
    "id": "182546618325794816",
    "pseudo": "Olaf Le Fourbe",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/10/2024"
  },
  {
    "id": "183719371544330251",
    "pseudo": "BipBip",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2025"
  },
  {
    "id": "183974105568116736",
    "pseudo": "Wmélannine",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "184020584320073730",
    "pseudo": "P@py-Sheyn [Pops]",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/06/2025"
  },
  {
    "id": "184340319850987536",
    "pseudo": "Wain-Grow",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/02/2025"
  },
  {
    "id": "184698566097371137",
    "pseudo": "Morriahrty",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/03/2025"
  },
  {
    "id": "184729871795093504",
    "pseudo": "Cpl Philou17",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "01/02/2024"
  },
  {
    "id": "185060246450864130",
    "pseudo": "Fabio",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2026"
  },
  {
    "id": "185367523196141568",
    "pseudo": "Tartine",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "30/12/2025"
  },
  {
    "id": "185383340914900992",
    "pseudo": "FrenchSpeakingJon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/04/2025"
  },
  {
    "id": "185884367128756224",
    "pseudo": "sysc0",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/03/2026"
  },
  {
    "id": "186451942212370432",
    "pseudo": "A_rchy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/12/2025"
  },
  {
    "id": "186782799909486592",
    "pseudo": "MathR67",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/05/2024"
  },
  {
    "id": "187224146495799297",
    "pseudo": "Whu-Zhang",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/01/2026"
  },
  {
    "id": "187639543443226624",
    "pseudo": "Khajen",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/02/2025"
  },
  {
    "id": "188006134731374602",
    "pseudo": "Nadassurf",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/01/2025"
  },
  {
    "id": "188357301399191552",
    "pseudo": "Takeo.Tactical",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2025"
  },
  {
    "id": "189664551959003137",
    "pseudo": "_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2025"
  },
  {
    "id": "189831070760304651",
    "pseudo": "Ikaj",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/04/2024"
  },
  {
    "id": "190173364751433728",
    "pseudo": "RouskoF",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/03/2026"
  },
  {
    "id": "191201651434979328",
    "pseudo": "Nimareth",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "17/04/2024"
  },
  {
    "id": "191850042401751040",
    "pseudo": "Moustico",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/09/2024"
  },
  {
    "id": "192329984696647681",
    "pseudo": "Deeproz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/04/2024"
  },
  {
    "id": "192561087986532353",
    "pseudo": "RackBoy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/02/2024"
  },
  {
    "id": "192572095723470848",
    "pseudo": "KILLER SURPRlSE",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2025"
  },
  {
    "id": "192650454688071680",
    "pseudo": "PhileasLX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/06/2024"
  },
  {
    "id": "192716264504819712",
    "pseudo": "Vitelio",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2024"
  },
  {
    "id": "192728609721417729",
    "pseudo": "Vikthus",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "01/02/2025"
  },
  {
    "id": "193033428348698624",
    "pseudo": "Nejilou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2025"
  },
  {
    "id": "193716823244406786",
    "pseudo": "Xx-Plag-xX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/12/2024"
  },
  {
    "id": "193809080123523072",
    "pseudo": "Cøsta",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "194077902059339777",
    "pseudo": "Cpl Matriche04",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "28/10/2024"
  },
  {
    "id": "194121856389742592",
    "pseudo": "Sharko_21",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/02/2026"
  },
  {
    "id": "194237233610358784",
    "pseudo": "Ju_Live",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/03/2025"
  },
  {
    "id": "194390165949644801",
    "pseudo": "Moldhof",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "06/04/2024"
  },
  {
    "id": "194896621471793153",
    "pseudo": "Typex",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/01/2025"
  },
  {
    "id": "194916755548798985",
    "pseudo": "Dem0ns",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2024"
  },
  {
    "id": "194928266719657985",
    "pseudo": "Julien.C / BLAXX",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "05/09/2025"
  },
  {
    "id": "195809272251023361",
    "pseudo": "Giyhome",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/07/2025"
  },
  {
    "id": "195924421255364608",
    "pseudo": "deadfire",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/10/2025"
  },
  {
    "id": "195997961099018240",
    "pseudo": "Ganta",
    "role": "Soldat",
    "grade": "Sergent",
    "joinDate": "12/03/2025"
  },
  {
    "id": "196222947243851776",
    "pseudo": "Bouba",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/08/2025"
  },
  {
    "id": "196231234936897537",
    "pseudo": "RED",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/09/2025"
  },
  {
    "id": "196352996618010627",
    "pseudo": "Kaisendemontaleacademiahunter:re",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/12/2024"
  },
  {
    "id": "196668731059863552",
    "pseudo": "SPiiTCH | 𝗕𝗢𝗔𝗥𝗗𝗘𝗥 𝟭",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "22/12/2023"
  },
  {
    "id": "197102306360033280",
    "pseudo": "Le_Chat_Noir",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/12/2025"
  },
  {
    "id": "197326818938716160",
    "pseudo": "Shuna (Elle/She)",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/01/2026"
  },
  {
    "id": "197410716028895233",
    "pseudo": "Faolan",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/02/2025"
  },
  {
    "id": "197669293217808384",
    "pseudo": "Joeledingue31",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/03/2025"
  },
  {
    "id": "198402735790358528",
    "pseudo": "ZacQué",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/01/2026"
  },
  {
    "id": "198747980700975104",
    "pseudo": "Vertech13™",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/08/2024"
  },
  {
    "id": "198781867602739202",
    "pseudo": "RedFool",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2026"
  },
  {
    "id": "198852448813711360",
    "pseudo": "Johnnyz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/05/2024"
  },
  {
    "id": "198928412553773057",
    "pseudo": "Solove",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/11/2024"
  },
  {
    "id": "199192482225979392",
    "pseudo": "Maverick Talys",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "30/01/2025"
  },
  {
    "id": "199232450226946048",
    "pseudo": "Phil-Dar",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/12/2024"
  },
  {
    "id": "199611314576949248",
    "pseudo": "Moochougina",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/05/2025"
  },
  {
    "id": "199627331625549827",
    "pseudo": "Brossadan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/04/2026"
  },
  {
    "id": "199642718433968133",
    "pseudo": "gaiden94",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/11/2025"
  },
  {
    "id": "199946999456333824",
    "pseudo": "KrooZyy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2025"
  },
  {
    "id": "200290467517169665",
    "pseudo": "Alexandre “Alex” Varela | Wulfaz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/02/2025"
  },
  {
    "id": "200660457705439233",
    "pseudo": "Michelin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/10/2024"
  },
  {
    "id": "200668721990074368",
    "pseudo": "Capitaine11",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/08/2025"
  },
  {
    "id": "201033509383569408",
    "pseudo": "Echalion",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "01/11/2024"
  },
  {
    "id": "201049718921494528",
    "pseudo": "Gety",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/02/2025"
  },
  {
    "id": "202150870916268032",
    "pseudo": "Vitulus",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "28/03/2024"
  },
  {
    "id": "202345296854777856",
    "pseudo": "Fraisy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/07/2025"
  },
  {
    "id": "202423473513955328",
    "pseudo": "Quazare",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/10/2024"
  },
  {
    "id": "202443615065079808",
    "pseudo": "Thery69",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/07/2025"
  },
  {
    "id": "202806804101464074",
    "pseudo": "ghostbf94",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/12/2025"
  },
  {
    "id": "203118656824147968",
    "pseudo": "Svogthos",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/12/2024"
  },
  {
    "id": "203287844712611840",
    "pseudo": "Smash",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/01/2026"
  },
  {
    "id": "203458605444235265",
    "pseudo": "Florian",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/12/2024"
  },
  {
    "id": "203574561952759808",
    "pseudo": "Mamène",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/01/2025"
  },
  {
    "id": "203673701982404609",
    "pseudo": "1er cl Maximedod",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/01/2024"
  },
  {
    "id": "203813957062885376",
    "pseudo": "georgeshabitbol",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2025"
  },
  {
    "id": "203940153964625921",
    "pseudo": "LefeJojo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/01/2025"
  },
  {
    "id": "204553118136926208",
    "pseudo": "FabulousFab",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/03/2025"
  },
  {
    "id": "205063013152063488",
    "pseudo": "wolfaustin.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "206012598464806913",
    "pseudo": "bbpunk14",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/03/2025"
  },
  {
    "id": "206097187069755392",
    "pseudo": "Ysanaguy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/10/2024"
  },
  {
    "id": "206108650240999424",
    "pseudo": "[AMF]Krogar",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/10/2024"
  },
  {
    "id": "206486180185767937",
    "pseudo": "Valek",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/12/2025"
  },
  {
    "id": "207087000077991936",
    "pseudo": "Näthan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2026"
  },
  {
    "id": "207149618872582144",
    "pseudo": "GhoStRecOn001",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/04/2025"
  },
  {
    "id": "207873370761461761",
    "pseudo": "V3xtros",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/03/2025"
  },
  {
    "id": "208022453170077708",
    "pseudo": "Pause",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/05/2024"
  },
  {
    "id": "208258373102206976",
    "pseudo": "Thomas",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/07/2024"
  },
  {
    "id": "208341028103520266",
    "pseudo": "Simon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/12/2025"
  },
  {
    "id": "208537031364575232",
    "pseudo": "NeoSensEight",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/03/2025"
  },
  {
    "id": "209088612564729866",
    "pseudo": "bigweedo",
    "role": "Soldat",
    "grade": "Sergent",
    "joinDate": "29/09/2024"
  },
  {
    "id": "209322184760360961",
    "pseudo": "Philistin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/03/2025"
  },
  {
    "id": "209416720366960641",
    "pseudo": "ΣĿ_ ĐФС 💉 🔰",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2025"
  },
  {
    "id": "209644575529238528",
    "pseudo": "Adrian_mtp",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/11/2024"
  },
  {
    "id": "209986347039981568",
    "pseudo": "tomsis15",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/10/2025"
  },
  {
    "id": "210005300550434816",
    "pseudo": "Ptit Lu'",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/03/2025"
  },
  {
    "id": "210438587001470976",
    "pseudo": "Le GAULOIS",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/03/2025"
  },
  {
    "id": "210486530223898625",
    "pseudo": "Guetteur \"Hanged Man\" Nocturne",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/01/2025"
  },
  {
    "id": "211469973594439681",
    "pseudo": "[XIII] Finla",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/02/2025"
  },
  {
    "id": "211573287107428352",
    "pseudo": "Bubu",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2024"
  },
  {
    "id": "211587873709883392",
    "pseudo": "Deimos Qunhua",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2026"
  },
  {
    "id": "211590797026394112",
    "pseudo": "GamerMoNsTeROfficiel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/06/2024"
  },
  {
    "id": "211682212381196298",
    "pseudo": "Dobbzzz",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/05/2024"
  },
  {
    "id": "211900213424553994",
    "pseudo": "Allan-DRKS",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/06/2025"
  },
  {
    "id": "212542448151429120",
    "pseudo": "Akiira",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "08/07/2024"
  },
  {
    "id": "212946658768453634",
    "pseudo": "Greg / Xéfar",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2025"
  },
  {
    "id": "212947714210660360",
    "pseudo": "FRWTrigger",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "07/05/2024"
  },
  {
    "id": "213027847881752586",
    "pseudo": "Samkha",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/02/2026"
  },
  {
    "id": "213044096296681482",
    "pseudo": "Jagan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/09/2025"
  },
  {
    "id": "213233431432265730",
    "pseudo": "Patou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/07/2024"
  },
  {
    "id": "213302974997331969",
    "pseudo": "Zuny",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/01/2025"
  },
  {
    "id": "213564290303655939",
    "pseudo": "EsKr0",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/04/2024"
  },
  {
    "id": "213656197176229889",
    "pseudo": "Nyotam",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "15/03/2024"
  },
  {
    "id": "213727002698579968",
    "pseudo": "Kuren",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/06/2025"
  },
  {
    "id": "213944339716505600",
    "pseudo": "Apex Dali 🦞",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "11/03/2025"
  },
  {
    "id": "214033346710208514",
    "pseudo": "Squid",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/01/2025"
  },
  {
    "id": "214747337430401024",
    "pseudo": "[LPM] Prothiis",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "28/03/2024"
  },
  {
    "id": "214869558064840706",
    "pseudo": "[Wsky] PandaloveFR",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/12/2024"
  },
  {
    "id": "215046998481436673",
    "pseudo": "SladeLePolak",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/10/2025"
  },
  {
    "id": "215082715664351233",
    "pseudo": "0ma",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/02/2025"
  },
  {
    "id": "215352822911336448",
    "pseudo": "Aichigo",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "16/04/2024"
  },
  {
    "id": "215478715453276170",
    "pseudo": "Gordon Ramie ♂♫",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/04/2024"
  },
  {
    "id": "215795374445690880",
    "pseudo": "Jurow",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/06/2025"
  },
  {
    "id": "215869897547186176",
    "pseudo": "Le Guite",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2024"
  },
  {
    "id": "216152698955759616",
    "pseudo": "Scar",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/12/2025"
  },
  {
    "id": "216263356560965632",
    "pseudo": "Pelerin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "216308729891520513",
    "pseudo": "OPDrewski",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "15/07/2024"
  },
  {
    "id": "216324177773199361",
    "pseudo": "Luxionn",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/11/2024"
  },
  {
    "id": "216639783546388480",
    "pseudo": "borntogrill",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/07/2025"
  },
  {
    "id": "216978515747274753",
    "pseudo": "SharkYz01",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/01/2025"
  },
  {
    "id": "217258670067679233",
    "pseudo": "Hebi",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "02/08/2025"
  },
  {
    "id": "217333144280498177",
    "pseudo": "MrThelab",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/03/2025"
  },
  {
    "id": "217477250336030721",
    "pseudo": "Péb!u",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/04/2025"
  },
  {
    "id": "217607536323330048",
    "pseudo": "fury",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/11/2025"
  },
  {
    "id": "217753859576037376",
    "pseudo": "Mr_Alex",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "217763000029937665",
    "pseudo": "BaYOX",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/09/2024"
  },
  {
    "id": "217799982504214538",
    "pseudo": "LaCassette",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2026"
  },
  {
    "id": "218077934928396288",
    "pseudo": "johnson na johnson",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2024"
  },
  {
    "id": "218107519560581121",
    "pseudo": "koubiac",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/02/2025"
  },
  {
    "id": "218120526340554752",
    "pseudo": "Pablitus",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/11/2024"
  },
  {
    "id": "218369242712506368",
    "pseudo": "DPRD",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/02/2024"
  },
  {
    "id": "218687646371807232",
    "pseudo": "FoX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/06/2025"
  },
  {
    "id": "218764544699400202",
    "pseudo": "Yubia",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/05/2025"
  },
  {
    "id": "219317043827048448",
    "pseudo": "jnkieFTW",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/03/2026"
  },
  {
    "id": "219515984778756096",
    "pseudo": "Makaveli",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/08/2025"
  },
  {
    "id": "219771308311838730",
    "pseudo": "TheMaxou345",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/04/2025"
  },
  {
    "id": "219809702777716737",
    "pseudo": "TIGROU",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/03/2025"
  },
  {
    "id": "219901184478019584",
    "pseudo": "Vectro7",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2025"
  },
  {
    "id": "220163595911168001",
    "pseudo": "AZARRR",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2024"
  },
  {
    "id": "220306866566070273",
    "pseudo": "MetalRshot",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2025"
  },
  {
    "id": "220484546796322826",
    "pseudo": "Space_Dirt",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/02/2025"
  },
  {
    "id": "220803102377377794",
    "pseudo": "OmarTinais",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/01/2025"
  },
  {
    "id": "220805486927151105",
    "pseudo": "KiZe",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/03/2025"
  },
  {
    "id": "220889362986958848",
    "pseudo": "Bobleponge91",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/01/2025"
  },
  {
    "id": "220980493276020736",
    "pseudo": "Gramps",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/08/2024"
  },
  {
    "id": "221013675882840067",
    "pseudo": "spirito",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/10/2024"
  },
  {
    "id": "221325425329045506",
    "pseudo": "laurent",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/01/2026"
  },
  {
    "id": "221606962188517377",
    "pseudo": "Sonbri",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/08/2024"
  },
  {
    "id": "222037128471642112",
    "pseudo": "Hosno",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2025"
  },
  {
    "id": "222471989850275842",
    "pseudo": "Eugène Savastano",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/05/2025"
  },
  {
    "id": "222540603811037185",
    "pseudo": "WaR1Ck",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2025"
  },
  {
    "id": "223054997720530944",
    "pseudo": "Jug",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/07/2025"
  },
  {
    "id": "223085779776307200",
    "pseudo": "Jack O'Malley",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2024"
  },
  {
    "id": "223119638785949698",
    "pseudo": "One DowNz 👁",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/02/2024"
  },
  {
    "id": "223449848077221888",
    "pseudo": "Poulo-Rit",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2025"
  },
  {
    "id": "223912034910208000",
    "pseudo": "PlayasKeKe",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/01/2025"
  },
  {
    "id": "224146593312538628",
    "pseudo": "Jehan™",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/08/2025"
  },
  {
    "id": "224171217723195393",
    "pseudo": "Zaf#31",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/04/2026"
  },
  {
    "id": "224178789805064192",
    "pseudo": "Snake Eater",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/12/2024"
  },
  {
    "id": "224256482290565120",
    "pseudo": "Mike Collins",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/05/2024"
  },
  {
    "id": "224460618533568513",
    "pseudo": "Shadow_Matdlor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/09/2024"
  },
  {
    "id": "224970976889274368",
    "pseudo": "-LAMS-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2025"
  },
  {
    "id": "224972374041165824",
    "pseudo": "MyL0o",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/12/2024"
  },
  {
    "id": "225334836728954880",
    "pseudo": "Opyat",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "01/04/2026"
  },
  {
    "id": "225575133647994880",
    "pseudo": "Santos",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/03/2026"
  },
  {
    "id": "225621171067027456",
    "pseudo": "MJR. Lazarevic",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "10/03/2024"
  },
  {
    "id": "226018737273307136",
    "pseudo": "Nosebleed",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2026"
  },
  {
    "id": "226321522959056896",
    "pseudo": "Alex | Nikzebi",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "17/03/2024"
  },
  {
    "id": "226999338709024768",
    "pseudo": "Jon Random",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "14/04/2024"
  },
  {
    "id": "227013214871748609",
    "pseudo": "Leny_Chang",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/12/2023"
  },
  {
    "id": "227025223503839232",
    "pseudo": "Ibmc_grogu",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "12/03/2026"
  },
  {
    "id": "227092044823134208",
    "pseudo": "豺狼",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/06/2024"
  },
  {
    "id": "227465763299131392",
    "pseudo": "Aldor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/03/2025"
  },
  {
    "id": "227802172367175700",
    "pseudo": "Jean Michel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/03/2025"
  },
  {
    "id": "227824196816732162",
    "pseudo": "Areac",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/02/2026"
  },
  {
    "id": "228065854808522752",
    "pseudo": "Evurus",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/04/2024"
  },
  {
    "id": "228162290766053376",
    "pseudo": "ShisakaKurosora (Shiku)",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2025"
  },
  {
    "id": "228547329941176321",
    "pseudo": "Iota",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2025"
  },
  {
    "id": "228569447353286656",
    "pseudo": "Teix",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/03/2024"
  },
  {
    "id": "228581574436716554",
    "pseudo": "endless1506",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/04/2025"
  },
  {
    "id": "228912223974719488",
    "pseudo": "Le Fléau",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/03/2024"
  },
  {
    "id": "229015821374980099",
    "pseudo": "Luco",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/04/2025"
  },
  {
    "id": "229525132996116480",
    "pseudo": "[2nd] Dromarius",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "15/04/2024"
  },
  {
    "id": "229629600278249472",
    "pseudo": "Dimitri",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/07/2024"
  },
  {
    "id": "229701752499339265",
    "pseudo": "ActionDumbo",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/08/2024"
  },
  {
    "id": "229913439152111616",
    "pseudo": "Biinocle",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/11/2024"
  },
  {
    "id": "229977250756427777",
    "pseudo": "don_vito6553",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/12/2024"
  },
  {
    "id": "230010505262137344",
    "pseudo": "[CCH] VECTOR2709 [FR]",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "03/07/2024"
  },
  {
    "id": "230699044303798272",
    "pseudo": "Talisko",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/08/2024"
  },
  {
    "id": "230752944176234497",
    "pseudo": "vinczerr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2026"
  },
  {
    "id": "231804488841822208",
    "pseudo": "Θpααchki",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/02/2026"
  },
  {
    "id": "231840336182378498",
    "pseudo": "Astroz59",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/09/2024"
  },
  {
    "id": "231883702810968065",
    "pseudo": "Aquaman™",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "13/04/2024"
  },
  {
    "id": "232129544935571456",
    "pseudo": "P4NEL",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/04/2025"
  },
  {
    "id": "232138643391643650",
    "pseudo": "ChIbralTar",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/08/2024"
  },
  {
    "id": "232198676922105857",
    "pseudo": "Etilis",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "20/10/2024"
  },
  {
    "id": "232215380058177536",
    "pseudo": "John Creen",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2025"
  },
  {
    "id": "232527844188749826",
    "pseudo": "Gossodjih",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/10/2024"
  },
  {
    "id": "232758003080757249",
    "pseudo": "fifi37",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/12/2024"
  },
  {
    "id": "232881579960172545",
    "pseudo": "Bobby Rossy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/02/2025"
  },
  {
    "id": "233663404714229760",
    "pseudo": "EhrN",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/11/2024"
  },
  {
    "id": "233867943061094401",
    "pseudo": "brunox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2025"
  },
  {
    "id": "233969805705740288",
    "pseudo": "Shakaah",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/11/2025"
  },
  {
    "id": "234005888128516096",
    "pseudo": "acoqueret",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/10/2024"
  },
  {
    "id": "234637592891621377",
    "pseudo": "kauradox_",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "03/11/2025"
  },
  {
    "id": "234661038245675010",
    "pseudo": "MiellPops",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "18/02/2024"
  },
  {
    "id": "234726360013209600",
    "pseudo": "zenders",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/11/2024"
  },
  {
    "id": "235134089529786368",
    "pseudo": "Varask",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "19/04/2025"
  },
  {
    "id": "235452445084352513",
    "pseudo": "Tikitek",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/02/2026"
  },
  {
    "id": "235772426162536448",
    "pseudo": "Element",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2025"
  },
  {
    "id": "236205557290237952",
    "pseudo": "404NOTFOUND",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/06/2024"
  },
  {
    "id": "236552946274271232",
    "pseudo": "Shurilex",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/05/2025"
  },
  {
    "id": "236947091266469888",
    "pseudo": "venstyle",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/02/2025"
  },
  {
    "id": "237141083438448640",
    "pseudo": "LilYang",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2026"
  },
  {
    "id": "237194852054466560",
    "pseudo": "Goro",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/12/2023"
  },
  {
    "id": "237617544977055746",
    "pseudo": "[BDRG] H2",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2026"
  },
  {
    "id": "237657452798148609",
    "pseudo": "Youroichima",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/01/2025"
  },
  {
    "id": "238005946343751681",
    "pseudo": "Tyypal",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/09/2025"
  },
  {
    "id": "238024952014569472",
    "pseudo": "darkminos",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2025"
  },
  {
    "id": "238033877103280128",
    "pseudo": "NIXIN",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/01/2026"
  },
  {
    "id": "238390672300703744",
    "pseudo": "Brandoux",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "238419702177726469",
    "pseudo": "DadaiLama",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/07/2025"
  },
  {
    "id": "238440688230858753",
    "pseudo": "Sgt Dsbr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "238704603493826560",
    "pseudo": "In_Horror",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2025"
  },
  {
    "id": "238789435095908373",
    "pseudo": "LeBleu",
    "role": "Cadre",
    "grade": "Lieutenant",
    "joinDate": "09/01/2024"
  },
  {
    "id": "238961789499342849",
    "pseudo": "Valt",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2026"
  },
  {
    "id": "239050246326452225",
    "pseudo": "Riddick",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/11/2025"
  },
  {
    "id": "239051213155467264",
    "pseudo": "nbk-utah14",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2026"
  },
  {
    "id": "239072670669340673",
    "pseudo": "Billy the merc of the afterlife",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/07/2025"
  },
  {
    "id": "239521514737631242",
    "pseudo": "EGz Cookeo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/02/2025"
  },
  {
    "id": "239684112032464896",
    "pseudo": "Guizmo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/07/2025"
  },
  {
    "id": "239766903697047553",
    "pseudo": "Hamuul57",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/01/2025"
  },
  {
    "id": "240078889693609984",
    "pseudo": "guiyhom",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/04/2024"
  },
  {
    "id": "240152997517197312",
    "pseudo": "Maaxx.-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "240161704908947459",
    "pseudo": "Dylandidou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2025"
  },
  {
    "id": "240259799856578561",
    "pseudo": "ChocoBon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/12/2023"
  },
  {
    "id": "240424506609500160",
    "pseudo": "acid",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2024"
  },
  {
    "id": "240471762960121857",
    "pseudo": "Remss",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/07/2024"
  },
  {
    "id": "240482363224621058",
    "pseudo": "GSGFXCC",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/02/2024"
  },
  {
    "id": "240524538402701313",
    "pseudo": "French-DUDE.exe",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/05/2025"
  },
  {
    "id": "240529472317685760",
    "pseudo": "FingerFRK",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "27/02/2026"
  },
  {
    "id": "240569765159108608",
    "pseudo": "𝓢𝓪𝓴𝓾",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/03/2025"
  },
  {
    "id": "240580447103352833",
    "pseudo": "kurios",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/09/2025"
  },
  {
    "id": "240666936411684864",
    "pseudo": "kyerann",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2024"
  },
  {
    "id": "240877169075552256",
    "pseudo": "HPNC Ssspiderrr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/01/2025"
  },
  {
    "id": "240937929940140045",
    "pseudo": "Milsroots",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/03/2026"
  },
  {
    "id": "240958002914525184",
    "pseudo": "Epsilon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/08/2025"
  },
  {
    "id": "241214529063747584",
    "pseudo": "Pacha",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2025"
  },
  {
    "id": "241223462876741633",
    "pseudo": "🌙♛Yankee♛🌙",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/05/2024"
  },
  {
    "id": "241321242559381514",
    "pseudo": "Shoggy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/09/2025"
  },
  {
    "id": "241629777167908864",
    "pseudo": "J4g0n",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "28/01/2024"
  },
  {
    "id": "241644259332194304",
    "pseudo": "Adam",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2026"
  },
  {
    "id": "241978719277809665",
    "pseudo": "TheDuduhast",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "10/04/2025"
  },
  {
    "id": "242006064608837635",
    "pseudo": "‘રίckøn",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/12/2024"
  },
  {
    "id": "242421217422737409",
    "pseudo": "Paul",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/06/2024"
  },
  {
    "id": "242595709092757505",
    "pseudo": "Ketzon Veraun",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/12/2023"
  },
  {
    "id": "242752645150801932",
    "pseudo": "loorenzoo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/01/2025"
  },
  {
    "id": "242850850110701568",
    "pseudo": "PRIMUS",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2026"
  },
  {
    "id": "243371459022553089",
    "pseudo": "Romain welle",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2024"
  },
  {
    "id": "243752114176655360",
    "pseudo": "Volkar[FR]",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2026"
  },
  {
    "id": "243775834769326081",
    "pseudo": "Eliniaume",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/07/2024"
  },
  {
    "id": "244059119554658304",
    "pseudo": "Hybris95",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/03/2025"
  },
  {
    "id": "244225657624723476",
    "pseudo": "Chumlee | Mr Animal",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/11/2024"
  },
  {
    "id": "244258487050174464",
    "pseudo": "Awaken 🦄",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/03/2024"
  },
  {
    "id": "244550319445508096",
    "pseudo": "Fasterz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/01/2025"
  },
  {
    "id": "244962388070236160",
    "pseudo": "Pacivit!",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/02/2026"
  },
  {
    "id": "245201433115230210",
    "pseudo": "Sosaa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/03/2025"
  },
  {
    "id": "245365769389473803",
    "pseudo": "CoIdexorcist",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "13/02/2024"
  },
  {
    "id": "245558490767163392",
    "pseudo": "Croc",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "04/06/2024"
  },
  {
    "id": "245768347105492993",
    "pseudo": "Sinok",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "13/04/2025"
  },
  {
    "id": "245842516832813057",
    "pseudo": "-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/05/2025"
  },
  {
    "id": "246312253001957376",
    "pseudo": "TiTiEnKX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/01/2025"
  },
  {
    "id": "246369232994959360",
    "pseudo": "Owls Vision",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/09/2024"
  },
  {
    "id": "246653637361664000",
    "pseudo": "Fez",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "29/08/2025"
  },
  {
    "id": "246954641617715200",
    "pseudo": "𝑹𝒆𝒎𝒔𝒔𝒊𝒍𝒗𝒂𝑯𝑫",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "15/01/2025"
  },
  {
    "id": "247333538943336448",
    "pseudo": "spoko_57",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2025"
  },
  {
    "id": "247431240188297216",
    "pseudo": "STAN",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/09/2024"
  },
  {
    "id": "247468296851554305",
    "pseudo": "XDarkDamone",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/06/2025"
  },
  {
    "id": "247679828579450881",
    "pseudo": "WickedKingston",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/04/2025"
  },
  {
    "id": "247773326901116928",
    "pseudo": "SolomonX7",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/05/2025"
  },
  {
    "id": "247852787465977856",
    "pseudo": "Jul3s22",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/12/2025"
  },
  {
    "id": "248908099744694273",
    "pseudo": "Go0dSpe3D-Fr-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2025"
  },
  {
    "id": "248940112774168577",
    "pseudo": "guillaume trimota",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2026"
  },
  {
    "id": "249256224296665088",
    "pseudo": "OTAK_Julien",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2026"
  },
  {
    "id": "249277312585957388",
    "pseudo": "Arktis",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/06/2024"
  },
  {
    "id": "249303697727815680",
    "pseudo": "Laiyen",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2026"
  },
  {
    "id": "249303863180525568",
    "pseudo": "_kenobi_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/07/2025"
  },
  {
    "id": "249330842566918147",
    "pseudo": "✪ UlikΛ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/03/2025"
  },
  {
    "id": "249535291784822784",
    "pseudo": "Ikanee",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2025"
  },
  {
    "id": "249622068306378752",
    "pseudo": "kao",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "07/07/2024"
  },
  {
    "id": "249825467639529472",
    "pseudo": "ElPortoricano",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2025"
  },
  {
    "id": "249958335585976320",
    "pseudo": "Ralphito",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/06/2025"
  },
  {
    "id": "250012245222883329",
    "pseudo": "Théotime",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "07/07/2024"
  },
  {
    "id": "251009461286731776",
    "pseudo": "Kanna",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "31/10/2025"
  },
  {
    "id": "251375360405536768",
    "pseudo": "remilebon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/04/2026"
  },
  {
    "id": "251394997725691905",
    "pseudo": "...",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2024"
  },
  {
    "id": "252524240643948546",
    "pseudo": "foxryders",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2025"
  },
  {
    "id": "252875495798996993",
    "pseudo": "lesoliloqueur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2025"
  },
  {
    "id": "253251741665984513",
    "pseudo": "Smoghost",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2024"
  },
  {
    "id": "253271477011349504",
    "pseudo": "Le Tchétchène",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/06/2025"
  },
  {
    "id": "253577157144477696",
    "pseudo": "DarkMoineau",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/02/2025"
  },
  {
    "id": "253971117113475072",
    "pseudo": "Waxis",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "24/03/2026"
  },
  {
    "id": "253985667632070657",
    "pseudo": "Twister",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/05/2024"
  },
  {
    "id": "254361872013328384",
    "pseudo": "Arak",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/02/2025"
  },
  {
    "id": "254369258560028672",
    "pseudo": "critical",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/12/2025"
  },
  {
    "id": "254711275873894401",
    "pseudo": "˛˛M̳̋r̻̃.̙͌ho̥͑n̳͑z.̜̑a•^1˛7.̜̑0",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2025"
  },
  {
    "id": "254886097090248705",
    "pseudo": "ludo Velentzas",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/01/2026"
  },
  {
    "id": "255117747342671873",
    "pseudo": "Mr Tacos",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/03/2025"
  },
  {
    "id": "255355752108130304",
    "pseudo": "Shiryu45300",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/10/2024"
  },
  {
    "id": "255636524912082944",
    "pseudo": "Thanatos-Diaz",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/06/2025"
  },
  {
    "id": "256111993629442049",
    "pseudo": "Yzzer",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2025"
  },
  {
    "id": "256877715284557825",
    "pseudo": "LycoZaK",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/04/2025"
  },
  {
    "id": "257529711419326465",
    "pseudo": "RogerDeLaBiere",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2024"
  },
  {
    "id": "257586141597794305",
    "pseudo": "OMGitsMat08",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/03/2025"
  },
  {
    "id": "257907693103218690",
    "pseudo": "Monsieurpoubelle",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2026"
  },
  {
    "id": "257973550600814593",
    "pseudo": "Arckohan",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/06/2025"
  },
  {
    "id": "257976914898059277",
    "pseudo": "tobiltox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "258000884825325569",
    "pseudo": "Pedrouchka",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "258336565279981570",
    "pseudo": "Dabi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/04/2024"
  },
  {
    "id": "258349007087206401",
    "pseudo": "Drake",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/08/2025"
  },
  {
    "id": "258650924606554112",
    "pseudo": "MacSpudz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/03/2025"
  },
  {
    "id": "258705640401141760",
    "pseudo": "! [OTEA] Adri3n",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/04/2024"
  },
  {
    "id": "259277779604865024",
    "pseudo": "Nitram",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2025"
  },
  {
    "id": "259287368954019840",
    "pseudo": "VendeurDeMoula",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/07/2025"
  },
  {
    "id": "259370955313250304",
    "pseudo": "Irz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2024"
  },
  {
    "id": "259403878095781889",
    "pseudo": "Be  Dirty",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/04/2025"
  },
  {
    "id": "259438052307501057",
    "pseudo": "Arcli0n",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/01/2026"
  },
  {
    "id": "259627592091435008",
    "pseudo": "L.Recker",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/04/2025"
  },
  {
    "id": "259638891131174912",
    "pseudo": "Jo Colson",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/08/2025"
  },
  {
    "id": "259640301696712705",
    "pseudo": "Mrtitou14",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/09/2025"
  },
  {
    "id": "259665086782767105",
    "pseudo": "Hans",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "04/02/2024"
  },
  {
    "id": "259774251924455424",
    "pseudo": "[LSV]BARACOUDA",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/03/2025"
  },
  {
    "id": "260070465324843018",
    "pseudo": "CHAMPION !!!!!",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2025"
  },
  {
    "id": "260123322765934592",
    "pseudo": "Rytho",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/05/2025"
  },
  {
    "id": "260167907873521668",
    "pseudo": "[1CL]Beric61",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "06/02/2025"
  },
  {
    "id": "260168135280164864",
    "pseudo": "teambug",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2026"
  },
  {
    "id": "260482568305115137",
    "pseudo": "LcTd Zoorux",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2024"
  },
  {
    "id": "260531634049122304",
    "pseudo": "Papy Apéro",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/05/2024"
  },
  {
    "id": "260620029186408459",
    "pseudo": "SuNNy94",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/06/2024"
  },
  {
    "id": "260743080347435009",
    "pseudo": "Bubulle257606",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/04/2026"
  },
  {
    "id": "261176380794994709",
    "pseudo": "NameToken",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2024"
  },
  {
    "id": "261189550016167936",
    "pseudo": "Max Verne",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/04/2025"
  },
  {
    "id": "261270019898343434",
    "pseudo": "Re",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2025"
  },
  {
    "id": "261564110750220299",
    "pseudo": "2nd Cl - Fiver",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "14/04/2024"
  },
  {
    "id": "261842338094120960",
    "pseudo": "Brome",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/07/2025"
  },
  {
    "id": "261993433974046723",
    "pseudo": "Bigo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/05/2025"
  },
  {
    "id": "262001390413414400",
    "pseudo": "Smokee",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/11/2024"
  },
  {
    "id": "262169655949393920",
    "pseudo": "Kraken",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2026"
  },
  {
    "id": "262199048302231554",
    "pseudo": "Stash",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2025"
  },
  {
    "id": "262695934612340737",
    "pseudo": "Neitsek",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/06/2024"
  },
  {
    "id": "262880771386245121",
    "pseudo": "Shelbyma",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/01/2025"
  },
  {
    "id": "262971593192374272",
    "pseudo": "Taurathor 🐂",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/03/2026"
  },
  {
    "id": "263292186102071298",
    "pseudo": "Manu",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/12/2024"
  },
  {
    "id": "263322102713679887",
    "pseudo": "Bonetto",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/12/2025"
  },
  {
    "id": "263330949540872192",
    "pseudo": "Cpt. Steel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/01/2025"
  },
  {
    "id": "263351344839131137",
    "pseudo": "Slava",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2025"
  },
  {
    "id": "263661987974742016",
    "pseudo": "Chuck Maurice",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/04/2026"
  },
  {
    "id": "263833976601313282",
    "pseudo": "barasse13",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "28/09/2025"
  },
  {
    "id": "263854153015492609",
    "pseudo": "Flyerz94",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/02/2026"
  },
  {
    "id": "264084517378195456",
    "pseudo": "MaDeuFR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/04/2025"
  },
  {
    "id": "264115402060070912",
    "pseudo": "corso",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/11/2025"
  },
  {
    "id": "264321361688657924",
    "pseudo": "Zayross",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "03/04/2024"
  },
  {
    "id": "264480823829331969",
    "pseudo": "Jules",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/01/2026"
  },
  {
    "id": "264509020310732811",
    "pseudo": "[14e] Tom",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/11/2024"
  },
  {
    "id": "264515833861111808",
    "pseudo": "Xenus77",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/09/2025"
  },
  {
    "id": "264759544826036244",
    "pseudo": "Jeronimaux",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "28/11/2024"
  },
  {
    "id": "265463341756055554",
    "pseudo": "Spectre",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/01/2025"
  },
  {
    "id": "265488067660349440",
    "pseudo": "Niten",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/01/2025"
  },
  {
    "id": "265506164731543553",
    "pseudo": "MG (Bzh RPZ)",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/04/2025"
  },
  {
    "id": "265557261512998912",
    "pseudo": "Azad-igc",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/07/2025"
  },
  {
    "id": "265612215808294922",
    "pseudo": "HKyo63",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/12/2023"
  },
  {
    "id": "265881361204641792",
    "pseudo": "SeigneuRecidive",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/01/2026"
  },
  {
    "id": "265891584690749443",
    "pseudo": "UnikAlex",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/08/2025"
  },
  {
    "id": "265937002237657088",
    "pseudo": "Solcarlus",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/03/2025"
  },
  {
    "id": "265964795197390849",
    "pseudo": "WhiZzPeR",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "01/03/2025"
  },
  {
    "id": "265972392407465984",
    "pseudo": "[CDO] Djmika50",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/06/2024"
  },
  {
    "id": "266186052937580544",
    "pseudo": "Puff",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2026"
  },
  {
    "id": "266276034163376128",
    "pseudo": "ThE_GrUdGe_50",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/10/2024"
  },
  {
    "id": "266334636496519169",
    "pseudo": "RogueOne59",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/12/2024"
  },
  {
    "id": "266617464865947649",
    "pseudo": "Zanarak",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/03/2026"
  },
  {
    "id": "266679107645865985",
    "pseudo": "Drit Lum",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/08/2024"
  },
  {
    "id": "267009963963056128",
    "pseudo": "Driver Nephi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/07/2025"
  },
  {
    "id": "267086961368498176",
    "pseudo": "nono le belge",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2025"
  },
  {
    "id": "267402238341808128",
    "pseudo": "Monkeyy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/03/2025"
  },
  {
    "id": "267444772690460682",
    "pseudo": "Klik Le Arai",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2025"
  },
  {
    "id": "267719797746171904",
    "pseudo": "FISHBONE.BZH",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/01/2024"
  },
  {
    "id": "267726972212346890",
    "pseudo": "Neil",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2024"
  },
  {
    "id": "268378015556304906",
    "pseudo": "Hug's",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/08/2025"
  },
  {
    "id": "268516692462665728",
    "pseudo": "BEAR55",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/03/2026"
  },
  {
    "id": "269192977031626753",
    "pseudo": "bast",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2024"
  },
  {
    "id": "269222574305705984",
    "pseudo": "Aspirine",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/02/2026"
  },
  {
    "id": "269554899824541696",
    "pseudo": "Magdhaa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/03/2025"
  },
  {
    "id": "269558478165639173",
    "pseudo": "Ƒ𝐫ꭥᧁᧁꭚ ᒍʊɱҏ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2025"
  },
  {
    "id": "269570693677449216",
    "pseudo": "Rockmate",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/01/2025"
  },
  {
    "id": "269588978020253696",
    "pseudo": "Sgt.Belette",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2025"
  },
  {
    "id": "269815174133710850",
    "pseudo": "J0jio",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2025"
  },
  {
    "id": "269958482722160647",
    "pseudo": "FR ZyRoXSN",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/07/2025"
  },
  {
    "id": "269970065225547776",
    "pseudo": "Ywis-BarreOblik",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/11/2024"
  },
  {
    "id": "270166664086159360",
    "pseudo": "MrBideman",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/06/2025"
  },
  {
    "id": "270218266721386497",
    "pseudo": "Napouille",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/03/2025"
  },
  {
    "id": "270221456946757632",
    "pseudo": "Cyrilou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/07/2025"
  },
  {
    "id": "270231851820515328",
    "pseudo": "Tartine",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/06/2025"
  },
  {
    "id": "270360722603638807",
    "pseudo": "Martine des ressources humaines",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/12/2024"
  },
  {
    "id": "270945070725857280",
    "pseudo": "Savon MacTavish",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/02/2024"
  },
  {
    "id": "271011694212415498",
    "pseudo": "Glumas",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2025"
  },
  {
    "id": "271023010490613771",
    "pseudo": "Maverick",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "20/10/2025"
  },
  {
    "id": "271269577785081856",
    "pseudo": "WatchWater",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/12/2025"
  },
  {
    "id": "271325234538348546",
    "pseudo": "Nikos",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/03/2025"
  },
  {
    "id": "271375163595948033",
    "pseudo": "AKULA-57",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/02/2026"
  },
  {
    "id": "271704540791832576",
    "pseudo": "Bigjoe",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/02/2024"
  },
  {
    "id": "272406356349419522",
    "pseudo": "N o c t i s",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "12/04/2026"
  },
  {
    "id": "272422672565141505",
    "pseudo": "Winters FRA",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "16/05/2024"
  },
  {
    "id": "272719915205656578",
    "pseudo": "Woody",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/02/2026"
  },
  {
    "id": "272767352972640257",
    "pseudo": "Ludeau",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "26/01/2025"
  },
  {
    "id": "272783061886959618",
    "pseudo": "Azenor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/01/2026"
  },
  {
    "id": "272825832680980492",
    "pseudo": "CCH. Le_S",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "07/04/2025"
  },
  {
    "id": "272881488746250241",
    "pseudo": "Dovahgolz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2026"
  },
  {
    "id": "273117467050639360",
    "pseudo": "BigBigs",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/06/2025"
  },
  {
    "id": "273538994946703360",
    "pseudo": "Tumero97",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/04/2025"
  },
  {
    "id": "273559707367636992",
    "pseudo": "Minebrothers",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/08/2025"
  },
  {
    "id": "273624910776238080",
    "pseudo": "LMENTAL",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/03/2025"
  },
  {
    "id": "273796491192041472",
    "pseudo": "Zaboza",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/01/2025"
  },
  {
    "id": "273801552383311872",
    "pseudo": "Drakeyras",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/04/2025"
  },
  {
    "id": "273862135161815041",
    "pseudo": "Ｓｈｉｂｕ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/01/2025"
  },
  {
    "id": "274500046710505472",
    "pseudo": "Jo For Real",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/11/2025"
  },
  {
    "id": "274558794812489729",
    "pseudo": "Raven",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/09/2025"
  },
  {
    "id": "274572320817807360",
    "pseudo": "cpasfaux-_-40",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/07/2025"
  },
  {
    "id": "274651862672867329",
    "pseudo": "avalon95",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/04/2025"
  },
  {
    "id": "274698744614617090",
    "pseudo": "TopGun978421",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "274882088052981761",
    "pseudo": "Dust",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "275240086558474241",
    "pseudo": "Sheru",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/08/2025"
  },
  {
    "id": "275284103656636421",
    "pseudo": "Tontondam",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/03/2025"
  },
  {
    "id": "275295230205362187",
    "pseudo": "MasWap",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/11/2025"
  },
  {
    "id": "275315457324613632",
    "pseudo": "maksime0486",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/01/2025"
  },
  {
    "id": "275660586405330944",
    "pseudo": "John Boulman",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/04/2026"
  },
  {
    "id": "275678336355663873",
    "pseudo": "MerkavaOnGazaStrip",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/01/2025"
  },
  {
    "id": "275698188604669953",
    "pseudo": "BRANDON",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/01/2026"
  },
  {
    "id": "275890698153099275",
    "pseudo": "ACA Thibaut G #33",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/08/2025"
  },
  {
    "id": "276399568898228224",
    "pseudo": "Porto",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "15/01/2024"
  },
  {
    "id": "276412420409262081",
    "pseudo": "Kévin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/07/2024"
  },
  {
    "id": "276703251829620746",
    "pseudo": "Glawiyah",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/03/2025"
  },
  {
    "id": "277006002262638592",
    "pseudo": "belhiam",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/05/2025"
  },
  {
    "id": "277114656546357249",
    "pseudo": "don't kill my chicken",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/08/2025"
  },
  {
    "id": "277182879744786432",
    "pseudo": "Caffran Dermon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/04/2025"
  },
  {
    "id": "277500220626173963",
    "pseudo": "Boud39",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/05/2024"
  },
  {
    "id": "277626307456532480",
    "pseudo": "Shemssi38",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/01/2025"
  },
  {
    "id": "277907680830423041",
    "pseudo": "Seven",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/02/2025"
  },
  {
    "id": "277908638490951680",
    "pseudo": "Korsa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2026"
  },
  {
    "id": "277917855813468160",
    "pseudo": "Reddison",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2024"
  },
  {
    "id": "277953041045520394",
    "pseudo": "SkRo iSkyRoW (Denovan)",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/01/2025"
  },
  {
    "id": "278156392676851712",
    "pseudo": "Jojolefoufurieu",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/01/2026"
  },
  {
    "id": "278233286176669696",
    "pseudo": "BellaItalia",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/07/2024"
  },
  {
    "id": "278637126533513217",
    "pseudo": "[TS] White",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/09/2024"
  },
  {
    "id": "278875899737145344",
    "pseudo": "Hotsider",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/05/2024"
  },
  {
    "id": "278972029112287233",
    "pseudo": "Yac",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2025"
  },
  {
    "id": "279621164723208196",
    "pseudo": "Karym",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/06/2024"
  },
  {
    "id": "279756811307974656",
    "pseudo": "MoiNo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/11/2024"
  },
  {
    "id": "280274848423608330",
    "pseudo": "Parox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2025"
  },
  {
    "id": "280393969915920386",
    "pseudo": "WardZirlax",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/04/2024"
  },
  {
    "id": "281003225891471362",
    "pseudo": "LePoulpeDivin",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "26/02/2026"
  },
  {
    "id": "281093616099655683",
    "pseudo": "Rustio",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/05/2025"
  },
  {
    "id": "281107312096182272",
    "pseudo": "Venom_Snake_63",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/01/2025"
  },
  {
    "id": "281144549651513344",
    "pseudo": "Walk'n",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "31/03/2024"
  },
  {
    "id": "281177749929066496",
    "pseudo": "Nikolai Volkov",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/12/2024"
  },
  {
    "id": "281179882245849089",
    "pseudo": "Shaun",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2024"
  },
  {
    "id": "281202165551202305",
    "pseudo": "Nishi.Exo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2025"
  },
  {
    "id": "281415795710623764",
    "pseudo": "Zorg",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "11/07/2024"
  },
  {
    "id": "281843489480900609",
    "pseudo": "Vivax",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/06/2025"
  },
  {
    "id": "281930136541200386",
    "pseudo": "hardcomix",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/11/2024"
  },
  {
    "id": "282155765760917505",
    "pseudo": "Xeoju",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2024"
  },
  {
    "id": "282259907749609472",
    "pseudo": "KyleVI",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/03/2025"
  },
  {
    "id": "282275693012975616",
    "pseudo": "Kiros",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2025"
  },
  {
    "id": "282496808784232448",
    "pseudo": "CoolSpy",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/09/2024"
  },
  {
    "id": "282522419493863435",
    "pseudo": "CCH bacus135",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "07/02/2024"
  },
  {
    "id": "282601443901308929",
    "pseudo": "[MoC] Satir",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/01/2026"
  },
  {
    "id": "282602454409936896",
    "pseudo": "TheWolfKiller92",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/04/2024"
  },
  {
    "id": "282611538332745728",
    "pseudo": "Captain Rafael",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/12/2024"
  },
  {
    "id": "282839789248577536",
    "pseudo": "CoGite_MGT",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/05/2025"
  },
  {
    "id": "282901110019063811",
    "pseudo": "Mr.Ouille",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/04/2024"
  },
  {
    "id": "282974271540559873",
    "pseudo": "FrM | Peet",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/05/2024"
  },
  {
    "id": "282982775907155969",
    "pseudo": "[CTR] L'AK",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/01/2025"
  },
  {
    "id": "282998200149999616",
    "pseudo": "retryyy",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/12/2025"
  },
  {
    "id": "283183424188186624",
    "pseudo": "Pixtek",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/11/2024"
  },
  {
    "id": "283302752245907456",
    "pseudo": "hichammsellem",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2025"
  },
  {
    "id": "283327246175961089",
    "pseudo": "scatman",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "02/07/2025"
  },
  {
    "id": "283522648271618048",
    "pseudo": "king sluckyyy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2025"
  },
  {
    "id": "283625534670503936",
    "pseudo": "IA44",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/07/2025"
  },
  {
    "id": "283654492275081216",
    "pseudo": "AwZ_SkYxLeD",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "283991578492665857",
    "pseudo": "NooByx",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/04/2025"
  },
  {
    "id": "284028470634217472",
    "pseudo": "miniRouf",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/03/2025"
  },
  {
    "id": "284075642792837120",
    "pseudo": "Mael8622",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2025"
  },
  {
    "id": "284331711607603210",
    "pseudo": "Maaazlow",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/04/2024"
  },
  {
    "id": "284344269479739393",
    "pseudo": "Alpax",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/01/2026"
  },
  {
    "id": "284372326542213121",
    "pseudo": "Ivaannes",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/03/2025"
  },
  {
    "id": "284374672362045441",
    "pseudo": "Jeff3130",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/01/2025"
  },
  {
    "id": "284673994270048266",
    "pseudo": "[FR] Jéjé",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/10/2025"
  },
  {
    "id": "284747839647776768",
    "pseudo": "tibof",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/04/2025"
  },
  {
    "id": "284793726847549440",
    "pseudo": "Manoel Jager",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/09/2025"
  },
  {
    "id": "284814412878053386",
    "pseudo": "Hypoxi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2026"
  },
  {
    "id": "284995068115550209",
    "pseudo": "Albator",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/07/2024"
  },
  {
    "id": "285143575946067971",
    "pseudo": "Beearzzzz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/12/2024"
  },
  {
    "id": "285153882508886016",
    "pseudo": "=ATM= Nomad",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "26/05/2024"
  },
  {
    "id": "285356704571326464",
    "pseudo": "pierrotLeFou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/03/2025"
  },
  {
    "id": "285398646181330954",
    "pseudo": "chibraltard",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/02/2025"
  },
  {
    "id": "285437566793154560",
    "pseudo": "Gaik0o",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/01/2026"
  },
  {
    "id": "285849736471379971",
    "pseudo": "asmeday6811",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/02/2026"
  },
  {
    "id": "285863710336090114",
    "pseudo": "Jak",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2024"
  },
  {
    "id": "285875808990658563",
    "pseudo": "Noob Noob",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/06/2025"
  },
  {
    "id": "285881442230075393",
    "pseudo": "zoulou92.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2025"
  },
  {
    "id": "286101900061966337",
    "pseudo": "Suka",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/08/2025"
  },
  {
    "id": "286253503418990593",
    "pseudo": "biggs",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "286923828180025345",
    "pseudo": "Yulen",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/09/2025"
  },
  {
    "id": "286952527331590144",
    "pseudo": "OUAF",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2025"
  },
  {
    "id": "287166165510258688",
    "pseudo": "Brokk",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "20/04/2024"
  },
  {
    "id": "287211120995991552",
    "pseudo": "Awaz__",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/04/2025"
  },
  {
    "id": "287256696638930945",
    "pseudo": "Pyrat_Reta",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/12/2024"
  },
  {
    "id": "287573685395652608",
    "pseudo": "BlinGr3g",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2025"
  },
  {
    "id": "287595478936322048",
    "pseudo": "LuciNotFair",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/07/2024"
  },
  {
    "id": "287933510923321355",
    "pseudo": "noham3601",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/01/2025"
  },
  {
    "id": "287996013673840652",
    "pseudo": "Zenatov",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "17/04/2024"
  },
  {
    "id": "288700152234115073",
    "pseudo": "ProJecT",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/03/2026"
  },
  {
    "id": "288705680590897152",
    "pseudo": "neutrality_neo",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/07/2025"
  },
  {
    "id": "289021186749235200",
    "pseudo": "BENJBEC",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/08/2025"
  },
  {
    "id": "289065409297121280",
    "pseudo": "bluelines56",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/12/2024"
  },
  {
    "id": "289483486379769856",
    "pseudo": "Dylan Macmillan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/12/2024"
  },
  {
    "id": "289833793370456074",
    "pseudo": "Nebeul",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2024"
  },
  {
    "id": "289890077289611264",
    "pseudo": "Kretin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2025"
  },
  {
    "id": "290093253791973376",
    "pseudo": "MatheM",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/03/2024"
  },
  {
    "id": "290443112642379786",
    "pseudo": "Steve Thunder",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/11/2024"
  },
  {
    "id": "290455969928970240",
    "pseudo": "lolo165x",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/11/2025"
  },
  {
    "id": "290509937937874944",
    "pseudo": "HypnoKz",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/03/2025"
  },
  {
    "id": "290522054933872641",
    "pseudo": "yann",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/07/2025"
  },
  {
    "id": "290540319056068608",
    "pseudo": "=Valentin=",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/09/2025"
  },
  {
    "id": "290632036031660032",
    "pseudo": "Diebymee",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2025"
  },
  {
    "id": "290912166658441216",
    "pseudo": "Krapito",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/07/2025"
  },
  {
    "id": "290931445407547393",
    "pseudo": "KohTiger6",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/01/2025"
  },
  {
    "id": "290982616973312011",
    "pseudo": "DEZIIAFromFutur",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/03/2025"
  },
  {
    "id": "291540275686277120",
    "pseudo": "yonko",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2026"
  },
  {
    "id": "291734273453457409",
    "pseudo": "Okeef",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2025"
  },
  {
    "id": "291955122316115969",
    "pseudo": "Niels Sarys",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/11/2024"
  },
  {
    "id": "291999633662541825",
    "pseudo": "Tizo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/01/2025"
  },
  {
    "id": "292046735218573313",
    "pseudo": "Silv3r G4m3r",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "292647726452047883",
    "pseudo": "Prim",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/04/2026"
  },
  {
    "id": "292668137357443072",
    "pseudo": "PT_YaYo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/01/2025"
  },
  {
    "id": "292699676438691842",
    "pseudo": "Ghost",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2025"
  },
  {
    "id": "292756056440832031",
    "pseudo": "Morlax",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/04/2025"
  },
  {
    "id": "293824581087789068",
    "pseudo": "CaptainD492637",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/03/2025"
  },
  {
    "id": "294527586002796544",
    "pseudo": "ireal",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/01/2026"
  },
  {
    "id": "294766045464363008",
    "pseudo": "GéNéRal’ Pryce",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/07/2024"
  },
  {
    "id": "294790796782075915",
    "pseudo": "Skydroox27",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/05/2025"
  },
  {
    "id": "294835107808673813",
    "pseudo": "Flyvur",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/06/2025"
  },
  {
    "id": "294889590240706560",
    "pseudo": "Dmz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/12/2024"
  },
  {
    "id": "294968899789783051",
    "pseudo": "M4RS",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/04/2024"
  },
  {
    "id": "295155157086502922",
    "pseudo": "jixreez",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2026"
  },
  {
    "id": "295238286581039104",
    "pseudo": "la.frite masqué",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/07/2024"
  },
  {
    "id": "295586519635460106",
    "pseudo": "WardogS09",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/02/2026"
  },
  {
    "id": "295592533994635275",
    "pseudo": "Antonio Dumartini",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2025"
  },
  {
    "id": "295632105801646082",
    "pseudo": "Alexandrović",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/05/2025"
  },
  {
    "id": "295660175237447691",
    "pseudo": "Sen",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/12/2023"
  },
  {
    "id": "295898521037701120",
    "pseudo": "MWK_Live",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/09/2025"
  },
  {
    "id": "295909102255865857",
    "pseudo": "NZR_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "296330503051673611",
    "pseudo": "-Blackzeer-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/11/2024"
  },
  {
    "id": "296458679996252161",
    "pseudo": "gibson25",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/10/2024"
  },
  {
    "id": "296638287160934400",
    "pseudo": "Starkanon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/02/2026"
  },
  {
    "id": "296691635490914304",
    "pseudo": "GorgorB[LeBreton]",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/06/2024"
  },
  {
    "id": "296692802547351555",
    "pseudo": "REAPERS",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/03/2025"
  },
  {
    "id": "296742279358578699",
    "pseudo": "Nyos",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "24/09/2025"
  },
  {
    "id": "297012952983142400",
    "pseudo": "vMv | Firma",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/07/2024"
  },
  {
    "id": "297383902299815937",
    "pseudo": "Pieck Finger",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/01/2025"
  },
  {
    "id": "297778952607629315",
    "pseudo": "djedu24",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/09/2025"
  },
  {
    "id": "297885053298671616",
    "pseudo": "Dr3Tonton4",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/07/2024"
  },
  {
    "id": "298114830571929601",
    "pseudo": "krakixx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2025"
  },
  {
    "id": "298148405966798850",
    "pseudo": "Apoca-Rider17",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/09/2025"
  },
  {
    "id": "298163208936751126",
    "pseudo": "Élodie",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/12/2024"
  },
  {
    "id": "298220999235862538",
    "pseudo": "Ender",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/02/2026"
  },
  {
    "id": "298754250660642816",
    "pseudo": "dumbo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/05/2024"
  },
  {
    "id": "299197295029649408",
    "pseudo": "michel",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/03/2026"
  },
  {
    "id": "299272009073033217",
    "pseudo": "Topaz 15",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "19/04/2024"
  },
  {
    "id": "299502104031264769",
    "pseudo": "GuailDU65",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "22/05/2024"
  },
  {
    "id": "299587653915901953",
    "pseudo": "Tdcdm691",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2026"
  },
  {
    "id": "299866176215973888",
    "pseudo": "cece1110",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/06/2025"
  },
  {
    "id": "299944028865036288",
    "pseudo": "LieutenantMaster",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/01/2026"
  },
  {
    "id": "299959148987154432",
    "pseudo": "Juillet",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2026"
  },
  {
    "id": "300009824719077377",
    "pseudo": "V",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/08/2025"
  },
  {
    "id": "300282000453926915",
    "pseudo": "Matt Paddock",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2025"
  },
  {
    "id": "300424438795730954",
    "pseudo": "Crop_Top",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/05/2024"
  },
  {
    "id": "300662824009596928",
    "pseudo": "16eeu2",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/06/2025"
  },
  {
    "id": "300995858068144129",
    "pseudo": "ɴʌᴍᴅʌᴋ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2025"
  },
  {
    "id": "301065511016464385",
    "pseudo": "El Poutros",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "301067361417560065",
    "pseudo": "ravageur18",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/06/2025"
  },
  {
    "id": "301400404543930368",
    "pseudo": "Logan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/03/2026"
  },
  {
    "id": "301811470839054338",
    "pseudo": "Petit Loup",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/03/2025"
  },
  {
    "id": "301839419940536321",
    "pseudo": "¢ＨＲ𝕀ş",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2024"
  },
  {
    "id": "302048469261090817",
    "pseudo": "RaPtoRSh4d0w 🇧🇪",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/09/2025"
  },
  {
    "id": "302048941204045825",
    "pseudo": "𝓝𝔂𝓻𝓸",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/01/2025"
  },
  {
    "id": "302059652542234625",
    "pseudo": "Antumns",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/01/2025"
  },
  {
    "id": "302127372637962250",
    "pseudo": "Mava971",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "27/01/2025"
  },
  {
    "id": "302162809071075330",
    "pseudo": "Vinchy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "302339088520970240",
    "pseudo": "Nahks",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/06/2024"
  },
  {
    "id": "302445302265151488",
    "pseudo": "MrBer",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2026"
  },
  {
    "id": "302452668247441409",
    "pseudo": "Golden",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/07/2024"
  },
  {
    "id": "302452924938715136",
    "pseudo": "Mael27",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/06/2025"
  },
  {
    "id": "302479325150838784",
    "pseudo": "Floki-Tnx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2025"
  },
  {
    "id": "302525523891060739",
    "pseudo": "Dørukoo  ♠",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "10/07/2025"
  },
  {
    "id": "302572927323209728",
    "pseudo": "YAMZHA",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/12/2025"
  },
  {
    "id": "302747145126281218",
    "pseudo": "Zerox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/10/2025"
  },
  {
    "id": "302850262748626946",
    "pseudo": "cplbagarre",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/02/2025"
  },
  {
    "id": "302854580675411971",
    "pseudo": "LittleCpt",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/07/2024"
  },
  {
    "id": "303472318502666240",
    "pseudo": "σƇнσ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2025"
  },
  {
    "id": "303544863138250753",
    "pseudo": "loupcingler",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2025"
  },
  {
    "id": "303579457577287680",
    "pseudo": "tony4000",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2025"
  },
  {
    "id": "303579832854380544",
    "pseudo": "Skan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/03/2026"
  },
  {
    "id": "303621533694296064",
    "pseudo": "TiitoBambino",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/08/2024"
  },
  {
    "id": "303875451259191307",
    "pseudo": "RAVEN | Ninox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/11/2024"
  },
  {
    "id": "303917194692001793",
    "pseudo": "BarBare Lotus",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/07/2024"
  },
  {
    "id": "303938348874203147",
    "pseudo": "Za!k",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/07/2025"
  },
  {
    "id": "303941778711511040",
    "pseudo": "Jack-Uzi",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/09/2025"
  },
  {
    "id": "304247436665421845",
    "pseudo": "HondaPowa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/03/2026"
  },
  {
    "id": "304253225505259521",
    "pseudo": "Skidz | EasyHeberg.fr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/12/2025"
  },
  {
    "id": "304365430322102273",
    "pseudo": "BILLY BOY LE VRAI",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/04/2024"
  },
  {
    "id": "304377240831918083",
    "pseudo": "rayan6960",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2026"
  },
  {
    "id": "304391000468488203",
    "pseudo": "zeus16300",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/02/2025"
  },
  {
    "id": "304578970857242635",
    "pseudo": "REDFalling",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2025"
  },
  {
    "id": "304624693091237908",
    "pseudo": "RedAlex",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/11/2024"
  },
  {
    "id": "304739804384329728",
    "pseudo": "SGT CHEF | benjamin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2024"
  },
  {
    "id": "304960082796347392",
    "pseudo": "Joe",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/08/2025"
  },
  {
    "id": "305062384366518272",
    "pseudo": "Maus",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/03/2025"
  },
  {
    "id": "305073401582583819",
    "pseudo": "jack",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2026"
  },
  {
    "id": "305289715748306954",
    "pseudo": "carol",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/02/2026"
  },
  {
    "id": "305353841396940813",
    "pseudo": "passionmarguerite",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/06/2025"
  },
  {
    "id": "305458140110127104",
    "pseudo": "martialinho",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/04/2025"
  },
  {
    "id": "305796884386021379",
    "pseudo": "PtitCailloux",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "23/12/2023"
  },
  {
    "id": "306102224734650368",
    "pseudo": "Apone",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/01/2025"
  },
  {
    "id": "306103068683010050",
    "pseudo": "iLhan",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/11/2024"
  },
  {
    "id": "306131757802061835",
    "pseudo": "Olivier",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/04/2025"
  },
  {
    "id": "306172947872219136",
    "pseudo": "waikiki",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/05/2024"
  },
  {
    "id": "306426209376534532",
    "pseudo": "! Anthox. | en bio",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/02/2025"
  },
  {
    "id": "306446197239971841",
    "pseudo": "2nd RSL",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "03/04/2024"
  },
  {
    "id": "306468154886979587",
    "pseudo": "Warthan18",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/03/2026"
  },
  {
    "id": "306469658469335040",
    "pseudo": "Szymon Smaga",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/05/2024"
  },
  {
    "id": "306784719545171978",
    "pseudo": "George Leclers",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/03/2025"
  },
  {
    "id": "306816513086849025",
    "pseudo": "Martin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/07/2025"
  },
  {
    "id": "307106767186427904",
    "pseudo": "Pitt7600",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/01/2025"
  },
  {
    "id": "307163483479343105",
    "pseudo": "Kryptek",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/05/2025"
  },
  {
    "id": "307478200173330432",
    "pseudo": "Robble",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/05/2025"
  },
  {
    "id": "307596869041651712",
    "pseudo": "DogwallZ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/06/2024"
  },
  {
    "id": "307830720657752076",
    "pseudo": "PAKS",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/09/2024"
  },
  {
    "id": "307961031441776641",
    "pseudo": "Dragon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2025"
  },
  {
    "id": "308175535635431425",
    "pseudo": "Tony_Sterling",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/01/2025"
  },
  {
    "id": "308212744803450903",
    "pseudo": "Yanis",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/06/2025"
  },
  {
    "id": "308325554598182914",
    "pseudo": "LG lat0m",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/02/2026"
  },
  {
    "id": "308596205561315328",
    "pseudo": "SkuFF'",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/08/2025"
  },
  {
    "id": "308708502623485952",
    "pseudo": "Kalish",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/02/2025"
  },
  {
    "id": "308871681303379968",
    "pseudo": "Enki",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/02/2025"
  },
  {
    "id": "308982004161052674",
    "pseudo": "Ifrit Jambe",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "02/06/2024"
  },
  {
    "id": "309070093944356864",
    "pseudo": "Neryleth",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/05/2025"
  },
  {
    "id": "309108993199046656",
    "pseudo": "MJM-_-naruco",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2025"
  },
  {
    "id": "309330508590874625",
    "pseudo": "J dark link",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/02/2026"
  },
  {
    "id": "309466758228606976",
    "pseudo": "Toto420",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/11/2024"
  },
  {
    "id": "309471951963815937",
    "pseudo": "Lueur",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/09/2024"
  },
  {
    "id": "310103867276656641",
    "pseudo": "☆D3stro",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/05/2024"
  },
  {
    "id": "310504551889371139",
    "pseudo": "Painbaguettes",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/02/2025"
  },
  {
    "id": "310510491560837124",
    "pseudo": "Biblou63",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/12/2024"
  },
  {
    "id": "310734867799343106",
    "pseudo": "Josh Edouard",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/02/2025"
  },
  {
    "id": "310749648610394113",
    "pseudo": "Reiken",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2026"
  },
  {
    "id": "310777339569242113",
    "pseudo": "RaiZzoR",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/03/2025"
  },
  {
    "id": "310843827986366464",
    "pseudo": "Wei Shen / yanbra_zf",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/07/2025"
  },
  {
    "id": "311096160485900289",
    "pseudo": "Eldadou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/04/2024"
  },
  {
    "id": "311141356103925760",
    "pseudo": "Vince brennan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/02/2026"
  },
  {
    "id": "311147101541367809",
    "pseudo": "Norkas",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/04/2024"
  },
  {
    "id": "311211665813274627",
    "pseudo": "chips dubbo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/03/2025"
  },
  {
    "id": "311232704006062080",
    "pseudo": "LiuASD",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "13/02/2024"
  },
  {
    "id": "311240328483045377",
    "pseudo": "Baptiste D // YaCkolo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/03/2025"
  },
  {
    "id": "311326288654893067",
    "pseudo": "Jojo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2025"
  },
  {
    "id": "311576781784088576",
    "pseudo": "warscraftgaming",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/01/2025"
  },
  {
    "id": "311587233268236299",
    "pseudo": "totof1718",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/07/2025"
  },
  {
    "id": "311671534517354497",
    "pseudo": "🔥zPl3b -/🪖☠",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "311840105616769025",
    "pseudo": "Clepto  👼",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/10/2024"
  },
  {
    "id": "311942624716128267",
    "pseudo": "Silent",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/01/2025"
  },
  {
    "id": "312745800893726720",
    "pseudo": "WaR_Dady_",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "03/06/2025"
  },
  {
    "id": "312748324681678860",
    "pseudo": "Ghost__14",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/01/2025"
  },
  {
    "id": "312759764117618689",
    "pseudo": "Skaade",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "28/02/2025"
  },
  {
    "id": "312983528960819214",
    "pseudo": "MaxINway",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/05/2024"
  },
  {
    "id": "312996729202933761",
    "pseudo": "Sharps",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/07/2024"
  },
  {
    "id": "313268781608861697",
    "pseudo": "hashboys",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/06/2025"
  },
  {
    "id": "313271377283252227",
    "pseudo": "PeurTour03984",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "03/03/2024"
  },
  {
    "id": "313456217412599808",
    "pseudo": "WaaZaaTV",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/06/2025"
  },
  {
    "id": "313606699590352898",
    "pseudo": "[AMF] Chick#69",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/10/2024"
  },
  {
    "id": "313750936319295498",
    "pseudo": "Super-_-TARRER",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/06/2025"
  },
  {
    "id": "313778435312844800",
    "pseudo": "Mac",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/08/2025"
  },
  {
    "id": "313797415276904468",
    "pseudo": "sergent-steeve",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "28/06/2025"
  },
  {
    "id": "313996557693353994",
    "pseudo": "Mesis",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/03/2024"
  },
  {
    "id": "314130479487909898",
    "pseudo": "Dirko57",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2025"
  },
  {
    "id": "315469469960896512",
    "pseudo": "erictricien",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/12/2025"
  },
  {
    "id": "315807726745812992",
    "pseudo": "ZK",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2025"
  },
  {
    "id": "315844478348820481",
    "pseudo": "BobyAsh",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2024"
  },
  {
    "id": "315882794477682698",
    "pseudo": "Shoryu the intangible",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/06/2025"
  },
  {
    "id": "315911030486073344",
    "pseudo": "Jo2k",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2025"
  },
  {
    "id": "315934004216070146",
    "pseudo": "Pedro",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/05/2025"
  },
  {
    "id": "316235768559566858",
    "pseudo": "John Peter",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/02/2026"
  },
  {
    "id": "317083062603350017",
    "pseudo": "2funky4u",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/07/2024"
  },
  {
    "id": "317289677671497733",
    "pseudo": "Sukhoi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/10/2024"
  },
  {
    "id": "317636589897515009",
    "pseudo": "Rems",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/06/2025"
  },
  {
    "id": "317681530992590848",
    "pseudo": "Françes",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2025"
  },
  {
    "id": "318154432263094273",
    "pseudo": "onyzuK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/01/2025"
  },
  {
    "id": "318268935835353092",
    "pseudo": "NovaZ",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/03/2025"
  },
  {
    "id": "318426492503851019",
    "pseudo": "AlexLeGrand",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/03/2025"
  },
  {
    "id": "318576324379934721",
    "pseudo": "AngryNicolai",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/05/2024"
  },
  {
    "id": "318737945693782016",
    "pseudo": "toxique",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/04/2025"
  },
  {
    "id": "318874589314940928",
    "pseudo": "Maxime",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/05/2024"
  },
  {
    "id": "318893500823371777",
    "pseudo": "R.Dubois",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2024"
  },
  {
    "id": "319062629702303745",
    "pseudo": "MacdallasRJRiCo_mok",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/08/2025"
  },
  {
    "id": "319139023035695105",
    "pseudo": "Engagée Baleine",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/03/2025"
  },
  {
    "id": "319175216867704843",
    "pseudo": "MrlMeenix",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "319187126992240640",
    "pseudo": "SunTzu9",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/02/2026"
  },
  {
    "id": "319203531221368853",
    "pseudo": "Zizou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/03/2025"
  },
  {
    "id": "319882996733968384",
    "pseudo": "Smiley",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/06/2024"
  },
  {
    "id": "319901654663036940",
    "pseudo": "BANOX",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "320151944708489216",
    "pseudo": "Nikarde Mcgarett",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/11/2024"
  },
  {
    "id": "320507275594956811",
    "pseudo": "Romsonik",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/10/2025"
  },
  {
    "id": "320544828008169472",
    "pseudo": "MaxxSpace",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/03/2024"
  },
  {
    "id": "320549245876961280",
    "pseudo": "[SBT] toto16300",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2025"
  },
  {
    "id": "320565648336093205",
    "pseudo": "anthraaax",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/07/2024"
  },
  {
    "id": "320680623582740483",
    "pseudo": "silverfox",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "14/03/2026"
  },
  {
    "id": "320896280287117314",
    "pseudo": "M2oki",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2024"
  },
  {
    "id": "320956737437958159",
    "pseudo": "Julien dit \"La fripouille\"",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/04/2026"
  },
  {
    "id": "321002798558871563",
    "pseudo": "Noze",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/05/2025"
  },
  {
    "id": "321054322765070337",
    "pseudo": "-YourFrost-",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "09/03/2026"
  },
  {
    "id": "321225341425287169",
    "pseudo": "L'inventaire plein",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2025"
  },
  {
    "id": "321280726106505226",
    "pseudo": "𝘕𝘺𝘸𝘦𝘥",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "30/04/2025"
  },
  {
    "id": "321374357743992833",
    "pseudo": "swicky",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/01/2026"
  },
  {
    "id": "321597686019129344",
    "pseudo": "Bill",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/01/2025"
  },
  {
    "id": "321740368871686144",
    "pseudo": "Toto7453",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/05/2025"
  },
  {
    "id": "321980409451773953",
    "pseudo": "Antoi26",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/05/2024"
  },
  {
    "id": "322046543815245825",
    "pseudo": "NuXem",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/07/2024"
  },
  {
    "id": "322106090944987156",
    "pseudo": "TomEuphonium",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/07/2025"
  },
  {
    "id": "322140123057881088",
    "pseudo": "nasserino",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2026"
  },
  {
    "id": "322441577773662208",
    "pseudo": "xWxnnie 🍺",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/03/2025"
  },
  {
    "id": "322449314079047681",
    "pseudo": "Mav",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/09/2025"
  },
  {
    "id": "322819474636013569",
    "pseudo": "SIERRA",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/07/2025"
  },
  {
    "id": "323096883872399361",
    "pseudo": "The_Tzar",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2025"
  },
  {
    "id": "323878883227074560",
    "pseudo": "[FR] bufflepage05",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "323919382533373952",
    "pseudo": "culéen",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2024"
  },
  {
    "id": "324262538353180674",
    "pseudo": "Lewis Sparks",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/05/2025"
  },
  {
    "id": "324547818725441536",
    "pseudo": "[FR] cotoim",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "29/06/2025"
  },
  {
    "id": "324608874642538507",
    "pseudo": "Subz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/03/2025"
  },
  {
    "id": "324622002134712323",
    "pseudo": "KarMa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "324884018770345985",
    "pseudo": "hoctoppus",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/07/2025"
  },
  {
    "id": "324912624573612034",
    "pseudo": "WarkM2600",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/01/2026"
  },
  {
    "id": "324952014654275585",
    "pseudo": "Mada 1-1 | Seal",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/05/2024"
  },
  {
    "id": "324984879706013697",
    "pseudo": "BaronBer",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/01/2025"
  },
  {
    "id": "325000567766253568",
    "pseudo": "SanMononoké",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/10/2024"
  },
  {
    "id": "325006335634833409",
    "pseudo": "Diogo ⚡",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/03/2025"
  },
  {
    "id": "325594101913223168",
    "pseudo": "StemperBeats",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/05/2024"
  },
  {
    "id": "325651143151714304",
    "pseudo": "bloodsky69",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2025"
  },
  {
    "id": "326244584927789057",
    "pseudo": "[BzH] RaTi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2025"
  },
  {
    "id": "327039239080509441",
    "pseudo": "KCDQ_Bubux",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/06/2025"
  },
  {
    "id": "327078049034141708",
    "pseudo": "sleyke_kozma",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/04/2025"
  },
  {
    "id": "327165678794571778",
    "pseudo": "Donovan Malkov",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/10/2025"
  },
  {
    "id": "327758308872028160",
    "pseudo": "ALBATOR",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/07/2024"
  },
  {
    "id": "327831370707763212",
    "pseudo": "Mathwix",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/07/2025"
  },
  {
    "id": "328070411730419713",
    "pseudo": "1997 Toyota Celica",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/09/2025"
  },
  {
    "id": "328141092031692800",
    "pseudo": "Axel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2026"
  },
  {
    "id": "328609823363039232",
    "pseudo": "DarKwouldiii",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/11/2024"
  },
  {
    "id": "328632699696971776",
    "pseudo": "Prod81",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/03/2025"
  },
  {
    "id": "328639923630374912",
    "pseudo": "Novakim",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2025"
  },
  {
    "id": "328792997405786115",
    "pseudo": "Enoz.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2025"
  },
  {
    "id": "328850655131205632",
    "pseudo": "Slowdark",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/06/2024"
  },
  {
    "id": "328867229750001664",
    "pseudo": "Aurèle",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/05/2025"
  },
  {
    "id": "328884635406827521",
    "pseudo": "slayer-over",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/01/2025"
  },
  {
    "id": "328959792947265538",
    "pseudo": "-Sangui-",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "08/07/2025"
  },
  {
    "id": "328990855442464769",
    "pseudo": "Redge_r6 aka le bronze cliqueur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/04/2025"
  },
  {
    "id": "329299630758297600",
    "pseudo": "CheuR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/08/2025"
  },
  {
    "id": "329563660722765824",
    "pseudo": "Faatak",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "28/04/2024"
  },
  {
    "id": "329683883178065921",
    "pseudo": "Monsterclem18",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/08/2025"
  },
  {
    "id": "330140514286436353",
    "pseudo": "MisterArt",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2026"
  },
  {
    "id": "330381705040887809",
    "pseudo": "rocket69calvert",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/03/2024"
  },
  {
    "id": "330430593127022593",
    "pseudo": "1er CL Tardounet",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/12/2023"
  },
  {
    "id": "330496945103699978",
    "pseudo": "Dayto/_TRAC",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/07/2024"
  },
  {
    "id": "330623224620777473",
    "pseudo": "HeatFlag",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/12/2025"
  },
  {
    "id": "330725342463655938",
    "pseudo": "1ereCl - SmokeGreenV",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/03/2024"
  },
  {
    "id": "330823570441895936",
    "pseudo": "Alkiorce",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2025"
  },
  {
    "id": "330955109066342402",
    "pseudo": "Oscarbrav",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2025"
  },
  {
    "id": "331124445177708546",
    "pseudo": "Supdaf",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/07/2024"
  },
  {
    "id": "331134577261150209",
    "pseudo": "alexshowone61",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2024"
  },
  {
    "id": "331159247599697922",
    "pseudo": "Commodor76",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "331205090822193154",
    "pseudo": "Topper Harley",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/06/2025"
  },
  {
    "id": "331579667628687371",
    "pseudo": "bennou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/12/2025"
  },
  {
    "id": "331685236230324224",
    "pseudo": "Duddpool",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/11/2025"
  },
  {
    "id": "331723881746399232",
    "pseudo": "PIN",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2026"
  },
  {
    "id": "331732029072867328",
    "pseudo": "Marchenko",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "05/04/2025"
  },
  {
    "id": "331759040038436885",
    "pseudo": "Gab1_stl",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/02/2025"
  },
  {
    "id": "331759611864678400",
    "pseudo": "Kalporest",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "13/10/2024"
  },
  {
    "id": "331788935778795521",
    "pseudo": "BenTen",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/06/2025"
  },
  {
    "id": "332209942540976130",
    "pseudo": "Devil_Wolf",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/11/2024"
  },
  {
    "id": "332263837677912064",
    "pseudo": "EauPotable",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/03/2025"
  },
  {
    "id": "332390310950731777",
    "pseudo": "Elyas Darklock",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/05/2024"
  },
  {
    "id": "332461774001405954",
    "pseudo": "Pora",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/11/2024"
  },
  {
    "id": "332907026470404097",
    "pseudo": "JeremyZeph",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "05/03/2026"
  },
  {
    "id": "332981299385991168",
    "pseudo": "Amine",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2026"
  },
  {
    "id": "333243445248262145",
    "pseudo": "warzazatte",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/03/2025"
  },
  {
    "id": "333312250053918720",
    "pseudo": "Elokence",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/04/2024"
  },
  {
    "id": "334180610782527489",
    "pseudo": "Maskatar",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2025"
  },
  {
    "id": "334557617131356161",
    "pseudo": "ACR-909",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/07/2025"
  },
  {
    "id": "334674509699219456",
    "pseudo": "CapitanKurt",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/04/2026"
  },
  {
    "id": "334994519181492224",
    "pseudo": "56 Bob Jones",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/04/2024"
  },
  {
    "id": "335170694222446593",
    "pseudo": "BRIXTONHT",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "15/08/2025"
  },
  {
    "id": "335521825419165697",
    "pseudo": "Kassiny",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/03/2025"
  },
  {
    "id": "335522436965597188",
    "pseudo": "DblShadow",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/12/2024"
  },
  {
    "id": "335910561894367233",
    "pseudo": "Atlas",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/09/2025"
  },
  {
    "id": "335941483754422293",
    "pseudo": "UP2UB33G33",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/12/2025"
  },
  {
    "id": "336029582807400450",
    "pseudo": "eluthaas194684",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/12/2024"
  },
  {
    "id": "336201113948782593",
    "pseudo": "thevador44fr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/05/2025"
  },
  {
    "id": "336819103769559041",
    "pseudo": "2nd CL Chadi_Rh",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "22/03/2024"
  },
  {
    "id": "337336830376804352",
    "pseudo": "FlorStorm",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "08/06/2025"
  },
  {
    "id": "337365780738080779",
    "pseudo": "CapnCOOK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/03/2025"
  },
  {
    "id": "337379848974499854",
    "pseudo": "Nero",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2025"
  },
  {
    "id": "337469381380538369",
    "pseudo": "Ikki18",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/04/2026"
  },
  {
    "id": "338399880831827968",
    "pseudo": "Odji",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/02/2025"
  },
  {
    "id": "338437964667289600",
    "pseudo": "SKZ",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/04/2026"
  },
  {
    "id": "338725805838434314",
    "pseudo": "happytom59",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2026"
  },
  {
    "id": "338755333055053828",
    "pseudo": "Armand",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "22/03/2024"
  },
  {
    "id": "339090770193809408",
    "pseudo": "Wally",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/01/2024"
  },
  {
    "id": "339130966389817369",
    "pseudo": "manuborgir",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/04/2025"
  },
  {
    "id": "339434540009390080",
    "pseudo": "𝙻𝚎𝚍𝚊𝚡",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "07/03/2026"
  },
  {
    "id": "339485496256364546",
    "pseudo": "Deft",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/06/2025"
  },
  {
    "id": "339516928487849995",
    "pseudo": "**SIKE**",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/03/2025"
  },
  {
    "id": "339905343054413826",
    "pseudo": "[VDK] KEBABIERdu96",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/07/2024"
  },
  {
    "id": "340123702916284418",
    "pseudo": "Skyrazze",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/03/2025"
  },
  {
    "id": "340599965594419200",
    "pseudo": "Capitainepique",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/03/2025"
  },
  {
    "id": "340780901044846593",
    "pseudo": "Diabolik__lolo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/07/2025"
  },
  {
    "id": "340797738939580427",
    "pseudo": "Dator38",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/07/2025"
  },
  {
    "id": "340811006907514880",
    "pseudo": "Babayaga",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/06/2025"
  },
  {
    "id": "340853555004964865",
    "pseudo": "Metro",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/06/2025"
  },
  {
    "id": "341523402969972736",
    "pseudo": "Billy__95v",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/06/2025"
  },
  {
    "id": "341540299916574720",
    "pseudo": "ilker savaş",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/03/2024"
  },
  {
    "id": "341637792767410177",
    "pseudo": "[BAC] Alton More",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/11/2024"
  },
  {
    "id": "341646561807171585",
    "pseudo": "[126] Victor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/05/2025"
  },
  {
    "id": "341652138180739072",
    "pseudo": "Eddy Malox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/06/2024"
  },
  {
    "id": "341661636462903296",
    "pseudo": "P4Sta",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/10/2024"
  },
  {
    "id": "341689985155727360",
    "pseudo": "Drazco",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2025"
  },
  {
    "id": "341987498521657355",
    "pseudo": "Shepherd88",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2024"
  },
  {
    "id": "342351798645817355",
    "pseudo": "john2609",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/02/2025"
  },
  {
    "id": "342393414249218050",
    "pseudo": "Blacki",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/02/2025"
  },
  {
    "id": "342689693785128962",
    "pseudo": "Frax",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/05/2024"
  },
  {
    "id": "343110136039997441",
    "pseudo": "FR_GrezzY",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2025"
  },
  {
    "id": "343186436805099522",
    "pseudo": "DuKe NuKouBs",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/03/2024"
  },
  {
    "id": "343322797767917578",
    "pseudo": "Tacno",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/04/2025"
  },
  {
    "id": "343367532641779712",
    "pseudo": "Thieos",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/04/2026"
  },
  {
    "id": "343449763385180163",
    "pseudo": "Kerigane",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/03/2025"
  },
  {
    "id": "343484214274162689",
    "pseudo": "Law D. Bidon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/12/2024"
  },
  {
    "id": "343488962263908353",
    "pseudo": "max97",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/12/2024"
  },
  {
    "id": "343512951313006604",
    "pseudo": "Charles2ape",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/09/2024"
  },
  {
    "id": "343884239793815552",
    "pseudo": "choupa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/01/2024"
  },
  {
    "id": "344074653532422144",
    "pseudo": "NeCroZ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2025"
  },
  {
    "id": "344076408714166272",
    "pseudo": "BakiTachi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/03/2025"
  },
  {
    "id": "344087964114092043",
    "pseudo": "ArwynFr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/09/2025"
  },
  {
    "id": "344234811780628480",
    "pseudo": "M1ko_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/02/2026"
  },
  {
    "id": "344533130855841794",
    "pseudo": "IXMattXI",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/12/2024"
  },
  {
    "id": "344861157338906624",
    "pseudo": "Lorix",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/06/2025"
  },
  {
    "id": "344879462174818304",
    "pseudo": "Kira Street94",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/08/2024"
  },
  {
    "id": "345134130457214986",
    "pseudo": "Maple-P",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/03/2026"
  },
  {
    "id": "345307993237094402",
    "pseudo": "DADAMS 51",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2024"
  },
  {
    "id": "345436393172107274",
    "pseudo": "aub10",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/11/2024"
  },
  {
    "id": "345583222366666752",
    "pseudo": "rézok.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2025"
  },
  {
    "id": "345597169958387714",
    "pseudo": "Mereze",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "20/04/2026"
  },
  {
    "id": "345608361779134475",
    "pseudo": "Ulvar",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "02/02/2026"
  },
  {
    "id": "345628557856342016",
    "pseudo": "Hunk Hulet / BroknBy_iris",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/12/2024"
  },
  {
    "id": "345669442950397953",
    "pseudo": "LordPax",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/07/2025"
  },
  {
    "id": "345728676307927040",
    "pseudo": "AttiSoldier",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/06/2024"
  },
  {
    "id": "345986300207431695",
    "pseudo": "*Baku",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "29/07/2024"
  },
  {
    "id": "345996231438368788",
    "pseudo": "Julian bqt",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "17/03/2024"
  },
  {
    "id": "346033054042685451",
    "pseudo": "Tony Cortez",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/02/2025"
  },
  {
    "id": "346350562071150593",
    "pseudo": "El-Mosquito3700",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "29/11/2025"
  },
  {
    "id": "346382184829026304",
    "pseudo": "Darkynou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/08/2024"
  },
  {
    "id": "346389202818170893",
    "pseudo": "Claudy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/01/2025"
  },
  {
    "id": "346569561770033155",
    "pseudo": "Trakerrr",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/03/2025"
  },
  {
    "id": "346678034499239940",
    "pseudo": "Macksimus",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/11/2025"
  },
  {
    "id": "346697716602241025",
    "pseudo": "GoldenBoyH",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/02/2024"
  },
  {
    "id": "346776924879847424",
    "pseudo": "Blackburn45",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/04/2025"
  },
  {
    "id": "347104732957114369",
    "pseudo": "Bellum",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/02/2025"
  },
  {
    "id": "347515290344488961",
    "pseudo": "Damien-jrn",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/03/2026"
  },
  {
    "id": "348440209332895745",
    "pseudo": "Frank castle",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/04/2025"
  },
  {
    "id": "348455295208652800",
    "pseudo": "doro",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2025"
  },
  {
    "id": "348482617248841728",
    "pseudo": "Amaris",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/10/2024"
  },
  {
    "id": "348516426409312256",
    "pseudo": "=ATM= Dark",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/08/2025"
  },
  {
    "id": "348748236162334720",
    "pseudo": "styledoggy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2025"
  },
  {
    "id": "348850986607050753",
    "pseudo": "Fibonacci",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/01/2026"
  },
  {
    "id": "348924316588572672",
    "pseudo": "Ghorghor",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "13/04/2024"
  },
  {
    "id": "349311105979514881",
    "pseudo": "Polia",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/08/2025"
  },
  {
    "id": "349562586443939840",
    "pseudo": "Bag",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2026"
  },
  {
    "id": "349570539507023882",
    "pseudo": "ASTS-Niko",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/11/2025"
  },
  {
    "id": "349679741978279958",
    "pseudo": "Digeot",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "18/12/2023"
  },
  {
    "id": "349913940546813952",
    "pseudo": "KaiiDoO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/06/2025"
  },
  {
    "id": "349927994061619201",
    "pseudo": "ECFR__Choucroute",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/06/2025"
  },
  {
    "id": "349939123932364801",
    "pseudo": "Enzø",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/03/2025"
  },
  {
    "id": "349988081237229570",
    "pseudo": "[MF] Lylian",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/02/2026"
  },
  {
    "id": "350636914446958593",
    "pseudo": "Nikolai Petriskov",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2026"
  },
  {
    "id": "350967521496530946",
    "pseudo": "Jokys",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/03/2025"
  },
  {
    "id": "351003314214928394",
    "pseudo": "Ghost",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "22/12/2023"
  },
  {
    "id": "351042291785269268",
    "pseudo": "Doudouljfa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2026"
  },
  {
    "id": "351045649174626305",
    "pseudo": "[FR] Red Jeneli",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "23/02/2024"
  },
  {
    "id": "351444080104046602",
    "pseudo": "Tibor",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/11/2025"
  },
  {
    "id": "351459945868427275",
    "pseudo": "cpcdavid",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2025"
  },
  {
    "id": "351478474239639572",
    "pseudo": "LEptiCARIBOU",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/02/2025"
  },
  {
    "id": "351684277794242572",
    "pseudo": "MiisT3uR_Filou",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/03/2025"
  },
  {
    "id": "352053309005103104",
    "pseudo": "Aqkwa",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "28/12/2025"
  },
  {
    "id": "352166779331543052",
    "pseudo": "[PDS] BLUE",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/06/2025"
  },
  {
    "id": "352418477472088065",
    "pseudo": "Gravel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2025"
  },
  {
    "id": "352606696113176580",
    "pseudo": "1er CL Frenchy 🇨🇦",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/11/2023"
  },
  {
    "id": "352699169586151426",
    "pseudo": "ryzouzou",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/01/2026"
  },
  {
    "id": "352765814388293632",
    "pseudo": "Taiga",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/07/2025"
  },
  {
    "id": "353480473533480961",
    "pseudo": "060ray",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2026"
  },
  {
    "id": "353511097002885133",
    "pseudo": "Naw",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/03/2026"
  },
  {
    "id": "353571701885501441",
    "pseudo": "Xus's",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2025"
  },
  {
    "id": "353661313630601218",
    "pseudo": "eddy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/02/2025"
  },
  {
    "id": "353870198086041610",
    "pseudo": "Vivano-971",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/02/2026"
  },
  {
    "id": "354025370292453377",
    "pseudo": "RobRoy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/08/2025"
  },
  {
    "id": "354219899037679619",
    "pseudo": "Reyman",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "20/04/2024"
  },
  {
    "id": "354541913480888321",
    "pseudo": "manza [DTB]",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/06/2024"
  },
  {
    "id": "354586745137790976",
    "pseudo": "loiczline",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/01/2025"
  },
  {
    "id": "355433119794462732",
    "pseudo": "TEIX34",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/03/2024"
  },
  {
    "id": "355645712718888960",
    "pseudo": "Sami Talvares",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2025"
  },
  {
    "id": "355685174861889538",
    "pseudo": "Filigan",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "04/06/2024"
  },
  {
    "id": "355802622432641024",
    "pseudo": "Solotov",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/06/2024"
  },
  {
    "id": "356173450274144265",
    "pseudo": "Ben Dasouza",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/02/2025"
  },
  {
    "id": "356525061307367444",
    "pseudo": "LéoCr444",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2025"
  },
  {
    "id": "356528763065991168",
    "pseudo": "Chippeurs",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/02/2026"
  },
  {
    "id": "356562130230837248",
    "pseudo": "AIE",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/09/2024"
  },
  {
    "id": "357210741776056320",
    "pseudo": "Hydra",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/08/2025"
  },
  {
    "id": "357232587732942859",
    "pseudo": "Mamass Rhum1",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/11/2024"
  },
  {
    "id": "357556016499523599",
    "pseudo": "PSYCOZER",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "29/07/2024"
  },
  {
    "id": "357642372923785237",
    "pseudo": "lopolagrenouille",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2026"
  },
  {
    "id": "357908393131900929",
    "pseudo": "Doubzz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2026"
  },
  {
    "id": "358499029044428801",
    "pseudo": "Bourbon",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "07/01/2024"
  },
  {
    "id": "358685471188189186",
    "pseudo": "Ballantines",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/07/2025"
  },
  {
    "id": "358711545322012672",
    "pseudo": "ZBAIBE-13-NRV",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/06/2025"
  },
  {
    "id": "359015317973893130",
    "pseudo": "Maytiti44[BE]",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/01/2025"
  },
  {
    "id": "359060533619720204",
    "pseudo": "Nanooz_dylan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/11/2024"
  },
  {
    "id": "359086850759196674",
    "pseudo": "Lystoire",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/05/2025"
  },
  {
    "id": "359930854518161411",
    "pseudo": "NeoX47",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/08/2024"
  },
  {
    "id": "360432095077597185",
    "pseudo": "Mack",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/10/2024"
  },
  {
    "id": "360722254700609538",
    "pseudo": "Poulet998",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/04/2025"
  },
  {
    "id": "361080300417318925",
    "pseudo": "Vortrox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/02/2025"
  },
  {
    "id": "361287484501393411",
    "pseudo": "LxnzeR",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/12/2024"
  },
  {
    "id": "361537151554289675",
    "pseudo": "Svens",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/01/2025"
  },
  {
    "id": "361571251183026187",
    "pseudo": "Amarù",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2025"
  },
  {
    "id": "361602588048883712",
    "pseudo": "Menace092",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/04/2024"
  },
  {
    "id": "361906405059592192",
    "pseudo": "Miky",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/06/2025"
  },
  {
    "id": "362084865400897540",
    "pseudo": "DarkKnightevo93",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/06/2025"
  },
  {
    "id": "362181365338341376",
    "pseudo": "Papa Yankee",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "20/08/2024"
  },
  {
    "id": "362423027440287764",
    "pseudo": "Boubou69k",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/04/2024"
  },
  {
    "id": "362577605993693185",
    "pseudo": "Robiichee",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2026"
  },
  {
    "id": "362615920109027328",
    "pseudo": "kendal69sag",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/08/2025"
  },
  {
    "id": "362962819307536384",
    "pseudo": "haiblutt",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/05/2024"
  },
  {
    "id": "362974754531049472",
    "pseudo": "Maxdu536",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/12/2024"
  },
  {
    "id": "363039101093675010",
    "pseudo": "Mixou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/08/2024"
  },
  {
    "id": "363347729906401301",
    "pseudo": "Jhon Walker",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/04/2025"
  },
  {
    "id": "363367637482209303",
    "pseudo": "TuPuesDesPieds",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/01/2025"
  },
  {
    "id": "363393548374114305",
    "pseudo": "JEUSSYUE",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/03/2026"
  },
  {
    "id": "363404504860721153",
    "pseudo": "GOLD",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/02/2025"
  },
  {
    "id": "363621201865605122",
    "pseudo": "🐺𝓜𝓲𝔃𝓾𝓻𝓪𝓽𝓼𝓾𝓷𝓮🐺",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "18/04/2024"
  },
  {
    "id": "363689823225249792",
    "pseudo": "Gabou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/08/2025"
  },
  {
    "id": "364079615603638272",
    "pseudo": "Thstrp",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/07/2025"
  },
  {
    "id": "364813294667694081",
    "pseudo": "Star",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/05/2024"
  },
  {
    "id": "365143909686312960",
    "pseudo": "Martin la foudre",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "14/01/2024"
  },
  {
    "id": "365366673634623488",
    "pseudo": "C0L77",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/11/2024"
  },
  {
    "id": "365427708341125123",
    "pseudo": "Antho1664",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2025"
  },
  {
    "id": "365546020001677312",
    "pseudo": "Speckos",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/05/2024"
  },
  {
    "id": "365834691175120899",
    "pseudo": "Paps",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/01/2026"
  },
  {
    "id": "365924254417420289",
    "pseudo": "myky7777",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/09/2024"
  },
  {
    "id": "366016570188627968",
    "pseudo": "alannn21",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/09/2025"
  },
  {
    "id": "366605577264037890",
    "pseudo": "Misfit",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/03/2025"
  },
  {
    "id": "366646483921141761",
    "pseudo": "MilkyWay_1010",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/01/2026"
  },
  {
    "id": "367017609419292672",
    "pseudo": "darkeyes_gw",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/02/2025"
  },
  {
    "id": "367282513678434304",
    "pseudo": "BaptHardd",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/06/2024"
  },
  {
    "id": "368427612307062786",
    "pseudo": "La Bendz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/06/2025"
  },
  {
    "id": "368475657803530240",
    "pseudo": "Pokerfall",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "24/05/2024"
  },
  {
    "id": "368546525254647808",
    "pseudo": "Kinder PINGUII",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/07/2025"
  },
  {
    "id": "368756921525600257",
    "pseudo": "Specna arms",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/11/2024"
  },
  {
    "id": "369042846650597376",
    "pseudo": "Ishawaki",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/08/2025"
  },
  {
    "id": "369133038627717120",
    "pseudo": "Antho-337",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "16/04/2024"
  },
  {
    "id": "369194453933752323",
    "pseudo": "RAG",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/09/2025"
  },
  {
    "id": "369538306075000842",
    "pseudo": "AnonymAtek",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/07/2024"
  },
  {
    "id": "369574542051508224",
    "pseudo": "ArnoD1789",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/08/2025"
  },
  {
    "id": "369932770157527040",
    "pseudo": "Leemur",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/07/2024"
  },
  {
    "id": "370246249007546370",
    "pseudo": "[TSA] Arvi Volkov",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/05/2025"
  },
  {
    "id": "370258570312417292",
    "pseudo": "alread.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/07/2025"
  },
  {
    "id": "370323006699864066",
    "pseudo": "Moko",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/05/2024"
  },
  {
    "id": "370540150029287424",
    "pseudo": "CPL - MagiKz",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "28/01/2025"
  },
  {
    "id": "370894203879817226",
    "pseudo": "Shark34",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "26/04/2024"
  },
  {
    "id": "370913139186991105",
    "pseudo": "Akon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/08/2024"
  },
  {
    "id": "370990931920420866",
    "pseudo": "Papy Ramses / Anubis",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/10/2024"
  },
  {
    "id": "371008703303909377",
    "pseudo": "[BS] Death75",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/08/2024"
  },
  {
    "id": "371059822684143616",
    "pseudo": "theo7c2",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/03/2026"
  },
  {
    "id": "371292182134521857",
    "pseudo": "pagarbat",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/06/2025"
  },
  {
    "id": "371428233616424960",
    "pseudo": "Matsu",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/08/2024"
  },
  {
    "id": "371564637445029888",
    "pseudo": "MrK",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/01/2025"
  },
  {
    "id": "372090451550928897",
    "pseudo": "StiNyDeSt",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/07/2025"
  },
  {
    "id": "372097449721987072",
    "pseudo": "UltimateElite",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/05/2025"
  },
  {
    "id": "372121174345515021",
    "pseudo": "Steve O Connor  / Barberousse681",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/02/2025"
  },
  {
    "id": "372123355958214656",
    "pseudo": "42mendax",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/08/2025"
  },
  {
    "id": "372194365214425099",
    "pseudo": "Alex91971",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/12/2024"
  },
  {
    "id": "372455148116639745",
    "pseudo": "Spectre",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/02/2025"
  },
  {
    "id": "372477724956164096",
    "pseudo": "CiaIsWatching",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/05/2025"
  },
  {
    "id": "372674140798451714",
    "pseudo": "Lewoo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2026"
  },
  {
    "id": "372726236083912704",
    "pseudo": "Fox",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "10/02/2025"
  },
  {
    "id": "373009119746981899",
    "pseudo": "AeZer",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/04/2024"
  },
  {
    "id": "373208767950487573",
    "pseudo": "Akuma_Broly",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/09/2025"
  },
  {
    "id": "373288596700135434",
    "pseudo": "chas75483",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2025"
  },
  {
    "id": "373462136476794880",
    "pseudo": "Gudule",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "16/06/2024"
  },
  {
    "id": "373482670719500289",
    "pseudo": "ThanD7™",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/02/2026"
  },
  {
    "id": "373882180427841536",
    "pseudo": "Pitivier le vrai",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "10/04/2025"
  },
  {
    "id": "373893934897692673",
    "pseudo": "Lebarbar",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/10/2024"
  },
  {
    "id": "373914516414791681",
    "pseudo": "! ☠ 𝕵𝖔𝖘𝖊𝖕𝖍.𝕮𝖑𝖊𝖒 ☠ !",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/08/2024"
  },
  {
    "id": "373948514822258689",
    "pseudo": "Cpl.Chef TonyNostraTV - (GM)",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/01/2024"
  },
  {
    "id": "374206283294703626",
    "pseudo": "One65",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/06/2024"
  },
  {
    "id": "374283510741204993",
    "pseudo": "Kirson",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/07/2025"
  },
  {
    "id": "374284334682865674",
    "pseudo": "virusk",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/02/2025"
  },
  {
    "id": "374549964946407424",
    "pseudo": "DeaXN0tE#6748",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/04/2025"
  },
  {
    "id": "374581925089902593",
    "pseudo": "AngryAllastor",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/07/2025"
  },
  {
    "id": "374621782558375947",
    "pseudo": "MkTwo",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/07/2025"
  },
  {
    "id": "374707549867474945",
    "pseudo": "Darky",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2026"
  },
  {
    "id": "375252886290169856",
    "pseudo": "Logic solare",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/11/2025"
  },
  {
    "id": "375311529173581843",
    "pseudo": "Bencog",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/04/2025"
  },
  {
    "id": "375364968276688907",
    "pseudo": "Carton",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/08/2025"
  },
  {
    "id": "375367004745629696",
    "pseudo": "julmanden",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/12/2024"
  },
  {
    "id": "375398666200023041",
    "pseudo": "Mirai やめてください !",
    "role": "Soldat",
    "grade": "Adjudant",
    "joinDate": "12/04/2024"
  },
  {
    "id": "375664569860882444",
    "pseudo": "ItsEdouxo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2026"
  },
  {
    "id": "375805104198254596",
    "pseudo": "SpongeBob",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/11/2024"
  },
  {
    "id": "376116134518456340",
    "pseudo": "soukiao",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2024"
  },
  {
    "id": "376149925487968266",
    "pseudo": "GiantGoliath",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/08/2025"
  },
  {
    "id": "376504111992143875",
    "pseudo": "GAMRH",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2025"
  },
  {
    "id": "377168586814259201",
    "pseudo": "JIV3",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "20/03/2025"
  },
  {
    "id": "377517384799354883",
    "pseudo": "Shadowfield [R'soft TACTICAL]",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/08/2025"
  },
  {
    "id": "377578678646865920",
    "pseudo": "lapinuage 🐇",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "28/02/2026"
  },
  {
    "id": "377582793682714624",
    "pseudo": "Angel2048",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/04/2026"
  },
  {
    "id": "377818880195690518",
    "pseudo": "nauji",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/04/2024"
  },
  {
    "id": "378098407618904065",
    "pseudo": "hiboux69",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "25/03/2024"
  },
  {
    "id": "378215755918999564",
    "pseudo": "Diatome",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2024"
  },
  {
    "id": "378636524603834368",
    "pseudo": "Eliøx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/04/2024"
  },
  {
    "id": "378842151972372481",
    "pseudo": "| HUNTER_OmgYaRoro |",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/06/2025"
  },
  {
    "id": "378919080213872660",
    "pseudo": "Shadow77937",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/12/2024"
  },
  {
    "id": "378956163674275841",
    "pseudo": "Zoreil.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/12/2024"
  },
  {
    "id": "379303467367530506",
    "pseudo": "xprimental",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2026"
  },
  {
    "id": "379338353490788352",
    "pseudo": "ZAORKII",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "379354766309982208",
    "pseudo": "James Gordon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/07/2025"
  },
  {
    "id": "379411917183123457",
    "pseudo": "Toblu_972",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2025"
  },
  {
    "id": "379744408591007746",
    "pseudo": "Villaret",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/10/2025"
  },
  {
    "id": "379747814735085568",
    "pseudo": "Chris-FRA",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2024"
  },
  {
    "id": "379882986323312640",
    "pseudo": "Greg-Yro",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/03/2025"
  },
  {
    "id": "380276405436678145",
    "pseudo": "BLANCO",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/10/2025"
  },
  {
    "id": "380289558287220736",
    "pseudo": "Karloff96",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2026"
  },
  {
    "id": "380415385037701120",
    "pseudo": "Zinox13",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/02/2025"
  },
  {
    "id": "380811080093401106",
    "pseudo": "Slyken",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/01/2025"
  },
  {
    "id": "380841731932815360",
    "pseudo": "SraPosGaming",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/05/2025"
  },
  {
    "id": "381157637720637440",
    "pseudo": "BONNO",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/04/2025"
  },
  {
    "id": "381162454501031936",
    "pseudo": "ROJHAT1978",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2026"
  },
  {
    "id": "381184455399702537",
    "pseudo": "Zhan le Magnifique",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/02/2025"
  },
  {
    "id": "381191401821569026",
    "pseudo": "Mad_Maxx_bgt",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/04/2026"
  },
  {
    "id": "381213087824609280",
    "pseudo": "2nd classe joeyy",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "31/03/2024"
  },
  {
    "id": "381396045487144972",
    "pseudo": "Иepнyх",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2025"
  },
  {
    "id": "381402948670062602",
    "pseudo": "Looping POLLET47",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/12/2023"
  },
  {
    "id": "381529301075361792",
    "pseudo": "Gorgon RAMSAY",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/03/2024"
  },
  {
    "id": "381793466738409475",
    "pseudo": "Nikolaï",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/05/2024"
  },
  {
    "id": "381799745561034752",
    "pseudo": "Hutscher",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/08/2024"
  },
  {
    "id": "381850343585218560",
    "pseudo": ".arthurvaillant",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/04/2026"
  },
  {
    "id": "381866627161128990",
    "pseudo": "Asaki",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2026"
  },
  {
    "id": "381904234339368960",
    "pseudo": "ColiriosTV",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2025"
  },
  {
    "id": "382264578249195530",
    "pseudo": "Hakidr//Pedro_LvZ-",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/01/2026"
  },
  {
    "id": "382561036122718221",
    "pseudo": "Bada42",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/08/2025"
  },
  {
    "id": "382874867306856449",
    "pseudo": "dydypro",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/01/2025"
  },
  {
    "id": "382994257964826626",
    "pseudo": "Attila",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/06/2025"
  },
  {
    "id": "383343656775450625",
    "pseudo": "AENAS~Waza",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/01/2026"
  },
  {
    "id": "383357399638999042",
    "pseudo": "Dudu",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/05/2024"
  },
  {
    "id": "383605322390044674",
    "pseudo": "Haze06",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/07/2024"
  },
  {
    "id": "383633929711779845",
    "pseudo": "Avocax",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/06/2025"
  },
  {
    "id": "383654344165294092",
    "pseudo": "Brouce",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/10/2025"
  },
  {
    "id": "383745615986950146",
    "pseudo": "Dichlo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/07/2025"
  },
  {
    "id": "383962697370304513",
    "pseudo": "Mattou31",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/03/2025"
  },
  {
    "id": "384356941696204800",
    "pseudo": "Blojah",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/02/2025"
  },
  {
    "id": "384363298692530176",
    "pseudo": "Leroy-303_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "384745365762473985",
    "pseudo": "djayzz14",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "384880654871035925",
    "pseudo": "[CLTCH] Koni",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/04/2026"
  },
  {
    "id": "385206205095608321",
    "pseudo": "ChrisMarty",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "385246587267448834",
    "pseudo": "Izψ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/11/2024"
  },
  {
    "id": "385415679517655042",
    "pseudo": "Flanilya",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "06/03/2026"
  },
  {
    "id": "385479534088159232",
    "pseudo": "Côte de Porc934",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2024"
  },
  {
    "id": "385507117920026625",
    "pseudo": "𝓓𝓸𝓷 𝓕𝓲𝓷𝓸",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2026"
  },
  {
    "id": "385674851433709579",
    "pseudo": "[IRRE]bougos",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "20/05/2024"
  },
  {
    "id": "385846061421559811",
    "pseudo": "MrFantome",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/07/2024"
  },
  {
    "id": "386058772424163331",
    "pseudo": "NeKoTvfr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/07/2025"
  },
  {
    "id": "386246941249503234",
    "pseudo": "Nono Le Rigolo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/06/2025"
  },
  {
    "id": "386256038132842498",
    "pseudo": "DaddyKwel",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/06/2024"
  },
  {
    "id": "386485110964486147",
    "pseudo": "Kaizer",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/07/2024"
  },
  {
    "id": "386618560178552833",
    "pseudo": "faritasio",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/05/2024"
  },
  {
    "id": "386885043588562944",
    "pseudo": "[fR] acacab",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/12/2025"
  },
  {
    "id": "386917890697199617",
    "pseudo": "gaijon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/03/2024"
  },
  {
    "id": "387966836467040257",
    "pseudo": "Maxbandicoot4",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/05/2025"
  },
  {
    "id": "388016992394936331",
    "pseudo": "Kanhobi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "388277822843781120",
    "pseudo": "baptiw",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2025"
  },
  {
    "id": "388347805736894464",
    "pseudo": "ToXiC-GhOsT",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/09/2025"
  },
  {
    "id": "388412653254606849",
    "pseudo": "xaitoxx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/03/2025"
  },
  {
    "id": "388802506785947648",
    "pseudo": "Bardamu",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2025"
  },
  {
    "id": "389036867716120596",
    "pseudo": "zeubdusoleil",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/05/2025"
  },
  {
    "id": "389052509311860737",
    "pseudo": "Renard_Blanc",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/12/2024"
  },
  {
    "id": "389167955528646656",
    "pseudo": "kiyuri",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2025"
  },
  {
    "id": "389350963565297674",
    "pseudo": "foxnoirs",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/11/2025"
  },
  {
    "id": "389421339682799616",
    "pseudo": "charbo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/04/2025"
  },
  {
    "id": "389475223075815436",
    "pseudo": "kevin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2025"
  },
  {
    "id": "389575716141924352",
    "pseudo": "Taïga | Keitaro",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/04/2026"
  },
  {
    "id": "390499011804659722",
    "pseudo": "ExAtomik",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/08/2024"
  },
  {
    "id": "390505082606583808",
    "pseudo": "Xavier",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/04/2026"
  },
  {
    "id": "390614998856237069",
    "pseudo": "Thibidou211",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/02/2025"
  },
  {
    "id": "391247698113593348",
    "pseudo": "Yarl Scylla",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/01/2026"
  },
  {
    "id": "391658654316756994",
    "pseudo": "Le Treb",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/02/2026"
  },
  {
    "id": "391944709431361542",
    "pseudo": "GATOUZ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2024"
  },
  {
    "id": "391998871624220673",
    "pseudo": "Monster_-X-_Rage",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/07/2025"
  },
  {
    "id": "392002626658762753",
    "pseudo": "Skilner",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/11/2024"
  },
  {
    "id": "392023617300332553",
    "pseudo": "dark chadow",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/01/2025"
  },
  {
    "id": "392079815387119634",
    "pseudo": "windonche",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/05/2025"
  },
  {
    "id": "392378205098475533",
    "pseudo": "Le Val",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "24/01/2024"
  },
  {
    "id": "393153496049778693",
    "pseudo": "aldriclouis",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/12/2025"
  },
  {
    "id": "393171540734377985",
    "pseudo": "FIFTY",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/06/2025"
  },
  {
    "id": "393352590680915979",
    "pseudo": "R4pToRs",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/10/2024"
  },
  {
    "id": "393491463259815936",
    "pseudo": "Nagal",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "23/04/2025"
  },
  {
    "id": "393494873518506015",
    "pseudo": "Balian",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/12/2024"
  },
  {
    "id": "393814836590673921",
    "pseudo": "Little_Theo03",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/11/2025"
  },
  {
    "id": "393876098947219456",
    "pseudo": "CT-01 Oxyde",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/08/2025"
  },
  {
    "id": "393927716916690947",
    "pseudo": "SucreBle94",
    "role": "Soldat",
    "grade": "Sergent",
    "joinDate": "10/05/2024"
  },
  {
    "id": "393963807946440711",
    "pseudo": "LEE",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/09/2025"
  },
  {
    "id": "394094384351674369",
    "pseudo": "NaNi_YZZ",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/11/2024"
  },
  {
    "id": "394102072548524033",
    "pseudo": "RasnovvEnChine",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2026"
  },
  {
    "id": "394266599835697162",
    "pseudo": "senzoo44",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/02/2025"
  },
  {
    "id": "394522927388688385",
    "pseudo": "Youtouff",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/01/2024"
  },
  {
    "id": "394612492367822861",
    "pseudo": "Seit",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/01/2025"
  },
  {
    "id": "394900370733793281",
    "pseudo": "Zéphyr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2024"
  },
  {
    "id": "395205590160375809",
    "pseudo": "Kaporaalh",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/03/2026"
  },
  {
    "id": "395508530293243904",
    "pseudo": "Cyril Scrat",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/03/2025"
  },
  {
    "id": "395518530381938688",
    "pseudo": "¸.·✩·.¸¸.·¯⍣𝕳𝖚𝖕𝖕𝖑𝖊𝖕𝖚𝖋𝖋",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/12/2025"
  },
  {
    "id": "395594841754435585",
    "pseudo": "Gusta",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/08/2025"
  },
  {
    "id": "395705100062031875",
    "pseudo": "Younes Sadiki",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/07/2025"
  },
  {
    "id": "395917652746305538",
    "pseudo": "Svoboda 1918",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "12/10/2025"
  },
  {
    "id": "395953671076052992",
    "pseudo": "alvianhd",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/01/2025"
  },
  {
    "id": "395991675081588736",
    "pseudo": "McBosnak",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "396012283081261067",
    "pseudo": "TheXFurtiF",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2026"
  },
  {
    "id": "396025797690785793",
    "pseudo": "CharlesDeFrance",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/03/2026"
  },
  {
    "id": "396233251078799371",
    "pseudo": "Teneus",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2024"
  },
  {
    "id": "396233395493142528",
    "pseudo": "[VDP] Latøuffe",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/02/2026"
  },
  {
    "id": "396275211508514830",
    "pseudo": "brootv",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/12/2025"
  },
  {
    "id": "396373628721037324",
    "pseudo": "Nizack03",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/11/2025"
  },
  {
    "id": "396418570118234112",
    "pseudo": "winrho",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2025"
  },
  {
    "id": "396618864143761409",
    "pseudo": "Husky",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/06/2025"
  },
  {
    "id": "396693199533637632",
    "pseudo": "unkutsosa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/06/2024"
  },
  {
    "id": "396731215169847297",
    "pseudo": "LESTER54114",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/12/2024"
  },
  {
    "id": "397017568633946112",
    "pseudo": "X-OR-02",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/03/2026"
  },
  {
    "id": "397181004537790475",
    "pseudo": "Falbro",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "397387338927308800",
    "pseudo": "alvarez",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/01/2025"
  },
  {
    "id": "397487298733801472",
    "pseudo": "Loul-Bobby",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/03/2024"
  },
  {
    "id": "397563131859304449",
    "pseudo": "Maximus",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "26/01/2026"
  },
  {
    "id": "397808244786987018",
    "pseudo": "exodixx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/09/2024"
  },
  {
    "id": "397823356042477568",
    "pseudo": "Shooter",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/09/2025"
  },
  {
    "id": "398048308381089792",
    "pseudo": "Charlie Listria",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/01/2026"
  },
  {
    "id": "398440035302506497",
    "pseudo": "FANTÔME",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "21/05/2025"
  },
  {
    "id": "398546441095872515",
    "pseudo": "=ATM= Isimax",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/01/2025"
  },
  {
    "id": "398546845602676736",
    "pseudo": "Ar13s",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/04/2025"
  },
  {
    "id": "398585095612792841",
    "pseudo": "=ATM=Waag",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2024"
  },
  {
    "id": "398840552616886283",
    "pseudo": "1er CL WhiteShooter",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/08/2024"
  },
  {
    "id": "398859721974480898",
    "pseudo": "LB | Servook",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "31/12/2024"
  },
  {
    "id": "398875614037409822",
    "pseudo": "Goéland",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/10/2025"
  },
  {
    "id": "399196269848821760",
    "pseudo": "CLEM",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2024"
  },
  {
    "id": "399310659298525191",
    "pseudo": "Fafa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/07/2025"
  },
  {
    "id": "399311310954823680",
    "pseudo": "CCH-Titou69220",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "21/05/2024"
  },
  {
    "id": "399358075447934976",
    "pseudo": "shadow85",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/01/2025"
  },
  {
    "id": "399493977931251715",
    "pseudo": "𝓚╭∩╮𝓔(•̀_•́)𝓣╭∩╮𝓐",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2025"
  },
  {
    "id": "399557251238723595",
    "pseudo": "Clem640",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/11/2025"
  },
  {
    "id": "399609283202777089",
    "pseudo": "Bz3_Skunk",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/06/2025"
  },
  {
    "id": "399837343189696512",
    "pseudo": "Bigi",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/04/2025"
  },
  {
    "id": "400003480212996137",
    "pseudo": "NexusFroxs",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/01/2025"
  },
  {
    "id": "400010144366460930",
    "pseudo": "azerty",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "29/03/2026"
  },
  {
    "id": "400189508097802260",
    "pseudo": "JUST-F1re-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/08/2025"
  },
  {
    "id": "400349545441001472",
    "pseudo": "Slopy",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/02/2025"
  },
  {
    "id": "400418360296210442",
    "pseudo": "Zweitastique",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/11/2025"
  },
  {
    "id": "400626407555727381",
    "pseudo": "LbSerral",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/04/2025"
  },
  {
    "id": "400639584343556096",
    "pseudo": "Pabli_To",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/02/2026"
  },
  {
    "id": "400829700013817857",
    "pseudo": "JDS#3610",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "19/12/2024"
  },
  {
    "id": "401090006736961538",
    "pseudo": "tympii20",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/11/2024"
  },
  {
    "id": "401167992634736660",
    "pseudo": "William66",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2025"
  },
  {
    "id": "401451943773601794",
    "pseudo": "bobby",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/12/2024"
  },
  {
    "id": "401827984832462849",
    "pseudo": "FFLblacknoobFFI",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/03/2026"
  },
  {
    "id": "401862339454042114",
    "pseudo": "Kami OneZ_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2026"
  },
  {
    "id": "402094308028841985",
    "pseudo": "AiDaYZeN",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/02/2025"
  },
  {
    "id": "402162620024619008",
    "pseudo": "Ðelby",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/11/2025"
  },
  {
    "id": "402599484321824800",
    "pseudo": "Écho",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/12/2025"
  },
  {
    "id": "402636443232763904",
    "pseudo": "Strano",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/08/2025"
  },
  {
    "id": "402896755110445057",
    "pseudo": "FaStAnThO",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2025"
  },
  {
    "id": "402912646732447753",
    "pseudo": "Devilkev",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/09/2025"
  },
  {
    "id": "402975384582356993",
    "pseudo": "2nd Classe  AsPiRe_FiTe",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "27/01/2024"
  },
  {
    "id": "403004432331309070",
    "pseudo": "Zingouin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2024"
  },
  {
    "id": "403066729846013952",
    "pseudo": "=T$ECore= jona963x",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/01/2025"
  },
  {
    "id": "403280191427706880",
    "pseudo": "Burns_Day",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2025"
  },
  {
    "id": "403651015666302978",
    "pseudo": "Audalioth",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/08/2025"
  },
  {
    "id": "403945861958074368",
    "pseudo": "Ghashog74",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "03/04/2026"
  },
  {
    "id": "404248098341257218",
    "pseudo": "fivenightsfoxy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/10/2025"
  },
  {
    "id": "404278018283012106",
    "pseudo": "inspecteur_gadget_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/01/2024"
  },
  {
    "id": "404620256280182787",
    "pseudo": "Barth",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/01/2026"
  },
  {
    "id": "404621692963389441",
    "pseudo": "ring0",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/04/2024"
  },
  {
    "id": "404949089050951681",
    "pseudo": "IlluminateBoy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/01/2025"
  },
  {
    "id": "405074047563726848",
    "pseudo": "LaHonda",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/06/2025"
  },
  {
    "id": "405085503940067328",
    "pseudo": "Pepiitte13",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/02/2025"
  },
  {
    "id": "405306105388859393",
    "pseudo": "|FR| kkwak",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/02/2025"
  },
  {
    "id": "405335279067463690",
    "pseudo": "Keyser dono",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/09/2025"
  },
  {
    "id": "405819882714955776",
    "pseudo": "Bash",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/01/2025"
  },
  {
    "id": "405909669727698947",
    "pseudo": "SkyZen",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "406076378510000138",
    "pseudo": "cvibe",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2025"
  },
  {
    "id": "406412232138948609",
    "pseudo": "Brunel liam",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/04/2026"
  },
  {
    "id": "406591712161431572",
    "pseudo": "aLeX89",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2025"
  },
  {
    "id": "406879067661664256",
    "pseudo": "Aiden",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/09/2025"
  },
  {
    "id": "407187715210346517",
    "pseudo": "Dylan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/03/2025"
  },
  {
    "id": "407530139325300746",
    "pseudo": "Marcel Talent",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "18/03/2025"
  },
  {
    "id": "407601318447022080",
    "pseudo": "ZeNo",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/11/2025"
  },
  {
    "id": "408169570936029185",
    "pseudo": "JL Henix",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/06/2025"
  },
  {
    "id": "408727018717446145",
    "pseudo": "Wajdi1502",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/04/2025"
  },
  {
    "id": "409016017914822657",
    "pseudo": "BeuZz",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/01/2026"
  },
  {
    "id": "409336650431201281",
    "pseudo": "llPEPEREll",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/03/2024"
  },
  {
    "id": "409452509992714241",
    "pseudo": "mawie",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "08/02/2025"
  },
  {
    "id": "409461801726640129",
    "pseudo": "OPSVIKINGS",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/12/2025"
  },
  {
    "id": "409695369945939978",
    "pseudo": "Alpha Fury 100",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/01/2025"
  },
  {
    "id": "409723394418933800",
    "pseudo": "✯ 𝑁𝐼𝑁𝑂 ✯",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2024"
  },
  {
    "id": "409783919484076032",
    "pseudo": "Shet-shet_93",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/07/2025"
  },
  {
    "id": "410562409103753234",
    "pseudo": "freulonyo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2025"
  },
  {
    "id": "410786338850209792",
    "pseudo": "Danak",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/01/2025"
  },
  {
    "id": "411464289891909632",
    "pseudo": "Fuziax",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/11/2024"
  },
  {
    "id": "411650895806201857",
    "pseudo": "Darlom29",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/07/2025"
  },
  {
    "id": "411716055325736962",
    "pseudo": "FloBo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/06/2025"
  },
  {
    "id": "411833798062505984",
    "pseudo": "Skøll",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2026"
  },
  {
    "id": "411903895011328000",
    "pseudo": "ResoIute Venox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/04/2026"
  },
  {
    "id": "411965019018887170",
    "pseudo": "taskorge",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/04/2025"
  },
  {
    "id": "412004307492143104",
    "pseudo": "jacobdu64",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2025"
  },
  {
    "id": "412072407076044800",
    "pseudo": "benjibang",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2026"
  },
  {
    "id": "412292937523789827",
    "pseudo": "Zidrou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/10/2024"
  },
  {
    "id": "412699272400863243",
    "pseudo": "☣ PЯФPHΞT ☣",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/03/2025"
  },
  {
    "id": "412802030017708032",
    "pseudo": "RemedX_Sama",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/07/2025"
  },
  {
    "id": "412939794587582464",
    "pseudo": "twinky49",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2025"
  },
  {
    "id": "413059642868891658",
    "pseudo": "Ijustcs",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/01/2026"
  },
  {
    "id": "413189266265473025",
    "pseudo": "TontonCidox",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "07/01/2024"
  },
  {
    "id": "413413691367751681",
    "pseudo": "Skyz King",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/08/2025"
  },
  {
    "id": "413659650244739073",
    "pseudo": "Coco",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/03/2026"
  },
  {
    "id": "414091904297467904",
    "pseudo": "Raphael’ ツ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "414173327070986251",
    "pseudo": "Lord Belzebong",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "19/12/2024"
  },
  {
    "id": "414180241888509954",
    "pseudo": "Astronium",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/01/2025"
  },
  {
    "id": "414191550357176321",
    "pseudo": "XeLL",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/09/2024"
  },
  {
    "id": "414476326217711618",
    "pseudo": "senoito",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/01/2025"
  },
  {
    "id": "414823478705782784",
    "pseudo": "SERGIO51391",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/12/2025"
  },
  {
    "id": "414836704466436116",
    "pseudo": "RGDowneywindo",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "06/06/2024"
  },
  {
    "id": "414861566161453066",
    "pseudo": "Emperor_onizuka",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/01/2025"
  },
  {
    "id": "414878751520849920",
    "pseudo": "Mikado",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/03/2026"
  },
  {
    "id": "415141109375696896",
    "pseudo": "nono_bobosh",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2024"
  },
  {
    "id": "415147494188646401",
    "pseudo": "Tulipe",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/03/2025"
  },
  {
    "id": "415160467686817792",
    "pseudo": "Val",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/03/2026"
  },
  {
    "id": "415203567381512192",
    "pseudo": "bakaricompter",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/12/2025"
  },
  {
    "id": "415210118570049539",
    "pseudo": "Asher",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/03/2025"
  },
  {
    "id": "415241452264620063",
    "pseudo": "YellSteP",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/01/2025"
  },
  {
    "id": "415357285406081034",
    "pseudo": "toyota.previa.1995",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/07/2025"
  },
  {
    "id": "415906953647095808",
    "pseudo": "LEL",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2026"
  },
  {
    "id": "416138298147209216",
    "pseudo": "mefiro \\Le Franc",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "01/04/2024"
  },
  {
    "id": "416598417221877772",
    "pseudo": "ag0r4n",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/03/2025"
  },
  {
    "id": "416622670084440064",
    "pseudo": "hugosterck",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/08/2024"
  },
  {
    "id": "417010189720354828",
    "pseudo": "Dorian",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/04/2026"
  },
  {
    "id": "417025461466562571",
    "pseudo": "GxMatti",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2025"
  },
  {
    "id": "417242684332310528",
    "pseudo": "x-thomas-x_17",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/05/2024"
  },
  {
    "id": "417316966743670794",
    "pseudo": "PhoqueMan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/03/2025"
  },
  {
    "id": "417361511367835658",
    "pseudo": "Baki",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/03/2026"
  },
  {
    "id": "417836617068314636",
    "pseudo": "Denzell16",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "05/02/2024"
  },
  {
    "id": "418166791609778207",
    "pseudo": "stevepro",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/05/2024"
  },
  {
    "id": "418420007974862858",
    "pseudo": "Zweltag",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/02/2025"
  },
  {
    "id": "418421199190622219",
    "pseudo": "Dirus",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/03/2026"
  },
  {
    "id": "418483523226435608",
    "pseudo": "djoff44",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "27/10/2025"
  },
  {
    "id": "418781419335188480",
    "pseudo": "FCGB33",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2025"
  },
  {
    "id": "418899512036294670",
    "pseudo": "RABBIT!",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/08/2025"
  },
  {
    "id": "419241411204874242",
    "pseudo": "xeoster",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/03/2025"
  },
  {
    "id": "419508679436533760",
    "pseudo": "BAC_FallZ 🇧🇪",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "26/02/2026"
  },
  {
    "id": "419551082545414145",
    "pseudo": "CITYGOD",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/08/2025"
  },
  {
    "id": "419953606683262978",
    "pseudo": "blu",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/03/2026"
  },
  {
    "id": "420406963831308288",
    "pseudo": "SCH | SharK44067",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "13/05/2024"
  },
  {
    "id": "420709553483808778",
    "pseudo": "CCH. Till Lindemann",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "23/05/2024"
  },
  {
    "id": "420959111316897793",
    "pseudo": "XxLiCoRnExX59",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/08/2025"
  },
  {
    "id": "421374863991635968",
    "pseudo": "jakal8866",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/04/2024"
  },
  {
    "id": "421694972656484352",
    "pseudo": "fantazy_cocotier",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/03/2025"
  },
  {
    "id": "421821594906787855",
    "pseudo": "pheonix01010",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "20/01/2024"
  },
  {
    "id": "421939429226315806",
    "pseudo": "Urezan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/06/2024"
  },
  {
    "id": "422367670332162048",
    "pseudo": "Moray",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/06/2025"
  },
  {
    "id": "422391719036977152",
    "pseudo": "TheDeadHaze",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2025"
  },
  {
    "id": "422426540492455956",
    "pseudo": "NortonV",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/07/2024"
  },
  {
    "id": "422476290390622218",
    "pseudo": "kalash01",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/02/2025"
  },
  {
    "id": "422696774499565569",
    "pseudo": "Mendes6709",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/03/2026"
  },
  {
    "id": "422831063220617220",
    "pseudo": "RayanQD",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/03/2026"
  },
  {
    "id": "422874350467940375",
    "pseudo": "Bebel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/03/2025"
  },
  {
    "id": "423170101374615553",
    "pseudo": "Haako",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2025"
  },
  {
    "id": "423207821358923778",
    "pseudo": "[CTR] ZiggOtto",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/01/2025"
  },
  {
    "id": "423226405745065986",
    "pseudo": "Saucissonsec64",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/04/2024"
  },
  {
    "id": "423876383752585216",
    "pseudo": "Dorian Bekas",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/03/2025"
  },
  {
    "id": "424279541633122304",
    "pseudo": "Puceron",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/11/2025"
  },
  {
    "id": "424589021683908609",
    "pseudo": "Imatrix Studio",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2026"
  },
  {
    "id": "424598084492722177",
    "pseudo": "Braky",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "21/02/2025"
  },
  {
    "id": "424701420709609475",
    "pseudo": "gtdu68",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2026"
  },
  {
    "id": "424741851954675714",
    "pseudo": "okrabemayo91",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2024"
  },
  {
    "id": "424899726576582666",
    "pseudo": "kriktus_herectus",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/03/2026"
  },
  {
    "id": "424970032733487104",
    "pseudo": "dartagnan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/06/2024"
  },
  {
    "id": "425029804426002449",
    "pseudo": "Moucri87",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/01/2025"
  },
  {
    "id": "425263451284176896",
    "pseudo": "ZeSP1R1T",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/06/2024"
  },
  {
    "id": "425328094665244672",
    "pseudo": "➶vΔ𝐍ᶤ𝐬𝓱ε๔➶",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/08/2025"
  },
  {
    "id": "425548535849549834",
    "pseudo": "Landon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/01/2025"
  },
  {
    "id": "425767655086227457",
    "pseudo": "legrosnouere",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2024"
  },
  {
    "id": "426026769267556353",
    "pseudo": "gta_ledoc",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/02/2025"
  },
  {
    "id": "426068353640169483",
    "pseudo": "skunk07",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2025"
  },
  {
    "id": "426106346752966657",
    "pseudo": "Denver",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2025"
  },
  {
    "id": "426107963183333387",
    "pseudo": "ZY-_S4M",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/07/2025"
  },
  {
    "id": "426180816813686811",
    "pseudo": "M.J 974",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/03/2025"
  },
  {
    "id": "426330502442778624",
    "pseudo": "Sixcoups",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/06/2025"
  },
  {
    "id": "426486823968309249",
    "pseudo": "Medy_Dz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2025"
  },
  {
    "id": "426581335679827984",
    "pseudo": "SCOTTISH CHOGEY",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/07/2024"
  },
  {
    "id": "426834439172128799",
    "pseudo": "Twix66",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2025"
  },
  {
    "id": "426844499399016458",
    "pseudo": "Astate",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/10/2025"
  },
  {
    "id": "426959402269147147",
    "pseudo": "hérisson",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2025"
  },
  {
    "id": "427199081270738973",
    "pseudo": "INVINCIBLE",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/04/2024"
  },
  {
    "id": "427230012761178142",
    "pseudo": "𝕄𝕠𝕣𝕙𝕠𝕝𝕥",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/08/2025"
  },
  {
    "id": "427439216277061642",
    "pseudo": "izno",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2024"
  },
  {
    "id": "427458675691618307",
    "pseudo": "Thibo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2025"
  },
  {
    "id": "427473943625072650",
    "pseudo": "Ezekiel",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "28/12/2024"
  },
  {
    "id": "427528727635689473",
    "pseudo": "Dan_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/03/2024"
  },
  {
    "id": "427867015907246090",
    "pseudo": "⚜FROGGY⚜",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/12/2024"
  },
  {
    "id": "428498242410643456",
    "pseudo": "Navy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/08/2025"
  },
  {
    "id": "428553854926192650",
    "pseudo": "Vines",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2025"
  },
  {
    "id": "428561068621824000",
    "pseudo": "legend_six",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "02/11/2024"
  },
  {
    "id": "429324865334542367",
    "pseudo": "Mokir.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "429359862644998154",
    "pseudo": "Geralt",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/02/2025"
  },
  {
    "id": "429711259685093376",
    "pseudo": "DOUM27",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/02/2026"
  },
  {
    "id": "429712538834567190",
    "pseudo": "RVN_Xyron ✞",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/07/2025"
  },
  {
    "id": "429715454286757888",
    "pseudo": "reaper2037",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2026"
  },
  {
    "id": "430066645935980566",
    "pseudo": "SLV BotteS68",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/12/2024"
  },
  {
    "id": "430072029698588673",
    "pseudo": "[WSKY] Royality",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/11/2024"
  },
  {
    "id": "430080301033848843",
    "pseudo": "pATRICK bOUYANOV",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/04/2025"
  },
  {
    "id": "430386034673713153",
    "pseudo": "Frost",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/09/2025"
  },
  {
    "id": "430389479874887682",
    "pseudo": "smoker_47",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/02/2025"
  },
  {
    "id": "430462736955211779",
    "pseudo": "Jonynno",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/12/2024"
  },
  {
    "id": "430468556623314957",
    "pseudo": "Ánthn",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "15/08/2025"
  },
  {
    "id": "430599926045736960",
    "pseudo": "KICHTA",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2026"
  },
  {
    "id": "430641553346920449",
    "pseudo": "ADC. Demiurge",
    "role": "Soldat",
    "grade": "Adjudant Chef",
    "joinDate": "10/01/2024"
  },
  {
    "id": "430711000178884628",
    "pseudo": "Mahrezsuarez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/04/2026"
  },
  {
    "id": "430788826840039435",
    "pseudo": "Coast5648",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2024"
  },
  {
    "id": "430880806584582146",
    "pseudo": "OVO⁶𓅓",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/08/2024"
  },
  {
    "id": "431064877445021696",
    "pseudo": "StS Okami",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/12/2024"
  },
  {
    "id": "431475395733487640",
    "pseudo": "bapt",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2025"
  },
  {
    "id": "431536985555992577",
    "pseudo": "nephel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/07/2024"
  },
  {
    "id": "432210410096164895",
    "pseudo": "NeoSpectre-kun",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/06/2025"
  },
  {
    "id": "433013704003682305",
    "pseudo": "Recrue SRAF-ZALT",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/06/2025"
  },
  {
    "id": "433044740519362571",
    "pseudo": "Musaed",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2025"
  },
  {
    "id": "433155226766409728",
    "pseudo": "Enderdark",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/05/2024"
  },
  {
    "id": "433216698989150208",
    "pseudo": "1Cl Ace",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/03/2024"
  },
  {
    "id": "433284035695869977",
    "pseudo": "Valoche",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "433675533562281994",
    "pseudo": "Nicolstaf73",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/12/2025"
  },
  {
    "id": "433969680995057664",
    "pseudo": "Wurst_92",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "434329590249291786",
    "pseudo": "KevKevG2",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/06/2024"
  },
  {
    "id": "434348667302838272",
    "pseudo": "pommeflague8",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/07/2025"
  },
  {
    "id": "434395455720390677",
    "pseudo": "Matcop08",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2025"
  },
  {
    "id": "434401977430966275",
    "pseudo": "Amox",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "26/04/2024"
  },
  {
    "id": "434402719336366120",
    "pseudo": "[CTR] teekoz99",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/01/2025"
  },
  {
    "id": "434437432675532810",
    "pseudo": "AroufGangstaa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "434470766701182977",
    "pseudo": "DioMay",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/03/2025"
  },
  {
    "id": "434819148238028822",
    "pseudo": "Cl3m_zer",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/09/2025"
  },
  {
    "id": "435066241456144385",
    "pseudo": "Yanoushka",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/03/2025"
  },
  {
    "id": "435738054100123649",
    "pseudo": "zer0918",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/12/2024"
  },
  {
    "id": "436113273906003980",
    "pseudo": "Hireoxe",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/06/2025"
  },
  {
    "id": "436619644833497098",
    "pseudo": "Shokapikk",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/08/2025"
  },
  {
    "id": "436784262537019403",
    "pseudo": "CCH1.Lozio",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/01/2025"
  },
  {
    "id": "436972126713544735",
    "pseudo": "DavidGoggins145",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2026"
  },
  {
    "id": "436973857061077003",
    "pseudo": "hugo999",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/07/2024"
  },
  {
    "id": "437295159307403304",
    "pseudo": "Tripeur",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/03/2025"
  },
  {
    "id": "437306691013443604",
    "pseudo": "✠ Twan ✠",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/11/2025"
  },
  {
    "id": "437636450431795200",
    "pseudo": "alphabob",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/03/2024"
  },
  {
    "id": "437653302956654593",
    "pseudo": "Barkmount",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/07/2024"
  },
  {
    "id": "437754776999034921",
    "pseudo": "Lykanzi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/12/2024"
  },
  {
    "id": "438034849979301890",
    "pseudo": "AlphaColos13",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/04/2026"
  },
  {
    "id": "439039096745361410",
    "pseudo": "crypto-bull",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/08/2024"
  },
  {
    "id": "439109019299348500",
    "pseudo": "N-2-1",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/03/2025"
  },
  {
    "id": "439451750965968896",
    "pseudo": "labouw",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2025"
  },
  {
    "id": "439688005435916288",
    "pseudo": "Claxio1",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/02/2025"
  },
  {
    "id": "440155487582027803",
    "pseudo": "Yataf",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/01/2025"
  },
  {
    "id": "440164208102080522",
    "pseudo": "Berckett",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/07/2024"
  },
  {
    "id": "440183338016178188",
    "pseudo": "Reaper",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/02/2026"
  },
  {
    "id": "440184922712309761",
    "pseudo": "Alexandre Fr281",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/07/2024"
  },
  {
    "id": "440203397900009472",
    "pseudo": "MrKaizerGunther",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/03/2025"
  },
  {
    "id": "440490711259938826",
    "pseudo": "Zootoon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/03/2025"
  },
  {
    "id": "440546369267040270",
    "pseudo": "Rafael Alcaraz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2025"
  },
  {
    "id": "440583313053319168",
    "pseudo": "Zed",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/01/2025"
  },
  {
    "id": "440897086511251457",
    "pseudo": "Vaylor",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/05/2024"
  },
  {
    "id": "440920528652599297",
    "pseudo": "SkyZooX",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/02/2026"
  },
  {
    "id": "440958812422275095",
    "pseudo": "Sdt Mathéo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/12/2024"
  },
  {
    "id": "441004267147493377",
    "pseudo": "WARLOCK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/04/2026"
  },
  {
    "id": "441644768385171457",
    "pseudo": "chris971",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "442028151283908608",
    "pseudo": "g0utte",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/01/2024"
  },
  {
    "id": "442292374681681921",
    "pseudo": "xet-axel",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/04/2025"
  },
  {
    "id": "442320341210103808",
    "pseudo": "yoplait",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "442739107924279307",
    "pseudo": "HIBOU",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/11/2025"
  },
  {
    "id": "443090536677638144",
    "pseudo": "basteul2",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/08/2025"
  },
  {
    "id": "443125849945014292",
    "pseudo": "Eric Black",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/07/2025"
  },
  {
    "id": "443722136427954186",
    "pseudo": "FallRide",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/02/2024"
  },
  {
    "id": "443781515202002954",
    "pseudo": "Lezou817582",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/12/2024"
  },
  {
    "id": "443795287337598987",
    "pseudo": "Tchoupiix",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/03/2026"
  },
  {
    "id": "444094241510260737",
    "pseudo": "Inca 300",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/04/2024"
  },
  {
    "id": "444182884064952326",
    "pseudo": "KIRI^^",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "09/03/2025"
  },
  {
    "id": "444499453618028544",
    "pseudo": "FC PIGNOUF | GMK",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/12/2024"
  },
  {
    "id": "444603281851809792",
    "pseudo": "TiDji_2456",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/04/2024"
  },
  {
    "id": "444805459447382016",
    "pseudo": "MTcreed",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/01/2025"
  },
  {
    "id": "445017323254972427",
    "pseudo": "🅟🅔🅡🅢🅤🅢",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/01/2025"
  },
  {
    "id": "445165645932265472",
    "pseudo": "Radacast_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/04/2024"
  },
  {
    "id": "445210045412540436",
    "pseudo": "G7-MAN51",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2025"
  },
  {
    "id": "445732966522421249",
    "pseudo": "Jack Caufield",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/01/2025"
  },
  {
    "id": "446232247146905600",
    "pseudo": "allan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/05/2025"
  },
  {
    "id": "446299205946834944",
    "pseudo": "1ere C Pampimousse",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/02/2025"
  },
  {
    "id": "446698353896587264",
    "pseudo": "THE SHARK #7894",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/12/2024"
  },
  {
    "id": "446751144388067358",
    "pseudo": "vKryes_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2025"
  },
  {
    "id": "447074110439161867",
    "pseudo": "Lupa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/08/2025"
  },
  {
    "id": "447096448019070978",
    "pseudo": "Ozan Topal",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2024"
  },
  {
    "id": "447170090585161750",
    "pseudo": "BLOOCKUS_X",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/08/2025"
  },
  {
    "id": "447426560472121354",
    "pseudo": "naropeine",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "04/01/2026"
  },
  {
    "id": "447512544408502292",
    "pseudo": "[SPTZ]Kamel1777",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/03/2026"
  },
  {
    "id": "447689128885092372",
    "pseudo": "mehdi7419",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/12/2024"
  },
  {
    "id": "447695545168035851",
    "pseudo": "Losliwynn",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/03/2024"
  },
  {
    "id": "447724665977307138",
    "pseudo": "SonFy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/12/2025"
  },
  {
    "id": "447757775716614154",
    "pseudo": "Morgann91",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/12/2023"
  },
  {
    "id": "448060748107612172",
    "pseudo": "SerGent-Anto_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/07/2025"
  },
  {
    "id": "448069919452561408",
    "pseudo": "LE metaleu38",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/06/2025"
  },
  {
    "id": "448124419215196170",
    "pseudo": "liliprime",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/07/2024"
  },
  {
    "id": "448437373953507378",
    "pseudo": "Gildav",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/02/2025"
  },
  {
    "id": "448552475176468481",
    "pseudo": "paquito",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/04/2024"
  },
  {
    "id": "448584971255545866",
    "pseudo": "RICO",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/02/2024"
  },
  {
    "id": "448810119413628938",
    "pseudo": "rickyflyy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/01/2025"
  },
  {
    "id": "448922242018181133",
    "pseudo": "ipodlmp",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "28/09/2024"
  },
  {
    "id": "449125894854803456",
    "pseudo": "Lawk",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2025"
  },
  {
    "id": "449273968365404160",
    "pseudo": "EGz SkollZer",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/02/2025"
  },
  {
    "id": "449279819310432276",
    "pseudo": "UNCLE DARK",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/12/2024"
  },
  {
    "id": "449543003766390804",
    "pseudo": "Onil75",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2025"
  },
  {
    "id": "449631723874025474",
    "pseudo": "Bigmousse[VR]",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/04/2024"
  },
  {
    "id": "449639140955258881",
    "pseudo": "Riyen.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/07/2025"
  },
  {
    "id": "449966768593829891",
    "pseudo": "1loric",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/01/2025"
  },
  {
    "id": "450218577761402891",
    "pseudo": "jamesbzzz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2024"
  },
  {
    "id": "450254872928059394",
    "pseudo": "CPT Rosso",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2025"
  },
  {
    "id": "450292726651682838",
    "pseudo": "BreizhLegion",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/03/2025"
  },
  {
    "id": "450323706947043329",
    "pseudo": "HORUXIO",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2025"
  },
  {
    "id": "450354742741172234",
    "pseudo": "Kakashi senshi",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/05/2024"
  },
  {
    "id": "450366949575229461",
    "pseudo": "NicoThx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/02/2025"
  },
  {
    "id": "450620484015620119",
    "pseudo": "Alex",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2025"
  },
  {
    "id": "450635792012935170",
    "pseudo": "Alexz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "450839055421276160",
    "pseudo": "onSomeTookah",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2025"
  },
  {
    "id": "450950620791177216",
    "pseudo": "\"Potam\"",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/04/2024"
  },
  {
    "id": "451053122048229418",
    "pseudo": "DragonToundra23",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/03/2025"
  },
  {
    "id": "451079960224858113",
    "pseudo": "Traumadeus",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/04/2025"
  },
  {
    "id": "452097881533579274",
    "pseudo": "keuss",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "29/10/2024"
  },
  {
    "id": "452239514472284160",
    "pseudo": "mick carter",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/11/2024"
  },
  {
    "id": "452531769057607690",
    "pseudo": "Hugo Lacra",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2024"
  },
  {
    "id": "452621958786449418",
    "pseudo": "Maadrigal",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2025"
  },
  {
    "id": "452686807038033920",
    "pseudo": "TROUBALDUS",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/09/2025"
  },
  {
    "id": "452880633170100225",
    "pseudo": "jakXXL",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/08/2025"
  },
  {
    "id": "452905449038151681",
    "pseudo": "Witt_Rayben",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/03/2025"
  },
  {
    "id": "453167011888103425",
    "pseudo": "Carnalito",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/12/2024"
  },
  {
    "id": "453199005435035649",
    "pseudo": "MkG x J450N 92i",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/01/2025"
  },
  {
    "id": "453534810808254465",
    "pseudo": "Singed",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/11/2025"
  },
  {
    "id": "453946733093978124",
    "pseudo": "FlashMcqueen",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/04/2024"
  },
  {
    "id": "454435739174830090",
    "pseudo": "Plouknek",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/12/2024"
  },
  {
    "id": "454640086915743745",
    "pseudo": "szxxSIR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/11/2025"
  },
  {
    "id": "454747662839971850",
    "pseudo": "Saxzysss",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/10/2024"
  },
  {
    "id": "455357952816054272",
    "pseudo": "Twexore",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/09/2025"
  },
  {
    "id": "455407089204854790",
    "pseudo": "misterfm2189",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/12/2025"
  },
  {
    "id": "455726495583830027",
    "pseudo": "Lil'ChiBoy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/07/2025"
  },
  {
    "id": "456136061156851722",
    "pseudo": "waza-familly10",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "27/07/2025"
  },
  {
    "id": "456150877619748875",
    "pseudo": "Poulin Antoine",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/09/2024"
  },
  {
    "id": "456502553107234840",
    "pseudo": "imfrench'",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/03/2025"
  },
  {
    "id": "456575273433825290",
    "pseudo": "Xoby",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2026"
  },
  {
    "id": "456600701762666507",
    "pseudo": "YanisTocrate",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2025"
  },
  {
    "id": "456917714754207756",
    "pseudo": "Max White",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2026"
  },
  {
    "id": "456929793943011340",
    "pseudo": "El Capitaño07",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/04/2024"
  },
  {
    "id": "457057429557870603",
    "pseudo": "Fraustiz",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "04/04/2026"
  },
  {
    "id": "457259219624656918",
    "pseudo": "Galicien",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/09/2025"
  },
  {
    "id": "457424357430394891",
    "pseudo": "frostak",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/03/2025"
  },
  {
    "id": "457549951480889347",
    "pseudo": "zboub",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/03/2025"
  },
  {
    "id": "458693152606257167",
    "pseudo": "EMS_Damn",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/05/2025"
  },
  {
    "id": "458862864799760384",
    "pseudo": "Ethan Woods",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/10/2025"
  },
  {
    "id": "459054996722548747",
    "pseudo": "Anumaki",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "16/01/2025"
  },
  {
    "id": "459356205408714752",
    "pseudo": "Glitch",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/11/2025"
  },
  {
    "id": "459369690305789953",
    "pseudo": "✵Djokhar✵",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/04/2025"
  },
  {
    "id": "459759996125577218",
    "pseudo": "loic290553",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/12/2024"
  },
  {
    "id": "460444874840211456",
    "pseudo": "toine7214",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "08/07/2024"
  },
  {
    "id": "460494106012024854",
    "pseudo": "Ethan",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "13/04/2024"
  },
  {
    "id": "460522989641924618",
    "pseudo": "Mattiren",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/05/2025"
  },
  {
    "id": "460775164137963527",
    "pseudo": "DudulDuGhetto",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/06/2025"
  },
  {
    "id": "460875896576933908",
    "pseudo": "Lucas",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/11/2023"
  },
  {
    "id": "460898611434225671",
    "pseudo": "anas",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2025"
  },
  {
    "id": "461435516353511425",
    "pseudo": "1ère CL Reacher",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/01/2026"
  },
  {
    "id": "461550050615623702",
    "pseudo": "BugZ_Minetoine",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/06/2025"
  },
  {
    "id": "461787294165237760",
    "pseudo": "FangWars",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/08/2025"
  },
  {
    "id": "461904935194198016",
    "pseudo": "TAKA",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2025"
  },
  {
    "id": "461942106370342935",
    "pseudo": "snafu711",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/07/2025"
  },
  {
    "id": "462002927263940610",
    "pseudo": "Walken",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/03/2025"
  },
  {
    "id": "462234269662707723",
    "pseudo": "Eiloco27",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/02/2026"
  },
  {
    "id": "463042568910012436",
    "pseudo": "Zezich",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/06/2025"
  },
  {
    "id": "463050680429576207",
    "pseudo": "LeVraiRémi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/04/2026"
  },
  {
    "id": "463320995189620743",
    "pseudo": "Program.exe",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/06/2025"
  },
  {
    "id": "463335646468112384",
    "pseudo": "Krambo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/01/2025"
  },
  {
    "id": "463733218982625301",
    "pseudo": "Exjebu",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "09/04/2026"
  },
  {
    "id": "463788293730074625",
    "pseudo": "VintageRockLover",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/05/2025"
  },
  {
    "id": "464092345541984261",
    "pseudo": "P2daKizzay",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/09/2025"
  },
  {
    "id": "464152238588166154",
    "pseudo": "Mando",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/01/2025"
  },
  {
    "id": "464356448231489546",
    "pseudo": "๖̶̶̶Doly",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/03/2025"
  },
  {
    "id": "464496903296647178",
    "pseudo": "LeSarrazin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/04/2025"
  },
  {
    "id": "464497762160082955",
    "pseudo": "Fabien le Menuisier",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/04/2026"
  },
  {
    "id": "464499339645943828",
    "pseudo": "BaiKov",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2025"
  },
  {
    "id": "464747981975977995",
    "pseudo": "RashAhGhul",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/04/2026"
  },
  {
    "id": "464804797678223360",
    "pseudo": "teckilgfx",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "12/10/2024"
  },
  {
    "id": "464810439453179927",
    "pseudo": "🐔⋆🎀𝔩𝔞 𝔭𝔬𝔲𝔩𝔢🎀⋆🐔",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "465116170169614336",
    "pseudo": "Monster-Shadoow",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2026"
  },
  {
    "id": "465562582716252160",
    "pseudo": "Mehdos",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/07/2025"
  },
  {
    "id": "465649365466218499",
    "pseudo": "Pilway",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2026"
  },
  {
    "id": "465825989641895965",
    "pseudo": "MadeInP",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/12/2023"
  },
  {
    "id": "466006797912768542",
    "pseudo": "[] VLAD []",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/08/2025"
  },
  {
    "id": "466650537383821317",
    "pseudo": "Félix",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "30/05/2024"
  },
  {
    "id": "466722543718629387",
    "pseudo": "DonGiuliano62",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2025"
  },
  {
    "id": "467047321750863882",
    "pseudo": "ChambX_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2026"
  },
  {
    "id": "467397968409133097",
    "pseudo": "Zaraike",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "22/03/2025"
  },
  {
    "id": "469106789670191105",
    "pseudo": "Azgar5990",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/01/2025"
  },
  {
    "id": "469167105938292747",
    "pseudo": "Bseven",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/09/2025"
  },
  {
    "id": "469202244802183168",
    "pseudo": "Serowsss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2025"
  },
  {
    "id": "469639952397762582",
    "pseudo": "🪐Space💫Ghost✨",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2025"
  },
  {
    "id": "469985527236657157",
    "pseudo": "MaaaxT",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2025"
  },
  {
    "id": "470348228932403231",
    "pseudo": "-Normuche-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/09/2024"
  },
  {
    "id": "470587004736765954",
    "pseudo": "Lolo3857",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/11/2025"
  },
  {
    "id": "470748139276468254",
    "pseudo": "Arho19",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/12/2024"
  },
  {
    "id": "470847556511858708",
    "pseudo": "JooNayyyD",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/11/2024"
  },
  {
    "id": "471299839791988756",
    "pseudo": "Ninjax_Skyro",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/02/2025"
  },
  {
    "id": "471310046257610752",
    "pseudo": "Salbaxx244",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/03/2025"
  },
  {
    "id": "471452361269968897",
    "pseudo": "BrAAhzms",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/11/2024"
  },
  {
    "id": "472001959121911808",
    "pseudo": "JoReci",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "27/04/2024"
  },
  {
    "id": "472751887104606219",
    "pseudo": "BlackAries31",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2025"
  },
  {
    "id": "472756797766107147",
    "pseudo": "worthoque",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/06/2025"
  },
  {
    "id": "473064240601890827",
    "pseudo": "Mazrah",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/06/2025"
  },
  {
    "id": "473073373325557761",
    "pseudo": "[ZNG] Zebra",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2026"
  },
  {
    "id": "473096213009268747",
    "pseudo": "Mirage-4A",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2025"
  },
  {
    "id": "473157541875023892",
    "pseudo": "KennyStones",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/04/2026"
  },
  {
    "id": "473157685148385280",
    "pseudo": "F4rl3s",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/12/2024"
  },
  {
    "id": "473205558648897537",
    "pseudo": "Jean-Yves Boungalé",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/02/2026"
  },
  {
    "id": "473497191462469632",
    "pseudo": "down_gallaga7445",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/05/2025"
  },
  {
    "id": "473974050298003468",
    "pseudo": "Cosmo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/07/2024"
  },
  {
    "id": "474125986540158979",
    "pseudo": "Alex",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/02/2025"
  },
  {
    "id": "474664246748250123",
    "pseudo": "Bob furaxx",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "11/08/2025"
  },
  {
    "id": "474677826092531712",
    "pseudo": "Red_",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "28/11/2025"
  },
  {
    "id": "474678767923625985",
    "pseudo": "Flo_FR",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/05/2025"
  },
  {
    "id": "474679251958759434",
    "pseudo": "AikosTTv",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/10/2025"
  },
  {
    "id": "475341703075594242",
    "pseudo": "Quebec-medical",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/11/2024"
  },
  {
    "id": "475589285685362706",
    "pseudo": "lutcho",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/11/2025"
  },
  {
    "id": "475682332133556234",
    "pseudo": "Real_CheynY",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/01/2025"
  },
  {
    "id": "476706514644762635",
    "pseudo": "Ceylon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/07/2024"
  },
  {
    "id": "476752578567208980",
    "pseudo": "toinedry",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/09/2024"
  },
  {
    "id": "476817345483112479",
    "pseudo": "cg_castellanos",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2026"
  },
  {
    "id": "477093474282242058",
    "pseudo": "Xelor24",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/08/2025"
  },
  {
    "id": "477392401296523264",
    "pseudo": "ArSenX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/05/2024"
  },
  {
    "id": "477515047208222730",
    "pseudo": "alex",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2026"
  },
  {
    "id": "477558770948636673",
    "pseudo": "kiota",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/04/2025"
  },
  {
    "id": "477564834267791360",
    "pseudo": "centipede8285",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/05/2025"
  },
  {
    "id": "478267072346849281",
    "pseudo": "ZetaDemon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2024"
  },
  {
    "id": "478484911108522009",
    "pseudo": "Achill Klein",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "29/06/2025"
  },
  {
    "id": "478504527876849664",
    "pseudo": "TFSG_Ghost_51412",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "24/05/2025"
  },
  {
    "id": "478570306546565131",
    "pseudo": "Trust-Gamer1101",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/03/2026"
  },
  {
    "id": "478582776124145664",
    "pseudo": "Pépito",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2025"
  },
  {
    "id": "478617021035315229",
    "pseudo": "Rhinory14",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/04/2026"
  },
  {
    "id": "478667940334403585",
    "pseudo": "TheCrescendo42",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/09/2024"
  },
  {
    "id": "478994872980865038",
    "pseudo": "kanakbob",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "02/12/2023"
  },
  {
    "id": "479745454855290900",
    "pseudo": "franche compter",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/12/2025"
  },
  {
    "id": "480420882125160448",
    "pseudo": "A_SAUPIQUET_A/SKULLETYK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/05/2025"
  },
  {
    "id": "480789337160810506",
    "pseudo": "Tancarville",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/04/2025"
  },
  {
    "id": "480808145862524929",
    "pseudo": "Maax Gallagher",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "23/02/2026"
  },
  {
    "id": "481049069494599680",
    "pseudo": "CCH. May 🐈",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "22/04/2025"
  },
  {
    "id": "481172330194927617",
    "pseudo": "Park-Run7100",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/08/2025"
  },
  {
    "id": "481183117470728243",
    "pseudo": "Alexrey91700",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/03/2026"
  },
  {
    "id": "481383588151951360",
    "pseudo": "Aki95c",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/03/2024"
  },
  {
    "id": "481424286226317312",
    "pseudo": "hugo.titep",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/06/2025"
  },
  {
    "id": "481479270720471051",
    "pseudo": "ViLaRiNhO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2024"
  },
  {
    "id": "481770414717009931",
    "pseudo": "sullixxx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2025"
  },
  {
    "id": "481929757899096095",
    "pseudo": "Adrien",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/09/2025"
  },
  {
    "id": "482246237089955852",
    "pseudo": "Mariachi301",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "20/04/2025"
  },
  {
    "id": "482251643627372562",
    "pseudo": "JimMte",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/09/2025"
  },
  {
    "id": "482410717983670291",
    "pseudo": "HEIMDAL93 EM",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/12/2025"
  },
  {
    "id": "482615649349271552",
    "pseudo": "bigallqc94",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/04/2025"
  },
  {
    "id": "482620995471933442",
    "pseudo": "Link",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "22/04/2024"
  },
  {
    "id": "482858814433918976",
    "pseudo": "prako_maxime",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/10/2024"
  },
  {
    "id": "483215384783355915",
    "pseudo": "ValouTeKmi",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/06/2025"
  },
  {
    "id": "483221889108541460",
    "pseudo": "liloxi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2025"
  },
  {
    "id": "483320854235709440",
    "pseudo": "ToT_elie_ToT",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "13/10/2024"
  },
  {
    "id": "483327630985396236",
    "pseudo": "Deepsy",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "12/02/2024"
  },
  {
    "id": "483384103564083200",
    "pseudo": "JESUISMIOUZIK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2024"
  },
  {
    "id": "483613849975521290",
    "pseudo": "sevenprice",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "09/03/2024"
  },
  {
    "id": "484237943515512832",
    "pseudo": "WeedyJoux",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/11/2024"
  },
  {
    "id": "484301233771773963",
    "pseudo": "Lagarthor",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/02/2026"
  },
  {
    "id": "484345197300285443",
    "pseudo": "Aziop1973",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/02/2025"
  },
  {
    "id": "484598298460684320",
    "pseudo": "Black_Fr31",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "08/07/2024"
  },
  {
    "id": "484698823717814285",
    "pseudo": "Light-Snake1983",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/01/2025"
  },
  {
    "id": "484702888799502337",
    "pseudo": "🌀RψSεaZ🌀",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/02/2025"
  },
  {
    "id": "484813957895553054",
    "pseudo": "AtOmIc",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "09/09/2025"
  },
  {
    "id": "485422707534594058",
    "pseudo": "Reikushā",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/05/2024"
  },
  {
    "id": "486226227187679234",
    "pseudo": "karget",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2026"
  },
  {
    "id": "486244447634325504",
    "pseudo": "vince-one",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2025"
  },
  {
    "id": "486314234347651073",
    "pseudo": "BIG MONSTER 66",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2025"
  },
  {
    "id": "486587512433934376",
    "pseudo": "ᕲᗩᖇҠᑢᕮᗷᖇᓰ93",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/12/2024"
  },
  {
    "id": "486804120993267714",
    "pseudo": "l Parano l",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/04/2025"
  },
  {
    "id": "486920966719406080",
    "pseudo": "stanley Cooper",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/10/2024"
  },
  {
    "id": "487304094516772864",
    "pseudo": "STICK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/06/2025"
  },
  {
    "id": "487379429576933376",
    "pseudo": "L_ordre_Nat",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/03/2026"
  },
  {
    "id": "487581422178140185",
    "pseudo": "||-Trayzerix-||",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2026"
  },
  {
    "id": "488017084287287300",
    "pseudo": "micrame",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/01/2026"
  },
  {
    "id": "488271998963941376",
    "pseudo": "Vegeta7764",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/01/2025"
  },
  {
    "id": "488292515624255500",
    "pseudo": "UniK SparKy4157",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/01/2025"
  },
  {
    "id": "488343145365635083",
    "pseudo": "BSmatheo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2026"
  },
  {
    "id": "488750936223776778",
    "pseudo": "Lejeand2",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/02/2025"
  },
  {
    "id": "488804605891969036",
    "pseudo": "sinay93.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/03/2024"
  },
  {
    "id": "488838874240647169",
    "pseudo": "Satzio",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/09/2025"
  },
  {
    "id": "489034961647566849",
    "pseudo": "1eCL Alex.",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/12/2024"
  },
  {
    "id": "489106295387979776",
    "pseudo": "Snowflakee",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/04/2024"
  },
  {
    "id": "489134988999262208",
    "pseudo": "maxlamenace61-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/09/2025"
  },
  {
    "id": "489135153990598657",
    "pseudo": "Hanune2008",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/04/2026"
  },
  {
    "id": "489145473123483658",
    "pseudo": "thibs34",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/04/2024"
  },
  {
    "id": "489515622594510848",
    "pseudo": "Solid950",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/05/2024"
  },
  {
    "id": "489837179929886721",
    "pseudo": "VhK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/12/2024"
  },
  {
    "id": "491154293701869568",
    "pseudo": "nostadem",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/02/2025"
  },
  {
    "id": "491323686729678861",
    "pseudo": "gouloulou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/09/2025"
  },
  {
    "id": "491679004408152065",
    "pseudo": "[☆] Dracus46",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/01/2026"
  },
  {
    "id": "491685610864771072",
    "pseudo": "Hugomag1",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/04/2024"
  },
  {
    "id": "491712317898227742",
    "pseudo": "madmarxxx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2024"
  },
  {
    "id": "491780835779936277",
    "pseudo": "Tankred",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2025"
  },
  {
    "id": "492071086972993556",
    "pseudo": "battel373",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/01/2025"
  },
  {
    "id": "492292107977883669",
    "pseudo": "Antoine alias Arsenic [ASAP]",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2026"
  },
  {
    "id": "492359927390666752",
    "pseudo": "Mario",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/05/2025"
  },
  {
    "id": "492810000708665344",
    "pseudo": "Squal82",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/11/2025"
  },
  {
    "id": "493083590431735830",
    "pseudo": "gHoST_Delta",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/09/2025"
  },
  {
    "id": "493144275765428224",
    "pseudo": "CCH Malandrin",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "01/04/2024"
  },
  {
    "id": "493488015239282689",
    "pseudo": "qp Dios",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/08/2024"
  },
  {
    "id": "493841824696500234",
    "pseudo": "Joeypne",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/03/2026"
  },
  {
    "id": "493854611464126484",
    "pseudo": "Marius Smith",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2026"
  },
  {
    "id": "494025558171320321",
    "pseudo": "Marmitte 1CL",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/04/2024"
  },
  {
    "id": "494193396148076544",
    "pseudo": "Pit (FR)",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/01/2025"
  },
  {
    "id": "494216561364828161",
    "pseudo": "Blondin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/06/2024"
  },
  {
    "id": "494535076579639296",
    "pseudo": "Galinjin's",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/05/2024"
  },
  {
    "id": "494832722972246016",
    "pseudo": "[IOB] CMD Mike",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/04/2025"
  },
  {
    "id": "495258713179815946",
    "pseudo": "MAAC",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "05/10/2024"
  },
  {
    "id": "495619102568742954",
    "pseudo": "Fegzxc",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/02/2025"
  },
  {
    "id": "495669124484300812",
    "pseudo": "Arkngl",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "24/11/2024"
  },
  {
    "id": "495899040886685717",
    "pseudo": "SCH Darmex NMD",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "07/01/2024"
  },
  {
    "id": "496312486019203073",
    "pseudo": "Zabrock",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/08/2024"
  },
  {
    "id": "496986657942142976",
    "pseudo": "Hashlych",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/04/2026"
  },
  {
    "id": "497106923649499166",
    "pseudo": "𝕬𝖎𝖌𝖑𝖊𝕮𝖍𝖆𝖚𝖛",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/07/2024"
  },
  {
    "id": "497720953938116618",
    "pseudo": "Flouz95",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2025"
  },
  {
    "id": "497764578642493461",
    "pseudo": "Jideeon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/05/2025"
  },
  {
    "id": "497787570638290994",
    "pseudo": "tbc_benafleck",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "498115801857916928",
    "pseudo": "xYourGalactic-l",
    "role": "Soldat",
    "grade": "Major",
    "joinDate": "20/04/2024"
  },
  {
    "id": "498307213203472384",
    "pseudo": "NytraaHD",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/08/2025"
  },
  {
    "id": "499196172393775106",
    "pseudo": "Agentmbp",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/12/2025"
  },
  {
    "id": "499273418412130304",
    "pseudo": "Rias_sama",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/07/2025"
  },
  {
    "id": "499666912654000169",
    "pseudo": "le kaito 01",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2025"
  },
  {
    "id": "499922956114329600",
    "pseudo": "demonwar",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2025"
  },
  {
    "id": "500034677969518594",
    "pseudo": "HRZ Danvers",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/03/2025"
  },
  {
    "id": "500061480775974912",
    "pseudo": "Pierrive",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/11/2024"
  },
  {
    "id": "500085079398416415",
    "pseudo": "Daimoh",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2026"
  },
  {
    "id": "500144959098322945",
    "pseudo": "Mike Cvzz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/01/2026"
  },
  {
    "id": "500381660064514060",
    "pseudo": "Hugooo",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "13/07/2025"
  },
  {
    "id": "500394243076915200",
    "pseudo": "Spit13",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/09/2024"
  },
  {
    "id": "500777668766072844",
    "pseudo": "Devinez.z",
    "role": "Soldat",
    "grade": "Sergent",
    "joinDate": "06/02/2025"
  },
  {
    "id": "500790900406878232",
    "pseudo": "Joseph Harrington",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/03/2026"
  },
  {
    "id": "501366324350550024",
    "pseudo": "OXSY",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2025"
  },
  {
    "id": "501789704052670474",
    "pseudo": "72",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2025"
  },
  {
    "id": "501794016464207873",
    "pseudo": "Thomas3420091",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/06/2025"
  },
  {
    "id": "501802718889771011",
    "pseudo": "J_Falcxns-I-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2026"
  },
  {
    "id": "501823309546258433",
    "pseudo": "Pikpik 972",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2025"
  },
  {
    "id": "502073763513237510",
    "pseudo": "jambon de Bayonne",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/05/2025"
  },
  {
    "id": "502158656394231829",
    "pseudo": "VVBOY",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/02/2025"
  },
  {
    "id": "502559981342818334",
    "pseudo": "Razor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/11/2025"
  },
  {
    "id": "502870506081484820",
    "pseudo": "Youubs63",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "502891936626114560",
    "pseudo": "PatatoR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2025"
  },
  {
    "id": "502921383190200330",
    "pseudo": "Lac de G'nève",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/09/2024"
  },
  {
    "id": "503410146748268556",
    "pseudo": "Josh pattinson",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2024"
  },
  {
    "id": "503538522725285888",
    "pseudo": "Bivoine",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/12/2024"
  },
  {
    "id": "503587071554879538",
    "pseudo": "Julien L.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2026"
  },
  {
    "id": "503871764053491722",
    "pseudo": "ＡｄｏｎｉｓＦＲ",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/02/2025"
  },
  {
    "id": "503907475058065409",
    "pseudo": "zTenshoo",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "13/05/2024"
  },
  {
    "id": "504196967187087360",
    "pseudo": "νεпσм",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/12/2024"
  },
  {
    "id": "504232425900212224",
    "pseudo": "Valro G2 FOR LIFE AND FOREVER",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/08/2024"
  },
  {
    "id": "504252080819798027",
    "pseudo": "Trépel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/04/2026"
  },
  {
    "id": "504505763339698176",
    "pseudo": "MUNKO",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/04/2025"
  },
  {
    "id": "504751170695331850",
    "pseudo": "xGiingo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/06/2024"
  },
  {
    "id": "504936307622019082",
    "pseudo": "Rayzi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/10/2024"
  },
  {
    "id": "504954623262457879",
    "pseudo": "Gryffer🎗",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/04/2025"
  },
  {
    "id": "505012649554345988",
    "pseudo": "Paquito",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2025"
  },
  {
    "id": "505131302811336715",
    "pseudo": "VAP Storm",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2025"
  },
  {
    "id": "505426745743245315",
    "pseudo": "Horuw",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/12/2024"
  },
  {
    "id": "506069453147078656",
    "pseudo": "meRmoude",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/01/2025"
  },
  {
    "id": "506123505386127370",
    "pseudo": "nineosoe",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/12/2025"
  },
  {
    "id": "506156658788139009",
    "pseudo": "J€y_rhum",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/10/2025"
  },
  {
    "id": "506198403479502860",
    "pseudo": "MAVERICK14",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/03/2025"
  },
  {
    "id": "506208155412463656",
    "pseudo": "KnG_WaR_",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/01/2025"
  },
  {
    "id": "506462363340242964",
    "pseudo": "Kodiak 🇺🇦",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/12/2025"
  },
  {
    "id": "506518452094238762",
    "pseudo": "ZMIITO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2025"
  },
  {
    "id": "506582764468830215",
    "pseudo": "Moroo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2024"
  },
  {
    "id": "506588507670839297",
    "pseudo": "KiLiFiX83",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/12/2024"
  },
  {
    "id": "507287151936012289",
    "pseudo": "MenInBlackYT",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2025"
  },
  {
    "id": "507618886431146014",
    "pseudo": "KrM",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/03/2025"
  },
  {
    "id": "507646516685570068",
    "pseudo": "Hanout21",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/02/2025"
  },
  {
    "id": "507998186661740574",
    "pseudo": "Zior93",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/04/2026"
  },
  {
    "id": "508288039970275328",
    "pseudo": "EagleFalconX56",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2024"
  },
  {
    "id": "509376320019496993",
    "pseudo": "Azerty74",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/05/2025"
  },
  {
    "id": "509510251335254026",
    "pseudo": "hardware02",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/03/2025"
  },
  {
    "id": "509773395949518849",
    "pseudo": "eLcoco31",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/01/2025"
  },
  {
    "id": "510194357207302164",
    "pseudo": "nico06190",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2025"
  },
  {
    "id": "510515531980472345",
    "pseudo": "PxrsloII",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/03/2025"
  },
  {
    "id": "510935188843397153",
    "pseudo": "Mister_Stoned",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/04/2025"
  },
  {
    "id": "511121320709193739",
    "pseudo": "Timal",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/09/2024"
  },
  {
    "id": "511191206902890506",
    "pseudo": "LOVE",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/02/2026"
  },
  {
    "id": "511222329200607239",
    "pseudo": "Jhon Moore",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/01/2025"
  },
  {
    "id": "511575611211251723",
    "pseudo": "SlaeyS",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/07/2025"
  },
  {
    "id": "512229537451606017",
    "pseudo": "Yoyo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/09/2025"
  },
  {
    "id": "512677082975830027",
    "pseudo": "Varant__ARM",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/06/2025"
  },
  {
    "id": "512991431590281216",
    "pseudo": "MoToRiDeR896425",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/03/2025"
  },
  {
    "id": "513103306910990357",
    "pseudo": "Tassin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/05/2025"
  },
  {
    "id": "513349307055865858",
    "pseudo": "YoxiD Kinokam",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "16/05/2024"
  },
  {
    "id": "513463407077228545",
    "pseudo": "Trasheur_nicx_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/08/2025"
  },
  {
    "id": "513720391316013084",
    "pseudo": "Adame.Ta",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/07/2025"
  },
  {
    "id": "513720929663189012",
    "pseudo": "Dorian",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/08/2025"
  },
  {
    "id": "513843444737638407",
    "pseudo": "papy du 30",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/08/2025"
  },
  {
    "id": "514168188074983437",
    "pseudo": "MoustaffaLaRafale",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/07/2025"
  },
  {
    "id": "514373760661585931",
    "pseudo": "Giraudmx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/08/2024"
  },
  {
    "id": "514794308927488010",
    "pseudo": "DJOM_FAUCON",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2025"
  },
  {
    "id": "515154733602701312",
    "pseudo": "Frygame",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2025"
  },
  {
    "id": "515158428151316491",
    "pseudo": "Harper",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/12/2025"
  },
  {
    "id": "515217791024890011",
    "pseudo": "zepekigno",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/05/2024"
  },
  {
    "id": "515445988035395584",
    "pseudo": "FeitKatten",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/10/2024"
  },
  {
    "id": "515557355224694804",
    "pseudo": "Nicozaur",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/06/2025"
  },
  {
    "id": "515687854911913995",
    "pseudo": "LoOpInG",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/02/2025"
  },
  {
    "id": "515972144165945344",
    "pseudo": "xam94",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "29/06/2025"
  },
  {
    "id": "516158166505881605",
    "pseudo": "MAMOUTHpowa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/08/2024"
  },
  {
    "id": "516294366612946954",
    "pseudo": "ruskoof",
    "role": "Soldat",
    "grade": "Sergent-Chef",
    "joinDate": "21/11/2025"
  },
  {
    "id": "516302007020290048",
    "pseudo": "KionX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/12/2024"
  },
  {
    "id": "516385274339524614",
    "pseudo": "Gordon Stank",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2025"
  },
  {
    "id": "516927553659994119",
    "pseudo": "FrCMomo08",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/05/2024"
  },
  {
    "id": "516996723076366346",
    "pseudo": "Dohko 🇩🇪💥✡",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/08/2024"
  },
  {
    "id": "517801459534790677",
    "pseudo": "valkirel",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/02/2025"
  },
  {
    "id": "517805599531204647",
    "pseudo": "F-Teyi",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "19/03/2024"
  },
  {
    "id": "518205949484466186",
    "pseudo": "MadDjux",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "29/01/2025"
  },
  {
    "id": "518233163399692310",
    "pseudo": "Zampaaa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/01/2026"
  },
  {
    "id": "518344271422816256",
    "pseudo": "JoKaWa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/12/2024"
  },
  {
    "id": "518411212720046110",
    "pseudo": "Swiizy",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/04/2024"
  },
  {
    "id": "518519518365220874",
    "pseudo": "Twenty-Five",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/04/2025"
  },
  {
    "id": "518831155412467752",
    "pseudo": "CPL Clyde043",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "16/07/2024"
  },
  {
    "id": "518874174513479694",
    "pseudo": "Minidingue_Charly",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "05/04/2025"
  },
  {
    "id": "519337250136260623",
    "pseudo": "Kabubs",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2024"
  },
  {
    "id": "519565587421200405",
    "pseudo": "HeRo117",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/12/2024"
  },
  {
    "id": "519896673137459210",
    "pseudo": "Nail / Emilio",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/02/2026"
  },
  {
    "id": "520610573029998612",
    "pseudo": "allkatell",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/09/2025"
  },
  {
    "id": "520624390757417001",
    "pseudo": "Ordo Malleus",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/07/2025"
  },
  {
    "id": "520950153306439691",
    "pseudo": "arco62",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/02/2025"
  },
  {
    "id": "523686600144846848",
    "pseudo": "freakalain",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "17/03/2026"
  },
  {
    "id": "524678358974332944",
    "pseudo": "🅺🅸🆃🆂🆄🅽🅴",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/01/2025"
  },
  {
    "id": "525004049645436931",
    "pseudo": "AVAST",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/04/2025"
  },
  {
    "id": "525038320703766557",
    "pseudo": "prazam",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2026"
  },
  {
    "id": "525456313715654666",
    "pseudo": "Caporal K1tsu",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "03/07/2024"
  },
  {
    "id": "525987541371977746",
    "pseudo": "Hazgui",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/03/2025"
  },
  {
    "id": "526674285301989397",
    "pseudo": "creeloo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2025"
  },
  {
    "id": "527149533541695499",
    "pseudo": "[CCH] Matheo Weston",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "19/01/2025"
  },
  {
    "id": "527174420217724928",
    "pseudo": "Zerfo_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2025"
  },
  {
    "id": "527183144538079263",
    "pseudo": "Thanh_Drixxy",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/11/2025"
  },
  {
    "id": "527251829914861601",
    "pseudo": "dylanc_78",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "28/05/2025"
  },
  {
    "id": "527490854781321242",
    "pseudo": "RasRita",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2025"
  },
  {
    "id": "527586449831493643",
    "pseudo": "Jérémy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2026"
  },
  {
    "id": "527747207751794698",
    "pseudo": "TheLastFreeDom",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2024"
  },
  {
    "id": "527918266820067351",
    "pseudo": "Nowhere",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/03/2025"
  },
  {
    "id": "527918907445477387",
    "pseudo": "Kisuke",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "18/04/2024"
  },
  {
    "id": "528210317940097026",
    "pseudo": "liliancat",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/05/2025"
  },
  {
    "id": "528210719162761228",
    "pseudo": "piffe_paffe",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/08/2024"
  },
  {
    "id": "528344982550085652",
    "pseudo": "Salmone",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/03/2024"
  },
  {
    "id": "528368032658096140",
    "pseudo": "Benze6925",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/03/2026"
  },
  {
    "id": "528607988098007077",
    "pseudo": "mike bana",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/10/2024"
  },
  {
    "id": "528635311413133312",
    "pseudo": "Ho",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2025"
  },
  {
    "id": "528880916681195520",
    "pseudo": "OO_BANDITOO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/12/2025"
  },
  {
    "id": "528896812699090956",
    "pseudo": "MyN!",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "25/02/2026"
  },
  {
    "id": "529241322729504778",
    "pseudo": "wonka83100",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/10/2024"
  },
  {
    "id": "529312071402258434",
    "pseudo": "Ano",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/07/2024"
  },
  {
    "id": "529341061294850071",
    "pseudo": "Riyaad_0",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/06/2025"
  },
  {
    "id": "529342699070029855",
    "pseudo": "109Savv",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2025"
  },
  {
    "id": "529363707135000600",
    "pseudo": "Kikiix",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/02/2025"
  },
  {
    "id": "529592736769114113",
    "pseudo": "Akinaro",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/03/2026"
  },
  {
    "id": "529715557562318859",
    "pseudo": "Maxfalouup",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/09/2025"
  },
  {
    "id": "530090997879668757",
    "pseudo": "Zooracke",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/06/2025"
  },
  {
    "id": "530092643527426058",
    "pseudo": "[TEN] Anthony Michoux",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/10/2025"
  },
  {
    "id": "530133228275630082",
    "pseudo": "Jojo94",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/10/2024"
  },
  {
    "id": "530372330837245955",
    "pseudo": "Doofyyy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/03/2025"
  },
  {
    "id": "530419360607764505",
    "pseudo": "1ère CL | Tombstone",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/08/2024"
  },
  {
    "id": "530817383473086495",
    "pseudo": "Le-Mec-Derrière-Toi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/01/2025"
  },
  {
    "id": "530865713066409984",
    "pseudo": "LYNGER_415",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/06/2025"
  },
  {
    "id": "531078352333832214",
    "pseudo": "Kratinho",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/05/2024"
  },
  {
    "id": "531091937625899009",
    "pseudo": "Max Rocka",
    "role": "Soldat",
    "grade": "Sergent",
    "joinDate": "02/01/2025"
  },
  {
    "id": "531297525752397834",
    "pseudo": "Le-Achhh",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/05/2025"
  },
  {
    "id": "531435247900819456",
    "pseudo": "skyfull_teton",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2025"
  },
  {
    "id": "531919565769408522",
    "pseudo": "ll_x_L0L0_x_ll",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/12/2024"
  },
  {
    "id": "531942909239492631",
    "pseudo": "Risezerq59",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "532073980895690752",
    "pseudo": "KIWI",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/06/2025"
  },
  {
    "id": "532193686272868392",
    "pseudo": "JL Yuki",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2025"
  },
  {
    "id": "532593559342153729",
    "pseudo": "Wayv",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/05/2025"
  },
  {
    "id": "532624538115112961",
    "pseudo": "Scar",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "15/11/2024"
  },
  {
    "id": "532645404035121153",
    "pseudo": "Artex",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2025"
  },
  {
    "id": "532702005840576517",
    "pseudo": "kevinsp73/",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/06/2025"
  },
  {
    "id": "532750190562639883",
    "pseudo": "ReaperSan0_0",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/05/2024"
  },
  {
    "id": "532999095934255146",
    "pseudo": "revolutionaryarcko",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/03/2025"
  },
  {
    "id": "533007037156687873",
    "pseudo": "🇨🇵theReaIOpS🇨🇵",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/09/2025"
  },
  {
    "id": "533026174755012619",
    "pseudo": "clarencedettman2009",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/04/2025"
  },
  {
    "id": "533428580168892427",
    "pseudo": "Lamyss",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/02/2025"
  },
  {
    "id": "533683233036959764",
    "pseudo": "addesign23",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/01/2025"
  },
  {
    "id": "533844713392832517",
    "pseudo": "the_real_skorpion",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/08/2024"
  },
  {
    "id": "534788896521846784",
    "pseudo": "$$_REX32BG_$$",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2025"
  },
  {
    "id": "535131081457008690",
    "pseudo": "LuluPerlu",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2024"
  },
  {
    "id": "535138979738157056",
    "pseudo": "Aideeennn",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/12/2025"
  },
  {
    "id": "535182631181090861",
    "pseudo": "AlxCore",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/01/2025"
  },
  {
    "id": "535190003387727892",
    "pseudo": "Alex41005",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/07/2025"
  },
  {
    "id": "535192204809994250",
    "pseudo": "gygygame",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "15/07/2024"
  },
  {
    "id": "535329767961133056",
    "pseudo": "McAlisterConnor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/11/2024"
  },
  {
    "id": "535789726578376704",
    "pseudo": "xmenbandit",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/06/2025"
  },
  {
    "id": "535802626919497728",
    "pseudo": "Batawi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2025"
  },
  {
    "id": "535840553531736066",
    "pseudo": "Sac d'Os",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/11/2024"
  },
  {
    "id": "535869153186283520",
    "pseudo": "Vinceou2",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "06/09/2025"
  },
  {
    "id": "535909162400481290",
    "pseudo": "Cch. Tatar ( le chieur )",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "17/11/2024"
  },
  {
    "id": "535935479816650752",
    "pseudo": "Mad",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2025"
  },
  {
    "id": "536445577953673241",
    "pseudo": "jejeclif",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/02/2025"
  },
  {
    "id": "536508489904685057",
    "pseudo": "Didouille55",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/03/2026"
  },
  {
    "id": "536563437191299082",
    "pseudo": "Ξ✗otiicツ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/01/2026"
  },
  {
    "id": "536986703001419836",
    "pseudo": "le déjantés",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "06/03/2024"
  },
  {
    "id": "537258200735678466",
    "pseudo": "Monseigneur FR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2026"
  },
  {
    "id": "537419500761382932",
    "pseudo": "karimeloo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/04/2025"
  },
  {
    "id": "537684689029431296",
    "pseudo": "ikki",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/05/2024"
  },
  {
    "id": "537732894991581218",
    "pseudo": "BSUnlovable",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/06/2025"
  },
  {
    "id": "538438691346186250",
    "pseudo": "French_Forces01",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/10/2025"
  },
  {
    "id": "538447821788151821",
    "pseudo": "Natsugoffy | Hendriks",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/02/2025"
  },
  {
    "id": "538456643051061288",
    "pseudo": "Lcs_OFF85",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/07/2025"
  },
  {
    "id": "538567936764411908",
    "pseudo": "Tyler Macgregor",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/08/2024"
  },
  {
    "id": "538820193908949013",
    "pseudo": "Gangstin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/07/2025"
  },
  {
    "id": "538863020668092436",
    "pseudo": "Lamcer",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/07/2024"
  },
  {
    "id": "539086784751992853",
    "pseudo": "ThomasFR",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/11/2024"
  },
  {
    "id": "539156393014591511",
    "pseudo": "d4hantikali",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/05/2024"
  },
  {
    "id": "539906423518134303",
    "pseudo": "Atlas_France",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2025"
  },
  {
    "id": "540209160323858475",
    "pseudo": "Romann pantais",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2026"
  },
  {
    "id": "540281647195750424",
    "pseudo": "NeVeR_Miky",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/07/2025"
  },
  {
    "id": "540609656419123226",
    "pseudo": "J.O.S.H.U.A",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "540650811785609226",
    "pseudo": "Polow Atmos",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/02/2025"
  },
  {
    "id": "540993990473023508",
    "pseudo": "flex",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/03/2025"
  },
  {
    "id": "541228582001704980",
    "pseudo": "Mask_",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "31/07/2024"
  },
  {
    "id": "541564007916634114",
    "pseudo": "Darkirk4527",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/10/2024"
  },
  {
    "id": "542019296855982110",
    "pseudo": "Delta'",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/06/2025"
  },
  {
    "id": "542480392779857932",
    "pseudo": "Floflolastikot",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/07/2025"
  },
  {
    "id": "542749871959179275",
    "pseudo": "Pinpin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/02/2025"
  },
  {
    "id": "543140050330976277",
    "pseudo": "benette22",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2026"
  },
  {
    "id": "543197109915090952",
    "pseudo": "Le_Benks",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/03/2024"
  },
  {
    "id": "543404918321446946",
    "pseudo": "Ҝɑnatix🥝",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/07/2025"
  },
  {
    "id": "543550906478886934",
    "pseudo": "Sc8rpi0n",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/01/2024"
  },
  {
    "id": "543800030772068353",
    "pseudo": "Syawou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/10/2024"
  },
  {
    "id": "543950192660054026",
    "pseudo": "SiKoDa426",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/03/2026"
  },
  {
    "id": "544616903876804652",
    "pseudo": "leoww1383",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/02/2025"
  },
  {
    "id": "544647984936124427",
    "pseudo": "Taiga",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/07/2025"
  },
  {
    "id": "544859488155336734",
    "pseudo": "Paindepice",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/01/2025"
  },
  {
    "id": "545023790002733076",
    "pseudo": "Fikri",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/03/2026"
  },
  {
    "id": "545342697397813249",
    "pseudo": "Nima",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/04/2024"
  },
  {
    "id": "545900270710685697",
    "pseudo": "Damien Ronie",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/12/2024"
  },
  {
    "id": "546055830366060547",
    "pseudo": "MacFry",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "01/02/2024"
  },
  {
    "id": "546315723329372160",
    "pseudo": "Powpe",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/03/2025"
  },
  {
    "id": "546468513590804500",
    "pseudo": "Denté José",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/06/2025"
  },
  {
    "id": "546786621891149842",
    "pseudo": "Pans",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/01/2025"
  },
  {
    "id": "546881894806192128",
    "pseudo": "GriM0o_Tbz",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "19/03/2026"
  },
  {
    "id": "547075702789373953",
    "pseudo": "! Lemon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "547104092384919553",
    "pseudo": "Vince440",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/08/2025"
  },
  {
    "id": "547178629789122569",
    "pseudo": "Panzer08",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2024"
  },
  {
    "id": "547546436976508928",
    "pseudo": "pouleto",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/03/2025"
  },
  {
    "id": "548481158007095306",
    "pseudo": "valentino02212",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/01/2025"
  },
  {
    "id": "548863169817477120",
    "pseudo": "Neysoxx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/07/2025"
  },
  {
    "id": "549294051157868548",
    "pseudo": "Amin Colman",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/09/2025"
  },
  {
    "id": "549354953035087899",
    "pseudo": "132 | TFatih",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/07/2024"
  },
  {
    "id": "549380360090288129",
    "pseudo": "Kevsko92",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/10/2024"
  },
  {
    "id": "549528811772051461",
    "pseudo": "Vorador",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/01/2025"
  },
  {
    "id": "549674211573104710",
    "pseudo": "™The𝕰ryzZ™",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2025"
  },
  {
    "id": "550731127850270723",
    "pseudo": "vlk345",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/01/2026"
  },
  {
    "id": "550758389597339651",
    "pseudo": "Lucifer",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "22/02/2024"
  },
  {
    "id": "550931100814278666",
    "pseudo": "Yokshii",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/08/2025"
  },
  {
    "id": "550941865201893387",
    "pseudo": "matiiis_p",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/01/2026"
  },
  {
    "id": "551060698260570125",
    "pseudo": "Le V",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/02/2025"
  },
  {
    "id": "551416330591535133",
    "pseudo": "cleem1247",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2025"
  },
  {
    "id": "551432338714656768",
    "pseudo": "ll_adamai_ll",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2025"
  },
  {
    "id": "551807269348573350",
    "pseudo": "labanane4528",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2025"
  },
  {
    "id": "551854211126526008",
    "pseudo": "Joffrey",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2024"
  },
  {
    "id": "551934146117894165",
    "pseudo": "bloody",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2026"
  },
  {
    "id": "552064149689991168",
    "pseudo": "Alpha Newton",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/04/2025"
  },
  {
    "id": "552438318474985473",
    "pseudo": "Mek22",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/06/2025"
  },
  {
    "id": "553265710680244224",
    "pseudo": "[B]Lt Karnage",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "04/04/2024"
  },
  {
    "id": "553328848977133589",
    "pseudo": "CoMpLeX_VeiZz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/05/2025"
  },
  {
    "id": "553361602510979112",
    "pseudo": "Zéphy06",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2025"
  },
  {
    "id": "554287826661933056",
    "pseudo": "Lord_Poney",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/06/2025"
  },
  {
    "id": "554323313682415616",
    "pseudo": "YsaisL'animale",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/08/2025"
  },
  {
    "id": "555091510887055426",
    "pseudo": "LordLigier",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/01/2025"
  },
  {
    "id": "555151991970725909",
    "pseudo": "RobJ-Lob",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/12/2024"
  },
  {
    "id": "555317061707104256",
    "pseudo": "Nuskyyy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/07/2025"
  },
  {
    "id": "555443270575194122",
    "pseudo": "viiito-corleone",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2026"
  },
  {
    "id": "555785719042539531",
    "pseudo": "potatoes42",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/02/2025"
  },
  {
    "id": "556146955269701652",
    "pseudo": "BLACKSHISHON",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/05/2025"
  },
  {
    "id": "556428922078625822",
    "pseudo": "zbeultor",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2025"
  },
  {
    "id": "556576923132887066",
    "pseudo": "kyleee_andrsn",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2025"
  },
  {
    "id": "556861245127393303",
    "pseudo": "valoulacité",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/12/2024"
  },
  {
    "id": "557330189919584264",
    "pseudo": "ApashYT",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/01/2025"
  },
  {
    "id": "558352271583477800",
    "pseudo": "Milf Hunter 07",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/03/2026"
  },
  {
    "id": "558384221555785729",
    "pseudo": "𝘭𝘶𝘬𝘻𝘺",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/08/2025"
  },
  {
    "id": "558594721786626071",
    "pseudo": "QC_raptor",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/08/2024"
  },
  {
    "id": "559098278881394688",
    "pseudo": "EagleClaw",
    "role": "Soldat",
    "grade": "Sergent",
    "joinDate": "06/01/2025"
  },
  {
    "id": "559129258283237420",
    "pseudo": "Inanis",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2025"
  },
  {
    "id": "559476358129123348",
    "pseudo": "iTsMeBuGs",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/04/2024"
  },
  {
    "id": "559484807017660446",
    "pseudo": "Micka vrat",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/09/2025"
  },
  {
    "id": "559486564338499595",
    "pseudo": "Maxsnope",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2025"
  },
  {
    "id": "559776982624108554",
    "pseudo": "vargas95",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/03/2024"
  },
  {
    "id": "559836563148898305",
    "pseudo": "Da_CLIK",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/08/2025"
  },
  {
    "id": "559863858609651766",
    "pseudo": "kueefchief",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/01/2025"
  },
  {
    "id": "560086817894957097",
    "pseudo": "Bzh_fureur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/04/2024"
  },
  {
    "id": "560407219166904321",
    "pseudo": "SASU BMVDR",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/07/2025"
  },
  {
    "id": "560620601090244619",
    "pseudo": "SheidHeda",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/08/2025"
  },
  {
    "id": "561299672719818762",
    "pseudo": "Ange Tachini",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/03/2026"
  },
  {
    "id": "561676300952010770",
    "pseudo": "Robine42",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/02/2026"
  },
  {
    "id": "561681510713786370",
    "pseudo": "lXl-Mugiwara-lXl",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/01/2026"
  },
  {
    "id": "561957615345729557",
    "pseudo": "PEPITO",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/07/2025"
  },
  {
    "id": "561980863731204107",
    "pseudo": "𝓦𝓪𝓻𝓮𝔃",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/03/2025"
  },
  {
    "id": "562682841444515869",
    "pseudo": "romxdu16",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/07/2025"
  },
  {
    "id": "563434459588722698",
    "pseudo": "Magic farnous",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2025"
  },
  {
    "id": "563465802880385069",
    "pseudo": "Neo-Styx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/06/2025"
  },
  {
    "id": "563800986041319429",
    "pseudo": "fishfucker",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2024"
  },
  {
    "id": "563873164183207946",
    "pseudo": "1er CL HeinzLasauce",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/02/2024"
  },
  {
    "id": "563920214509617153",
    "pseudo": "El Givrer",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/07/2025"
  },
  {
    "id": "564368722656231444",
    "pseudo": "Alex calado 1704",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2026"
  },
  {
    "id": "564398550918889492",
    "pseudo": "BitSnake",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2025"
  },
  {
    "id": "564494635641077780",
    "pseudo": "Tristanov",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "30/05/2025"
  },
  {
    "id": "564511794517901324",
    "pseudo": ".Mat.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/10/2024"
  },
  {
    "id": "564882285082574898",
    "pseudo": "Wrench",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/01/2026"
  },
  {
    "id": "564910939070267413",
    "pseudo": "Just1Bridou_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/12/2024"
  },
  {
    "id": "565092892805300235",
    "pseudo": "PirateDuBitume-",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/01/2026"
  },
  {
    "id": "565483883223580674",
    "pseudo": "[126e RGRO7] Capitaine Boulard",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/01/2025"
  },
  {
    "id": "565546402952904715",
    "pseudo": "amerikaz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "565576490104913930",
    "pseudo": "Petrov Dumass",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/06/2025"
  },
  {
    "id": "566169805686702090",
    "pseudo": "Jhonny",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/05/2025"
  },
  {
    "id": "566184084343226370",
    "pseudo": "Mka91200",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/03/2024"
  },
  {
    "id": "566692331760254999",
    "pseudo": "Tuco",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/04/2025"
  },
  {
    "id": "567401074575540253",
    "pseudo": "Zl deathstro",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "27/01/2025"
  },
  {
    "id": "567771810511454218",
    "pseudo": "Genesys",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/03/2025"
  },
  {
    "id": "567780439595417619",
    "pseudo": "plaw.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/08/2025"
  },
  {
    "id": "567868136167309324",
    "pseudo": "H3llSh0ck_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/09/2025"
  },
  {
    "id": "568179216743661599",
    "pseudo": "[CLTCH] LtnNico (bédivère)",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/11/2024"
  },
  {
    "id": "568468710969573391",
    "pseudo": "ysm971",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/04/2024"
  },
  {
    "id": "568570104351031314",
    "pseudo": "SampoL",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/04/2024"
  },
  {
    "id": "568593277415063572",
    "pseudo": "Myst",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2025"
  },
  {
    "id": "569184170748805151",
    "pseudo": "kyky9146",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/08/2025"
  },
  {
    "id": "569447367376371712",
    "pseudo": "SRT_KyLs",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/12/2025"
  },
  {
    "id": "570231736487772191",
    "pseudo": "Dacklife1024",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/05/2025"
  },
  {
    "id": "570330433334673409",
    "pseudo": "Frater",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/04/2026"
  },
  {
    "id": "571395263529484289",
    "pseudo": "julien_lebleu",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/04/2025"
  },
  {
    "id": "571896350216683541",
    "pseudo": "Frixxon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/04/2024"
  },
  {
    "id": "571965229479755777",
    "pseudo": "Noha [FR]",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/08/2024"
  },
  {
    "id": "572427119649488927",
    "pseudo": "rico64100",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/07/2024"
  },
  {
    "id": "572480306116952085",
    "pseudo": "Le_Duc_803",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2026"
  },
  {
    "id": "572520072485142538",
    "pseudo": "Chouette7953",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/01/2025"
  },
  {
    "id": "572798894430355458",
    "pseudo": "SAMY_BZH_35",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/06/2025"
  },
  {
    "id": "572812128445136897",
    "pseudo": "PL_du25",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/02/2025"
  },
  {
    "id": "573112611457990657",
    "pseudo": "Husky999",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/02/2026"
  },
  {
    "id": "573286107064565780",
    "pseudo": "Raaptor_13",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "14/06/2025"
  },
  {
    "id": "573501929792077834",
    "pseudo": "[EC] Biggy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/12/2025"
  },
  {
    "id": "573575248193126412",
    "pseudo": "Gin진",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/09/2024"
  },
  {
    "id": "573781787231256577",
    "pseudo": "Le S",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/07/2025"
  },
  {
    "id": "573945303565205516",
    "pseudo": "lecapichef1",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "31/01/2024"
  },
  {
    "id": "574556327901396992",
    "pseudo": "CCH | Caedors",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "05/12/2023"
  },
  {
    "id": "574565498574995457",
    "pseudo": "Aymen",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/03/2024"
  },
  {
    "id": "575457364145340459",
    "pseudo": "[Fr] Delta_oscar22",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/11/2024"
  },
  {
    "id": "575783740886745089",
    "pseudo": "MindGeek",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/07/2025"
  },
  {
    "id": "576501376184746013",
    "pseudo": "noisyyboy97",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/07/2025"
  },
  {
    "id": "576692973266403331",
    "pseudo": "MaitreQuentin25",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "31/03/2026"
  },
  {
    "id": "576724162459205633",
    "pseudo": "iuniikz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/10/2024"
  },
  {
    "id": "577112675612491798",
    "pseudo": "whartroot",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2024"
  },
  {
    "id": "577215921647779852",
    "pseudo": "iStuuP",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/05/2025"
  },
  {
    "id": "577327380998389766",
    "pseudo": "AlexNCY",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/02/2026"
  },
  {
    "id": "577560363558764557",
    "pseudo": "HTLCB",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/09/2025"
  },
  {
    "id": "577597199446179880",
    "pseudo": "🛡 Bob64R",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/02/2025"
  },
  {
    "id": "578315723961794572",
    "pseudo": "nico770534",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/02/2025"
  },
  {
    "id": "578339704756502529",
    "pseudo": "alane_ad11",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/12/2024"
  },
  {
    "id": "578362409983541269",
    "pseudo": "Syrzup",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/07/2024"
  },
  {
    "id": "578659549372743693",
    "pseudo": "Tyrol",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/03/2025"
  },
  {
    "id": "578926005985476609",
    "pseudo": "SKUNKISME",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/03/2025"
  },
  {
    "id": "579043545722126367",
    "pseudo": "Zekor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/04/2025"
  },
  {
    "id": "579274900846542848",
    "pseudo": "Kitsune___12",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/12/2024"
  },
  {
    "id": "580065703932198935",
    "pseudo": "romax22",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/06/2025"
  },
  {
    "id": "580822392398413840",
    "pseudo": "loisgate01",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/01/2026"
  },
  {
    "id": "580824839397310472",
    "pseudo": "Kirito",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/06/2025"
  },
  {
    "id": "581135654440665108",
    "pseudo": "EVAN",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/07/2025"
  },
  {
    "id": "581521837247168520",
    "pseudo": "Seiko FR",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/03/2025"
  },
  {
    "id": "581882024562786306",
    "pseudo": "El3ctr!ck",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/05/2025"
  },
  {
    "id": "581961748886585345",
    "pseudo": "coraliesousfrozen",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/12/2024"
  },
  {
    "id": "582012737383825429",
    "pseudo": "Aoxi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "582135151761424384",
    "pseudo": "MI6",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/10/2025"
  },
  {
    "id": "582207647798001675",
    "pseudo": "Nocid_65",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/11/2024"
  },
  {
    "id": "582247822112456768",
    "pseudo": "rastoons.",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "15/05/2024"
  },
  {
    "id": "583327869493575682",
    "pseudo": "Reg Elrey",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/01/2025"
  },
  {
    "id": "583614891466817554",
    "pseudo": "wuiwuui",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/07/2024"
  },
  {
    "id": "583812989379936364",
    "pseudo": "Viva🌹",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/04/2024"
  },
  {
    "id": "584039181366591501",
    "pseudo": "Pollograss",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/04/2024"
  },
  {
    "id": "584046360580456475",
    "pseudo": "Xx FuRy xX 2646",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/08/2024"
  },
  {
    "id": "584690062361624603",
    "pseudo": "seudou11",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/07/2024"
  },
  {
    "id": "584898404275191808",
    "pseudo": "Barbarossa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/05/2024"
  },
  {
    "id": "585193487893528578",
    "pseudo": "1CL Thor Haine",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/11/2024"
  },
  {
    "id": "585564012901564601",
    "pseudo": "JtUnPano QC",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/01/2025"
  },
  {
    "id": "585851065606471693",
    "pseudo": "TDE Maitre",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "18/02/2024"
  },
  {
    "id": "586049682707316736",
    "pseudo": "slim python84",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/01/2026"
  },
  {
    "id": "586629983976292363",
    "pseudo": "Denere",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "24/03/2026"
  },
  {
    "id": "586674930205065218",
    "pseudo": "Eh_Merc2e",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/01/2025"
  },
  {
    "id": "586862623040077844",
    "pseudo": "RomGuib",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/03/2026"
  },
  {
    "id": "586908110715879428",
    "pseudo": "I_Am_Sandro",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/11/2025"
  },
  {
    "id": "586960232757067790",
    "pseudo": "𝕯𝖏𝖆𝖓𝖓𝖎_974",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2025"
  },
  {
    "id": "586977882027458560",
    "pseudo": "Slag",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/10/2024"
  },
  {
    "id": "587041656105074715",
    "pseudo": "TheWarriorPrince",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/02/2026"
  },
  {
    "id": "587084191565479946",
    "pseudo": "Feitan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/03/2025"
  },
  {
    "id": "587267918962884617",
    "pseudo": "Ulldrain Skoll",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/08/2024"
  },
  {
    "id": "587334877980917782",
    "pseudo": "Tchico",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/05/2024"
  },
  {
    "id": "587704384930971726",
    "pseudo": "ΔŦĠºɱอ→ɱอж",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/04/2024"
  },
  {
    "id": "587729199373221889",
    "pseudo": "Darkjor#67000",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/07/2025"
  },
  {
    "id": "588741716920631317",
    "pseudo": "StGuillaume",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/11/2024"
  },
  {
    "id": "588745742189854730",
    "pseudo": "DeyZ Monkey",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/03/2025"
  },
  {
    "id": "588761152553615402",
    "pseudo": "Digidix",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/03/2025"
  },
  {
    "id": "589178789620219917",
    "pseudo": "Kayto Toba",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/12/2024"
  },
  {
    "id": "589395604824915968",
    "pseudo": "RaZak",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2025"
  },
  {
    "id": "589488651646533660",
    "pseudo": "X7X-THC-X7X",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/02/2025"
  },
  {
    "id": "589778938780450838",
    "pseudo": "papy duff",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/05/2024"
  },
  {
    "id": "589891505141841981",
    "pseudo": "Lizard 9226",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "19/01/2025"
  },
  {
    "id": "590206751593463808",
    "pseudo": "matzimpl",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/01/2026"
  },
  {
    "id": "590223602574426122",
    "pseudo": "Bourranul",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "14/06/2024"
  },
  {
    "id": "590919850474602513",
    "pseudo": "Anderson Mcdex",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/10/2024"
  },
  {
    "id": "590932162212266014",
    "pseudo": "VitozLaSauce",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/08/2024"
  },
  {
    "id": "590977486376927233",
    "pseudo": "HolaPatata",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/01/2025"
  },
  {
    "id": "591310742322413578",
    "pseudo": "Braki",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/10/2024"
  },
  {
    "id": "592432119821893651",
    "pseudo": "Captain-Strange",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2025"
  },
  {
    "id": "592479589910183975",
    "pseudo": "TeenzY",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2025"
  },
  {
    "id": "592746048590577761",
    "pseudo": "Enzooth",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/04/2024"
  },
  {
    "id": "593183056810999809",
    "pseudo": "VitraxFr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/06/2025"
  },
  {
    "id": "593807163655323662",
    "pseudo": "Mathis",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/12/2024"
  },
  {
    "id": "594270453749776386",
    "pseudo": "Darkefire88300",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/07/2025"
  },
  {
    "id": "594984634887045320",
    "pseudo": "superio",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/07/2025"
  },
  {
    "id": "595254947956785192",
    "pseudo": "Aldor le sage",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/06/2025"
  },
  {
    "id": "595346916997595136",
    "pseudo": "Remouille",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/04/2026"
  },
  {
    "id": "595559896036933633",
    "pseudo": "StifMeister9079",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/12/2024"
  },
  {
    "id": "595637413846581277",
    "pseudo": "Tomt34299",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/07/2025"
  },
  {
    "id": "595683334567362571",
    "pseudo": "Marcoo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "596084168635711516",
    "pseudo": "mathyshin123",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2025"
  },
  {
    "id": "596430343582646281",
    "pseudo": "jemangedulait",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/05/2024"
  },
  {
    "id": "596723933852598382",
    "pseudo": "LeDucee",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/05/2025"
  },
  {
    "id": "596858617974489098",
    "pseudo": "[M.A.R.S] UnNainFidele-_-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/12/2025"
  },
  {
    "id": "597524800948273190",
    "pseudo": "Pim's",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2025"
  },
  {
    "id": "597551511630774284",
    "pseudo": "AFrOxGR3GJVH#2406",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/04/2024"
  },
  {
    "id": "597864536514756609",
    "pseudo": "wally974",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "04/07/2024"
  },
  {
    "id": "598222115870605312",
    "pseudo": "Tgf_POYPOY-39",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/06/2025"
  },
  {
    "id": "598380248371036171",
    "pseudo": "Draktar",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/02/2024"
  },
  {
    "id": "598521424386457610",
    "pseudo": "Belette",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/04/2026"
  },
  {
    "id": "598883293718511646",
    "pseudo": "rasco_devil",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/12/2024"
  },
  {
    "id": "599037278660067329",
    "pseudo": "lazar93srb",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/08/2025"
  },
  {
    "id": "599988370105434122",
    "pseudo": "LaPive",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/02/2025"
  },
  {
    "id": "600257361457840149",
    "pseudo": "Marmitofraise.ttv",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/06/2025"
  },
  {
    "id": "600437570622455821",
    "pseudo": "LDT Overlord",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/02/2025"
  },
  {
    "id": "600632229454020618",
    "pseudo": "Deadass_crazzy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/08/2025"
  },
  {
    "id": "600992178906464256",
    "pseudo": "boby",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/05/2025"
  },
  {
    "id": "601095285309046791",
    "pseudo": "JLJØK3R",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/06/2025"
  },
  {
    "id": "601368255008997377",
    "pseudo": "Rivalityjb",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/02/2026"
  },
  {
    "id": "601747019840618496",
    "pseudo": "ZEPEK",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "26/10/2025"
  },
  {
    "id": "602085563662729217",
    "pseudo": "Noah",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2025"
  },
  {
    "id": "602175562655596545",
    "pseudo": "Crewper5690",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/02/2025"
  },
  {
    "id": "602489146560479233",
    "pseudo": "Dyzoo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/01/2024"
  },
  {
    "id": "603077783521984512",
    "pseudo": "Kfran  [2nd CL]",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "18/04/2024"
  },
  {
    "id": "604658648194613249",
    "pseudo": "LittlEvil XVI",
    "role": "Soldat",
    "grade": "Sergent-Chef",
    "joinDate": "22/02/2024"
  },
  {
    "id": "604786003177111582",
    "pseudo": "HaydaWan_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/03/2026"
  },
  {
    "id": "605399800829181952",
    "pseudo": "Kiwi Agressif",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/04/2025"
  },
  {
    "id": "605409528774787113",
    "pseudo": "onejoy987",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/04/2024"
  },
  {
    "id": "605484047728115735",
    "pseudo": "Gripsoux",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/05/2025"
  },
  {
    "id": "605723729317724191",
    "pseudo": "\"hzx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2026"
  },
  {
    "id": "605821759958024192",
    "pseudo": "Thomson Alex (DeadLive999)",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/05/2024"
  },
  {
    "id": "606438993537531904",
    "pseudo": "Faulted",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2025"
  },
  {
    "id": "606450748045131778",
    "pseudo": "Mr_AdRiEnn",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/12/2025"
  },
  {
    "id": "606916121140002816",
    "pseudo": "SEFAXI",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/06/2025"
  },
  {
    "id": "607298047017222184",
    "pseudo": "Malaka",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/08/2024"
  },
  {
    "id": "607319839333154886",
    "pseudo": "Ninshu",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/02/2025"
  },
  {
    "id": "607499640576802816",
    "pseudo": "𝓐𝓵𝓫𝓪𝓼𝓱",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/08/2025"
  },
  {
    "id": "607547663705178112",
    "pseudo": "Skyloy_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/05/2025"
  },
  {
    "id": "607646847200133139",
    "pseudo": "Olivares",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/05/2025"
  },
  {
    "id": "607707883395874857",
    "pseudo": "the_biscotte",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/04/2025"
  },
  {
    "id": "607879301085265954",
    "pseudo": "Babate",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "607884846672379904",
    "pseudo": "STEF0UIZOU",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/09/2025"
  },
  {
    "id": "608023151892365469",
    "pseudo": "Bastooche_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/08/2025"
  },
  {
    "id": "608313603602513940",
    "pseudo": "Krakerds",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/04/2026"
  },
  {
    "id": "608398069456961568",
    "pseudo": "SLITface",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/09/2025"
  },
  {
    "id": "608670688752173086",
    "pseudo": "[LSV] BIBI Barjot",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2024"
  },
  {
    "id": "608729062713589761",
    "pseudo": "monsterkill",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/09/2024"
  },
  {
    "id": "608851045581455360",
    "pseudo": "Yanouk",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/09/2024"
  },
  {
    "id": "608984006264094720",
    "pseudo": "CCH. MManny",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/06/2025"
  },
  {
    "id": "609029339366948884",
    "pseudo": "SanKa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/04/2025"
  },
  {
    "id": "609078557368647692",
    "pseudo": "o0 FRAGZONE 0o",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "28/03/2024"
  },
  {
    "id": "609129273730793510",
    "pseudo": "Clement Valentio",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "27/12/2024"
  },
  {
    "id": "609365240727207936",
    "pseudo": "clarien69",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2025"
  },
  {
    "id": "609474780466511899",
    "pseudo": "Petit-Matou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/02/2026"
  },
  {
    "id": "609549616869933057",
    "pseudo": "༺°•şxᵽŕ𝖔𝚐ąꪔ૯ŕ•°ᴮᵒˢˢ°༻",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/05/2025"
  },
  {
    "id": "609807162599800834",
    "pseudo": "𝖂𝕺𝕺𝕶𝖄",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2026"
  },
  {
    "id": "610162685362962452",
    "pseudo": "the_king_royale",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/01/2025"
  },
  {
    "id": "610196501939093504",
    "pseudo": "gaetan6159",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2025"
  },
  {
    "id": "610213648203382785",
    "pseudo": "skwadrop",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/12/2025"
  },
  {
    "id": "610533843916685312",
    "pseudo": "totitux",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2026"
  },
  {
    "id": "610993734900908033",
    "pseudo": "Sup3rmel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/01/2025"
  },
  {
    "id": "611978424747032576",
    "pseudo": "Clément.c",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/03/2025"
  },
  {
    "id": "612394856853012490",
    "pseudo": "Young_Maton",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/08/2025"
  },
  {
    "id": "612581521236426753",
    "pseudo": "🅹 🅼 🆉Ⓡ",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/02/2026"
  },
  {
    "id": "612696204597395472",
    "pseudo": "Saty_i2s94",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/01/2025"
  },
  {
    "id": "612819451233959996",
    "pseudo": "La Matrice",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/02/2025"
  },
  {
    "id": "612973634201583636",
    "pseudo": "Ronanlmr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/01/2025"
  },
  {
    "id": "613057547703681034",
    "pseudo": "kevind09",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/02/2025"
  },
  {
    "id": "613124504960499753",
    "pseudo": "Snackay11",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/01/2025"
  },
  {
    "id": "613350399860146198",
    "pseudo": "1CL OkzTy",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/06/2024"
  },
  {
    "id": "613410817257504777",
    "pseudo": "PpitooO67",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/01/2026"
  },
  {
    "id": "613487324050882590",
    "pseudo": "Tugteo84",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/06/2025"
  },
  {
    "id": "613504369261936651",
    "pseudo": "MW3dragon16",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/12/2025"
  },
  {
    "id": "613658393428885505",
    "pseudo": "[⚡] 𝐄𝖈𝖍𝖔77🇨🇵",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/02/2025"
  },
  {
    "id": "613704330976952322",
    "pseudo": "tlp16",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/03/2024"
  },
  {
    "id": "613777375678693386",
    "pseudo": "Toto",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/04/2025"
  },
  {
    "id": "614087036462432268",
    "pseudo": "Bzhxhunter",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/02/2025"
  },
  {
    "id": "614442340526063618",
    "pseudo": "regaalecatan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/05/2024"
  },
  {
    "id": "614574990305656972",
    "pseudo": "Psychoraph",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/03/2025"
  },
  {
    "id": "614869626941341698",
    "pseudo": "MrStone 2.0",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2025"
  },
  {
    "id": "615933551757754381",
    "pseudo": "FAFA",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/04/2026"
  },
  {
    "id": "616183030251520000",
    "pseudo": "golddorack",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/12/2025"
  },
  {
    "id": "616328087583588372",
    "pseudo": "slyzeure",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/06/2025"
  },
  {
    "id": "616733512531443769",
    "pseudo": "xFRANKLIN64x",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2024"
  },
  {
    "id": "616940377936756786",
    "pseudo": "MegaToz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/03/2025"
  },
  {
    "id": "616974545110171662",
    "pseudo": "Juste Hassan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/12/2024"
  },
  {
    "id": "617035049187016904",
    "pseudo": "Warpeur",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/04/2025"
  },
  {
    "id": "617060074191323170",
    "pseudo": "Mr Hyde",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/11/2025"
  },
  {
    "id": "617649112262770698",
    "pseudo": "heeliott",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/08/2025"
  },
  {
    "id": "618503315252052007",
    "pseudo": "faxmulder",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/05/2024"
  },
  {
    "id": "618846418437668865",
    "pseudo": "TwGFlorian",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/08/2024"
  },
  {
    "id": "619209300727824424",
    "pseudo": "zyklonys",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2026"
  },
  {
    "id": "619609057099251712",
    "pseudo": "ptitben44",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2025"
  },
  {
    "id": "619611347491225610",
    "pseudo": "reivaxgaming",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2025"
  },
  {
    "id": "619643381588557824",
    "pseudo": "Xenodicix rick",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/04/2026"
  },
  {
    "id": "619835717136285706",
    "pseudo": "Kebab_Oignon",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/01/2026"
  },
  {
    "id": "620237929003876352",
    "pseudo": "Brunnchen",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "11/12/2025"
  },
  {
    "id": "620283525320540170",
    "pseudo": "flojimmy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/03/2025"
  },
  {
    "id": "620322518216998913",
    "pseudo": "akhystocrate95",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/12/2024"
  },
  {
    "id": "621053076568145936",
    "pseudo": "Machine",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2025"
  },
  {
    "id": "622030416479649805",
    "pseudo": "auslo99__Aldo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/05/2025"
  },
  {
    "id": "622337681275224064",
    "pseudo": "1CL | OrAx_FR",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/02/2025"
  },
  {
    "id": "622500627817299969",
    "pseudo": "tokiwan🇫🇷🇵🇹",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2026"
  },
  {
    "id": "622537494822387722",
    "pseudo": "Biche_Tordu",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/03/2024"
  },
  {
    "id": "622921131812454431",
    "pseudo": "Steve",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2026"
  },
  {
    "id": "623177712554606592",
    "pseudo": "TheonPxntal0n",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/02/2025"
  },
  {
    "id": "623524940414582804",
    "pseudo": "CNX Dedrarion",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/04/2026"
  },
  {
    "id": "623525890680422420",
    "pseudo": "ElJulio68",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "12/09/2024"
  },
  {
    "id": "623599271740047389",
    "pseudo": "PercFr22",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/04/2024"
  },
  {
    "id": "623855731749158912",
    "pseudo": "MinerBlackz",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/10/2025"
  },
  {
    "id": "624345679753510932",
    "pseudo": "Gladio",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/02/2025"
  },
  {
    "id": "624545823144804362",
    "pseudo": "FE_Dyde76",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2026"
  },
  {
    "id": "624890239902679041",
    "pseudo": "Slayer",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/01/2026"
  },
  {
    "id": "625306937927532585",
    "pseudo": "Natsuko_off",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/06/2025"
  },
  {
    "id": "625348303676112897",
    "pseudo": "basiiq4k",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/08/2024"
  },
  {
    "id": "626476637160079365",
    "pseudo": "poussinslider",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "26/03/2026"
  },
  {
    "id": "626492341791883300",
    "pseudo": "skyfox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2025"
  },
  {
    "id": "626524817117413408",
    "pseudo": "Franky",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/01/2025"
  },
  {
    "id": "626552785458167815",
    "pseudo": "ArkenDxD",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/06/2024"
  },
  {
    "id": "627070573591134213",
    "pseudo": "Jamamobile",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/07/2025"
  },
  {
    "id": "628299580122988584",
    "pseudo": "Dynamic2w",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/03/2025"
  },
  {
    "id": "628646514889326622",
    "pseudo": "LAGIG27",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/05/2025"
  },
  {
    "id": "628901469520920586",
    "pseudo": "Xprience624",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/06/2025"
  },
  {
    "id": "629363761966219285",
    "pseudo": "chaokopops",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2025"
  },
  {
    "id": "629376169271361596",
    "pseudo": "Oto",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/01/2025"
  },
  {
    "id": "630060172630425655",
    "pseudo": "rigel57000",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/06/2025"
  },
  {
    "id": "630345972131561512",
    "pseudo": "Haroun Al Rayane",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/03/2025"
  },
  {
    "id": "630416466650464256",
    "pseudo": "Lechat Fred",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2025"
  },
  {
    "id": "630436671103696916",
    "pseudo": "totophe94",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2025"
  },
  {
    "id": "630439760791601183",
    "pseudo": "2nd Classe - Rubrouk",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "08/05/2024"
  },
  {
    "id": "630700234967875604",
    "pseudo": "GuanYu489",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/01/2025"
  },
  {
    "id": "631183514649362442",
    "pseudo": "KrimoGN",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2026"
  },
  {
    "id": "631499429568053259",
    "pseudo": "White Wolf",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "29/03/2025"
  },
  {
    "id": "631530322693193728",
    "pseudo": "Tsushibo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2025"
  },
  {
    "id": "632383551182077985",
    "pseudo": "Vittos_XY",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/03/2024"
  },
  {
    "id": "632641137915592724",
    "pseudo": "Hycann",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2026"
  },
  {
    "id": "632916131560030229",
    "pseudo": "Vwolf24.38",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/07/2025"
  },
  {
    "id": "633274356063010819",
    "pseudo": "France_Baguette",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/02/2026"
  },
  {
    "id": "633321462106816542",
    "pseudo": "popo_inconnue",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/12/2025"
  },
  {
    "id": "633827396403068928",
    "pseudo": "Battrob",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2025"
  },
  {
    "id": "634060092542681119",
    "pseudo": "Rapido",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/11/2024"
  },
  {
    "id": "634713439385681960",
    "pseudo": "phenix",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/09/2024"
  },
  {
    "id": "635058971777957888",
    "pseudo": "AZOD",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/03/2026"
  },
  {
    "id": "635533663358156826",
    "pseudo": "BaNaNePLanTinTin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/06/2025"
  },
  {
    "id": "635862137880969218",
    "pseudo": "Lisbo (Lisboeta94)",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/05/2024"
  },
  {
    "id": "635916367022915636",
    "pseudo": "Bluehawk276",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/10/2024"
  },
  {
    "id": "636539183762112532",
    "pseudo": "Doragonsan02",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/08/2025"
  },
  {
    "id": "636585611989614604",
    "pseudo": "Zeynox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/11/2024"
  },
  {
    "id": "636822379107975168",
    "pseudo": "Dodoma_09",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/11/2025"
  },
  {
    "id": "637357960082882561",
    "pseudo": "Dimzi07",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/09/2025"
  },
  {
    "id": "637364608562233345",
    "pseudo": "Scalp",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/11/2025"
  },
  {
    "id": "638855979827724319",
    "pseudo": "ST8",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2025"
  },
  {
    "id": "639409506492743680",
    "pseudo": "JoLaDouille",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/01/2025"
  },
  {
    "id": "639789920877150258",
    "pseudo": "melvin.ruffier",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/01/2025"
  },
  {
    "id": "640510895784722461",
    "pseudo": "SMC2B",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/09/2025"
  },
  {
    "id": "640554373633671198",
    "pseudo": "R2D2",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "06/04/2026"
  },
  {
    "id": "640963669672460288",
    "pseudo": "GlaScaP",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "641003233510162450",
    "pseudo": "Lanfeust67",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2025"
  },
  {
    "id": "641251287643586560",
    "pseudo": "Buckfast",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2025"
  },
  {
    "id": "641322274124857355",
    "pseudo": "Maximinus.exe",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2026"
  },
  {
    "id": "641353312742146048",
    "pseudo": "machjaghjolu_2bc",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/09/2025"
  },
  {
    "id": "641688646017351690",
    "pseudo": "Paradoxe",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/06/2025"
  },
  {
    "id": "642064017753505805",
    "pseudo": "tommy.judge",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2025"
  },
  {
    "id": "642382845574119425",
    "pseudo": "Şคคl--kคค",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2026"
  },
  {
    "id": "642383174818725888",
    "pseudo": "djmikegold74",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/05/2024"
  },
  {
    "id": "642709698835120148",
    "pseudo": "TANTAK",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2025"
  },
  {
    "id": "643120307841925131",
    "pseudo": "Wjunior",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2025"
  },
  {
    "id": "643156477602693182",
    "pseudo": "TeamMSxyblatiku",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2025"
  },
  {
    "id": "643218850510405639",
    "pseudo": "Sylcotek 🇨🇵",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "643351824161832971",
    "pseudo": "zeusuez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/03/2025"
  },
  {
    "id": "643427466571939851",
    "pseudo": "DaveLaPatate",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2025"
  },
  {
    "id": "643502086796869653",
    "pseudo": "LaBelleFrance",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/01/2025"
  },
  {
    "id": "643514601136193557",
    "pseudo": "xDARKxWOLFx0",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "23/03/2026"
  },
  {
    "id": "643549381987008532",
    "pseudo": "RBW_AceNatha83",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/01/2025"
  },
  {
    "id": "643649106241388554",
    "pseudo": "neav18190",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/03/2026"
  },
  {
    "id": "643936195134488595",
    "pseudo": "Marcofuegoo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "644117371170062336",
    "pseudo": "CracHot",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/01/2026"
  },
  {
    "id": "644871514243465216",
    "pseudo": "As___KaiiiSeR__",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2025"
  },
  {
    "id": "645005100233916446",
    "pseudo": "anrix",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2025"
  },
  {
    "id": "645128620087705621",
    "pseudo": "Servietsky",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2025"
  },
  {
    "id": "645243767875436544",
    "pseudo": "Spyrawww",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/11/2025"
  },
  {
    "id": "645310672229629962",
    "pseudo": "PATCHOUNI",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/03/2025"
  },
  {
    "id": "645374181789138956",
    "pseudo": "ChinsuDark",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2025"
  },
  {
    "id": "645377711719710772",
    "pseudo": "Benchow",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "27/01/2025"
  },
  {
    "id": "645381200428662784",
    "pseudo": "KaNaSuCr4.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2025"
  },
  {
    "id": "645385516019351553",
    "pseudo": "lil beuteu",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/05/2024"
  },
  {
    "id": "645440097784692746",
    "pseudo": "SS polak",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/03/2024"
  },
  {
    "id": "645537294975107073",
    "pseudo": "SlahZer",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/10/2025"
  },
  {
    "id": "645549885180870658",
    "pseudo": "Sha1nix",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/08/2024"
  },
  {
    "id": "645814337117749249",
    "pseudo": "IMQC SLAY3Rz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/11/2024"
  },
  {
    "id": "646351573794029571",
    "pseudo": "Dark night",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "26/01/2024"
  },
  {
    "id": "646420742354894858",
    "pseudo": "·.★·.·𝕍𝕖́𝕘𝕖̀𝕥𝕒·.·★.·",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2026"
  },
  {
    "id": "646514847315656715",
    "pseudo": "Pandar2391",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/12/2025"
  },
  {
    "id": "646777884618260510",
    "pseudo": "TotoLaSo6",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/11/2025"
  },
  {
    "id": "647081524080017431",
    "pseudo": "jeanbinouze",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/08/2024"
  },
  {
    "id": "647120697201524792",
    "pseudo": "Abr3zj",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/12/2024"
  },
  {
    "id": "648424919067262986",
    "pseudo": "Lheny Polovski",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2025"
  },
  {
    "id": "648721222296666117",
    "pseudo": "KarKace418",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/09/2025"
  },
  {
    "id": "648758375215136790",
    "pseudo": "Q-Antonymous",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/05/2025"
  },
  {
    "id": "649004687277948969",
    "pseudo": "bene28nlr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/04/2024"
  },
  {
    "id": "649238540139495424",
    "pseudo": "cetttte chosse",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/12/2024"
  },
  {
    "id": "649496303859924992",
    "pseudo": "eddamand",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/12/2024"
  },
  {
    "id": "650103516030959659",
    "pseudo": "Assassing1442",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/07/2025"
  },
  {
    "id": "650396037269291010",
    "pseudo": "Billlawing",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2024"
  },
  {
    "id": "650409917613735956",
    "pseudo": "| H_Alex",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/02/2026"
  },
  {
    "id": "650791033663258625",
    "pseudo": "Blublup",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/06/2025"
  },
  {
    "id": "652225215908151296",
    "pseudo": "Aziz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/04/2026"
  },
  {
    "id": "652506988340707339",
    "pseudo": "TeaM PinK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/08/2024"
  },
  {
    "id": "652922943571099669",
    "pseudo": "'𝙅𝙞𝙧𝙤",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/02/2024"
  },
  {
    "id": "653172912437723156",
    "pseudo": "boy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2025"
  },
  {
    "id": "653228756437172226",
    "pseudo": "VirusCODE187",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/12/2024"
  },
  {
    "id": "653299229955194885",
    "pseudo": "Titi42210",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "01/03/2024"
  },
  {
    "id": "653650929660461096",
    "pseudo": "bibinox.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/12/2024"
  },
  {
    "id": "653673856422248492",
    "pseudo": "SPAW8",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2025"
  },
  {
    "id": "653686520603213825",
    "pseudo": "PrYSlayrr",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "05/04/2026"
  },
  {
    "id": "653812897453178893",
    "pseudo": "Piotr Andreevich",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/01/2026"
  },
  {
    "id": "655477333368635403",
    "pseudo": "2nd Cl. Le ScReDii",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "12/04/2024"
  },
  {
    "id": "655539757077758001",
    "pseudo": "JuicyRusk",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/09/2025"
  },
  {
    "id": "655738227126435861",
    "pseudo": "ASC_Alexis58",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/08/2025"
  },
  {
    "id": "656790452250476554",
    "pseudo": "Sitch All StarS",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2025"
  },
  {
    "id": "656899934574084097",
    "pseudo": "Butters",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/04/2025"
  },
  {
    "id": "657324559128854548",
    "pseudo": "saucisses",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/08/2024"
  },
  {
    "id": "657589756829630480",
    "pseudo": "Kyler",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/07/2024"
  },
  {
    "id": "658278842510868482",
    "pseudo": "Maz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/01/2025"
  },
  {
    "id": "658710593951498240",
    "pseudo": "<Siou>",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/01/2026"
  },
  {
    "id": "658736853209579540",
    "pseudo": "FlacoBansky",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/04/2026"
  },
  {
    "id": "658793725203578890",
    "pseudo": "NoXia DestroY",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/04/2024"
  },
  {
    "id": "658991024387129344",
    "pseudo": "Le Bozz.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/09/2025"
  },
  {
    "id": "658996766032789526",
    "pseudo": "Tueur Affame - Noa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/01/2025"
  },
  {
    "id": "659372005984043018",
    "pseudo": "LeMax19",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "09/01/2025"
  },
  {
    "id": "659378565959385088",
    "pseudo": "Nym",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "28/06/2025"
  },
  {
    "id": "659393431969202197",
    "pseudo": "Warrior123ark",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/06/2025"
  },
  {
    "id": "659462896425893898",
    "pseudo": "Evan_Sky",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2024"
  },
  {
    "id": "659563677984227329",
    "pseudo": "𝕮𝖍𝖆𝖗𝖇𝖔𝖓𝖓𝖊𝖚𝖗",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/12/2023"
  },
  {
    "id": "659765836311166980",
    "pseudo": "SILAS VANE",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2026"
  },
  {
    "id": "660035693090832391",
    "pseudo": "Dino",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "02/07/2025"
  },
  {
    "id": "660507366952796180",
    "pseudo": "maxkiller1276",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "24/02/2025"
  },
  {
    "id": "660577247811600394",
    "pseudo": "Lacriz_o_mik",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/01/2026"
  },
  {
    "id": "660781586299617281",
    "pseudo": "Lp",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/01/2026"
  },
  {
    "id": "661217569373421598",
    "pseudo": "69km/h Ҿ | Shiro",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2026"
  },
  {
    "id": "662976077509165108",
    "pseudo": "GaeHarryKLM59",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/05/2024"
  },
  {
    "id": "662984533796323350",
    "pseudo": "Comete",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/04/2026"
  },
  {
    "id": "663706392900796431",
    "pseudo": "TADHAR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/03/2025"
  },
  {
    "id": "663784975149170693",
    "pseudo": "MKDS",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "663837174210232350",
    "pseudo": "ZeroFix",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/05/2024"
  },
  {
    "id": "664205291142905896",
    "pseudo": "joker pennyt974",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/03/2025"
  },
  {
    "id": "664521017351208961",
    "pseudo": "JrayzMan5",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/08/2025"
  },
  {
    "id": "664530233835388978",
    "pseudo": "Minsibiess2",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "664614588867936286",
    "pseudo": "zedzedaumic",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/07/2025"
  },
  {
    "id": "664826043739275266",
    "pseudo": "Briggs",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/01/2025"
  },
  {
    "id": "665430400092340224",
    "pseudo": "Mikhailov x",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/04/2025"
  },
  {
    "id": "665441340603236352",
    "pseudo": "Porter",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/04/2025"
  },
  {
    "id": "665461368706564106",
    "pseudo": "Smile Punk24",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "665678635205787676",
    "pseudo": "Gauthier Carter",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/02/2026"
  },
  {
    "id": "665742187182424065",
    "pseudo": "Canardigno",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/01/2025"
  },
  {
    "id": "665930324760592417",
    "pseudo": "Jackclenom",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/04/2026"
  },
  {
    "id": "665987340522749973",
    "pseudo": "GGoku_974",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/09/2025"
  },
  {
    "id": "666354172026945556",
    "pseudo": "damsou_6zz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2025"
  },
  {
    "id": "666665932902367275",
    "pseudo": "Gauthier",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/06/2025"
  },
  {
    "id": "666675198740791347",
    "pseudo": "LeLoupGris",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/01/2025"
  },
  {
    "id": "666713351648444446",
    "pseudo": "rylka0632",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/09/2025"
  },
  {
    "id": "667361372715089921",
    "pseudo": "ryo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/10/2024"
  },
  {
    "id": "667364783313518595",
    "pseudo": "=| D3LTA |=",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2025"
  },
  {
    "id": "668406068560396298",
    "pseudo": "Larsouille09",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/03/2025"
  },
  {
    "id": "668460742961528883",
    "pseudo": "1.CL | Punisher38 (ABS)",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/05/2024"
  },
  {
    "id": "669575229504356353",
    "pseudo": "Elton",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/12/2025"
  },
  {
    "id": "669580221145677863",
    "pseudo": "Avion05",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2026"
  },
  {
    "id": "669854200016011264",
    "pseudo": "ldvl🇧🇪",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/02/2026"
  },
  {
    "id": "669994224321822721",
    "pseudo": "ricot lab",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "23/01/2025"
  },
  {
    "id": "670017859379920909",
    "pseudo": "mun",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/11/2025"
  },
  {
    "id": "670275691140349993",
    "pseudo": "Maestro_FR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2026"
  },
  {
    "id": "670300004950343690",
    "pseudo": "tAUME cRUISE",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/04/2025"
  },
  {
    "id": "670318436106108959",
    "pseudo": "FlawLess Naos",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2025"
  },
  {
    "id": "671132372724351022",
    "pseudo": "Deltas313145",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/03/2025"
  },
  {
    "id": "671404956007399425",
    "pseudo": "DéDéLeDétraqué",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/07/2025"
  },
  {
    "id": "672451960045043717",
    "pseudo": "El-bouletto",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/01/2025"
  },
  {
    "id": "672464964455497728",
    "pseudo": "jeankeke.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/08/2024"
  },
  {
    "id": "672499713877999626",
    "pseudo": "Da Silva Martins",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/05/2024"
  },
  {
    "id": "672563891456180266",
    "pseudo": "BlingAutumn",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/02/2025"
  },
  {
    "id": "673198351860236311",
    "pseudo": "La chips enragée",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "19/01/2025"
  },
  {
    "id": "673693909138014218",
    "pseudo": "Bigjay45",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "01/07/2024"
  },
  {
    "id": "674742743993417763",
    "pseudo": "M K Z 🥷🏼",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/02/2025"
  },
  {
    "id": "674971490826846229",
    "pseudo": "MaRixX",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/03/2025"
  },
  {
    "id": "675356707949379614",
    "pseudo": "neiz_51",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/06/2025"
  },
  {
    "id": "675531007016828928",
    "pseudo": "Antho9762",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "09/08/2024"
  },
  {
    "id": "675566108517990401",
    "pseudo": "REAGAN Daniel",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/03/2025"
  },
  {
    "id": "676037748401897508",
    "pseudo": "timal",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2025"
  },
  {
    "id": "676094973002776589",
    "pseudo": "V.Wolf",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/10/2024"
  },
  {
    "id": "676577077373304851",
    "pseudo": "ELParrain",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2026"
  },
  {
    "id": "676862962052628530",
    "pseudo": "PopoCasiGros",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2024"
  },
  {
    "id": "676877022735106068",
    "pseudo": "Benjam",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2025"
  },
  {
    "id": "676891069341761547",
    "pseudo": "[M.A.R.S] julius",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/01/2026"
  },
  {
    "id": "677096540883386378",
    "pseudo": "Gont",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/09/2024"
  },
  {
    "id": "677225975234166810",
    "pseudo": "2nd Classe Shrazak",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "28/01/2024"
  },
  {
    "id": "677480945539874817",
    "pseudo": "estebanZiia",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "13/11/2024"
  },
  {
    "id": "677608718191427604",
    "pseudo": "ricorodmerguez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/02/2026"
  },
  {
    "id": "677663204960239666",
    "pseudo": "Oguri Cap2703",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/05/2025"
  },
  {
    "id": "678217226616045568",
    "pseudo": "Hepip44",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/01/2025"
  },
  {
    "id": "678545531009630240",
    "pseudo": "[1CL] | IceCube",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/07/2024"
  },
  {
    "id": "678635745199652881",
    "pseudo": "GEOF42000",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/08/2024"
  },
  {
    "id": "679019351814438932",
    "pseudo": "TOM",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/05/2025"
  },
  {
    "id": "679291083858903061",
    "pseudo": "Thomas",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2025"
  },
  {
    "id": "679294979344039966",
    "pseudo": "Vipeurito",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/07/2025"
  },
  {
    "id": "679384262931120161",
    "pseudo": "[EGC]MvnsoRy",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "05/04/2024"
  },
  {
    "id": "679743997597450269",
    "pseudo": "SHAWI",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/01/2025"
  },
  {
    "id": "680194014334812167",
    "pseudo": "Fusiller56",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/04/2026"
  },
  {
    "id": "680480508865675386",
    "pseudo": "Antho",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/02/2025"
  },
  {
    "id": "680482398336450568",
    "pseudo": "Purif",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2025"
  },
  {
    "id": "680947269193039887",
    "pseudo": "XM2",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/02/2024"
  },
  {
    "id": "680958041545244730",
    "pseudo": "dyjojo72",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "24/06/2024"
  },
  {
    "id": "681628232025767947",
    "pseudo": "BonisseurDeLaBath",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "02/12/2024"
  },
  {
    "id": "682186765125419017",
    "pseudo": "Raph-274",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/05/2024"
  },
  {
    "id": "682206398389682217",
    "pseudo": "Kaizer",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/10/2025"
  },
  {
    "id": "684580657678123088",
    "pseudo": "L1nfernal",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/09/2025"
  },
  {
    "id": "684873497885016132",
    "pseudo": "RATUS",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/06/2025"
  },
  {
    "id": "685269238314827805",
    "pseudo": "Douglas_Wilson",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2025"
  },
  {
    "id": "685270818384510980",
    "pseudo": "karmarumeur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/07/2024"
  },
  {
    "id": "685270949460967429",
    "pseudo": "Doggy",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "03/07/2024"
  },
  {
    "id": "685471073138901023",
    "pseudo": "nightmare9393",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2025"
  },
  {
    "id": "685512910797013006",
    "pseudo": "Steviinhio",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/01/2025"
  },
  {
    "id": "685965290097737779",
    "pseudo": "TsukioDream",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/03/2025"
  },
  {
    "id": "686173898319986714",
    "pseudo": "CHINOIS SOURNOI",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "09/01/2024"
  },
  {
    "id": "686258114856484875",
    "pseudo": "Dallas",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/12/2024"
  },
  {
    "id": "686354991388164101",
    "pseudo": "Japnese monkey sit",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/07/2024"
  },
  {
    "id": "686601856142802968",
    "pseudo": "KaloMachine 🇧🇪",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/04/2025"
  },
  {
    "id": "686981366465822735",
    "pseudo": "Soundwedge",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "01/01/2024"
  },
  {
    "id": "687298039777329193",
    "pseudo": "[FOF]1er.Cls.Volcano",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/07/2024"
  },
  {
    "id": "687760593725161493",
    "pseudo": "AUREO358",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/08/2025"
  },
  {
    "id": "687935890739298377",
    "pseudo": "guitouf0209",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/08/2024"
  },
  {
    "id": "688048331473158257",
    "pseudo": "Thomas Smith",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/04/2024"
  },
  {
    "id": "688062775897227269",
    "pseudo": "USUDO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2024"
  },
  {
    "id": "688689141365735434",
    "pseudo": "LAW-RpK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/07/2025"
  },
  {
    "id": "688846195170213942",
    "pseudo": "yns_gfn",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/03/2026"
  },
  {
    "id": "689011650644410368",
    "pseudo": "ZRO",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/04/2025"
  },
  {
    "id": "689168570735001645",
    "pseudo": "Aurelien",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/02/2025"
  },
  {
    "id": "689206651441643528",
    "pseudo": "Jules17",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/12/2024"
  },
  {
    "id": "689467591391314026",
    "pseudo": "Captn_Strawhat",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "25/05/2025"
  },
  {
    "id": "689475604168310874",
    "pseudo": "Tx3Nexus",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/02/2025"
  },
  {
    "id": "689491455558942753",
    "pseudo": "Power_Kill44600",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/07/2025"
  },
  {
    "id": "689540594627772530",
    "pseudo": "ColonelReyel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/01/2025"
  },
  {
    "id": "689592471688183950",
    "pseudo": "Micka",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "689773217879162947",
    "pseudo": "Darkspartan9337",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/06/2025"
  },
  {
    "id": "689776436156039217",
    "pseudo": "Martinez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/02/2026"
  },
  {
    "id": "689778545735630859",
    "pseudo": "Roland Kulé",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/05/2024"
  },
  {
    "id": "689800125027319838",
    "pseudo": "srondreck",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/08/2025"
  },
  {
    "id": "689895082501079223",
    "pseudo": "teo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/07/2024"
  },
  {
    "id": "689924075250122973",
    "pseudo": "flemmedeouf",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/07/2024"
  },
  {
    "id": "689941298953977915",
    "pseudo": "Jact_Took",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2025"
  },
  {
    "id": "690006330282737685",
    "pseudo": "SOD X SIERRA",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/01/2025"
  },
  {
    "id": "690147759822864411",
    "pseudo": "GrantsXV",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/09/2024"
  },
  {
    "id": "690161292031426584",
    "pseudo": "Frozone_913",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "26/09/2025"
  },
  {
    "id": "690174322433982496",
    "pseudo": "Floriture",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/05/2025"
  },
  {
    "id": "690205188476502353",
    "pseudo": "LoXy0sF",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/09/2025"
  },
  {
    "id": "690223133709697026",
    "pseudo": "KidPaddle",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/05/2025"
  },
  {
    "id": "690244279066558478",
    "pseudo": "CpaMwa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/02/2024"
  },
  {
    "id": "690282209185103884",
    "pseudo": "TonyThony",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2026"
  },
  {
    "id": "690664007182450698",
    "pseudo": "< UNYX />",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2026"
  },
  {
    "id": "690840723494535199",
    "pseudo": "Samovian",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2025"
  },
  {
    "id": "690866262124789801",
    "pseudo": "Lucas Vince",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/02/2024"
  },
  {
    "id": "690978629420711996",
    "pseudo": "Tipapps",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "15/08/2024"
  },
  {
    "id": "690987124660633663",
    "pseudo": "No Pitie71",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/05/2024"
  },
  {
    "id": "691015240757805106",
    "pseudo": "peuky",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2026"
  },
  {
    "id": "691251702686416907",
    "pseudo": "𝔐𝔞𝔧𝔬𝔯_𝔍ä𝔤𝔢𝔯9",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2025"
  },
  {
    "id": "691264380599271425",
    "pseudo": "Tinky Winky",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "25/05/2024"
  },
  {
    "id": "691270764640469062",
    "pseudo": "kiba13",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/12/2024"
  },
  {
    "id": "691279289236193372",
    "pseudo": "jey4000",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2025"
  },
  {
    "id": "691291932667674634",
    "pseudo": "lockdown",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/08/2025"
  },
  {
    "id": "691327340831047751",
    "pseudo": "lebelgobelge",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2025"
  },
  {
    "id": "691388114761154662",
    "pseudo": "Hamidesh667",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2025"
  },
  {
    "id": "691559787804098610",
    "pseudo": "vince21",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/01/2026"
  },
  {
    "id": "691569213935976479",
    "pseudo": "jooe66",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/02/2025"
  },
  {
    "id": "691582437670780959",
    "pseudo": "LuXoR_RPZ",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/12/2024"
  },
  {
    "id": "691582565361909860",
    "pseudo": "Iron",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/08/2025"
  },
  {
    "id": "691706371627941998",
    "pseudo": "BOBBY",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/01/2025"
  },
  {
    "id": "691764604661006386",
    "pseudo": "Dax",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/02/2025"
  },
  {
    "id": "691923546129039423",
    "pseudo": "Saachi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/03/2025"
  },
  {
    "id": "691954815672254496",
    "pseudo": "Aketa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/03/2025"
  },
  {
    "id": "691962661071749152",
    "pseudo": "Ghostper_Allced",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/12/2024"
  },
  {
    "id": "691995342018838610",
    "pseudo": "Beddiouf",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/01/2025"
  },
  {
    "id": "692015838076862484",
    "pseudo": "nainpardonnable",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/12/2024"
  },
  {
    "id": "692298648201068556",
    "pseudo": "machettehaittienne",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/01/2025"
  },
  {
    "id": "692357066253140059",
    "pseudo": "McTim12_FR",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/05/2025"
  },
  {
    "id": "692365825880883311",
    "pseudo": "ֆѦሃᘻōƝ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/09/2024"
  },
  {
    "id": "692369627057094728",
    "pseudo": "Pierro_le_fou56",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/09/2025"
  },
  {
    "id": "692370245498699836",
    "pseudo": "𝕵𝖎𝖒'",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/11/2025"
  },
  {
    "id": "692422396564733993",
    "pseudo": "GreyFOX",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "29/06/2024"
  },
  {
    "id": "692435144258093066",
    "pseudo": "tozixx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2025"
  },
  {
    "id": "692493271267541038",
    "pseudo": "1CL D-LAMALA",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/07/2025"
  },
  {
    "id": "692548136769683497",
    "pseudo": "ce.vieux.casey.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2025"
  },
  {
    "id": "692733075813040219",
    "pseudo": "dafzer-7",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/03/2025"
  },
  {
    "id": "692785691851096074",
    "pseudo": "Angel-Renato Garcia",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/05/2025"
  },
  {
    "id": "692825615027404851",
    "pseudo": "Manny",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/04/2026"
  },
  {
    "id": "693052779639603311",
    "pseudo": "Benjito",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/08/2025"
  },
  {
    "id": "693094170285572197",
    "pseudo": "Milanoo931",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/06/2025"
  },
  {
    "id": "693145724598091806",
    "pseudo": "Paul Willcox ' OFrPDaddy '",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/09/2024"
  },
  {
    "id": "693206512566534234",
    "pseudo": "Opal Shark",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/04/2024"
  },
  {
    "id": "693249200233644142",
    "pseudo": "sWhiite",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/05/2024"
  },
  {
    "id": "693269573700419614",
    "pseudo": "SOLDAT MORITO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2025"
  },
  {
    "id": "693510394849001652",
    "pseudo": "django",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/02/2026"
  },
  {
    "id": "693564554071900181",
    "pseudo": "Enzolepage243",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/01/2025"
  },
  {
    "id": "693692493673398373",
    "pseudo": "Val911",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/08/2025"
  },
  {
    "id": "693802624507576340",
    "pseudo": "om3ga95",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2025"
  },
  {
    "id": "693813550426357821",
    "pseudo": "WarAlex",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/10/2024"
  },
  {
    "id": "693827942693732403",
    "pseudo": "thefrenchone",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/07/2025"
  },
  {
    "id": "693837002327588914",
    "pseudo": "Frank_laf_073",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/03/2026"
  },
  {
    "id": "693913101690470501",
    "pseudo": "GENERAL XANTAM",
    "role": "Soldat",
    "grade": "Adjudant Chef",
    "joinDate": "22/05/2024"
  },
  {
    "id": "693933817387417631",
    "pseudo": "BOCCHI au COS",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "28/10/2024"
  },
  {
    "id": "694082026994925609",
    "pseudo": "berserk62",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2024"
  },
  {
    "id": "694117881667125312",
    "pseudo": "John Doe",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/05/2025"
  },
  {
    "id": "694122072493916201",
    "pseudo": "SOD X YANKEE",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2024"
  },
  {
    "id": "694146778580385862",
    "pseudo": "thom7130",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2025"
  },
  {
    "id": "694304836891574382",
    "pseudo": "ByKraak",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/02/2025"
  },
  {
    "id": "694461657446875227",
    "pseudo": "therealalpha31",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "18/05/2024"
  },
  {
    "id": "694489306366083123",
    "pseudo": "greg23",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/02/2026"
  },
  {
    "id": "694501449396256798",
    "pseudo": "Zeroskd",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/02/2025"
  },
  {
    "id": "694578447108014201",
    "pseudo": "Dumdumonte",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "18/05/2024"
  },
  {
    "id": "694681695894372373",
    "pseudo": "blackecho_111",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/12/2024"
  },
  {
    "id": "694956808682471514",
    "pseudo": "lenoir_26",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2025"
  },
  {
    "id": "695036103841021962",
    "pseudo": "Zunix#1400",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "06/02/2025"
  },
  {
    "id": "695036727189831762",
    "pseudo": "burnslow21",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "07/04/2026"
  },
  {
    "id": "695047584271564862",
    "pseudo": "grchaap",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2025"
  },
  {
    "id": "695296174109753375",
    "pseudo": "Undercover_304",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2025"
  },
  {
    "id": "695316872564047973",
    "pseudo": "LaLongueurEnzo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2026"
  },
  {
    "id": "695319685687672857",
    "pseudo": "[FR] BriocheFactory",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "05/03/2026"
  },
  {
    "id": "695321590908453027",
    "pseudo": "Maxou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/07/2024"
  },
  {
    "id": "695340002296594535",
    "pseudo": "Le couzz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/10/2025"
  },
  {
    "id": "695350191842394182",
    "pseudo": "ReDisDeaD",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/08/2025"
  },
  {
    "id": "695442876372353124",
    "pseudo": "John D. Russel | furry56",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/03/2025"
  },
  {
    "id": "695459322896973904",
    "pseudo": "vince",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/04/2024"
  },
  {
    "id": "695618430774149250",
    "pseudo": "zardrod",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2025"
  },
  {
    "id": "695671556512415794",
    "pseudo": "ThOmThOm",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/01/2025"
  },
  {
    "id": "696008326160318514",
    "pseudo": "v1per",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/01/2026"
  },
  {
    "id": "696060748308152410",
    "pseudo": "solix_1",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/09/2025"
  },
  {
    "id": "696061299213336696",
    "pseudo": "Nv_Misto",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2025"
  },
  {
    "id": "696287690168991744",
    "pseudo": "Ruru",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2026"
  },
  {
    "id": "696332886634266635",
    "pseudo": "max_cat",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/03/2025"
  },
  {
    "id": "696347162786922588",
    "pseudo": "echofox24",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/02/2024"
  },
  {
    "id": "696369821193076746",
    "pseudo": "simshu67",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2026"
  },
  {
    "id": "696391733403189360",
    "pseudo": "SmolderedMetal6",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/04/2025"
  },
  {
    "id": "696434993148198932",
    "pseudo": "Nico64",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/08/2024"
  },
  {
    "id": "696641728190480406",
    "pseudo": "Arfalkan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/11/2025"
  },
  {
    "id": "696657352576991312",
    "pseudo": "benji.ksr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/03/2024"
  },
  {
    "id": "696753807157362718",
    "pseudo": "「𝗕𝗥𝗔𝗩𝗢 𝟭」",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2026"
  },
  {
    "id": "696765939118506126",
    "pseudo": "barbian",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/03/2024"
  },
  {
    "id": "697007540386660393",
    "pseudo": "Kukaland",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "18/06/2025"
  },
  {
    "id": "697115757812908153",
    "pseudo": "Benbig66",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/03/2024"
  },
  {
    "id": "697363930476970054",
    "pseudo": "Léopold",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/04/2026"
  },
  {
    "id": "697448821067743343",
    "pseudo": "pomate",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/05/2024"
  },
  {
    "id": "697474289980407838",
    "pseudo": "Smaug7598",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/06/2025"
  },
  {
    "id": "697683346590924800",
    "pseudo": "LeDob",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/03/2026"
  },
  {
    "id": "697714844824240148",
    "pseudo": "sl-beat",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2025"
  },
  {
    "id": "697792216252547133",
    "pseudo": "matteo2727.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/05/2024"
  },
  {
    "id": "697794310988496966",
    "pseudo": "Tango_Delta_86",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "07/05/2025"
  },
  {
    "id": "697840666100629626",
    "pseudo": "[SDG] Remjean74",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2025"
  },
  {
    "id": "697906978030354453",
    "pseudo": "CreativGuy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/07/2025"
  },
  {
    "id": "698067593486925834",
    "pseudo": "GHOST",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/03/2026"
  },
  {
    "id": "698070626812035122",
    "pseudo": "Frax",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/04/2026"
  },
  {
    "id": "698138564768039002",
    "pseudo": "BEAU",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/03/2025"
  },
  {
    "id": "698234436730486784",
    "pseudo": "B2N",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2024"
  },
  {
    "id": "698301898129801327",
    "pseudo": "𝔸𝕂𝟜𝟟§𝖚𝖗𝖙𝖈𝖍𝖎𝖐𝖎𝖙𝖆",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/02/2026"
  },
  {
    "id": "698588124812541963",
    "pseudo": "jojo83500",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/01/2026"
  },
  {
    "id": "698588903879213179",
    "pseudo": "S. Petrove / vaznez_44",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/04/2026"
  },
  {
    "id": "698880701302571174",
    "pseudo": "adamferusse36",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/09/2025"
  },
  {
    "id": "698880827525824532",
    "pseudo": "zachajack1",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/03/2025"
  },
  {
    "id": "699189949265608734",
    "pseudo": "bebel01__",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "14/02/2024"
  },
  {
    "id": "699571327933087824",
    "pseudo": "Dom tino",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/01/2025"
  },
  {
    "id": "699594579992641556",
    "pseudo": "ThiBoowW",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/01/2026"
  },
  {
    "id": "699678730548936816",
    "pseudo": "laszlo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/12/2024"
  },
  {
    "id": "700016211999588422",
    "pseudo": "kev",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "700068239652290692",
    "pseudo": "bryan045",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/09/2025"
  },
  {
    "id": "700778703201763401",
    "pseudo": "[CTR] Gandoolf",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/01/2025"
  },
  {
    "id": "700851456256901241",
    "pseudo": "Oasis( Flo10River)",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/06/2025"
  },
  {
    "id": "701006967967187044",
    "pseudo": "Fenlord11",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/03/2025"
  },
  {
    "id": "701056830469832715",
    "pseudo": "Kaotik",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/05/2025"
  },
  {
    "id": "701096150123413634",
    "pseudo": "BLACK_REXO971",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/06/2025"
  },
  {
    "id": "701125992780922881",
    "pseudo": "ExTRAxCHARLY",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "24/11/2024"
  },
  {
    "id": "701157066697343007",
    "pseudo": "Carlito",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2025"
  },
  {
    "id": "701158525740777595",
    "pseudo": "Space",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2026"
  },
  {
    "id": "701393327257419777",
    "pseudo": "LeXi",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "18/04/2024"
  },
  {
    "id": "701440447020531793",
    "pseudo": "catse",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/12/2025"
  },
  {
    "id": "701474457969229844",
    "pseudo": "théo.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/07/2025"
  },
  {
    "id": "701905736090910881",
    "pseudo": "ShelbySim2904",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/12/2024"
  },
  {
    "id": "701919731912802325",
    "pseudo": "20syl",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/02/2025"
  },
  {
    "id": "702568878210940960",
    "pseudo": "Ousmane",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/03/2025"
  },
  {
    "id": "702877906203967520",
    "pseudo": "Emmsanchez26",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/03/2026"
  },
  {
    "id": "702952016212787311",
    "pseudo": "Nsbqlf",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "12/01/2025"
  },
  {
    "id": "703217730328723497",
    "pseudo": "jok3r",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2025"
  },
  {
    "id": "703251830989127741",
    "pseudo": "MJR Speedium [MODO]",
    "role": "Soldat",
    "grade": "Major",
    "joinDate": "11/02/2024"
  },
  {
    "id": "703271820865830951",
    "pseudo": "Bene_06150",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/08/2025"
  },
  {
    "id": "703388413306470481",
    "pseudo": "julioskaya",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/10/2024"
  },
  {
    "id": "703558747611463731",
    "pseudo": "Kirusa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2025"
  },
  {
    "id": "703576667549073428",
    "pseudo": "Steph37",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/12/2025"
  },
  {
    "id": "703687791758016602",
    "pseudo": "Syl21",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/12/2025"
  },
  {
    "id": "703730678222684181",
    "pseudo": "maat",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2025"
  },
  {
    "id": "703733061656772623",
    "pseudo": "LaMarieJane",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2025"
  },
  {
    "id": "703934673709039696",
    "pseudo": "OrBiX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2026"
  },
  {
    "id": "703951712205012994",
    "pseudo": "lucas bedros",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2025"
  },
  {
    "id": "704346414498447410",
    "pseudo": "Solidavix",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/04/2026"
  },
  {
    "id": "704461416186380390",
    "pseudo": "Mr.Guitare",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/06/2025"
  },
  {
    "id": "705063947530665994",
    "pseudo": "SCORPION",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/08/2024"
  },
  {
    "id": "705227548069462028",
    "pseudo": "UGAU",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/05/2024"
  },
  {
    "id": "705367170862809089",
    "pseudo": "RAF-44",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/10/2025"
  },
  {
    "id": "705459801202884709",
    "pseudo": "Ririrallye01",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/01/2025"
  },
  {
    "id": "705729976615567420",
    "pseudo": "Mopiti",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2025"
  },
  {
    "id": "705870095427305594",
    "pseudo": "paolomnr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/03/2025"
  },
  {
    "id": "706475054472364085",
    "pseudo": "Izard77",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/11/2024"
  },
  {
    "id": "706486956158091296",
    "pseudo": "Waterdings",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/01/2025"
  },
  {
    "id": "706552153870827581",
    "pseudo": "POLARO!D",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/04/2026"
  },
  {
    "id": "706784719928557571",
    "pseudo": "[1CL]Kr1skrxw",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/01/2024"
  },
  {
    "id": "707002403802710047",
    "pseudo": "MiL-MiL_93",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/01/2025"
  },
  {
    "id": "707020966743769089",
    "pseudo": "xvbarbare",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/08/2025"
  },
  {
    "id": "707229834245439508",
    "pseudo": "BeRReTa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/03/2025"
  },
  {
    "id": "707249643016290386",
    "pseudo": "SAdamas",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/03/2024"
  },
  {
    "id": "707258067791773768",
    "pseudo": "Gridd",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/02/2025"
  },
  {
    "id": "707548543300272138",
    "pseudo": "Tvexie",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2025"
  },
  {
    "id": "707621057707769918",
    "pseudo": "mimick71",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/05/2025"
  },
  {
    "id": "707989148950331473",
    "pseudo": "FaitBeleck",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/07/2025"
  },
  {
    "id": "707989214746116146",
    "pseudo": "tomprader",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/07/2024"
  },
  {
    "id": "708017068846350567",
    "pseudo": "CPL Pasteque FR",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "15/11/2024"
  },
  {
    "id": "708066732711084043",
    "pseudo": "Paco",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/04/2026"
  },
  {
    "id": "708177022551326770",
    "pseudo": "Jason Blackburn",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2025"
  },
  {
    "id": "708210445378650163",
    "pseudo": "AbraxX66",
    "role": "Soldat",
    "grade": "Sergent",
    "joinDate": "11/06/2024"
  },
  {
    "id": "708303249224237146",
    "pseudo": "Pierre-al_Norris",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "15/09/2025"
  },
  {
    "id": "708347454684135515",
    "pseudo": "Jack One x3",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2026"
  },
  {
    "id": "708791073228456048",
    "pseudo": "Megabel-Morning-Star",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/12/2024"
  },
  {
    "id": "709025107737313330",
    "pseudo": "Rémi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/02/2025"
  },
  {
    "id": "709058992298786886",
    "pseudo": "LowLow",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/02/2025"
  },
  {
    "id": "709797172337573918",
    "pseudo": "𝑴𝒂𝒕𝒉𝟗𝟎𝟔𝟒",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/10/2024"
  },
  {
    "id": "710126699550867467",
    "pseudo": "LeCruel",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/05/2024"
  },
  {
    "id": "710600159993659473",
    "pseudo": "M6769",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/11/2024"
  },
  {
    "id": "710627021365051506",
    "pseudo": "funkybutcher_fr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/05/2024"
  },
  {
    "id": "710772987040759829",
    "pseudo": "LOSTTMORT",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/08/2025"
  },
  {
    "id": "710989866447405207",
    "pseudo": "draaronks",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/12/2024"
  },
  {
    "id": "710996682233348116",
    "pseudo": "RazmO",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2025"
  },
  {
    "id": "711201510763266137",
    "pseudo": "Pablo Picaso",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/08/2025"
  },
  {
    "id": "711597561210732596",
    "pseudo": "Valgoatino",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/01/2026"
  },
  {
    "id": "711658906908360786",
    "pseudo": "BossCedric",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "11/08/2024"
  },
  {
    "id": "711904152451678269",
    "pseudo": "pirate",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/03/2024"
  },
  {
    "id": "711963284961755197",
    "pseudo": "Achkar",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/05/2024"
  },
  {
    "id": "711972385200275557",
    "pseudo": "Flavien",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/11/2024"
  },
  {
    "id": "712263456551600188",
    "pseudo": "yezrod",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2025"
  },
  {
    "id": "712312339139133601",
    "pseudo": "iron mom",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/12/2025"
  },
  {
    "id": "712578227192856616",
    "pseudo": "HitAngry",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2026"
  },
  {
    "id": "712709056241991821",
    "pseudo": "StaulkerMXFx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/01/2024"
  },
  {
    "id": "712738251449958431",
    "pseudo": "Justin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/06/2024"
  },
  {
    "id": "712757735082426452",
    "pseudo": "Sexychicken (Mick)",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/07/2025"
  },
  {
    "id": "713414202332545094",
    "pseudo": "Tango",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/10/2025"
  },
  {
    "id": "713524872458010644",
    "pseudo": "Armabass",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/05/2024"
  },
  {
    "id": "713672541927112714",
    "pseudo": "JRdeh",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "713845789054599292",
    "pseudo": "Head-dead",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/05/2025"
  },
  {
    "id": "714089225343074304",
    "pseudo": "Alekse",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2026"
  },
  {
    "id": "714235296186630215",
    "pseudo": "Aymeric62#9728",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "10/11/2024"
  },
  {
    "id": "714271376999186445",
    "pseudo": "Qmange",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/07/2024"
  },
  {
    "id": "714598310618464367",
    "pseudo": "Mono_sniff99",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2026"
  },
  {
    "id": "715097147657289738",
    "pseudo": "Thomasglt7582",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/01/2025"
  },
  {
    "id": "715219229267197963",
    "pseudo": "Iceman78",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/01/2025"
  },
  {
    "id": "715496660372815922",
    "pseudo": "Motoblotto",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/04/2026"
  },
  {
    "id": "715603580979249312",
    "pseudo": "[BFSA]Alex59",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "03/04/2025"
  },
  {
    "id": "715702499700375683",
    "pseudo": "Miss 5fruiélegum",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/09/2025"
  },
  {
    "id": "716327791150235688",
    "pseudo": "Koffi",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "21/03/2025"
  },
  {
    "id": "716391366673825874",
    "pseudo": "Nychaos40K",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2026"
  },
  {
    "id": "718148027558395916",
    "pseudo": "[PDSI] Madara",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2026"
  },
  {
    "id": "718480782166982757",
    "pseudo": "Meltem",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/09/2024"
  },
  {
    "id": "718737870361198593",
    "pseudo": "A3OB ꑭ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/07/2025"
  },
  {
    "id": "719558557510664272",
    "pseudo": "Hughostrider🇧🇪",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "14/08/2025"
  },
  {
    "id": "719560408377065553",
    "pseudo": "Pancho-13-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/01/2025"
  },
  {
    "id": "720304047587852299",
    "pseudo": ".sneezy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/06/2025"
  },
  {
    "id": "720531877307482143",
    "pseudo": "ApeShi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/02/2025"
  },
  {
    "id": "720791167213502544",
    "pseudo": "Galax",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/12/2024"
  },
  {
    "id": "721071490111373355",
    "pseudo": "Troler du 90",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/02/2025"
  },
  {
    "id": "721378932758282303",
    "pseudo": "Re4p3R",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/08/2025"
  },
  {
    "id": "723013662289297530",
    "pseudo": "W.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/06/2025"
  },
  {
    "id": "723330315396841492",
    "pseudo": "John Dubois | Glingos",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/04/2026"
  },
  {
    "id": "723448554563174420",
    "pseudo": "STRONG",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/08/2024"
  },
  {
    "id": "723526320591732736",
    "pseudo": "ludo44",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2025"
  },
  {
    "id": "724181408318488636",
    "pseudo": "BabanksFR",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/02/2024"
  },
  {
    "id": "724531237405982761",
    "pseudo": "BereckOf",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2026"
  },
  {
    "id": "724665133758021810",
    "pseudo": "Max_276",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/04/2024"
  },
  {
    "id": "725052008188477440",
    "pseudo": "franc smoc",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2025"
  },
  {
    "id": "725067887013920778",
    "pseudo": "Le_Ratz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/03/2025"
  },
  {
    "id": "725668269645889546",
    "pseudo": "roma 105",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "15/04/2024"
  },
  {
    "id": "725697573255643156",
    "pseudo": "vegeta46",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/05/2025"
  },
  {
    "id": "726012220516991046",
    "pseudo": "Skywoockiedu987🦧",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/08/2025"
  },
  {
    "id": "726466927848980510",
    "pseudo": "CappieSUN",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2026"
  },
  {
    "id": "726899816227143831",
    "pseudo": "Marc",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/03/2025"
  },
  {
    "id": "727244789409513482",
    "pseudo": "Jack l'Étrier / Le Cl0wn59",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/04/2025"
  },
  {
    "id": "727291234468495401",
    "pseudo": "Tim_ltk",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2026"
  },
  {
    "id": "727975009556889642",
    "pseudo": "qtxpro",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/06/2025"
  },
  {
    "id": "728292963473686578",
    "pseudo": "FlawLess-BOB",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/05/2025"
  },
  {
    "id": "728402754556526683",
    "pseudo": "wibibag 🇨🇵",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/02/2025"
  },
  {
    "id": "729010498573697055",
    "pseudo": "Foxtrot_SIS",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/08/2025"
  },
  {
    "id": "729429478052462602",
    "pseudo": "DefJam",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/03/2025"
  },
  {
    "id": "729675985641013268",
    "pseudo": "DowN_InFerNa",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/03/2024"
  },
  {
    "id": "729758550494150797",
    "pseudo": "Jojal01",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2026"
  },
  {
    "id": "729776436180680855",
    "pseudo": "John \"V8\" Sauvé",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/12/2024"
  },
  {
    "id": "729952699050885120",
    "pseudo": "Alpha4133",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/01/2026"
  },
  {
    "id": "730021066524721226",
    "pseudo": "Sins Meliodas",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2026"
  },
  {
    "id": "730084522648928287",
    "pseudo": "DURPIRATE",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/01/2025"
  },
  {
    "id": "730198629905727579",
    "pseudo": "luka_dth",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "22/05/2025"
  },
  {
    "id": "730349308938813511",
    "pseudo": "SK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/10/2025"
  },
  {
    "id": "730405867576623265",
    "pseudo": "stephan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/06/2025"
  },
  {
    "id": "731046789695668276",
    "pseudo": "bibi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/11/2024"
  },
  {
    "id": "731166648035311665",
    "pseudo": "Fox",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/07/2025"
  },
  {
    "id": "731539098300448819",
    "pseudo": "Nameless",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2024"
  },
  {
    "id": "732073240733679666",
    "pseudo": "sully",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/07/2025"
  },
  {
    "id": "732293516645892176",
    "pseudo": "Krinoo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/06/2025"
  },
  {
    "id": "732366864663183471",
    "pseudo": "Black_Ashes-_-",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/05/2025"
  },
  {
    "id": "732584697376538674",
    "pseudo": "Elijahxcyuiv",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "732734010589052978",
    "pseudo": ".ramzae",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/01/2025"
  },
  {
    "id": "732822404891672597",
    "pseudo": "panda_Azr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/07/2025"
  },
  {
    "id": "733027240606171267",
    "pseudo": "Kef",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "733364392468414504",
    "pseudo": "clopzy1629",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2026"
  },
  {
    "id": "733498613237547051",
    "pseudo": "FreePablach",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/02/2025"
  },
  {
    "id": "733697232083222658",
    "pseudo": "gregtime187",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/12/2025"
  },
  {
    "id": "733744978164973699",
    "pseudo": "walter",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "733975035424931851",
    "pseudo": "𝖙𝖊𝖖𝖎𝖑𝖆𝖝",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/04/2026"
  },
  {
    "id": "734502593509851256",
    "pseudo": "Nawko",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/07/2025"
  },
  {
    "id": "734830298063175833",
    "pseudo": "[IOB] Orioxe",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2026"
  },
  {
    "id": "734880236486787192",
    "pseudo": "Momar",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/02/2026"
  },
  {
    "id": "735055520821542922",
    "pseudo": "Ryzo Rj",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/06/2024"
  },
  {
    "id": "736260877342474261",
    "pseudo": "Cpl ch guyver",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "02/01/2024"
  },
  {
    "id": "736379811962028032",
    "pseudo": "Iker13__",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/02/2026"
  },
  {
    "id": "736560047223472170",
    "pseudo": "Eviandedule",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2026"
  },
  {
    "id": "737054338857566311",
    "pseudo": "Ethan 100",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/08/2024"
  },
  {
    "id": "737444777267560659",
    "pseudo": "JamesD",
    "role": "Soldat",
    "grade": "Sergent-Chef",
    "joinDate": "13/04/2024"
  },
  {
    "id": "737591072548585473",
    "pseudo": "Mehdi Kada",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2025"
  },
  {
    "id": "738382076939731055",
    "pseudo": "Dorian23#4644",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/07/2024"
  },
  {
    "id": "738778542384480276",
    "pseudo": "Shadow",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/12/2025"
  },
  {
    "id": "739210591423561830",
    "pseudo": "Artyom Abarnikov",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/02/2026"
  },
  {
    "id": "740304198943637579",
    "pseudo": "Iboy",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "13/01/2024"
  },
  {
    "id": "740554829062996010",
    "pseudo": "spiresm",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/04/2024"
  },
  {
    "id": "740946416494706769",
    "pseudo": "Ollyfox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/08/2025"
  },
  {
    "id": "741592934440370218",
    "pseudo": "NielsP0ps",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/05/2025"
  },
  {
    "id": "741618562854158449",
    "pseudo": "DeltaV1per",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "20/10/2025"
  },
  {
    "id": "742003706396147802",
    "pseudo": "MAQ_Nuggetss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/06/2024"
  },
  {
    "id": "742426235992277143",
    "pseudo": "jpmaed",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/04/2024"
  },
  {
    "id": "742854327458070640",
    "pseudo": "Namiaou",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "21/02/2026"
  },
  {
    "id": "743186881939898468",
    "pseudo": "FireStorm BzH",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/06/2024"
  },
  {
    "id": "743227389064118334",
    "pseudo": "Matrikuguy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/12/2025"
  },
  {
    "id": "743362302417567744",
    "pseudo": "Liamdiss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/01/2025"
  },
  {
    "id": "743668653731479563",
    "pseudo": "Samy Sman",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/01/2026"
  },
  {
    "id": "745281845066989598",
    "pseudo": "Yi_hanne",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/03/2026"
  },
  {
    "id": "746040379966619659",
    "pseudo": "GMZlink311",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "17/06/2024"
  },
  {
    "id": "746069933795966996",
    "pseudo": "Xhanoga",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/12/2024"
  },
  {
    "id": "747060438700654592",
    "pseudo": "leViet",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/11/2025"
  },
  {
    "id": "747419378936447016",
    "pseudo": "ninou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/05/2024"
  },
  {
    "id": "747436123969814539",
    "pseudo": "Jbal",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "13/01/2024"
  },
  {
    "id": "748222851009478767",
    "pseudo": "GHOST2B",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2025"
  },
  {
    "id": "748310797108641954",
    "pseudo": "Slandy311",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/01/2025"
  },
  {
    "id": "748435270164021278",
    "pseudo": "reaperpriux66",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/05/2025"
  },
  {
    "id": "748457194978148395",
    "pseudo": "Pablo Emilio",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "10/02/2024"
  },
  {
    "id": "748542204548743230",
    "pseudo": "VERIDISQUO1995",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/05/2024"
  },
  {
    "id": "748586509510115509",
    "pseudo": "destoy4900",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/01/2025"
  },
  {
    "id": "748960088143953989",
    "pseudo": "Adem",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2025"
  },
  {
    "id": "749377664267321454",
    "pseudo": "YasKo_KTs",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/02/2025"
  },
  {
    "id": "750737299569901628",
    "pseudo": "Rimura",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/11/2024"
  },
  {
    "id": "750785850601635900",
    "pseudo": "BRUTUS",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "08/03/2026"
  },
  {
    "id": "751113136097984614",
    "pseudo": "Zéro Hélios",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/04/2025"
  },
  {
    "id": "751488800022069391",
    "pseudo": "NAXOZIO",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/01/2025"
  },
  {
    "id": "752092113868685322",
    "pseudo": "seydoupapay",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/11/2024"
  },
  {
    "id": "752473792764313620",
    "pseudo": "Leroy_Te_Mange",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2026"
  },
  {
    "id": "752553681831985213",
    "pseudo": "Evandard0141",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "22/04/2024"
  },
  {
    "id": "753164130176729098",
    "pseudo": "AXE/ Sentinelle_Zero",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/09/2025"
  },
  {
    "id": "753321856156565574",
    "pseudo": "JP the bearded",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/11/2024"
  },
  {
    "id": "753489563854438464",
    "pseudo": "Sentinelle8B",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/10/2025"
  },
  {
    "id": "753928066840920104",
    "pseudo": "Amine__mamour",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2026"
  },
  {
    "id": "753984129330053201",
    "pseudo": "famasito1945",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/09/2024"
  },
  {
    "id": "754047400188051472",
    "pseudo": "[TĀJ] 𝗣𝗔𝗕𝗟𝗔𝗦𝗛",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2025"
  },
  {
    "id": "754048087491739792",
    "pseudo": "> Э𝗹 𝔸𝚣𝘶𝐥 𝐥",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/12/2025"
  },
  {
    "id": "754083543726162011",
    "pseudo": "Axtm",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "05/07/2025"
  },
  {
    "id": "754542165887025163",
    "pseudo": "Thatfnguy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/08/2024"
  },
  {
    "id": "755083352897486848",
    "pseudo": "NKG",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/03/2025"
  },
  {
    "id": "755566707485048842",
    "pseudo": "Captain1931",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "755732128133677136",
    "pseudo": "Nevaven",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/08/2025"
  },
  {
    "id": "755775992970084463",
    "pseudo": "Alzako",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/07/2025"
  },
  {
    "id": "755819399239172277",
    "pseudo": "zockal",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/05/2024"
  },
  {
    "id": "755838518198141079",
    "pseudo": "\"Chewie\"",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/09/2025"
  },
  {
    "id": "756136026426048522",
    "pseudo": "Elpolocke",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/05/2025"
  },
  {
    "id": "756199716487692392",
    "pseudo": "Sunwiki",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/07/2025"
  },
  {
    "id": "756984089088753676",
    "pseudo": "Seena",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/05/2025"
  },
  {
    "id": "757250894310932605",
    "pseudo": "ElFuegoDomingo",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/01/2025"
  },
  {
    "id": "757964322939994245",
    "pseudo": "SiXtHrEEsIx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/07/2024"
  },
  {
    "id": "758020889169231925",
    "pseudo": "Arzox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2024"
  },
  {
    "id": "758039314922733700",
    "pseudo": "CryBaby",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/11/2025"
  },
  {
    "id": "758751581415407648",
    "pseudo": "Prev@x",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/09/2025"
  },
  {
    "id": "758792182899015740",
    "pseudo": "ban limortelle",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/06/2024"
  },
  {
    "id": "758922420832043020",
    "pseudo": "lucas harry",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/12/2025"
  },
  {
    "id": "759036922986889247",
    "pseudo": "Jtorres1234",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/02/2026"
  },
  {
    "id": "759051858165235712",
    "pseudo": "Nix",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/02/2024"
  },
  {
    "id": "759144341825781770",
    "pseudo": "Deagle66",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/02/2026"
  },
  {
    "id": "759712607875104788",
    "pseudo": "Jfixi",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/03/2024"
  },
  {
    "id": "759788170568269876",
    "pseudo": "Flavor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/01/2026"
  },
  {
    "id": "759983812649943060",
    "pseudo": "†❀Yhorn❀†",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2024"
  },
  {
    "id": "760159422638325770",
    "pseudo": "maelhann",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/10/2025"
  },
  {
    "id": "760205845195259904",
    "pseudo": "SKOON",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/09/2024"
  },
  {
    "id": "760250736339976213",
    "pseudo": "Fluffy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/11/2024"
  },
  {
    "id": "760909101310935100",
    "pseudo": "Jeremy Osh",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/02/2025"
  },
  {
    "id": "762325059221192705",
    "pseudo": "noe_mxs",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/01/2026"
  },
  {
    "id": "762761929848389632",
    "pseudo": "Satelite",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/03/2025"
  },
  {
    "id": "763009128569765957",
    "pseudo": "Jerem",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/02/2025"
  },
  {
    "id": "763084772876222506",
    "pseudo": "KaLysps",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/12/2024"
  },
  {
    "id": "763106099418103878",
    "pseudo": "𝘾𝙤𝙘𝙖ï𝙨 🍃",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/08/2025"
  },
  {
    "id": "763353480290762792",
    "pseudo": "Martin 48600",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/07/2025"
  },
  {
    "id": "763383813614469170",
    "pseudo": "Rubio",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/08/2025"
  },
  {
    "id": "763436787330449430",
    "pseudo": "WarkatekLegend [Red-Win]",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/07/2025"
  },
  {
    "id": "763437164062572605",
    "pseudo": "𝕬𝖓𝖌𝖊𝖑",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/03/2025"
  },
  {
    "id": "763535425658028062",
    "pseudo": "Martin Labbé",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/06/2024"
  },
  {
    "id": "763663158451503115",
    "pseudo": "LeDrWHITE",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2025"
  },
  {
    "id": "763761009600757810",
    "pseudo": "Rixter_001",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/07/2025"
  },
  {
    "id": "764035653465276447",
    "pseudo": "Norash",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/10/2025"
  },
  {
    "id": "764334407447609376",
    "pseudo": "Andre CI88",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/03/2025"
  },
  {
    "id": "764781484942295052",
    "pseudo": "MadaraAZER2",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/07/2025"
  },
  {
    "id": "764887870359076894",
    "pseudo": "ExxoDead",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/01/2025"
  },
  {
    "id": "764941066990125077",
    "pseudo": "smad",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2024"
  },
  {
    "id": "765234106006241280",
    "pseudo": "rofaly67",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/03/2026"
  },
  {
    "id": "765280011417550860",
    "pseudo": "beckinsal",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2024"
  },
  {
    "id": "765547461191139329",
    "pseudo": "Sig",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/12/2024"
  },
  {
    "id": "765638750746312735",
    "pseudo": "Ip203",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/01/2026"
  },
  {
    "id": "765666368396722228",
    "pseudo": "Mrhous133",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2024"
  },
  {
    "id": "766261934764064809",
    "pseudo": "Larry Khote",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/04/2024"
  },
  {
    "id": "766571660136153109",
    "pseudo": "antonius_4_0",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/05/2025"
  },
  {
    "id": "766751771388936233",
    "pseudo": "chichine",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/09/2024"
  },
  {
    "id": "767016297581641729",
    "pseudo": "[414]RK27130",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/02/2025"
  },
  {
    "id": "767445241048334337",
    "pseudo": "KingBradley225",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/07/2025"
  },
  {
    "id": "767473732817911838",
    "pseudo": "oahhmz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2026"
  },
  {
    "id": "767766245763842090",
    "pseudo": "𝕯𝖎𝖆𝖇𝖑𝖔",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2024"
  },
  {
    "id": "768043388527706132",
    "pseudo": "TONY",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "14/01/2024"
  },
  {
    "id": "768103082097639474",
    "pseudo": "danzosex",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/09/2024"
  },
  {
    "id": "768236190675238923",
    "pseudo": "thekiller4517",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/11/2024"
  },
  {
    "id": "768262443335680010",
    "pseudo": "KIRA",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/03/2025"
  },
  {
    "id": "768537994998054992",
    "pseudo": "Soldat TheRealityViirs",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/03/2025"
  },
  {
    "id": "768807808896204800",
    "pseudo": "2Cl Dav Spinou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/09/2025"
  },
  {
    "id": "769005882171457548",
    "pseudo": "KLypZ QC",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/12/2025"
  },
  {
    "id": "769101278369284107",
    "pseudo": "Lucas",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/04/2025"
  },
  {
    "id": "769263169348567051",
    "pseudo": "✠DEGEN✠",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/06/2025"
  },
  {
    "id": "769285918233329696",
    "pseudo": "Matthieujdrumm",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/03/2026"
  },
  {
    "id": "769855513566380042",
    "pseudo": "Danoos",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/07/2024"
  },
  {
    "id": "770429557357543455",
    "pseudo": "NoVA",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/07/2025"
  },
  {
    "id": "770608558106345473",
    "pseudo": "rd-_—————09",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "770655207116767234",
    "pseudo": "Ramirez",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/12/2024"
  },
  {
    "id": "770673749023391744",
    "pseudo": "Rbn2bb🇵🇹",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/11/2025"
  },
  {
    "id": "770758873535479810",
    "pseudo": "VsoP_PHSHAKA",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2025"
  },
  {
    "id": "770960125526802442",
    "pseudo": "Pr Emile",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/08/2024"
  },
  {
    "id": "771061072882565130",
    "pseudo": "Demo_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/03/2025"
  },
  {
    "id": "771071440446947359",
    "pseudo": "Mad Max",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/03/2024"
  },
  {
    "id": "771119117528465468",
    "pseudo": "🥖Baguettosky🥖",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/04/2025"
  },
  {
    "id": "771531045127323679",
    "pseudo": "stryka80",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/03/2026"
  },
  {
    "id": "771852586016833556",
    "pseudo": "Andy0686",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/09/2025"
  },
  {
    "id": "771944955563212800",
    "pseudo": "Rocky968",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/05/2025"
  },
  {
    "id": "772082414663106562",
    "pseudo": "julos",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/07/2025"
  },
  {
    "id": "772117797496946738",
    "pseudo": "Sam cv🇫🇷",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2025"
  },
  {
    "id": "772389598101110785",
    "pseudo": "tentation77",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/08/2025"
  },
  {
    "id": "772522297076088873",
    "pseudo": "la_TOUF_15",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2025"
  },
  {
    "id": "772578687727304724",
    "pseudo": "Barras🐊",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/04/2025"
  },
  {
    "id": "772597070812938260",
    "pseudo": "Maala42",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2025"
  },
  {
    "id": "772815583875039232",
    "pseudo": "Choufromu",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/01/2026"
  },
  {
    "id": "772902639415197696",
    "pseudo": "Valox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2025"
  },
  {
    "id": "773107908060905503",
    "pseudo": "jordichh44",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/10/2025"
  },
  {
    "id": "773120639942393886",
    "pseudo": "Clint-istewoud",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/11/2025"
  },
  {
    "id": "773210663849164822",
    "pseudo": "xxfactoryxx",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "14/02/2025"
  },
  {
    "id": "773315772654551072",
    "pseudo": "Un carton perdu",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2025"
  },
  {
    "id": "773612604869574687",
    "pseudo": "Elwë38",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/08/2024"
  },
  {
    "id": "773897348958650369",
    "pseudo": "𝒲𝑜𝓊𝒾𝓃𝓁𝒾𝓃𝑔-𝒹𝒾𝓃𝑔",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/01/2025"
  },
  {
    "id": "773911867885223946",
    "pseudo": "Ticketdecaisse",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/08/2025"
  },
  {
    "id": "773981753797902389",
    "pseudo": "Néo Riri",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/01/2025"
  },
  {
    "id": "774109701608177664",
    "pseudo": "Ya-Man",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2026"
  },
  {
    "id": "774252389611995167",
    "pseudo": "kempofighter80",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/08/2025"
  },
  {
    "id": "774664365328171028",
    "pseudo": "RadiumVenum",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "11/03/2026"
  },
  {
    "id": "775067982769422366",
    "pseudo": "Dysonfarmer",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/12/2024"
  },
  {
    "id": "775393133085065216",
    "pseudo": "M_Tolsoi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2026"
  },
  {
    "id": "775472445461102592",
    "pseudo": "JULOT04",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "24/01/2026"
  },
  {
    "id": "775745912596725801",
    "pseudo": "Lartificier_77",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "26/02/2026"
  },
  {
    "id": "775836481612021770",
    "pseudo": "batiste_msc",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/07/2025"
  },
  {
    "id": "776024652438175804",
    "pseudo": "Cuisinier",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/12/2024"
  },
  {
    "id": "776166863376875560",
    "pseudo": "leskkro",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/05/2025"
  },
  {
    "id": "776827844466311170",
    "pseudo": "aupeyi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/07/2025"
  },
  {
    "id": "776871511583621120",
    "pseudo": "kira®",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2025"
  },
  {
    "id": "777185474183692371",
    "pseudo": "Naxx_99",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2026"
  },
  {
    "id": "777623914921984001",
    "pseudo": "Sorebi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/01/2025"
  },
  {
    "id": "778066222246920202",
    "pseudo": "Cap’n Cook",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/04/2025"
  },
  {
    "id": "778243239739392050",
    "pseudo": "LAVAA",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/01/2025"
  },
  {
    "id": "778576573343072316",
    "pseudo": "eddyydu13",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2025"
  },
  {
    "id": "778598096380624896",
    "pseudo": "13onizuka",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/03/2025"
  },
  {
    "id": "778928662547660801",
    "pseudo": "ImNeziaa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "779078224805363774",
    "pseudo": "Recrue. Yuri Zeltov",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/02/2025"
  },
  {
    "id": "779098470212173875",
    "pseudo": "ZoRaN_Le_Demon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/03/2026"
  },
  {
    "id": "779174699681841153",
    "pseudo": "tahitibooob59",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/02/2026"
  },
  {
    "id": "779371003188215838",
    "pseudo": "#BalHaine",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/09/2025"
  },
  {
    "id": "779395934034591795",
    "pseudo": "ØžX_7ÛP",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2024"
  },
  {
    "id": "779443717874384897",
    "pseudo": "ECFR__VODS",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/01/2025"
  },
  {
    "id": "779674809838993418",
    "pseudo": "ice-clow",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/03/2024"
  },
  {
    "id": "780489299811368991",
    "pseudo": "Sledge#3934",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "781497429748088832",
    "pseudo": "EvoZionkilleur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/03/2026"
  },
  {
    "id": "781840785183080458",
    "pseudo": "pierrequimousse",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2025"
  },
  {
    "id": "782001271368056872",
    "pseudo": "Hagal _GTA",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/01/2025"
  },
  {
    "id": "782053443765403679",
    "pseudo": "Bobybulle44",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/05/2025"
  },
  {
    "id": "782371439336488960",
    "pseudo": "Igor Rascalov",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2025"
  },
  {
    "id": "782656207734439966",
    "pseudo": "Monkeysmoke38",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/08/2025"
  },
  {
    "id": "782664125469687849",
    "pseudo": "Escobar",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/07/2025"
  },
  {
    "id": "782757902045675530",
    "pseudo": "Irish",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/04/2024"
  },
  {
    "id": "782917407374704660",
    "pseudo": "FaZe-GAMING38",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/08/2025"
  },
  {
    "id": "783009337525272626",
    "pseudo": "Mercenairedu16",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/01/2025"
  },
  {
    "id": "783074056424914994",
    "pseudo": "Onore Aldebaran",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "783352400416997378",
    "pseudo": "LoriMox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/12/2025"
  },
  {
    "id": "783431786352869439",
    "pseudo": "Creepers27fouill",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/06/2025"
  },
  {
    "id": "783447163149352970",
    "pseudo": "LagaFlex",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/03/2025"
  },
  {
    "id": "783457752080580608",
    "pseudo": "lFyZeRl",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/09/2025"
  },
  {
    "id": "783662643260555294",
    "pseudo": "Véga missile",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/02/2026"
  },
  {
    "id": "783765883762769952",
    "pseudo": "𝑫𝒂𝒅𝒐𝒖_83",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/02/2026"
  },
  {
    "id": "784052600789139470",
    "pseudo": "Manou",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/01/2026"
  },
  {
    "id": "784135873406959637",
    "pseudo": "Barbouze83",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/02/2025"
  },
  {
    "id": "784344579666346005",
    "pseudo": "alex andré",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2026"
  },
  {
    "id": "784456523149344780",
    "pseudo": "Stoqz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2025"
  },
  {
    "id": "784551381684060170",
    "pseudo": "sebast89",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/05/2024"
  },
  {
    "id": "784727079403913216",
    "pseudo": "Kgbc_1996",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/12/2025"
  },
  {
    "id": "784764886298656788",
    "pseudo": "Optum",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/12/2023"
  },
  {
    "id": "785055890487246874",
    "pseudo": "xM4kaveli",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/03/2024"
  },
  {
    "id": "785213135237808168",
    "pseudo": "🌻✨៹Ŀ𝙤xⅈ🌻✨",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/04/2026"
  },
  {
    "id": "785396521767927838",
    "pseudo": "ayden17",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2025"
  },
  {
    "id": "785501514595958805",
    "pseudo": "POF_T_MORT",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "04/03/2025"
  },
  {
    "id": "786156087304126514",
    "pseudo": "AceXelle",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/11/2024"
  },
  {
    "id": "786319976306835506",
    "pseudo": "Ace",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/07/2024"
  },
  {
    "id": "786687224468865024",
    "pseudo": "Sak",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2026"
  },
  {
    "id": "786946861658931230",
    "pseudo": "IronFister",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2025"
  },
  {
    "id": "786950959283830795",
    "pseudo": "Neroc",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2024"
  },
  {
    "id": "787316427274190849",
    "pseudo": "yoyobaba93",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "787452814163050496",
    "pseudo": "hatemsergent",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/07/2025"
  },
  {
    "id": "787674493543776258",
    "pseudo": "Wazabi-Chopain",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2025"
  },
  {
    "id": "788057364317077544",
    "pseudo": "protopics",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2025"
  },
  {
    "id": "788102918880362508",
    "pseudo": "Jo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/04/2024"
  },
  {
    "id": "788140212303298611",
    "pseudo": "Senioz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/04/2024"
  },
  {
    "id": "788427052725829663",
    "pseudo": "cornetitan677",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/09/2025"
  },
  {
    "id": "788442197866840064",
    "pseudo": "Tah_Da",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/02/2025"
  },
  {
    "id": "788574294573056060",
    "pseudo": "Warkill66",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/07/2025"
  },
  {
    "id": "788716187751022602",
    "pseudo": "John Mackayn",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/06/2025"
  },
  {
    "id": "788838840139513916",
    "pseudo": "Zack",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/08/2025"
  },
  {
    "id": "788839950665383996",
    "pseudo": "Hevenlysworld",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2024"
  },
  {
    "id": "788842809460654101",
    "pseudo": "Wizz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/02/2025"
  },
  {
    "id": "788909489423777793",
    "pseudo": "wouss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2026"
  },
  {
    "id": "789167541653995552",
    "pseudo": "baaw973",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2026"
  },
  {
    "id": "789293912560369704",
    "pseudo": "AXONEWOLF47",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/07/2025"
  },
  {
    "id": "789417422964523019",
    "pseudo": "𝒵𝐼𝒫𝒫𝐸𝑅",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/04/2025"
  },
  {
    "id": "789493703303626752",
    "pseudo": "Cpl Guig_s (guigs2653)",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "06/12/2023"
  },
  {
    "id": "789809994190553118",
    "pseudo": "akilaa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/12/2024"
  },
  {
    "id": "789812559326609418",
    "pseudo": "Rakham",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/04/2024"
  },
  {
    "id": "789917162458054708",
    "pseudo": "Paff",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/12/2024"
  },
  {
    "id": "790168247274176513",
    "pseudo": "star_djin97",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2024"
  },
  {
    "id": "790179368851734548",
    "pseudo": "youness",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2025"
  },
  {
    "id": "790248413287153694",
    "pseudo": ".maxibiscuit",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/06/2024"
  },
  {
    "id": "790299543316201543",
    "pseudo": "FiVe Scream",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/09/2024"
  },
  {
    "id": "790378183047905293",
    "pseudo": "mrc9877",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/06/2025"
  },
  {
    "id": "790551648144457728",
    "pseudo": "♛ ☆- 𝓣𝓕𝓚𝓰𝓪𝓶𝓲𝓷𝓰01 -☆ ♛",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2026"
  },
  {
    "id": "790637765074616340",
    "pseudo": "Marcus-alcapone",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/03/2025"
  },
  {
    "id": "790688064355696701",
    "pseudo": "BebeEnzo72",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "07/01/2025"
  },
  {
    "id": "791050472709423115",
    "pseudo": "LM Clem",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/06/2025"
  },
  {
    "id": "791063168449380392",
    "pseudo": "Tech",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/09/2024"
  },
  {
    "id": "791623483285176341",
    "pseudo": "azmoogg",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/02/2024"
  },
  {
    "id": "791691677969547324",
    "pseudo": "FabienTls",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/04/2024"
  },
  {
    "id": "792028629667282985",
    "pseudo": "Tata",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/03/2025"
  },
  {
    "id": "792187173213306930",
    "pseudo": "TSN ZERTOX",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/03/2025"
  },
  {
    "id": "792465020168044554",
    "pseudo": "Azrael",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/05/2025"
  },
  {
    "id": "792470063377940492",
    "pseudo": "xXMAVERlCKS666Xx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/06/2025"
  },
  {
    "id": "792485573586714665",
    "pseudo": "Yns",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/06/2025"
  },
  {
    "id": "792510803172524032",
    "pseudo": "Elfennec8",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/05/2024"
  },
  {
    "id": "792521066241196043",
    "pseudo": "brUtiqueSW",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2026"
  },
  {
    "id": "792765180668149800",
    "pseudo": "Starfighter13008",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/07/2025"
  },
  {
    "id": "792919518708105218",
    "pseudo": "deadestsev",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/07/2024"
  },
  {
    "id": "793180949046624286",
    "pseudo": "foufou361623",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/09/2024"
  },
  {
    "id": "793233894379094033",
    "pseudo": "Alex_Atks",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "793237292537348116",
    "pseudo": "BeUrNy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/02/2025"
  },
  {
    "id": "793430296270733352",
    "pseudo": "GenieArgent7991",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/01/2025"
  },
  {
    "id": "793896216270209064",
    "pseudo": "Nelix",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/04/2026"
  },
  {
    "id": "794029017854246912",
    "pseudo": "𝔇𝔬𝔬𝔤...",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/07/2025"
  },
  {
    "id": "795053250306244609",
    "pseudo": "titoine27370",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/08/2024"
  },
  {
    "id": "795244776256438324",
    "pseudo": "skow",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/05/2025"
  },
  {
    "id": "795339276283805696",
    "pseudo": "las00000",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "795353886608064552",
    "pseudo": "yanis",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/12/2024"
  },
  {
    "id": "795648867285729301",
    "pseudo": "Acope",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/03/2025"
  },
  {
    "id": "796145110051848213",
    "pseudo": "Abdel kader",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2025"
  },
  {
    "id": "796382240028229673",
    "pseudo": "pinpon2A",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "28/01/2025"
  },
  {
    "id": "796447751385907240",
    "pseudo": "olivierboby",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/10/2024"
  },
  {
    "id": "796589990939328532",
    "pseudo": "Xer-Suez",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/01/2025"
  },
  {
    "id": "796827785993781248",
    "pseudo": "Ай",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/11/2024"
  },
  {
    "id": "797097416813445170",
    "pseudo": "Blue Peanut",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/11/2024"
  },
  {
    "id": "797280051468435476",
    "pseudo": "MarcoPlante",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/12/2025"
  },
  {
    "id": "797433653852241971",
    "pseudo": "Ch1l1_T1g3r_",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/05/2025"
  },
  {
    "id": "797893330917785630",
    "pseudo": "Bones187QI",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/06/2025"
  },
  {
    "id": "798228836440473620",
    "pseudo": "N'tm",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/05/2024"
  },
  {
    "id": "798262700044058664",
    "pseudo": "Kax_64",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/06/2025"
  },
  {
    "id": "798626949303500860",
    "pseudo": "Jordan_6240",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/09/2025"
  },
  {
    "id": "798677772285247498",
    "pseudo": "𝐼𝑅𝒶𝓎𝓏𝑒𝓃𝒬",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "04/02/2024"
  },
  {
    "id": "798919676494217216",
    "pseudo": "Tiboush!iii 👑",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/07/2025"
  },
  {
    "id": "799289897760194592",
    "pseudo": "S_maxdu14",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/07/2025"
  },
  {
    "id": "799385293030817793",
    "pseudo": "Tophe59200",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/03/2025"
  },
  {
    "id": "799406446093402152",
    "pseudo": "Ding",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/04/2024"
  },
  {
    "id": "799475719724859472",
    "pseudo": "will91131",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "13/02/2024"
  },
  {
    "id": "799993510979829801",
    "pseudo": "Марти Даб",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/04/2025"
  },
  {
    "id": "800029773287129108",
    "pseudo": "alwin95",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2025"
  },
  {
    "id": "800032433017323583",
    "pseudo": "FCA70",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/06/2025"
  },
  {
    "id": "800065227290574879",
    "pseudo": "lubzzrr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/03/2026"
  },
  {
    "id": "800460102896713768",
    "pseudo": "redwan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2025"
  },
  {
    "id": "800700222719787018",
    "pseudo": "krimzoo135",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2026"
  },
  {
    "id": "800748479773147227",
    "pseudo": "ManuVR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/01/2026"
  },
  {
    "id": "801153493700313108",
    "pseudo": "solom",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2024"
  },
  {
    "id": "801199206488342546",
    "pseudo": "Captain_m140i",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/10/2024"
  },
  {
    "id": "801266468867145798",
    "pseudo": "Joss🇫🇷",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/05/2024"
  },
  {
    "id": "801439169717075978",
    "pseudo": "Paka",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/01/2024"
  },
  {
    "id": "801485766885638225",
    "pseudo": "Zawe",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2025"
  },
  {
    "id": "801941170057642004",
    "pseudo": "kedz71140@",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/03/2025"
  },
  {
    "id": "802316545211760672",
    "pseudo": "Jah_Stuart",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/03/2025"
  },
  {
    "id": "802328804214308894",
    "pseudo": "2nd CL DMS",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/08/2025"
  },
  {
    "id": "802337989699174422",
    "pseudo": "guerttime",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/02/2024"
  },
  {
    "id": "802609024154599476",
    "pseudo": "Cpas0im",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/03/2024"
  },
  {
    "id": "802846289565188126",
    "pseudo": "WarDesigner",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2026"
  },
  {
    "id": "802932057788907520",
    "pseudo": "kit-privatif",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/05/2025"
  },
  {
    "id": "802957739910234143",
    "pseudo": "RocketteSlim",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "25/03/2025"
  },
  {
    "id": "803006090283319366",
    "pseudo": "marsouin",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/03/2025"
  },
  {
    "id": "803288966124142652",
    "pseudo": "ZeeRtYi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2025"
  },
  {
    "id": "803294223146287114",
    "pseudo": "derzends",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/03/2025"
  },
  {
    "id": "803630883218391081",
    "pseudo": "Lafayette",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/04/2025"
  },
  {
    "id": "804037187460137041",
    "pseudo": "laserrane",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/06/2025"
  },
  {
    "id": "804191762775670794",
    "pseudo": "tommyleejo.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2024"
  },
  {
    "id": "804431753682092113",
    "pseudo": "naofeul",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/02/2026"
  },
  {
    "id": "804701747196461066",
    "pseudo": "Frizeur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/01/2026"
  },
  {
    "id": "804844497879433216",
    "pseudo": "Super_JC",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2024"
  },
  {
    "id": "804895777166983188",
    "pseudo": "Quoicou_duSud",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2026"
  },
  {
    "id": "805160293478694932",
    "pseudo": "Knightfall",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/02/2025"
  },
  {
    "id": "805169145539723264",
    "pseudo": "Nusra",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2026"
  },
  {
    "id": "805193889715191808",
    "pseudo": "YABIDOU",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/10/2025"
  },
  {
    "id": "805216997839208500",
    "pseudo": "Ghetto Youss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/04/2026"
  },
  {
    "id": "805420940376014898",
    "pseudo": "mathisdkr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/02/2025"
  },
  {
    "id": "805460292233592862",
    "pseudo": "GG16419",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2025"
  },
  {
    "id": "805529220377083924",
    "pseudo": "kataklysm23",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/04/2026"
  },
  {
    "id": "805889154172321833",
    "pseudo": "EL_CRAKITOS74",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/01/2026"
  },
  {
    "id": "805896800220872714",
    "pseudo": "ByFox_Tv (le terrier)",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "26/10/2025"
  },
  {
    "id": "806188885004255242",
    "pseudo": "walouww",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/06/2025"
  },
  {
    "id": "806505551844081715",
    "pseudo": "Nini3135",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "22/02/2026"
  },
  {
    "id": "806953341174808638",
    "pseudo": "HASH_FREEZ_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/06/2025"
  },
  {
    "id": "807215307395563570",
    "pseudo": "Tychus",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/10/2024"
  },
  {
    "id": "807341633783857252",
    "pseudo": "Dume",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "807521899394760734",
    "pseudo": "crosse_undervers",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "17/01/2024"
  },
  {
    "id": "807558855528546345",
    "pseudo": "KimTiB",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/05/2024"
  },
  {
    "id": "807909109064138803",
    "pseudo": "Captain-skyred",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/12/2025"
  },
  {
    "id": "808012149741191178",
    "pseudo": "Gauti Kaldur",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2024"
  },
  {
    "id": "808031879953514547",
    "pseudo": "Guilian250",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/01/2025"
  },
  {
    "id": "808618439207813151",
    "pseudo": "OXB_OW (PS5)",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/08/2025"
  },
  {
    "id": "808693353742860308",
    "pseudo": "rollce0",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/09/2024"
  },
  {
    "id": "808765785002082357",
    "pseudo": "2CL Capmed",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/03/2025"
  },
  {
    "id": "809015357020438529",
    "pseudo": "Piropfr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2024"
  },
  {
    "id": "809147420369879051",
    "pseudo": "TheDarkDeath13",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2026"
  },
  {
    "id": "809167519084576819",
    "pseudo": "cendarplein",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/01/2025"
  },
  {
    "id": "809471322333773824",
    "pseudo": "miinux",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "08/04/2026"
  },
  {
    "id": "809512459756109884",
    "pseudo": "RAID-110",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/10/2024"
  },
  {
    "id": "809561557536735292",
    "pseudo": "ᵏᵃᵏʸ ツ",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/03/2024"
  },
  {
    "id": "809845545509716018",
    "pseudo": "narko2pac",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/07/2025"
  },
  {
    "id": "809903840479412264",
    "pseudo": ".BAMAK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/06/2025"
  },
  {
    "id": "810097125165367336",
    "pseudo": "Bodyboarder40",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/03/2026"
  },
  {
    "id": "810108865911849041",
    "pseudo": "I_AM_PainCake",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/06/2025"
  },
  {
    "id": "810218792457994300",
    "pseudo": "Maxye",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2026"
  },
  {
    "id": "810238256398204958",
    "pseudo": "LULUBOSS96",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/12/2024"
  },
  {
    "id": "810416641791492097",
    "pseudo": "SiinneeD",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/08/2024"
  },
  {
    "id": "810461288957476884",
    "pseudo": "LeDanez",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "31/01/2025"
  },
  {
    "id": "810464446857871372",
    "pseudo": "Bastien",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/02/2025"
  },
  {
    "id": "810571714081587250",
    "pseudo": "s_p_o_t",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/07/2025"
  },
  {
    "id": "811263571328630854",
    "pseudo": "mstf",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2025"
  },
  {
    "id": "811308660373323816",
    "pseudo": "IFOLDMYENEMY",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2026"
  },
  {
    "id": "811659086747795517",
    "pseudo": "FanTonyX-off",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/04/2026"
  },
  {
    "id": "811674874803519488",
    "pseudo": "carlilagarete",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/07/2025"
  },
  {
    "id": "811705873541496903",
    "pseudo": "Le Samaritain",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/06/2025"
  },
  {
    "id": "812441621681143871",
    "pseudo": "Le Gaulois ✝",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2025"
  },
  {
    "id": "812793568857948210",
    "pseudo": "no_volt",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/07/2025"
  },
  {
    "id": "812936458586554388",
    "pseudo": "Carpie",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "29/11/2024"
  },
  {
    "id": "813236110821556224",
    "pseudo": "McFly",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/03/2025"
  },
  {
    "id": "813431035370405898",
    "pseudo": "Seth-Baal",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/05/2024"
  },
  {
    "id": "813534046231199805",
    "pseudo": "Johnny Mokassa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/03/2024"
  },
  {
    "id": "813715029404418089",
    "pseudo": "lemon_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/05/2025"
  },
  {
    "id": "814114066372886528",
    "pseudo": "Bravo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2026"
  },
  {
    "id": "814558736390815794",
    "pseudo": "Shun",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2025"
  },
  {
    "id": "814929262158282752",
    "pseudo": "Cecespm",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2024"
  },
  {
    "id": "815629726240342046",
    "pseudo": "TOM",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2025"
  },
  {
    "id": "815644563762577408",
    "pseudo": "WOLF_513",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/10/2025"
  },
  {
    "id": "815861283206332427",
    "pseudo": "undertaker861",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/01/2025"
  },
  {
    "id": "816348213027667979",
    "pseudo": "Rancou[FR]",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2025"
  },
  {
    "id": "816783832349933650",
    "pseudo": "RaGnarox 2.0",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/12/2024"
  },
  {
    "id": "817107037790928927",
    "pseudo": "𝓜𝓲𝓻𝓪𝓰𝓮",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/10/2024"
  },
  {
    "id": "817489900944752660",
    "pseudo": "Tyler105",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2025"
  },
  {
    "id": "817607080915238932",
    "pseudo": "Joe canelo/Maxx8196569",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/08/2024"
  },
  {
    "id": "817719266581151754",
    "pseudo": "WIRZ_Neonx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/08/2025"
  },
  {
    "id": "817769964089376778",
    "pseudo": "lumberjack",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "817809049104941057",
    "pseudo": "hugsss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/03/2025"
  },
  {
    "id": "818144937320513546",
    "pseudo": "mszkr_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/04/2026"
  },
  {
    "id": "818189081682378792",
    "pseudo": "WaZe_Xx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/08/2025"
  },
  {
    "id": "818436177333190666",
    "pseudo": "Mrfrisee👂🏼",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2025"
  },
  {
    "id": "818758733890846720",
    "pseudo": "keymis",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "30/03/2025"
  },
  {
    "id": "818807290688700467",
    "pseudo": "Hector Maltes",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/04/2026"
  },
  {
    "id": "819292546739601458",
    "pseudo": "lerook",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/05/2024"
  },
  {
    "id": "819569258282745886",
    "pseudo": "Bigsam.exe",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/05/2025"
  },
  {
    "id": "820220695782359051",
    "pseudo": "Son Arma Pilot YT",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/04/2025"
  },
  {
    "id": "820874487771168779",
    "pseudo": "NaruTVs",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/01/2026"
  },
  {
    "id": "821039135161843723",
    "pseudo": "RoSSiFuMi xX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/03/2025"
  },
  {
    "id": "821129855923257406",
    "pseudo": "I X1N I",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "21/08/2025"
  },
  {
    "id": "821427038853660672",
    "pseudo": "Murmure",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2025"
  },
  {
    "id": "821468251811872808",
    "pseudo": "RYZE",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/10/2024"
  },
  {
    "id": "821534117098553375",
    "pseudo": "wahid277192",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/04/2026"
  },
  {
    "id": "821666515732004864",
    "pseudo": "Nokyos",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/02/2025"
  },
  {
    "id": "821830881219313686",
    "pseudo": "Basty1613",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/08/2025"
  },
  {
    "id": "822510942540529696",
    "pseudo": "SHEIT4N 44 zZ",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/03/2025"
  },
  {
    "id": "822889179527643136",
    "pseudo": "allananas92",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/03/2025"
  },
  {
    "id": "822932024625070101",
    "pseudo": "Booskateh",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/07/2024"
  },
  {
    "id": "822942858801184828",
    "pseudo": "22ethan44",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2026"
  },
  {
    "id": "823204782998290453",
    "pseudo": "MD_9908",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "08/07/2025"
  },
  {
    "id": "823218076173991975",
    "pseudo": "NRO Obi Wick",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "24/02/2024"
  },
  {
    "id": "823609242048135229",
    "pseudo": "Derek Frost",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/04/2024"
  },
  {
    "id": "823805361936793610",
    "pseudo": "1ère Classe Mr.Pumba",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/07/2024"
  },
  {
    "id": "824005218491826217",
    "pseudo": "BadMonkey_CH",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/07/2025"
  },
  {
    "id": "824643388384608257",
    "pseudo": "Mi0_7zz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "824739618648883201",
    "pseudo": "cptdoudou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/02/2024"
  },
  {
    "id": "825277208603787264",
    "pseudo": "ghostdennis",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/05/2024"
  },
  {
    "id": "825359398972817438",
    "pseudo": "Ezox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2025"
  },
  {
    "id": "825376156038987776",
    "pseudo": "CC1|MULTIFRUIT1492",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "825441942174564364",
    "pseudo": "falneck",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/03/2026"
  },
  {
    "id": "826221391941992478",
    "pseudo": "ArTe_NA",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "14/07/2024"
  },
  {
    "id": "826430075955839047",
    "pseudo": "Benmoumoud",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2025"
  },
  {
    "id": "826454458182795316",
    "pseudo": "SANDRO951",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2025"
  },
  {
    "id": "826869154719203328",
    "pseudo": "Viking",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2026"
  },
  {
    "id": "827138742195847188",
    "pseudo": "Stalker-76000",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/07/2025"
  },
  {
    "id": "827209257328967680",
    "pseudo": "ERROR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2025"
  },
  {
    "id": "827289172887732234",
    "pseudo": "le fifou",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/09/2024"
  },
  {
    "id": "827404525349634090",
    "pseudo": "hendrixlachqc420",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/10/2024"
  },
  {
    "id": "827611106083733597",
    "pseudo": "Raphi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/12/2024"
  },
  {
    "id": "828012949041446983",
    "pseudo": "Grundsky5915",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "23/01/2024"
  },
  {
    "id": "828651699715440720",
    "pseudo": "Benjisan65",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "03/08/2025"
  },
  {
    "id": "828694140342239263",
    "pseudo": "alex76",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/07/2024"
  },
  {
    "id": "828694477865746502",
    "pseudo": "ironShooter",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/02/2025"
  },
  {
    "id": "828747071552356383",
    "pseudo": "SLS_Mesrine",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/04/2024"
  },
  {
    "id": "828757834249273364",
    "pseudo": "GRUMPY",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "21/03/2025"
  },
  {
    "id": "828821023490703420",
    "pseudo": "dom",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/02/2024"
  },
  {
    "id": "829349017812992030",
    "pseudo": "CC1 GlockTrooper77",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "20/07/2024"
  },
  {
    "id": "829417715001327717",
    "pseudo": "enzo .i",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2025"
  },
  {
    "id": "829824075325112330",
    "pseudo": "JL Twiggard",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/09/2024"
  },
  {
    "id": "829981433925599252",
    "pseudo": "Douda61992",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/01/2025"
  },
  {
    "id": "829987539574063124",
    "pseudo": "Zacking_77",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/04/2026"
  },
  {
    "id": "830112763850391552",
    "pseudo": "secret4973",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/06/2025"
  },
  {
    "id": "830187188922351617",
    "pseudo": "FrenchyCoD",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/04/2026"
  },
  {
    "id": "830414673705828361",
    "pseudo": "DryFr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/04/2026"
  },
  {
    "id": "830734640767565859",
    "pseudo": "chris62",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/03/2024"
  },
  {
    "id": "830736177219895335",
    "pseudo": "keil_53",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "830760744886861834",
    "pseudo": "Jordan Martin /S2R POwa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2025"
  },
  {
    "id": "830786299396489216",
    "pseudo": "Martin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/01/2025"
  },
  {
    "id": "831224070996492347",
    "pseudo": "quentin3105",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/09/2025"
  },
  {
    "id": "831546715999436880",
    "pseudo": "dids37160",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/01/2025"
  },
  {
    "id": "832165673987604510",
    "pseudo": "Chico23",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/02/2026"
  },
  {
    "id": "832250142722752514",
    "pseudo": "KaYk0_m01",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/01/2026"
  },
  {
    "id": "832715205771264002",
    "pseudo": "TiKrazix",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/09/2025"
  },
  {
    "id": "832881226268278814",
    "pseudo": "lucs02",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/01/2025"
  },
  {
    "id": "833273688697864223",
    "pseudo": "super_banane",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2024"
  },
  {
    "id": "833831422636458014",
    "pseudo": "El Matador77501",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "10/05/2024"
  },
  {
    "id": "834117636903272478",
    "pseudo": "Adridarkness",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/03/2025"
  },
  {
    "id": "834418471823605790",
    "pseudo": "Sandman",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2024"
  },
  {
    "id": "835066192607707156",
    "pseudo": "back487",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/03/2025"
  },
  {
    "id": "835650001812193342",
    "pseudo": "jxlstw",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/04/2025"
  },
  {
    "id": "835833188454105098",
    "pseudo": "jOnATTeN",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "02/10/2024"
  },
  {
    "id": "835928207546777640",
    "pseudo": "Loristocrate",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/06/2025"
  },
  {
    "id": "835934449765842949",
    "pseudo": "paratrooper_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/05/2025"
  },
  {
    "id": "835951270203490355",
    "pseudo": "Azr0x_fps",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/04/2026"
  },
  {
    "id": "835973205612167218",
    "pseudo": "SKY-_-FLO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/01/2026"
  },
  {
    "id": "836137792894664784",
    "pseudo": "Ugo57k",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/12/2024"
  },
  {
    "id": "836267514534821898",
    "pseudo": "Steepoy - ArturoD",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/04/2024"
  },
  {
    "id": "836349924920262716",
    "pseudo": "Recrue Sakyuu",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/08/2024"
  },
  {
    "id": "836359068016574477",
    "pseudo": "Astroboy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2025"
  },
  {
    "id": "836769494172565516",
    "pseudo": "gofast5917",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/12/2024"
  },
  {
    "id": "836932743790854164",
    "pseudo": "Big H",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/03/2025"
  },
  {
    "id": "837016095415992372",
    "pseudo": "DRILLER",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/11/2025"
  },
  {
    "id": "837310556523200543",
    "pseudo": "Ulpw",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/08/2025"
  },
  {
    "id": "837319081962504262",
    "pseudo": "inoryx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/05/2025"
  },
  {
    "id": "838073952851984434",
    "pseudo": "TF3 SLAYER",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/10/2024"
  },
  {
    "id": "838112160432259072",
    "pseudo": "Cloudzy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2026"
  },
  {
    "id": "838426279975977001",
    "pseudo": "LTN. Azen",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "01/05/2024"
  },
  {
    "id": "838430506734321664",
    "pseudo": "samjonsontouys39",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2025"
  },
  {
    "id": "839247277134315551",
    "pseudo": "Légion",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/01/2025"
  },
  {
    "id": "839571809586249789",
    "pseudo": "Verdouille",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/02/2025"
  },
  {
    "id": "839813552410853386",
    "pseudo": "Sonay773",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/09/2025"
  },
  {
    "id": "839906726445711370",
    "pseudo": "PtitPoule",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/07/2025"
  },
  {
    "id": "840281531095449621",
    "pseudo": "dissolved",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/05/2025"
  },
  {
    "id": "840568192735772672",
    "pseudo": "GAZOshYt",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "31/05/2025"
  },
  {
    "id": "840675791086944257",
    "pseudo": "maximejaja",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/07/2025"
  },
  {
    "id": "841749632904069130",
    "pseudo": "BaMaKo--66",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "14/03/2026"
  },
  {
    "id": "841992908768411700",
    "pseudo": "BaD-HYPERI0N",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/06/2025"
  },
  {
    "id": "842378602104619039",
    "pseudo": "Tierqu4r zf",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2024"
  },
  {
    "id": "842717567969656872",
    "pseudo": "thomasfrenchs",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/12/2024"
  },
  {
    "id": "842770719036932097",
    "pseudo": "kevin84840",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2024"
  },
  {
    "id": "842842413991329813",
    "pseudo": "thefrenchbaguette",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/02/2026"
  },
  {
    "id": "842845950165778483",
    "pseudo": "frag_l",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/01/2025"
  },
  {
    "id": "843081359379267584",
    "pseudo": "pumpkinspoon357",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "07/04/2024"
  },
  {
    "id": "843101952354025482",
    "pseudo": "vSkooz—",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/01/2026"
  },
  {
    "id": "843175806704287784",
    "pseudo": "1CL | Pierre Bouras",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/04/2025"
  },
  {
    "id": "843213707721965590",
    "pseudo": "Dankor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/07/2025"
  },
  {
    "id": "843456215605444618",
    "pseudo": "[SIB] DonovanSparks",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/05/2024"
  },
  {
    "id": "843486034884034591",
    "pseudo": "Curtisloriginal",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/09/2025"
  },
  {
    "id": "843786302884937768",
    "pseudo": "Jack BAUER",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "28/07/2025"
  },
  {
    "id": "844286524292071425",
    "pseudo": "D_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/02/2025"
  },
  {
    "id": "844559245319209010",
    "pseudo": "louca_6k",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/06/2025"
  },
  {
    "id": "844643443643908097",
    "pseudo": "Luca \"Serpy\" De Ryzel",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/02/2024"
  },
  {
    "id": "844843655135100948",
    "pseudo": "Chatoune07",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/03/2026"
  },
  {
    "id": "845271453107617822",
    "pseudo": "Yann Briand",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/07/2025"
  },
  {
    "id": "845375986736693358",
    "pseudo": "Snoopyx",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/03/2025"
  },
  {
    "id": "845450962788155392",
    "pseudo": "Binks",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2025"
  },
  {
    "id": "845554004086882336",
    "pseudo": "marty_31_tv",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2026"
  },
  {
    "id": "845642140977070110",
    "pseudo": "AmneziA_Kiru",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/10/2024"
  },
  {
    "id": "845682279669170248",
    "pseudo": "Walk'n",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/02/2025"
  },
  {
    "id": "846852644668833832",
    "pseudo": ".x𝕊hoot1Ø💯",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/04/2026"
  },
  {
    "id": "847156466958860328",
    "pseudo": "Noolan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/07/2025"
  },
  {
    "id": "847164072280850432",
    "pseudo": "Mercure",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/05/2024"
  },
  {
    "id": "847374891782766604",
    "pseudo": "NiKo-WoodY",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/09/2025"
  },
  {
    "id": "847473712693379122",
    "pseudo": "Blayd_msk",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/07/2025"
  },
  {
    "id": "847914773542469633",
    "pseudo": "EngagerBitos",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/07/2024"
  },
  {
    "id": "847934614781296680",
    "pseudo": "Palmito6101",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "01/01/2025"
  },
  {
    "id": "848521924299456533",
    "pseudo": "[1cl] Matt",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/08/2024"
  },
  {
    "id": "848637992272134165",
    "pseudo": "Snaptrox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/03/2026"
  },
  {
    "id": "849004578044510299",
    "pseudo": "rhumcharrette97k",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/10/2024"
  },
  {
    "id": "849337276491235408",
    "pseudo": "Cata Gf",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/12/2024"
  },
  {
    "id": "849726670407598130",
    "pseudo": "MonsterX770",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/02/2024"
  },
  {
    "id": "849990728305475607",
    "pseudo": "KXII",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2025"
  },
  {
    "id": "851216092974284840",
    "pseudo": "Courbe",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/07/2025"
  },
  {
    "id": "852253594135822388",
    "pseudo": "jokoko",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/05/2025"
  },
  {
    "id": "852259036141584415",
    "pseudo": "O0oROROo0O",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/12/2024"
  },
  {
    "id": "852261422503165952",
    "pseudo": "Fabio Valasquez",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2024"
  },
  {
    "id": "852447667338084352",
    "pseudo": "Mukannoo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/02/2026"
  },
  {
    "id": "852938423098671155",
    "pseudo": "jean laroche",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2024"
  },
  {
    "id": "853369770639753216",
    "pseudo": "Maxtitou06",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/04/2026"
  },
  {
    "id": "854090358899605504",
    "pseudo": "VK",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/11/2024"
  },
  {
    "id": "854446588906045470",
    "pseudo": "wikoz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2025"
  },
  {
    "id": "854784662122659921",
    "pseudo": "Math_adams",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/03/2026"
  },
  {
    "id": "855437178452049950",
    "pseudo": "⚜JĐP_5⚜",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/05/2025"
  },
  {
    "id": "855552580985552916",
    "pseudo": "XroyaleX",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2025"
  },
  {
    "id": "855666697952296961",
    "pseudo": "Dima",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "20/02/2024"
  },
  {
    "id": "855817909347024956",
    "pseudo": "SiCoBoO",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/09/2025"
  },
  {
    "id": "855952784670588948",
    "pseudo": "Zedrox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/08/2025"
  },
  {
    "id": "856454328943247360",
    "pseudo": "MEGS",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/04/2025"
  },
  {
    "id": "857901186781544459",
    "pseudo": "Albator77515",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2026"
  },
  {
    "id": "858124581143183400",
    "pseudo": "Denominateur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/07/2024"
  },
  {
    "id": "858258656558055445",
    "pseudo": "Olivinox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "858364272500015144",
    "pseudo": "SyndrOmatic",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/10/2024"
  },
  {
    "id": "858380471494115358",
    "pseudo": "Jeremy Mc Clane",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "24/04/2024"
  },
  {
    "id": "858404471247339540",
    "pseudo": "Mr.SeenTy",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "25/01/2025"
  },
  {
    "id": "858434771609059328",
    "pseudo": "Aqualand",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "05/05/2024"
  },
  {
    "id": "858634283102502932",
    "pseudo": "prapor",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/08/2024"
  },
  {
    "id": "858803841750401064",
    "pseudo": "Il-Dayto-lI",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/12/2025"
  },
  {
    "id": "858839940904779776",
    "pseudo": "sukuna33",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/06/2025"
  },
  {
    "id": "859374256138747916",
    "pseudo": "El Padre 750XX",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "02/05/2024"
  },
  {
    "id": "859562185059074100",
    "pseudo": "SDT FALKON971",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/08/2025"
  },
  {
    "id": "859783467230298142",
    "pseudo": "Henry Dexter / Vsaqx6089",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/05/2024"
  },
  {
    "id": "859784795516174347",
    "pseudo": "smecta05",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2026"
  },
  {
    "id": "859866400557629441",
    "pseudo": "Fredo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/12/2024"
  },
  {
    "id": "860462801146740736",
    "pseudo": "Fly_Semaj",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/02/2025"
  },
  {
    "id": "860862229888761856",
    "pseudo": "Rapido",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/01/2026"
  },
  {
    "id": "860918650357678103",
    "pseudo": "Bombo-//64//",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/02/2024"
  },
  {
    "id": "860982599682228225",
    "pseudo": "Tora_fugu_",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "01/02/2025"
  },
  {
    "id": "862017295882780682",
    "pseudo": "RookieStarzzz",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "08/09/2025"
  },
  {
    "id": "862073407947931678",
    "pseudo": "Nielsdg91",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/01/2025"
  },
  {
    "id": "863694616443093032",
    "pseudo": "lHlypno",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/11/2025"
  },
  {
    "id": "863777822119034890",
    "pseudo": "tonton92.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/06/2025"
  },
  {
    "id": "864133389531086848",
    "pseudo": "_touuune",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/01/2025"
  },
  {
    "id": "864881198215200788",
    "pseudo": "Wisskey",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/09/2025"
  },
  {
    "id": "865494581915156480",
    "pseudo": "Résistant",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/04/2026"
  },
  {
    "id": "866012060080668673",
    "pseudo": "Rsk",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/01/2025"
  },
  {
    "id": "866290465392033802",
    "pseudo": "Typhuss FR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/02/2026"
  },
  {
    "id": "866411915266097192",
    "pseudo": "Rogwar",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "06/04/2026"
  },
  {
    "id": "866881501386899496",
    "pseudo": "kauro",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/10/2024"
  },
  {
    "id": "867657055367069696",
    "pseudo": "NGK",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "26/01/2024"
  },
  {
    "id": "868628191479230484",
    "pseudo": "RS OverKill",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2026"
  },
  {
    "id": "868785509265178645",
    "pseudo": "Marl",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/01/2026"
  },
  {
    "id": "869009955116695562",
    "pseudo": "wumanjii",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/02/2024"
  },
  {
    "id": "869060098947940413",
    "pseudo": "VATOS",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/06/2024"
  },
  {
    "id": "869183103338430464",
    "pseudo": "Couscous Killer",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/01/2025"
  },
  {
    "id": "869221621167185932",
    "pseudo": "Apocalypse",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/05/2025"
  },
  {
    "id": "869231390758150254",
    "pseudo": "Géroni2b",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "08/01/2025"
  },
  {
    "id": "869247603282432060",
    "pseudo": "Masterchift_112",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/01/2026"
  },
  {
    "id": "869262683113922590",
    "pseudo": "Fexary_LMK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/02/2026"
  },
  {
    "id": "869303256705294346",
    "pseudo": "squillium",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/11/2024"
  },
  {
    "id": "870608154889687080",
    "pseudo": "Rayansl95",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2025"
  },
  {
    "id": "870625024535560202",
    "pseudo": "UGUZ2890",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/07/2024"
  },
  {
    "id": "871423315414224936",
    "pseudo": "Mumu_RTT",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/08/2025"
  },
  {
    "id": "871816659671871488",
    "pseudo": "MrFAUCON",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2025"
  },
  {
    "id": "871886962733240360",
    "pseudo": "Htzdf",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/03/2025"
  },
  {
    "id": "872186020467183626",
    "pseudo": "pierre",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/11/2025"
  },
  {
    "id": "872531029917839442",
    "pseudo": "Nd255",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/03/2025"
  },
  {
    "id": "873901006721806396",
    "pseudo": "titi4333",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/12/2024"
  },
  {
    "id": "874298792063664169",
    "pseudo": "Baroudeur de l'extrême",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/05/2024"
  },
  {
    "id": "874722051221495888",
    "pseudo": "MajorALEX117",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "875186750299975721",
    "pseudo": "BanditO",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/06/2025"
  },
  {
    "id": "875807987690795051",
    "pseudo": "Tom",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/06/2025"
  },
  {
    "id": "876754631978524692",
    "pseudo": "Briffou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/08/2024"
  },
  {
    "id": "876859270988197908",
    "pseudo": "BwM Neidr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2025"
  },
  {
    "id": "876869895441219655",
    "pseudo": "Sylblakcat",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/06/2025"
  },
  {
    "id": "877327426424823820",
    "pseudo": "shkodran",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/10/2025"
  },
  {
    "id": "877666277861228665",
    "pseudo": "SGT NounoursS88",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "14/04/2026"
  },
  {
    "id": "877692836571648011",
    "pseudo": "Fich_75",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "13/07/2025"
  },
  {
    "id": "877950308892958750",
    "pseudo": "ChatteDhow",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/05/2024"
  },
  {
    "id": "878296204226723890",
    "pseudo": "Neeys",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/03/2025"
  },
  {
    "id": "878965085127721062",
    "pseudo": "lilianxx52",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/01/2026"
  },
  {
    "id": "879019103547981846",
    "pseudo": "Ziggy74",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "13/01/2024"
  },
  {
    "id": "879494507098431529",
    "pseudo": "Dracolegeant",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/06/2025"
  },
  {
    "id": "879695012001116250",
    "pseudo": "FOLTiC Anto",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/12/2024"
  },
  {
    "id": "879700479720968203",
    "pseudo": "Ike Earp [-_-Frexxs-_-]",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/03/2026"
  },
  {
    "id": "879942747073699931",
    "pseudo": "Bsko",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/04/2025"
  },
  {
    "id": "880321210544685066",
    "pseudo": "Scott Brown (SbOnTheBlock)",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/02/2025"
  },
  {
    "id": "880461914411528192",
    "pseudo": "Rooblard",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/06/2025"
  },
  {
    "id": "880904975109214238",
    "pseudo": "Alexr15125",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/05/2025"
  },
  {
    "id": "881124877090824242",
    "pseudo": "Polo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/01/2026"
  },
  {
    "id": "881452962831011840",
    "pseudo": "Toxicoz iz back",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/01/2025"
  },
  {
    "id": "881471234959867925",
    "pseudo": "DrZowa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/08/2025"
  },
  {
    "id": "881681464578699365",
    "pseudo": "Goodzxn",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2026"
  },
  {
    "id": "881935520207368222",
    "pseudo": "ZifukurO-MrSale",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/07/2025"
  },
  {
    "id": "881979746177662996",
    "pseudo": "Atomix1610",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/03/2024"
  },
  {
    "id": "882711378811580456",
    "pseudo": "Sk8v!N",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/06/2025"
  },
  {
    "id": "883006820409561148",
    "pseudo": "Nifred",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/11/2024"
  },
  {
    "id": "883029112296443944",
    "pseudo": "Notorious K-IX",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/07/2025"
  },
  {
    "id": "883259446434881556",
    "pseudo": "Zoro",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/09/2024"
  },
  {
    "id": "883657991180673024",
    "pseudo": "NiceFight_-Sama",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/03/2026"
  },
  {
    "id": "884553525470851083",
    "pseudo": "Julyan__91",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2026"
  },
  {
    "id": "884594471633821706",
    "pseudo": "FMG_zeeldor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/12/2024"
  },
  {
    "id": "885189059339755591",
    "pseudo": "medoubvs60",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/06/2025"
  },
  {
    "id": "885190945589571654",
    "pseudo": "さ Gladix4",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "31/03/2024"
  },
  {
    "id": "885242612511047680",
    "pseudo": "Papate",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/03/2026"
  },
  {
    "id": "885580238350872576",
    "pseudo": "Koloko",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2025"
  },
  {
    "id": "885929083261825034",
    "pseudo": "阿什∙ Revxnge ∙艾丝",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2026"
  },
  {
    "id": "885963610982084609",
    "pseudo": "AnxxSV",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/07/2025"
  },
  {
    "id": "886582927528452107",
    "pseudo": "Pype",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/01/2026"
  },
  {
    "id": "887032114023919636",
    "pseudo": "Serix_BigBrother",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2025"
  },
  {
    "id": "887059485410078750",
    "pseudo": "Buzz91q",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/02/2026"
  },
  {
    "id": "888727773819064361",
    "pseudo": "rabin des bois#958",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/05/2024"
  },
  {
    "id": "889167182288797737",
    "pseudo": "CrazyNinjaaa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/02/2026"
  },
  {
    "id": "889624518245621810",
    "pseudo": "Galaxystar_FPS",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/04/2025"
  },
  {
    "id": "889744681381015612",
    "pseudo": "[1er cl]Kirito0Asuma",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/12/2024"
  },
  {
    "id": "889919522532917258",
    "pseudo": "Shimo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/06/2025"
  },
  {
    "id": "890289522930245663",
    "pseudo": "bastoss77",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/04/2024"
  },
  {
    "id": "891330964637233153",
    "pseudo": "lebibouamaystrot",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/07/2025"
  },
  {
    "id": "891392445206659154",
    "pseudo": "Antoinefr86",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2025"
  },
  {
    "id": "893164549044305931",
    "pseudo": "IlVeRziDeIl",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/06/2025"
  },
  {
    "id": "893261085371686944",
    "pseudo": "34Sanka34",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/09/2025"
  },
  {
    "id": "893526127644147743",
    "pseudo": "liviuledrare",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/03/2025"
  },
  {
    "id": "893956500316373053",
    "pseudo": "jager68567",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/03/2025"
  },
  {
    "id": "894134056718061598",
    "pseudo": "cartouche _fr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/06/2025"
  },
  {
    "id": "894629156476833832",
    "pseudo": "So_JoyBoy",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/02/2024"
  },
  {
    "id": "895004010711511070",
    "pseudo": "²REP",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2025"
  },
  {
    "id": "895022385181388831",
    "pseudo": "Quentin Ramirez",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/02/2025"
  },
  {
    "id": "895327209051541554",
    "pseudo": "SismyK",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/04/2025"
  },
  {
    "id": "896371127012704276",
    "pseudo": "Cheyroki",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/06/2024"
  },
  {
    "id": "896417606561595452",
    "pseudo": "MaaqsS",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/08/2025"
  },
  {
    "id": "897624576245235762",
    "pseudo": "Fenderjoe",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/12/2025"
  },
  {
    "id": "897852799914754058",
    "pseudo": "Stflo2b",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/08/2025"
  },
  {
    "id": "897870151947550751",
    "pseudo": "vArius Master",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2024"
  },
  {
    "id": "898286611131936798",
    "pseudo": "Benj",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2025"
  },
  {
    "id": "898456787412467763",
    "pseudo": "dtf83",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/07/2024"
  },
  {
    "id": "899070614629908532",
    "pseudo": "Lyonel",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/01/2026"
  },
  {
    "id": "900169982338535424",
    "pseudo": "xXLUCIFERXxytb",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/07/2025"
  },
  {
    "id": "900945052275204158",
    "pseudo": "Natha54",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2025"
  },
  {
    "id": "901197973998952508",
    "pseudo": "MR Noodles",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/10/2024"
  },
  {
    "id": "902625268672380969",
    "pseudo": "Springstenn",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/08/2025"
  },
  {
    "id": "902653834617307196",
    "pseudo": "Fluxy",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/02/2024"
  },
  {
    "id": "902998185360904214",
    "pseudo": "Matyoyo80",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/10/2025"
  },
  {
    "id": "903267672551211018",
    "pseudo": "L'astrophysicien",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/01/2024"
  },
  {
    "id": "904067575388991528",
    "pseudo": "elmir-agent_rupi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "904333034885615646",
    "pseudo": "CerclePinceau",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "24/03/2024"
  },
  {
    "id": "904470227075608576",
    "pseudo": "🍁Noctoz🍁",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/03/2025"
  },
  {
    "id": "904655445657022465",
    "pseudo": "Le Paysan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/01/2026"
  },
  {
    "id": "904862206678695976",
    "pseudo": "Adhémar ✝",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/06/2024"
  },
  {
    "id": "905089256270233691",
    "pseudo": "lucka00002654",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/07/2025"
  },
  {
    "id": "906190805918679101",
    "pseudo": "LeNain",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2024"
  },
  {
    "id": "906343584582729828",
    "pseudo": "waxer11qc",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/09/2025"
  },
  {
    "id": "906517042599985182",
    "pseudo": "Skyriz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/01/2025"
  },
  {
    "id": "906593496096440371",
    "pseudo": "ghost_killer",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/02/2025"
  },
  {
    "id": "906677873270743072",
    "pseudo": "shhhhh",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/09/2025"
  },
  {
    "id": "906947789743857665",
    "pseudo": "Magnity_Juju alias B15",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/10/2025"
  },
  {
    "id": "907108103248572436",
    "pseudo": "iWordZ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/01/2026"
  },
  {
    "id": "907620611206053909",
    "pseudo": "Rav3N",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2026"
  },
  {
    "id": "908029265604395058",
    "pseudo": "Grizzlygod9",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "01/03/2025"
  },
  {
    "id": "908675502095622196",
    "pseudo": "Ghorzil",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/04/2025"
  },
  {
    "id": "908757416940802078",
    "pseudo": "quent1",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/03/2026"
  },
  {
    "id": "908846288584454184",
    "pseudo": "eskea",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2026"
  },
  {
    "id": "909205924839845990",
    "pseudo": "Inferno_MG12",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/01/2026"
  },
  {
    "id": "910359196971704321",
    "pseudo": "mickmachine",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2025"
  },
  {
    "id": "910519688449130537",
    "pseudo": "Maceo4real",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/05/2024"
  },
  {
    "id": "911263895539286106",
    "pseudo": "BluntMan",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "23/12/2023"
  },
  {
    "id": "911584137507405824",
    "pseudo": "Taate",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/07/2024"
  },
  {
    "id": "911715568799850587",
    "pseudo": "stanmasot",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/08/2025"
  },
  {
    "id": "911911987024371723",
    "pseudo": "ladose",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2026"
  },
  {
    "id": "912079336218177576",
    "pseudo": "SuperSuperMesk1",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/08/2025"
  },
  {
    "id": "912407869721301042",
    "pseudo": "Verahamaa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/10/2025"
  },
  {
    "id": "912438955557933056",
    "pseudo": "Snykko83",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/05/2025"
  },
  {
    "id": "912603304993902592",
    "pseudo": "JS GOAT 13",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/04/2025"
  },
  {
    "id": "913121488767447080",
    "pseudo": "[BLEU] k7mone",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/01/2025"
  },
  {
    "id": "913165501021163520",
    "pseudo": "Nono [FR]",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/12/2025"
  },
  {
    "id": "913545417235525634",
    "pseudo": "Atheris [Ash]",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/07/2024"
  },
  {
    "id": "913563615536234526",
    "pseudo": "=MacFly738=",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/04/2025"
  },
  {
    "id": "913606306043150376",
    "pseudo": "DKaprioo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/11/2024"
  },
  {
    "id": "913944670491529216",
    "pseudo": "roulin jean",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/06/2024"
  },
  {
    "id": "914099688041500703",
    "pseudo": "DarkLord_Phoenix",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/03/2026"
  },
  {
    "id": "914179232257695815",
    "pseudo": "XxNino",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2026"
  },
  {
    "id": "914471948824752128",
    "pseudo": "El turFu V2🇨🇵",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/06/2025"
  },
  {
    "id": "914530802455437322",
    "pseudo": "uarted",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/10/2024"
  },
  {
    "id": "914606793710256201",
    "pseudo": "Vince594",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/02/2025"
  },
  {
    "id": "915518419632287774",
    "pseudo": "Helofy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/02/2025"
  },
  {
    "id": "915557920534573056",
    "pseudo": "Diek0m28",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/03/2025"
  },
  {
    "id": "915637848189841479",
    "pseudo": "nvs",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2025"
  },
  {
    "id": "915689222747340851",
    "pseudo": "Benjam",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/06/2025"
  },
  {
    "id": "916040849069064213",
    "pseudo": "tiboul paoleta",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2026"
  },
  {
    "id": "916265499912990720",
    "pseudo": "Renardo50",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "916447566097424394",
    "pseudo": "espryt1",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/02/2026"
  },
  {
    "id": "916698120488894496",
    "pseudo": "vesiacz.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/03/2026"
  },
  {
    "id": "916739827427319889",
    "pseudo": "IMP4CT ZEUS",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/12/2024"
  },
  {
    "id": "916807776997609523",
    "pseudo": "Rapolis",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/12/2024"
  },
  {
    "id": "917094860404707370",
    "pseudo": "Biinnch",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/03/2026"
  },
  {
    "id": "917147294208524289",
    "pseudo": "Arky",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/06/2025"
  },
  {
    "id": "917788065379008592",
    "pseudo": "ALVIINJR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/01/2025"
  },
  {
    "id": "917886392703545354",
    "pseudo": "SFF ADISS92",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/03/2024"
  },
  {
    "id": "918045312218718208",
    "pseudo": "LouisLeVrai",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/11/2025"
  },
  {
    "id": "918376220092141579",
    "pseudo": "EvilerPepper580",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/12/2024"
  },
  {
    "id": "918447250823348234",
    "pseudo": "Azrael",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/03/2025"
  },
  {
    "id": "918596404312678491",
    "pseudo": "therealyoyo.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/03/2025"
  },
  {
    "id": "919283366895968276",
    "pseudo": "youngshura",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/07/2025"
  },
  {
    "id": "919318919049789440",
    "pseudo": "Puma3735",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/11/2025"
  },
  {
    "id": "919362461189152768",
    "pseudo": "donyoyo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/10/2024"
  },
  {
    "id": "919646391129743400",
    "pseudo": "ST4N",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/05/2025"
  },
  {
    "id": "919653719543533610",
    "pseudo": "ilous_marius",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "919926903710826496",
    "pseudo": "XxDiablotinexX",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/11/2024"
  },
  {
    "id": "920012392782503976",
    "pseudo": "ChatCongolé",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "920034520454004776",
    "pseudo": "Naiiite",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/01/2025"
  },
  {
    "id": "920044414557098075",
    "pseudo": "Fairytary raiss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2025"
  },
  {
    "id": "920271205112627250",
    "pseudo": "imddd",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/04/2026"
  },
  {
    "id": "920285565591617546",
    "pseudo": "Soldat_ghost41",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2025"
  },
  {
    "id": "921009269481025536",
    "pseudo": "Dr_Manhattan00",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/11/2024"
  },
  {
    "id": "921072105699803187",
    "pseudo": "PANORAMIX",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "24/03/2025"
  },
  {
    "id": "921755940968071188",
    "pseudo": "Charco20 I Apex 1-1",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "17/02/2024"
  },
  {
    "id": "921935864030965780",
    "pseudo": "stubbysix5471",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/07/2025"
  },
  {
    "id": "922289240975482920",
    "pseudo": "WooooW",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2026"
  },
  {
    "id": "922293184892121088",
    "pseudo": "criticaldu38",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "31/05/2025"
  },
  {
    "id": "922799959416377354",
    "pseudo": "l’espagnol75",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/08/2025"
  },
  {
    "id": "923942518750584883",
    "pseudo": "Tim__l£gend",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/04/2026"
  },
  {
    "id": "924076522074153060",
    "pseudo": "Galax",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/04/2024"
  },
  {
    "id": "924240965076676648",
    "pseudo": "핒 핡 핡 핝 핖",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/07/2024"
  },
  {
    "id": "924323970407362600",
    "pseudo": "xXxIIIIxXx6196",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/02/2026"
  },
  {
    "id": "924382317919744092",
    "pseudo": "t.-2lr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/08/2025"
  },
  {
    "id": "924752322121302046",
    "pseudo": "Adam_64ml",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/06/2025"
  },
  {
    "id": "924814486047715439",
    "pseudo": "SuicideSnoop",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/02/2024"
  },
  {
    "id": "924860259825229896",
    "pseudo": "[BRE] Ciceron",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/03/2025"
  },
  {
    "id": "925325962466455562",
    "pseudo": "Golfe_littoral",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "05/03/2025"
  },
  {
    "id": "925363838197563433",
    "pseudo": "ThKev7226",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/08/2024"
  },
  {
    "id": "925483229450997851",
    "pseudo": "DCBLFR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2026"
  },
  {
    "id": "925787980998770781",
    "pseudo": "squichy_SpaceX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/11/2025"
  },
  {
    "id": "925796443338473534",
    "pseudo": "FMFKAWA33",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2025"
  },
  {
    "id": "926181697303769118",
    "pseudo": "Battonet",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/05/2025"
  },
  {
    "id": "926438115923607572",
    "pseudo": "GaaRaaXX",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/08/2025"
  },
  {
    "id": "926439642402791484",
    "pseudo": "petit_troll_02",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/08/2025"
  },
  {
    "id": "926553873093644370",
    "pseudo": "moxid.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2024"
  },
  {
    "id": "926787619122184212",
    "pseudo": "bastos-tsr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/11/2024"
  },
  {
    "id": "926878636525633546",
    "pseudo": "Nyarox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2025"
  },
  {
    "id": "926923776229269526",
    "pseudo": "zalox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/04/2026"
  },
  {
    "id": "927215907279876128",
    "pseudo": "LEBO987",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/03/2026"
  },
  {
    "id": "927219484316536842",
    "pseudo": "Florian4051",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/09/2025"
  },
  {
    "id": "927239847679250455",
    "pseudo": "Akao",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/04/2026"
  },
  {
    "id": "927270633782530068",
    "pseudo": "Guillian🥨",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/07/2024"
  },
  {
    "id": "927300380205932565",
    "pseudo": "thibaut hamel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/07/2025"
  },
  {
    "id": "927679526891302943",
    "pseudo": "RTX Tonyor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/11/2025"
  },
  {
    "id": "928037050853240872",
    "pseudo": "Nylrone🇨🇵",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/06/2024"
  },
  {
    "id": "928350053939163207",
    "pseudo": "Sick.side.army13",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "03/06/2025"
  },
  {
    "id": "928357399490859058",
    "pseudo": ".Cosanostra",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/08/2025"
  },
  {
    "id": "928975841768140850",
    "pseudo": "Hector",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/06/2024"
  },
  {
    "id": "929060869185363968",
    "pseudo": "Sgydos",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "19/12/2025"
  },
  {
    "id": "929084516465799208",
    "pseudo": "boyka9505",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2025"
  },
  {
    "id": "929204722508902470",
    "pseudo": "JNL_270",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "929313969703890984",
    "pseudo": "HylipSys",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/03/2025"
  },
  {
    "id": "929443197837533184",
    "pseudo": "Sangostan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2025"
  },
  {
    "id": "929676884738965525",
    "pseudo": "BZH",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/04/2024"
  },
  {
    "id": "929768607200706610",
    "pseudo": "hashh13",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/01/2026"
  },
  {
    "id": "929888715671736401",
    "pseudo": "KR_IMO_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/08/2025"
  },
  {
    "id": "930010413427486751",
    "pseudo": "Savage",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/09/2025"
  },
  {
    "id": "930194416306638908",
    "pseudo": "Dark_Unicorn574",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/08/2024"
  },
  {
    "id": "930499049373720686",
    "pseudo": "ВАРЕЅ | Міnt",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2024"
  },
  {
    "id": "930547042583969873",
    "pseudo": "🔸 B3nnySpC 🔸[Beckmann]",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/02/2025"
  },
  {
    "id": "930647466569760839",
    "pseudo": "Mss 𓄂",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/06/2024"
  },
  {
    "id": "930764698696159282",
    "pseudo": "FAKEONTOP",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/03/2025"
  },
  {
    "id": "930893589381283921",
    "pseudo": "_baguette_francaise_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/09/2025"
  },
  {
    "id": "930933071803469834",
    "pseudo": "F4TALITY_X9_",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "10/02/2026"
  },
  {
    "id": "931142421344038952",
    "pseudo": "Alban0s-X",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/09/2025"
  },
  {
    "id": "931609408427925614",
    "pseudo": "KWLI",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2024"
  },
  {
    "id": "931638220247154708",
    "pseudo": "Thecanadien345",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/11/2025"
  },
  {
    "id": "931851857725366352",
    "pseudo": "Chmay62",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/01/2026"
  },
  {
    "id": "931982743393427506",
    "pseudo": "Arthur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/08/2024"
  },
  {
    "id": "932247555046264834",
    "pseudo": "lelio8537",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2025"
  },
  {
    "id": "932309033422028843",
    "pseudo": "DJESSY86",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "932367355110129754",
    "pseudo": "Waym",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/01/2025"
  },
  {
    "id": "932405722019426344",
    "pseudo": "yass",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/12/2025"
  },
  {
    "id": "932603857274568704",
    "pseudo": "lefoue_27",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2026"
  },
  {
    "id": "932606338830311434",
    "pseudo": "Baaatard",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "933073465769095178",
    "pseudo": "Hotpoulet",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "03/07/2024"
  },
  {
    "id": "933423296073043988",
    "pseudo": "Ridouaneout",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/12/2025"
  },
  {
    "id": "933710940732542986",
    "pseudo": "elpotato",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "04/02/2024"
  },
  {
    "id": "934003101558525982",
    "pseudo": "Le-Niglo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/03/2026"
  },
  {
    "id": "934403176638087198",
    "pseudo": "leroumain",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2026"
  },
  {
    "id": "934527380993757205",
    "pseudo": "Mathéo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/01/2026"
  },
  {
    "id": "934556017138741318",
    "pseudo": "CHINOIS ROYAL",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/07/2025"
  },
  {
    "id": "934770352381386784",
    "pseudo": "HeadShot44",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/12/2025"
  },
  {
    "id": "934801068817256459",
    "pseudo": "Antonin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/12/2025"
  },
  {
    "id": "934833422038364160",
    "pseudo": "naimlvr78",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/01/2025"
  },
  {
    "id": "936229192402608168",
    "pseudo": "Ｇｒｏｏｋ",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "02/07/2025"
  },
  {
    "id": "936725177885151303",
    "pseudo": "ThomeDeMars",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/08/2024"
  },
  {
    "id": "936740098966446101",
    "pseudo": "Mc GIRZ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2025"
  },
  {
    "id": "936914781527490580",
    "pseudo": "Diablo7667",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/08/2024"
  },
  {
    "id": "937051300678471731",
    "pseudo": "Lenny2mgl",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2025"
  },
  {
    "id": "937175569278304297",
    "pseudo": "Le Nain",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/08/2024"
  },
  {
    "id": "937250668970921985",
    "pseudo": "𝖓𝖔𝖗K𝖆𝖝",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/04/2026"
  },
  {
    "id": "937289030398271558",
    "pseudo": "spudmonster666",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2024"
  },
  {
    "id": "937382255163244635",
    "pseudo": "Jollytoe",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/11/2025"
  },
  {
    "id": "937790893879074837",
    "pseudo": "woaw",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2024"
  },
  {
    "id": "938065757676392469",
    "pseudo": "Azzusah",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2026"
  },
  {
    "id": "938157525327573002",
    "pseudo": "CCH Mk6gti9947",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "14/01/2025"
  },
  {
    "id": "938180920429662208",
    "pseudo": "[SCHIZ] 🇫🇷Brad-junior74🇫🇷",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/03/2026"
  },
  {
    "id": "938362543028699136",
    "pseudo": "IrminKvasir",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/09/2024"
  },
  {
    "id": "938423052629311539",
    "pseudo": "_Rusko_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/05/2024"
  },
  {
    "id": "938467718884098048",
    "pseudo": "mychefgaming",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2024"
  },
  {
    "id": "938494714825539594",
    "pseudo": "SeptanzA",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/04/2026"
  },
  {
    "id": "938790007131484160",
    "pseudo": "𝔏𝔬𝔫𝔢𝔚𝔬𝔩𝔣𝔇𝔢𝔳𝔦𝔫",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/04/2025"
  },
  {
    "id": "939029273866547230",
    "pseudo": "Funkico",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2024"
  },
  {
    "id": "939502860108984340",
    "pseudo": "GaMax1254",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/10/2025"
  },
  {
    "id": "939505571772653608",
    "pseudo": "Phil Vic (Doublephil)",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2025"
  },
  {
    "id": "939845077604401222",
    "pseudo": "Brice Barbu",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2025"
  },
  {
    "id": "939909824626442321",
    "pseudo": "2nd classe Claykoz_",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "17/02/2024"
  },
  {
    "id": "939931420640559194",
    "pseudo": "⭐🌴wigingart🌴⭐",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/03/2024"
  },
  {
    "id": "940356854838616157",
    "pseudo": "yankee_alfa",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "31/05/2025"
  },
  {
    "id": "940525987777626142",
    "pseudo": "papayou54",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/08/2025"
  },
  {
    "id": "940700004690046996",
    "pseudo": "IGhost",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/03/2025"
  },
  {
    "id": "940972770249048105",
    "pseudo": "Mitsu.ie",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/04/2025"
  },
  {
    "id": "941587181418455060",
    "pseudo": "Antho2327b",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "09/06/2025"
  },
  {
    "id": "941783761815740437",
    "pseudo": "Predateur92",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "18/03/2026"
  },
  {
    "id": "942404164737187850",
    "pseudo": "DLD_Prod / U Boot",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/03/2025"
  },
  {
    "id": "942427810612518952",
    "pseudo": "lll_vroum_lll",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/06/2025"
  },
  {
    "id": "942976371578245142",
    "pseudo": "tittoine",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "17/07/2024"
  },
  {
    "id": "943092402539876442",
    "pseudo": "EnzoTaTuer",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "943116039300976701",
    "pseudo": "🔪👐🏽LV ON TOP🔪👐🏽",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/04/2026"
  },
  {
    "id": "943148957230592000",
    "pseudo": "DarkSideOn1",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/09/2025"
  },
  {
    "id": "943523958345588857",
    "pseudo": "LKDs8655",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "18/02/2026"
  },
  {
    "id": "944309857585086506",
    "pseudo": "El Padre",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/03/2025"
  },
  {
    "id": "944317821205229579",
    "pseudo": "🅲🅰🆁🆃🅷🅾🅾🅽",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/09/2025"
  },
  {
    "id": "944329323597398066",
    "pseudo": "Benjamin Kaiser",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2026"
  },
  {
    "id": "944330717461106708",
    "pseudo": "le seul, le vrai, l'unique !",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2026"
  },
  {
    "id": "944516939630399528",
    "pseudo": "Billy_Le_Borgne",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/06/2025"
  },
  {
    "id": "944934083161641012",
    "pseudo": "matteorabinand",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/12/2024"
  },
  {
    "id": "944980008689074287",
    "pseudo": "Pti-mel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/12/2025"
  },
  {
    "id": "944989257855017010",
    "pseudo": "crackbee",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/12/2025"
  },
  {
    "id": "945467647468929064",
    "pseudo": "fatche38",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/10/2024"
  },
  {
    "id": "945606696703778826",
    "pseudo": "Faxouse",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/07/2024"
  },
  {
    "id": "945747422968168488",
    "pseudo": "Lunexo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2025"
  },
  {
    "id": "945768758528577596",
    "pseudo": "Mmerguez Xx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/03/2025"
  },
  {
    "id": "946001704262959124",
    "pseudo": "Do Brasil Nono🇵🇹",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "946050742752534629",
    "pseudo": "Yvandu02",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/06/2025"
  },
  {
    "id": "946387426035765299",
    "pseudo": "DrivoOor FR",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/02/2025"
  },
  {
    "id": "946806873632411709",
    "pseudo": "Hugo_c",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/03/2025"
  },
  {
    "id": "947087824585379871",
    "pseudo": "lysian92i",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2025"
  },
  {
    "id": "947161344996696104",
    "pseudo": "CCH WazeToxic",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "03/03/2024"
  },
  {
    "id": "947247523750375434",
    "pseudo": "LaTaupe00",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/10/2024"
  },
  {
    "id": "947700584436359218",
    "pseudo": "MonsieurUn",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "13/06/2025"
  },
  {
    "id": "947855642784305224",
    "pseudo": "Sheitann",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2026"
  },
  {
    "id": "947896014516400138",
    "pseudo": "z",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/07/2024"
  },
  {
    "id": "948286015884365836",
    "pseudo": "axelh68",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2025"
  },
  {
    "id": "948323509149532170",
    "pseudo": "iZaack",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/07/2025"
  },
  {
    "id": "948324086952624129",
    "pseudo": "Keyser",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/06/2024"
  },
  {
    "id": "948712891572441188",
    "pseudo": "Cédric Delaboria",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/10/2025"
  },
  {
    "id": "948972831767662634",
    "pseudo": ".__luxx__.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/07/2025"
  },
  {
    "id": "949290664334614611",
    "pseudo": "Thilbault34",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/07/2025"
  },
  {
    "id": "949355985028411472",
    "pseudo": "ghost_killah11",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2025"
  },
  {
    "id": "949380075474780243",
    "pseudo": "BouBou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2024"
  },
  {
    "id": "949439278579060777",
    "pseudo": "kil",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/07/2025"
  },
  {
    "id": "949601829401026610",
    "pseudo": "Fugi304",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/03/2025"
  },
  {
    "id": "949624532895932416",
    "pseudo": "_Théo_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/09/2024"
  },
  {
    "id": "949857773095624716",
    "pseudo": "ed0tenseii",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/08/2025"
  },
  {
    "id": "950424495309590529",
    "pseudo": "Ratodu59",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/01/2024"
  },
  {
    "id": "951625903170023554",
    "pseudo": "Luckk_1970",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2026"
  },
  {
    "id": "951836112219947009",
    "pseudo": "Teuchinio",
    "role": "Soldat",
    "grade": "Adjudant Chef",
    "joinDate": "07/03/2025"
  },
  {
    "id": "951916028563173406",
    "pseudo": "pakrett",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/01/2026"
  },
  {
    "id": "952170411947352074",
    "pseudo": "Kanaaag",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/03/2025"
  },
  {
    "id": "953775690644349008",
    "pseudo": "adn",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2025"
  },
  {
    "id": "954609803584499722",
    "pseudo": "Rykov",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/06/2025"
  },
  {
    "id": "955599648393940992",
    "pseudo": "Tagilla QC",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/02/2025"
  },
  {
    "id": "955861610365321217",
    "pseudo": "apex",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/06/2025"
  },
  {
    "id": "955943500971655189",
    "pseudo": "Bender_T",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/03/2025"
  },
  {
    "id": "956110143555248139",
    "pseudo": "MOnstreeeeee",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2026"
  },
  {
    "id": "956832282050723840",
    "pseudo": "criiiiis",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2025"
  },
  {
    "id": "957020259863388221",
    "pseudo": "TRUE ADAM",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2025"
  },
  {
    "id": "957245748116852786",
    "pseudo": "Donkey",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2024"
  },
  {
    "id": "957273417021796362",
    "pseudo": "rulios_87b",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/02/2025"
  },
  {
    "id": "957373464363302993",
    "pseudo": "Qwentiinoo",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/06/2025"
  },
  {
    "id": "957555129853308959",
    "pseudo": "KuiQzz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/06/2025"
  },
  {
    "id": "957583639196086312",
    "pseudo": "Sire_Luis",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/03/2026"
  },
  {
    "id": "957860859646967828",
    "pseudo": "Pierce918",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/03/2025"
  },
  {
    "id": "958078948053487617",
    "pseudo": "DDZ-Møon-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/11/2025"
  },
  {
    "id": "958322156889051206",
    "pseudo": "Snickers",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/07/2025"
  },
  {
    "id": "958442764067024986",
    "pseudo": "sai",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2024"
  },
  {
    "id": "959600768179142676",
    "pseudo": "PFxS STArK",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "28/12/2024"
  },
  {
    "id": "960235504379527179",
    "pseudo": "RyZe KayZen",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/05/2024"
  },
  {
    "id": "960267875480895509",
    "pseudo": "Maxence24",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2025"
  },
  {
    "id": "960274015602245662",
    "pseudo": "Jacky2992",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/02/2025"
  },
  {
    "id": "960689059393572874",
    "pseudo": "lilkoazerty",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/06/2025"
  },
  {
    "id": "960979270182785085",
    "pseudo": "Gator",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/07/2024"
  },
  {
    "id": "962445561066311690",
    "pseudo": "BASBIN",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/07/2024"
  },
  {
    "id": "962651511178022912",
    "pseudo": "NytRoz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/03/2026"
  },
  {
    "id": "962713012320497744",
    "pseudo": "Gaming SportFr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/12/2024"
  },
  {
    "id": "962716646844268606",
    "pseudo": "Mayou_lux",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/08/2024"
  },
  {
    "id": "962824094716407889",
    "pseudo": "BFL #LMD",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2026"
  },
  {
    "id": "963526228759961600",
    "pseudo": "|-_-zeyrox-_-|",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "25/03/2026"
  },
  {
    "id": "964507099910529075",
    "pseudo": "_R2F",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/11/2025"
  },
  {
    "id": "964507978147438622",
    "pseudo": "ɢǟʐʐօ777",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/03/2025"
  },
  {
    "id": "964586548110696459",
    "pseudo": "Marmouz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/06/2025"
  },
  {
    "id": "964973312948199444",
    "pseudo": "potoriska33",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/06/2024"
  },
  {
    "id": "965896047257858098",
    "pseudo": "Mickey Graham",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/03/2025"
  },
  {
    "id": "966062421334696008",
    "pseudo": "Unyk Aizen",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/10/2024"
  },
  {
    "id": "966425775647621191",
    "pseudo": "Dr.BoB",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/02/2025"
  },
  {
    "id": "966712381998780546",
    "pseudo": "marouane13110",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/06/2025"
  },
  {
    "id": "966751321082462309",
    "pseudo": "Pioupiou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/11/2025"
  },
  {
    "id": "966799499559305266",
    "pseudo": "Antfight",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/05/2024"
  },
  {
    "id": "966799775343194152",
    "pseudo": "Capoeiracapo65",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2025"
  },
  {
    "id": "967065764425261097",
    "pseudo": "𝓦𝓸𝓵𝒇𝔂_ℛ𝓪𝓲𝓼𝓼𝓪",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/07/2024"
  },
  {
    "id": "967099384435191868",
    "pseudo": "_-Zadori_Mate-_",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2025"
  },
  {
    "id": "967116923110301797",
    "pseudo": "SNAKE",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2024"
  },
  {
    "id": "967201240532516884",
    "pseudo": "LIINO",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2024"
  },
  {
    "id": "967696475901554698",
    "pseudo": "doohit",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/06/2025"
  },
  {
    "id": "967951125733056533",
    "pseudo": "Gravity_Primex",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2026"
  },
  {
    "id": "968980687174656050",
    "pseudo": "agent942rapide",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "969318895687184464",
    "pseudo": "AGT TapRak",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/02/2025"
  },
  {
    "id": "970029859822792705",
    "pseudo": "kenlaw",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2026"
  },
  {
    "id": "970417217722277988",
    "pseudo": "JRSHANKS",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/07/2025"
  },
  {
    "id": "970957153982611466",
    "pseudo": "Superomain77265",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "28/01/2025"
  },
  {
    "id": "971600138428629042",
    "pseudo": "ObiYan SSj",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/06/2025"
  },
  {
    "id": "971693911573692447",
    "pseudo": "Halfdan",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/01/2024"
  },
  {
    "id": "972035509129990144",
    "pseudo": "keil_53",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "973795718605209601",
    "pseudo": "CorgiPowa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/07/2024"
  },
  {
    "id": "974210092423585832",
    "pseudo": "Superduke",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/12/2025"
  },
  {
    "id": "975530567955267589",
    "pseudo": "CSV,Roles",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/04/2024"
  },
  {
    "id": "975644314052984843",
    "pseudo": "MAGNIN",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/03/2025"
  },
  {
    "id": "975841684904624208",
    "pseudo": "Mathias",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/08/2025"
  },
  {
    "id": "977191593931079730",
    "pseudo": "YarkTZ",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/02/2025"
  },
  {
    "id": "977193169244532796",
    "pseudo": "KITCH",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/07/2025"
  },
  {
    "id": "978320602333085846",
    "pseudo": "MirageFr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/08/2024"
  },
  {
    "id": "979449874703605780",
    "pseudo": "Le_[C]APITALISTE",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2025"
  },
  {
    "id": "979714897204084796",
    "pseudo": "maydiwan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/01/2025"
  },
  {
    "id": "980083012165333083",
    "pseudo": "Trouble",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "980137948697743471",
    "pseudo": "sinay",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/10/2024"
  },
  {
    "id": "980208668836507708",
    "pseudo": "[LION] Ș亗ADS_Arkange™",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/08/2025"
  },
  {
    "id": "980711173416706099",
    "pseudo": "Lucas.0580",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/01/2026"
  },
  {
    "id": "980899785701720074",
    "pseudo": "Fryoudead",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/06/2025"
  },
  {
    "id": "980905867538997310",
    "pseudo": "Theo_Lzn",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/02/2025"
  },
  {
    "id": "981299785661288468",
    "pseudo": "lil'gwa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2024"
  },
  {
    "id": "982380334601629747",
    "pseudo": "fureur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/08/2025"
  },
  {
    "id": "982399867802492978",
    "pseudo": "Oxfyde",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/03/2026"
  },
  {
    "id": "982673612374962188",
    "pseudo": "airys10",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/08/2024"
  },
  {
    "id": "983061532193722409",
    "pseudo": "Geubyche-420",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/06/2025"
  },
  {
    "id": "983112647715209217",
    "pseudo": "oucaz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "983435227894517760",
    "pseudo": "Benzalkonium622",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "03/02/2024"
  },
  {
    "id": "983451174575419463",
    "pseudo": "Goups",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "22/03/2025"
  },
  {
    "id": "983781735101788234",
    "pseudo": "Mylan83",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/11/2025"
  },
  {
    "id": "984509986552033411",
    "pseudo": "SieteOcho",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/11/2025"
  },
  {
    "id": "984539618642911292",
    "pseudo": "skyzo3876",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2026"
  },
  {
    "id": "984558373104136233",
    "pseudo": "🇨🇭Tib R",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "13/01/2024"
  },
  {
    "id": "984936291772821575",
    "pseudo": "Sardine",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/11/2024"
  },
  {
    "id": "984953150823874601",
    "pseudo": "Naruto",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/04/2025"
  },
  {
    "id": "985164684867043358",
    "pseudo": "!!King!!",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/07/2024"
  },
  {
    "id": "985260776321318962",
    "pseudo": "Franck Costello",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/04/2026"
  },
  {
    "id": "986547401168928778",
    "pseudo": "MORTAD0N",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/12/2024"
  },
  {
    "id": "986728958294913064",
    "pseudo": "Cpl TOXIC",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "29/12/2023"
  },
  {
    "id": "987025946055954442",
    "pseudo": "BillyBOY",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/07/2025"
  },
  {
    "id": "987072971262791750",
    "pseudo": "botch",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "17/04/2024"
  },
  {
    "id": "987191932621045770",
    "pseudo": "MORE MAJORUM",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/09/2025"
  },
  {
    "id": "987333857068085288",
    "pseudo": "OTF",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/02/2025"
  },
  {
    "id": "987755919754547251",
    "pseudo": "BlackOld Red",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "02/05/2024"
  },
  {
    "id": "988480745033072702",
    "pseudo": "nono2toulon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2025"
  },
  {
    "id": "988815007506632784",
    "pseudo": "Thunder-Wolf_KB",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/12/2025"
  },
  {
    "id": "989184394902253598",
    "pseudo": "╭⊰ 𝒥ℯ𝓏𝓏 ⊱╮",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/07/2025"
  },
  {
    "id": "989797686867791913",
    "pseudo": "qtnnnn",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "989964713599324251",
    "pseudo": "$",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/07/2025"
  },
  {
    "id": "989966707760185365",
    "pseudo": "Nathan TELEMANS / N_ath3103",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/08/2025"
  },
  {
    "id": "989987097840586802",
    "pseudo": "PEPERE7110",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/04/2026"
  },
  {
    "id": "990277204099366912",
    "pseudo": "V̦Ì̫̬̱Ŗ̣̤̰U̷͇͚S̴̳͉n",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/06/2024"
  },
  {
    "id": "990717069513351209",
    "pseudo": "Omega-max",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/05/2025"
  },
  {
    "id": "991011887682580612",
    "pseudo": "Mikael",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/04/2024"
  },
  {
    "id": "991318353861955734",
    "pseudo": "BomoriaBE",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/09/2025"
  },
  {
    "id": "991373107396890635",
    "pseudo": "Striker",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/07/2025"
  },
  {
    "id": "991393819104903208",
    "pseudo": "denaryBinkie43",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/07/2024"
  },
  {
    "id": "991831318449111141",
    "pseudo": "Crow",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/05/2025"
  },
  {
    "id": "992452758928101447",
    "pseudo": "AWK",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/11/2024"
  },
  {
    "id": "993086002912559174",
    "pseudo": "Gyzmo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/11/2024"
  },
  {
    "id": "993224545001541652",
    "pseudo": "Hugo Becker",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/11/2024"
  },
  {
    "id": "993247168351715359",
    "pseudo": "Luciano13100",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/11/2024"
  },
  {
    "id": "993800864844222494",
    "pseudo": "Coucou les filles",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/07/2025"
  },
  {
    "id": "994677666202517624",
    "pseudo": "Zigzag",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "14/06/2024"
  },
  {
    "id": "994705358104821770",
    "pseudo": "ElBreizho",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/02/2026"
  },
  {
    "id": "995266617078460456",
    "pseudo": "IsloW84",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/01/2025"
  },
  {
    "id": "995489549406965831",
    "pseudo": "Harper0406",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/04/2024"
  },
  {
    "id": "995710570575704124",
    "pseudo": "PhanthomXBis",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/03/2025"
  },
  {
    "id": "995736159848247318",
    "pseudo": "Bouchmi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/12/2024"
  },
  {
    "id": "995790835528507573",
    "pseudo": "mohh2793",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/01/2024"
  },
  {
    "id": "996048481141674066",
    "pseudo": "[TBTC] SwanK!",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/01/2025"
  },
  {
    "id": "996117236760715314",
    "pseudo": "Slim3b304real",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2025"
  },
  {
    "id": "996519289496535110",
    "pseudo": "lolonyja",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2025"
  },
  {
    "id": "997610866486825073",
    "pseudo": "L0utre",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/01/2026"
  },
  {
    "id": "997862038862835843",
    "pseudo": "fifilad",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2026"
  },
  {
    "id": "997873769601306644",
    "pseudo": "nonoctp",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/05/2025"
  },
  {
    "id": "997885224019054602",
    "pseudo": "🇫🇷 • 𝒛𝒆𝒓𝒐𝒏",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/12/2024"
  },
  {
    "id": "998226655468339212",
    "pseudo": "-=NicoOYoDaa=-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/02/2025"
  },
  {
    "id": "998400725132509255",
    "pseudo": "mael92zk",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/12/2024"
  },
  {
    "id": "998490129595375636",
    "pseudo": "BlackRoz9617",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/09/2024"
  },
  {
    "id": "998905981280976956",
    "pseudo": "crakst1",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/01/2025"
  },
  {
    "id": "999079182803927070",
    "pseudo": "FildeFer",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/03/2025"
  },
  {
    "id": "999191680118956132",
    "pseudo": "lISkalll",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/12/2024"
  },
  {
    "id": "999288283303526520",
    "pseudo": "2CL Daguet",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "25/07/2024"
  },
  {
    "id": "999435736778539059",
    "pseudo": "! Zorka",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/02/2026"
  },
  {
    "id": "999624935628615710",
    "pseudo": "Blaageur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/02/2026"
  },
  {
    "id": "999758987442540614",
    "pseudo": "Mario",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/03/2026"
  },
  {
    "id": "1001324951191703682",
    "pseudo": "Niimah",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/06/2024"
  },
  {
    "id": "1001548702671966289",
    "pseudo": "mricLH",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/08/2024"
  },
  {
    "id": "1001929542379778190",
    "pseudo": "Leroy_303-",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/02/2026"
  },
  {
    "id": "1001985377223053313",
    "pseudo": "Betravier",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/12/2024"
  },
  {
    "id": "1002573470925848576",
    "pseudo": "axel0029121",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1002697746374991915",
    "pseudo": "John lemoineau /Temp-6215272",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/02/2026"
  },
  {
    "id": "1002774606979018792",
    "pseudo": "Alex_rtr64",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1003283868738134067",
    "pseudo": "Moine.R",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/06/2025"
  },
  {
    "id": "1003299448404840499",
    "pseudo": "Gaboche",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/10/2025"
  },
  {
    "id": "1003400584323416126",
    "pseudo": "πr Pierre",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/04/2026"
  },
  {
    "id": "1004065297440977038",
    "pseudo": "Theo27",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/09/2024"
  },
  {
    "id": "1004393718339608576",
    "pseudo": "Wilson",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "18/06/2025"
  },
  {
    "id": "1004728049729818745",
    "pseudo": "Cococjm21",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1005011448956715058",
    "pseudo": "IAB",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/05/2025"
  },
  {
    "id": "1005083519409737729",
    "pseudo": "zxbtom14",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/08/2024"
  },
  {
    "id": "1005412310866739243",
    "pseudo": "Elek",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/02/2025"
  },
  {
    "id": "1005522665232142428",
    "pseudo": "Truc",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2024"
  },
  {
    "id": "1005598499120877683",
    "pseudo": "sbeattie92",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2025"
  },
  {
    "id": "1005754085473009717",
    "pseudo": "Snake",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "17/02/2025"
  },
  {
    "id": "1005884529367601182",
    "pseudo": "John Reacher",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/05/2024"
  },
  {
    "id": "1006161135524917298",
    "pseudo": "Hope_sade",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/08/2025"
  },
  {
    "id": "1006346252386050128",
    "pseudo": "ghost_lead25",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "1007359846099722240",
    "pseudo": "demoniak74",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2026"
  },
  {
    "id": "1007582445656346644",
    "pseudo": "Pierre",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/08/2025"
  },
  {
    "id": "1008301543021367387",
    "pseudo": "The Reacher",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2025"
  },
  {
    "id": "1009726304825921586",
    "pseudo": "Zizine_Glitcheur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/09/2025"
  },
  {
    "id": "1010247344442323034",
    "pseudo": "Overlords-_-1001",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/07/2025"
  },
  {
    "id": "1010585937320874084",
    "pseudo": "Hash",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/05/2024"
  },
  {
    "id": "1010586783047753778",
    "pseudo": "Rominuus",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/05/2024"
  },
  {
    "id": "1010702728764325988",
    "pseudo": "Bryansch68",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/11/2024"
  },
  {
    "id": "1010865014846017616",
    "pseudo": "Thorn6695",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "10/04/2025"
  },
  {
    "id": "1010944344859095041",
    "pseudo": "SAn_Remi",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/06/2025"
  },
  {
    "id": "1011204506903650335",
    "pseudo": "RIZZATO/rizzato2802",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/08/2025"
  },
  {
    "id": "1012439775573188659",
    "pseudo": "MARS_-Thorfinn-_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2026"
  },
  {
    "id": "1012538943822123160",
    "pseudo": "Tim",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/01/2025"
  },
  {
    "id": "1012801675666391051",
    "pseudo": "LeQG92 [Solve]",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/04/2026"
  },
  {
    "id": "1013196513284988938",
    "pseudo": "SbrNiTroX117",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/03/2026"
  },
  {
    "id": "1013804191707320360",
    "pseudo": "Unknowbyzzz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/06/2025"
  },
  {
    "id": "1014375186465828886",
    "pseudo": "Tymot",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/02/2025"
  },
  {
    "id": "1015006645937520811",
    "pseudo": "SixOneFpsOfficiel",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/05/2025"
  },
  {
    "id": "1015303023834169365",
    "pseudo": "Redskins",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/06/2025"
  },
  {
    "id": "1015726878109204610",
    "pseudo": "Molly x Gunna",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/05/2024"
  },
  {
    "id": "1016081080832503930",
    "pseudo": "BuruOfficiel",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/08/2025"
  },
  {
    "id": "1016215582246457365",
    "pseudo": "Keriann95",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/02/2026"
  },
  {
    "id": "1016377830399017060",
    "pseudo": "Hurukhai",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2026"
  },
  {
    "id": "1016487232288329830",
    "pseudo": "🇨🇵GhEtTo CaRnAgE0🇨🇵",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/04/2025"
  },
  {
    "id": "1016955849635270717",
    "pseudo": "Spaghetti_Buddy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2026"
  },
  {
    "id": "1017043275183558706",
    "pseudo": "InsinuEl",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2025"
  },
  {
    "id": "1017480564573470751",
    "pseudo": "Spartan_Wisko",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/02/2025"
  },
  {
    "id": "1018138853430796418",
    "pseudo": "hapowh",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "1018271667681771530",
    "pseudo": "DarkDead 141",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/08/2025"
  },
  {
    "id": "1018462373339729920",
    "pseudo": "Olympia727",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/07/2025"
  },
  {
    "id": "1018502091842531348",
    "pseudo": "Jangoyo90",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "12/02/2025"
  },
  {
    "id": "1018506067107393598",
    "pseudo": "steynar",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "23/04/2024"
  },
  {
    "id": "1018530493970534452",
    "pseudo": "Citrus",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "18/08/2024"
  },
  {
    "id": "1018639829187174491",
    "pseudo": "ryan83590",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/07/2025"
  },
  {
    "id": "1018940216658100237",
    "pseudo": "Nicoprod666",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "1018948411472482434",
    "pseudo": "Lucios",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1018982429781921932",
    "pseudo": "Zaris",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/01/2026"
  },
  {
    "id": "1019132486309138432",
    "pseudo": "Polo_foxo🇫🇷",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/07/2025"
  },
  {
    "id": "1019279044941987860",
    "pseudo": "Jojolf1269",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "28/08/2025"
  },
  {
    "id": "1019307130433585225",
    "pseudo": "capitaine Rogers3810",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/04/2026"
  },
  {
    "id": "1020028577284112404",
    "pseudo": "Dadzo44",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/07/2025"
  },
  {
    "id": "1020848471810519131",
    "pseudo": "youngboy224",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/02/2024"
  },
  {
    "id": "1020983405623652423",
    "pseudo": "swayxzoulou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/03/2026"
  },
  {
    "id": "1021021637870637146",
    "pseudo": "O.Petrov | Zikosssssssss_91",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/04/2026"
  },
  {
    "id": "1021049564263882843",
    "pseudo": "Mike-mous67",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/07/2025"
  },
  {
    "id": "1021188639608291388",
    "pseudo": "golbert69",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "09/02/2024"
  },
  {
    "id": "1022195869895884882",
    "pseudo": "S_no",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/01/2025"
  },
  {
    "id": "1022458400359071864",
    "pseudo": "gauvador",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2025"
  },
  {
    "id": "1022636495259054190",
    "pseudo": "Bady59",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/02/2025"
  },
  {
    "id": "1022768114984820747",
    "pseudo": "CringeMan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/06/2024"
  },
  {
    "id": "1023313021310881833",
    "pseudo": "Yan86130",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/07/2025"
  },
  {
    "id": "1023366277173088256",
    "pseudo": "SaWcisse",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/08/2025"
  },
  {
    "id": "1023685733019549738",
    "pseudo": "llFourchettell",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/07/2025"
  },
  {
    "id": "1023759747956097115",
    "pseudo": "OBELIXdu53",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "15/08/2025"
  },
  {
    "id": "1023957830962786414",
    "pseudo": "martin 150802",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/02/2026"
  },
  {
    "id": "1024271267156738168",
    "pseudo": "blackdemon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/12/2024"
  },
  {
    "id": "1024442900601376779",
    "pseudo": "xiocxs",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/02/2024"
  },
  {
    "id": "1024630472300568627",
    "pseudo": "захаєв",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/12/2024"
  },
  {
    "id": "1024728478890860575",
    "pseudo": "NST-TreeFox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/01/2026"
  },
  {
    "id": "1025041963415781388",
    "pseudo": "MiNiouille Constater",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2024"
  },
  {
    "id": "1025042818890219592",
    "pseudo": "Kenobi_trice",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/06/2025"
  },
  {
    "id": "1025062503744544808",
    "pseudo": "Jeffrey",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2024"
  },
  {
    "id": "1025137815144648785",
    "pseudo": "B",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2025"
  },
  {
    "id": "1025823596922290310",
    "pseudo": "Max_20",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/08/2024"
  },
  {
    "id": "1025848660522717234",
    "pseudo": "FuZix",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/09/2024"
  },
  {
    "id": "1025852216118091916",
    "pseudo": "KiiL KiiL",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/12/2024"
  },
  {
    "id": "1026078763093594203",
    "pseudo": "Matviii",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "1026117440565948466",
    "pseudo": "Mlk",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/07/2024"
  },
  {
    "id": "1026244275849146409",
    "pseudo": "Hartsock-84",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/02/2025"
  },
  {
    "id": "1026265645576372245",
    "pseudo": "c lee zgaa81200",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/03/2024"
  },
  {
    "id": "1026488398766166137",
    "pseudo": "Cartman",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/12/2024"
  },
  {
    "id": "1026725282893287446",
    "pseudo": "Le corbeaux 🐦⬛",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/08/2025"
  },
  {
    "id": "1026881715492376726",
    "pseudo": "Polowww83",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/09/2025"
  },
  {
    "id": "1027958907450183710",
    "pseudo": "CPT. Pokeur",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "20/11/2023"
  },
  {
    "id": "1028015159442145383",
    "pseudo": "Sécateur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/02/2025"
  },
  {
    "id": "1028073820705263736",
    "pseudo": "tirailleurlulu",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2024"
  },
  {
    "id": "1028293151112302682",
    "pseudo": "Six",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/10/2024"
  },
  {
    "id": "1028385867246612520",
    "pseudo": "95",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/12/2024"
  },
  {
    "id": "1028734445676670976",
    "pseudo": "BENDO_78_06/ Sosa GUZMAN",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/06/2025"
  },
  {
    "id": "1029638676193476638",
    "pseudo": "nightmare_russe",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/12/2025"
  },
  {
    "id": "1030558778824855593",
    "pseudo": "Sensenilken",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/03/2025"
  },
  {
    "id": "1030620316029952100",
    "pseudo": "jujube",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/08/2025"
  },
  {
    "id": "1030907649350443082",
    "pseudo": "DarkZone842",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/08/2024"
  },
  {
    "id": "1031156506273521716",
    "pseudo": "Yatsou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/08/2024"
  },
  {
    "id": "1031926373327056959",
    "pseudo": "xXcyrianXx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2026"
  },
  {
    "id": "1032197229299105812",
    "pseudo": "tonioagri",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/01/2025"
  },
  {
    "id": "1032314055119089674",
    "pseudo": "Noah02800",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/05/2025"
  },
  {
    "id": "1033034758852202627",
    "pseudo": "✩𝐘𝐨𝐤𝐨✩",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/09/2024"
  },
  {
    "id": "1033104877309657108",
    "pseudo": "PH∀NTØM",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2025"
  },
  {
    "id": "1033466480802668574",
    "pseudo": "Jazz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/04/2024"
  },
  {
    "id": "1033504647144538122",
    "pseudo": "Lefracois45",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/03/2025"
  },
  {
    "id": "1033887391972348014",
    "pseudo": "piou^~^☭",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2024"
  },
  {
    "id": "1034132052255183030",
    "pseudo": "rom",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/02/2025"
  },
  {
    "id": "1034492785203622012",
    "pseudo": "Ben_milliard",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/05/2025"
  },
  {
    "id": "1034758979294863430",
    "pseudo": "the_games69610",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/10/2024"
  },
  {
    "id": "1034826640225734656",
    "pseudo": "BERLIN_1327",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/02/2025"
  },
  {
    "id": "1034832778027597864",
    "pseudo": "Geocyborg14",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/11/2025"
  },
  {
    "id": "1035107909064998964",
    "pseudo": "Enzovallerie272",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2026"
  },
  {
    "id": "1035124754329370704",
    "pseudo": "Costa Salvatore",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/11/2025"
  },
  {
    "id": "1035242908242153563",
    "pseudo": "JojoGamingZ",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/07/2025"
  },
  {
    "id": "1035245853721514085",
    "pseudo": "⚜Frère Nicodem⚜",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/08/2025"
  },
  {
    "id": "1035572125123215370",
    "pseudo": "Bravo_Nics1",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2025"
  },
  {
    "id": "1035942519508312085",
    "pseudo": "LE-VETERAN-DU-16",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/07/2025"
  },
  {
    "id": "1036399923026997248",
    "pseudo": "Maddrix988",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2025"
  },
  {
    "id": "1037018466248568852",
    "pseudo": "foudujeux54",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/12/2024"
  },
  {
    "id": "1037428431673098333",
    "pseudo": "Dyloi29",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/01/2025"
  },
  {
    "id": "1037451770441502720",
    "pseudo": "ADviperDay",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/01/2026"
  },
  {
    "id": "1037804167131054171",
    "pseudo": "padojules",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/11/2025"
  },
  {
    "id": "1037842138060300348",
    "pseudo": "BenyPew",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "01/04/2026"
  },
  {
    "id": "1038515443423522896",
    "pseudo": "Skyz-TarTinE",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "05/11/2025"
  },
  {
    "id": "1038713030172749844",
    "pseudo": "Lemzim",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/05/2024"
  },
  {
    "id": "1038731923478020147",
    "pseudo": "northman11",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/06/2024"
  },
  {
    "id": "1038776593226661928",
    "pseudo": "Dead For A Minute",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2024"
  },
  {
    "id": "1038842676776275978",
    "pseudo": "Kross_958",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/06/2025"
  },
  {
    "id": "1039918091754295308",
    "pseudo": "Temp-10245487",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2026"
  },
  {
    "id": "1039967326012973056",
    "pseudo": "enguerflan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/08/2025"
  },
  {
    "id": "1040216102963261520",
    "pseudo": "TikTok_ZARI07_",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "25/02/2026"
  },
  {
    "id": "1040363698906218510",
    "pseudo": "Psyk0 ✊",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/05/2024"
  },
  {
    "id": "1040638838877462548",
    "pseudo": "Ouaisouaisouaiii",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2026"
  },
  {
    "id": "1040726461948117013",
    "pseudo": "rynno_x",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/04/2025"
  },
  {
    "id": "1042399738013696090",
    "pseudo": "Vlad GT 86",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2026"
  },
  {
    "id": "1042428771048890438",
    "pseudo": "Mayo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2025"
  },
  {
    "id": "1042510832577302528",
    "pseudo": "xXErasmusXx#2536",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/03/2025"
  },
  {
    "id": "1042529043288952832",
    "pseudo": "Rayane Taghi 🇳🇱 (L’Hollandais)",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/06/2025"
  },
  {
    "id": "1042890846422433824",
    "pseudo": "heldroxx",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "01/10/2025"
  },
  {
    "id": "1043277856240844821",
    "pseudo": "la-truit06",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "13/12/2025"
  },
  {
    "id": "1043542727469563944",
    "pseudo": "YAKOMAN7700",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2024"
  },
  {
    "id": "1044996287554142218",
    "pseudo": "king luciferis",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/03/2024"
  },
  {
    "id": "1045028437884157983",
    "pseudo": "🧟 kevin Adamovich  / Swiko78",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/07/2025"
  },
  {
    "id": "1045073551381774456",
    "pseudo": "SkyFarer | 2dCl",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "19/03/2024"
  },
  {
    "id": "1045099907276615772",
    "pseudo": "slkev.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/06/2025"
  },
  {
    "id": "1045185168605986838",
    "pseudo": "Ragetime",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/01/2026"
  },
  {
    "id": "1045452275642011728",
    "pseudo": "nasyme",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1045472257838960680",
    "pseudo": "Floever",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "27/01/2026"
  },
  {
    "id": "1046060924974415982",
    "pseudo": "LePetitBleu",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/03/2025"
  },
  {
    "id": "1046336192452513802",
    "pseudo": "MDL™",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/04/2026"
  },
  {
    "id": "1046388048847442020",
    "pseudo": "Alexis",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/05/2025"
  },
  {
    "id": "1046519950879232010",
    "pseudo": "Romain bzh",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2025"
  },
  {
    "id": "1046525912126074961",
    "pseudo": "Pilsnackbigball's",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/04/2025"
  },
  {
    "id": "1046550055630417921",
    "pseudo": "Vincenthervieu",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2025"
  },
  {
    "id": "1046822011881652324",
    "pseudo": "homme_encouru",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2026"
  },
  {
    "id": "1047196958525227102",
    "pseudo": "ChipoLignac",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/04/2025"
  },
  {
    "id": "1047228363749740574",
    "pseudo": "lsbisness",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/04/2025"
  },
  {
    "id": "1047468507375341620",
    "pseudo": "JackMieleux",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "03/05/2024"
  },
  {
    "id": "1047755372057866280",
    "pseudo": "Le maréchal helldivers",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2025"
  },
  {
    "id": "1048253166002655314",
    "pseudo": "G HELL 17",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/04/2024"
  },
  {
    "id": "1048320124203061278",
    "pseudo": "Plamondon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/03/2025"
  },
  {
    "id": "1048322618605969449",
    "pseudo": "TinMar76",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2025"
  },
  {
    "id": "1048390118152605746",
    "pseudo": "devildog593",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1048633518705619094",
    "pseudo": "Fryyzeee",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/12/2025"
  },
  {
    "id": "1048644553122533436",
    "pseudo": "Capo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/08/2025"
  },
  {
    "id": "1048665938729386065",
    "pseudo": "DrZodiac01",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/07/2025"
  },
  {
    "id": "1048955289279418459",
    "pseudo": "djxav84",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/02/2025"
  },
  {
    "id": "1049723624694743162",
    "pseudo": "LeMatou30",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2025"
  },
  {
    "id": "1050365835929202718",
    "pseudo": "Babassito40460",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/09/2024"
  },
  {
    "id": "1050459410356506674",
    "pseudo": "sneweer",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/04/2024"
  },
  {
    "id": "1051423885603655710",
    "pseudo": "GLBC-renard",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/02/2026"
  },
  {
    "id": "1051794340948754473",
    "pseudo": "Darky_84170",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/03/2026"
  },
  {
    "id": "1051923945714102282",
    "pseudo": "TaTa_YoYo87",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/02/2026"
  },
  {
    "id": "1051948001440047255",
    "pseudo": "MAGIC 1-1 [Fr]",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/04/2025"
  },
  {
    "id": "1052645177057099786",
    "pseudo": "lapuchk6766",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "14/07/2024"
  },
  {
    "id": "1052695508898041857",
    "pseudo": "DarkKaOtik7",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "12/07/2025"
  },
  {
    "id": "1053029843102609578",
    "pseudo": "vikingsFr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/11/2024"
  },
  {
    "id": "1053088626038276106",
    "pseudo": "Alila",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/04/2024"
  },
  {
    "id": "1053251110946750474",
    "pseudo": "Goyzueta",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/05/2024"
  },
  {
    "id": "1053305229833150504",
    "pseudo": "tireur974",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2025"
  },
  {
    "id": "1053416455653294160",
    "pseudo": "Anity rp",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2024"
  },
  {
    "id": "1053674028151341066",
    "pseudo": "pics65",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/05/2024"
  },
  {
    "id": "1054582074901807105",
    "pseudo": "ribeiro1009 🇵🇹",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/12/2024"
  },
  {
    "id": "1054855881482833930",
    "pseudo": "avidfrag",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2026"
  },
  {
    "id": "1055233074503368894",
    "pseudo": "1CL.Stellaire_MouTon",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/02/2025"
  },
  {
    "id": "1055589580981665822",
    "pseudo": "Alexeï",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2026"
  },
  {
    "id": "1055886729191628891",
    "pseudo": "YiiQxS",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/05/2025"
  },
  {
    "id": "1056189818884853800",
    "pseudo": "Hmzzzzz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/12/2025"
  },
  {
    "id": "1056574216524275752",
    "pseudo": "D_RYAN21",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/01/2025"
  },
  {
    "id": "1056680339868754011",
    "pseudo": "Tsunami",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/11/2025"
  },
  {
    "id": "1056724678284157000",
    "pseudo": "Twitch DevilFox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/03/2025"
  },
  {
    "id": "1056890406719213639",
    "pseudo": "L2’",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2026"
  },
  {
    "id": "1057031106018431027",
    "pseudo": "𖦏ᛉ Езекиел ꑭ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/04/2025"
  },
  {
    "id": "1057052198405689444",
    "pseudo": "Vitozinho7",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "25/03/2024"
  },
  {
    "id": "1057368233436520448",
    "pseudo": "Jeangab9698",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/02/2025"
  },
  {
    "id": "1057428744916189274",
    "pseudo": "JuanCoupon45",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/12/2025"
  },
  {
    "id": "1057777575457476788",
    "pseudo": "pepito_JR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/04/2025"
  },
  {
    "id": "1058054197762850927",
    "pseudo": "ducky",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/11/2024"
  },
  {
    "id": "1058124226046984333",
    "pseudo": "Lueur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/09/2024"
  },
  {
    "id": "1058759381317079061",
    "pseudo": "Eyodav",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/06/2024"
  },
  {
    "id": "1059764498312986654",
    "pseudo": "Math3oy08",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/06/2025"
  },
  {
    "id": "1059851991658012713",
    "pseudo": "Raphaël#9151",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/12/2024"
  },
  {
    "id": "1059864829478846484",
    "pseudo": "Timoungwa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/02/2026"
  },
  {
    "id": "1059938879446208522",
    "pseudo": "I-Mzhrya-I",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/09/2025"
  },
  {
    "id": "1060115997014630490",
    "pseudo": "dataman",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "03/06/2025"
  },
  {
    "id": "1060217915011518604",
    "pseudo": "E.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/05/2025"
  },
  {
    "id": "1060249472677974037",
    "pseudo": "Mth.mre",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1060428423341813811",
    "pseudo": "Lamzzzzzz⚜",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/11/2025"
  },
  {
    "id": "1060630135784603759",
    "pseudo": "Denzel Murphy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/07/2025"
  },
  {
    "id": "1061188991090704425",
    "pseudo": "redban®",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2024"
  },
  {
    "id": "1061261332088897606",
    "pseudo": "Myckafow",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2025"
  },
  {
    "id": "1061327885106942013",
    "pseudo": "Hugonidas",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/08/2024"
  },
  {
    "id": "1061660704286986301",
    "pseudo": "𝕭𝖆𝖗𝖇𝖆𝖗𝖔𝖘𝖘𝖆",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/09/2025"
  },
  {
    "id": "1061942339737747506",
    "pseudo": "bartolomeew",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2024"
  },
  {
    "id": "1061965293192228914",
    "pseudo": "𝔇𝔧𝔦𝔡𝔧𝔦 𝔪𝔬𝔯𝔬𝔰𝔰𝔬",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/07/2025"
  },
  {
    "id": "1062042719981146152",
    "pseudo": "Le_SYAG_",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/06/2025"
  },
  {
    "id": "1062180580084699176",
    "pseudo": "Briskard",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2025"
  },
  {
    "id": "1062428789184925706",
    "pseudo": "ᵂ Romain",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2026"
  },
  {
    "id": "1062469781720150087",
    "pseudo": "Homicide006",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/03/2025"
  },
  {
    "id": "1062718094172237844",
    "pseudo": "Mokx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/12/2024"
  },
  {
    "id": "1063159264392253511",
    "pseudo": "nicotattoo09",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/03/2025"
  },
  {
    "id": "1063175772107456654",
    "pseudo": "Rook_707",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/02/2026"
  },
  {
    "id": "1063425057881329735",
    "pseudo": "Tripp Zavodskoy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/12/2024"
  },
  {
    "id": "1063517898519347212",
    "pseudo": "libanais-31",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/02/2025"
  },
  {
    "id": "1063881995647729815",
    "pseudo": "xAustin21",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/02/2025"
  },
  {
    "id": "1063950753108070500",
    "pseudo": "nvkaisen",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/04/2025"
  },
  {
    "id": "1064218756575928320",
    "pseudo": "Goofie",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "12/03/2024"
  },
  {
    "id": "1064496381580030042",
    "pseudo": "ACUA-_-NUGGETS",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2026"
  },
  {
    "id": "1064840049272823820",
    "pseudo": "blip_bedy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/12/2025"
  },
  {
    "id": "1064949478362193981",
    "pseudo": ".HDF | Clément_tech",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/12/2024"
  },
  {
    "id": "1065317898781999104",
    "pseudo": "thermoule",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/11/2025"
  },
  {
    "id": "1065351553260732417",
    "pseudo": "PaBloT_Le_PloT_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/04/2026"
  },
  {
    "id": "1065553771876339732",
    "pseudo": "Nick VALENTINE",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2026"
  },
  {
    "id": "1065694245530390569",
    "pseudo": "danidaux41",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2024"
  },
  {
    "id": "1065957603009634424",
    "pseudo": "xxshadowxx8753",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/04/2024"
  },
  {
    "id": "1066135718168100964",
    "pseudo": "ben laden",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2025"
  },
  {
    "id": "1066340215079321640",
    "pseudo": "Vald92",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/03/2025"
  },
  {
    "id": "1066415046290325694",
    "pseudo": "Minibolz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/09/2024"
  },
  {
    "id": "1066511903691640925",
    "pseudo": "PerplexeD",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/01/2025"
  },
  {
    "id": "1066536185540919447",
    "pseudo": "nonoburgerking de MONTMIRAIL",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/04/2025"
  },
  {
    "id": "1066545409943670784",
    "pseudo": "MTRSphinctR",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/08/2024"
  },
  {
    "id": "1066778352591052801",
    "pseudo": "Piloue990",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/08/2025"
  },
  {
    "id": "1066802568212271105",
    "pseudo": "dany",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/08/2025"
  },
  {
    "id": "1068254626371088444",
    "pseudo": "dayz 9z",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/08/2025"
  },
  {
    "id": "1068994425604292729",
    "pseudo": "timé_ntn",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/05/2025"
  },
  {
    "id": "1069316954403373086",
    "pseudo": "240 fps",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/07/2024"
  },
  {
    "id": "1069678866840436756",
    "pseudo": "Sorane 27",
    "role": "Soldat",
    "grade": "Adjudant",
    "joinDate": "28/08/2024"
  },
  {
    "id": "1069772507030225036",
    "pseudo": "XBX Cpt-Hornets",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/01/2025"
  },
  {
    "id": "1070030770065915964",
    "pseudo": "Sam_3a",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/03/2025"
  },
  {
    "id": "1070075705586614273",
    "pseudo": "thomaschampi372",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/01/2026"
  },
  {
    "id": "1070438089534746644",
    "pseudo": "Papoturbo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/07/2024"
  },
  {
    "id": "1070833493703131176",
    "pseudo": "Poisson-loup desséché",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/05/2025"
  },
  {
    "id": "1071821297463599205",
    "pseudo": "tounsiii",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/06/2024"
  },
  {
    "id": "1071887933876994149",
    "pseudo": "q_herbin20",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/01/2025"
  },
  {
    "id": "1071889519965655182",
    "pseudo": "Legueko",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/08/2025"
  },
  {
    "id": "1072968822304292985",
    "pseudo": "Licash",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/09/2025"
  },
  {
    "id": "1073233215512387594",
    "pseudo": "PICH",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "26/06/2025"
  },
  {
    "id": "1073355805618884649",
    "pseudo": "teignax",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/02/2026"
  },
  {
    "id": "1073551487852105738",
    "pseudo": "T-Glock-13",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2026"
  },
  {
    "id": "1073815851200938035",
    "pseudo": "rknunes94",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/04/2026"
  },
  {
    "id": "1074266078831726622",
    "pseudo": "olik",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/10/2024"
  },
  {
    "id": "1074672714167623710",
    "pseudo": "K_brtht",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2025"
  },
  {
    "id": "1074735429754028127",
    "pseudo": "Boogie3464",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2025"
  },
  {
    "id": "1075093215276965938",
    "pseudo": "chevalier alexandre",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/11/2024"
  },
  {
    "id": "1075177912778625154",
    "pseudo": "Clmle6",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/07/2025"
  },
  {
    "id": "1075482053417652244",
    "pseudo": "Ri126dudu-Ducks24",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1076527090209411114",
    "pseudo": "Matthieu",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/08/2024"
  },
  {
    "id": "1077257553110634596",
    "pseudo": "FeePasChier",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/10/2025"
  },
  {
    "id": "1077915711487348756",
    "pseudo": "Lam",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/03/2025"
  },
  {
    "id": "1077937199326183484",
    "pseudo": "Kélio",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/09/2025"
  },
  {
    "id": "1078069257948110868",
    "pseudo": "jubiste",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/02/2025"
  },
  {
    "id": "1078272093734588446",
    "pseudo": "Block-97351",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/07/2025"
  },
  {
    "id": "1078274251204861952",
    "pseudo": "marc_mcbl",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/07/2025"
  },
  {
    "id": "1078393204380028999",
    "pseudo": "erwann54",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/03/2025"
  },
  {
    "id": "1079105478338031766",
    "pseudo": "CA-leclown62",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/06/2025"
  },
  {
    "id": "1079392700111007844",
    "pseudo": "KOKO/KOKO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/11/2025"
  },
  {
    "id": "1079470333557493841",
    "pseudo": "Stan Diaz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/10/2024"
  },
  {
    "id": "1079526043481800744",
    "pseudo": "leoalaplage",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2026"
  },
  {
    "id": "1079740521888632852",
    "pseudo": "Nxs_foxit",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/09/2024"
  },
  {
    "id": "1080271765420392548",
    "pseudo": "VINZ91",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "23/03/2024"
  },
  {
    "id": "1081341897974489189",
    "pseudo": "Jkazama76",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/03/2025"
  },
  {
    "id": "1081657399150116925",
    "pseudo": "Black_Fluffy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2025"
  },
  {
    "id": "1081917342507864115",
    "pseudo": "syrix",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/02/2026"
  },
  {
    "id": "1081984420912832573",
    "pseudo": "sangui",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/02/2026"
  },
  {
    "id": "1082035731595272233",
    "pseudo": "Sk1T I OUPET",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2025"
  },
  {
    "id": "1082258523288764466",
    "pseudo": "Thé hashc",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/09/2024"
  },
  {
    "id": "1082421893300236298",
    "pseudo": "TrashTed",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/11/2025"
  },
  {
    "id": "1083091733212053527",
    "pseudo": "tobby",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/02/2026"
  },
  {
    "id": "1083474307566542909",
    "pseudo": "Skull-hard-1",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/09/2025"
  },
  {
    "id": "1083809896102907916",
    "pseudo": "s̷̷o̷̷l̷̷o̷",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/03/2026"
  },
  {
    "id": "1083820873015906304",
    "pseudo": "drikcho65",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/02/2025"
  },
  {
    "id": "1083836760091525170",
    "pseudo": "dimcraft",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/03/2024"
  },
  {
    "id": "1084068429029445723",
    "pseudo": "buck1508",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/10/2024"
  },
  {
    "id": "1084456325913792512",
    "pseudo": "xx_izi_rush_xx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/06/2025"
  },
  {
    "id": "1084509724151648428",
    "pseudo": "Bochti",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/01/2024"
  },
  {
    "id": "1084530614599962626",
    "pseudo": "Tankiaz66Fr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/02/2026"
  },
  {
    "id": "1085250298202837112",
    "pseudo": "dokes551",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/12/2024"
  },
  {
    "id": "1085874207755337738",
    "pseudo": "Kayman",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2026"
  },
  {
    "id": "1086021987530444921",
    "pseudo": "FKT portista",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "31/10/2025"
  },
  {
    "id": "1086330675587723304",
    "pseudo": "yukiodh",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/07/2025"
  },
  {
    "id": "1086347783851737148",
    "pseudo": "KLiBre DouZe",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2025"
  },
  {
    "id": "1086386052085850173",
    "pseudo": "carlitosanchez.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/10/2024"
  },
  {
    "id": "1086426043293904927",
    "pseudo": "Lukkss_38",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/08/2025"
  },
  {
    "id": "1086435926235955311",
    "pseudo": "ItsReyKoZz_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/06/2024"
  },
  {
    "id": "1086639734996078604",
    "pseudo": "Romain",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2025"
  },
  {
    "id": "1087500096641445989",
    "pseudo": "Stormkill81",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/03/2025"
  },
  {
    "id": "1087548945359699998",
    "pseudo": "Brixn974",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/05/2025"
  },
  {
    "id": "1087694164298301501",
    "pseudo": "WILLY38FR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "1088232964674027540",
    "pseudo": "TRK_Burwaii_Can",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/09/2025"
  },
  {
    "id": "1088553912308596746",
    "pseudo": "Grandkong",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "23/09/2025"
  },
  {
    "id": "1088682598030643221",
    "pseudo": "[WBL]Zé_zinio",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/04/2024"
  },
  {
    "id": "1089254775998140491",
    "pseudo": "dadalefoufou",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "18/03/2026"
  },
  {
    "id": "1089973856359415898",
    "pseudo": "Grandpapipoutin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/07/2025"
  },
  {
    "id": "1091355761705222276",
    "pseudo": "Mattwith2T",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2024"
  },
  {
    "id": "1091626468351676456",
    "pseudo": "KeKe All StarS",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/04/2024"
  },
  {
    "id": "1091705772490113115",
    "pseudo": "Mjjj14.88",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "19/11/2023"
  },
  {
    "id": "1092070003307724810",
    "pseudo": "59\"sweez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/09/2024"
  },
  {
    "id": "1092370947434098688",
    "pseudo": "Francky999",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/04/2024"
  },
  {
    "id": "1092505144765202542",
    "pseudo": "offficiel",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2025"
  },
  {
    "id": "1092907291021422592",
    "pseudo": "PekeBrr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/03/2026"
  },
  {
    "id": "1093215956249084046",
    "pseudo": "Spitfire_mk_la_1(sang yung)",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/08/2024"
  },
  {
    "id": "1093634190152581180",
    "pseudo": "zboub38",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/05/2024"
  },
  {
    "id": "1093773566790615171",
    "pseudo": "Mt",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/01/2025"
  },
  {
    "id": "1093999531785457764",
    "pseudo": "Lucas",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/02/2025"
  },
  {
    "id": "1094378638885003325",
    "pseudo": "gaspachooo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/05/2025"
  },
  {
    "id": "1094439278358048910",
    "pseudo": "DYLAMNEZIA",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/02/2025"
  },
  {
    "id": "1094754843849129994",
    "pseudo": "bvrtouns50",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2026"
  },
  {
    "id": "1095126726247452752",
    "pseudo": "SaMo",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/09/2025"
  },
  {
    "id": "1095317178632392734",
    "pseudo": "MaxeRleR2436",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/08/2024"
  },
  {
    "id": "1095692555900948611",
    "pseudo": "thierry674",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2025"
  },
  {
    "id": "1096089693084471447",
    "pseudo": "Higz0",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/03/2026"
  },
  {
    "id": "1096458136379981928",
    "pseudo": "crevettecrf🇨🇵",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/07/2025"
  },
  {
    "id": "1096503837944197200",
    "pseudo": "lazone69corleone",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/08/2025"
  },
  {
    "id": "1096740389769191534",
    "pseudo": "NICO7080 BE",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "29/03/2025"
  },
  {
    "id": "1096798651067670529",
    "pseudo": "paloma20062009",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "01/11/2025"
  },
  {
    "id": "1097120262618619954",
    "pseudo": "gilles40",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "15/02/2025"
  },
  {
    "id": "1097234116983935101",
    "pseudo": "L3TIO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2026"
  },
  {
    "id": "1097525995659075634",
    "pseudo": "JΛVΛ$kreaz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/06/2025"
  },
  {
    "id": "1097584872635236542",
    "pseudo": "Marwane",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/08/2025"
  },
  {
    "id": "1097592066592231466",
    "pseudo": "GhostFace",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/01/2026"
  },
  {
    "id": "1097921615314034748",
    "pseudo": "misterghost",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/04/2026"
  },
  {
    "id": "1098678417311928412",
    "pseudo": "Weston",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/03/2026"
  },
  {
    "id": "1099026887390531635",
    "pseudo": "Blaaxxyy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/05/2024"
  },
  {
    "id": "1099124625348247674",
    "pseudo": "Ralph(QC)",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/07/2025"
  },
  {
    "id": "1099998121150386197",
    "pseudo": "gwénégan (mathatox)",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/02/2024"
  },
  {
    "id": "1100074440278159381",
    "pseudo": "LittleLemon",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "31/08/2024"
  },
  {
    "id": "1100079364097441965",
    "pseudo": "djess2011",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2026"
  },
  {
    "id": "1100112548059172955",
    "pseudo": "Nicolininho-2b",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/03/2026"
  },
  {
    "id": "1100211818674274406",
    "pseudo": "dylanTCA.akimbo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2026"
  },
  {
    "id": "1100504011498606662",
    "pseudo": "⚔stefrossi⚔",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/03/2026"
  },
  {
    "id": "1100846125474381957",
    "pseudo": "BALTRA6733",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/03/2024"
  },
  {
    "id": "1100902711794335754",
    "pseudo": "GuGu",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/10/2024"
  },
  {
    "id": "1101161492453269526",
    "pseudo": "Mugiwara no Airfield",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/11/2025"
  },
  {
    "id": "1101357069719851120",
    "pseudo": "YOHAN KIZAWA",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/03/2026"
  },
  {
    "id": "1101608095483973722",
    "pseudo": "vince47",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/01/2025"
  },
  {
    "id": "1101827336241958952",
    "pseudo": "ladouille38",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/07/2024"
  },
  {
    "id": "1102261506890023043",
    "pseudo": "bennb.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/04/2025"
  },
  {
    "id": "1102610412568055868",
    "pseudo": "-CorgiPowa-",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2024"
  },
  {
    "id": "1103589952966643763",
    "pseudo": "Pomy8788",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/04/2026"
  },
  {
    "id": "1104129545226961096",
    "pseudo": "alctrzRTW",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2024"
  },
  {
    "id": "1104138016336904213",
    "pseudo": "Kenji jarac  /gaspard_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/01/2026"
  },
  {
    "id": "1104330032719069255",
    "pseudo": "vive l'empereur!",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2026"
  },
  {
    "id": "1104551698799788042",
    "pseudo": "LaSource",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/01/2025"
  },
  {
    "id": "1104782819995156511",
    "pseudo": "Thepunisher219",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/03/2025"
  },
  {
    "id": "1104811325483405372",
    "pseudo": "Ofen6",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2026"
  },
  {
    "id": "1104880827508207676",
    "pseudo": "Køjìrö",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/03/2024"
  },
  {
    "id": "1105121416422105139",
    "pseudo": "lakdar",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/05/2024"
  },
  {
    "id": "1105163127844257832",
    "pseudo": "JohMex",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2026"
  },
  {
    "id": "1105223708924182549",
    "pseudo": "Babozbab46",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/01/2026"
  },
  {
    "id": "1105439926805344287",
    "pseudo": "Anerushia",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/07/2025"
  },
  {
    "id": "1105753737437401109",
    "pseudo": "McGray",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/12/2024"
  },
  {
    "id": "1105915422030692442",
    "pseudo": "Kikou59720",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/01/2026"
  },
  {
    "id": "1105988537431634030",
    "pseudo": "Lesmilletdu62",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/04/2026"
  },
  {
    "id": "1106236607964647485",
    "pseudo": "yukzym13",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/05/2025"
  },
  {
    "id": "1106593801310589059",
    "pseudo": "eric_fr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2026"
  },
  {
    "id": "1106695120125968435",
    "pseudo": "S4T4N",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/02/2025"
  },
  {
    "id": "1107000492674003084",
    "pseudo": "M.72k",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/11/2025"
  },
  {
    "id": "1107031436273389688",
    "pseudo": "Leamziur",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "03/12/2025"
  },
  {
    "id": "1107422743667953825",
    "pseudo": "Darkos le Régicide !!",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/08/2024"
  },
  {
    "id": "1108492260049432586",
    "pseudo": "ROI HENNOK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/01/2025"
  },
  {
    "id": "1109167377536532510",
    "pseudo": "TN75",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/10/2025"
  },
  {
    "id": "1109580191044477099",
    "pseudo": "Cpl.Chef LeMerovingien (Sengo)",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "11/08/2024"
  },
  {
    "id": "1109871403324407849",
    "pseudo": "dream01",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2025"
  },
  {
    "id": "1109971299083763784",
    "pseudo": "Fikray84",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/05/2025"
  },
  {
    "id": "1110494921112178800",
    "pseudo": "Abzalon.",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "22/09/2024"
  },
  {
    "id": "1110549869455753268",
    "pseudo": "NextRoss63",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/04/2025"
  },
  {
    "id": "1111651733530230925",
    "pseudo": "Hoot24",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1112726321198551130",
    "pseudo": "VULKANO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/03/2025"
  },
  {
    "id": "1112826470046388234",
    "pseudo": "G4Bsublime",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/07/2025"
  },
  {
    "id": "1113279294928593016",
    "pseudo": "junit269",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/02/2024"
  },
  {
    "id": "1113475007193034762",
    "pseudo": "Mezzzx_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/11/2025"
  },
  {
    "id": "1115017016307368026",
    "pseudo": "Aynox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/04/2025"
  },
  {
    "id": "1115296228410933259",
    "pseudo": "Dam_0151",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2026"
  },
  {
    "id": "1115335323501727945",
    "pseudo": "Owen_1799",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/08/2025"
  },
  {
    "id": "1115584999991820328",
    "pseudo": "BiG_RayZzer",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/05/2025"
  },
  {
    "id": "1115603684907290624",
    "pseudo": "OrKiTeK",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/08/2025"
  },
  {
    "id": "1116009371554545724",
    "pseudo": "II AnTo II",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/07/2024"
  },
  {
    "id": "1116109289367543849",
    "pseudo": "ZANGIEF",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "23/03/2026"
  },
  {
    "id": "1118875466246402138",
    "pseudo": "paco esperanza",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/02/2025"
  },
  {
    "id": "1118898466538672279",
    "pseudo": "NICO Dead",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/11/2025"
  },
  {
    "id": "1119004347867607131",
    "pseudo": "l Ryüjinn l",
    "role": "Soldat",
    "grade": "Major",
    "joinDate": "24/10/2024"
  },
  {
    "id": "1119757286303350816",
    "pseudo": "Manu_Le_Coq69   yaya SXF",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/06/2025"
  },
  {
    "id": "1119952401852534835",
    "pseudo": "Dick aprio/Darckoturi",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "16/02/2025"
  },
  {
    "id": "1120299209011245096",
    "pseudo": "snk7691",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/09/2025"
  },
  {
    "id": "1120395615617159319",
    "pseudo": "Bemix",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/01/2025"
  },
  {
    "id": "1120758664211476592",
    "pseudo": "Neokzir",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1120759005925605487",
    "pseudo": "Niclabeil",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2025"
  },
  {
    "id": "1121042922024992819",
    "pseudo": "tupcrack27",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/05/2025"
  },
  {
    "id": "1121389412257902642",
    "pseudo": "killa6x3",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/02/2026"
  },
  {
    "id": "1121540469361487902",
    "pseudo": "DaftPunk1265",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/02/2025"
  },
  {
    "id": "1121891712424489050",
    "pseudo": "yvrailou🇷🇺",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1122118092777078796",
    "pseudo": "Shapatti59",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "15/11/2025"
  },
  {
    "id": "1122233182167777570",
    "pseudo": "Berserk",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2025"
  },
  {
    "id": "1122291382934065245",
    "pseudo": "mrsv4",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/02/2025"
  },
  {
    "id": "1123333254322335886",
    "pseudo": "EtheRealOpS",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/09/2025"
  },
  {
    "id": "1124770516377538651",
    "pseudo": "OsirisTW",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2025"
  },
  {
    "id": "1124823037871669450",
    "pseudo": "Hawky's Katarn",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2025"
  },
  {
    "id": "1125193574657564752",
    "pseudo": "As2piik",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/03/2026"
  },
  {
    "id": "1125355488595411015",
    "pseudo": "LUNATIK_REAXZ",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/08/2025"
  },
  {
    "id": "1125761154422153226",
    "pseudo": "Noa._.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2026"
  },
  {
    "id": "1127219815690539069",
    "pseudo": "JCEY",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2025"
  },
  {
    "id": "1127346790660837506",
    "pseudo": "PainAK",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2025"
  },
  {
    "id": "1127635936939876447",
    "pseudo": "Reskape958",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/06/2025"
  },
  {
    "id": "1128015176059330741",
    "pseudo": "123",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/07/2025"
  },
  {
    "id": "1128073605104812223",
    "pseudo": "HS_rafleuse",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/02/2026"
  },
  {
    "id": "1128384522011017379",
    "pseudo": "Cpl . SANTAMUERTE 🇺🇸",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/01/2026"
  },
  {
    "id": "1128402689433272432",
    "pseudo": "floxy__",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2025"
  },
  {
    "id": "1129019680808513536",
    "pseudo": "Gabeuh",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2026"
  },
  {
    "id": "1129069694368882792",
    "pseudo": "Machin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/02/2024"
  },
  {
    "id": "1129106959266746408",
    "pseudo": "°Yk° P - Cayo",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/04/2025"
  },
  {
    "id": "1129150407432749267",
    "pseudo": "Inca",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/04/2024"
  },
  {
    "id": "1129327855092908055",
    "pseudo": "Quanticoo25",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "28/02/2026"
  },
  {
    "id": "1129430097179451503",
    "pseudo": "Ladinde",
    "role": "Soldat",
    "grade": "Sergent",
    "joinDate": "17/06/2025"
  },
  {
    "id": "1129440258895921193",
    "pseudo": "Lululanantaise74",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/04/2026"
  },
  {
    "id": "1129563683895382066",
    "pseudo": "Montana-klsh",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/07/2025"
  },
  {
    "id": "1130523064514379947",
    "pseudo": "tiny_toon13",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/01/2025"
  },
  {
    "id": "1130901391888625664",
    "pseudo": "[P²] Alexis9177",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/01/2025"
  },
  {
    "id": "1131285892649193615",
    "pseudo": "Jupit91",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/07/2025"
  },
  {
    "id": "1131295132050792469",
    "pseudo": "frouloux.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/03/2025"
  },
  {
    "id": "1131331897310576740",
    "pseudo": "lachneck",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/11/2025"
  },
  {
    "id": "1131342897506168902",
    "pseudo": "ROCKST4R",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/02/2025"
  },
  {
    "id": "1131352870386671766",
    "pseudo": "EL_BANDITO_POLO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/03/2026"
  },
  {
    "id": "1132011978328645695",
    "pseudo": "Big Black712",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/12/2024"
  },
  {
    "id": "1132026829759328328",
    "pseudo": "Lenainfernal",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/01/2026"
  },
  {
    "id": "1132031623022514307",
    "pseudo": "hater’🕸",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/02/2025"
  },
  {
    "id": "1132059999280058468",
    "pseudo": "south106",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/08/2024"
  },
  {
    "id": "1132091933091692635",
    "pseudo": "Benchow",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/05/2025"
  },
  {
    "id": "1132373835753193494",
    "pseudo": "BRONX",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/06/2025"
  },
  {
    "id": "1132376268181086318",
    "pseudo": "redevilxhunter",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/01/2025"
  },
  {
    "id": "1132594721118765076",
    "pseudo": "Charles Fenet",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2025"
  },
  {
    "id": "1132623177302949888",
    "pseudo": "Etienne00725",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/02/2025"
  },
  {
    "id": "1132666041902837800",
    "pseudo": "worm",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2026"
  },
  {
    "id": "1132929605708283914",
    "pseudo": "IV blackwater",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "16/05/2024"
  },
  {
    "id": "1133004503856193576",
    "pseudo": "dl.romain",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/11/2024"
  },
  {
    "id": "1133139762887282688",
    "pseudo": "Jahmoujj-Cronik",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2026"
  },
  {
    "id": "1133146410162864191",
    "pseudo": "Mikecierra#3430",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2025"
  },
  {
    "id": "1133441270019264553",
    "pseudo": "tim_tim_79#8914",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/07/2025"
  },
  {
    "id": "1133442590348423178",
    "pseudo": "GoulagExpress",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/08/2025"
  },
  {
    "id": "1133850107394150452",
    "pseudo": "MLPgamingFr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/10/2025"
  },
  {
    "id": "1134373905394581514",
    "pseudo": "LeBigorneau",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/08/2025"
  },
  {
    "id": "1134621926862618745",
    "pseudo": "Moha",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/03/2025"
  },
  {
    "id": "1135212744078000178",
    "pseudo": "008955",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/08/2025"
  },
  {
    "id": "1135561475981856888",
    "pseudo": "Pirateilan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/11/2025"
  },
  {
    "id": "1135671084096692234",
    "pseudo": "Qwerty",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2026"
  },
  {
    "id": "1135952567315214396",
    "pseudo": "Kader31DZ8435",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/09/2025"
  },
  {
    "id": "1135975893236465735",
    "pseudo": "STAAR-PLATINIUM",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2026"
  },
  {
    "id": "1136090607555719348",
    "pseudo": "[BRI]Tyler Odssonne",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/02/2026"
  },
  {
    "id": "1136290360344182966",
    "pseudo": "Eliott le grand",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/06/2025"
  },
  {
    "id": "1136672062379925565",
    "pseudo": "HAZERO29",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/09/2024"
  },
  {
    "id": "1138162632919109673",
    "pseudo": "Dylan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/08/2025"
  },
  {
    "id": "1138189598321819738",
    "pseudo": "Antonio",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/03/2025"
  },
  {
    "id": "1138784657480089682",
    "pseudo": "Maxou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/12/2025"
  },
  {
    "id": "1139187916602609694",
    "pseudo": "Scorpion5935",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/11/2025"
  },
  {
    "id": "1139262349467983994",
    "pseudo": "COT_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2025"
  },
  {
    "id": "1139480799297667072",
    "pseudo": "MIINIBALETTE67",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/03/2026"
  },
  {
    "id": "1139827571446521927",
    "pseudo": "nathan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/10/2025"
  },
  {
    "id": "1139873542759006259",
    "pseudo": "Jonathan0199",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/07/2025"
  },
  {
    "id": "1139893684498878545",
    "pseudo": "NoKto42-rcd",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/01/2026"
  },
  {
    "id": "1139983450305204254",
    "pseudo": "Ricko62000",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2024"
  },
  {
    "id": "1140039117909004308",
    "pseudo": "xINNU_ArSeNiC--",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/07/2025"
  },
  {
    "id": "1140117603348643840",
    "pseudo": "Charenton",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/05/2024"
  },
  {
    "id": "1140337259384688842",
    "pseudo": "Goroxshek🔗",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/08/2025"
  },
  {
    "id": "1140673443218599966",
    "pseudo": "Dodo4",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1140796926850236488",
    "pseudo": "我吃我的便便",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/02/2024"
  },
  {
    "id": "1140991058789015553",
    "pseudo": "Pheonix",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "1141394534702514267",
    "pseudo": "Cylex_off",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/02/2025"
  },
  {
    "id": "1141467905129726002",
    "pseudo": "honorifique",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/02/2025"
  },
  {
    "id": "1141813335474581644",
    "pseudo": "6JFK9",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/05/2024"
  },
  {
    "id": "1141889063616512100",
    "pseudo": "myself",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/04/2024"
  },
  {
    "id": "1142091472863240292",
    "pseudo": "kinteki",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/01/2026"
  },
  {
    "id": "1142781465801797734",
    "pseudo": "Pasto",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/01/2025"
  },
  {
    "id": "1143124113502781452",
    "pseudo": "geminia42",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/07/2025"
  },
  {
    "id": "1143255649711571098",
    "pseudo": "RAYAN",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/11/2025"
  },
  {
    "id": "1143564502428819498",
    "pseudo": "T²D",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/05/2025"
  },
  {
    "id": "1143953555850547240",
    "pseudo": "Latruelledemounir",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/07/2024"
  },
  {
    "id": "1143976151530864751",
    "pseudo": "Ares56",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "24/05/2024"
  },
  {
    "id": "1143987767618048122",
    "pseudo": "Top Serveursˢᶻ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/11/2024"
  },
  {
    "id": "1144028538522046515",
    "pseudo": "LE RUSSE 🩸☠",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/04/2026"
  },
  {
    "id": "1144050331462938774",
    "pseudo": "Ryuk--LM(ps5)",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/07/2025"
  },
  {
    "id": "1144247276726910976",
    "pseudo": "ACHILLE_HK",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2026"
  },
  {
    "id": "1144740350276157650",
    "pseudo": "zeus",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/05/2024"
  },
  {
    "id": "1144755139933122630",
    "pseudo": "GhNoR4",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2025"
  },
  {
    "id": "1144908987209371760",
    "pseudo": "Bérenger",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "17/04/2026"
  },
  {
    "id": "1144978122480042064",
    "pseudo": "🇷🇺Paoli🇷🇺",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/06/2025"
  },
  {
    "id": "1145009000237240440",
    "pseudo": "alarach",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/08/2024"
  },
  {
    "id": "1145398530719088640",
    "pseudo": "SOAP#2084",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/08/2024"
  },
  {
    "id": "1145836909050998944",
    "pseudo": "FL4SH",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "22/02/2025"
  },
  {
    "id": "1145992266457034752",
    "pseudo": "XtremeDelta",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/02/2026"
  },
  {
    "id": "1146049726349840495",
    "pseudo": "roukmout",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/03/2026"
  },
  {
    "id": "1146059080704733287",
    "pseudo": "DTCGhost 😼",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/08/2025"
  },
  {
    "id": "1146163582925553714",
    "pseudo": "Flazegamer",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/12/2024"
  },
  {
    "id": "1146859789633191986",
    "pseudo": "tom.tof.37",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/08/2025"
  },
  {
    "id": "1146870968761978981",
    "pseudo": "pierredam24200",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/06/2025"
  },
  {
    "id": "1147517129323712532",
    "pseudo": "OmgTheBigBoss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/07/2024"
  },
  {
    "id": "1147848021439164556",
    "pseudo": "𓆩𝕿𝖍𝖊𝖔𓆪",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/01/2025"
  },
  {
    "id": "1147885560237666435",
    "pseudo": "asphyx21",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2025"
  },
  {
    "id": "1148195938695905350",
    "pseudo": "doomotek",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/02/2024"
  },
  {
    "id": "1148991386633392128",
    "pseudo": "! kzn",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/08/2025"
  },
  {
    "id": "1149143261047423106",
    "pseudo": "math_qc_granblon/matt Taylor",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "17/10/2025"
  },
  {
    "id": "1149145740434747462",
    "pseudo": "Kiwiescobar",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/04/2026"
  },
  {
    "id": "1149365331190624277",
    "pseudo": "Pro jap",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/12/2024"
  },
  {
    "id": "1149832675792793720",
    "pseudo": "MLTFR. USalphadelta",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/07/2024"
  },
  {
    "id": "1150122133884768276",
    "pseudo": "Zér0",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/12/2024"
  },
  {
    "id": "1150154296030142604",
    "pseudo": "Matheo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/07/2025"
  },
  {
    "id": "1151197343740346400",
    "pseudo": "Lumine",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/08/2025"
  },
  {
    "id": "1151217710567534642",
    "pseudo": "Stubb",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "09/05/2025"
  },
  {
    "id": "1151500524634521741",
    "pseudo": "RYZ❄H",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/06/2025"
  },
  {
    "id": "1151605223941484657",
    "pseudo": "Jerem59m",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/11/2024"
  },
  {
    "id": "1152283518701936751",
    "pseudo": "Tonio",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/04/2024"
  },
  {
    "id": "1152360911244365896",
    "pseudo": "itsBaijaan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "1152692297134247986",
    "pseudo": "Ballon345676",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/10/2024"
  },
  {
    "id": "1152978442883694682",
    "pseudo": "Legost10",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/01/2025"
  },
  {
    "id": "1153286121481060394",
    "pseudo": "Ligmahollowpoint",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/02/2025"
  },
  {
    "id": "1153420116273405962",
    "pseudo": "pouloulou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1154497983040213052",
    "pseudo": "Chazzy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/01/2025"
  },
  {
    "id": "1154521517988794480",
    "pseudo": "Soozyks",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/01/2025"
  },
  {
    "id": "1154867104500162571",
    "pseudo": "Kewell",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/05/2024"
  },
  {
    "id": "1155158812941094954",
    "pseudo": "Julio Rodiguez",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/06/2024"
  },
  {
    "id": "1155427493227008031",
    "pseudo": "Mydemon27",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "10/01/2024"
  },
  {
    "id": "1155450385130061824",
    "pseudo": "Javaa54",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/05/2024"
  },
  {
    "id": "1155671622158655598",
    "pseudo": "NeNeS950ltc",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/07/2025"
  },
  {
    "id": "1156232966909984858",
    "pseudo": "manz101",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2026"
  },
  {
    "id": "1156236589987545198",
    "pseudo": "KawaaONCE",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/08/2025"
  },
  {
    "id": "1156424265248292937",
    "pseudo": "CEDUSIN",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/02/2026"
  },
  {
    "id": "1156525425409925191",
    "pseudo": "Mad-Max-BZH",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/06/2025"
  },
  {
    "id": "1156659747211194509",
    "pseudo": "polo.g",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/01/2026"
  },
  {
    "id": "1156974596042534913",
    "pseudo": "kadarn-35",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/03/2025"
  },
  {
    "id": "1157010603022495756",
    "pseudo": "Brunocosta2a2007",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/05/2025"
  },
  {
    "id": "1157695981350035487",
    "pseudo": "Stena62",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/03/2026"
  },
  {
    "id": "1157798067349762068",
    "pseudo": "camarade enderson",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/12/2024"
  },
  {
    "id": "1158214917082591382",
    "pseudo": "ACEmaxouR34",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/08/2025"
  },
  {
    "id": "1158348281743671326",
    "pseudo": "xtremmaex",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/03/2025"
  },
  {
    "id": "1158500573587460156",
    "pseudo": "Arkeoz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/05/2025"
  },
  {
    "id": "1158752692668219434",
    "pseudo": "Misterb",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/04/2024"
  },
  {
    "id": "1159081627041923083",
    "pseudo": "Imran",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/03/2025"
  },
  {
    "id": "1159138858663936130",
    "pseudo": "Hanted-Charo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/06/2025"
  },
  {
    "id": "1159164188703338587",
    "pseudo": "dan7706",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/09/2025"
  },
  {
    "id": "1159878022648832011",
    "pseudo": "Jejebox24",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/04/2024"
  },
  {
    "id": "1160314353971642378",
    "pseudo": "HEIMDALLmsc",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/12/2025"
  },
  {
    "id": "1160615935418302634",
    "pseudo": "darkirk",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/05/2024"
  },
  {
    "id": "1161007260928061471",
    "pseudo": "Maskhobaar",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2026"
  },
  {
    "id": "1161642789457645620",
    "pseudo": "Enzo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/04/2025"
  },
  {
    "id": "1161732310824124559",
    "pseudo": "Nolux",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/02/2024"
  },
  {
    "id": "1161875160316530760",
    "pseudo": "Yoyo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/08/2025"
  },
  {
    "id": "1162062761308725420",
    "pseudo": "Keisuke",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/03/2026"
  },
  {
    "id": "1162436625205313536",
    "pseudo": "Walkernew",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/05/2025"
  },
  {
    "id": "1162482414333988894",
    "pseudo": "Cortez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/03/2025"
  },
  {
    "id": "1163076423720914984",
    "pseudo": "Rogue",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2026"
  },
  {
    "id": "1163505653260746782",
    "pseudo": "🫡KARTOON🏴☠",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1163851519418970245",
    "pseudo": "Le SharK",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/01/2025"
  },
  {
    "id": "1164261341574471720",
    "pseudo": "Levis_Autocross_53",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/03/2026"
  },
  {
    "id": "1164570734618746883",
    "pseudo": "dj3ngo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/02/2025"
  },
  {
    "id": "1165308233167163404",
    "pseudo": "Gavax-exe",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/06/2025"
  },
  {
    "id": "1165381487324045342",
    "pseudo": "[INF FR] Fabio",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/09/2025"
  },
  {
    "id": "1165994939604271136",
    "pseudo": "lilvegeta",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "27/06/2024"
  },
  {
    "id": "1166008774566359123",
    "pseudo": "Johnnyboy007",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2025"
  },
  {
    "id": "1166134919047696428",
    "pseudo": "picouse",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2026"
  },
  {
    "id": "1167064559522173039",
    "pseudo": "yKvrmaa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2026"
  },
  {
    "id": "1167194245682168041",
    "pseudo": "Slrnza",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2026"
  },
  {
    "id": "1167297183532454028",
    "pseudo": "Baltazarm940",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/02/2025"
  },
  {
    "id": "1167809333275410502",
    "pseudo": "Rt-94",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/01/2026"
  },
  {
    "id": "1167840998886494288",
    "pseudo": "Ice Coffee",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/11/2024"
  },
  {
    "id": "1167876506635210913",
    "pseudo": "Jeje88640",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/04/2024"
  },
  {
    "id": "1167950159385219193",
    "pseudo": "Sceptix",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2024"
  },
  {
    "id": "1167956286244147210",
    "pseudo": "infamous cracker",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/07/2025"
  },
  {
    "id": "1168197331703836704",
    "pseudo": "zazoudu30",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/12/2025"
  },
  {
    "id": "1168206454524739722",
    "pseudo": "1CL | notifr_",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "13/03/2025"
  },
  {
    "id": "1168238861789429791",
    "pseudo": "Ares2b",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/02/2025"
  },
  {
    "id": "1168497799697027095",
    "pseudo": "Bibeul001",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/11/2025"
  },
  {
    "id": "1168648087233908786",
    "pseudo": "terreur60072",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2024"
  },
  {
    "id": "1168674398140641401",
    "pseudo": "GingerBoyNdaHood",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "01/06/2025"
  },
  {
    "id": "1168695913485713449",
    "pseudo": "Oii_Viil_976",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1168747530880831490",
    "pseudo": "Le s",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/10/2025"
  },
  {
    "id": "1168936534607671347",
    "pseudo": "PH!L [FR]",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/07/2024"
  },
  {
    "id": "1169011699345539182",
    "pseudo": "matleroseau",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/01/2026"
  },
  {
    "id": "1169570020389568542",
    "pseudo": "titiXivar 🇨🇵🇧🇪",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2025"
  },
  {
    "id": "1169713048517361744",
    "pseudo": "Math Gomez",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/06/2024"
  },
  {
    "id": "1170088467468914808",
    "pseudo": "l.m3544",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/02/2025"
  },
  {
    "id": "1170296734497394728",
    "pseudo": "Tom",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/03/2024"
  },
  {
    "id": "1170404129303187510",
    "pseudo": "Shic2o",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "1170728350487150592",
    "pseudo": "KnG_Sh00T_",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/12/2025"
  },
  {
    "id": "1171100729415565345",
    "pseudo": "pixc361",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "23/03/2024"
  },
  {
    "id": "1171140621273141360",
    "pseudo": "CDE R5volte",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/06/2025"
  },
  {
    "id": "1171181421054939165",
    "pseudo": "ℭ𝔢𝔯𝔱𝔦𝔣𝔦𝔢𝔡 𝔏𝔞𝔯𝔭𝔢𝔯",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/03/2025"
  },
  {
    "id": "1171858931526672384",
    "pseudo": "Keyser Marpen",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/10/2025"
  },
  {
    "id": "1172249025429393428",
    "pseudo": "LeKpiBlanC",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/03/2026"
  },
  {
    "id": "1173223740855828561",
    "pseudo": "Rageurdrift03",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/03/2025"
  },
  {
    "id": "1173243694363717634",
    "pseudo": "Gooze",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/09/2024"
  },
  {
    "id": "1173245102676774942",
    "pseudo": "Skiizo77",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/04/2024"
  },
  {
    "id": "1173331107685613691",
    "pseudo": "jej",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/09/2024"
  },
  {
    "id": "1173561017637294093",
    "pseudo": "Simple_villageois",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/08/2025"
  },
  {
    "id": "1174821704384655403",
    "pseudo": "Mehdigi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/05/2024"
  },
  {
    "id": "1175029392968257546",
    "pseudo": "jéjédu19",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/11/2024"
  },
  {
    "id": "1175136448584896603",
    "pseudo": "[CS]Alvaraes.le.goat",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/08/2024"
  },
  {
    "id": "1175149804695867485",
    "pseudo": "Blocmine12",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2026"
  },
  {
    "id": "1175447391630012446",
    "pseudo": "nikos74",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/05/2024"
  },
  {
    "id": "1175478052256501870",
    "pseudo": "𝖔𝖈𝖍𝖔 †",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/07/2025"
  },
  {
    "id": "1175791318136520716",
    "pseudo": "Adjhostil",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/05/2025"
  },
  {
    "id": "1175894003829448734",
    "pseudo": "Cpl GetChicanos",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "04/01/2024"
  },
  {
    "id": "1176136637382660139",
    "pseudo": "tibo971",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/03/2025"
  },
  {
    "id": "1176208286199062569",
    "pseudo": "LoveIcespice",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/09/2024"
  },
  {
    "id": "1176210371120472210",
    "pseudo": "Tiago",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2026"
  },
  {
    "id": "1176426453546582016",
    "pseudo": "mirdwin14",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "28/07/2025"
  },
  {
    "id": "1176515592388350054",
    "pseudo": "Monotroliste",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/12/2023"
  },
  {
    "id": "1176560548280807424",
    "pseudo": "K3N71N",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/08/2025"
  },
  {
    "id": "1176882599826837555",
    "pseudo": "🇨🇵༺𖤍Hirox_81_HXx𖤍༻🇨🇵",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/12/2025"
  },
  {
    "id": "1176962752259051570",
    "pseudo": "Brutecharly3732",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/03/2025"
  },
  {
    "id": "1177235441230024779",
    "pseudo": "Andy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/03/2024"
  },
  {
    "id": "1177359908253990946",
    "pseudo": "Drogon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/03/2025"
  },
  {
    "id": "1177506752753836083",
    "pseudo": "djdarckoddj",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/07/2025"
  },
  {
    "id": "1178100059817123911",
    "pseudo": "Spitefire586",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2024"
  },
  {
    "id": "1178100652396781593",
    "pseudo": "Spitefire586",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/01/2024"
  },
  {
    "id": "1178137358567219211",
    "pseudo": "Rolant_Foirer",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2025"
  },
  {
    "id": "1178147663879884800",
    "pseudo": "DiamondBack2778",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2026"
  },
  {
    "id": "1178768924851064912",
    "pseudo": "OrKKe",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/09/2025"
  },
  {
    "id": "1179753976791568418",
    "pseudo": "Alex_C_C",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/05/2024"
  },
  {
    "id": "1179836155995369593",
    "pseudo": "KaRnaGe-357_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/11/2024"
  },
  {
    "id": "1179846610692362321",
    "pseudo": "Bronson",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/03/2025"
  },
  {
    "id": "1181192000775667723",
    "pseudo": "🐰",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/07/2024"
  },
  {
    "id": "1181560776276844677",
    "pseudo": "tony santos",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2025"
  },
  {
    "id": "1181669398101110804",
    "pseudo": "Bigdaddy7293",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/04/2026"
  },
  {
    "id": "1182296284170833933",
    "pseudo": "Burrich42",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/03/2025"
  },
  {
    "id": "1182435756086673459",
    "pseudo": "Doudouu",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "19/03/2026"
  },
  {
    "id": "1183091782926467153",
    "pseudo": "northman",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/06/2024"
  },
  {
    "id": "1183114297849688144",
    "pseudo": "Jl_kadop",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/10/2025"
  },
  {
    "id": "1183505335634374748",
    "pseudo": "22 Ourangan #0717",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2025"
  },
  {
    "id": "1183838053345804360",
    "pseudo": "Yoriv11",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/01/2026"
  },
  {
    "id": "1183927552423776306",
    "pseudo": "Tatou NASH",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2024"
  },
  {
    "id": "1184134107949695077",
    "pseudo": "Skunky",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/05/2024"
  },
  {
    "id": "1184381768145571870",
    "pseudo": "Liam_gz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/04/2026"
  },
  {
    "id": "1184929887077806161",
    "pseudo": "[LSV] RyZoX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2026"
  },
  {
    "id": "1185203637962690580",
    "pseudo": "DoDoXFR#2759",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/02/2026"
  },
  {
    "id": "1185305881282363435",
    "pseudo": "julRvR",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/06/2025"
  },
  {
    "id": "1185338368255602871",
    "pseudo": "Wolf0329",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/10/2024"
  },
  {
    "id": "1185368133645631562",
    "pseudo": "Thomasshelbychut",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/02/2026"
  },
  {
    "id": "1185716344109412372",
    "pseudo": "Nico78552",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/08/2024"
  },
  {
    "id": "1185970239255613541",
    "pseudo": "CoRgIreturn12",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/09/2024"
  },
  {
    "id": "1186389651242635295",
    "pseudo": "Energie_Frag",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/01/2026"
  },
  {
    "id": "1186485523368390788",
    "pseudo": "212",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2026"
  },
  {
    "id": "1187070006538797218",
    "pseudo": "Noob",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/03/2024"
  },
  {
    "id": "1187092183451435100",
    "pseudo": "Heuss_Louness59",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/01/2026"
  },
  {
    "id": "1187221991544082462",
    "pseudo": "t84 wolf",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/08/2024"
  },
  {
    "id": "1187378635028561973",
    "pseudo": "Iouskov",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/02/2025"
  },
  {
    "id": "1187442979355500656",
    "pseudo": "Dire Bear",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2025"
  },
  {
    "id": "1187565755517120543",
    "pseudo": "Kenblook",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "31/10/2024"
  },
  {
    "id": "1187570693924204616",
    "pseudo": "Remi boucher",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/07/2024"
  },
  {
    "id": "1188158840492003454",
    "pseudo": "🥐𝓫𝓻𝓲𝓸𝓬𝓱𝓮🥖",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2025"
  },
  {
    "id": "1188972456698986498",
    "pseudo": "『G I N O L E L A I T』ツ ᴄᴡꜰʀ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2026"
  },
  {
    "id": "1189024477938458695",
    "pseudo": "Blancodedemon😈👿",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/04/2024"
  },
  {
    "id": "1189126455049846875",
    "pseudo": "Brigadier-hysor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/06/2025"
  },
  {
    "id": "1189270783583862856",
    "pseudo": "Larecette",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/08/2025"
  },
  {
    "id": "1189340983138201722",
    "pseudo": "XxkatouenyxX",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/03/2024"
  },
  {
    "id": "1189502142139093035",
    "pseudo": "Triix31",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/04/2024"
  },
  {
    "id": "1189543179473666080",
    "pseudo": "[ALAT] Jean Bousin (J.B)",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/04/2024"
  },
  {
    "id": "1189962071991910423",
    "pseudo": "plumb",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/11/2024"
  },
  {
    "id": "1190251105918132316",
    "pseudo": "arwtixzy.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "1190369294614282290",
    "pseudo": "Gloriam Dei",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/05/2024"
  },
  {
    "id": "1190698184134119546",
    "pseudo": "[CLTCH] Caporal /Franky",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "09/04/2024"
  },
  {
    "id": "1190714777601855528",
    "pseudo": "SaylMv🍂",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2024"
  },
  {
    "id": "1190765580106612822",
    "pseudo": "Jax Lodbrok",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "31/12/2023"
  },
  {
    "id": "1191326800085782588",
    "pseudo": "Realty xev",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/03/2025"
  },
  {
    "id": "1191399451147894784",
    "pseudo": "Piwi yam",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/12/2024"
  },
  {
    "id": "1191439479970463776",
    "pseudo": "grysbok",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/09/2024"
  },
  {
    "id": "1191740988025208874",
    "pseudo": "Kregan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2025"
  },
  {
    "id": "1191782673396543488",
    "pseudo": "Sarigolpa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/02/2024"
  },
  {
    "id": "1191813515447635998",
    "pseudo": "Mk2528",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/08/2025"
  },
  {
    "id": "1191847161361616899",
    "pseudo": "Attila XVI",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/09/2024"
  },
  {
    "id": "1191854939341852672",
    "pseudo": "NIXY",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2026"
  },
  {
    "id": "1192097608659914883",
    "pseudo": "Clement8787",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2026"
  },
  {
    "id": "1192110035761901609",
    "pseudo": "MrTsnakou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/03/2026"
  },
  {
    "id": "1192578101641748543",
    "pseudo": "MaxLFFL",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/02/2025"
  },
  {
    "id": "1192600289690255595",
    "pseudo": "Antonin9343",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/01/2025"
  },
  {
    "id": "1192611945933717627",
    "pseudo": "bruh",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/04/2024"
  },
  {
    "id": "1192618939683983391",
    "pseudo": "Pinceasucre",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/09/2025"
  },
  {
    "id": "1192854554660847670",
    "pseudo": "DonkeyDoc97",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/01/2025"
  },
  {
    "id": "1192929014982123680",
    "pseudo": "Zombified-piglin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/12/2025"
  },
  {
    "id": "1193815252853334029",
    "pseudo": "Raider974",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/07/2025"
  },
  {
    "id": "1194052086774636594",
    "pseudo": "lacraapule33",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "22/02/2024"
  },
  {
    "id": "1194349663193665637",
    "pseudo": "Guelmes",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/03/2024"
  },
  {
    "id": "1194370346506256566",
    "pseudo": "Yetiz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/04/2026"
  },
  {
    "id": "1194976813533896837",
    "pseudo": "Wanda Delorey",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/06/2024"
  },
  {
    "id": "1195022909010358494",
    "pseudo": "LAMBEU 26",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/08/2024"
  },
  {
    "id": "1195394223839649814",
    "pseudo": "AMAZE6853",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/08/2024"
  },
  {
    "id": "1195480693589934222",
    "pseudo": "r2s neyrox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/06/2024"
  },
  {
    "id": "1195523686359380059",
    "pseudo": "Franck Busnel",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "11/02/2026"
  },
  {
    "id": "1195659124646621228",
    "pseudo": "Rikou76",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/07/2024"
  },
  {
    "id": "1195830741045608478",
    "pseudo": "Sino",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/01/2026"
  },
  {
    "id": "1195846619837509634",
    "pseudo": "Cluster DemoMix",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/02/2025"
  },
  {
    "id": "1195848639843676233",
    "pseudo": "SaNtAnA6666197",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "10/02/2024"
  },
  {
    "id": "1195893504287719583",
    "pseudo": "get936",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/08/2025"
  },
  {
    "id": "1196044136785129503",
    "pseudo": "Nigugugugdydy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2026"
  },
  {
    "id": "1196057028544704563",
    "pseudo": "Nano Stg",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/04/2025"
  },
  {
    "id": "1196096492570689546",
    "pseudo": "Marco du 27",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "14/01/2024"
  },
  {
    "id": "1196184775640219658",
    "pseudo": "Lucasfarm45",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/12/2024"
  },
  {
    "id": "1196503652215562350",
    "pseudo": "Rastabosse",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/05/2024"
  },
  {
    "id": "1196571393530265633",
    "pseudo": "YANN20249546",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2025"
  },
  {
    "id": "1196576722888442030",
    "pseudo": "Dedessyoul",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/06/2025"
  },
  {
    "id": "1196814186739675136",
    "pseudo": "JL Morrigan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/11/2024"
  },
  {
    "id": "1196914674982211666",
    "pseudo": "grafx_prod",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/08/2025"
  },
  {
    "id": "1196937755066904607",
    "pseudo": "Alexandre Miller",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/06/2025"
  },
  {
    "id": "1197241445107642368",
    "pseudo": "『 UB 』Pauloleo17",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/02/2025"
  },
  {
    "id": "1197311808080449636",
    "pseudo": "Waliddz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2024"
  },
  {
    "id": "1197327510011125760",
    "pseudo": "NABSoff",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "19/12/2025"
  },
  {
    "id": "1197598534560645222",
    "pseudo": "ZFJ Ryze",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/11/2025"
  },
  {
    "id": "1198241034384191578",
    "pseudo": "Astons",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/04/2024"
  },
  {
    "id": "1198385696772210770",
    "pseudo": "sachou76",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/12/2025"
  },
  {
    "id": "1198610088571699281",
    "pseudo": "Jules64",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/05/2025"
  },
  {
    "id": "1198638258465284227",
    "pseudo": "Martin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/12/2025"
  },
  {
    "id": "1198643699891048579",
    "pseudo": "renaud",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/07/2025"
  },
  {
    "id": "1198686563400417443",
    "pseudo": "toundra_29",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/02/2025"
  },
  {
    "id": "1199003040385085451",
    "pseudo": "Hubert",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2024"
  },
  {
    "id": "1199100209775526039",
    "pseudo": "Dozy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2026"
  },
  {
    "id": "1199165914814365739",
    "pseudo": "Levi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/02/2024"
  },
  {
    "id": "1199415888693170177",
    "pseudo": "jeanjesus",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/09/2025"
  },
  {
    "id": "1199958815307743304",
    "pseudo": "CPL TOXIC",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "14/03/2024"
  },
  {
    "id": "1200487312958705666",
    "pseudo": "MrDelta",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/12/2024"
  },
  {
    "id": "1200526005006258328",
    "pseudo": "skull07",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/04/2024"
  },
  {
    "id": "1200564077429276704",
    "pseudo": "Dzellow807",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/01/2025"
  },
  {
    "id": "1200933411074883594",
    "pseudo": "Enzo_13k",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/05/2025"
  },
  {
    "id": "1201182427167608974",
    "pseudo": "Jax64",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "28/01/2024"
  },
  {
    "id": "1201291323135770795",
    "pseudo": "? illu_F18-F15 E ?",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/06/2025"
  },
  {
    "id": "1202352608245715009",
    "pseudo": "Jamesbarlou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2025"
  },
  {
    "id": "1202963669944766495",
    "pseudo": "khantin-77",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/01/2026"
  },
  {
    "id": "1202982773988794389",
    "pseudo": "[BHK] AstralAce",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/03/2026"
  },
  {
    "id": "1203093723269824522",
    "pseudo": "Alexis 3700",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/11/2024"
  },
  {
    "id": "1203148940657295401",
    "pseudo": "Shino Black",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/01/2025"
  },
  {
    "id": "1203154702502600735",
    "pseudo": "Jimjam6746",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/02/2024"
  },
  {
    "id": "1203307565648322591",
    "pseudo": "pondicqmax",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/03/2025"
  },
  {
    "id": "1203457775330394134",
    "pseudo": "noxyy201270 LRKLT/EOSF",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/08/2024"
  },
  {
    "id": "1203642087459921962",
    "pseudo": "Nabutada",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "04/02/2024"
  },
  {
    "id": "1203675931017879623",
    "pseudo": "Swyzeex",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/06/2025"
  },
  {
    "id": "1204399286964584468",
    "pseudo": "CAFIT-WOO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2026"
  },
  {
    "id": "1204564238111211522",
    "pseudo": "Iceman8828",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/06/2024"
  },
  {
    "id": "1204809885313933414",
    "pseudo": "LeMac23FR",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/11/2025"
  },
  {
    "id": "1204820720593408073",
    "pseudo": "Zerox_Tec_91",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/03/2025"
  },
  {
    "id": "1204822693334229042",
    "pseudo": "7.Sev3n",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2025"
  },
  {
    "id": "1204865852915056730",
    "pseudo": "Sproaty19",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/01/2025"
  },
  {
    "id": "1205240461199933451",
    "pseudo": "Daron",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/08/2025"
  },
  {
    "id": "1205524684750192670",
    "pseudo": "cqtv1",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/11/2025"
  },
  {
    "id": "1205984200491016274",
    "pseudo": "Zumego",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/05/2025"
  },
  {
    "id": "1206125026991149116",
    "pseudo": "(AFL) FS Ghostt",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2026"
  },
  {
    "id": "1206578782664794155",
    "pseudo": "Karabo13",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2024"
  },
  {
    "id": "1206808492015620107",
    "pseudo": "Sergiohous4",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/07/2025"
  },
  {
    "id": "1207422499051143170",
    "pseudo": "Benoit19Gaming",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2026"
  },
  {
    "id": "1207843824328642640",
    "pseudo": "JAKALE_7",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/08/2025"
  },
  {
    "id": "1208014129583882240",
    "pseudo": "Super G9446",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "28/01/2026"
  },
  {
    "id": "1208021252875223110",
    "pseudo": "Rudy1944",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "22/02/2024"
  },
  {
    "id": "1208502874167054357",
    "pseudo": "samuel",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/02/2024"
  },
  {
    "id": "1208732786362679308",
    "pseudo": "Samourai-42o",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/06/2025"
  },
  {
    "id": "1208784151579467861",
    "pseudo": "ikdya77",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "25/02/2024"
  },
  {
    "id": "1208841564487557120",
    "pseudo": "Lika",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/05/2025"
  },
  {
    "id": "1208846304881545239",
    "pseudo": "Ronygi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1208882005589102612",
    "pseudo": "Alz90",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/11/2025"
  },
  {
    "id": "1209029414281814057",
    "pseudo": "Winters",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/10/2025"
  },
  {
    "id": "1209134844831997983",
    "pseudo": "Calawar",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "18/02/2025"
  },
  {
    "id": "1209287158582485063",
    "pseudo": "Inzcs",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/04/2026"
  },
  {
    "id": "1209917484086337607",
    "pseudo": "Hs_Ninja",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/06/2025"
  },
  {
    "id": "1210243554421776439",
    "pseudo": "P0P0UYAVEbzh",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/02/2024"
  },
  {
    "id": "1210339934607642646",
    "pseudo": "GOLIATH5170",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2024"
  },
  {
    "id": "1210390927164833857",
    "pseudo": "Ced",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/02/2024"
  },
  {
    "id": "1210567679333765121",
    "pseudo": "[CLTCH] MacXbaR_FR",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "23/02/2024"
  },
  {
    "id": "1210654702262423553",
    "pseudo": "ministarbow",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2026"
  },
  {
    "id": "1210966447619186750",
    "pseudo": "BZH",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/07/2025"
  },
  {
    "id": "1211310063956787300",
    "pseudo": "dk",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/02/2025"
  },
  {
    "id": "1211319700382945283",
    "pseudo": "! ‘ Ætheris",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/12/2025"
  },
  {
    "id": "1211336839823097869",
    "pseudo": "dydydyson",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/11/2025"
  },
  {
    "id": "1211369388674916513",
    "pseudo": "LAlgerino1",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/07/2024"
  },
  {
    "id": "1212475280523005955",
    "pseudo": "mapupuce",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/02/2025"
  },
  {
    "id": "1212490263948300289",
    "pseudo": "༺・ 𝓜𝓐𝓢𝓣𝓞・༻",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/06/2025"
  },
  {
    "id": "1212755711399034880",
    "pseudo": "Roodfr-83",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/11/2025"
  },
  {
    "id": "1212878561090740355",
    "pseudo": "Zato",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/05/2025"
  },
  {
    "id": "1213018737834205195",
    "pseudo": "LuminousLight",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "01/09/2025"
  },
  {
    "id": "1213266002511528100",
    "pseudo": "Zox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/11/2025"
  },
  {
    "id": "1213825697227874324",
    "pseudo": "Bizon🐺",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/01/2025"
  },
  {
    "id": "1213876213396013127",
    "pseudo": "Shark_asap",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2026"
  },
  {
    "id": "1214292287312367667",
    "pseudo": "Mathys_guts",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/03/2024"
  },
  {
    "id": "1214334181471948820",
    "pseudo": "DreamingStick",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "26/08/2025"
  },
  {
    "id": "1214568616708804698",
    "pseudo": "Lucarnnez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2025"
  },
  {
    "id": "1214979120174211085",
    "pseudo": "narita",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/03/2024"
  },
  {
    "id": "1215218429468868660",
    "pseudo": "FAF LARACE",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/07/2024"
  },
  {
    "id": "1215375960799449119",
    "pseudo": "BRB-Frolon92",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/01/2026"
  },
  {
    "id": "1215414819184713840",
    "pseudo": "SkYtEk42000",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/02/2026"
  },
  {
    "id": "1215423934787223643",
    "pseudo": "Razta",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/05/2025"
  },
  {
    "id": "1215970126713589771",
    "pseudo": "Orion",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/06/2024"
  },
  {
    "id": "1215987782573490271",
    "pseudo": "vynldz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/09/2024"
  },
  {
    "id": "1216020493753122886",
    "pseudo": "beornaswolf",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/03/2024"
  },
  {
    "id": "1216106607352483892",
    "pseudo": "DrabMOney1610",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/08/2024"
  },
  {
    "id": "1216227091318571078",
    "pseudo": "Ghost Ace",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/03/2025"
  },
  {
    "id": "1216391817398845440",
    "pseudo": "systzma",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/01/2025"
  },
  {
    "id": "1216465543704481845",
    "pseudo": "Cyclo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/08/2024"
  },
  {
    "id": "1216876635715014789",
    "pseudo": "snapbroke",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/06/2024"
  },
  {
    "id": "1217032590653919273",
    "pseudo": "Patoshe30fr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/08/2024"
  },
  {
    "id": "1217350850184347732",
    "pseudo": "Keny",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/12/2024"
  },
  {
    "id": "1217460483117023322",
    "pseudo": "ATOME_ITACHI",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1217618618787823640",
    "pseudo": "Berck",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/06/2024"
  },
  {
    "id": "1218233008151068804",
    "pseudo": "HaiderWolf",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/09/2024"
  },
  {
    "id": "1218657411556970538",
    "pseudo": "Griizou42",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/10/2025"
  },
  {
    "id": "1218918828118114385",
    "pseudo": "Jonathan83",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/06/2025"
  },
  {
    "id": "1219362557924478987",
    "pseudo": "SlashKoopa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/01/2026"
  },
  {
    "id": "1219600983613505536",
    "pseudo": "XeroX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/05/2025"
  },
  {
    "id": "1219750389591838743",
    "pseudo": "flo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/02/2025"
  },
  {
    "id": "1220457714615058453",
    "pseudo": "Sabrewolf87",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/03/2025"
  },
  {
    "id": "1221056337627058217",
    "pseudo": "Bishop",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2024"
  },
  {
    "id": "1221130063974498368",
    "pseudo": "BerlantFumant",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2024"
  },
  {
    "id": "1221179050970579026",
    "pseudo": "ori maya",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/03/2024"
  },
  {
    "id": "1221188947242127414",
    "pseudo": "Alexander .S",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2026"
  },
  {
    "id": "1221363187773866005",
    "pseudo": "Team2017_Raph",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/01/2026"
  },
  {
    "id": "1221370166177304636",
    "pseudo": "Team2017_Johann",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/01/2026"
  },
  {
    "id": "1221425014297985085",
    "pseudo": "Becha",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/07/2025"
  },
  {
    "id": "1221447424317587589",
    "pseudo": "MarcV17",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/12/2024"
  },
  {
    "id": "1221528255153180733",
    "pseudo": "Sappelgroot",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/01/2025"
  },
  {
    "id": "1221855123333054605",
    "pseudo": "ToukTouk973",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "03/07/2025"
  },
  {
    "id": "1222304673650839684",
    "pseudo": "Mitchi14",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/03/2024"
  },
  {
    "id": "1222588411391508641",
    "pseudo": "Jinxed",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/03/2024"
  },
  {
    "id": "1223359103510908934",
    "pseudo": "darkvador_05",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "03/07/2025"
  },
  {
    "id": "1223997585271033867",
    "pseudo": "Vikings",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/03/2024"
  },
  {
    "id": "1224322148974198927",
    "pseudo": "Itzzcharly62",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/12/2024"
  },
  {
    "id": "1224329330486673448",
    "pseudo": "Theoma02",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/04/2024"
  },
  {
    "id": "1224362121119400038",
    "pseudo": "Donuts4cops",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "01/04/2024"
  },
  {
    "id": "1224660696277717013",
    "pseudo": "CVS08",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/07/2024"
  },
  {
    "id": "1225132895211884677",
    "pseudo": "sawp",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/08/2024"
  },
  {
    "id": "1225497989188030478",
    "pseudo": "Harley2935",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/04/2024"
  },
  {
    "id": "1225502202303479974",
    "pseudo": "Alfabkillers",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/06/2025"
  },
  {
    "id": "1225540306783703042",
    "pseudo": "Jojo7857",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1225683690064183299",
    "pseudo": "DredTheRealOne",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/07/2025"
  },
  {
    "id": "1225821205278359682",
    "pseudo": "Omsint",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/04/2025"
  },
  {
    "id": "1225951493685907609",
    "pseudo": "Bosniakkov",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2024"
  },
  {
    "id": "1226027101791191101",
    "pseudo": "Shoot-down",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/11/2025"
  },
  {
    "id": "1226082192585654393",
    "pseudo": "Berserk",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/03/2025"
  },
  {
    "id": "1226296063208722444",
    "pseudo": "McFly987",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/05/2024"
  },
  {
    "id": "1227221393809342475",
    "pseudo": "Poe-solo24",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1227541374476226702",
    "pseudo": "Makbens",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/11/2024"
  },
  {
    "id": "1227918999992401980",
    "pseudo": "antonin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/05/2024"
  },
  {
    "id": "1227936893442719797",
    "pseudo": "Albaptou (Pa3rkall)",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/12/2024"
  },
  {
    "id": "1228076754606755903",
    "pseudo": "Bosscharli60",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2025"
  },
  {
    "id": "1228408974072614943",
    "pseudo": "Leeroy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2025"
  },
  {
    "id": "1228476566372089928",
    "pseudo": "Barb_a_cils",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2024"
  },
  {
    "id": "1228509778746146838",
    "pseudo": "Scarfunk",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2025"
  },
  {
    "id": "1228960634092261406",
    "pseudo": "[VDP] ARN Staan",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "19/12/2025"
  },
  {
    "id": "1229099869503885476",
    "pseudo": "Omar Jackson",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/01/2025"
  },
  {
    "id": "1229133820876292107",
    "pseudo": "Blacki",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/01/2025"
  },
  {
    "id": "1229137435724742657",
    "pseudo": "ALEX2801CH",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/07/2025"
  },
  {
    "id": "1229483472054259814",
    "pseudo": "berserk62",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/04/2024"
  },
  {
    "id": "1229532544765132893",
    "pseudo": "Tango",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/01/2025"
  },
  {
    "id": "1229821838104727553",
    "pseudo": "Spleen",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/04/2024"
  },
  {
    "id": "1229868507085279408",
    "pseudo": "DIMA",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "03/03/2025"
  },
  {
    "id": "1230122146592718890",
    "pseudo": "𝙉𝙊𝙅𝙄",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/10/2025"
  },
  {
    "id": "1230178865293295670",
    "pseudo": "Gucci",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2026"
  },
  {
    "id": "1230219848404041739",
    "pseudo": "Kosmo",
    "role": "Soldat",
    "grade": "Adjudant",
    "joinDate": "19/04/2024"
  },
  {
    "id": "1230780287357685833",
    "pseudo": "Ibrahima",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/03/2026"
  },
  {
    "id": "1230982475405328464",
    "pseudo": "MUFASA2.0",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/02/2025"
  },
  {
    "id": "1231239244853280831",
    "pseudo": "▓▒░⡷⠂𝚂é𝚋𝚊𝚜𝚝𝚒𝚎𝚗⠐⢾░▒▓",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2025"
  },
  {
    "id": "1231350458736709634",
    "pseudo": "°° bird of Hermès °°",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/08/2024"
  },
  {
    "id": "1231377606700437625",
    "pseudo": "Popay",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "21/04/2024"
  },
  {
    "id": "1231600314583482462",
    "pseudo": "GuillaumeXVX",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/08/2025"
  },
  {
    "id": "1231641832463532085",
    "pseudo": "Raventv01",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2026"
  },
  {
    "id": "1231969685151416400",
    "pseudo": "(tr'",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2024"
  },
  {
    "id": "1231983802474168481",
    "pseudo": "Hanma_Oden/Soldat Reis",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/05/2025"
  },
  {
    "id": "1232241889470709770",
    "pseudo": "alexbesnard0209",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/06/2025"
  },
  {
    "id": "1232428163087470663",
    "pseudo": "FauxKatana",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2025"
  },
  {
    "id": "1232653433996316696",
    "pseudo": "PADRIXXX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/05/2024"
  },
  {
    "id": "1232758775937499136",
    "pseudo": "Oups6",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "24/04/2024"
  },
  {
    "id": "1233113032738078752",
    "pseudo": "pablo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/09/2024"
  },
  {
    "id": "1233147768684413058",
    "pseudo": "[FR]OG",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "25/04/2024"
  },
  {
    "id": "1233343265047183420",
    "pseudo": "Prevax",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/09/2025"
  },
  {
    "id": "1233548349798613163",
    "pseudo": "oooSENTENZAooo",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "27/04/2024"
  },
  {
    "id": "1233721987155759105",
    "pseudo": "Pablito",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/09/2024"
  },
  {
    "id": "1233768128715161680",
    "pseudo": "Ylias_crf",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/05/2025"
  },
  {
    "id": "1233870291739082762",
    "pseudo": "RCT. Manu4476",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/07/2025"
  },
  {
    "id": "1233875266024243230",
    "pseudo": "Rudy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/04/2024"
  },
  {
    "id": "1234000836586373225",
    "pseudo": "Frouloux3716",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/03/2026"
  },
  {
    "id": "1234135678929866803",
    "pseudo": "TRX#4177",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/04/2025"
  },
  {
    "id": "1234209709838434318",
    "pseudo": "Xpunisher31",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/05/2024"
  },
  {
    "id": "1234263824270491699",
    "pseudo": "RaptorBfhII",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/04/2024"
  },
  {
    "id": "1234294299349487666",
    "pseudo": "Keelyan2003",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "16/06/2025"
  },
  {
    "id": "1234447362102136915",
    "pseudo": "Nth_galaxy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/04/2024"
  },
  {
    "id": "1235314496935821433",
    "pseudo": "Bastos93400",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/11/2025"
  },
  {
    "id": "1235316023046180946",
    "pseudo": "loris",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/08/2025"
  },
  {
    "id": "1235320785980100719",
    "pseudo": "XiioriiX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/06/2025"
  },
  {
    "id": "1235673681867309106",
    "pseudo": "Demonkill70",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "1235749634568355873",
    "pseudo": "Thomas black",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "03/05/2024"
  },
  {
    "id": "1235955435727622215",
    "pseudo": "Krat",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/05/2024"
  },
  {
    "id": "1236007528345899060",
    "pseudo": "Vampaya_Bless",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/01/2025"
  },
  {
    "id": "1236041482897588235",
    "pseudo": "Le_joueur_la56",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/04/2026"
  },
  {
    "id": "1236251839398150164",
    "pseudo": "Alexis1305",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/12/2025"
  },
  {
    "id": "1236690336890228870",
    "pseudo": "zalex228",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1236722276234170499",
    "pseudo": "XxVoDkA22xX",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/05/2024"
  },
  {
    "id": "1237119578988085268",
    "pseudo": "AvionSmith",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/05/2024"
  },
  {
    "id": "1237307353444122664",
    "pseudo": "Mr_Willson",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/05/2024"
  },
  {
    "id": "1237409325161517109",
    "pseudo": "magnard_69",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/07/2025"
  },
  {
    "id": "1237477335154950145",
    "pseudo": "Un_LuTin_FoU",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/12/2024"
  },
  {
    "id": "1237485571019116625",
    "pseudo": "Zaza",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/03/2025"
  },
  {
    "id": "1237531575533699126",
    "pseudo": "Kaheke",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/05/2024"
  },
  {
    "id": "1237787127857807363",
    "pseudo": "BMGomez21",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "08/05/2024"
  },
  {
    "id": "1237832841929162874",
    "pseudo": "sk3pt",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/03/2025"
  },
  {
    "id": "1238071996546285619",
    "pseudo": "Timoléon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/05/2024"
  },
  {
    "id": "1238094727073501240",
    "pseudo": "pharmacist",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/09/2025"
  },
  {
    "id": "1238448010917314631",
    "pseudo": "Juan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2025"
  },
  {
    "id": "1239034046227681350",
    "pseudo": "Skylaume",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2025"
  },
  {
    "id": "1239653385343336450",
    "pseudo": "kalvera28",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/02/2026"
  },
  {
    "id": "1239668197217669220",
    "pseudo": "XelaNight",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/06/2024"
  },
  {
    "id": "1240013669413158933",
    "pseudo": "Cornac",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/07/2025"
  },
  {
    "id": "1240155633073000548",
    "pseudo": "sachafr34",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/11/2025"
  },
  {
    "id": "1240460985609879594",
    "pseudo": "LaTetineFolle",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/05/2024"
  },
  {
    "id": "1240627510375485491",
    "pseudo": "WWolf-00",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/06/2025"
  },
  {
    "id": "1240654961503899770",
    "pseudo": "Recrue . Crevette",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/03/2025"
  },
  {
    "id": "1241095479346073651",
    "pseudo": "Nino8869",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/03/2025"
  },
  {
    "id": "1241118001873555548",
    "pseudo": "Babou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/02/2025"
  },
  {
    "id": "1241352695382540318",
    "pseudo": "Maverick73",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/05/2024"
  },
  {
    "id": "1241455007459573971",
    "pseudo": "Nahaa_a",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2026"
  },
  {
    "id": "1241534292853784627",
    "pseudo": "SgC GaaZaak21",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1241836081087905875",
    "pseudo": "OVA_TM08",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/08/2025"
  },
  {
    "id": "1242210614160658497",
    "pseudo": "Frank_Poppers",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/02/2025"
  },
  {
    "id": "1242212601769885728",
    "pseudo": "SoldatFr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/07/2025"
  },
  {
    "id": "1242542735873933386",
    "pseudo": "[CLTCH] Maverik",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/06/2024"
  },
  {
    "id": "1242905684266319892",
    "pseudo": "yoanitalia",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/06/2024"
  },
  {
    "id": "1243237988700393546",
    "pseudo": "Moustikator06",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/10/2024"
  },
  {
    "id": "1243510241350516787",
    "pseudo": "LE-J",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/05/2024"
  },
  {
    "id": "1243582818605465663",
    "pseudo": "RavenDaFox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/03/2025"
  },
  {
    "id": "1243674920639139966",
    "pseudo": "RAPTOR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2025"
  },
  {
    "id": "1243691013068034104",
    "pseudo": "Benoît",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/07/2024"
  },
  {
    "id": "1244040951261958154",
    "pseudo": "VinceFoster",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/06/2025"
  },
  {
    "id": "1244314332892893307",
    "pseudo": "Tom",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/02/2026"
  },
  {
    "id": "1244870543598161991",
    "pseudo": "Vrai2Vrai952",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/05/2025"
  },
  {
    "id": "1245041988806508766",
    "pseudo": "newcal",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2026"
  },
  {
    "id": "1245181684731875439",
    "pseudo": "Enju",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/06/2025"
  },
  {
    "id": "1245460959447879683",
    "pseudo": "Malone",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2024"
  },
  {
    "id": "1245526964282986566",
    "pseudo": "sprx_05",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/07/2025"
  },
  {
    "id": "1245536881878237205",
    "pseudo": "unk",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/08/2024"
  },
  {
    "id": "1245672253857861738",
    "pseudo": "Walkån",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2025"
  },
  {
    "id": "1246013183265607704",
    "pseudo": "Djakout",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/05/2024"
  },
  {
    "id": "1246410182985121824",
    "pseudo": "Antraxe-PSIG",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/04/2026"
  },
  {
    "id": "1246473591277752330",
    "pseudo": "zerdyxx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/01/2025"
  },
  {
    "id": "1246617402045628508",
    "pseudo": "Kio",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "1246792871429017662",
    "pseudo": "Noah",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/11/2024"
  },
  {
    "id": "1247251747211051023",
    "pseudo": "KouroGLTV",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/03/2026"
  },
  {
    "id": "1247254502713594102",
    "pseudo": "RASTA973",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "04/06/2024"
  },
  {
    "id": "1247565568375259277",
    "pseudo": "Loé",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/01/2026"
  },
  {
    "id": "1247689025993572393",
    "pseudo": "Laplanque7_8",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/03/2025"
  },
  {
    "id": "1247785511167197204",
    "pseudo": "Laurent-rider",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/02/2026"
  },
  {
    "id": "1248031367254511616",
    "pseudo": "[EMP] lucas",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/03/2025"
  },
  {
    "id": "1248179322741854238",
    "pseudo": "namjaez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/01/2025"
  },
  {
    "id": "1248742890520445115",
    "pseudo": "Templier PT",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/08/2024"
  },
  {
    "id": "1248745716629639319",
    "pseudo": "xlBe_xSniper",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/09/2025"
  },
  {
    "id": "1249390406429311036",
    "pseudo": "Tontondubled#164",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/06/2024"
  },
  {
    "id": "1249657224482258947",
    "pseudo": "AmberWolf929",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/06/2024"
  },
  {
    "id": "1249798616508403713",
    "pseudo": "terminature5833",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/10/2024"
  },
  {
    "id": "1249864386227601440",
    "pseudo": "Momidepierre",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "1250144040977170563",
    "pseudo": "ironcid",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "11/06/2024"
  },
  {
    "id": "1250331071640502328",
    "pseudo": "MAXIMATOR",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "14/06/2024"
  },
  {
    "id": "1250409234290708514",
    "pseudo": "🆂🅰🅽🅹🅸",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/01/2025"
  },
  {
    "id": "1250453988537536614",
    "pseudo": "Marlux9",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/02/2026"
  },
  {
    "id": "1250544566059405383",
    "pseudo": "Vickes",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/08/2024"
  },
  {
    "id": "1250837495843917857",
    "pseudo": "Super_skunk23",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/07/2024"
  },
  {
    "id": "1250884556568002671",
    "pseudo": "xeratoxss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/02/2025"
  },
  {
    "id": "1250956669517561886",
    "pseudo": "Marin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/01/2025"
  },
  {
    "id": "1251168354576896000",
    "pseudo": "Pierrecdam",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/11/2024"
  },
  {
    "id": "1251184261252386817",
    "pseudo": "Oasis Pétou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/09/2025"
  },
  {
    "id": "1251206565608820851",
    "pseudo": "Luffy42000",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/07/2025"
  },
  {
    "id": "1251245988807577620",
    "pseudo": "Velez jm 60",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "02/08/2024"
  },
  {
    "id": "1251871032768204882",
    "pseudo": "PortVert1625",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "28/06/2024"
  },
  {
    "id": "1251877572141256727",
    "pseudo": "leviro3159",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/08/2025"
  },
  {
    "id": "1251879665514188822",
    "pseudo": "POPPIE",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/06/2025"
  },
  {
    "id": "1251915012243587219",
    "pseudo": "HeavyPcu404",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2025"
  },
  {
    "id": "1252271961531355198",
    "pseudo": "Murphy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/03/2025"
  },
  {
    "id": "1252589009952047115",
    "pseudo": "Homere",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/07/2025"
  },
  {
    "id": "1252647614785126482",
    "pseudo": "Pascallegoat",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2026"
  },
  {
    "id": "1253009485731991609",
    "pseudo": "Balian",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/06/2024"
  },
  {
    "id": "1253731111851393198",
    "pseudo": "Soyouz2577",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/06/2024"
  },
  {
    "id": "1253831293578252371",
    "pseudo": "071401 (JAHID-DZ_)",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/03/2026"
  },
  {
    "id": "1254523631376007255",
    "pseudo": "Green",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/06/2024"
  },
  {
    "id": "1255022253838696468",
    "pseudo": "Maany",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/09/2025"
  },
  {
    "id": "1255815972523085866",
    "pseudo": "Loulou Ramone",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "27/02/2026"
  },
  {
    "id": "1255986639893958768",
    "pseudo": "DSCT ZooS 69",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/10/2025"
  },
  {
    "id": "1256222799446544396",
    "pseudo": "Xtremez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2025"
  },
  {
    "id": "1256247268281946123",
    "pseudo": "Xtremez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2025"
  },
  {
    "id": "1256356638986866861",
    "pseudo": "Pierro",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2025"
  },
  {
    "id": "1256714875070189771",
    "pseudo": "Xtremez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2025"
  },
  {
    "id": "1256715716330000385",
    "pseudo": "mlk",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/07/2024"
  },
  {
    "id": "1256723849051902106",
    "pseudo": "Xtremez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2025"
  },
  {
    "id": "1256851746928463914",
    "pseudo": "Xtremez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2025"
  },
  {
    "id": "1256900234429333629",
    "pseudo": "Tony Franc",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/05/2025"
  },
  {
    "id": "1256918421514227742",
    "pseudo": "Idrox_cool",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2025"
  },
  {
    "id": "1256969829240410183",
    "pseudo": "Dkiller-666",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1257741790333898843",
    "pseudo": "Oldcat40",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/03/2026"
  },
  {
    "id": "1258380217949618200",
    "pseudo": "Lahagrar6off",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/01/2026"
  },
  {
    "id": "1258473666748874884",
    "pseudo": "Velvet thigh",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/07/2025"
  },
  {
    "id": "1258538531970744465",
    "pseudo": "Nobodyloveu",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/08/2024"
  },
  {
    "id": "1258965800342257684",
    "pseudo": "Temp-01391445",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/02/2026"
  },
  {
    "id": "1259144870128517160",
    "pseudo": "linixys",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2025"
  },
  {
    "id": "1259169296324759563",
    "pseudo": "Demonthe905",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/11/2025"
  },
  {
    "id": "1259207841978388553",
    "pseudo": "Requin Xioo8",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/07/2025"
  },
  {
    "id": "1259244711223234652",
    "pseudo": "MasterXxQc",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/11/2024"
  },
  {
    "id": "1259250852531802144",
    "pseudo": "Boddo",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "19/12/2024"
  },
  {
    "id": "1259428733266296952",
    "pseudo": "Gringohermanodu61",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1259484279763898399",
    "pseudo": "to.mo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/06/2025"
  },
  {
    "id": "1259618619462258723",
    "pseudo": "clezer",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "27/02/2026"
  },
  {
    "id": "1259641611327901726",
    "pseudo": "rzbjise",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "1260566445042040835",
    "pseudo": "Z4ttox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/09/2025"
  },
  {
    "id": "1260777901544968275",
    "pseudo": "Kr0n0s3501",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/07/2024"
  },
  {
    "id": "1261029783362338884",
    "pseudo": "EmploiDuPigeon",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/07/2025"
  },
  {
    "id": "1261036117638250531",
    "pseudo": "ice-o-lator",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/03/2025"
  },
  {
    "id": "1261051190943289344",
    "pseudo": "Avoke23",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/09/2025"
  },
  {
    "id": "1261095966677930056",
    "pseudo": "Nico67",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/07/2024"
  },
  {
    "id": "1261260708759339049",
    "pseudo": "banker",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/07/2024"
  },
  {
    "id": "1261318747558383640",
    "pseudo": "Christo27mec",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/01/2025"
  },
  {
    "id": "1261800291767156777",
    "pseudo": "xsorcier",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/12/2024"
  },
  {
    "id": "1261991345799823410",
    "pseudo": "mobz83",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "14/07/2024"
  },
  {
    "id": "1262414148092956795",
    "pseudo": "tdx06",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/03/2025"
  },
  {
    "id": "1262488666408747094",
    "pseudo": "HdG",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/12/2025"
  },
  {
    "id": "1262702879668703273",
    "pseudo": "AxardCH",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/05/2025"
  },
  {
    "id": "1263286134448980098",
    "pseudo": "Tosmy-Cheezy",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/06/2025"
  },
  {
    "id": "1263431162945208330",
    "pseudo": "Arko",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2026"
  },
  {
    "id": "1263592212084686863",
    "pseudo": "El Paco 94",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/12/2024"
  },
  {
    "id": "1264250059558752350",
    "pseudo": "Mm33 k",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/08/2024"
  },
  {
    "id": "1264258091374084096",
    "pseudo": "MaxTrg",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/07/2024"
  },
  {
    "id": "1265083472863563786",
    "pseudo": "Eksypa",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "03/04/2025"
  },
  {
    "id": "1265203472610099283",
    "pseudo": "Dimitri",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/07/2025"
  },
  {
    "id": "1266904522207395892",
    "pseudo": "Yoda",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2026"
  },
  {
    "id": "1267092207186346004",
    "pseudo": "IRagnarLothbroKk",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/11/2025"
  },
  {
    "id": "1267116568207167508",
    "pseudo": "Hamsik693",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1267567821555236895",
    "pseudo": "Бейхарборбутчер",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/08/2025"
  },
  {
    "id": "1267883249104060429",
    "pseudo": "Gladio",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/12/2024"
  },
  {
    "id": "1268141230991085611",
    "pseudo": "Westly",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/04/2026"
  },
  {
    "id": "1268530807618797602",
    "pseudo": "L'esprit 👻d1☠️gameur",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/01/2025"
  },
  {
    "id": "1268587635132071978",
    "pseudo": "OT∆_$T∆¥",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2025"
  },
  {
    "id": "1269025443428962446",
    "pseudo": "Sylvain",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/08/2024"
  },
  {
    "id": "1269144083373232169",
    "pseudo": "Boom-Sy",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/03/2025"
  },
  {
    "id": "1269331858852941907",
    "pseudo": "maxP.92",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/12/2024"
  },
  {
    "id": "1269382577400320102",
    "pseudo": "P4Sta",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/10/2024"
  },
  {
    "id": "1269660955915063358",
    "pseudo": "Virtus encore",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2025"
  },
  {
    "id": "1270406801396990074",
    "pseudo": "GANONDORF🇫🇷",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2025"
  },
  {
    "id": "1270413927448317963",
    "pseudo": "BoNo_13",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/12/2024"
  },
  {
    "id": "1270454426343309354",
    "pseudo": "Kura",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/04/2025"
  },
  {
    "id": "1270472407534141582",
    "pseudo": "Meso68592",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/10/2025"
  },
  {
    "id": "1270648614942801972",
    "pseudo": "Matheo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/08/2024"
  },
  {
    "id": "1271013995179937805",
    "pseudo": "ZTN",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/01/2026"
  },
  {
    "id": "1271388515460059247",
    "pseudo": "foxite.fr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/04/2025"
  },
  {
    "id": "1271601389574815758",
    "pseudo": "Charles0599",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/03/2026"
  },
  {
    "id": "1271789448933146647",
    "pseudo": "Lukas",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2026"
  },
  {
    "id": "1271953492298170410",
    "pseudo": "zMAMEYNE",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/08/2025"
  },
  {
    "id": "1272105684485537812",
    "pseudo": "Isaie",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/07/2025"
  },
  {
    "id": "1272452717050204212",
    "pseudo": "IIIILINKIIII698",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/05/2025"
  },
  {
    "id": "1272832613345918976",
    "pseudo": "Eyr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/08/2024"
  },
  {
    "id": "1272868372392181830",
    "pseudo": "🇩🇪🇵🇱🇨🇵Glandu🇨🇵🇵🇱🇩🇪",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/05/2025"
  },
  {
    "id": "1272995384414834762",
    "pseudo": "GG kayasami",
    "role": "Cadre",
    "grade": "Etat Major",
    "joinDate": "31/01/2025"
  },
  {
    "id": "1272996184717262929",
    "pseudo": "Fiinger",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "13/02/2026"
  },
  {
    "id": "1273070189872676905",
    "pseudo": "Lava",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/04/2026"
  },
  {
    "id": "1273402227247022081",
    "pseudo": "DARK-SHADOW",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/02/2026"
  },
  {
    "id": "1273431849422815294",
    "pseudo": "schaffistone68",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/08/2025"
  },
  {
    "id": "1273711563898884180",
    "pseudo": "KDS",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/09/2025"
  },
  {
    "id": "1273986343504052276",
    "pseudo": "Bodrik",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "1274012918203154434",
    "pseudo": "Paelladinho",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/07/2025"
  },
  {
    "id": "1274354508646060093",
    "pseudo": "Balavoine",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2024"
  },
  {
    "id": "1274540418297761886",
    "pseudo": "AD_pupuce8993",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/03/2026"
  },
  {
    "id": "1274655111087656961",
    "pseudo": "GamerRIK69",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/08/2024"
  },
  {
    "id": "1274668368393404530",
    "pseudo": "꧁⎝ 𓆩༺✧༻𓆪 ⎠꧂",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/07/2025"
  },
  {
    "id": "1274778912689229884",
    "pseudo": "Draavxx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2026"
  },
  {
    "id": "1274815264977846323",
    "pseudo": "bach",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/12/2024"
  },
  {
    "id": "1275171415166947462",
    "pseudo": "Maeeeeelll",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1275397956148789331",
    "pseudo": "cokin.solide",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/02/2025"
  },
  {
    "id": "1275871755566846034",
    "pseudo": "Sergent_hugo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/02/2026"
  },
  {
    "id": "1275906420625117321",
    "pseudo": "MaX_D_KKK",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/08/2025"
  },
  {
    "id": "1276181558168125506",
    "pseudo": "Akira-_-KaTana",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/06/2025"
  },
  {
    "id": "1276233420342558813",
    "pseudo": "Foxtrot971",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/08/2024"
  },
  {
    "id": "1276279774817288336",
    "pseudo": "FanXxzeroxxX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/03/2025"
  },
  {
    "id": "1276585715706364037",
    "pseudo": "Djack54",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "1276671762792321025",
    "pseudo": "DaZeD fr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/08/2024"
  },
  {
    "id": "1277019335247925361",
    "pseudo": "Abyss",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/08/2025"
  },
  {
    "id": "1277391544227201034",
    "pseudo": "Sebastien(boby Robert)",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/01/2025"
  },
  {
    "id": "1277755445825765386",
    "pseudo": "Wawa",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "28/08/2024"
  },
  {
    "id": "1277928023571562579",
    "pseudo": "Vive_la_Binouze",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2026"
  },
  {
    "id": "1278402777122340887",
    "pseudo": "Patate sauvage",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2025"
  },
  {
    "id": "1278419415607676989",
    "pseudo": "PaTHoS",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2025"
  },
  {
    "id": "1278445491939442690",
    "pseudo": "Monster-_-HC",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/05/2025"
  },
  {
    "id": "1278452807908855858",
    "pseudo": "BlueGiGi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/06/2025"
  },
  {
    "id": "1278726526086418463",
    "pseudo": "NOMAD14700",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/09/2024"
  },
  {
    "id": "1278849652942307428",
    "pseudo": "Nicolas",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/04/2026"
  },
  {
    "id": "1278980639088971808",
    "pseudo": "Becking66",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/03/2025"
  },
  {
    "id": "1279142956808405045",
    "pseudo": "niko.totoz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/08/2024"
  },
  {
    "id": "1279166324546867281",
    "pseudo": "donatelo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/02/2025"
  },
  {
    "id": "1279235164119105589",
    "pseudo": "Mops",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1279357944164782130",
    "pseudo": "Ludar",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2026"
  },
  {
    "id": "1279579892425560167",
    "pseudo": "Le_Bananier🍌",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2025"
  },
  {
    "id": "1280202871211688007",
    "pseudo": "Gabinjb55",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2025"
  },
  {
    "id": "1280314142003036242",
    "pseudo": "Skørpa#5206",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/09/2024"
  },
  {
    "id": "1280636410432458803",
    "pseudo": "Nagrom95",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/08/2025"
  },
  {
    "id": "1280638013113893009",
    "pseudo": "Nicodouich",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/02/2025"
  },
  {
    "id": "1280852692373078028",
    "pseudo": "brux",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/10/2024"
  },
  {
    "id": "1281916446930112533",
    "pseudo": "Jolan59970",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/07/2025"
  },
  {
    "id": "1281918999114027081",
    "pseudo": "leucky",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2025"
  },
  {
    "id": "1281977678257455334",
    "pseudo": "Princitoo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/03/2026"
  },
  {
    "id": "1282355585286672476",
    "pseudo": "WARAXIZ",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/12/2025"
  },
  {
    "id": "1282363244476108953",
    "pseudo": "Dragniir_82",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/07/2025"
  },
  {
    "id": "1282441995079389265",
    "pseudo": "LvMH-_77",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2026"
  },
  {
    "id": "1282710633263005778",
    "pseudo": "TooFox James",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/01/2025"
  },
  {
    "id": "1283112867608002593",
    "pseudo": "Tirondin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/06/2025"
  },
  {
    "id": "1283137986543751212",
    "pseudo": "22Milooo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/03/2026"
  },
  {
    "id": "1283227070142611487",
    "pseudo": "Qtips",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/03/2025"
  },
  {
    "id": "1283491460355723367",
    "pseudo": "Samuel Zysk",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/10/2024"
  },
  {
    "id": "1283496109599363144",
    "pseudo": "Angus2255",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "27/09/2025"
  },
  {
    "id": "1283695000701632554",
    "pseudo": "jej",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/09/2024"
  },
  {
    "id": "1283862473207845010",
    "pseudo": "PSN: lapastequee78",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/11/2025"
  },
  {
    "id": "1284019053761138781",
    "pseudo": "Jeremygiant94",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/05/2025"
  },
  {
    "id": "1284236926064525390",
    "pseudo": "Dushane",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/05/2025"
  },
  {
    "id": "1284580696723161229",
    "pseudo": "𝓖𝓞𝓛𝓓  𝓡𝓪𝔂𝔃𝓸𝔁 🇫🇷",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2025"
  },
  {
    "id": "1284594150125342852",
    "pseudo": "aalleexxiiss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/09/2025"
  },
  {
    "id": "1284905854163750924",
    "pseudo": "Balade DanceMoula",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/04/2025"
  },
  {
    "id": "1285156244100878359",
    "pseudo": "Vrael",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/10/2024"
  },
  {
    "id": "1285368734047014936",
    "pseudo": "Babaganoushda",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2026"
  },
  {
    "id": "1285645430012645377",
    "pseudo": "M.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2025"
  },
  {
    "id": "1285900361571504194",
    "pseudo": "Azmogg",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/12/2024"
  },
  {
    "id": "1287595467122806836",
    "pseudo": "Youu8013",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/05/2025"
  },
  {
    "id": "1287785908224921705",
    "pseudo": "Sk1t Majors",
    "role": "Soldat",
    "grade": "Sergent",
    "joinDate": "23/09/2024"
  },
  {
    "id": "1287893316737957908",
    "pseudo": "Duty72",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/07/2025"
  },
  {
    "id": "1288256867155312652",
    "pseudo": "Neant91",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2026"
  },
  {
    "id": "1288340340969046138",
    "pseudo": "NicoHaze",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/06/2025"
  },
  {
    "id": "1288494082062286900",
    "pseudo": "KZ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/07/2025"
  },
  {
    "id": "1289294421917171754",
    "pseudo": "[SDT] Guerrierdu226",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/04/2025"
  },
  {
    "id": "1289312438172385315",
    "pseudo": "Elfennex8",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2025"
  },
  {
    "id": "1289518696812908574",
    "pseudo": "Abdel Moukat / Ashot_9876",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/11/2025"
  },
  {
    "id": "1289622749458731092",
    "pseudo": "𝒮𝓅ℯ𝒸𝓉𝓇ℯ𝒩ℴ𝒸𝓉𝓊𝓇𝓃ℯ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/12/2025"
  },
  {
    "id": "1289635859989135382",
    "pseudo": "Dadawan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/02/2025"
  },
  {
    "id": "1289637651585962066",
    "pseudo": "myky",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/09/2024"
  },
  {
    "id": "1289662399846027269",
    "pseudo": "Dvildu92",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/01/2025"
  },
  {
    "id": "1289705556482986005",
    "pseudo": "Kylian",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/02/2026"
  },
  {
    "id": "1289901780066635860",
    "pseudo": "renardblanc",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/12/2024"
  },
  {
    "id": "1289934082603483188",
    "pseudo": "Pit4482",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/02/2025"
  },
  {
    "id": "1290038390183690272",
    "pseudo": "ALI LA POINTE ( Omar l fraise)",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/06/2025"
  },
  {
    "id": "1290233136218898433",
    "pseudo": "HATF SENZA",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/12/2024"
  },
  {
    "id": "1290275598895415357",
    "pseudo": "KhalilClr16",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/05/2025"
  },
  {
    "id": "1290349527899046032",
    "pseudo": "Arrxss",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/03/2025"
  },
  {
    "id": "1290631042960461848",
    "pseudo": "ledoc41",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "01/10/2024"
  },
  {
    "id": "1290659506375622687",
    "pseudo": "petitsac",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/10/2024"
  },
  {
    "id": "1291343425223790614",
    "pseudo": "shark",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/11/2024"
  },
  {
    "id": "1291411354724339795",
    "pseudo": "DarkMorse666",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "1291663504675180627",
    "pseudo": "Nettoyeur🇫🇷🇺🇦",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "06/03/2025"
  },
  {
    "id": "1292034196012793928",
    "pseudo": "Wonka",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/10/2024"
  },
  {
    "id": "1292051903793860675",
    "pseudo": "Steven",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/10/2024"
  },
  {
    "id": "1292107003996409897",
    "pseudo": "Keyylox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/02/2026"
  },
  {
    "id": "1292176599042490470",
    "pseudo": "Active gambler",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "1292862755472277554",
    "pseudo": "Bigmousse 2.0",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "13/12/2024"
  },
  {
    "id": "1292876177689808906",
    "pseudo": "grumpy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/03/2025"
  },
  {
    "id": "1292882532836315190",
    "pseudo": "Jyxq_L",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/01/2026"
  },
  {
    "id": "1293229659298992271",
    "pseudo": "jej",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/10/2024"
  },
  {
    "id": "1293303172890103973",
    "pseudo": "Hasker",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/12/2024"
  },
  {
    "id": "1293319091490132008",
    "pseudo": "Notbaduncle",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/05/2025"
  },
  {
    "id": "1293453467079147612",
    "pseudo": "Superbabotes",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/10/2024"
  },
  {
    "id": "1293947865093115914",
    "pseudo": "mxm80",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/12/2024"
  },
  {
    "id": "1294197499594281026",
    "pseudo": "bobby",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2024"
  },
  {
    "id": "1294385509417750690",
    "pseudo": "Lapointe Cristophe (faze_sachob)",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1294431963238895696",
    "pseudo": "LossV971",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/07/2025"
  },
  {
    "id": "1294741079396192390",
    "pseudo": "Alonso",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/02/2025"
  },
  {
    "id": "1295020694958243915",
    "pseudo": "Jojo94",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/10/2024"
  },
  {
    "id": "1295380202024734853",
    "pseudo": "CHILLREDCAP",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2025"
  },
  {
    "id": "1295389841143496886",
    "pseudo": "PUNICHER 59172",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "21/01/2026"
  },
  {
    "id": "1295391049681862748",
    "pseudo": "𝐑𝐄𝐔𝐗",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "1295447792524988537",
    "pseudo": "lone_wolf_87_dtc",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2026"
  },
  {
    "id": "1295762832306081887",
    "pseudo": "titieaunes",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "09/11/2024"
  },
  {
    "id": "1295877783557243037",
    "pseudo": "Doubzzz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2026"
  },
  {
    "id": "1296142313843851317",
    "pseudo": "Oaffamé",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/09/2025"
  },
  {
    "id": "1296791608519299076",
    "pseudo": "OzzyGEEK",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/12/2024"
  },
  {
    "id": "1296920961165037630",
    "pseudo": "Esteban",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/11/2024"
  },
  {
    "id": "1296945105545986048",
    "pseudo": "Bosco91158",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "24/05/2025"
  },
  {
    "id": "1297098294329217067",
    "pseudo": "Mryse225",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/10/2024"
  },
  {
    "id": "1297163545808736358",
    "pseudo": "RubyCamp9236075",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "08/11/2024"
  },
  {
    "id": "1297286493433233480",
    "pseudo": "ghost",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2026"
  },
  {
    "id": "1297640245126365325",
    "pseudo": "Themachete89",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/12/2024"
  },
  {
    "id": "1298246404640084042",
    "pseudo": "SK73125",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/09/2025"
  },
  {
    "id": "1298322758425640981",
    "pseudo": "Sdt. Jams raptor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1298665551622832268",
    "pseudo": "wepelo382",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/11/2025"
  },
  {
    "id": "1298981507334930463",
    "pseudo": "Bebel",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/03/2026"
  },
  {
    "id": "1298984954549764118",
    "pseudo": "Yaya",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/09/2025"
  },
  {
    "id": "1298999649339838537",
    "pseudo": "JteRushEnRS6",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/03/2025"
  },
  {
    "id": "1299453345542439024",
    "pseudo": "Nonolebreton",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/07/2025"
  },
  {
    "id": "1299823623712018485",
    "pseudo": "Padre_ita",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2025"
  },
  {
    "id": "1299852993587314718",
    "pseudo": "AM_LaK7",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2026"
  },
  {
    "id": "1300162975709270047",
    "pseudo": "Anax3oy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/06/2025"
  },
  {
    "id": "1300516216120803392",
    "pseudo": "Kouider369",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2026"
  },
  {
    "id": "1300522713441501278",
    "pseudo": "Pans",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/01/2025"
  },
  {
    "id": "1300615963577942047",
    "pseudo": "Lawazizance",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/05/2025"
  },
  {
    "id": "1300834854233051278",
    "pseudo": "Amandeus",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/09/2025"
  },
  {
    "id": "1300863677171372044",
    "pseudo": "Skyfly",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/03/2026"
  },
  {
    "id": "1300940199492321354",
    "pseudo": "Alicato_9",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/08/2025"
  },
  {
    "id": "1301153745891233822",
    "pseudo": "maxou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/12/2024"
  },
  {
    "id": "1301451022459342858",
    "pseudo": "Hlodowig27",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "15/11/2024"
  },
  {
    "id": "1301499171248934996",
    "pseudo": "dracosixnight",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/11/2024"
  },
  {
    "id": "1301508802591592459",
    "pseudo": "hugo95700",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2026"
  },
  {
    "id": "1301533540038475856",
    "pseudo": "JaegerJack",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/10/2024"
  },
  {
    "id": "1301553613285490819",
    "pseudo": "Leya Barel",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/05/2025"
  },
  {
    "id": "1301640560896901123",
    "pseudo": "Tekkîng",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/04/2026"
  },
  {
    "id": "1301851111141150720",
    "pseudo": "Romdax",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/01/2025"
  },
  {
    "id": "1302006798420541471",
    "pseudo": "LoriMox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2025"
  },
  {
    "id": "1302414874122522646",
    "pseudo": "Mouss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/07/2025"
  },
  {
    "id": "1302622418099109909",
    "pseudo": "Greg Hugue",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2025"
  },
  {
    "id": "1302626375299235840",
    "pseudo": "Tarznek",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2024"
  },
  {
    "id": "1303065472811532380",
    "pseudo": "Extraxod",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/01/2025"
  },
  {
    "id": "1303376566948073484",
    "pseudo": "AXEL33",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/11/2024"
  },
  {
    "id": "1303416984410521654",
    "pseudo": "OTS_FlySoon",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/06/2025"
  },
  {
    "id": "1303578154895540307",
    "pseudo": "00nathan00",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "15/07/2025"
  },
  {
    "id": "1303650196344934400",
    "pseudo": "ElBallouti84",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/12/2025"
  },
  {
    "id": "1303753016498716742",
    "pseudo": "chinsudark",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2025"
  },
  {
    "id": "1303785512959742063",
    "pseudo": "Nicotvt33",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/05/2025"
  },
  {
    "id": "1303814673820287016",
    "pseudo": "Bouttbout",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/11/2024"
  },
  {
    "id": "1304142500327329806",
    "pseudo": "yasso-el-nino",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "10/12/2025"
  },
  {
    "id": "1304178461694365739",
    "pseudo": "Lil_barn26",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "1304462624221827205",
    "pseudo": "Nono56",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2025"
  },
  {
    "id": "1304554913946144868",
    "pseudo": "FMJ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/07/2025"
  },
  {
    "id": "1304873632635289672",
    "pseudo": "Holafdp",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2025"
  },
  {
    "id": "1305201180053475332",
    "pseudo": "Maniacfou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/11/2024"
  },
  {
    "id": "1305616851362906232",
    "pseudo": "CAP PHIL",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/11/2024"
  },
  {
    "id": "1305864707072200725",
    "pseudo": "xr99",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/01/2025"
  },
  {
    "id": "1306004946965102704",
    "pseudo": "l_Vuzze_l",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/06/2025"
  },
  {
    "id": "1306027271454195925",
    "pseudo": "Carnage",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/09/2025"
  },
  {
    "id": "1306217786548420638",
    "pseudo": "Eaglefire771",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/02/2026"
  },
  {
    "id": "1306231596021452893",
    "pseudo": "CCH1.Kishin7245",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/02/2025"
  },
  {
    "id": "1306297131090575451",
    "pseudo": "Sc SoaP 88",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/05/2025"
  },
  {
    "id": "1306791586893398039",
    "pseudo": "Sgt.narim",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "12/12/2024"
  },
  {
    "id": "1307103049407270922",
    "pseudo": "Oo LoLita Oo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/05/2025"
  },
  {
    "id": "1307204044695273536",
    "pseudo": "Moss",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2025"
  },
  {
    "id": "1307321437698265089",
    "pseudo": "Saturn",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/09/2025"
  },
  {
    "id": "1307365867906138164",
    "pseudo": "Psykozz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/11/2024"
  },
  {
    "id": "1307488012187471954",
    "pseudo": "Hans",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/09/2025"
  },
  {
    "id": "1307489140572426291",
    "pseudo": "THALSOH",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/12/2024"
  },
  {
    "id": "1307575941098111067",
    "pseudo": "Lecochon123",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/09/2025"
  },
  {
    "id": "1307668311680745474",
    "pseudo": "Alex",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2026"
  },
  {
    "id": "1307765085367963728",
    "pseudo": "carl cox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/12/2024"
  },
  {
    "id": "1308057343904448614",
    "pseudo": "Dovidove",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/07/2025"
  },
  {
    "id": "1308058904948637809",
    "pseudo": "aksl63",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/01/2026"
  },
  {
    "id": "1308214906692309032",
    "pseudo": "max",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/11/2024"
  },
  {
    "id": "1308215983873196032",
    "pseudo": "max",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/11/2024"
  },
  {
    "id": "1308404301382549556",
    "pseudo": "Martim_2010",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/11/2024"
  },
  {
    "id": "1308512348549550090",
    "pseudo": "kyrito",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/11/2024"
  },
  {
    "id": "1308524924314456205",
    "pseudo": "ebola",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/11/2024"
  },
  {
    "id": "1308734810352648257",
    "pseudo": "Dkaprioo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/11/2024"
  },
  {
    "id": "1308990998474522674",
    "pseudo": "Killian",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/07/2025"
  },
  {
    "id": "1309144437972140124",
    "pseudo": "jarry.bastien.87",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/06/2025"
  },
  {
    "id": "1309662476086022247",
    "pseudo": "Venom",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/01/2025"
  },
  {
    "id": "1310278383279538247",
    "pseudo": "balkiore34",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/02/2025"
  },
  {
    "id": "1310669759834095627",
    "pseudo": "Keuk",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/08/2025"
  },
  {
    "id": "1310694750868869120",
    "pseudo": "AT0MIC W4RRIOR",
    "role": "Soldat",
    "grade": "Adjudant",
    "joinDate": "15/01/2025"
  },
  {
    "id": "1311041385809313803",
    "pseudo": "AdOx_DuTy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/07/2025"
  },
  {
    "id": "1311213911357259826",
    "pseudo": "Gab",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/01/2025"
  },
  {
    "id": "1311470505605206127",
    "pseudo": "Datuga23",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2025"
  },
  {
    "id": "1311712296304771117",
    "pseudo": "Oscaro",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "1311973689323028520",
    "pseudo": "J4y2s",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/11/2024"
  },
  {
    "id": "1312010425893781546",
    "pseudo": "Vinchy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/01/2025"
  },
  {
    "id": "1312478452389249136",
    "pseudo": "THC_BenBeng-18",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/07/2025"
  },
  {
    "id": "1312503951555559516",
    "pseudo": "Ahmed",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/11/2024"
  },
  {
    "id": "1312507606777987203",
    "pseudo": "Chris",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/03/2025"
  },
  {
    "id": "1312792665066045452",
    "pseudo": "Dragonfou#1387",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/12/2024"
  },
  {
    "id": "1312851564863422578",
    "pseudo": "Monckey",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/12/2024"
  },
  {
    "id": "1312927224252465245",
    "pseudo": "ant_jvbz777",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/05/2025"
  },
  {
    "id": "1313464632215601273",
    "pseudo": "INFLEX_MLG",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/07/2025"
  },
  {
    "id": "1313595581305720863",
    "pseudo": "Batkimbo23",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/01/2025"
  },
  {
    "id": "1313617219032186932",
    "pseudo": "+SwissSergeant+",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/08/2025"
  },
  {
    "id": "1313651370846322770",
    "pseudo": "tropikash",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/05/2025"
  },
  {
    "id": "1313966040010723470",
    "pseudo": "SFX Sleezy",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/03/2025"
  },
  {
    "id": "1314189115570520065",
    "pseudo": "Mcburnay",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/01/2025"
  },
  {
    "id": "1314328232245465115",
    "pseudo": "Zinzin119075",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/03/2025"
  },
  {
    "id": "1314359518184083552",
    "pseudo": "Keke",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2025"
  },
  {
    "id": "1314504502606299182",
    "pseudo": "medusa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/01/2025"
  },
  {
    "id": "1314603411949228164",
    "pseudo": "Asteromoon",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "24/09/2025"
  },
  {
    "id": "1314711638972301424",
    "pseudo": "Nico",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2026"
  },
  {
    "id": "1314722385504501940",
    "pseudo": "Daryle tarkov  / ACW Darker",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/08/2025"
  },
  {
    "id": "1314918307018702889",
    "pseudo": "Ghali93240",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "06/06/2025"
  },
  {
    "id": "1314980011585048600",
    "pseudo": "tahitian-BOYS83🇵🇫",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1315025714637967463",
    "pseudo": "Ray",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/12/2024"
  },
  {
    "id": "1315397423882960969",
    "pseudo": "MrPtiMaro",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/12/2024"
  },
  {
    "id": "1315404117123924009",
    "pseudo": "Vaporous",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/03/2025"
  },
  {
    "id": "1315956268162224168",
    "pseudo": "sig",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/12/2024"
  },
  {
    "id": "1316018007352283186",
    "pseudo": "Guil44",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/10/2025"
  },
  {
    "id": "1316394696162934947",
    "pseudo": "French-Zombi",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/03/2025"
  },
  {
    "id": "1316425859023896616",
    "pseudo": "Simon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1316813712606101578",
    "pseudo": "Piairo.Ghost",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/06/2025"
  },
  {
    "id": "1317055160735891487",
    "pseudo": "Jon@",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/12/2024"
  },
  {
    "id": "1317450589981900831",
    "pseudo": "Matt",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/05/2025"
  },
  {
    "id": "1317537577758097502",
    "pseudo": "Moder",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/02/2026"
  },
  {
    "id": "1317544252691185787",
    "pseudo": "Enlenwen",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2025"
  },
  {
    "id": "1317577336320692226",
    "pseudo": "Tetrazepam",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2025"
  },
  {
    "id": "1317581672081915918",
    "pseudo": "Lerat1630",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/07/2025"
  },
  {
    "id": "1317583185109844039",
    "pseudo": "Sopico95",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/01/2026"
  },
  {
    "id": "1317810034691936256",
    "pseudo": "Z2ne59",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/06/2025"
  },
  {
    "id": "1317864587043012621",
    "pseudo": "Sugarfranckyy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/12/2024"
  },
  {
    "id": "1318912885115588650",
    "pseudo": "geule2schnitz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2025"
  },
  {
    "id": "1318916207415529472",
    "pseudo": "Oto556",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/01/2025"
  },
  {
    "id": "1319006951513788480",
    "pseudo": "Jack",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/12/2024"
  },
  {
    "id": "1319013759456641070",
    "pseudo": "_mehdi",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/03/2025"
  },
  {
    "id": "1319099993134465034",
    "pseudo": "AtlasHRV",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/03/2025"
  },
  {
    "id": "1319296699168194661",
    "pseudo": "Jei_raw",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/12/2024"
  },
  {
    "id": "1319361839435485186",
    "pseudo": "OxidE-|-AlphA",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/10/2025"
  },
  {
    "id": "1319649621827522602",
    "pseudo": "Frank LeKeuf",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/02/2025"
  },
  {
    "id": "1319652979028135946",
    "pseudo": "PanzerKampf39",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2026"
  },
  {
    "id": "1319765818686574623",
    "pseudo": "m4x1mat0re",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/05/2025"
  },
  {
    "id": "1319775832402825388",
    "pseudo": "Despe76",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/02/2026"
  },
  {
    "id": "1320014577873846383",
    "pseudo": "Harry Callahan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/12/2024"
  },
  {
    "id": "1320104462034931802",
    "pseudo": "Jockair1290",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/03/2025"
  },
  {
    "id": "1320322209868152852",
    "pseudo": "Neosis__84",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2025"
  },
  {
    "id": "1320386469394780271",
    "pseudo": "Vipertoxic71",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2025"
  },
  {
    "id": "1320397963696013345",
    "pseudo": "Stiff",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/08/2025"
  },
  {
    "id": "1320472639567036436",
    "pseudo": "︻デ— Fanta Citron",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/03/2025"
  },
  {
    "id": "1320484047184728134",
    "pseudo": "Kedos",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2024"
  },
  {
    "id": "1320491918546964583",
    "pseudo": "DogonmythFR",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/09/2025"
  },
  {
    "id": "1320766493608120342",
    "pseudo": "Ty_Grew",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/12/2024"
  },
  {
    "id": "1320794715074990110",
    "pseudo": "mario11424",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/03/2026"
  },
  {
    "id": "1320806096884990048",
    "pseudo": "LaZonne13",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/03/2026"
  },
  {
    "id": "1321112303483224156",
    "pseudo": "Franpom",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/12/2024"
  },
  {
    "id": "1321425329923035137",
    "pseudo": "Take",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/02/2026"
  },
  {
    "id": "1321548245498855434",
    "pseudo": "Yanakuza",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "08/10/2025"
  },
  {
    "id": "1321562670771601470",
    "pseudo": "max",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/06/2025"
  },
  {
    "id": "1321568443530743892",
    "pseudo": "Gael",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/12/2024"
  },
  {
    "id": "1321853202697683016",
    "pseudo": "ANAKINXI_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/03/2026"
  },
  {
    "id": "1321931808820166818",
    "pseudo": "Chuck Maurice",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/12/2024"
  },
  {
    "id": "1321936046996455568",
    "pseudo": "Mannyribeira",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/05/2025"
  },
  {
    "id": "1321975576982196234",
    "pseudo": "Tomzitoune",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2025"
  },
  {
    "id": "1322011684906467338",
    "pseudo": "wALLOU01",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/12/2024"
  },
  {
    "id": "1322047351627452466",
    "pseudo": "Frutaxx",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "24/05/2025"
  },
  {
    "id": "1322166947785474053",
    "pseudo": "LYNX-L3G3NDSAO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/01/2026"
  },
  {
    "id": "1322338367039602748",
    "pseudo": "DRX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2024"
  },
  {
    "id": "1322345765804445757",
    "pseudo": "Titus",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2025"
  },
  {
    "id": "1322961519490633830",
    "pseudo": "Lilou31",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/08/2025"
  },
  {
    "id": "1323013795588604076",
    "pseudo": "Rudydelarue/kartmandu77",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/06/2025"
  },
  {
    "id": "1323048188382417047",
    "pseudo": "PasPrisk_",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "06/02/2026"
  },
  {
    "id": "1323063619847458879",
    "pseudo": "Damoenhit",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/01/2025"
  },
  {
    "id": "1323063702643281962",
    "pseudo": "DRaSkO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/03/2025"
  },
  {
    "id": "1323296170461626471",
    "pseudo": "bakflush73800",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/02/2025"
  },
  {
    "id": "1323424514557739131",
    "pseudo": "Peaky672",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2025"
  },
  {
    "id": "1323639837051588733",
    "pseudo": "Vladimir Petrouchka (Biscuit 🍪)",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2025"
  },
  {
    "id": "1323660860366917684",
    "pseudo": "Azerix.08",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/12/2024"
  },
  {
    "id": "1323685544454127697",
    "pseudo": "TontonSeBO9🇧🇪",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/01/2026"
  },
  {
    "id": "1323928666735906928",
    "pseudo": "Driftmonkey",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2026"
  },
  {
    "id": "1323980749396774916",
    "pseudo": "K€n2ø",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/04/2026"
  },
  {
    "id": "1323982579086655571",
    "pseudo": "NRO Obi Wick",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "1324038756419895378",
    "pseudo": "Elpipinade",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/01/2025"
  },
  {
    "id": "1324084998910771272",
    "pseudo": "Mezcaleros",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/02/2025"
  },
  {
    "id": "1324166378735013988",
    "pseudo": "Maitredragon12",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/07/2025"
  },
  {
    "id": "1324460694950641716",
    "pseudo": "Le_Grand_Duff",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/10/2025"
  },
  {
    "id": "1324671148130041940",
    "pseudo": "274894",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2025"
  },
  {
    "id": "1324750616421203989",
    "pseudo": "romain bruno",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2025"
  },
  {
    "id": "1324775599050588162",
    "pseudo": "raptor9550",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2025"
  },
  {
    "id": "1324813917297578027",
    "pseudo": "Hugues",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "13/09/2025"
  },
  {
    "id": "1325050645388202057",
    "pseudo": "Bmc",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/02/2025"
  },
  {
    "id": "1325089687429451857",
    "pseudo": "Noob",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2025"
  },
  {
    "id": "1325151284818477086",
    "pseudo": "Fat Man",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/06/2025"
  },
  {
    "id": "1325163908884987976",
    "pseudo": "664775",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/03/2026"
  },
  {
    "id": "1325215699572101271",
    "pseudo": "pinkfox22",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/04/2026"
  },
  {
    "id": "1325377020485697557",
    "pseudo": "XxManchettexX",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "24/10/2025"
  },
  {
    "id": "1325493697923518479",
    "pseudo": "Beau sapin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "1325540095339528342",
    "pseudo": "anthony",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/01/2025"
  },
  {
    "id": "1325557650964090943",
    "pseudo": "Jean",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2025"
  },
  {
    "id": "1325600491551592471",
    "pseudo": "Cheche",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/01/2026"
  },
  {
    "id": "1325773821306994688",
    "pseudo": "Torvik_64",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/07/2025"
  },
  {
    "id": "1325848692342788126",
    "pseudo": "slayer",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/01/2025"
  },
  {
    "id": "1325867550281568348",
    "pseudo": "FamaS4",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/01/2025"
  },
  {
    "id": "1326060635519455237",
    "pseudo": "Chuck / KanaWand",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/01/2025"
  },
  {
    "id": "1326150555181252610",
    "pseudo": "Mickael_drch",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/03/2026"
  },
  {
    "id": "1326155752359854091",
    "pseudo": "Nickel-Ange28",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/06/2025"
  },
  {
    "id": "1326255072123949117",
    "pseudo": "DDduNord",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/01/2025"
  },
  {
    "id": "1326605216753258568",
    "pseudo": "Zambik05",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/01/2025"
  },
  {
    "id": "1326638380859260978",
    "pseudo": "Mamba",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1326663238300991529",
    "pseudo": "KUURZATOR",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "13/01/2025"
  },
  {
    "id": "1326677066774610031",
    "pseudo": "Grillon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2025"
  },
  {
    "id": "1326879727444824138",
    "pseudo": "AD",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/01/2025"
  },
  {
    "id": "1326880962209910838",
    "pseudo": "Dan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/01/2025"
  },
  {
    "id": "1327020063613521943",
    "pseudo": "Archange 33350",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/01/2026"
  },
  {
    "id": "1327026044536094801",
    "pseudo": "Fox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2026"
  },
  {
    "id": "1327626489365008435",
    "pseudo": "seb83",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/06/2025"
  },
  {
    "id": "1327684709081288735",
    "pseudo": "JD72",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/05/2025"
  },
  {
    "id": "1327688457505476752",
    "pseudo": "Bastienhnt",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/01/2025"
  },
  {
    "id": "1327975167661576222",
    "pseudo": "NicoJOsSs-BZH",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/06/2025"
  },
  {
    "id": "1327977499245940840",
    "pseudo": "initialz-APEX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/05/2025"
  },
  {
    "id": "1328442005159673970",
    "pseudo": "Vodkar",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2026"
  },
  {
    "id": "1328513787065794570",
    "pseudo": "Spicyblud",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/01/2025"
  },
  {
    "id": "1328594213385797718",
    "pseudo": "GloriousRooK100",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/03/2026"
  },
  {
    "id": "1328664741836755008",
    "pseudo": "Berni",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/01/2025"
  },
  {
    "id": "1329076864039518308",
    "pseudo": "Tomo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/01/2025"
  },
  {
    "id": "1329170013827108887",
    "pseudo": "MaxSofter",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/01/2025"
  },
  {
    "id": "1329192715136532523",
    "pseudo": "BusSaturne35",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2025"
  },
  {
    "id": "1329548898167165054",
    "pseudo": "Chuck",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/01/2025"
  },
  {
    "id": "1329603410210590882",
    "pseudo": "Anthony Naessens",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/03/2026"
  },
  {
    "id": "1329835309625643019",
    "pseudo": "Benao5626",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2025"
  },
  {
    "id": "1329840130575302682",
    "pseudo": "Alex Tremit",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/05/2025"
  },
  {
    "id": "1329929651556192398",
    "pseudo": "Carolyn Thomas",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/02/2025"
  },
  {
    "id": "1329950715292160083",
    "pseudo": "Maverik",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "18/01/2025"
  },
  {
    "id": "1330100516239441920",
    "pseudo": "luminaxe30_91430",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/01/2026"
  },
  {
    "id": "1330164082564665407",
    "pseudo": "Digi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2025"
  },
  {
    "id": "1330200385599701002",
    "pseudo": "leo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2025"
  },
  {
    "id": "1330240321300467905",
    "pseudo": "ronanmlr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/01/2025"
  },
  {
    "id": "1330348394581069925",
    "pseudo": "dini.1860",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/02/2025"
  },
  {
    "id": "1330473476405854220",
    "pseudo": "shoote",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2025"
  },
  {
    "id": "1330501856233001012",
    "pseudo": "Fatih2542",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2025"
  },
  {
    "id": "1330688059749957644",
    "pseudo": "Vapiano7654",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2025"
  },
  {
    "id": "1331015717071618049",
    "pseudo": "French-dark34",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/06/2025"
  },
  {
    "id": "1331333784263589924",
    "pseudo": "Hashka667",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2025"
  },
  {
    "id": "1331373429923774583",
    "pseudo": ".",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/02/2026"
  },
  {
    "id": "1331449784892002408",
    "pseudo": "Yannick",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/05/2025"
  },
  {
    "id": "1331611612607676427",
    "pseudo": "N1rKie",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2026"
  },
  {
    "id": "1331710555316289617",
    "pseudo": "Ninja_s01",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/07/2025"
  },
  {
    "id": "1331729001261174798",
    "pseudo": "nems-la-bastos",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/06/2025"
  },
  {
    "id": "1331758041888067672",
    "pseudo": "Madteck02",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2025"
  },
  {
    "id": "1331919649734131807",
    "pseudo": "Ririrallye01",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/01/2025"
  },
  {
    "id": "1332004117379420212",
    "pseudo": "Medzy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/02/2026"
  },
  {
    "id": "1332102154596384790",
    "pseudo": "olive",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/01/2025"
  },
  {
    "id": "1332206705618190378",
    "pseudo": "FaNtomass-100",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/09/2025"
  },
  {
    "id": "1332382081124401289",
    "pseudo": "Blackbierd",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "24/01/2025"
  },
  {
    "id": "1332456054759493696",
    "pseudo": "MacAngelito",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "26/01/2025"
  },
  {
    "id": "1332469090601795605",
    "pseudo": "mboroux09",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/10/2025"
  },
  {
    "id": "1332571420701757441",
    "pseudo": "chenepizza53787",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/01/2025"
  },
  {
    "id": "1332773843932024959",
    "pseudo": "tequilarhum",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/01/2025"
  },
  {
    "id": "1332868283321552936",
    "pseudo": "Punisher Wagner ThePunisher_-_57",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2025"
  },
  {
    "id": "1332868616172994612",
    "pseudo": "Ovni_320",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/11/2025"
  },
  {
    "id": "1333004871120715830",
    "pseudo": "Tomahock38",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "27/08/2025"
  },
  {
    "id": "1333034512732655670",
    "pseudo": "snake bzh",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/01/2025"
  },
  {
    "id": "1333041280800002119",
    "pseudo": "Fred180776",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "28/02/2025"
  },
  {
    "id": "1333073122382843914",
    "pseudo": "NAPOL3ON FR",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/03/2025"
  },
  {
    "id": "1333137106893148181",
    "pseudo": "alessio_virone19",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/01/2026"
  },
  {
    "id": "1333139737120342197",
    "pseudo": "Julus",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/03/2025"
  },
  {
    "id": "1333147324398043328",
    "pseudo": "Tibo-cbr",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/04/2026"
  },
  {
    "id": "1333327771153465384",
    "pseudo": "Dub",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2025"
  },
  {
    "id": "1333460402419404956",
    "pseudo": "wolf",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2025"
  },
  {
    "id": "1333464789111803924",
    "pseudo": "Drilleur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/01/2025"
  },
  {
    "id": "1333476100931588200",
    "pseudo": "Lek Nocap",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/02/2025"
  },
  {
    "id": "1333498440998453309",
    "pseudo": "Réalite",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/08/2025"
  },
  {
    "id": "1333570147302117386",
    "pseudo": "Riyad920",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/03/2026"
  },
  {
    "id": "1333841766260015175",
    "pseudo": "TROYKA",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2025"
  },
  {
    "id": "1333894674158587935",
    "pseudo": "LeMatou30",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/01/2025"
  },
  {
    "id": "1333914417183588498",
    "pseudo": "Nxbvsh",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/08/2025"
  },
  {
    "id": "1334089805763444769",
    "pseudo": "santamerte",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/01/2025"
  },
  {
    "id": "1334108862193729558",
    "pseudo": "Mickey_Stup",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1334147300754198548",
    "pseudo": "yoyo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/01/2025"
  },
  {
    "id": "1334232172285919363",
    "pseudo": "LAfleche0",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "1334749942132117518",
    "pseudo": "Harrigan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2025"
  },
  {
    "id": "1334838397881028650",
    "pseudo": "infectedparadise",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2025"
  },
  {
    "id": "1334921022616637622",
    "pseudo": "Flo.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2025"
  },
  {
    "id": "1335003116394778645",
    "pseudo": "Ares",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2026"
  },
  {
    "id": "1335200248389435483",
    "pseudo": "Kawwa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "1335254791219318826",
    "pseudo": "-=YoDaa=-",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "1335271374641430652",
    "pseudo": "Sertorix",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/11/2025"
  },
  {
    "id": "1335275806263480331",
    "pseudo": "moss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "1335295788846415933",
    "pseudo": "Michel",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "1335297777315479684",
    "pseudo": "Awareness",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2025"
  },
  {
    "id": "1335340814175436872",
    "pseudo": "Butters422",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/02/2025"
  },
  {
    "id": "1335359297042911322",
    "pseudo": "Mangeur_2_mafe",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2025"
  },
  {
    "id": "1335639472917839923",
    "pseudo": "Gachim57",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2025"
  },
  {
    "id": "1335650230070415411",
    "pseudo": "Julnoa68",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2025"
  },
  {
    "id": "1335755765184463011",
    "pseudo": "ViKincy_411",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/03/2026"
  },
  {
    "id": "1335992921186373744",
    "pseudo": "ExQ_YooNo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/06/2025"
  },
  {
    "id": "1336322668173197393",
    "pseudo": "Fr3nchVik1ng",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "28/02/2026"
  },
  {
    "id": "1336361207506010113",
    "pseudo": "Lorogima",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/02/2025"
  },
  {
    "id": "1336373892201189408",
    "pseudo": "Geant_vert_77",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/02/2025"
  },
  {
    "id": "1336391223052865546",
    "pseudo": "Ben",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/11/2025"
  },
  {
    "id": "1336482388913422407",
    "pseudo": "Poe-solo24",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1336764075027337248",
    "pseudo": "Chiefkeef",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/02/2025"
  },
  {
    "id": "1336785752184455298",
    "pseudo": "WizZerD",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "1336822223343980630",
    "pseudo": "Riyad",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/11/2025"
  },
  {
    "id": "1336877277857710120",
    "pseudo": "AnthoHS_MoDZz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/07/2025"
  },
  {
    "id": "1337074605461868544",
    "pseudo": "Arduin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2025"
  },
  {
    "id": "1337075185253089300",
    "pseudo": "matgoste",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/07/2025"
  },
  {
    "id": "1337210672437792768",
    "pseudo": "Le-chtii-pompiers",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/02/2025"
  },
  {
    "id": "1337434339176353867",
    "pseudo": "Mitch75123",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/02/2025"
  },
  {
    "id": "1337625399407939637",
    "pseudo": "Doggy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2025"
  },
  {
    "id": "1337727048042418176",
    "pseudo": "Frenchyfred",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/02/2025"
  },
  {
    "id": "1337797579714330667",
    "pseudo": "lyxx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/02/2025"
  },
  {
    "id": "1337797931662708769",
    "pseudo": "PtitVieux",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "29/12/2025"
  },
  {
    "id": "1337824898155942021",
    "pseudo": "Mari987",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/02/2025"
  },
  {
    "id": "1338151363904933910",
    "pseudo": "YOSHI-1988",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2025"
  },
  {
    "id": "1338242424153047082",
    "pseudo": "maxou71",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2025"
  },
  {
    "id": "1338272318786502686",
    "pseudo": "Knight",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2025"
  },
  {
    "id": "1338499234256916513",
    "pseudo": "kalash",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "1338527700016562350",
    "pseudo": "Adrien",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/02/2025"
  },
  {
    "id": "1338851605075984499",
    "pseudo": "Seigneur-sensei",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/02/2025"
  },
  {
    "id": "1338971650812805151",
    "pseudo": "Milou",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/02/2025"
  },
  {
    "id": "1339330518826618943",
    "pseudo": "Bostrom8877",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/04/2026"
  },
  {
    "id": "1339340371754221710",
    "pseudo": "JKO",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/02/2025"
  },
  {
    "id": "1339549983585599529",
    "pseudo": "Lodulus",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/02/2025"
  },
  {
    "id": "1339624984523444274",
    "pseudo": "TIKKAOT",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/02/2025"
  },
  {
    "id": "1339679414870343731",
    "pseudo": "Nasty_nono",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/07/2025"
  },
  {
    "id": "1339700914587439125",
    "pseudo": "fury.test",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2025"
  },
  {
    "id": "1339702598500094043",
    "pseudo": "R6-smertrios [Найкращий]",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/05/2025"
  },
  {
    "id": "1339731518112665641",
    "pseudo": "bulll",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/02/2025"
  },
  {
    "id": "1339960076982685716",
    "pseudo": "lav3566",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2026"
  },
  {
    "id": "1339973695258497026",
    "pseudo": "Kolo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/10/2025"
  },
  {
    "id": "1340055850898817179",
    "pseudo": "xxfactoryxx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2025"
  },
  {
    "id": "1340163643571961896",
    "pseudo": "Leroupe96",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/09/2025"
  },
  {
    "id": "1340267910165434389",
    "pseudo": "Belou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2025"
  },
  {
    "id": "1340354790089297941",
    "pseudo": "Ozyreal",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/09/2025"
  },
  {
    "id": "1340674665932132494",
    "pseudo": "Fuutcher",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2025"
  },
  {
    "id": "1340687386585337898",
    "pseudo": "TitedineQc",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2025"
  },
  {
    "id": "1340693025893908570",
    "pseudo": "ALEX MASON",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2025"
  },
  {
    "id": "1340730250522529897",
    "pseudo": "Baobab",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2025"
  },
  {
    "id": "1340960116379484243",
    "pseudo": "florian",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2025"
  },
  {
    "id": "1340994504773210154",
    "pseudo": "Ezephir",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2025"
  },
  {
    "id": "1341021973093945357",
    "pseudo": "Sniper socom",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/02/2025"
  },
  {
    "id": "1341050201405657168",
    "pseudo": "Soulkiriko",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/02/2025"
  },
  {
    "id": "1341297641346039858",
    "pseudo": "Bombatoux176",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/08/2025"
  },
  {
    "id": "1341414307740651582",
    "pseudo": "G",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/02/2025"
  },
  {
    "id": "1341745634474065962",
    "pseudo": "Seb",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/02/2025"
  },
  {
    "id": "1341772413389766763",
    "pseudo": "Gourdin",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/01/2026"
  },
  {
    "id": "1341795188124680202",
    "pseudo": "Zento",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/08/2025"
  },
  {
    "id": "1341800593257271498",
    "pseudo": "Jb",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/02/2025"
  },
  {
    "id": "1341903512111550598",
    "pseudo": "Mariteragi",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/02/2025"
  },
  {
    "id": "1342140507001716839",
    "pseudo": "WazeToxic",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "25/10/2025"
  },
  {
    "id": "1342528951091859538",
    "pseudo": "Kimou94",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/03/2025"
  },
  {
    "id": "1342640856678793367",
    "pseudo": "gfgfg",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2025"
  },
  {
    "id": "1342806202152648806",
    "pseudo": "GHOST",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2025"
  },
  {
    "id": "1342875668442255413",
    "pseudo": "Aristot",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2025"
  },
  {
    "id": "1342882841310007402",
    "pseudo": "Audraay",
    "role": "Soldat",
    "grade": "Sergent",
    "joinDate": "27/08/2025"
  },
  {
    "id": "1342892797048389692",
    "pseudo": "Mangeur de cartes graphiques.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/02/2025"
  },
  {
    "id": "1342899962396278844",
    "pseudo": "Jeyson",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2025"
  },
  {
    "id": "1342991488979570730",
    "pseudo": "LaMass34",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2026"
  },
  {
    "id": "1343293468889583656",
    "pseudo": "𝕱𝖚𝖗𝖎𝖆",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2025"
  },
  {
    "id": "1343352161295405076",
    "pseudo": "☩ Patate sauvage ☩",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/02/2025"
  },
  {
    "id": "1343722338113425510",
    "pseudo": "Lefran343",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2025"
  },
  {
    "id": "1343831016510324830",
    "pseudo": "Bogota",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/02/2025"
  },
  {
    "id": "1343834565415931945",
    "pseudo": "THEO3e",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/02/2025"
  },
  {
    "id": "1344044412660879360",
    "pseudo": "A.Hamelin",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2026"
  },
  {
    "id": "1344297982501322782",
    "pseudo": "Tyler",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/03/2025"
  },
  {
    "id": "1344599179414212641",
    "pseudo": "Blos639",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/02/2026"
  },
  {
    "id": "1344738041373130855",
    "pseudo": "1CL De Sousa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/02/2025"
  },
  {
    "id": "1344748490273853542",
    "pseudo": "Marabote",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/02/2025"
  },
  {
    "id": "1344762263168614433",
    "pseudo": "Lafolle",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/02/2025"
  },
  {
    "id": "1344793322350182430",
    "pseudo": "xXboobbyyXx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/06/2025"
  },
  {
    "id": "1345078668329750590",
    "pseudo": "LLXcrashLLX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2026"
  },
  {
    "id": "1345100442690129930",
    "pseudo": "SOLDATBILDER",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/03/2025"
  },
  {
    "id": "1345402332124286988",
    "pseudo": "Madinromain_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/06/2025"
  },
  {
    "id": "1345705778035560532",
    "pseudo": "Rahim",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "1345872926536368149",
    "pseudo": "Zéphy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/03/2025"
  },
  {
    "id": "1345908510977691670",
    "pseudo": "Jl_Mister_namur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/03/2025"
  },
  {
    "id": "1345927669119713290",
    "pseudo": "RiZe NeXoN",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/05/2025"
  },
  {
    "id": "1346424007452528693",
    "pseudo": "Shaseah",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/03/2025"
  },
  {
    "id": "1346506711480930354",
    "pseudo": "tantris",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2025"
  },
  {
    "id": "1346646622205116509",
    "pseudo": "S C Λ R Ξ D",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2025"
  },
  {
    "id": "1346967874014543972",
    "pseudo": "Pp_Toxic",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "1346971723949670480",
    "pseudo": "Ange",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/03/2025"
  },
  {
    "id": "1347187446915268609",
    "pseudo": "Jbt210819",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/03/2025"
  },
  {
    "id": "1347310891154280448",
    "pseudo": "Samley_123",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/03/2026"
  },
  {
    "id": "1347961531773747240",
    "pseudo": "manusaidi8658",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/01/2026"
  },
  {
    "id": "1347981953600716830",
    "pseudo": "Ewann_07",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/02/2026"
  },
  {
    "id": "1348076875720953937",
    "pseudo": "Dotti",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2025"
  },
  {
    "id": "1348269589619933257",
    "pseudo": "Piste",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/04/2026"
  },
  {
    "id": "1348316234688499799",
    "pseudo": "Abu Ahmad",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/07/2025"
  },
  {
    "id": "1348363114030170214",
    "pseudo": "Koko",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/08/2025"
  },
  {
    "id": "1348403054617165894",
    "pseudo": "headshot",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/03/2025"
  },
  {
    "id": "1348472357534044230",
    "pseudo": "ssbigburnss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/06/2025"
  },
  {
    "id": "1348615352405458954",
    "pseudo": "Eddy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2025"
  },
  {
    "id": "1348651266460614698",
    "pseudo": "CALU",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/08/2025"
  },
  {
    "id": "1348895089539158067",
    "pseudo": "La_guardiaa",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/05/2025"
  },
  {
    "id": "1349000428184141847",
    "pseudo": "Skadra",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2026"
  },
  {
    "id": "1349331351639162950",
    "pseudo": "Totoche40",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/03/2025"
  },
  {
    "id": "1349397488645312553",
    "pseudo": "trykennn",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "12/03/2025"
  },
  {
    "id": "1349525163204673661",
    "pseudo": "[CCH]Ze_metropolis",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "14/06/2025"
  },
  {
    "id": "1349794146625392761",
    "pseudo": "JOKER",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/03/2025"
  },
  {
    "id": "1349904873759445094",
    "pseudo": "Calvin Payne",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/03/2025"
  },
  {
    "id": "1350107521867583628",
    "pseudo": "Greg",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2025"
  },
  {
    "id": "1350141918977200219",
    "pseudo": "Vincent arma reforger",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2025"
  },
  {
    "id": "1350382665131360339",
    "pseudo": "Hades",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/03/2025"
  },
  {
    "id": "1350496967116980264",
    "pseudo": "Vincent Team FOF",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2025"
  },
  {
    "id": "1350763563819732992",
    "pseudo": "LetiTtia-",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "16/03/2025"
  },
  {
    "id": "1350769766616399896",
    "pseudo": "Dan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2025"
  },
  {
    "id": "1350816499883048960",
    "pseudo": "Ken Fei Long",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2025"
  },
  {
    "id": "1350835940695740548",
    "pseudo": "DiD",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "16/03/2025"
  },
  {
    "id": "1350846528557682811",
    "pseudo": "Elite59300",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/03/2026"
  },
  {
    "id": "1351260742925553817",
    "pseudo": "Lugdur",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/03/2025"
  },
  {
    "id": "1351301695577264138",
    "pseudo": "Hibou257_MTE",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/07/2025"
  },
  {
    "id": "1351330449460428800",
    "pseudo": "Keymis",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/03/2025"
  },
  {
    "id": "1351416969412345857",
    "pseudo": "TFSG_Ghost_51412",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/05/2025"
  },
  {
    "id": "1351452319409111142",
    "pseudo": "Le-Décapsuleur",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/03/2025"
  },
  {
    "id": "1351452330469621862",
    "pseudo": "RecoDAXE",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/03/2025"
  },
  {
    "id": "1352001638768050287",
    "pseudo": "xolaras",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/03/2025"
  },
  {
    "id": "1352197402269978628",
    "pseudo": "Nks",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/11/2025"
  },
  {
    "id": "1352329168494526595",
    "pseudo": "tita22",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/03/2025"
  },
  {
    "id": "1352335775047618593",
    "pseudo": "Loquito_92",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/09/2025"
  },
  {
    "id": "1352580584068747336",
    "pseudo": "Glock 21",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "22/03/2025"
  },
  {
    "id": "1352679637938868317",
    "pseudo": "FrenchSup",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1352732613928030239",
    "pseudo": "Ivaannes",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2025"
  },
  {
    "id": "1352806103905210458",
    "pseudo": "Pijalug",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/11/2025"
  },
  {
    "id": "1352811674402422824",
    "pseudo": "Tony Montignac",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/06/2025"
  },
  {
    "id": "1353000581324738610",
    "pseudo": "ibrahima93",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/03/2025"
  },
  {
    "id": "1353368631781883956",
    "pseudo": "yolaak",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/03/2025"
  },
  {
    "id": "1353401559110652035",
    "pseudo": "Thomas",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/04/2025"
  },
  {
    "id": "1353448917848559616",
    "pseudo": "17",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/03/2025"
  },
  {
    "id": "1353829011033292902",
    "pseudo": "Totyz77",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "27/02/2026"
  },
  {
    "id": "1353887917881163842",
    "pseudo": "Guy_la_patate",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/07/2025"
  },
  {
    "id": "1354113887301271643",
    "pseudo": "BRYAN",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/03/2025"
  },
  {
    "id": "1354158679934501025",
    "pseudo": "Raysis",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/03/2025"
  },
  {
    "id": "1354187803566538812",
    "pseudo": "Áron",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/11/2025"
  },
  {
    "id": "1354373457516953752",
    "pseudo": "mathisnaz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/04/2026"
  },
  {
    "id": "1354953285165125692",
    "pseudo": "Tetouns83",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "22/07/2025"
  },
  {
    "id": "1355173307317616801",
    "pseudo": "Kaiser27780",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2026"
  },
  {
    "id": "1355262634336714884",
    "pseudo": "QUANTUM FUSION",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/03/2025"
  },
  {
    "id": "1355343955440697668",
    "pseudo": "Trohen100",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/08/2025"
  },
  {
    "id": "1355483494297374844",
    "pseudo": "Carni",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/07/2025"
  },
  {
    "id": "1355488348021723219",
    "pseudo": "Pi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/03/2025"
  },
  {
    "id": "1355533774888239327",
    "pseudo": "Alban",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/06/2025"
  },
  {
    "id": "1355546686348329092",
    "pseudo": "TOUTATIX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/12/2025"
  },
  {
    "id": "1356001135353397509",
    "pseudo": "Leo1633.Wild",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/04/2025"
  },
  {
    "id": "1356336804772708544",
    "pseudo": "Hox14200",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/03/2025"
  },
  {
    "id": "1356374837399916755",
    "pseudo": "Ben",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/04/2025"
  },
  {
    "id": "1356379713362460923",
    "pseudo": "ThOrfinn",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2026"
  },
  {
    "id": "1357405447593660496",
    "pseudo": "Prendtontete",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "04/04/2025"
  },
  {
    "id": "1357496015804043434",
    "pseudo": "PAPILLON",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2025"
  },
  {
    "id": "1358066310713442394",
    "pseudo": "TexMex",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "05/04/2025"
  },
  {
    "id": "1358538876989214903",
    "pseudo": "ToToR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2025"
  },
  {
    "id": "1359058793022881805",
    "pseudo": "Fryoux",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/03/2026"
  },
  {
    "id": "1359290698288861344",
    "pseudo": "ARMA_REFORMED",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/08/2025"
  },
  {
    "id": "1359300489027653723",
    "pseudo": "Xber",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/04/2026"
  },
  {
    "id": "1359627407879049298",
    "pseudo": "Blackburn45",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2025"
  },
  {
    "id": "1359953285137699107",
    "pseudo": "Lélio",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/10/2025"
  },
  {
    "id": "1359975455607754944",
    "pseudo": "エメリック🇨🇵🇨🇵",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1359977405652930704",
    "pseudo": "ANTONIO",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/04/2025"
  },
  {
    "id": "1360186483503398923",
    "pseudo": "Razak",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2025"
  },
  {
    "id": "1360272089982177400",
    "pseudo": "toxi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2025"
  },
  {
    "id": "1360287044248670237",
    "pseudo": "Morgan777",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "1360364122402979881",
    "pseudo": "Lercoooooo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2025"
  },
  {
    "id": "1360600054855106781",
    "pseudo": "sharkS_Mimo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/06/2025"
  },
  {
    "id": "1360729614518976513",
    "pseudo": "cA traupode",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/12/2025"
  },
  {
    "id": "1360989809216061552",
    "pseudo": "SayF",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/04/2025"
  },
  {
    "id": "1361483688629768344",
    "pseudo": "LV-_-DANTO",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "06/06/2025"
  },
  {
    "id": "1361682655208407292",
    "pseudo": "papilon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/04/2025"
  },
  {
    "id": "1362095657296330873",
    "pseudo": "Pigs teti",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/07/2025"
  },
  {
    "id": "1362211980827693149",
    "pseudo": "REMJEAN74",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/04/2025"
  },
  {
    "id": "1362785596439003246",
    "pseudo": "kylian",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/01/2026"
  },
  {
    "id": "1363471626582364160",
    "pseudo": "KALASH",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2025"
  },
  {
    "id": "1363544767987847248",
    "pseudo": "Aumaury (Gibus)",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2026"
  },
  {
    "id": "1363591634104619159",
    "pseudo": "Seikho",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2025"
  },
  {
    "id": "1363829367603724411",
    "pseudo": "Latana 8",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2025"
  },
  {
    "id": "1363858749659549878",
    "pseudo": "Tom",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/04/2025"
  },
  {
    "id": "1363863489667399882",
    "pseudo": "Pitivier",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/04/2025"
  },
  {
    "id": "1363926841517150358",
    "pseudo": "Tom",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/04/2025"
  },
  {
    "id": "1363936392878751775",
    "pseudo": "[QaR]frogtrotter",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "31/05/2025"
  },
  {
    "id": "1364116814610567171",
    "pseudo": "Mamactp4078",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/02/2026"
  },
  {
    "id": "1364331777631715349",
    "pseudo": "Sigma",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2025"
  },
  {
    "id": "1364692135831666789",
    "pseudo": "JeMeNommeKirikou",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/07/2025"
  },
  {
    "id": "1364723487834640404",
    "pseudo": "vvlx._",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/02/2026"
  },
  {
    "id": "1364735233081217084",
    "pseudo": "Gfivegfive",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/09/2025"
  },
  {
    "id": "1364969590446227566",
    "pseudo": "Alexis Obrien",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/07/2025"
  },
  {
    "id": "1364974189093589114",
    "pseudo": "tony de la cruz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/05/2025"
  },
  {
    "id": "1365809249317290097",
    "pseudo": "Delta",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/05/2025"
  },
  {
    "id": "1366137907567525999",
    "pseudo": "Jules-lec",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/05/2025"
  },
  {
    "id": "1366162746818953348",
    "pseudo": "Tony27normand",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "06/01/2026"
  },
  {
    "id": "1367263309841043457",
    "pseudo": "HenryLePouceV2",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/08/2025"
  },
  {
    "id": "1367269754955370643",
    "pseudo": "Al balqawi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/05/2025"
  },
  {
    "id": "1367983618932215890",
    "pseudo": "92iCataclysmique.dp",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "1368210473128038563",
    "pseudo": "GUZZ",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "25/03/2026"
  },
  {
    "id": "1368263112968638564",
    "pseudo": "Nathan.dsl59",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/06/2025"
  },
  {
    "id": "1368385874038886550",
    "pseudo": "thorgan1970",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/05/2025"
  },
  {
    "id": "1368626374943834206",
    "pseudo": "Guevarache",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/07/2025"
  },
  {
    "id": "1368679184917991475",
    "pseudo": "Foximimi06",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2026"
  },
  {
    "id": "1368896334941257769",
    "pseudo": "mirabelle",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/05/2025"
  },
  {
    "id": "1369291917702987787",
    "pseudo": "Letho",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/06/2025"
  },
  {
    "id": "1369972978032447541",
    "pseudo": "Thomas west/jeje_76330",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/03/2026"
  },
  {
    "id": "1370109060497670325",
    "pseudo": "Zynoo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/01/2026"
  },
  {
    "id": "1370127172911763528",
    "pseudo": "s7_Nayrox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/06/2025"
  },
  {
    "id": "1370252058447319103",
    "pseudo": "Habib",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1370459522727940231",
    "pseudo": "NOVEMBER_18017",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/07/2025"
  },
  {
    "id": "1370478743956619465",
    "pseudo": "Xxdiabolo60xX2",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/05/2025"
  },
  {
    "id": "1370807931980873769",
    "pseudo": "Driftdove",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/12/2025"
  },
  {
    "id": "1370939478633484432",
    "pseudo": "Melanie",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/07/2025"
  },
  {
    "id": "1371170509017972737",
    "pseudo": "RgxFanXzeroX",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/05/2025"
  },
  {
    "id": "1371224069726408858",
    "pseudo": "Max67250",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "15/02/2026"
  },
  {
    "id": "1371489382984585270",
    "pseudo": "Bepbep",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/02/2026"
  },
  {
    "id": "1371956059798769877",
    "pseudo": "TCHO'ROUX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/07/2025"
  },
  {
    "id": "1372143018575925350",
    "pseudo": "Gwadadaaa",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/08/2025"
  },
  {
    "id": "1372202533132570644",
    "pseudo": "Alech_228",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/02/2026"
  },
  {
    "id": "1373205850503774249",
    "pseudo": "Flaby",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/05/2025"
  },
  {
    "id": "1373267559029145610",
    "pseudo": "djiz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/05/2025"
  },
  {
    "id": "1375025081503186975",
    "pseudo": "DynastY0884",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/07/2025"
  },
  {
    "id": "1375126824463499446",
    "pseudo": "ObiitoUchiwa",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2026"
  },
  {
    "id": "1375132867419705475",
    "pseudo": "Sly",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/06/2025"
  },
  {
    "id": "1375277449557835876",
    "pseudo": "AeRoX-SagaL",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1375434864068788294",
    "pseudo": "Marius tenor",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/05/2025"
  },
  {
    "id": "1375457201568878814",
    "pseudo": "Fouf04",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/05/2025"
  },
  {
    "id": "1376081111054291005",
    "pseudo": "AsTeriiX",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/08/2025"
  },
  {
    "id": "1376098744470339687",
    "pseudo": "KickLeRetour 🇫🇷",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "27/06/2025"
  },
  {
    "id": "1376207044717052055",
    "pseudo": "CriTiKaLsKuF_74",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/05/2025"
  },
  {
    "id": "1376231628455542816",
    "pseudo": "Yous38220",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/07/2025"
  },
  {
    "id": "1376559459383640187",
    "pseudo": "Moulaga920",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/08/2025"
  },
  {
    "id": "1376815858285936700",
    "pseudo": "Coffee [BE]",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/05/2025"
  },
  {
    "id": "1377058536520945704",
    "pseudo": "Lv_938",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/06/2025"
  },
  {
    "id": "1377333720981180437",
    "pseudo": "Clodam",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/05/2025"
  },
  {
    "id": "1377344341630255224",
    "pseudo": "Soldat-Chocobo",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "28/05/2025"
  },
  {
    "id": "1377418977944277024",
    "pseudo": "Erryjr365",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/05/2025"
  },
  {
    "id": "1377786871618207905",
    "pseudo": "m3ns11_Cho7",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/05/2025"
  },
  {
    "id": "1377986668761714799",
    "pseudo": "Ar_bass21",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/05/2025"
  },
  {
    "id": "1378219064375119882",
    "pseudo": "All",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/05/2025"
  },
  {
    "id": "1378705252332601445",
    "pseudo": ".O.F.F.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/06/2025"
  },
  {
    "id": "1378724349024014437",
    "pseudo": "Malcom",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/06/2025"
  },
  {
    "id": "1378951827399381083",
    "pseudo": "Never-fly93",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/06/2025"
  },
  {
    "id": "1379049578170417263",
    "pseudo": "Yop-le-kuhny69",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/06/2025"
  },
  {
    "id": "1379162500116906138",
    "pseudo": "Lucifer",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/06/2025"
  },
  {
    "id": "1379197317256708126",
    "pseudo": "trumm44",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "10/12/2025"
  },
  {
    "id": "1379418107973468220",
    "pseudo": "MacFry",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/09/2025"
  },
  {
    "id": "1379503166860820582",
    "pseudo": "Caporal-Stonart",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/06/2025"
  },
  {
    "id": "1379562826406039552",
    "pseudo": "Bobby",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2026"
  },
  {
    "id": "1379661055180931112",
    "pseudo": "Djohn wich",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/06/2025"
  },
  {
    "id": "1379807885869191252",
    "pseudo": "𝔪𝔰𖤍☄",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/09/2025"
  },
  {
    "id": "1379939343648423960",
    "pseudo": "Grosac24",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/06/2025"
  },
  {
    "id": "1380131141507354666",
    "pseudo": "Spartanxvw",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/06/2025"
  },
  {
    "id": "1380244821867761704",
    "pseudo": "DiggyDog17100",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/06/2025"
  },
  {
    "id": "1380276819756060713",
    "pseudo": "Hupplepuff",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/09/2025"
  },
  {
    "id": "1380606919986909415",
    "pseudo": "Christo",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/10/2025"
  },
  {
    "id": "1380926239308648460",
    "pseudo": "Demo.exe le vrai",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/06/2025"
  },
  {
    "id": "1380977581201035264",
    "pseudo": "Ryuko_EUx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/06/2025"
  },
  {
    "id": "1381018479762870283",
    "pseudo": "Aniki357.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/10/2025"
  },
  {
    "id": "1381075918793084968",
    "pseudo": "xWxnnie",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/11/2025"
  },
  {
    "id": "1381203299264626771",
    "pseudo": "JulRvR",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/06/2025"
  },
  {
    "id": "1381233505383616533",
    "pseudo": "Xamein",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/07/2025"
  },
  {
    "id": "1381277239668117555",
    "pseudo": "Trolling_saw",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/08/2025"
  },
  {
    "id": "1381359436626526248",
    "pseudo": "unread_leak93",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/04/2026"
  },
  {
    "id": "1381424333297156151",
    "pseudo": "Bazouzou",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/07/2025"
  },
  {
    "id": "1381627109876961400",
    "pseudo": "Thomas luciano",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/06/2025"
  },
  {
    "id": "1381672351464296498",
    "pseudo": "Kortiz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/06/2025"
  },
  {
    "id": "1381686714132861110",
    "pseudo": "ImNoOne",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/03/2026"
  },
  {
    "id": "1381721846830989574",
    "pseudo": "SapinFurtif",
    "role": "Soldat",
    "grade": "Caporal",
    "joinDate": "05/07/2025"
  },
  {
    "id": "1381911233975816235",
    "pseudo": "Icataross",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/12/2025"
  },
  {
    "id": "1381977563299315784",
    "pseudo": "MatKkK11",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/06/2025"
  },
  {
    "id": "1381984514167017603",
    "pseudo": "Tonyolion78",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/08/2025"
  },
  {
    "id": "1382068446413586447",
    "pseudo": "Thomas.souvais",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/02/2026"
  },
  {
    "id": "1382359469220167801",
    "pseudo": "DZ_marouanedu13",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "11/06/2025"
  },
  {
    "id": "1382698819053158440",
    "pseudo": "Polak93",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/07/2025"
  },
  {
    "id": "1382754680874205194",
    "pseudo": "Hugo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/04/2026"
  },
  {
    "id": "1382807098907164873",
    "pseudo": "KtrTjrrHQ",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "05/01/2026"
  },
  {
    "id": "1383088015672344706",
    "pseudo": "Xxxxxxxxxxxxxxxxx",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/08/2025"
  },
  {
    "id": "1383187309024903200",
    "pseudo": "Lunatic_Charo78",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "21/06/2025"
  },
  {
    "id": "1383412217721917470",
    "pseudo": "Marco",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2026"
  },
  {
    "id": "1383424629837660352",
    "pseudo": "Pichere",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/07/2025"
  },
  {
    "id": "1383508715277123787",
    "pseudo": "MALBOrogame",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/06/2025"
  },
  {
    "id": "1383538490322583643",
    "pseudo": "ObsCur_tigers",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/06/2025"
  },
  {
    "id": "1383575508620541983",
    "pseudo": "[7CP★] Wendyrectionbxl",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2025"
  },
  {
    "id": "1383831872781684836",
    "pseudo": "Morlban",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/09/2025"
  },
  {
    "id": "1384920573221802084",
    "pseudo": "RomanoPellegrini",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/07/2025"
  },
  {
    "id": "1386446635684597972",
    "pseudo": "rem's",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/06/2025"
  },
  {
    "id": "1386681908527763546",
    "pseudo": "Leo Leo Leo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/07/2025"
  },
  {
    "id": "1386818134543171654",
    "pseudo": "nitro",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/07/2025"
  },
  {
    "id": "1387208968945799339",
    "pseudo": "Davis Stein",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/07/2025"
  },
  {
    "id": "1387376346694549524",
    "pseudo": "max",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/06/2025"
  },
  {
    "id": "1387493139526189066",
    "pseudo": "Evan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/03/2026"
  },
  {
    "id": "1387832700597178450",
    "pseudo": "zMiThix-",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/06/2025"
  },
  {
    "id": "1387940443437793310",
    "pseudo": "mvtrix",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/06/2025"
  },
  {
    "id": "1388102185673298052",
    "pseudo": "Simonrisson",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/06/2025"
  },
  {
    "id": "1388132861772697803",
    "pseudo": "LETAZ07",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/02/2026"
  },
  {
    "id": "1388571972446982257",
    "pseudo": "Le_Pinozore",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/08/2025"
  },
  {
    "id": "1388588937018081292",
    "pseudo": "Kaiju47",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/07/2025"
  },
  {
    "id": "1388596211669274688",
    "pseudo": "Serveur33",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/07/2025"
  },
  {
    "id": "1388630918092034228",
    "pseudo": "popotier",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/06/2025"
  },
  {
    "id": "1388880147045810208",
    "pseudo": "MikeKeim",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/06/2025"
  },
  {
    "id": "1389301276637925439",
    "pseudo": "Warmachine72k",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/06/2025"
  },
  {
    "id": "1389316555795595467",
    "pseudo": "Mabi51",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/07/2025"
  },
  {
    "id": "1389335593078624286",
    "pseudo": "Mamactp4078",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/06/2025"
  },
  {
    "id": "1389353183716839434",
    "pseudo": "Buuck",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/09/2025"
  },
  {
    "id": "1389998317110427678",
    "pseudo": "Vasseur-19",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/12/2025"
  },
  {
    "id": "1390127418777272320",
    "pseudo": "Billy kidow/ BLACKBULL_74",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/12/2025"
  },
  {
    "id": "1390412572808708179",
    "pseudo": "[SGT] Wata Mwaka",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/11/2025"
  },
  {
    "id": "1390711854661374043",
    "pseudo": "Warkatek Legend",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/07/2025"
  },
  {
    "id": "1390883851890327592",
    "pseudo": "𝕾𝖈𝖆𝖗𝖋𝖆𝖈𝖊",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/09/2025"
  },
  {
    "id": "1391129739217076326",
    "pseudo": "y508850",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/07/2025"
  },
  {
    "id": "1391422895854714960",
    "pseudo": "Areox",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/07/2025"
  },
  {
    "id": "1391480559183724665",
    "pseudo": "Retributor",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "06/07/2025"
  },
  {
    "id": "1391872757339521074",
    "pseudo": "julien",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/07/2025"
  },
  {
    "id": "1392149886887133287",
    "pseudo": "Babasz42",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/07/2025"
  },
  {
    "id": "1392155633561768079",
    "pseudo": "anto",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/07/2025"
  },
  {
    "id": "1392205764889677975",
    "pseudo": "XxAldinioxX",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/07/2025"
  },
  {
    "id": "1392263618795409426",
    "pseudo": "Agb_Josko",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/07/2025"
  },
  {
    "id": "1392422798584184852",
    "pseudo": "N0D-D0G",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "10/07/2025"
  },
  {
    "id": "1392482061264093345",
    "pseudo": "Teo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/07/2025"
  },
  {
    "id": "1392529394794364928",
    "pseudo": "John.maverick12",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/07/2025"
  },
  {
    "id": "1392782630843580436",
    "pseudo": "Momo28",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/03/2026"
  },
  {
    "id": "1392939764574851087",
    "pseudo": "RunningMan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/04/2026"
  },
  {
    "id": "1392949741452660767",
    "pseudo": "[L.B.N] Thierry-past",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/09/2025"
  },
  {
    "id": "1393295001735139400",
    "pseudo": "Lnsk91",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/07/2025"
  },
  {
    "id": "1394075048976846868",
    "pseudo": "MYTAKU_✞",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/10/2025"
  },
  {
    "id": "1394292488562282637",
    "pseudo": "C0l0nel ntp",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/07/2025"
  },
  {
    "id": "1394295850682810498",
    "pseudo": "Picrate",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/03/2026"
  },
  {
    "id": "1394311112987508897",
    "pseudo": "Chacal",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/10/2025"
  },
  {
    "id": "1394356923402555513",
    "pseudo": "ZOKROZ   ⛧",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/04/2026"
  },
  {
    "id": "1394487778212974664",
    "pseudo": "Math6k0",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/02/2026"
  },
  {
    "id": "1394684458329837629",
    "pseudo": "Wepelo69",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/11/2025"
  },
  {
    "id": "1395100994521661610",
    "pseudo": "helen_1972.ll_71010",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/08/2025"
  },
  {
    "id": "1395437336967249983",
    "pseudo": "Smurfii-27",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/07/2025"
  },
  {
    "id": "1395465079255990353",
    "pseudo": "sebastien2083",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/07/2025"
  },
  {
    "id": "1395561549938163792",
    "pseudo": "ZlatanQLF",
    "role": "Soldat",
    "grade": "Caporal-Chef",
    "joinDate": "18/07/2025"
  },
  {
    "id": "1395692813433438269",
    "pseudo": "Ballantines",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/07/2025"
  },
  {
    "id": "1395788485675192381",
    "pseudo": "Bloodymoon",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/01/2026"
  },
  {
    "id": "1396180890463244420",
    "pseudo": "Thecruddyboy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/07/2025"
  },
  {
    "id": "1396206504880898118",
    "pseudo": "GHOST",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/07/2025"
  },
  {
    "id": "1396797903820947567",
    "pseudo": "Pierre 57222",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/07/2025"
  },
  {
    "id": "1396884373084836043",
    "pseudo": "ILOKA94",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/07/2025"
  },
  {
    "id": "1397163462177718320",
    "pseudo": "rudy54000",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/07/2025"
  },
  {
    "id": "1397474968769396800",
    "pseudo": "Rollex958",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/07/2025"
  },
  {
    "id": "1397503242413539394",
    "pseudo": "Spowny",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/03/2026"
  },
  {
    "id": "1397729648015577188",
    "pseudo": "Fabz__gn",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/04/2026"
  },
  {
    "id": "1398053068603658250",
    "pseudo": "The Ghost",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/07/2025"
  },
  {
    "id": "1398961019664990343",
    "pseudo": "Léandre",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/07/2025"
  },
  {
    "id": "1399010958520619139",
    "pseudo": "Joe Mama",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "27/07/2025"
  },
  {
    "id": "1399028407035105451",
    "pseudo": "Blindtom",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/04/2026"
  },
  {
    "id": "1399444088482173059",
    "pseudo": "Freemyfazmire",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "30/09/2025"
  },
  {
    "id": "1399599874600599594",
    "pseudo": "dorothy_1961.zr_31652",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/07/2025"
  },
  {
    "id": "1400074428750233711",
    "pseudo": "KleM 343TeaM",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "30/07/2025"
  },
  {
    "id": "1400173195268460575",
    "pseudo": "arrow5sea",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/04/2026"
  },
  {
    "id": "1400540571675918423",
    "pseudo": "Supersix33",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/07/2025"
  },
  {
    "id": "1400828835477323972",
    "pseudo": "AlexOne23",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/12/2025"
  },
  {
    "id": "1400857587737428092",
    "pseudo": "Dawsonfh5",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/02/2026"
  },
  {
    "id": "1401252828017721540",
    "pseudo": "Melka",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/08/2025"
  },
  {
    "id": "1401633685421424680",
    "pseudo": "Antoineoklm",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/12/2025"
  },
  {
    "id": "1402046540276695101",
    "pseudo": "Doudou",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "04/08/2025"
  },
  {
    "id": "1402673740021760072",
    "pseudo": "Helios",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/10/2025"
  },
  {
    "id": "1402786428689322004",
    "pseudo": "CPT_Iceman",
    "role": "Cadre",
    "grade": "Capitaine",
    "joinDate": "07/08/2025"
  },
  {
    "id": "1403097853504651304",
    "pseudo": "batman62",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/01/2026"
  },
  {
    "id": "1403372451072835657",
    "pseudo": "Val-chenille",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "07/09/2025"
  },
  {
    "id": "1403814364586311700",
    "pseudo": "inojiro",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/02/2026"
  },
  {
    "id": "1404050594443821150",
    "pseudo": "TiffXMath",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/08/2025"
  },
  {
    "id": "1404070134846586941",
    "pseudo": "Mataka",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/08/2025"
  },
  {
    "id": "1404315272873119935",
    "pseudo": "Casseus",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/08/2025"
  },
  {
    "id": "1404329784271437915",
    "pseudo": "Taizo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/08/2025"
  },
  {
    "id": "1404795932666630194",
    "pseudo": "NZ_NyRoz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/08/2025"
  },
  {
    "id": "1404888350435053701",
    "pseudo": "Victor_Riov",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/03/2026"
  },
  {
    "id": "1405241578414669864",
    "pseudo": "NoNoCZ",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/09/2025"
  },
  {
    "id": "1405478273382617128",
    "pseudo": "mX_DiXo",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "14/08/2025"
  },
  {
    "id": "1405495908048703659",
    "pseudo": "[CHF]kyky-fou77",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/08/2025"
  },
  {
    "id": "1405568998677938388",
    "pseudo": "Screw548",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/12/2025"
  },
  {
    "id": "1406017476457795695",
    "pseudo": "Lucas crampon",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2026"
  },
  {
    "id": "1406362794747494421",
    "pseudo": "AK-LEM",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/02/2026"
  },
  {
    "id": "1406363106560442519",
    "pseudo": "Machico25",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "01/03/2026"
  },
  {
    "id": "1406545831401885807",
    "pseudo": "Eldiablo",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/10/2025"
  },
  {
    "id": "1406811738208206929",
    "pseudo": "John marquez / zazoudu30",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/09/2025"
  },
  {
    "id": "1407081865483124826",
    "pseudo": "XIII-ParaBellum",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/01/2026"
  },
  {
    "id": "1407403409623224414",
    "pseudo": "Esteves",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/08/2025"
  },
  {
    "id": "1407493345932214434",
    "pseudo": "Bambiv15",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/12/2025"
  },
  {
    "id": "1407537307418103858",
    "pseudo": "Azox4488",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "20/08/2025"
  },
  {
    "id": "1407712215884107776",
    "pseudo": "nistock78",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/04/2026"
  },
  {
    "id": "1407764801303744582",
    "pseudo": "Major 117",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/12/2025"
  },
  {
    "id": "1407790161193992342",
    "pseudo": "HenryLePouceV3",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/11/2025"
  },
  {
    "id": "1408070748601454653",
    "pseudo": "Bakiidu78",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "14/11/2025"
  },
  {
    "id": "1408541660719087756",
    "pseudo": "FeazyyMKZ",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2026"
  },
  {
    "id": "1408938342145462482",
    "pseudo": "Valentin97354..",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/11/2025"
  },
  {
    "id": "1409136377660051598",
    "pseudo": "Trionfal",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/10/2025"
  },
  {
    "id": "1409446219272552448",
    "pseudo": "Julian",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/08/2025"
  },
  {
    "id": "1409644468134477865",
    "pseudo": "master() of souls",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/09/2025"
  },
  {
    "id": "1409896751292481597",
    "pseudo": "Popey-RPG",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/04/2026"
  },
  {
    "id": "1410274364808626258",
    "pseudo": "dada32k",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/02/2026"
  },
  {
    "id": "1410460867124002918",
    "pseudo": "Taylor Brown",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2026"
  },
  {
    "id": "1410590204208611349",
    "pseudo": "SKYzoFRoz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/09/2025"
  },
  {
    "id": "1410699220788314132",
    "pseudo": "Daless272",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "31/08/2025"
  },
  {
    "id": "1411044446648275097",
    "pseudo": "Viktorhino",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/08/2025"
  },
  {
    "id": "1411082605310509177",
    "pseudo": "K3N71N",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/08/2025"
  },
  {
    "id": "1411873607151521944",
    "pseudo": "Nathael09",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/12/2025"
  },
  {
    "id": "1412173106008686814",
    "pseudo": "Thomas castra",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/03/2026"
  },
  {
    "id": "1412199002291572909",
    "pseudo": "Iyozoh Fujita",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/09/2025"
  },
  {
    "id": "1412423642737934446",
    "pseudo": "dob_session",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "29/03/2026"
  },
  {
    "id": "1413192485521588335",
    "pseudo": "Sgt-margoulin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "04/09/2025"
  },
  {
    "id": "1413243247916089446",
    "pseudo": "rsk_mds",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/09/2025"
  },
  {
    "id": "1413593284185555026",
    "pseudo": "SSF-Sano",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/12/2025"
  },
  {
    "id": "1413937732341858315",
    "pseudo": "Mr.k",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/09/2025"
  },
  {
    "id": "1413980028223623320",
    "pseudo": "Justme",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/09/2025"
  },
  {
    "id": "1414333994392227870",
    "pseudo": "Alexisb",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/09/2025"
  },
  {
    "id": "1414676353550254214",
    "pseudo": "Criis05",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/09/2025"
  },
  {
    "id": "1415135444382912562",
    "pseudo": "HANJO",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/11/2025"
  },
  {
    "id": "1416577101292638268",
    "pseudo": "Kiwi",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/11/2025"
  },
  {
    "id": "1416580420396646493",
    "pseudo": "Energy_hibot",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/10/2025"
  },
  {
    "id": "1416688153015615588",
    "pseudo": "Maverick98k",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/11/2025"
  },
  {
    "id": "1418270882731659434",
    "pseudo": "Burak3375",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/09/2025"
  },
  {
    "id": "1418874803254984734",
    "pseudo": "Deace",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/09/2025"
  },
  {
    "id": "1419228907252486275",
    "pseudo": "FatBob",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "29/09/2025"
  },
  {
    "id": "1420409007100661929",
    "pseudo": "saumon2metal",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/03/2026"
  },
  {
    "id": "1420461258141859860",
    "pseudo": "Aaron Guitierez",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2026"
  },
  {
    "id": "1420480378849726505",
    "pseudo": "Smirnoff198",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/04/2026"
  },
  {
    "id": "1420492306062119035",
    "pseudo": "Casius986",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/09/2025"
  },
  {
    "id": "1420841135625994291",
    "pseudo": "Tamheo yz",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/03/2026"
  },
  {
    "id": "1421450770934534195",
    "pseudo": "Zesty51",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/10/2025"
  },
  {
    "id": "1421804839096029184",
    "pseudo": "m4Ss",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/04/2026"
  },
  {
    "id": "1422595124067696750",
    "pseudo": "Ojroucas18",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/09/2025"
  },
  {
    "id": "1423425964867715122",
    "pseudo": "Kind",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2026"
  },
  {
    "id": "1423632160484753428",
    "pseudo": "MandarineDuTieks",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/10/2025"
  },
  {
    "id": "1423738267496481050",
    "pseudo": "Roro5928659",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/02/2026"
  },
  {
    "id": "1423779023963553933",
    "pseudo": "Benitoo78",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/10/2025"
  },
  {
    "id": "1424312366526500915",
    "pseudo": "Terrence.hil",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/01/2026"
  },
  {
    "id": "1424427234973974701",
    "pseudo": "Lashnek",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/11/2025"
  },
  {
    "id": "1425242217660027005",
    "pseudo": "HalfdanII  in",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/10/2025"
  },
  {
    "id": "1426030874306023444",
    "pseudo": "Youcefdz25",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/10/2025"
  },
  {
    "id": "1428046096349003977",
    "pseudo": "Rocket",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/10/2025"
  },
  {
    "id": "1429419609374724158",
    "pseudo": "Bobafive17",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/11/2025"
  },
  {
    "id": "1429856877667291198",
    "pseudo": "Alexandre98532",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/10/2025"
  },
  {
    "id": "1430235765379432610",
    "pseudo": "LE-J",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/02/2026"
  },
  {
    "id": "1430296747774709792",
    "pseudo": "Splifobek",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/02/2026"
  },
  {
    "id": "1430851059848577025",
    "pseudo": "Bic-307",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/10/2025"
  },
  {
    "id": "1431383055024783580",
    "pseudo": "Omar",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2026"
  },
  {
    "id": "1431643624092864547",
    "pseudo": "Math6k00",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/10/2025"
  },
  {
    "id": "1431645879323988020",
    "pseudo": "Math6k00",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/10/2025"
  },
  {
    "id": "1432401051121614912",
    "pseudo": "Bibi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2026"
  },
  {
    "id": "1432464078751793295",
    "pseudo": "Raf_la_demarche",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/04/2026"
  },
  {
    "id": "1432490947286925475",
    "pseudo": "TONIO_BALARAS",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "28/10/2025"
  },
  {
    "id": "1432610407654363147",
    "pseudo": "Lord Bandrita",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "16/11/2025"
  },
  {
    "id": "1432836713884946657",
    "pseudo": "PurpleGoat",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/10/2025"
  },
  {
    "id": "1433943455952015452",
    "pseudo": "♰ 𝐠ℎṧ𝒕/Ƴ𝐨𝑢𝐣𝔦 ♰",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/04/2026"
  },
  {
    "id": "1435037143981490307",
    "pseudo": "Stellaire_MouTon",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "25/11/2025"
  },
  {
    "id": "1435275161627656326",
    "pseudo": "Nours88666",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2026"
  },
  {
    "id": "1435312036882940030",
    "pseudo": "julierangelg39497",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/11/2025"
  },
  {
    "id": "1435843553652904068",
    "pseudo": "LAVACHETTE",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/11/2025"
  },
  {
    "id": "1435983160683794442",
    "pseudo": "Coolmapoule 28",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/11/2025"
  },
  {
    "id": "1436296694135259156",
    "pseudo": "Komar",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/03/2026"
  },
  {
    "id": "1437220195239465043",
    "pseudo": "GT_ralouf",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "08/03/2026"
  },
  {
    "id": "1438143820129767536",
    "pseudo": "Carlos papas",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "23/04/2026"
  },
  {
    "id": "1438303085037617205",
    "pseudo": "peltov66",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/11/2025"
  },
  {
    "id": "1440216970065608824",
    "pseudo": "Viouw67",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/12/2025"
  },
  {
    "id": "1440607367501844553",
    "pseudo": "thomas",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "06/02/2026"
  },
  {
    "id": "1440795028980105309",
    "pseudo": "Nomad",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "21/01/2026"
  },
  {
    "id": "1440896413276835930",
    "pseudo": "safdgwert_51120",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/12/2025"
  },
  {
    "id": "1441336563865751615",
    "pseudo": "Kaizer",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "13/02/2026"
  },
  {
    "id": "1442230003742806159",
    "pseudo": "fin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/11/2025"
  },
  {
    "id": "1443238813815148705",
    "pseudo": "Ustre13gang",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/03/2026"
  },
  {
    "id": "1443319303347765382",
    "pseudo": "Al-capone96",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/03/2026"
  },
  {
    "id": "1444536091318157333",
    "pseudo": "Kirikou69",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/04/2026"
  },
  {
    "id": "1444696778783064207",
    "pseudo": "gcbh",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "13/12/2025"
  },
  {
    "id": "1445145229152882784",
    "pseudo": "Strelok",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/12/2025"
  },
  {
    "id": "1445145646041403536",
    "pseudo": "UP2UB33G33",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/12/2025"
  },
  {
    "id": "1445146788666282179",
    "pseudo": "Mr_Tips",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "24/01/2026"
  },
  {
    "id": "1445468662239723633",
    "pseudo": "c.leclerc9009",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2026"
  },
  {
    "id": "1445881159686029344",
    "pseudo": "So.zonzi",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/04/2026"
  },
  {
    "id": "1445881648888414414",
    "pseudo": "El cabochard01",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "12/04/2026"
  },
  {
    "id": "1446497889584156672",
    "pseudo": "Erik",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2026"
  },
  {
    "id": "1447063783506841744",
    "pseudo": "SamuraiWalker693",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/12/2025"
  },
  {
    "id": "1447194526929125426",
    "pseudo": "Lapache37",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "17/12/2025"
  },
  {
    "id": "1447366202900091003",
    "pseudo": "Paul",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/02/2026"
  },
  {
    "id": "1447393783544021175",
    "pseudo": "pelletier.o66",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/12/2025"
  },
  {
    "id": "1447659666699059403",
    "pseudo": "Tonight260",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/03/2026"
  },
  {
    "id": "1447946300199800862",
    "pseudo": "Ju-lius-88",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/12/2025"
  },
  {
    "id": "1448047482809352355",
    "pseudo": "Libellule",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "13/01/2026"
  },
  {
    "id": "1448230935391895622",
    "pseudo": "Mike5632FR",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/12/2025"
  },
  {
    "id": "1448356015572521171",
    "pseudo": "Furryjack25",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "25/02/2026"
  },
  {
    "id": "1448364016832479376",
    "pseudo": "PilotGuy",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "10/12/2025"
  },
  {
    "id": "1449920446894968855",
    "pseudo": "DAHANOU50",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/12/2025"
  },
  {
    "id": "1451007427922235465",
    "pseudo": "Sultan",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "18/12/2025"
  },
  {
    "id": "1451290262809743403",
    "pseudo": "eM_Drug",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/02/2026"
  },
  {
    "id": "1452082998190014584",
    "pseudo": "Juice",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "22/01/2026"
  },
  {
    "id": "1452311014162038995",
    "pseudo": "Alexis1305.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "21/12/2025"
  },
  {
    "id": "1452751299060695202",
    "pseudo": "Juju",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/12/2025"
  },
  {
    "id": "1452783830543892550",
    "pseudo": "bonnet noir.",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/04/2026"
  },
  {
    "id": "1452794547661967504",
    "pseudo": "BZT-T1",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/12/2025"
  },
  {
    "id": "1453044801569296526",
    "pseudo": "Lbr_Maxime",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/12/2025"
  },
  {
    "id": "1453496538264371292",
    "pseudo": "RimeSixUNO",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "05/01/2026"
  },
  {
    "id": "1454148184782930084",
    "pseudo": "Minimoi 59680",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/12/2025"
  },
  {
    "id": "1454562544693022740",
    "pseudo": "Cpl_Heinrich",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/01/2026"
  },
  {
    "id": "1454665678832406531",
    "pseudo": "Smoky smoky",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2026"
  },
  {
    "id": "1454816435728552131",
    "pseudo": "Rick",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/04/2026"
  },
  {
    "id": "1454908490203005190",
    "pseudo": "jimix",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/02/2026"
  },
  {
    "id": "1456387059580141689",
    "pseudo": "eyota23",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "02/01/2026"
  },
  {
    "id": "1456696336857698571",
    "pseudo": "SpectreNocturne",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "02/01/2026"
  },
  {
    "id": "1457037795754250403",
    "pseudo": "Djeb",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "03/01/2026"
  },
  {
    "id": "1457134663154929788",
    "pseudo": "Yu2S_rS61",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "05/01/2026"
  },
  {
    "id": "1457214340741726311",
    "pseudo": "Zazstarr",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "12/01/2026"
  },
  {
    "id": "1457308977301033075",
    "pseudo": "Mathis",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "26/02/2026"
  },
  {
    "id": "1457380669104590919",
    "pseudo": "tigeradri",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "04/01/2026"
  },
  {
    "id": "1458860190517694642",
    "pseudo": "Atheris [Ash]",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "08/02/2026"
  },
  {
    "id": "1458969097131004038",
    "pseudo": "Task-force-31",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/04/2026"
  },
  {
    "id": "1459184391212367915",
    "pseudo": "Kse_nox",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "17/02/2026"
  },
  {
    "id": "1459686074514276472",
    "pseudo": "Zilosika",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/01/2026"
  },
  {
    "id": "1459725691519242487",
    "pseudo": "Fl0w",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/01/2026"
  },
  {
    "id": "1460051881060470949",
    "pseudo": "Maman_cheh",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/01/2026"
  },
  {
    "id": "1460287042905833542",
    "pseudo": "Hamza",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "25/04/2026"
  },
  {
    "id": "1460359171777237204",
    "pseudo": "Zach",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/01/2026"
  },
  {
    "id": "1460664976107638899",
    "pseudo": "byron00974",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/01/2026"
  },
  {
    "id": "1460670970716225577",
    "pseudo": "Teddy72500",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "18/01/2026"
  },
  {
    "id": "1461125479984529575",
    "pseudo": "SMECTA67110",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/02/2026"
  },
  {
    "id": "1462764390704091156",
    "pseudo": "Greg",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/01/2026"
  },
  {
    "id": "1463044441303683185",
    "pseudo": "NortonSnip",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "31/01/2026"
  },
  {
    "id": "1464172773021843717",
    "pseudo": "Giyu_21",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "28/01/2026"
  },
  {
    "id": "1464349369946869992",
    "pseudo": "Eckam",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2026"
  },
  {
    "id": "1464540956157018143",
    "pseudo": "jesus2paris",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "24/01/2026"
  },
  {
    "id": "1464734004904464627",
    "pseudo": "Bison🦬",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/03/2026"
  },
  {
    "id": "1464994577894084712",
    "pseudo": "Jeanf",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "07/03/2026"
  },
  {
    "id": "1465080728772673683",
    "pseudo": "JamesCarter78",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "02/02/2026"
  },
  {
    "id": "1465290421818097841",
    "pseudo": "Bigball33",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/02/2026"
  },
  {
    "id": "1465644568916656138",
    "pseudo": "MTKA_Ownkil",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "27/01/2026"
  },
  {
    "id": "1466406070447509659",
    "pseudo": "- 𝐴.𝐾 -",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "27/03/2026"
  },
  {
    "id": "1466537895765479516",
    "pseudo": "rizzato2802",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "11/03/2026"
  },
  {
    "id": "1467098691793059904",
    "pseudo": "mel_tolosa31",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "15/02/2026"
  },
  {
    "id": "1467438699473015005",
    "pseudo": "005",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/03/2026"
  },
  {
    "id": "1467470316233035806",
    "pseudo": "NotBadGrinta",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "01/02/2026"
  },
  {
    "id": "1467991968192663676",
    "pseudo": "Zinzin119075",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "01/03/2026"
  },
  {
    "id": "1468318803170431130",
    "pseudo": "TheWarGhost12",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/02/2026"
  },
  {
    "id": "1468337259269980374",
    "pseudo": "Muchacho84",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/03/2026"
  },
  {
    "id": "1469762616468574238",
    "pseudo": "Billy67370",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/02/2026"
  },
  {
    "id": "1469965342628511930",
    "pseudo": "TimothyBanks",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/02/2026"
  },
  {
    "id": "1470910748082573413",
    "pseudo": "Le K",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/02/2026"
  },
  {
    "id": "1471249469034201201",
    "pseudo": "TankiazFr",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "11/02/2026"
  },
  {
    "id": "1472870826582736970",
    "pseudo": "Sward",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/02/2026"
  },
  {
    "id": "1473464095050301441",
    "pseudo": "Fabiobangbang",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "20/02/2026"
  },
  {
    "id": "1473820940881105042",
    "pseudo": "yutoryx",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "19/02/2026"
  },
  {
    "id": "1473984668972875879",
    "pseudo": "HQ Tactical",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2026"
  },
  {
    "id": "1474130275037352007",
    "pseudo": "Jimcho21",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "19/02/2026"
  },
  {
    "id": "1475461388905349121",
    "pseudo": "Mikjss59",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/03/2026"
  },
  {
    "id": "1477566720440008827",
    "pseudo": "DMR308W7",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "17/04/2026"
  },
  {
    "id": "1477767353184813056",
    "pseudo": "Quentin",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "01/03/2026"
  },
  {
    "id": "1479855444569751585",
    "pseudo": "Steys",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "07/03/2026"
  },
  {
    "id": "1480293837594300610",
    "pseudo": "Wannabesae",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "29/03/2026"
  },
  {
    "id": "1482387316730368011",
    "pseudo": "RomGuib",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/03/2026"
  },
  {
    "id": "1482398256762982582",
    "pseudo": "Dommage hilaran 84",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "23/03/2026"
  },
  {
    "id": "1482770900674678874",
    "pseudo": "Ben",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/03/2026"
  },
  {
    "id": "1482848506149470423",
    "pseudo": "Manu4479",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "16/03/2026"
  },
  {
    "id": "1483124562991382644",
    "pseudo": "JosephHall",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "09/04/2026"
  },
  {
    "id": "1483484030048534538",
    "pseudo": "Rondpointxx",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "25/03/2026"
  },
  {
    "id": "1484844902016749579",
    "pseudo": "Christophe 💪",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2026"
  },
  {
    "id": "1485495938888892487",
    "pseudo": "Val-chenille",
    "role": "Soldat",
    "grade": "1ere Classe",
    "joinDate": "23/03/2026"
  },
  {
    "id": "1486129149725773905",
    "pseudo": "Gegethausore",
    "role": "Soldat",
    "grade": "Soldat",
    "joinDate": "30/03/2026"
  },
  {
    "id": "1486442002357686393",
    "pseudo": "Arti",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "03/04/2026"
  },
  {
    "id": "1487850720106385438",
    "pseudo": "jwd",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "30/03/2026"
  },
  {
    "id": "1488273081725358173",
    "pseudo": "Gwentouki",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "10/04/2026"
  },
  {
    "id": "1489741225547268308",
    "pseudo": "ttv_Watis",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "09/04/2026"
  },
  {
    "id": "1491347233700974602",
    "pseudo": "HitAngry",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "20/04/2026"
  },
  {
    "id": "1492592130517110965",
    "pseudo": "Lohyzo",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "14/04/2026"
  },
  {
    "id": "1492741296316743815",
    "pseudo": "enzo0o0coup",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "12/04/2026"
  },
  {
    "id": "1492936684344705277",
    "pseudo": "Fruitozzz",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "12/04/2026"
  },
  {
    "id": "1494069969690951732",
    "pseudo": "Cousoucouse",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "15/04/2026"
  },
  {
    "id": "1495153691458666577",
    "pseudo": "mdl_438",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "18/04/2026"
  },
  {
    "id": "1495195317203632330",
    "pseudo": "RunningMan",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2026"
  },
  {
    "id": "1495203950159335507",
    "pseudo": "Bigeart",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "19/04/2026"
  },
  {
    "id": "1496530032049258637",
    "pseudo": "Samumu32.",
    "role": "Visiteur",
    "grade": "Visiteur",
    "joinDate": "22/04/2026"
  },
  {
    "id": "1498014914730790965",
    "pseudo": "Pan_MaRyo_",
    "role": "Recrue",
    "grade": "Recrue",
    "joinDate": "26/04/2026"
  }
];