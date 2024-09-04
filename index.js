let nome = "Felipão, o Invencível";
let xp  = 8000;
let nivel = "";

switch (true){
    case (xp < 1000):
        nivel = "Ferro";
        break;

    case (xp <= 2000):
        nivel = "Bronze";
        break;

    case (xp <= 5000):
        nivel = "Prata";
        break;

    case (xp <= 7000):
        nivel = "Ouro";
        break;

    case (xp <= 8000):
        nivel = "Platina";
        break;

    case (xp <= 9000):
        nivel = "Ascendente";
        break;

    case (zp <=10000):
        nivel = "Immortal";
    break;
    default:
        nivel = "Radiante";
    break;
}